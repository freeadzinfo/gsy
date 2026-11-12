"use client";

import React, { useMemo, useState } from "react";
import { Locale } from "@/types/cms";
import {
  HoveredCountryInfo,
  WorldMapBackdrop,
} from "@/components/shared/WorldMapBackdrop";
import { ArrowDownLeft, ArrowUpRight, Globe, MapPin } from "lucide-react";

interface CorridorNode {
  id: string;
  name: string;
  x: number;
  y: number;
}

interface CorridorDef {
  id: string;
  label: { en: string; ar: string };
  goods: { en: string; ar: string };
  from: CorridorNode;
  to: CorridorNode;
  ctrlX: number;
  ctrlY: number;
  countryIds: string[];
  bidirectional?: boolean;
}

const CORRIDORS: CorridorDef[] = [
  {
    id: "india-uae",
    label: { en: "India → UAE (GCC Hub)", ar: "الهند ← الإمارات (مركز الخليج)" },
    goods: {
      en: "Rice, spices, pulses & Noor Al Arab",
      ar: "الأرز والتوابل والبقوليات ومنتجات نور العرب",
    },
    from: { id: "chennai", name: "Chennai", x: 723, y: 213.7 },
    to: { id: "uae", name: "Jebel Ali (Dubai HQ)", x: 653.1, y: 180.6 },
    ctrlX: 678,
    ctrlY: 222,
    countryIds: ["356", "784"],
  },
  {
    id: "malaysia-uae",
    label: { en: "Malaysia → 24 Markets", ar: "ماليزيا ← 24 سوقاً" },
    goods: {
      en: "Palm oil, edible oils & halal FMCG",
      ar: "زيت النخيل والزيوت والمنتجات الحلال",
    },
    from: { id: "port-klang", name: "Port Klang", x: 781.6, y: 241.7 },
    to: { id: "uae", name: "Dubai HQ", x: 653.1, y: 180.6 },
    ctrlX: 705,
    ctrlY: 244,
    countryIds: ["458", "784"],
  },
  {
    id: "uae-east-africa",
    label: {
      en: "UAE & India → East Africa",
      ar: "الإمارات والهند ← شرق أفريقيا",
    },
    goods: {
      en: "Staples, sugar, fertilizer & charter cargoes",
      ar: "السلع الغذائية والسكر والأسمدة",
    },
    from: { id: "uae", name: "Jebel Ali", x: 653.1, y: 180.6 },
    to: {
      id: "east-africa",
      name: "Mombasa / Dar es Salaam",
      x: 609.5,
      y: 265,
    },
    ctrlX: 652,
    ctrlY: 232,
    countryIds: ["784", "404", "834"],
  },
  {
    id: "uae-west-africa",
    label: {
      en: "Asia & GCC → West Africa",
      ar: "آسيا والخليج ← غرب أفريقيا",
    },
    goods: {
      en: "Rice, frozen protein, fertilizer & steel",
      ar: "الأرز والبروتين المجمد والأسمدة والصلب",
    },
    from: { id: "uae", name: "Jebel Ali", x: 653.1, y: 180.6 },
    to: { id: "west-africa", name: "Lagos / Abidjan", x: 509.4, y: 232.1 },
    ctrlX: 562,
    ctrlY: 278,
    countryIds: ["784", "566", "384", "288"],
  },
  {
    id: "china-group",
    label: { en: "China ↔ Group & Africa", ar: "الصين ↔ المجموعة وأفريقيا" },
    goods: {
      en: "Frozen foods, metals & minerals demand",
      ar: "الأغذية المجمدة والفلزات والمعادن",
    },
    from: { id: "shanghai", name: "Shanghai", x: 837.4, y: 163.3 },
    to: { id: "uae", name: "Singapore / GCC", x: 653.1, y: 180.6 },
    ctrlX: 758,
    ctrlY: 124,
    countryIds: ["156", "702", "784"],
    bidirectional: true,
  },
  {
    id: "gcc-europe",
    label: {
      en: "Corridor → UK & Rotterdam",
      ar: "الممر ← المملكة المتحدة وأوروبا",
    },
    goods: {
      en: "Diaspora foods & EU gateway 2030",
      ar: "أغذية الجاليات وبوابة أوروبا 2030",
    },
    from: { id: "uae", name: "Jebel Ali", x: 653.1, y: 180.6 },
    to: { id: "europe", name: "UK / Rotterdam", x: 509, y: 106 },
    ctrlX: 590,
    ctrlY: 112,
    countryIds: ["784", "826", "528"],
  },
];

