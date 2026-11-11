"use client";

import React, { useMemo, useState } from "react";
import { Download, Search, CheckCircle2, Package } from "lucide-react";
import { Locale } from "@/types/cms";
import { PRODUCTS_DATA } from "@/data/products";
import { t } from "@/lib/i18n";

export function NoorAlArabCatalogInteractive({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [certFilter, setCertFilter] = useState("all");
  const [catalogNotice, setCatalogNotice] = useState(false);

  const noorItems = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      if (!p.isNoorAlArab && p.category !== "FMCG Staples" && p.category !== "Frozen Foods") {
        return false;
      }
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      if (certFilter !== "all" && !p.certifications.includes(certFilter)) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const text = `${p.name.en} ${p.name.ar} ${p.skuCode} ${p.origins.join(" ")}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [query, categoryFilter, certFilter]);

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "مجموعة منتجات نور العرب (نحو 1,000 صنف غذائي)"
              : "Product Range Preview (Scaling to 1,000 SKUs)"}
          </h2>
          <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "نماذج من أصناف التجزئة والضيافة الموصولة بقاعدة بيانات المنتجات."
              : "Connected to the central Products CMS collection — filterable by category and certification."}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setCatalogNotice(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
        >
          <Download className="h-4 w-4" />
          <span>
            {locale === "ar" ? "تحميل كتالوج نور العرب (PDF تجريبي)" : "Download Catalogue (Demo PDF)"}
          </span>
        </button>
      </div>

      {catalogNotice && (
        <div
          role="status"
          className="flex items-center justify-between gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
        >
          <span>
            {locale === "ar"
              ? "معاينة تجريبية: سيتم ربط ملف كتالوج نور العرب PDF (1,000 صنف) من نظام إدارة المحتوى عند الإطلاق."
              : "Demo preview: In production, this downloads the latest CMS-hosted Noor Al Arab 1,000-SKU catalogue PDF."}
          </span>
          <button
            type="button"
            onClick={() => setCatalogNotice(false)}
            className="underline"
          >
            {locale === "ar" ? "إغلاق" : "Dismiss"}
          </button>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-gsy-slate dark:text-white/70">
            {locale === "ar" ? "الفئة:" : "Category:"}
          </span>
          {["all", "Noor Al Arab", "FMCG Staples", "Frozen Foods"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                categoryFilter === cat
                  ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                  : "border border-gsy-navy/15 bg-white text-gsy-navy dark:border-white/15 dark:bg-gsy-navy dark:text-white"
              }`}
            >
              {cat === "all" ? (locale === "ar" ? "جميع الفئات" : "All Categories") : cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[240px] flex-1">
            <Search className="pointer-events-none absolute start-3 top-2.5 h-4 w-4 text-gsy-slate/60" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                locale === "ar" ? "ابحث بالاسم أو الرمز أو المنشأ..." : "Search SKU, product or origin..."
              }
              className="w-full rounded-lg border border-gsy-navy/20 bg-white py-2 pe-3 ps-9 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy dark:text-white"
            />
          </div>

          {["all", "Halal", "HACCP", "ISO"].map((cert) => (
            <button
              key={cert}
              type="button"
              onClick={() => setCertFilter(cert)}
              className={`rounded-lg px-3.5 py-2 text-xs font-bold transition ${
                certFilter === cert
                  ? "bg-gsy-gold text-white dark:bg-gsy-gold-light dark:text-gsy-navy-deep"
                  : "border border-gsy-navy/15 bg-white text-gsy-navy dark:border-white/15 dark:bg-gsy-navy dark:text-white"
              }`}
            >
              {cert === "all" ? (locale === "ar" ? "كل الشهادات" : "All Certs") : cert}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {noorItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gsy-navy/10 bg-white p-5 shadow-sm dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
          >
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="inline-flex items-center gap-1 font-mono font-bold text-gsy-gold dark:text-gsy-gold-light">
                <Package className="h-3.5 w-3.5" />
                {item.skuCode}
              </span>
              <span className="rounded bg-gsy-ivory px-2 py-0.5 text-[10px] font-bold text-gsy-navy dark:bg-white/10 dark:text-white">
                {item.category}
              </span>
            </div>
            <h3 className="mt-2.5 text-base font-extrabold text-gsy-navy dark:text-white">
              {t(item.name, locale)}
            </h3>
            <p className="mt-1.5 text-xs text-gsy-slate dark:text-white/75">
              <strong>{locale === "ar" ? "التعبئة:" : "Packs:"}</strong> {t(item.packaging, locale)}
            </p>
            <p className="mt-1 text-xs text-gsy-slate dark:text-white/75">
              <strong>{locale === "ar" ? "المنشأ:" : "Origins:"}</strong> {item.origins.join(", ")}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.certifications.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300"
                >
                  <CheckCircle2 className="h-3 w-3" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

