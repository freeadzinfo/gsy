"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Briefcase, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { Locale } from "@/types/cms";
import { CAREERS_DATA } from "@/data/careers";
import { localePath, t } from "@/lib/i18n";

export function CareersClient({ locale }: { locale: Locale }) {
  const [department, setDepartment] = useState("all");
  const [country, setCountry] = useState("all");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const departments = Array.from(new Set(CAREERS_DATA.map((j) => j.department)));
  const countries = Array.from(new Set(CAREERS_DATA.map((j) => j.countrySlug)));

  const filtered = useMemo(() => {
    return CAREERS_DATA.filter((job) => {
      if (department !== "all" && job.department !== department) return false;
      if (country !== "all" && job.countrySlug !== country) return false;
      return true;
    });
  }, [department, country]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gsy-navy/10 bg-white p-4 shadow-sm dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="min-w-[200px] flex-1">
          <label
            htmlFor="career-dept"
            className="block text-[11px] font-bold uppercase text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "القسم / القطاع" : "Department / Division"}
          </label>
          <select
            id="career-dept"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">{locale === "ar" ? "جميع الأقسام" : "All Departments"}</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-[200px] flex-1">
          <label
            htmlFor="career-country"
            className="block text-[11px] font-bold uppercase text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "الدولة" : "Country"}
          </label>
          <select
            id="career-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">{locale === "ar" ? "جميع الدول" : "All Countries"}</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((job) => (
          <Link
            key={job.slug}
            href={localePath(locale, `/careers/${job.slug}`)}
            className="group flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-gsy-gold/15 px-2.5 py-0.5 text-[11px] font-bold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
                  {job.department}
                </span>
                <span className="text-[11px] font-semibold text-gsy-slate dark:text-white/65">
                  {t(job.experience, locale)}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                {t(job.title, locale)}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/75">
                {t(job.summary, locale)}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gsy-navy/10 pt-3 text-xs font-bold dark:border-white/10">
              <span className="inline-flex items-center gap-1.5 text-gsy-navy dark:text-white">
                <MapPin className="h-3.5 w-3.5 text-gsy-gold" />
                {t(job.location, locale)}
              </span>
              <span className="inline-flex items-center gap-1 text-gsy-gold dark:text-gsy-gold-light">
                <Briefcase className="h-3.5 w-3.5" />
                <span>{locale === "ar" ? "تقديم" : "Apply"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

