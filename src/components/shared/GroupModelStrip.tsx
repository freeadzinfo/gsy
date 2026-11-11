import React from "react";
import Link from "next/link";
import {
  Sprout,
  Ship,
  Factory,
  Handshake,
  ShoppingBasket,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Locale } from "@/types/cms";
import { GROUP_MODEL_STEPS } from "@/data/family";
import { localePath, t } from "@/lib/i18n";

const ICON_MAP = {
  sprout: Sprout,
  ship: Ship,
  factory: Factory,
  handshake: Handshake,
  "shopping-basket": ShoppingBasket,
};

export function GroupModelStrip({ locale }: { locale: Locale }) {
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="grid gap-3 md:grid-cols-5">
      {GROUP_MODEL_STEPS.map((step, index) => {
        const Icon = ICON_MAP[step.iconName];
        return (
          <Link
            key={step.id}
            href={localePath(locale, step.href)}
            className="group relative flex flex-col justify-between rounded-xl border border-gsy-navy/10 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 hover:shadow-card-hover dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                  0{step.stepNumber}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-bold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                {t(step.title, locale)}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {t(step.subtitle, locale)}
              </p>
            </div>

            <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-gsy-gold dark:text-gsy-gold-light">
              <span>{locale === "ar" ? "الانتقال للقطاع" : "Explore step"}</span>
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </div>

            {index < GROUP_MODEL_STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -end-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-gsy-gold/30 bg-gsy-ivory text-gsy-gold md:flex dark:bg-gsy-navy-deep dark:text-gsy-gold-light"
              >
                <ArrowIcon className="h-3 w-3" />
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}

