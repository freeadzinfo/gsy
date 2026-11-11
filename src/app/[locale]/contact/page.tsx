import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { SITE_SETTINGS } from "@/data/site-settings";
import { COUNTRIES_DATA } from "@/data/countries";
import { PageHero } from "@/components/shared/PageHero";
import { RoutedContactForm } from "@/components/shared/RoutedContactForm";
import { StatusBadge } from "@/components/shared/GlobalPresenceMap";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const keyDesks = COUNTRIES_DATA.filter(
    (c) => c.status === "live" || c.status === "launching" || c.status === "sourcing"
  );

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "تواصل مع المجموعة" : "Contact GSY International Group"}
        title={
          locale === "ar"
            ? "المقر الرئيسي ومكاتب الدول والتوجيه المباشر"
            : "Dubai Headquarters, Country Contacts & Routed Enquiries"
        }
        subtitle={
          locale === "ar"
            ? "اختر صفتك في النموذج أدناه لعرض مسار التوجيه التلقائي إلى المكتب المختص."
            : "Select who you are in our routed contact form or reach out directly to our active regional desks."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "ابدأ الاستفسار الموجه" : "Start Routed Enquiry",
          href: "#routed-form",
        }}
        secondaryCta={{
          label: locale === "ar" ? "خريطة المكاتب العالمية" : "View Global Offices",
          href: "/presence",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "اتصل بنا" : "Contact" }]}
      />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* HQ Details */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-gsy-navy/10 bg-gsy-navy p-6 text-white shadow-card sm:p-8 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
              <p className="text-xs font-bold uppercase tracking-widest text-gsy-gold-light">
                {locale === "ar" ? "المقر الرئيسي العالمي" : "Global Corporate HQ"}
              </p>
              <h2 className="mt-2 text-xl font-extrabold">
                {t(SITE_SETTINGS.companyName, locale)}
              </h2>
              <div className="mt-5 space-y-3 text-sm text-white/85">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold-light" />
                  <span>{t(SITE_SETTINGS.hqAddress, locale)}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-gsy-gold-light" />
                  <span>{SITE_SETTINGS.hqEmail}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-gsy-gold-light" />
                  <span dir="ltr">{SITE_SETTINGS.hqPhone}</span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
              <h3 className="flex items-center gap-2 text-base font-extrabold text-gsy-navy dark:text-white">
                <Building2 className="h-5 w-5 text-gsy-gold" />
                <span>
                  {locale === "ar" ? "مكاتب القطاعات المتخصصة" : "Direct Division Desks"}
                </span>
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-gsy-slate dark:text-white/80">
                <li>
                  <Link href={localePath(locale, "/businesses/shipping-chartering#enquiry-form")} className="font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light">
                    Shipping & Chartering Freight Quote →
                  </Link>
                </li>
                <li>
                  <Link href={localePath(locale, "/businesses/noor-al-arab#enquiry-form")} className="font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light">
                    Noor Al Arab Trade Account (UAE / India / Malaysia) →
                  </Link>
                </li>
                <li>
                  <Link href={localePath(locale, "/businesses/government-tenders#enquiry-form")} className="font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light">
                    Government & Institutional Tenders Desk →
                  </Link>
                </li>
                <li>
                  <Link href={localePath(locale, "/supermarkets/suppliers")} className="font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light">
                    Become a Supermarket Supplier →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Routed Contact Form */}
          <div id="routed-form" className="scroll-mt-24 lg:col-span-7">
            <RoutedContactForm locale={locale} />
          </div>
        </div>

        {/* Active Country Contacts Grid */}
        <section>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "جهات التواصل في الأسواق النشطة وقيد الإطلاق"
              : "Active, Sourcing & Launching Country Contacts (Demo Placeholders)"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyDesks.map((c) => (
              <Link
                key={c.slug}
                href={localePath(locale, `/presence/${c.slug}`)}
                className="rounded-2xl border border-gsy-navy/10 bg-white p-5 shadow-sm transition hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xl" aria-hidden="true">
                    {c.flag}
                  </span>
                  <StatusBadge status={c.status} locale={locale} />
                </div>
                <h3 className="mt-3 text-base font-extrabold text-gsy-navy dark:text-white">
                  {locale === "ar" ? c.name_ar : c.name} — {c.office.city}
                </h3>
                <p className="mt-1 text-xs text-gsy-slate dark:text-white/75">
                  {c.contact.name}
                </p>
                <p className="mt-2 text-xs font-semibold text-gsy-gold dark:text-gsy-gold-light">
                  {c.contact.email}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

