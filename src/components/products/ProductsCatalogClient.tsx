"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Search,
  CheckCircle2,
  Package,
  Building2,
  MessageSquareQuote,
} from "lucide-react";
import { Locale, ProductItem } from "@/types/cms";
import { PRODUCTS_DATA } from "@/data/products";
import { localePath, t } from "@/lib/i18n";

export function ProductsCatalogClient({
  locale,
  onSelectProduct,
}: {
  locale: Locale;
  onSelectProduct?: (product: ProductItem) => void;
}) {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [category, setCategory] = useState<string>(initialCat);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const paramCat = searchParams.get("category");
    if (paramCat) setCategory(paramCat);
  }, [searchParams]);

  const categories = [
    "all",
    "Rice",
    "Sugar",
    "Edible Oils",
    "Pulses & Spices",
    "Packaged Foods",
    "Frozen Foods",
    "Fertilizer",
    "Minerals & Metals",
  ];

  const categoryLabels: Record<string, { en: string; ar: string }> = {
    all: { en: "All Categories", ar: "جميع الفئات" },
    Rice: { en: "Rice", ar: "الأرز" },
    Sugar: { en: "Sugar", ar: "السكر" },
    "Edible Oils": { en: "Edible Oils", ar: "زيوت الطعام" },
    "Pulses & Spices": { en: "Pulses & Spices", ar: "البقوليات والتوابل" },
    "Packaged Foods": { en: "Packaged Foods", ar: "الأغذية المعبأة" },
    "Frozen Foods": { en: "Frozen Foods", ar: "الأغذية المجمدة" },
    Fertilizer: { en: "Fertilizer", ar: "الأسمدة" },
    "Minerals & Metals": { en: "Minerals & Metals", ar: "المعادن والفلزات" },
  };

  const filtered = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      if (category !== "all") {
        if (category === "Noor Al Arab") {
          if (!p.isNoorAlArab && !p.brandOrDivision?.en.includes("Noor Al Arab")) return false;
        } else if (p.category !== category) {
          return false;
        }
      }
      if (query.trim()) {
        const q = query.toLowerCase();
        const brandStr = p.brandOrDivision ? `${p.brandOrDivision.en} ${p.brandOrDivision.ar}` : "";
        const descStr = p.description ? `${p.description.en} ${p.description.ar}` : "";
        const specStr = p.specifications ? `${p.specifications.en} ${p.specifications.ar}` : "";
        const hay = `${p.name.en} ${p.name.ar} ${p.skuCode} ${p.origins.join(" ")} ${p.category} ${brandStr} ${descStr} ${specStr}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [category, query]);

  const handleEnquireClick = (item: ProductItem) => {
    if (onSelectProduct) {
      onSelectProduct(item);
    }
    // Smooth scroll to #product-enquiry
    const formElem = document.getElementById("product-enquiry");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="catalogue" className="space-y-6 scroll-mt-24">
      {/* FILTER BAR & SEARCH */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gsy-navy/10 bg-white p-4 shadow-sm dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const labelObj = categoryLabels[cat];
            const isSelected = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  isSelected
                    ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep shadow-sm"
                    : "bg-gsy-ivory text-gsy-navy hover:bg-gsy-gold-pale dark:bg-white/5 dark:text-white"
                }`}
              >
                {labelObj ? (locale === "ar" ? labelObj.ar : labelObj.en) : cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute start-3 top-2.5 h-4 w-4 text-gsy-slate/60" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === "ar"
                ? "ابحث عن منتج، رمز SKU، فئة، منشأ..."
                : "Search products, SKUs, categories, origins..."
            }
            className="w-full rounded-lg border border-gsy-navy/20 bg-white py-2 pe-3 ps-9 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
      </div>

      {/* PRODUCT GRID */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-12 text-center dark:border-white/10 dark:bg-gsy-navy">
          <p className="text-sm font-semibold text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "لم يتم العثور على منتجات مطابقة للبحث المحدد."
              : "No products found matching your active filter or search criteria."}
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setQuery("");
            }}
            className="mt-4 rounded-lg bg-gsy-gold-bright px-4 py-2 text-xs font-extrabold text-gsy-navy-deep hover:bg-gsy-gold-light transition"
          >
            {locale === "ar" ? "إعادة تعيين الفلاتر" : "Reset Filters"}
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card transition hover:border-gsy-gold/40 hover:shadow-card-hover dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <div>
                {/* Product Image */}
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gsy-ivory-dark dark:bg-white/5">
                    <Image
                      src={item.image}
                      alt={t(item.name, locale)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/85 via-gsy-navy/20 to-transparent" />
                    
                    <div className="absolute top-3 start-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 font-mono text-[11px] font-bold text-gsy-gold-light backdrop-blur-sm">
                        <Package className="h-3 w-3" />
                        {item.skuCode}
                      </span>
                    </div>

                    <div className="absolute top-3 end-3">
                      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-extrabold text-gsy-navy shadow-sm">
                        {categoryLabels[item.category]?.[locale] ?? item.category}
                      </span>
                    </div>

                    {item.brandOrDivision && (
                      <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gsy-navy/90 px-2.5 py-0.5 text-[11px] font-bold text-gsy-gold-light border border-gsy-gold/30 backdrop-blur-sm">
                          <Building2 className="h-3 w-3" />
                          <span>{t(item.brandOrDivision, locale)}</span>
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  {/* Name */}
                  <h3 className="text-lg font-extrabold text-gsy-navy dark:text-white">
                    {t(item.name, locale)}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/80">
                      {t(item.description, locale)}
                    </p>
                  )}

                  {/* Confirmed Details List */}
                  <dl className="mt-4 space-y-2 border-t border-gsy-navy/10 pt-3 text-xs text-gsy-slate dark:border-white/10 dark:text-white/80">
                    {/* Specifications */}
                    {item.specifications && (
                      <div>
                        <dt className="inline font-bold text-gsy-navy dark:text-white">
                          {locale === "ar" ? "المواصفات: " : "Specifications: "}
                        </dt>
                        <dd className="inline text-gsy-slate dark:text-white/80">
                          {t(item.specifications, locale)}
                        </dd>
                      </div>
                    )}

                    {/* Origins */}
                    {item.origins && item.origins.length > 0 && (
                      <div>
                        <dt className="inline font-bold text-gsy-navy dark:text-white">
                          {locale === "ar" ? "بلد المنشأ المعتمد: " : "Origin: "}
                        </dt>
                        <dd className="inline">{item.origins.join(", ")}</dd>
                      </div>
                    )}

                    {/* Available Markets */}
                    {item.destinations && (
                      <div>
                        <dt className="inline font-bold text-gsy-navy dark:text-white">
                          {locale === "ar" ? "الأسواق المتاحة: " : "Available Markets: "}
                        </dt>
                        <dd className="inline">{t(item.destinations, locale)}</dd>
                      </div>
                    )}

                    {/* Packaging */}
                    {item.packaging && (
                      <div>
                        <dt className="inline font-bold text-gsy-navy dark:text-white">
                          {locale === "ar" ? "التعبئة والشحن: " : "Packaging: "}
                        </dt>
                        <dd className="inline">{t(item.packaging, locale)}</dd>
                      </div>
                    )}
                  </dl>

                  {/* Verified Certifications */}
                  {item.certifications && item.certifications.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300"
                        >
                          <CheckCircle2 className="h-2.5 w-2.5" />
                          <span>{cert}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gsy-navy/10 bg-gsy-ivory/50 px-6 py-3.5 dark:border-white/10 dark:bg-white/5">
                <Link
                  href={localePath(locale, `/businesses/${item.divisionSlug}`)}
                  className="text-xs font-bold text-gsy-navy hover:text-gsy-gold dark:text-white dark:hover:text-gsy-gold-light transition"
                >
                  {locale === "ar" ? "تفاصيل القطاع" : "View Division"}
                </Link>

                <button
                  type="button"
                  onClick={() => handleEnquireClick(item)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gsy-gold-bright px-3.5 py-1.5 text-xs font-extrabold text-gsy-navy-deep hover:bg-gsy-gold-light transition shadow-sm"
                >
                  <MessageSquareQuote className="h-3.5 w-3.5" />
                  <span>{locale === "ar" ? "الاستفسار عن المنتج" : "Enquire About a Product"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
