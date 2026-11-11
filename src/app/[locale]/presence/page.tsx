import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { GlobalPresenceMap } from "@/components/shared/GlobalPresenceMap";
import { PresenceDirectoryClient } from "@/components/presence/PresenceDirectoryClient";

export default async function GlobalPresencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "08 • الانتشار العالمي" : "08 • Global Presence"}
        title={
          locale === "ar"
            ? "28 سوقاً عالمياً عبر آسيا والخليج وأفريقيا وأوروبا والأمريكتين"
            : "28 Markets Across Three Continents and Expanding Corridors"
        }
        subtitle={
          locale === "ar"
            ? "7 أسواق نشطة اليوم، التوريد من الصين، إطلاق تنزانيا، و19 سوقاً مخططاً للسنوات 2027–2030. كل صف يولّد صفحة دولة مستقلة من نظام إدارة المحتوى."
            : "25 countries from the business plan, plus Hong Kong and Portugal, plus China as a sourcing market — each generated dynamically from a single CMS Country record."
        }
        backgroundImage="/images/shipping-vessel.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف صفحة أفريقيا" : "Explore GSY in Africa",
          href: "/presence/africa",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تواصل مع المكاتب الإقليمية" : "Contact Regional Desk",
          href: "/contact",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "الانتشار العالمي" : "Global Presence" }]}
      />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <GlobalPresenceMap locale={locale} />
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "دليل الدول والأسواق (28 صفحة ديناميكية)"
                : "All 28 Markets Directory"}
            </h2>
            <p className="mt-1 text-xs text-gsy-slate dark:text-white/75">
              {locale === "ar"
                ? "ملاحظة: التصنيف الداخلي للأسواق (Tier A/B/C) محفوظ في CMS ولا يُعرض أبداً للجمهور."
                : "Internal market tiers are preserved in the CMS schema and strictly hidden from public view per Brief v4."}
            </p>
          </div>
          <PresenceDirectoryClient locale={locale} />
        </section>
      </div>
    </div>
  );
}

