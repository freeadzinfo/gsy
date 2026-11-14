"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Calendar,
  Layers,
  Clock,
  ArrowRight,
  ArrowLeft,
  XCircle,
} from "lucide-react";
import { Locale } from "@/types/cms";
import { CAREERS_DATA } from "@/data/careers";
import { localePath, t } from "@/lib/i18n";

export function CareersClient({ locale }: { locale: Locale }) {
  const [department, setDepartment] = useState("all");
  const [country, setCountry] = useState("all");
  const [city, setCity] = useState("all");
  const [employmentType, setEmploymentType] = useState("all");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const departments = useMemo(
    () => Array.from(new Set(CAREERS_DATA.map((j) => j.department))),
    []
  );

  const countries = useMemo(() => {
    const list: string[] = [];
    CAREERS_DATA.forEach((j) => {
      const c = j.country ? j.country.en : j.countrySlug.toUpperCase();
      if (!list.includes(c)) list.push(c);
    });
    return list;
  }, []);

  const cities = useMemo(() => {
    const list: string[] = [];
    CAREERS_DATA.forEach((j) => {
      if (j.city && !list.includes(j.city.en)) list.push(j.city.en);
    });
    return list;
  }, []);

  const employmentTypes = useMemo(() => {
    const list: string[] = [];
    CAREERS_DATA.forEach((j) => {
      if (j.employmentType && !list.includes(j.employmentType.en)) {
        list.push(j.employmentType.en);
      }
    });
    return list;
  }, []);

  const filtered = useMemo(() => {
    return CAREERS_DATA.filter((job) => {
      if (department !== "all" && job.department !== department) return false;
      if (country !== "all") {
        const c = job.country ? job.country.en : job.countrySlug.toUpperCase();
        if (c !== country) return false;
      }
      if (city !== "all") {
        const ci = job.city ? job.city.en : "";
        if (ci !== city) return false;
      }
      if (employmentType !== "all") {
        if (job.employmentType.en !== employmentType) return false;
      }
      return true;
    });
  }, [department, country, city, employmentType]);

  const hasActiveFilters =
    department !== "all" ||
    country !== "all" ||
    city !== "all" ||
    employmentType !== "all";

  const resetFilters = () => {
    setDepartment("all");
    setCountry("all");
    setCity("all");
    setEmploymentType("all");
  };

  return (
    <div className="space-y-6">
      {/* 4 FILTER CONTROLS: Department, Country, City, Employment Type */}
      <div className="grid gap-4 rounded-2xl border border-gsy-navy/10 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        {/* Department Filter */}
        <div>
          <label
            htmlFor="career-dept"
            className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "القسم / التخصص" : "Department"}
          </label>
          <select
            id="career-dept"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-xs font-semibold text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">
              {locale === "ar" ? "جميع الأقسام" : "All Departments"}
            </option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Country Filter */}
        <div>
          <label
            htmlFor="career-country"
            className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "الدولة" : "Country"}
          </label>
          <select
            id="career-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-xs font-semibold text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">
              {locale === "ar" ? "جميع الدول" : "All Countries"}
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div>
          <label
            htmlFor="career-city"
            className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "المدينة" : "City"}
          </label>
          <select
            id="career-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-xs font-semibold text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">
              {locale === "ar" ? "جميع المدن" : "All Cities"}
            </option>
            {cities.map((ci) => (
              <option key={ci} value={ci}>
                {ci}
              </option>
            ))}
          </select>
        </div>

        {/* Employment Type Filter */}
        <div>
          <label
            htmlFor="career-type"
            className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "نوع التوظيف" : "Employment Type"}
          </label>
          <select
            id="career-type"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-xs font-semibold text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">
              {locale === "ar" ? "جميع أنواع التوظيف" : "All Employment Types"}
            </option>
            {employmentTypes.map((et) => (
              <option key={et} value={et}>
                {et}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ACTIVE FILTERS BAR / COUNT */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-gsy-slate dark:text-white/70">
        <span>
          {locale === "ar"
            ? `عرض ${filtered.length} وظيفة شاغرة`
            : `Showing ${filtered.length} available opportunities`}
        </span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-1 font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
          >
            <XCircle className="h-3.5 w-3.5" />
            <span>{locale === "ar" ? "إعادة تعيين الفلاتر" : "Reset Filters"}</span>
          </button>
        )}
      </div>

      {/* JOBS GRID / EMPTY STATE */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-12 text-center shadow-card dark:border-white/10 dark:bg-gsy-navy">
          <Briefcase className="mx-auto h-10 w-10 text-gsy-slate/50 dark:text-white/40" />
          <h3 className="mt-4 text-base font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "لا توجد وظائف شاغرة حالياً تطابق اختيارك."
              : "No current openings match your selection."}
          </h3>
          <p className="mt-1.5 text-xs text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "يرجى التحقق مرة أخرى لاحقاً للاطلاع على الفرص المستقبلية أو تقديم استفسار مهني عام."
              : "Please check again for future opportunities or submit a general career enquiry below."}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 rounded-lg bg-gsy-gold-bright px-4 py-2 text-xs font-extrabold text-gsy-navy-deep hover:bg-gsy-gold-light transition"
          >
            {locale === "ar" ? "عرض جميع الوظائف" : "View All Open Roles"}
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((job) => (
            <div
              key={job.slug}
              className="group flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 hover:shadow-card-hover dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <div>
                {/* Header badges: Department & Employment Type */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-gsy-navy/5 px-3 py-1 text-[11px] font-extrabold text-gsy-navy dark:bg-white/10 dark:text-white">
                    {job.department}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                    <Clock className="h-3 w-3" />
                    <span>{t(job.employmentType, locale)}</span>
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="mt-4 text-lg font-extrabold text-gsy-navy dark:text-white group-hover:text-gsy-gold dark:group-hover:text-gsy-gold-light transition">
                  {t(job.title, locale)}
                </h3>

                {/* Location: Country & City */}
                <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-gsy-slate dark:text-white/75">
                  <span className="inline-flex items-center gap-1.5 font-semibold">
                    <MapPin className="h-3.5 w-3.5 text-gsy-gold" />
                    <span>
                      {job.city ? t(job.city, locale) : ""},{" "}
                      {job.country ? t(job.country, locale) : t(job.location, locale)}
                    </span>
                  </span>

                  {(job.seniorityLevel || job.experience) && (
                    <span className="inline-flex items-center gap-1.5 font-semibold">
                      <Layers className="h-3.5 w-3.5 text-gsy-gold" />
                      <span>
                        {job.seniorityLevel
                          ? t(job.seniorityLevel, locale)
                          : t(job.experience, locale)}
                      </span>
                    </span>
                  )}
                </div>

                {/* Short description */}
                <p className="mt-3 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/80">
                  {t(job.summary, locale)}
                </p>
              </div>

              {/* Footer: Application closing date & CTA */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gsy-navy/10 pt-4 text-xs dark:border-white/10">
                {job.closingDate && (
                  <span className="inline-flex items-center gap-1.5 font-medium text-gsy-slate dark:text-white/70">
                    <Calendar className="h-3.5 w-3.5 text-gsy-gold" />
                    <span>
                      {locale === "ar" ? "تاريخ الإغلاق: " : "Closing date: "}
                      <strong>{t(job.closingDate, locale)}</strong>
                    </span>
                  </span>
                )}

                <Link
                  href={localePath(locale, `/careers/${job.slug}`)}
                  className="ms-auto inline-flex items-center gap-1.5 rounded-lg bg-gsy-navy px-3.5 py-2 text-xs font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light transition shadow-sm"
                >
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{locale === "ar" ? "عرض التفاصيل والتقديم" : "View Details"}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
