"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
  X,
} from "lucide-react";
import { GalleryCategory, GalleryItem, Locale } from "@/types/cms";
import { GALLERY_ITEMS } from "@/data/gallery";
import { t } from "@/lib/i18n";

type GalleryFilter = "all" | GalleryCategory;

const FILTER_TABS: Array<{ id: GalleryFilter; en: string; ar: string }> = [
  { id: "all", en: "All Photos", ar: "جميع الصور" },
  { id: "events", en: "Events & Expos", ar: "الفعاليات والمعارض" },
  { id: "operations", en: "Ports, Shipping & Packing", ar: "الموانئ والشحن والتعبئة" },
  { id: "supermarkets", en: "Supermarkets", ar: "الأسواق المركزية" },
  { id: "brands", en: "Brands & Supply", ar: "العلامات والمنتجات" },
  { id: "leadership", en: "Dubai HQ & Governance", ar: "المقر الرئيسي والحوكمة" },
];

export function GalleryClient({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visibleItems = useMemo(
    () =>
      filter === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === filter),
    [filter]
  );

  const activeItem: GalleryItem | null =
    activeIndex !== null && visibleItems[activeIndex]
      ? visibleItems[activeIndex]
      : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeItem) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activeItem]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, visibleItems.length]);

  const handleDialogBackdropClick = (
    event: React.MouseEvent<HTMLDialogElement>
  ) => {
    const dialog = dialogRef.current;
    if (!dialog || event.target !== dialog) return;
    // Fallback for browsers without native closedby="any" support (e.g. Safari)
    const rect = dialog.getBoundingClientRect();
    const clickedInside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!clickedInside) {
      setActiveIndex(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {FILTER_TABS.map((tab) => {
            const count =
              tab.id === "all"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === tab.id).length;
            const isSelected = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveIndex(null);
                  setFilter(tab.id);
                }}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
                  isSelected
                    ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                    : "border border-gsy-navy/15 bg-white text-gsy-navy hover:border-gsy-gold/40 dark:border-white/15 dark:bg-gsy-navy dark:text-white"
                }`}
              >
                <span>{locale === "ar" ? tab.ar : tab.en}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isSelected
                      ? "bg-white/20 text-white dark:bg-gsy-navy-deep/20 dark:text-gsy-navy-deep"
                      : "bg-gsy-ivory text-gsy-slate dark:bg-white/10 dark:text-white/75"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p className="inline-flex items-center gap-1.5 text-xs font-medium text-gsy-slate dark:text-white/70">
          <Camera className="h-3.5 w-3.5 text-gsy-gold dark:text-gsy-gold-light" />
          <span>
            {locale === "ar"
              ? "اضغط على أي صورة للتكبير"
              : "Click any visual to view in full resolution"}
          </span>
        </p>
      </div>

      {/* Responsive Photo Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white text-start shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gsy-navy-deep">
              <Image
                src={item.image}
                alt={t(item.title, locale)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 py-3 text-[11px] font-semibold text-white">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-gsy-gold-light" />
                  {t(item.location, locale)}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 backdrop-blur-sm">
                  <Expand className="h-3 w-3" />
                  {item.year}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h2 className="text-base font-extrabold leading-snug text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                  {t(item.title, locale)}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                  {t(item.caption, locale)}
                </p>
              </div>
              {item.isDemoPlaceholder && (
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-gsy-gold/80 dark:text-gsy-gold-light/70">
                  {locale === "ar"
                    ? "صورة توضيحية تجريبية"
                    : "Illustrative Visual • Replace with Approved Photo"}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Native Accessible Lightbox Modal */}
      <dialog
        ref={dialogRef}
        closedby="any"
        aria-labelledby="gallery-lightbox-title"
        onClose={() => setActiveIndex(null)}
        onClick={handleDialogBackdropClick}
        className="m-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-gsy-gold-light/25 bg-gsy-navy p-0 text-white shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {activeItem && (
          <div className="relative">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
              <div className="min-w-0">
                <h3
                  id="gallery-lightbox-title"
                  className="truncate text-sm font-bold text-white sm:text-base"
                >
                  {t(activeItem.title, locale)}
                </h3>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gsy-gold-light">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    {t(activeItem.location, locale)} • {activeItem.year}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={locale === "ar" ? "إغلاق" : "Close preview"}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-[#040c18]">
              <Image
                src={activeItem.image}
                alt={t(activeItem.title, locale)}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />

              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null
                          ? 0
                          : (prev - 1 + visibleItems.length) %
                            visibleItems.length
                      )
                    }
                    aria-label={locale === "ar" ? "السابق" : "Previous image"}
                    className="absolute start-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-gsy-navy/80 text-white backdrop-blur transition hover:bg-gsy-gold hover:text-gsy-navy-deep"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null ? 0 : (prev + 1) % visibleItems.length
                      )
                    }
                    aria-label={locale === "ar" ? "التالي" : "Next image"}
                    className="absolute end-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-gsy-navy/80 text-white backdrop-blur transition hover:bg-gsy-gold hover:text-gsy-navy-deep"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 bg-gsy-navy-deep px-5 py-4 text-xs text-white/85">
              <p className="max-w-2xl leading-relaxed">
                {t(activeItem.caption, locale)}
              </p>
              <span className="shrink-0 font-semibold text-gsy-gold-light">
                {activeIndex !== null
                  ? `${activeIndex + 1} / ${visibleItems.length}`
                  : ""}
              </span>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
