"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, CheckCircle2, Package, ArrowRight, ArrowLeft } from "lucide-react";
import { Locale } from "@/types/cms";
import { PRODUCTS_DATA } from "@/data/products";
import { localePath, t } from "@/lib/i18n";

export function ProductsCatalogClient({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [category, setCategory] = useState<string>(initialCat);
  const [query, setQuery] = useState("");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const paramCat = searchParams.get("category");
    if (paramCat) setCategory(paramCat);
  }, [searchParams]);

  const categories = [
    "all",
    "Noor Al Arab",
    "FMCG Staples",
    "Fertilizer",
    "Frozen Foods",
    "Minerals",
    "Metals",
  ];

  const filtered = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = `${p.name.en} ${p.name.ar} ${p.skuCode} ${p.origins.join(" ")} ${p.category}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [category, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gsy-navy/10 bg-white p-4 shadow-sm dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                category === cat
                  ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                  : "bg-gsy-ivory text-gsy-navy hover:bg-gsy-gold-pale dark:bg-white/5 dark:text-white"
              }`}
            >
              {cat === "all" ? (locale === "ar" ? "الكل" : "All Products") : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute start-3 top-2.5 h-4 w-4 text-gsy-slate/60" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === "ar" ? "ابحث عن منتج أو منشأ..." : "Search products, SKUs, origins..."
            }
            className="w-full rounded-lg border border-gsy-navy/20 bg-white py-2 pe-3 ps-9 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                  <Package className="h-3.5 w-3.5" />
                  {item.skuCode}
                </span>
                <span className="rounded-full bg-gsy-ivory px-2.5 py-0.5 text-[11px] font-bold text-gsy-navy dark:bg-white/10 dark:text-white">
                  {item.category}
                </span>
              </div>

              <h2 className="mt-3 text-lg font-extrabold text-gsy-navy dark:text-white">
                {t(item.name, locale)}
              </h2>

              <dl className="mt-3 space-y-1.5 text-xs text-gsy-slate dark:text-white/80">
                <div>
                  <dt className="inline font-bold text-gsy-navy dark:text-white">
                    {locale === "ar" ? "المناشئ: " : "Origins: "}
                  </dt>
                  <dd className="inline">{item.origins.join(", ")}</dd>
                </div>
                <div>
                  <dt className="inline font-bold text-gsy-navy dark:text-white">
                    {locale === "ar" ? "الأسواق: " : "Markets: "}
                  </dt>
                  <dd className="inline">{t(item.destinations, locale)}</dd>
                </div>
                <div>
                  <dt className="inline font-bold text-gsy-navy dark:text-white">
                    {locale === "ar" ? "التعبئة والشحن: " : "Packaging: "}
                  </dt>
                  <dd className="inline">{t(item.packaging, locale)}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300"
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gsy-navy/10 pt-3 text-xs font-bold dark:border-white/10">
              <Link
                href={localePath(locale, `/businesses/${item.divisionSlug}`)}
                className="text-gsy-navy hover:text-gsy-gold dark:text-white dark:hover:text-gsy-gold-light"
              >
                {locale === "ar" ? "تفاصيل القطاع" : "View division"}
              </Link>
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex items-center gap-1 text-gsy-gold hover:underline dark:text-gsy-gold-light"
              >
                <span>{locale === "ar" ? "طلب عرض سعر" : "Enquire"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

