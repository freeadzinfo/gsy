"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Newspaper,
  CalendarDays,
  MapPin,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Locale } from "@/types/cms";
import { NEWS_DATA } from "@/data/news";
import { localePath, t } from "@/lib/i18n";

type BlogFilter = "all" | "milestone" | "press-release" | "event";

export function NewsClient({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<BlogFilter>("all");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("category");
    if (
      param === "event" ||
      param === "milestone" ||
      param === "press-release"
    ) {
      setFilter(param);
    }
  }, []);

  const counts = {
    all: NEWS_DATA.length,
    event: NEWS_DATA.filter((n) => n.category === "event").length,
    milestone: NEWS_DATA.filter((n) => n.category === "milestone").length,
    "press-release": NEWS_DATA.filter((n) => n.category === "press-release").length,
  };

  const filtered = NEWS_DATA.filter(
    (n) => filter === "all" || n.category === filter
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all" as const, en: "All Updates", ar: "الكل" },
          { id: "event" as const, en: "Events & Expos", ar: "الفعاليات والمعارض" },
          { id: "milestone" as const, en: "Milestones", ar: "محطات التوسع" },
          {
            id: "press-release" as const,
            en: "Press Releases",
            ar: "البيانات الصحفية",
          },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            aria-pressed={filter === tab.id}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition ${
              filter === tab.id
                ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                : "border border-gsy-navy/15 bg-white text-gsy-navy hover:border-gsy-gold/40 dark:border-white/15 dark:bg-gsy-navy dark:text-white"
            }`}
          >
            <span>{locale === "ar" ? tab.ar : tab.en}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                filter === tab.id
                  ? "bg-white/20 text-white dark:bg-gsy-navy-deep/20 dark:text-gsy-navy-deep"
                  : "bg-gsy-ivory text-gsy-slate dark:bg-white/10 dark:text-white/75"
              }`}
            >
              {counts[tab.id]}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((article) => {
          const isEvent = article.category === "event";
          return (
            <Link
              key={article.slug}
              href={localePath(locale, `/blog/${article.slug}`)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={article.image}
                  alt={t(article.title, locale)}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                {isEvent && article.eventMeta && (
                  <span className="absolute start-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gsy-navy/90 px-3 py-1 text-[11px] font-bold text-gsy-gold-light shadow">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {t(article.eventMeta.statusLabel, locale)}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-gsy-gold dark:text-gsy-gold-light">
                    <span className="inline-flex items-center gap-1.5">
                      {isEvent ? (
                        <CalendarDays className="h-3.5 w-3.5" />
                      ) : (
                        <Newspaper className="h-3.5 w-3.5" />
                      )}
                      {t(article.tag, locale)}
                    </span>
                    <span className="text-gsy-slate dark:text-white/60">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                    {t(article.title, locale)}
                  </h2>
                  {article.eventMeta && (
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gsy-navy/75 dark:text-gsy-gold-light/85">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{t(article.eventMeta.venue, locale)}</span>
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(article.excerpt, locale)}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                  <span>
                    {isEvent
                      ? locale === "ar"
                        ? "تفاصيل الفعالية"
                        : "View event details"
                      : locale === "ar"
                        ? "اقرأ المزيد"
                        : "Read article"}
                  </span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
