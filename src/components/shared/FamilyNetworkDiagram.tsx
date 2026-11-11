"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Network, MapPin } from "lucide-react";
import { Locale } from "@/types/cms";
import { GSY_FAMILY_FLOWS, GSY_FAMILY_MEMBERS } from "@/data/family";
import { localePath, t } from "@/lib/i18n";

export function FamilyNetworkDiagram({ locale }: { locale: Locale }) {
  const [selectedId, setSelectedId] = useState<string>("gsy-trading");
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const selectedMember =
    GSY_FAMILY_MEMBERS.find((m) => m.id === selectedId) ?? GSY_FAMILY_MEMBERS[0];

  const connectedFlows = GSY_FAMILY_FLOWS.filter(
    (f) => f.fromId === selectedId || f.toId === selectedId
  );

  const memberById = (id: string) => GSY_FAMILY_MEMBERS.find((m) => m.id === id);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Interactive SVG & Node Canvas */}
      <div className="relative overflow-hidden rounded-2xl border border-gsy-navy/10 bg-gsy-navy p-4 text-white shadow-card lg:col-span-8 sm:p-6 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-gsy-gold-light">
            <Network className="h-4 w-4" />
            <span>
              {locale === "ar"
                ? "اضغط على أي كيان لاستعراض تدفقات الإمداد البينية"
                : "Click any GSY Family node to inspect internal supply flows"}
            </span>
          </div>
          <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/75">
            {locale === "ar" ? "8 كيانات مترابطة" : "8 Interconnected Entities"}
          </span>
        </div>

        <div className="relative h-[370px] w-full rounded-xl border border-white/10 bg-[#081931] sm:h-[420px]">
          {/* SVG Dotted Directional Flow Arrows Between All Entities */}
          <svg
            viewBox="0 0 800 440"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="gsy-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#DFCE9D" />
              </marker>
              <marker
                id="gsy-arrow-dim"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(223,206,157,0.48)" />
              </marker>
            </defs>
            {GSY_FAMILY_FLOWS.map((flow) => {
              const from = memberById(flow.fromId);
              const to = memberById(flow.toId);
              if (!from || !to) return null;

              const x1 = from.nodeX * 8;
              const y1 = from.nodeY * 4.4;
              const x2 = to.nodeX * 8;
              const y2 = to.nodeY * 4.4;

              const isConnected =
                flow.fromId === selectedId || flow.toId === selectedId;

              // Curve offset so parallel/bidirectional flows stay clearly separated
              const midX = (x1 + x2) / 2;
              const midY = (y1 + y2) / 2 - (flow.id.includes("countries-trading") ? -28 : 22);

              return (
                <path
                  key={flow.id}
                  d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
                  fill="none"
                  stroke={isConnected ? "#DFCE9D" : "rgba(223,206,157,0.34)"}
                  strokeWidth={isConnected ? 3.2 : 2}
                  strokeLinecap="round"
                  strokeDasharray={isConnected ? "3 9" : "2 10"}
                  markerEnd={isConnected ? "url(#gsy-arrow)" : "url(#gsy-arrow-dim)"}
                  className="animate-dotted-flow"
                />
              );
            })}
          </svg>

          {/* Interactive Node Pills */}
          {GSY_FAMILY_MEMBERS.map((member) => {
            const isSelected = member.id === selectedId;
            const isLinked = connectedFlows.some(
              (f) => f.fromId === member.id || f.toId === member.id
            );

            return (
              <button
                key={member.id}
                type="button"
                onClick={() => setSelectedId(member.id)}
                style={{
                  left: `${member.nodeX}%`,
                  top: `${member.nodeY}%`,
                }}
                aria-pressed={isSelected}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2.5 py-1.5 text-center transition-all sm:px-3 sm:py-2 ${
                  isSelected
                    ? "z-20 scale-105 border-gsy-gold-light bg-gsy-gold-bright text-gsy-navy-deep shadow-lg"
                    : isLinked
                      ? "z-10 border-gsy-gold-light/60 bg-gsy-navy-soft text-white hover:border-gsy-gold-light"
                      : "z-10 border-white/15 bg-gsy-navy/90 text-white/80 hover:border-white/40 hover:text-white"
                }`}
              >
                <span className="block whitespace-nowrap text-[10px] font-extrabold sm:text-xs">
                  {t(member.name, locale)}
                </span>
                <span
                  className={`block text-[9px] font-medium sm:text-[10px] ${
                    isSelected ? "text-gsy-navy/85" : "text-gsy-gold-light/85"
                  }`}
                >
                  {t(member.roleTag, locale)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Entity Details Card */}
      <div className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-4 dark:border-gsy-gold-light/20 dark:bg-gsy-navy">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-gsy-gold/15 px-2.5 py-1 text-[11px] font-bold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
              {t(selectedMember.roleTag, locale)}
            </span>
            {!selectedMember.isRegisteredBrand && (
              <span className="text-[10px] font-medium text-gsy-slate dark:text-white/60">
                {locale === "ar" ? "مسمى عمل مبدئي" : "Working title"}
              </span>
            )}
          </div>

          <h3 className="mt-3 text-xl font-extrabold text-gsy-navy dark:text-white">
            {t(selectedMember.name, locale)}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
            {t(selectedMember.whatItDoes, locale)}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gsy-navy dark:text-gsy-gold-light">
            <MapPin className="h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
            <span>{t(selectedMember.where, locale)}</span>
          </div>

          <div className="mt-5 border-t border-gsy-navy/10 pt-4 dark:border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gsy-slate dark:text-white/65">
              {locale === "ar" ? "تدفقات الإمداد المرتبطة" : "Connected Family Supply Flows"}
            </h4>
            <ul className="mt-2.5 space-y-2 text-xs">
              {connectedFlows.map((flow) => {
                const from = memberById(flow.fromId);
                const to = memberById(flow.toId);
                if (!from || !to) return null;
                return (
                  <li
                    key={flow.id}
                    className="rounded-lg border border-gsy-navy/10 bg-gsy-ivory/70 px-3 py-2 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="font-bold text-gsy-navy dark:text-white">
                      {t(from.name, locale)}
                    </span>{" "}
                    <span className="text-gsy-gold dark:text-gsy-gold-light">→</span>{" "}
                    <span className="font-bold text-gsy-navy dark:text-white">
                      {t(to.name, locale)}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-gsy-slate dark:text-white/70">
                      {t(flow.label, locale)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Link
          href={localePath(locale, selectedMember.href)}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-gsy-navy px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
        >
          <span>
            {locale === "ar" ? "استكشف صفحة الكيان" : "Explore entity page"}
          </span>
          <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

