"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Navigation,
  Phone,
  Search,
  Tag,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { BrandSlug, Locale } from "@/types/cms";
import { STORES_DATA, SUPERMARKET_BRANDS, WEEKLY_OFFERS } from "@/data/supermarkets";
import { localePath, t } from "@/lib/i18n";

export function SupermarketStoreFinder({
  locale,
  lockedBrand,
  lockedCountry,
}: {
  locale: Locale;
  lockedBrand?: BrandSlug;
  lockedCountry?: "UAE" | "Malaysia";
}) {
  const [brandFilter, setBrandFilter] = useState<string>(lockedBrand ?? "all");
  const [countryFilter, setCountryFilter] = useState<string>(lockedCountry ?? "all");
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [selectedStoreId, setSelectedStoreId] = useState<string>(STORES_DATA[0].id);

  const cities = useMemo(() => {
    const set = new Set<string>();
    STORES_DATA.forEach((s) => {
      if (countryFilter === "all" || s.country === countryFilter) {
        set.add(s.city);
      }
    });
    return Array.from(set);
  }, [countryFilter]);

  const filteredStores = useMemo(() => {
    return STORES_DATA.filter((s) => {
      if (brandFilter !== "all" && s.brand !== brandFilter) return false;
      if (countryFilter !== "all" && s.country !== countryFilter) return false;
      if (cityFilter !== "all" && s.city !== cityFilter) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = `${s.store_name} ${s.city} ${s.area} ${s.address}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [brandFilter, countryFilter, cityFilter, query]);

  const selectedStore =
    filteredStores.find((s) => s.id === selectedStoreId) ?? filteredStores[0];

  const brandName = (slug: BrandSlug) => {
    const b = SUPERMARKET_BRANDS.find((item) => item.slug === slug);
    return b ? t(b.name, locale) : slug;
  };

  return (
    <div className="space-y-6">
      {/* Filter Toolbar */}
      <div className="grid gap-3 rounded-2xl border border-gsy-navy/10 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        {!lockedBrand && (
          <div>
            <label
              htmlFor="store-brand"
              className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
            >
              {locale === "ar" ? "العلامة التجارية" : "Brand"}
            </label>
            <select
              id="store-brand"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
            >
              <option value="all">{locale === "ar" ? "كل العلامات" : "All Brands (3)"}</option>
              {SUPERMARKET_BRANDS.map((b) => (
                <option key={b.slug} value={b.slug}>
                  {t(b.name, locale)}
                </option>
              ))}
            </select>
          </div>
        )}

        {!lockedCountry && (
          <div>
            <label
              htmlFor="store-country"
              className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
            >
              {locale === "ar" ? "الدولة" : "Country"}
            </label>
            <select
              id="store-country"
              value={countryFilter}
              onChange={(e) => {
                setCountryFilter(e.target.value);
                setCityFilter("all");
              }}
              className="mt-1 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
            >
              <option value="all">{locale === "ar" ? "الإمارات وماليزيا" : "All Countries"}</option>
              <option value="UAE">{locale === "ar" ? "الإمارات" : "UAE"}</option>
              <option value="Malaysia">{locale === "ar" ? "ماليزيا" : "Malaysia"}</option>
            </select>
          </div>
        )}

        <div>
          <label
            htmlFor="store-city"
            className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "المدينة" : "City"}
          </label>
          <select
            id="store-city"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            <option value="all">{locale === "ar" ? "كل المدن" : "All Cities"}</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="store-search"
            className="block text-[11px] font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70"
          >
            {locale === "ar" ? "بحث بالمنطقة" : "Search area or branch"}
          </label>
          <div className="relative mt-1">
            <Search className="pointer-events-none absolute start-3 top-2.5 h-4 w-4 text-gsy-slate/60" />
            <input
              id="store-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={locale === "ar" ? "البرشاء، الكرامة، كوالالمبور..." : "Al Barsha, Karama, KL..."}
              className="w-full rounded-lg border border-gsy-navy/20 bg-white py-2 pe-3 ps-9 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Interactive Map + Store List */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Store List */}
        <div className="space-y-3 lg:col-span-7">
          {filteredStores.length === 0 ? (
            <div className="rounded-xl border border-gsy-navy/10 bg-white p-8 text-center text-sm text-gsy-slate dark:border-white/10 dark:bg-gsy-navy dark:text-white/75">
              {locale === "ar"
                ? "لا توجد متاجر مطابقة للفلاتر الحالية."
                : "No stores match your current filter selection."}
            </div>
          ) : (
            filteredStores.map((store) => {
              const isSelected = selectedStore?.id === store.id;
              return (
                <div
                  key={store.id}
                  onClick={() => setSelectedStoreId(store.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition sm:p-5 ${
                    isSelected
                      ? "border-gsy-gold bg-white shadow-card dark:border-gsy-gold-light dark:bg-gsy-navy-mid"
                      : "border-gsy-navy/10 bg-white hover:border-gsy-gold/40 dark:border-white/10 dark:bg-gsy-navy"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded bg-gsy-navy/10 px-2 py-0.5 text-[11px] font-bold text-gsy-navy dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
                          {brandName(store.brand)}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                            store.status === "open"
                              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                              : "bg-amber-500/15 text-amber-800 dark:text-amber-300"
                          }`}
                        >
                          {store.status === "open"
                            ? locale === "ar"
                              ? "مفتوح"
                              : "Open"
                            : locale === "ar"
                              ? "قريباً"
                              : "Coming Soon"}
                        </span>
                        <span className="text-[11px] font-medium text-gsy-slate dark:text-white/60">
                          {store.format === "hypermarket" ? "Hypermarket" : "Supermarket"}
                        </span>
                      </div>
                      <h3 className="mt-2 text-base font-extrabold text-gsy-navy dark:text-white">
                        {locale === "ar" ? store.store_name_ar : store.store_name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-2 text-xs text-gsy-slate sm:grid-cols-2 dark:text-white/80">
                    <p className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                      <span>{locale === "ar" ? store.address_ar : store.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                      <span>{locale === "ar" ? store.opening_hours_ar : store.opening_hours}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                      <span dir="ltr">{store.phone}</span>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {store.services.map((srv) => (
                        <span
                          key={srv}
                          className="rounded bg-gsy-ivory px-2 py-0.5 text-[10px] font-semibold text-gsy-navy dark:bg-white/10 dark:text-white/85"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gsy-navy/10 pt-3 dark:border-white/10">
                    <Link
                      href={localePath(locale, `/supermarkets/${store.brand}`)}
                      className="text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
                    >
                      {locale === "ar" ? "صفحة العلامة ←" : "Visit brand page →"}
                    </Link>

                    <a
                      href={`https://maps.google.com/?q=${store.lat},${store.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gsy-navy px-3 py-1.5 text-xs font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>{locale === "ar" ? "الاتجاهات" : "Directions"}</span>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Interactive Store Location Schematic */}
        <div className="rounded-2xl border border-gsy-navy/10 bg-gsy-navy p-5 text-white shadow-card lg:col-span-5 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gsy-gold-light">
              {locale === "ar" ? "خريطة المتاجر التفاعلية (تجريبي)" : "Interactive Store Locator Pinboard"}
            </h3>
            <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
              {filteredStores.length} {locale === "ar" ? "متاجر" : "locations"}
            </span>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-[#081931] p-4">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="font-bold text-gsy-gold-light">
                  {locale === "ar" ? "الإمارات (3 متاجر اليوم)" : "UAE Cluster (3 Today)"}
                </p>
                <p className="mt-1 text-[11px] text-white/70">
                  {locale === "ar" ? "دبي والشارقة • الهدف 25 فرعاً 2030" : "Dubai & Sharjah • 25 outlets by 2030"}
                </p>
                <div className="mt-2.5 space-y-1.5">
                  {filteredStores
                    .filter((s) => s.country === "UAE")
                    .map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedStoreId(s.id)}
                        className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-start text-[11px] transition ${
                          selectedStore?.id === s.id
                            ? "bg-gsy-gold-bright font-bold text-gsy-navy-deep"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="truncate">{s.area}</span>
                      </button>
                    ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="font-bold text-gsy-gold-light">
                  {locale === "ar" ? "ماليزيا (متجران اليوم)" : "Malaysia Cluster (2 Today)"}
                </p>
                <p className="mt-1 text-[11px] text-white/70">
                  {locale === "ar" ? "كوالالمبور • الهدف 20 فرعاً 2030" : "Kuala Lumpur • 20 outlets by 2030"}
                </p>
                <div className="mt-2.5 space-y-1.5">
                  {filteredStores
                    .filter((s) => s.country === "Malaysia")
                    .map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedStoreId(s.id)}
                        className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-start text-[11px] transition ${
                          selectedStore?.id === s.id
                            ? "bg-gsy-gold-bright font-bold text-gsy-navy-deep"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="truncate">{s.area}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {selectedStore && (
              <div className="mt-4 rounded-xl border border-gsy-gold-light/30 bg-gsy-navy/90 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gsy-gold-light">
                  {locale === "ar" ? "المتجر المحدد" : "Selected Store Details"}
                </p>
                <h4 className="mt-1 text-sm font-extrabold text-white">
                  {locale === "ar" ? selectedStore.store_name_ar : selectedStore.store_name}
                </h4>
                <p className="mt-1 text-xs text-white/80">
                  {locale === "ar" ? selectedStore.address_ar : selectedStore.address}
                </p>
                <p className="mt-2 text-xs text-gsy-gold-light" dir="ltr">
                  Lat/Lng: {selectedStore.lat.toFixed(4)}, {selectedStore.lng.toFixed(4)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeeklyOffersGrid({
  locale,
  brandFilter,
}: {
  locale: Locale;
  brandFilter?: BrandSlug;
}) {
  const [selectedBrand, setSelectedBrand] = useState<string>(brandFilter ?? "all");

  // Auto-filter active offers (Page 10 rule: offers disappear automatically after end date)
  const offers = WEEKLY_OFFERS.filter((o) => {
    if (selectedBrand !== "all" && o.brand !== selectedBrand) return false;
    return true;
  });

  return (
    <div className="space-y-5">
      {!brandFilter && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedBrand("all")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${
              selectedBrand === "all"
                ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                : "border border-gsy-navy/15 bg-white text-gsy-navy dark:border-white/15 dark:bg-gsy-navy dark:text-white"
            }`}
          >
            {locale === "ar" ? "جميع العروض" : "All Offers"}
          </button>
          {SUPERMARKET_BRANDS.map((b) => (
            <button
              key={b.slug}
              type="button"
              onClick={() => setSelectedBrand(b.slug)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${
                selectedBrand === b.slug
                  ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                  : "border border-gsy-navy/15 bg-white text-gsy-navy dark:border-white/15 dark:bg-gsy-navy dark:text-white"
              }`}
            >
              {t(b.name, locale)}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-3">
        {offers.map((offer) => {
          const brand = SUPERMARKET_BRANDS.find((b) => b.slug === offer.brand);
          const offerPhoto =
            offer.brand === "elite-baskets"
              ? "/images/elite-baskets-fresh.jpg"
              : offer.brand === "supermarket-malaysia"
                ? "/images/noor-al-arab.jpg"
                : "/images/supermarket-store.jpg";
          return (
            <div
              key={offer.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <div className="relative h-36 w-full">
                <Image
                  src={offerPhoto}
                  alt={t(offer.title, locale)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/80 via-gsy-navy/20 to-transparent" />
                <span className="absolute bottom-2.5 start-3 inline-flex items-center gap-1 rounded-full bg-gsy-gold-bright px-2.5 py-0.5 text-[10px] font-extrabold text-gsy-navy-deep">
                  <Tag className="h-3 w-3" />
                  {brand ? t(brand.name, locale) : offer.brand}
                </span>
                <span className="absolute bottom-2.5 end-3 rounded bg-black/50 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                  {offer.flyerCode}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-gsy-slate dark:text-white/65">
                    <span>{offer.country}</span>
                    <span>{locale === "ar" ? "نشرة أسبوعية" : "Weekly Flyer"}</span>
                  </div>

                  <h3 className="mt-2 text-base font-extrabold text-gsy-navy dark:text-white">
                    {t(offer.title, locale)}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(offer.subtitle, locale)}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-gsy-navy dark:text-white/85">
                    {(locale === "ar" ? offer.highlights.ar : offer.highlights.en).map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mt-5 border-t border-gsy-navy/10 pt-3 text-[11px] text-gsy-slate dark:border-white/10 dark:text-white/70">
                  <p className="flex items-center gap-1.5 font-semibold">
                    <Calendar className="h-3.5 w-3.5 text-gsy-gold" />
                    <span>
                      {locale === "ar" ? "ساري حتى:" : "Valid:"} {offer.validFrom} → {offer.validTo}
                    </span>
                  </p>
                  <p className="mt-1">{t(offer.storesIncluded, locale)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

