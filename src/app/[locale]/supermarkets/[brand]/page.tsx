import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Mail, Phone, ExternalLink } from "lucide-react";
import { BrandSlug } from "@/types/cms";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { SUPERMARKET_BRANDS } from "@/data/supermarkets";
import { getUiCopy } from "@/data/dictionary";
import { PageHero } from "@/components/shared/PageHero";
import {
  SupermarketStoreFinder,
  WeeklyOffersGrid,
} from "@/components/shared/SupermarketStoreFinder";

export function generateStaticParams() {
  return SUPERMARKET_BRANDS.map((b) => ({ brand: b.slug }));
}

export default async function SupermarketBrandPage({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}) {
  const { locale, brand: brandSlug } = await params;
  if (!isValidLocale(locale)) notFound();

  const brand = SUPERMARKET_BRANDS.find((b) => b.slug === (brandSlug as BrandSlug));
  if (!brand) notFound();

  const copy = getUiCopy(locale);

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={`${t(brand.country, locale)} • ${t(brand.storesTodayText, locale)}`}
        title={t(brand.name, locale)}
        subtitle={t(brand.positioning, locale)}
        accentColor={brand.primaryColor}
        backgroundImage={
          brand.slug === "elite-baskets"
            ? "/images/elite-baskets-fresh.jpg"
            : "/images/supermarket-store.jpg"
        }
        primaryCta={{
          label: copy.findAStore,
          href: "/supermarkets/stores",
        }}
        secondaryCta={{
          label: copy.thisWeeksOffers,
          href: "/supermarkets/offers",
        }}
        showFamilyBadge
        breadcrumbs={[
          { label: locale === "ar" ? "الأسواق المركزية" : "Supermarkets", href: "/supermarkets" },
          { label: t(brand.name, locale) },
        ]}
      />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {/* About the brand & Departments */}
        <section className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-7 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar" ? "عن العلامة التجارية" : `About ${t(brand.name, locale)}`}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
              {t(brand.about, locale)}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
              <span
                className="rounded-full px-3 py-1 font-bold text-white"
                style={{ backgroundColor: brand.primaryColor }}
              >
                {t(brand.storesTodayText, locale)}
              </span>
              <span className="rounded-full bg-gsy-gold/15 px-3 py-1 font-bold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
                {locale === "ar"
                  ? `هدف التوسع 2030: ${brand.target2030Count} فرعاً`
                  : `2030 Expansion Target: ${brand.target2030Count} outlets`}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-5 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar" ? "أقسام المتجر" : "Store Departments"}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-gsy-navy dark:text-white/90">
              {(locale === "ar" ? brand.departments.ar : brand.departments.en).map(
                (dept) => (
                  <li key={dept} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{dept}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Store List for that Brand */}
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? `فروع ${t(brand.name, locale)}`
              : `${t(brand.name, locale)} Store Locations`}
          </h2>
          <SupermarketStoreFinder locale={locale} lockedBrand={brand.slug} />
        </section>

        {/* Current Offers for that Brand */}
        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "العروض الحالية" : "Current Brand Offers"}
          </h2>
          <WeeklyOffersGrid locale={locale} brandFilter={brand.slug} />
        </section>

        {/* Delivery Apps, Social & Contact + Group Footer Badge */}
        <section className="grid gap-6 rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card md:grid-cols-3 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "تطبيقات التوصيل" : "Delivery Apps"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {brand.deliveryApps.map((app) => (
                <li key={app.name} className="flex items-center gap-2 font-semibold text-gsy-navy dark:text-white">
                  <ExternalLink className="h-3.5 w-3.5 text-gsy-gold" />
                  <span>
                    {app.name} — <span className="font-normal text-gsy-slate dark:text-white/70">{app.handle}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "حسابات التواصل" : "Brand Social Channels"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gsy-slate dark:text-white/80">
              {brand.socialHandles.map((s) => (
                <li key={s.platform}>
                  <strong className="text-gsy-navy dark:text-white">{s.platform}:</strong>{" "}
                  {s.handle}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "التواصل المباشر" : "Brand Contact"}
            </h3>
            <div className="mt-3 space-y-2 text-sm text-gsy-slate dark:text-white/80">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gsy-gold" />
                <span>{brand.contactEmail}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gsy-gold" />
                <span dir="ltr">{brand.contactPhone}</span>
              </p>
            </div>
            <Link
              href={localePath(locale, "/about/gsy-family")}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gsy-navy/15 bg-gsy-ivory px-3 py-1.5 text-xs font-bold text-gsy-navy transition hover:border-gsy-gold dark:border-white/15 dark:bg-white/5 dark:text-gsy-gold-light"
            >
              <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded bg-white p-0.5">
                <Image
                  src="/images/gsy-logo.jpg"
                  alt="GSY Group Logo"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </span>
              <span>{copy.aGsyGroupCompany}</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

