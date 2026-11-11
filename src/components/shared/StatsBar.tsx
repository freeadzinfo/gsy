"use client";

import React, { useEffect, useRef, useState } from "react";
import { Locale } from "@/types/cms";
import { SITE_SETTINGS } from "@/data/site-settings";
import { getUiCopy } from "@/data/dictionary";

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(target);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(target);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimated(true);
          const duration = 900;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(target * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref} dir="ltr">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function StatsBar({ locale }: { locale: Locale }) {
  const copy = getUiCopy(locale);

  const items = [
    {
      key: "founded",
      value: <AnimatedNumber target={SITE_SETTINGS.foundedYear} />,
      label: copy.stats.founded,
    },
    {
      key: "today",
      value: <AnimatedNumber target={SITE_SETTINGS.countriesToday} />,
      label: copy.stats.countriesToday,
    },
    {
      key: "target-countries",
      value: <AnimatedNumber target={25} suffix="+" />,
      label: copy.stats.countriesBy2030,
    },
    {
      key: "people",
      value: <AnimatedNumber target={350} suffix="+" />,
      label: copy.stats.people,
    },
    {
      key: "goal",
      value: <AnimatedNumber target={2.5} prefix="US$" suffix="B" decimals={1} />,
      label: copy.stats.groupGoal2030,
    },
  ];

  return (
    <section
      aria-label={locale === "ar" ? "أرقام المجموعة الرئيسية" : "Key Group Figures"}
      className="border-b border-gsy-navy/10 bg-white dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-gsy-navy/10 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:divide-x lg:divide-y-0 rtl:lg:divide-x-reverse lg:px-8 dark:divide-white/10">
        {items.map((item) => (
          <div key={item.key} className="px-4 py-6 text-center sm:py-7">
            <div className="text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-gsy-gold-light">
              {item.value}
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gsy-slate dark:text-white/75">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

