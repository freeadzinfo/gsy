import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Anchor,
  Briefcase,
  Building2,
  Mail,
  MapPin,
  Phone,
  Package,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { COUNTRIES_DATA } from "@/data/countries";
import { BUSINESS_DIVISIONS } from "@/data/businesses";
import { CAREERS_DATA } from "@/data/careers";
import { SUPERMARKET_BRANDS } from "@/data/supermarkets";
import { PageHero } from "@/components/shared/PageHero";
import { StatusBadge } from "@/components/shared/GlobalPresenceMap";
import { SupermarketStoreFinder } from "@/components/shared/SupermarketStoreFinder";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export function generateStaticParams() {
  return COUNTRIES_DATA.map((c) => ({ country: c.slug }));
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; country: string }>;
}) {
  const { locale, country: countrySlug } = await params;
  if (!isValidLocale(locale)) notFound();

  const country = COUNTRIES_DATA.find((c) => c.slug === countrySlug);
  if (!country) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Auto-filtered jobs & divisions (Page 13 layout spec)
  const countryJobs = CAREERS_DATA.filter((j) => j.countrySlug === country.slug);
  const countryDivisions = BUSINESS_DIVISIONS.filter((d) =>
    country.divisions.includes(d.slug)
  );
  const countryBrands = SUPERMARKET_BRANDS.filter((b) =>
    country.brands.includes(b.slug)
  );

  const storeCountryFilter =
    country.slug === "uae"
      ? ("UAE" as const)
      : country.slug === "malaysia"
        ? ("Malaysia" as const)
        : undefined;

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={`${country.region} • ${country.entry_year}`}
        title={`${country.flag} ${locale === "ar" ? country.name_ar : country.name}`}
        subtitle={t(country.role, locale)}
        backgroundImage={country.hero_image}
        primaryCta={{
          label: locale === "ar" ? `تواصل مع مكتب ${country.name_ar}` : `Contact ${country.name} Desk`,
          href: "#country-enquiry",
        }}
        secondaryCta={{
          label: locale === "ar" ? "خريطة الـ 28 سوقاً" : "All 28 Global Markets",
          href: "/presence",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "الانتشار العالمي" : "Global Presence", href: "/presence" },
          { label: locale === "ar" ? country.name_ar : country.name },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={country.status} locale={locale} />
            <a
              href="#country-enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-2.5 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
            >
              <span>{locale === "ar" ? `تواصل مع مكتب ${country.name_ar}` : `Enquire with ${country.name} Desk`}</span>
            </a>
          </div>
        }
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        {/* Confirmation / Planned Notices */}
        {(country.isConfirmationPending || country.status === "planned") && (
          <div className="flex items-start gap-3 rounded-2xl border border-amber-500/35 bg-amber-500/10 p-5 text-xs leading-relaxed text-amber-900 sm:text-sm dark:text-amber-200">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              {country.isConfirmationPending ? (
                <p>
                  {locale === "ar"
                    ? "بيانات تجريبية: الكيان مسجل كسوق نشط في الموجز؛ بانتظار تأكيد الإدارة للدور التجاري التفصيلي."
                    : "Management Brief Note: Registered active market pending Chairman confirmation of specific commercial role."}
                </p>
              ) : (
                <p>
                  {locale === "ar"
                    ? `سوق مخطط (${country.entry_year}) — التوسع قريباً. يبقى مخفياً في الموقع الإنتاجي حتى تفعيله من نظام إدارة المحتوى.`
                    : `Planned market (${country.entry_year}) — Expanding soon. Remains hidden on the live public map until switched on in the CMS.`}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Role, Divisions, Products, Ports, Office & Contact (Page 13 Country Layout) */}
        <section className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
              <h2 className="text-lg font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الدور في المجموعة والقطاعات" : "Role in the Group & Active Divisions"}
              </h2>
              <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
                {t(country.role, locale)}
              </p>
              <p className="mt-2 text-xs font-semibold text-gsy-gold dark:text-gsy-gold-light">
                {country.entity_name}
              </p>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gsy-slate dark:text-white/65">
                  {locale === "ar" ? "وسوم القطاعات" : "Division Tags"}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {countryDivisions.map((div) => (
                    <Link
                      key={div.slug}
                      href={localePath(locale, `/businesses/${div.slug}`)}
                      className="rounded-lg border border-gsy-navy/15 bg-gsy-ivory px-3 py-1.5 text-xs font-bold text-gsy-navy transition hover:border-gsy-gold hover:text-gsy-gold dark:border-white/15 dark:bg-white/5 dark:text-white"
                    >
                      {t(div.name, locale)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products & Ports */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-gsy-navy dark:text-white">
                  <Package className="h-4 w-4 text-gsy-gold" />
                  <span>{locale === "ar" ? "المنتجات" : "Key Products"}</span>
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-gsy-slate dark:text-white/80">
                  {(locale === "ar" ? country.products.ar : country.products.en).map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-gsy-navy dark:text-white">
                  <Anchor className="h-4 w-4 text-gsy-gold" />
                  <span>{locale === "ar" ? "الموانئ المعتمدة" : "Maritime Ports"}</span>
                </h3>
                {country.ports.length > 0 ? (
                  <ul className="mt-3 space-y-1.5 text-sm font-semibold text-gsy-navy dark:text-gsy-gold-light">
                    {country.ports.map((port) => (
                      <li key={port}>• {port}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-xs text-gsy-slate dark:text-white/70">
                    {locale === "ar" ? "عمليات داخلية / قيد التحديد" : "Inland / TBD"}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Office & Contact Card */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-gsy-navy dark:text-white">
                <Building2 className="h-5 w-5 text-gsy-gold" />
                <span>{locale === "ar" ? "المكتب والتواصل" : "Office & Country Contact"}</span>
              </h2>
              <div className="mt-4 space-y-3 text-sm text-gsy-slate dark:text-white/80">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold" />
                  <span>
                    <strong className="block text-gsy-navy dark:text-white">
                      {country.office.city}
                    </strong>
                    {t(country.office.address, locale)}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-gsy-gold" />
                  <span>{country.contact.email}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-gsy-gold" />
                  <span dir="ltr">{country.contact.phone}</span>
                </p>
              </div>
              <p className="mt-4 border-t border-gsy-navy/10 pt-3 text-xs text-gsy-slate dark:border-white/10 dark:text-white/65">
                {locale === "ar" ? "جهة التواصل:" : "Desk Lead:"} {country.contact.name}
              </p>
            </div>

            {/* Gallery Photos */}
            <div className="grid grid-cols-2 gap-3">
              {country.gallery.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  className="relative h-32 overflow-hidden rounded-xl border border-gsy-navy/10 dark:border-white/10"
                >
                  <Image
                    src={img}
                    alt={`${country.name} demo gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Auto-filtered Supermarkets for UAE and Malaysia (Page 10 rule) */}
        {storeCountryFilter && (
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar"
                  ? `متاجر مجموعة جي إس واي في ${country.name_ar}`
                  : `GSY Supermarkets in ${country.name}`}
              </h2>
              <div className="flex flex-wrap gap-2">
                {countryBrands.map((b) => (
                  <Link
                    key={b.slug}
                    href={localePath(locale, `/supermarkets/${b.slug}`)}
                    className="rounded-lg bg-gsy-navy px-3 py-1.5 text-xs font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                  >
                    {t(b.name, locale)}
                  </Link>
                ))}
              </div>
            </div>
            <SupermarketStoreFinder locale={locale} lockedCountry={storeCountryFilter} />
          </section>
        )}

        {/* Open Jobs in this Country (Auto-filtered) */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-gsy-navy dark:text-white">
              <Briefcase className="h-5 w-5 text-gsy-gold" />
              <span>
                {locale === "ar"
                  ? `الوظائف المتاحة في ${country.name_ar}`
                  : `Open Jobs in ${country.name} (Auto-Filtered)`}
              </span>
            </h2>
            <Link
              href={localePath(locale, "/careers")}
              className="text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              {locale === "ar" ? "عرض كل الوظائف" : "All Open Roles"}
            </Link>
          </div>

          {countryJobs.length > 0 ? (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {countryJobs.map((job) => (
                <Link
                  key={job.slug}
                  href={localePath(locale, `/careers/${job.slug}`)}
                  className="flex items-center justify-between rounded-xl border border-gsy-navy/10 bg-gsy-ivory/60 p-4 transition hover:border-gsy-gold/40 dark:border-white/10 dark:bg-white/5"
                >
                  <div>
                    <h3 className="text-sm font-bold text-gsy-navy dark:text-white">
                      {t(job.title, locale)}
                    </h3>
                    <p className="mt-1 text-xs text-gsy-slate dark:text-white/75">
                      {job.department} • {t(job.employmentType, locale)}
                    </p>
                  </div>
                  <ArrowIcon className="h-4 w-4 text-gsy-gold" />
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-gsy-slate dark:text-white/75">
              {locale === "ar"
                ? "لا توجد شواغر معلنة حالياً في هذا السوق — أرسل استفسارك أو زر صفحة الوظائف."
                : "No country-specific demo listings open right now — explore global roles on the Careers page or enquire below."}
            </p>
          )}
        </section>

        {/* Country-routed Enquiry Form */}
        <div id="country-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="country"
            title={
              locale === "ar"
                ? `تواصل مع مكتب ${country.name_ar}`
                : `Enquire with ${country.name} Desk`
            }
            routeTarget={`${country.contact.name} (${country.contact.email})`}
          />
        </div>
      </div>
    </div>
  );
}

