"use client";

import React, { useMemo, useState } from "react";
import { Download, Search, Package } from "lucide-react";
import { Locale } from "@/types/cms";
import { PRODUCTS_DATA } from "@/data/products";
import { t } from "@/lib/i18n";

const PRODUCT_CATEGORIES = [
  { id: "all", label: { en: "All Categories", ar: "جميع الفئات" } },
  { id: "Rice", label: { en: "Rice", ar: "الأرز" } },
  { id: "Sugar", label: { en: "Sugar", ar: "السكر" } },
  { id: "Edible Oils", label: { en: "Edible Oils", ar: "زيوت الطعام" } },
  { id: "Packaged Foods", label: { en: "Packaged Foods", ar: "الأغذية المعبأة" } },
  { id: "Flour", label: { en: "Flour", ar: "الدقيق" } },
  { id: "Pulses", label: { en: "Pulses", ar: "البقوليات" } },
  { id: "Spices", label: { en: "Spices", ar: "التوابل" } },
  { id: "Frozen Foods", label: { en: "Frozen Foods", ar: "الأغذية المجمدة" } },
  { id: "Other", label: { en: "Other approved catalogue items", ar: "أصناف الكتالوج المعتمدة الأخرى" } },
];

function getProductCategory(p: (typeof PRODUCTS_DATA)[number]): string {
  const nameEn = p.name.en.toLowerCase();
  if (nameEn.includes("rice")) return "Rice";
  if (nameEn.includes("sugar")) return "Sugar";
  if (nameEn.includes("oil")) return "Edible Oils";
  if (nameEn.includes("spice")) return "Spices";
  if (nameEn.includes("flour")) return "Flour";
  if (nameEn.includes("pulse")) return "Pulses";
  if (p.category === "Frozen Foods" || nameEn.includes("frozen") || nameEn.includes("poultry") || nameEn.includes("vegetable")) {
    return "Frozen Foods";
  }
  if (nameEn.includes("tomato") || nameEn.includes("pasta") || nameEn.includes("milk") || nameEn.includes("packaged")) {
    return "Packaged Foods";
  }
  return "Other";
}

export function NoorAlArabCatalogInteractive({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [catalogNotice, setCatalogNotice] = useState(false);

  // Present food products from existing Products collection
  const noorItems = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      // Show only food products from the existing collection
      if (
        !p.isNoorAlArab &&
        p.category !== "FMCG Staples" &&
        p.category !== "Frozen Foods" &&
        p.category !== "Rice" &&
        p.category !== "Sugar" &&
        p.category !== "Edible Oils" &&
        p.category !== "Pulses & Spices" &&
        p.category !== "Packaged Foods"
      ) {
        return false;
      }
      const itemCat = getProductCategory(p);
      if (categoryFilter !== "all" && itemCat !== categoryFilter) {
        return false;
      }
      if (query.trim()) {
        const q = query.toLowerCase();
        const text = `${p.name.en} ${p.name.ar} ${p.skuCode} ${p.origins.join(" ")}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [query, categoryFilter]);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
            {locale === "ar" ? "كتالوج المنتجات الغذائية" : "Approved Food Portfolio"}
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "مجموعة منتجاتنا" : "Our Product Range"}
          </h2>
          <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "مجموعة منتجاتنا من قاعدة بيانات المنتجات الحالية المعتمدة. تخضع التشكيلة النهائية المنشورة لاعتماد فريق علامة نور العرب."
              : "Presenting approved products from the existing collection. Filter by category or search SKUs — final published range subject to brand team approval."}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setCatalogNotice(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
        >
          <Download className="h-4 w-4" />
          <span>
            {locale === "ar" ? "تحميل كتالوج المنتجات (PDF تجريبي)" : "Download Catalogue (Demo PDF)"}
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
              ? "معاينة تجريبية: في بيئة الإنتاج، يتم تحميل أحدث ملف PDF معتمد لكتالوج منتجات نور العرب."
              : "Demo preview: In production, this downloads the latest approved Noor Al Arab catalogue PDF."}
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

      {/* Category filters */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-gsy-slate dark:text-white/70">
            {locale === "ar" ? "الفئة:" : "Category:"}
          </span>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoryFilter(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                categoryFilter === cat.id
                  ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                  : "border border-gsy-navy/15 bg-white text-gsy-navy dark:border-white/15 dark:bg-gsy-navy dark:text-white"
              }`}
            >
              {t(cat.label, locale)}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md">
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
      </div>

      {/* Product cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {noorItems.map((item) => {
          const itemCat = getProductCategory(item);
          const catMeta = PRODUCT_CATEGORIES.find((c) => c.id === itemCat);
          return (
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
                  {catMeta ? t(catMeta.label, locale) : item.category}
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
            </div>
          );
        })}

        {noorItems.length === 0 && (
          <div className="rounded-xl border border-dashed border-gsy-navy/20 p-8 text-center sm:col-span-2 lg:col-span-3 dark:border-white/20">
            <p className="text-sm font-semibold text-gsy-slate dark:text-white/70">
              {locale === "ar"
                ? "لا توجد منتجات مسجلة حالياً في هذه الفئة ضمن عينة قاعدة البيانات. التشكيلة الكاملة قيد الاعتماد من فريق العلامة."
                : "No products currently found in this category in the preview dataset. The full catalogue will be available once approved by the Noor Al Arab brand team."}
            </p>
          </div>
        )}
      </div>

      <p className="text-xs text-gsy-slate/80 dark:text-white/60">
        {locale === "ar"
          ? "* عرض المنتجات والأصناف المعتمدة فقط من مجموعة المنتجات الحالية. تخضع التشكيلة النهائية المنشورة لاعتماد فريق علامة نور العرب."
          : "* Displaying only approved products and SKUs from the existing product collection. The final published range must be approved by the Noor Al Arab brand team."}
      </p>
    </section>
  );
}
