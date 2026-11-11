import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { WeeklyOffersGrid } from "@/components/shared/SupermarketStoreFinder";

export default async function OffersPage({
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
        eyebrow={locale === "ar" ? "العروض الترويجية" : "GSY Supermarket Group"}
        title={locale === "ar" ? "العروض والنشرات الأسبوعية" : "Weekly Offers & Flyers"}
        subtitle={
          locale === "ar"
            ? "عروض محدثة لكل علامة وبلد — تتوقف العروض تلقائياً فور انتهاء تاريخ الصلاحية."
            : "Weekly promotional flyers per brand and country, automatically retired after end dates in the CMS."
        }
        backgroundImage="/images/elite-baskets-fresh.jpg"
        primaryCta={{
          label: locale === "ar" ? "ابحث عن أقرب فرع" : "Find a Store",
          href: "/supermarkets/stores",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تصفح العلامات التجارية" : "Explore Our Brands",
          href: "/supermarkets",
        }}
        showFamilyBadge
        breadcrumbs={[
          { label: locale === "ar" ? "الأسواق المركزية" : "Supermarkets", href: "/supermarkets" },
          { label: locale === "ar" ? "العروض" : "Offers" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <WeeklyOffersGrid locale={locale} />
      </section>
    </div>
  );
}

