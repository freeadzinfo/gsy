"use client";

import React, { useState } from "react";
import { Locale } from "@/types/cms";
import { WorldMapBackdrop } from "@/components/shared/WorldMapBackdrop";
import { Ship, Globe } from "lucide-react";

interface CorridorDef {
  id: string;
  label: { en: string; ar: string };
  goods: { en: string; ar: string };
  from: { name: string; x: number; y: number };
  to: { name: string; x: number; y: number };
  ctrlX: number;
  ctrlY: number;
}

const CORRIDORS: CorridorDef[] = [
  {
    id: "india-uae",
    label: { en: "India → UAE (GCC Hub)", ar: "الهند ← الإمارات (مركز الخليج)" },
    goods: { en: "Rice, spices, pulses & Noor Al Arab", ar: "الأرز والتوابل والبقوليات ومنتجات نور العرب" },
    from: { name: "Chennai", x: 723, y: 213 },
    to: { name: "Jebel Ali", x: 653, y: 180 },
    ctrlX: 690,
    ctrlY: 165,
  },
  {
    id: "malaysia-uae",
    label: { en: "Malaysia → 24 Markets", ar: "ماليزيا ← 24 سوقاً" },
    goods: { en: "Palm oil, edible oils & halal FMCG", ar: "زيت النخيل والزيوت والمنتجات الحلال" },
    from: { name: "Port Klang", x: 781, y: 242 },
    to: { name: "Dubai HQ", x: 653, y: 180 },
    ctrlX: 725,
    ctrlY: 185,
  },
  {
    id: "uae-east-africa",
    label: { en: "UAE & India → East Africa", ar: "الإمارات والهند ← شرق أفريقيا" },
    goods: { en: "Staples, sugar, fertilizer & charter cargoes", ar: "السلع الغذائية والسكر والأسمدة" },
    from: { name: "Jebel Ali", x: 653, y: 180 },
    to: { name: "Mombasa / Dar es Salaam", x: 609, y: 268 },
    ctrlX: 645,
    ctrlY: 225,
  },
  {
    id: "uae-west-africa",
    label: { en: "Asia & GCC → West Africa", ar: "آسيا والخليج ← غرب أفريقيا" },
    goods: { en: "Rice, frozen protein, fertilizer & steel", ar: "الأرز والبروتين المجمد والأسمدة والصلب" },
    from: { name: "Jebel Ali", x: 653, y: 180 },
    to: { name: "Lagos / Abidjan", x: 505, y: 232 },
    ctrlX: 560,
    ctrlY: 285,
  },
  {
    id: "china-group",
    label: { en: "China ↔ Group & Africa", ar: "الصين ↔ المجموعة وأفريقيا" },
    goods: { en: "Frozen foods, metals & minerals demand", ar: "الأغذية المجمدة والفلزات والمعادن" },
    from: { name: "Shanghai", x: 837, y: 163 },
    to: { name: "Singapore / GCC", x: 653, y: 180 },
    ctrlX: 760,
    ctrlY: 130,
  },
  {
    id: "gcc-europe",
    label: { en: "Corridor → UK & Rotterdam", ar: "الممر ← المملكة المتحدة وأوروبا" },
    goods: { en: "Diaspora foods & EU gateway 2030", ar: "أغذية الجاليات وبوابة أوروبا 2030" },
    from: { name: "Jebel Ali", x: 653, y: 180 },
    to: { name: "UK / Rotterdam", x: 505, y: 106 },
    ctrlX: 585,
    ctrlY: 112,
  },
];

