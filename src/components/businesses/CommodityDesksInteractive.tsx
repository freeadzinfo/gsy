"use client";

import React, { useState } from "react";
import { Locale } from "@/types/cms";
import { COMMODITY_DESKS } from "@/data/businesses";
import { DeskCorridorMiniMap } from "@/components/shared/TradeCorridorsMap";
import { ArrowDownLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { t } from "@/lib/i18n";

export function CommodityDesksInteractive({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<string>(COMMODITY_DESKS[0].id);

  const activeDesk =
    COMMODITY_DESKS.find((d) => d.id === activeId) ?? COMMODITY_DESKS[0];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
          {locale === "ar"
            ? "مكاتب تداول السلع"
            : "Commodity Trading Desks (Interactive Blueprint View)"}
        </h2>
        <p className="mt-1.5 text-sm text-gsy-slate dark:text-white/75">
          {locale === "ar"
            ? "اختر مكتباً لعرض المنتجات ومناطق الشراء والبيع وخريطة المسار التفاعلية."
            : "Select a trading desk below to inspect its product basket, inward origin flows, outward destination markets and interactive political corridor map."}
        </p>

        {/* Desk Tabs */}
        <div role="tablist" aria-label="Commodity Trading Desks" className="mt-5 flex flex-wrap gap-2">
          {COMMODITY_DESKS.map((desk) => {
            const isSelected = desk.id === activeId;
            return (
              <button
                key={desk.id}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setActiveId(desk.id)}
                className={`rounded-xl border px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                  isSelected
                    ? "border-gsy-gold bg-gsy-navy text-white shadow-sm dark:border-gsy-gold-light dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                    : "border-gsy-navy/15 bg-white text-gsy-navy hover:border-gsy-gold/40 dark:border-white/15 dark:bg-gsy-navy dark:text-white"
                }`}
              >
                {t(desk.name, locale)}
              </button>
            );
          })}
        </div>

        {/* Active Desk Panel + Expanded Political Corridor Map */}
        <div
          role="tabpanel"
          className="mt-5 grid items-center gap-6 rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:grid-cols-12 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
        >
          <div className="space-y-4 lg:col-span-5">
            <span className="inline-block rounded-full bg-gsy-gold/15 px-3 py-1 text-xs font-bold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
              {t(activeDesk.name, locale)}
            </span>
            <p className="text-sm leading-relaxed text-gsy-slate dark:text-white/80">
              {t(activeDesk.summary, locale)}
            </p>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gsy-slate dark:text-white/65">
                {locale === "ar" ? "المنتجات" : "Products"}
              </h3>
              <p className="mt-1 text-sm font-bold text-gsy-navy dark:text-white">
                {t(activeDesk.products, locale)}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-amber-500/25 bg-gsy-ivory p-3 dark:border-gsy-gold-light/20 dark:bg-white/5">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase text-amber-700 dark:text-gsy-gold-light">
                  <ArrowDownLeft className="h-3.5 w-3.5 shrink-0" />
                  <span>{locale === "ar" ? "نشتري من (وارد)" : "Buy from"}</span>
                </p>
                <p className="mt-1 text-xs font-medium text-gsy-navy dark:text-white/85">
                  {t(activeDesk.buyFromLabel, locale)}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-600/25 bg-gsy-ivory p-3 dark:border-emerald-400/20 dark:bg-white/5">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase text-emerald-700 dark:text-emerald-400">
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  <span>{locale === "ar" ? "نبيع إلى (صادر)" : "Sell to"}</span>
                </p>
                <p className="mt-1 text-xs font-medium text-gsy-navy dark:text-white/85">
                  {t(activeDesk.sellToLabel, locale)}
                </p>
              </div>
            </div>

            <ul className="space-y-1.5 text-xs text-gsy-slate dark:text-white/80">
              {(locale === "ar" ? activeDesk.keySpecs.ar : activeDesk.keySpecs.en).map(
                (spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                    <span>{spec}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <DeskCorridorMiniMap
              locale={locale}
              buyFrom={activeDesk.buyFrom}
              sellTo={activeDesk.sellTo}
              deskName={t(activeDesk.name, locale)}
            />
          </div>
        </div>
      </div>

      {/* Complete Blueprint Table (All 5 Rows) */}
      <div>
        <h3 className="text-lg font-extrabold text-gsy-navy dark:text-white">
          {locale === "ar" ? "جدول مكاتب السلع الكامل" : "Complete Trading Desks Matrix"}
        </h3>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <table className="w-full border-collapse text-start text-xs sm:text-sm">
            <thead>
              <tr className="bg-gsy-navy text-xs font-bold uppercase tracking-wider text-white dark:bg-[#050f1e]">
                <th className="px-4 py-3 text-start">{locale === "ar" ? "المكتب" : "Desk"}</th>
                <th className="px-4 py-3 text-start">{locale === "ar" ? "المنتجات" : "Products"}</th>
                <th className="px-4 py-3 text-start">
                  <span className="inline-flex items-center gap-1.5">
                    <ArrowDownLeft className="h-3.5 w-3.5 text-gsy-gold-light" />
                    {locale === "ar" ? "الشراء من" : "Buy from"}
                  </span>
                </th>
                <th className="px-4 py-3 text-start">
                  <span className="inline-flex items-center gap-1.5">
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                    {locale === "ar" ? "البيع إلى" : "Sell to"}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gsy-navy/10 dark:divide-white/10">
              {COMMODITY_DESKS.map((desk) => (
                <tr
                  key={desk.id}
                  onClick={() => setActiveId(desk.id)}
                  className={`cursor-pointer transition ${
                    desk.id === activeId
                      ? "bg-gsy-gold-pale/60 dark:bg-gsy-gold-bright/10"
                      : "hover:bg-gsy-ivory/60 dark:hover:bg-white/5"
                  }`}
                >
                  <td className="px-4 py-3.5 font-extrabold text-gsy-navy dark:text-gsy-gold-light">
                    {t(desk.name, locale)}
                  </td>
                  <td className="px-4 py-3.5 text-gsy-slate dark:text-white/85">
                    {t(desk.products, locale)}
                  </td>
                  <td className="px-4 py-3.5 text-gsy-slate dark:text-white/80">
                    {t(desk.buyFromLabel, locale)}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-gsy-navy dark:text-white">
                    {t(desk.sellToLabel, locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
