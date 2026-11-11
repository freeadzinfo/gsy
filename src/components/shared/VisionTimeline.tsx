import React from "react";
import { Locale } from "@/types/cms";
import { VISION_TIMELINE } from "@/data/site-settings";
import { t } from "@/lib/i18n";

export function VisionTimeline({ locale }: { locale: Locale }) {
  return (
    <div className="relative">
      {/* Connecting line on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-6 hidden h-0.5 bg-gradient-to-r from-gsy-navy/20 via-gsy-gold to-gsy-navy dark:from-white/15 dark:via-gsy-gold-bright dark:to-gsy-gold-light lg:block"
      />
      <div className="grid gap-5 lg:grid-cols-5">
        {VISION_TIMELINE.map((milestone, idx) => {
          const isFinal = idx === VISION_TIMELINE.length - 1;
          return (
            <div
              key={milestone.year}
              className={`relative rounded-xl border p-5 transition ${
                isFinal
                  ? "border-gsy-gold/50 bg-gsy-navy text-white shadow-card dark:bg-[#050f1e]"
                  : "border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-extrabold ${
                    isFinal
                      ? "border-gsy-gold-light bg-gsy-gold-bright text-gsy-navy-deep"
                      : idx === 0
                        ? "border-gsy-gold bg-gsy-gold text-white"
                        : "border-gsy-gold/50 bg-gsy-ivory text-gsy-navy dark:bg-gsy-navy-mid dark:text-white"
                  }`}
                >
                  {milestone.year}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                    isFinal
                      ? "bg-gsy-gold-light/20 text-gsy-gold-light"
                      : "bg-gsy-gold/10 text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light"
                  }`}
                >
                  {t(milestone.phase, locale)}
                </span>
              </div>

              <h3
                className={`mt-4 text-sm font-bold leading-snug ${
                  isFinal ? "text-white" : "text-gsy-navy dark:text-white"
                }`}
              >
                {t(milestone.headline, locale)}
              </h3>
              <p
                className={`mt-2 text-xs leading-relaxed ${
                  isFinal ? "text-white/80" : "text-gsy-slate dark:text-white/75"
                }`}
              >
                {t(milestone.details, locale)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