interface HubLabelDef {
  nodeId: string;
  label: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor: "start" | "middle" | "end";
  isHq?: boolean;
}

const HUB_LABELS: HubLabelDef[] = [
  {
    nodeId: "uae",
    label: "UAE (HQ)",
    x: 653.1,
    y: 180.6,
    labelX: 653,
    labelY: 169,
    anchor: "middle",
    isHq: true,
  },
  {
    nodeId: "chennai",
    label: "Chennai",
    x: 723,
    y: 213.7,
    labelX: 730,
    labelY: 205,
    anchor: "start",
  },
  {
    nodeId: "port-klang",
    label: "Port Klang",
    x: 781.6,
    y: 241.7,
    labelX: 774,
    labelY: 253,
    anchor: "end",
  },
  {
    nodeId: "shanghai",
    label: "Shanghai",
    x: 837.4,
    y: 163.3,
    labelX: 836,
    labelY: 175,
    anchor: "middle",
  },
  {
    nodeId: "east-africa",
    label: "East Africa",
    x: 609.5,
    y: 265,
    labelX: 618,
    labelY: 268,
    anchor: "start",
  },
  {
    nodeId: "west-africa",
    label: "West Africa",
    x: 509.4,
    y: 232.1,
    labelX: 509,
    labelY: 246,
    anchor: "middle",
  },
  {
    nodeId: "europe",
    label: "Europe / UK",
    x: 509,
    y: 106,
    labelX: 511,
    labelY: 88,
    anchor: "start",
  },
];

