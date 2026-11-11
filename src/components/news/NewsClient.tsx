"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Newspaper, ArrowRight, ArrowLeft } from "lucide-react";
import { Locale } from "@/types/cms";
import { NEWS_DATA } from "@/data/news";
import { localePath, t } from "@/lib/i18n";

export function NewsClient({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<"all" | "milestone" | "press-release">("all");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const filtered = NEWS_DATA.filter((n) => filter === "all" || n.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all" as const, en: "All Updates", ar: "الكل" },
          { id: "milestone" as const, en: "Milestones", ar: "محطات التوسع" },
          { id: "press-release" as const, en: "Press Releases", ar: "البيانات الصحفية" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
              filter === tab.id
                ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                : "border border-gsy-navy/15 bg-white text-gsy-navy dark:border-white/15 dark:bg-gsy-navy dark:text-white"
            }`}
          >
            {locale === "ar" ? tab.ar : tab.en}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={localePath(locale, `/news/${article.slug}`)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
          >
            <div className="relative h-52 w-full">
              <Image
                src={article.image}
                alt={t(article.title, locale)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-gsy-gold dark:text-gsy-gold-light">
                  <span className="inline-flex items-center gap-1.5">
                    <Newspaper className="h-3.5 w-3.5" />
                    {t(article.tag, locale)}
                  </span>
                  <span className="text-gsy-slate dark:text-white/60">{article.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                  {t(article.title, locale)}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
                  {t(article.excerpt, locale)}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                <span>{locale === "ar" ? "اقرأ المزيد" : "Read article"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