export function TradeCorridorsMap({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<string>("india-uae");

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Animated Map */}
      <div className="relative overflow-hidden rounded-2xl border border-gsy-navy/10 bg-gsy-navy p-4 text-white shadow-card lg:col-span-8 sm:p-6 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 font-semibold text-gsy-gold-light">
            <Ship className="h-4 w-4" />
            <span>
              {locale === "ar"
                ? "خطوط التجارة البحرية: آسيا — الإمارات — شرق وغرب أفريقيا — أوروبا"
                : "Live Corridor Schematic: Asia — UAE — East & West Africa — Europe"}
            </span>
          </div>
          <span className="text-[11px] text-white/65">
            {locale === "ar" ? "اضغط على المسار للتفاصيل" : "Select a corridor"}
          </span>
        </div>

        <svg
          viewBox="400 45 530 340"
          className="h-auto w-full rounded-xl bg-[#071830] text-gsy-gold-light"
          role="img"
          aria-label={
            locale === "ar"
              ? "خريطة الممرات التجارية بين آسيا والخليج وأفريقيا وأوروبا"
              : "GSY Trade Corridors Map linking Asia, UAE, East and West Africa, and Europe"
          }
        >
          <WorldMapBackdrop showGrid={false} />

          {/* Corridor Arcs */}
          {CORRIDORS.map((c) => {
            const isActive = c.id === activeId;
            return (
              <g key={c.id} className="cursor-pointer" onClick={() => setActiveId(c.id)}>
                <path
                  d={`M ${c.from.x} ${c.from.y} Q ${c.ctrlX} ${c.ctrlY} ${c.to.x} ${c.to.y}`}
                  fill="none"
                  stroke={isActive ? "#DFCE9D" : "rgba(200, 148, 58, 0.42)"}
                  strokeWidth={isActive ? 2.6 : 1.4}
                  className="animate-trade-flow"
                />
                <circle
                  cx={c.from.x}
                  cy={c.from.y}
                  r={isActive ? 5 : 3.5}
                  fill={isActive ? "#FFFFFF" : "#C8943A"}
                  stroke="#0B1F3A"
                  strokeWidth="1.5"
                />
                <circle
                  cx={c.to.x}
                  cy={c.to.y}
                  r={isActive ? 5 : 3.5}
                  fill={isActive ? "#DFCE9D" : "#22C55E"}
                  stroke="#0B1F3A"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}

          {/* Key Regional Labels */}
          <g fill="#FFFFFF" fontSize="9.5" fontWeight="700" textAnchor="middle">
            <text x="653" y="169" fill="#DFCE9D">UAE (HQ)</text>
            <text x="723" y="232">Chennai</text>
            <text x="786" y="257">Port Klang</text>
            <text x="837" y="152">China</text>
            <text x="615" y="285">East Africa</text>
            <text x="505" y="220">West Africa</text>
            <text x="505" y="96">Europe / UK</text>
          </g>
        </svg>
      </div>

      {/* Corridor Selector List */}
      <div className="flex flex-col gap-2.5 lg:col-span-4">
        {CORRIDORS.map((c) => {
          const isActive = c.id === activeId;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              aria-pressed={isActive}
              className={`rounded-xl border p-3.5 text-start transition ${
                isActive
                  ? "border-gsy-gold bg-gsy-navy text-white shadow-card dark:border-gsy-gold-light dark:bg-gsy-navy-mid"
                  : "border-gsy-navy/10 bg-white text-gsy-navy hover:border-gsy-gold/40 dark:border-white/10 dark:bg-gsy-navy dark:text-white"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold">{c.label[locale]}</span>
                <span
                  className={`h-2 w-2 rounded-full ${
                    isActive ? "bg-gsy-gold-light" : "bg-gsy-gold/40"
                  }`}
                />
              </div>
              <p
                className={`mt-1 text-xs ${
                  isActive ? "text-white/85" : "text-gsy-slate dark:text-white/75"
                }`}
              >
                {c.goods[locale]}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const REGION_NODES: Record<string, { x: number; y: number }> = {
  India: { x: 723, y: 210 },
  Pakistan: { x: 690, y: 175 },
  Thailand: { x: 778, y: 212 },
  Vietnam: { x: 798, y: 218 },
  Brazil: { x: 350, y: 315 },
  Malaysia: { x: 782, y: 242 },
  Indonesia: { x: 798, y: 268 },
  Turkey: { x: 590, y: 142 },
  Egypt: { x: 585, y: 170 },
  "Saudi Arabia": { x: 630, y: 185 },
  Qatar: { x: 643, y: 180 },
  Oman: { x: 662, y: 188 },
  Morocco: { x: 482, y: 162 },
  Jordan: { x: 598, y: 165 },
  China: { x: 830, y: 158 },
  "South Africa": { x: 575, y: 326 },
  Gabon: { x: 525, y: 254 },
  Ghana: { x: 498, y: 235 },
  Zimbabwe: { x: 582, y: 298 },
  "GCC smelters": { x: 645, y: 180 },
  Zambia: { x: 575, y: 282 },
  "East Africa": { x: 608, y: 258 },
  "West Africa": { x: 505, y: 232 },
  GCC: { x: 650, y: 182 },
  "South Asia": { x: 735, y: 205 },
  Bangladesh: { x: 750, y: 185 },
  "Sri Lanka": { x: 722, y: 232 },
  Africa: { x: 558, y: 258 },
  "GSY Supermarkets": { x: 654, y: 180 },
  "GCC steel mills": { x: 650, y: 182 },
};

/**
 * Dynamic mini corridor map generated directly from each desk's `buyFrom` and `sellTo` CMS tags (Brief page 7)
 */
export function DeskCorridorMiniMap({
  locale,
  buyFrom,
  sellTo,
  deskName,
}: {
  locale: Locale;
  buyFrom: string[];
  sellTo: string[];
  deskName: string;
}) {
  const originCoords = buyFrom.map((label) => ({
    label,
    coord: REGION_NODES[label] ?? { x: 700, y: 200 },
  }));
  const destCoords = sellTo.map((label) => ({
    label,
    coord: REGION_NODES[label] ?? { x: 620, y: 220 },
  }));
  const hub = { x: 653, y: 180 }; // Dubai coordination desk

  return (
    <div className="rounded-xl border border-gsy-navy/10 bg-gsy-navy p-4 text-white dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold text-gsy-gold-light">
          <Globe className="h-3.5 w-3.5" />
          {locale === "ar"
            ? `خريطة مسارات مكتب ${deskName}`
            : `${deskName} — Dynamic Corridor Map`}
        </span>
        <div className="flex items-center gap-3 text-[11px] text-white/80">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-gsy-gold-light" />
            {locale === "ar" ? "أسواق الشراء (المنشأ)" : "Buy from (Origins)"}
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {locale === "ar" ? "أسواق البيع (الوجهة)" : "Sell to (Destinations)"}
          </span>
        </div>
      </div>

      <svg
        viewBox="240 60 680 340"
        className="h-56 w-full rounded-lg bg-[#071830] text-gsy-gold-light sm:h-64"
        aria-label={`${deskName} origin and destination corridor map`}
      >
        <WorldMapBackdrop showGrid={false} />

        {originCoords.map((o, i) => (
          <g key={`o-${i}`}>
            <path
              d={`M ${o.coord.x} ${o.coord.y} Q ${(o.coord.x + hub.x) / 2} ${Math.min(o.coord.y, hub.y) - 24} ${hub.x} ${hub.y}`}
              fill="none"
              stroke="#DFCE9D"
              strokeOpacity="0.6"
              strokeWidth="1.4"
              className="animate-trade-flow"
            />
            <circle cx={o.coord.x} cy={o.coord.y} r="4.5" fill="#DFCE9D" stroke="#0B1F3A" strokeWidth="1.5" />
          </g>
        ))}

        {destCoords.map((d, i) => (
          <g key={`d-${i}`}>
            <path
              d={`M ${hub.x} ${hub.y} Q ${(hub.x + d.coord.x) / 2} ${Math.max(hub.y, d.coord.y) + 20} ${d.coord.x} ${d.coord.y}`}
              fill="none"
              stroke="#34D399"
              strokeOpacity="0.7"
              strokeWidth="1.6"
              className="animate-trade-flow"
            />
            <circle cx={d.coord.x} cy={d.coord.y} r="5" fill="#34D399" stroke="#0B1F3A" strokeWidth="1.5" />
          </g>
        ))}

        <circle cx={hub.x} cy={hub.y} r="6" fill="#FFFFFF" stroke="#C8943A" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

