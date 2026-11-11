import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { SupermarketStoreFinder } from "@/components/shared/SupermarketStoreFinder";

export default async function StoreFinderPage({
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
        eyebrow={locale === "ar" ? "مجموعة أسواق جي إس واي" : "GSY Supermarket Group"}
        title={locale === "ar" ? "ابحث عن أقرب متجر" : "Store Finder"}
        subtitle={
          locale === "ar"
            ? "متاجرنا الحالية في الإمارات (3 فروع) وماليزيا (فرعان) مع مخطط التوسع لـ 50 فرعاً بحلول 2030."
            : "Search and filter our active supermarkets across the UAE and Malaysia by brand, country, city and services."
        }
        backgroundImage="/images/supermarket-store.jpg"
        primaryCta={{
          label: locale === "ar" ? "العروض الأسبوعية" : "View This Week's Offers",
          href: "/supermarkets/offers",
        }}
        secondaryCta={{
          label: locale === "ar" ? "كن مورداً" : "Become a Supplier",
          href: "/supermarkets/suppliers",
        }}
        showFamilyBadge
        breadcrumbs={[
          { label: locale === "ar" ? "الأسواق المركزية" : "Supermarkets", href: "/supermarkets" },
          { label: locale === "ar" ? "محدد المواقع" : "Store Finder" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SupermarketStoreFinder locale={locale} />
      </section>
    </div>
  );
}

