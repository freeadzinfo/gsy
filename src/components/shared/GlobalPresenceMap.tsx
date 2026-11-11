"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Building2,
  Anchor,
  ShoppingBasket,
  Globe2,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { CountryRecord, Locale, MarketStatus } from "@/types/cms";
import {
  COUNTRIES_DATA,
  KEY_PORT_PINS,
  PLANNED_TRADING_OFFICES,
} from "@/data/countries";
import { STORES_DATA } from "@/data/supermarkets";
import { WorldMapBackdrop } from "@/components/shared/WorldMapBackdrop";
import { getUiCopy } from "@/data/dictionary";
import { localePath, t } from "@/lib/i18n";

export function StatusBadge({
  status,
  locale,
}: {
  status: MarketStatus;
  locale: Locale;
}) {
  const copy = getUiCopy(locale);
  const styles: Record<MarketStatus, string> = {
    live: "border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    sourcing: "border-cyan-500/30 bg-cyan-500/15 text-cyan-800 dark:text-cyan-300",
    launching: "border-amber-500/35 bg-amber-500/15 text-amber-800 dark:text-amber-300",
    planned: "border-slate-400/40 bg-slate-500/15 text-slate-700 dark:text-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${styles[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "live"
            ? "bg-emerald-500"
            : status === "sourcing"
              ? "bg-cyan-500"
              : status === "launching"
                ? "bg-amber-500"
                : "border border-slate-400 bg-transparent"
        }`}
      />
      {copy.statusLabels[status]}
    </span>
  );
}

export function GlobalPresenceMap({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const copy = getUiCopy(locale);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Map Layers from Page 12
  const [showStatuses, setShowStatuses] = useState(true);
  const [showOffices, setShowOffices] = useState(true);
  const [showPorts, setShowPorts] = useState(!compact);
  const [showStores, setShowStores] = useState(!compact);
  const [cmsPreviewPlanned, setCmsPreviewPlanned] = useState(true);
  const [statusFilter, setStatusFilter] = useState<"all" | MarketStatus>("all");
  const [selectedSlug, setSelectedSlug] = useState<string>("uae");

  const counts = useMemo(() => {
    return {
      live: COUNTRIES_DATA.filter((c) => c.status === "live").length,
      sourcing: COUNTRIES_DATA.filter((c) => c.status === "sourcing").length,
      launching: COUNTRIES_DATA.filter((c) => c.status === "launching").length,
      planned: COUNTRIES_DATA.filter((c) => c.status === "planned").length,
    };
  }, []);

  const visibleCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((c) => {
      if (c.status === "planned" && !cmsPreviewPlanned) return false;
      if (statusFilter !== "all" && c.status !== statusFilter) return false;
      return true;
    });
  }, [cmsPreviewPlanned, statusFilter]);

  const selectedCountry: CountryRecord =
    COUNTRIES_DATA.find((c) => c.slug === selectedSlug) ?? COUNTRIES_DATA[0];

  return (
    <div className="space-y-4">
      {/* Status Counters & CMS Layer Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gsy-navy/10 bg-white p-4 shadow-sm dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        {/* Status Filter Counters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setStatusFilter("all")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === "all"
                ? "bg-gsy-navy text-white dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                : "bg-gsy-ivory text-gsy-navy hover:bg-gsy-gold-pale dark:bg-white/5 dark:text-white"
            }`}
          >
            {locale === "ar" ? `الكل (${COUNTRIES_DATA.length})` : `All (${COUNTRIES_DATA.length})`}
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("live")}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === "live"
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {copy.statusLabels.live} ({counts.live})
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("sourcing")}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === "sourcing"
                ? "border-cyan-700 bg-cyan-700 text-white"
                : "border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {copy.statusLabels.sourcing} ({counts.sourcing})
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("launching")}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === "launching"
                ? "border-amber-600 bg-amber-600 text-white"
                : "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {copy.statusLabels.launching} ({counts.launching})
          </button>

          <button
            type="button"
            onClick={() => {
              setCmsPreviewPlanned(true);
              setStatusFilter("planned");
            }}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === "planned"
                ? "border-slate-700 bg-slate-700 text-white"
                : "border-slate-400/40 bg-slate-500/10 text-slate-700 dark:text-slate-300"
            }`}
          >
            <span className="h-2 w-2 rounded-full border border-current" />
            {copy.statusLabels.planned} ({counts.planned})
          </button>
        </div>

        {/* 4 Map Layers + CMS Planned Toggle */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setShowStatuses(!showStatuses)}
            aria-pressed={showStatuses}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-semibold transition ${
              showStatuses
                ? "border-gsy-gold bg-gsy-gold/10 text-gsy-gold dark:text-gsy-gold-light"
                : "border-gsy-navy/15 text-gsy-slate dark:border-white/15 dark:text-white/60"
            }`}
          >
            <Globe2 className="h-3.5 w-3.5" />
            <span>{locale === "ar" ? "الأسواق" : "Countries"}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowOffices(!showOffices)}
            aria-pressed={showOffices}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-semibold transition ${
              showOffices
                ? "border-gsy-gold bg-gsy-gold/10 text-gsy-gold dark:text-gsy-gold-light"
                : "border-gsy-navy/15 text-gsy-slate dark:border-white/15 dark:text-white/60"
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            <span>{locale === "ar" ? "مكاتب التداول" : "Offices"}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowPorts(!showPorts)}
            aria-pressed={showPorts}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-semibold transition ${
              showPorts
                ? "border-gsy-gold bg-gsy-gold/10 text-gsy-gold dark:text-gsy-gold-light"
                : "border-gsy-navy/15 text-gsy-slate dark:border-white/15 dark:text-white/60"
            }`}
          >
            <Anchor className="h-3.5 w-3.5" />
            <span>{locale === "ar" ? "الموانئ" : "Ports"}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowStores(!showStores)}
            aria-pressed={showStores}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-semibold transition ${
              showStores
                ? "border-gsy-gold bg-gsy-gold/10 text-gsy-gold dark:text-gsy-gold-light"
                : "border-gsy-navy/15 text-gsy-slate dark:border-white/15 dark:text-white/60"
            }`}
          >
            <ShoppingBasket className="h-3.5 w-3.5" />
            <span>{locale === "ar" ? "المتاجر" : "Stores"}</span>
          </button>

          <button
            type="button"
            onClick={() => setCmsPreviewPlanned(!cmsPreviewPlanned)}
            aria-pressed={cmsPreviewPlanned}
            title="Planned countries remain hidden in production until switched on in CMS"
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-semibold transition ${
              cmsPreviewPlanned
                ? "border-gsy-navy bg-gsy-navy text-white dark:border-gsy-gold-light dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                : "border-gsy-navy/20 bg-gsy-ivory text-gsy-navy dark:border-white/20 dark:bg-white/5 dark:text-white/75"
            }`}
          >
            {cmsPreviewPlanned ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            <span>
              {locale === "ar"
                ? "معاينة الأسواق المخططة (CMS)"
                : "CMS: Planned Pins"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Interactive Map & Selected Country Panel */}
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="relative overflow-hidden rounded-2xl border border-gsy-navy/10 bg-[#071830] p-3 text-white shadow-card lg:col-span-8 sm:p-5">
          <div className="relative">
            <svg
              viewBox="0 0 1000 500"
              className="h-auto w-full text-gsy-gold-light"
              role="img"
              aria-label={
                locale === "ar"
                  ? "خريطة الانتشار العالمي لمجموعة جي إس واي"
                  : "GSY International Group Global Presence Interactive Map"
              }
            >
              <WorldMapBackdrop showGrid />

              {/* Layer 3: Key Ports */}
              {showPorts &&
                KEY_PORT_PINS.map((port) => {
                  const x = port.mapX * 10;
                  const y = port.mapY * 5;
                  return (
                    <g key={port.name} opacity="0.85">
                      <rect
                        x={x - 3}
                        y={y - 3}
                        width="6"
                        height="6"
                        transform={`rotate(45 ${x} ${y})`}
                        fill="#38BDF8"
                        stroke="#071830"
                        strokeWidth="1"
                      />
                      <title>{`Port: ${port.name}`}</title>
                    </g>
                  );
                })}

              {/* Layer 2: Trading Offices */}
              {showOffices &&
                PLANNED_TRADING_OFFICES.map((office) => {
                  const x = office.mapX * 10;
                  const y = office.mapY * 5;
                  return (
                    <g key={office.city}>
                      <polygon
                        points={`${x},${y - 5} ${x + 4.5},${y + 4} ${x - 4.5},${y + 4}`}
                        fill="#FDE68A"
                        stroke="#071830"
                        strokeWidth="1"
                      />
                      <title>{`Trading Office: ${office.city} (${office.year})`}</title>
                    </g>
                  );
                })}

              {/* Layer 4: Supermarket Stores */}
              {showStores &&
                STORES_DATA.filter((s) => s.status === "open").map((store) => {
                  const x = ((store.lng + 180) / 360) * 1000;
                  const y = ((90 - store.lat) / 180) * 500;
                  return (
                    <g key={store.id}>
                      <circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#FB7185"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                      />
                      <title>{`Store: ${store.store_name}`}</title>
                    </g>
                  );
                })}

              {/* Layer 1: Country Pins by Status */}
              {showStatuses &&
                visibleCountries.map((country) => {
                  const x = country.office.mapX * 10;
                  const y = country.office.mapY * 5;
                  const isSelected = country.slug === selectedSlug;
                  const isPlanned = country.status === "planned";

                  const fill =
                    country.status === "live"
                      ? "#22C55E"
                      : country.status === "sourcing"
                        ? "#06B6D4"
                        : country.status === "launching"
                          ? "#F59E0B"
                          : "transparent";

                  const stroke =
                    country.status === "planned"
                      ? "#CBD5E1"
                      : isSelected
                        ? "#FFFFFF"
                        : "#071830";

                  return (
                    <g
                      key={country.slug}
                      onClick={() => setSelectedSlug(country.slug)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={x}
                          cy={y}
                          r="13"
                          fill="none"
                          stroke="#DFCE9D"
                          strokeWidth="1.5"
                          strokeDasharray="3 2"
                        />
                      )}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 7.5 : isPlanned ? 5 : 6.2}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isPlanned ? 1.8 : 1.5}
                      />
                      <title>
                        {`${country.name} — ${country.status.toUpperCase()} (${country.entry_year})`}
                      </title>
                    </g>
                  );
                })}
            </svg>
          </div>

          {/* Map Legend */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[11px] text-white/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {copy.statusLabels.live}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                {copy.statusLabels.sourcing}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                {copy.statusLabels.launching}
              </span>
              {cmsPreviewPlanned && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-slate-300" />
                  {locale === "ar" ? "مخطط (التوسع قريباً)" : "Planned (Expanding soon)"}
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/70">
              {showOffices && <span>▲ {locale === "ar" ? "مكاتب" : "Trading Offices"}</span>}
              {showPorts && <span>◆ {locale === "ar" ? "موانئ" : "Key Ports"}</span>}
              {showStores && <span>● {locale === "ar" ? "متاجر" : "Stores"}</span>}
            </div>
          </div>
        </div>

        {/* Selected Country Quick Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-4 dark:border-gsy-gold-light/20 dark:bg-gsy-navy">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {selectedCountry.flag}
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-gsy-navy dark:text-white">
                    {locale === "ar" ? selectedCountry.name_ar : selectedCountry.name}
                  </h3>
                  <p className="text-xs font-medium text-gsy-slate dark:text-white/70">
                    {selectedCountry.office.city} • {selectedCountry.entry_year}
                  </p>
                </div>
              </div>
              <StatusBadge status={selectedCountry.status} locale={locale} />
            </div>

            {selectedCountry.status === "planned" && (
              <div className="mt-3 rounded-lg border border-slate-300/60 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-300">
                {locale === "ar"
                  ? `التوسع قريباً (${selectedCountry.entry_year}) — مخفي في الإعدادات الافتراضية حتى التفعيل في نظام إدارة المحتوى.`
                  : `Expanding soon (${selectedCountry.entry_year}) — hidden in production until switched on in CMS.`}
              </div>
            )}

            {selectedCountry.isConfirmationPending && (
              <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-800 dark:text-amber-200">
                {locale === "ar"
                  ? "بيانات تجريبية — تفاصيل الكيان بانتظار اعتماد رئيس مجلس الإدارة."
                  : "Demo placeholder — specific entity role pending Chairman sign-off."}
              </div>
            )}

            <p className="mt-4 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
              {t(selectedCountry.role, locale)}
            </p>

            <div className="mt-4 space-y-3 border-t border-gsy-navy/10 pt-4 text-xs dark:border-white/10">
              <div>
                <span className="font-bold uppercase tracking-wider text-gsy-slate dark:text-white/60">
                  {locale === "ar" ? "المنتجات الرئيسية" : "Key Products"}
                </span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {(locale === "ar"
                    ? selectedCountry.products.ar
                    : selectedCountry.products.en
                  )
                    .slice(0, 4)
                    .map((p) => (
                      <span
                        key={p}
                        className="rounded-md bg-gsy-ivory px-2 py-1 font-medium text-gsy-navy dark:bg-white/10 dark:text-white/90"
                      >
                        {p}
                      </span>
                    ))}
                </div>
              </div>

              {selectedCountry.ports.length > 0 && (
                <div>
                  <span className="font-bold uppercase tracking-wider text-gsy-slate dark:text-white/60">
                    {locale === "ar" ? "الموانئ" : "Key Ports"}
                  </span>
                  <p className="mt-1 font-semibold text-gsy-navy dark:text-gsy-gold-light">
                    {selectedCountry.ports.join(" • ")}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={localePath(locale, `/presence/${selectedCountry.slug}`)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gsy-navy px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
            >
              <span>
                {locale === "ar" ? "صفحة الدولة الكاملة" : "View country page"}
              </span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={localePath(locale, "/presence")}
              className="inline-flex items-center justify-center rounded-lg border border-gsy-navy/20 px-3 py-2.5 text-xs font-bold text-gsy-navy hover:bg-gsy-ivory dark:border-white/20 dark:text-white dark:hover:bg-white/5"
            >
              {locale === "ar" ? "كل الدول" : "All 28"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