export function TradeCorridorsMap({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<string>("india-uae");
  const [hoveredCountry, setHoveredCountry] =
    useState<HoveredCountryInfo | null>(null);
  const uid = React.useId().replace(/:/g, "");
  const activeArrowId = `corridor-active-arrow-${uid}`;
  const inactiveArrowId = `corridor-inactive-arrow-${uid}`;

  const activeCorridor = useMemo(
    () => CORRIDORS.find((c) => c.id === activeId) ?? CORRIDORS[0],
    [activeId]
  );

  const activeNodeIds = useMemo(
    () => new Set([activeCorridor.from.id, activeCorridor.to.id]),
    [activeCorridor]
  );

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Political World Map + Live Corridors */}
      <div className="relative overflow-hidden rounded-2xl border border-gsy-navy/15 bg-gsy-navy p-4 text-white shadow-card lg:col-span-8 sm:p-5 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 font-semibold text-gsy-gold-light">
            <Globe className="h-4 w-4 shrink-0" />
            <span>
              {locale === "ar"
                ? "آسيا — الإمارات — شرق وغرب أفريقيا — أوروبا"
                : "Asia — UAE — East & West Africa — Europe"}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/85">
            <MapPin className="h-3 w-3 text-gsy-gold-light" />
            {hoveredCountry
              ? hoveredCountry.name
              : locale === "ar"
                ? "اضغط على المسار أو مرّر فوق دولة"
                : "Hover any country or select route"}
          </span>
        </div>

        <div dir="ltr" className="overflow-hidden rounded-xl border border-gsy-navy/25 shadow-inner">
          <svg
            viewBox="468 74 394 248"
            className="block h-auto w-full select-none bg-[#C8E4F6]"
            role="img"
            aria-label={
              locale === "ar"
                ? "خريطة سياسية لممرات جي إس واي التجارية عبر آسيا والإمارات وأفريقيا وأوروبا"
                : "GSY Political Trade Corridors Map linking Asia, UAE, East and West Africa, and Europe"
            }
          >
            <defs>
              <marker
                id={activeArrowId}
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="10.5"
                markerHeight="10.5"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <path
                  d="M 1 1.5 L 8.5 5 L 1 8.5 L 3 5 Z"
                  fill="#D97706"
                  stroke="#FFFFFF"
                  strokeWidth="0.9"
                  strokeLinejoin="round"
                />
              </marker>
              <marker
                id={inactiveArrowId}
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6.5"
                markerHeight="6.5"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <path
                  d="M 1 1.5 L 8.5 5 L 1 8.5 L 3 5 Z"
                  fill="#0B1F3A"
                  fillOpacity="0.65"
                  stroke="#FFFFFF"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <WorldMapBackdrop
              showGrid
              showLabels
              labelDensity="regional"
              highlightIds={activeCorridor.countryIds}
              hoveredId={hoveredCountry?.id ?? null}
              onHoverCountry={setHoveredCountry}
            />

            {/* Inactive Corridor Arcs rendered beneath active corridor */}
            {CORRIDORS.filter((c) => c.id !== activeId).map((c) => {
              const splitT = c.bidirectional ? 0.36 : 0.54;
              const pathD = buildSplitBezierPath(
                c.from.x,
                c.from.y,
                c.ctrlX,
                c.ctrlY,
                c.to.x,
                c.to.y,
                splitT
              );
              const reversePathD = c.bidirectional
                ? buildSplitBezierPath(
                    c.to.x,
                    c.to.y,
                    c.ctrlX,
                    c.ctrlY,
                    c.from.x,
                    c.from.y,
                    0.36
                  )
                : null;
              return (
                <g
                  key={c.id}
                  className="cursor-pointer"
                  onClick={() => setActiveId(c.id)}
                >
                  <path
                    d={pathD}
                    fill="none"
                    stroke="transparent"
                    strokeWidth="10"
                  />
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#0B1F3A"
                    strokeOpacity="0.34"
                    strokeWidth="1.25"
                    strokeDasharray="3 3"
                    markerMid={`url(#${inactiveArrowId})`}
                  />
                  {reversePathD && (
                    <path
                      d={reversePathD}
                      fill="none"
                      stroke="none"
                      markerMid={`url(#${inactiveArrowId})`}
                    />
                  )}
                  <title>{c.label[locale]}</title>
                </g>
              );
            })}

            {/* Active Corridor Arc with high-contrast halo + gold flow animation + directional arrow */}
            {(() => {
              const c = activeCorridor;
              const splitT = c.bidirectional ? 0.36 : 0.54;
              const pathD = buildSplitBezierPath(
                c.from.x,
                c.from.y,
                c.ctrlX,
                c.ctrlY,
                c.to.x,
                c.to.y,
                splitT
              );
              const reversePathD = c.bidirectional
                ? buildSplitBezierPath(
                    c.to.x,
                    c.to.y,
                    c.ctrlX,
                    c.ctrlY,
                    c.from.x,
                    c.from.y,
                    0.36
                  )
                : null;
              return (
                <g pointerEvents="none">
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeOpacity="0.88"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                  />
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#0B1F3A"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                  />
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    markerMid={`url(#${activeArrowId})`}
                    className="animate-trade-flow"
                  />
                  {reversePathD && (
                    <path
                      d={reversePathD}
                      fill="none"
                      stroke="none"
                      markerMid={`url(#${activeArrowId})`}
                    />
                  )}
                </g>
              );
            })()}

            {/* Hub & Terminal Markers + Clean Haloed Political Labels */}
            {HUB_LABELS.map((hub) => {
              const isActiveHub = activeNodeIds.has(hub.nodeId);
              return (
                <g key={hub.nodeId} pointerEvents="none">
                  {isActiveHub && (
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={hub.isHq ? 8.5 : 7}
                      fill="none"
                      stroke="#0B1F3A"
                      strokeOpacity="0.45"
                      strokeWidth="1.1"
                      strokeDasharray="2.5 2"
                    />
                  )}
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={hub.isHq ? 4.8 : isActiveHub ? 4.2 : 3.2}
                    fill={
                      hub.isHq
                        ? "#C8943A"
                        : isActiveHub
                          ? "#0B1F3A"
                          : "#1E3A5F"
                    }
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                  />
                  <text
                    x={hub.labelX}
                    y={hub.labelY}
                    textAnchor={hub.anchor}
                    fill={isActiveHub || hub.isHq ? "#0B1F3A" : "#1E293B"}
                    stroke="#FFFFFF"
                    strokeOpacity="0.92"
                    strokeWidth="2.4"
                    paintOrder="stroke"
                    fontSize={isActiveHub || hub.isHq ? "7.6" : "6.8"}
                    fontWeight="800"
                  >
                    {hub.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bottom Political Map Legend & Active Corridor Summary */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-white bg-gsy-gold-bright" />
              {locale === "ar" ? "دبي المقر الرئيسي (الإمارات)" : "Dubai HQ (UAE)"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-white bg-gsy-navy" />
              {locale === "ar" ? "موانئ ومحاور التجارة" : "Trade Gateways & Ports"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
                <line x1="0" y1="5" x2="14" y2="5" stroke="#D97706" strokeWidth="2" />
                <path d="M 11 1.5 L 18.5 5 L 11 8.5 L 13 5 Z" fill="#D97706" />
              </svg>
              {locale === "ar" ? "الممر النشط (الاتجاه)" : "Active Corridor (Direction)"}
            </span>
          </div>
          <span className="font-semibold text-gsy-gold-light">
            {activeCorridor.label[locale]}
          </span>
        </div>
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
 * Split a quadratic Bézier curve (P0 -> C -> P2) at parameter t so SVG markerMid renders a smooth directional arrow mid-route.
 */
function buildSplitBezierPath(
  x0: number,
  y0: number,
  cx: number,
  cy: number,
  x2: number,
  y2: number,
  t = 0.56
) {
  const c0x = x0 + t * (cx - x0);
  const c0y = y0 + t * (cy - y0);
  const c1x = cx + t * (x2 - cx);
  const c1y = cy + t * (y2 - cy);
  const mx = (1 - t) * c0x + t * c1x;
  const my = (1 - t) * c0y + t * c1y;
  return `M ${x0.toFixed(1)} ${y0.toFixed(1)} Q ${c0x.toFixed(1)} ${c0y.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)} Q ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

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
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const uid = React.useId().replace(/:/g, "");
  const buyArrowId = `buy-arrow-${uid}`;
  const sellArrowId = `sell-arrow-${uid}`;

  const originCoords = buyFrom.map((label) => ({
    label,
    coord: REGION_NODES[label] ?? { x: 700, y: 200 },
  }));
  const destCoords = sellTo.map((label) => ({
    label,
    coord: REGION_NODES[label] ?? { x: 620, y: 220 },
  }));
  const hub = { x: 653.1, y: 180.6 }; // Dubai coordination desk

  return (
    <div className="rounded-xl border border-gsy-navy/10 bg-gsy-navy p-4 text-white dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold text-gsy-gold-light">
          <Globe className="h-3.5 w-3.5" />
          {locale === "ar"
            ? `خريطة مسارات مكتب ${deskName}`
            : `${deskName} — Political Corridor Map`}
        </span>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/85">
          <span className="inline-flex items-center gap-1">
            <ArrowDownLeft className="h-3.5 w-3.5 text-amber-400" />
            {locale === "ar" ? "الشراء من (وارد للمركز)" : "Buy from (Inward)"}
          </span>
          <span className="inline-flex items-center gap-1">
            <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
            {locale === "ar" ? "البيع إلى (صادر للأسواق)" : "Sell to (Outward)"}
          </span>
        </div>
      </div>

      <div dir="ltr" className="overflow-hidden rounded-lg border border-gsy-navy/25">
        <svg
          viewBox="302 90 576 288"
          className="block h-auto min-h-[290px] w-full select-none bg-[#C8E4F6] sm:min-h-[340px]"
          aria-label={`${deskName} origin and destination corridor map`}
        >
          <defs>
            <marker
              id={buyArrowId}
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="6.5"
              markerHeight="6.5"
              orient="auto"
            >
              <path d="M 1 1.5 L 8.5 5 L 1 8.5 L 3 5 Z" fill="#B45309" />
            </marker>
            <marker
              id={sellArrowId}
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="6.5"
              markerHeight="6.5"
              orient="auto"
            >
              <path d="M 1 1.5 L 8.5 5 L 1 8.5 L 3 5 Z" fill="#047857" />
            </marker>
          </defs>

          <WorldMapBackdrop showGrid={false} showLabels={false} />

          {/* Buy from -> Inward routes flowing into Dubai Hub */}
          {originCoords.map((o, i) => {
            const ctrlX = (o.coord.x + hub.x) / 2;
            const ctrlY = Math.min(o.coord.y, hub.y) - 24;
            const pathD = buildSplitBezierPath(
              o.coord.x,
              o.coord.y,
              ctrlX,
              ctrlY,
              hub.x,
              hub.y,
              0.56
            );
            return (
              <g
                key={`o-${i}`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredTag(`Inward origin: ${o.label} → Dubai HQ`)}
                onMouseLeave={() => setHoveredTag(null)}
              >
                <path
                  d={pathD}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeOpacity="0.6"
                  strokeWidth="2.8"
                />
                <path
                  d={pathD}
                  fill="none"
                  stroke="#B45309"
                  strokeOpacity="0.92"
                  strokeWidth="1.7"
                  markerMid={`url(#${buyArrowId})`}
                  className="animate-trade-flow"
                />
                <circle
                  cx={o.coord.x}
                  cy={o.coord.y}
                  r="4.8"
                  fill="#D97706"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
                <title>{`Buy from (Inward → Dubai HQ): ${o.label}`}</title>
              </g>
            );
          })}

          {/* Sell to -> Outward routes flowing out from Dubai Hub */}
          {destCoords.map((d, i) => {
            const ctrlX = (hub.x + d.coord.x) / 2;
            const ctrlY = Math.max(hub.y, d.coord.y) + 22;
            const pathD = buildSplitBezierPath(
              hub.x,
              hub.y,
              ctrlX,
              ctrlY,
              d.coord.x,
              d.coord.y,
              0.58
            );
            return (
              <g
                key={`d-${i}`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredTag(`Outward market: Dubai HQ → ${d.label}`)}
                onMouseLeave={() => setHoveredTag(null)}
              >
                <path
                  d={pathD}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeOpacity="0.65"
                  strokeWidth="3"
                />
                <path
                  d={pathD}
                  fill="none"
                  stroke="#047857"
                  strokeOpacity="0.92"
                  strokeWidth="1.9"
                  markerMid={`url(#${sellArrowId})`}
                  className="animate-trade-flow"
                />
                <circle
                  cx={d.coord.x}
                  cy={d.coord.y}
                  r="5.2"
                  fill="#059669"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                />
                <title>{`Sell to (Outward ← Dubai HQ): ${d.label}`}</title>
              </g>
            );
          })}

          {/* Dubai Coordination Hub Beacon + Label */}
          <g pointerEvents="none">
            <circle
              cx={hub.x}
              cy={hub.y}
              r="9.5"
              fill="none"
              stroke="#0B1F3A"
              strokeOpacity="0.45"
              strokeWidth="1.1"
              strokeDasharray="2.5 2"
            />
            <circle
              cx={hub.x}
              cy={hub.y}
              r="6.2"
              fill="#0B1F3A"
              stroke="#FFFFFF"
              strokeWidth="2.2"
            />
            <text
              x={hub.x}
              y={hub.y - 12}
              textAnchor="middle"
              fill="#0B1F3A"
              stroke="#FFFFFF"
              strokeOpacity="0.92"
              strokeWidth="2.4"
              paintOrder="stroke"
              fontSize="7.5"
              fontWeight="800"
            >
              Dubai HQ
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/75">
        <span>
          {hoveredTag
            ? hoveredTag
            : locale === "ar"
              ? "مرّر فوق أي مسار أو نقطة لعرض الاتجاه"
              : "Hover any route or pin to inspect flow direction"}
        </span>
        <span className="font-semibold text-gsy-gold-light">
          {originCoords.length} {locale === "ar" ? "وارد" : "inward"} • {destCoords.length}{" "}
          {locale === "ar" ? "صادر" : "outward"}
        </span>
      </div>
    </div>
  );
}
