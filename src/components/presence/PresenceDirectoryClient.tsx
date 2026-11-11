"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { Locale, MarketStatus, WorldRegion } from "@/types/cms";
import { COUNTRIES_DATA } from "@/data/countries";
import { StatusBadge } from "@/components/shared/GlobalPresenceMap";
import { localePath, t } from "@/lib/i18n";

export function PresenceDirectoryClient({ locale }: { locale: Locale }) {
  const [regionFilter, setRegionFilter] = useState<"all" | WorldRegion>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | MarketStatus>("all");
  const [search, setSearch] = useState("");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const filtered = useMemo(() => {
    return COUNTRIES_DATA.filter((c) => {
      if (regionFilter !== "all" && c.region !== regionFilter) return false;
      if (statusFilter !== "all" && c.status !== statusFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const hay = `${c.name} ${c.name_ar} ${c.office.city} ${c.role.en} ${c.role.ar}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [regionFilter, statusFilter, search]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-2xl border border-gsy-navy/10 bg-white p-4 shadow-sm sm:grid-cols-3 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div>
          <label
            htmlFor="presence-region"
            className="block text-[11px] font-bold uppercase text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "الإقليم" : "Region"}
          </label>
          <select
            id="presence-region"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value as "all" | WorldRegion)}
            className="mt-1 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">{locale === "ar" ? "جميع الأقاليم" : "All Regions"}</option>
            <option value="Middle East">Middle East (GCC)</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="presence-status"
            className="block text-[11px] font-bold uppercase text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "الحالة" : "Market Status"}
          </label>
          <select
            id="presence-status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as "all" | MarketStatus)}
            className="mt-1 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">{locale === "ar" ? "جميع الحالات (28)" : "All Statuses (28)"}</option>
            <option value="live">{locale === "ar" ? "نشط (Live)" : "Live (7)"}</option>
            <option value="sourcing">{locale === "ar" ? "توريد (Sourcing)" : "Sourcing (China)"}</option>
            <option value="launching">{locale === "ar" ? "قيد الإطلاق (Launching)" : "Launching (Tanzania)"}</option>
            <option value="planned">{locale === "ar" ? "مخطط (Planned)" : "Planned (2027–2030)"}</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="presence-search"
            className="block text-[11px] font-bold uppercase text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "بحث" : "Search country or role"}
          </label>
          <div className="relative mt-1">
            <Search className="pointer-events-none absolute start-3 top-2.5 h-4 w-4 text-gsy-slate/60" />
            <input
              id="presence-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={locale === "ar" ? "الإمارات، تنزانيا، كينيا..." : "UAE, Tanzania, Kenya..."}
              className="w-full rounded-lg border border-gsy-navy/20 bg-white py-2 pe-3 ps-9 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((country) => (
          <Link
            key={country.slug}
            href={localePath(locale, `/presence/${country.slug}`)}
            className="group flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gsy-gold/40 hover:shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl" aria-hidden="true">
                  {country.flag}
                </span>
                <StatusBadge status={country.status} locale={locale} />
              </div>

              <h3 className="mt-3 text-base font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                {locale === "ar" ? country.name_ar : country.name}
              </h3>

              <p className="mt-0.5 text-[11px] font-semibold text-gsy-gold dark:text-gsy-gold-light">
                {country.region} • {country.entry_year}
              </p>

              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {t(country.role, locale)}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gsy-navy/10 pt-3 text-xs font-bold text-gsy-navy dark:border-white/10 dark:text-white">
              <span>{country.office.city}</span>
              <ArrowIcon className="h-3.5 w-3.5 text-gsy-gold dark:text-gsy-gold-light" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

