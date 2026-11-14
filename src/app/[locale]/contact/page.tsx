import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { SITE_SETTINGS } from "@/data/site-settings";
import { COUNTRIES_DATA } from "@/data/countries";
import { PageHero } from "@/components/shared/PageHero";
import { RoutedContactForm } from "@/components/shared/RoutedContactForm";
import { StatusBadge } from "@/components/shared/GlobalPresenceMap";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "اتصل بمجموعة جي إس واي الدولية | استفسارات الأعمال"
      : "Contact GSY International Group | Business Enquiries",
    description: isAr
      ? "تواصل مع مجموعة جي إس واي الدولية لتداول السلع، توريد المنتجات، الشحن، التوزيع، شراكات التجزئة واستفسارات الأعمال الدولية."
      : "Contact GSY International Group for commodity trading, product supply, shipping, distribution, supermarket partnerships and international business enquiries.",
    keywords: [
      "Contact GSY International Group",
      "GSY contact",
      "Dubai headquarters",
      "commodity trading enquiries",
      "shipping chartering",
      "distribution HORECA",
    ],
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Verified active country desks from CMS data
  const verifiedDesks = COUNTRIES_DATA.filter(
    (c) => c.status === "live" || c.status === "launching" || c.status === "sourcing"
  );

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. HERO SECTION */}
      <PageHero
        locale={locale}
        eyebrow={isAr ? "اتصل بنا • مجموعة جي إس واي الدولية" : "Connect • GSY International Group"}
        title={isAr ? "تواصل مع جي إس واي" : "Connect With GSY"}
        subtitle={
          isAr
            ? "سواء كنت تبحث عن توريد موثوق للمنتجات، أو شراكات تجارية دولية، أو دعم في الشحن والتأجير البحري، أو معلومات استثمارية، فإن فريقنا مستعد للاستماع إليك. تواصل مع فريق جي إس واي المختص وشارك متطلباتك. سنقوم بتوجيه استفسارك إلى قطاع الأعمال أو جهة الاتصال المناسبة في الدولة المعنية."
            : "Whether you are looking for reliable product supply, international trade partnerships, shipping and chartering support, or investment information, our team is ready to hear from you. Contact the relevant GSY team and share your requirements. We will direct your enquiry to the appropriate business division or country contact."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: isAr ? "إرسال استفسار" : "Send an Enquiry",
          href: "#contact-form",
        }}
        secondaryCta={{
          label: isAr ? "المقرات والمكاتب المعتمدة" : "Official Offices",
          href: "#head-office-contacts",
        }}
        breadcrumbs={[{ label: isAr ? "اتصل بنا" : "Contact" }]}
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. HEAD OFFICE & COUNTRY CONTACTS (OFFICIAL OFFICES) */}
        <section id="head-office-contacts" className="scroll-mt-24 space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gsy-gold/40 bg-gsy-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gsy-navy dark:border-gsy-gold-light/30 dark:bg-gsy-gold-light/10 dark:text-gsy-gold-light">
                <Building2 className="h-3.5 w-3.5" />
                <span>{isAr ? "المقرات والمكاتب المعتمدة" : "Official Offices"}</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
                {isAr ? "المقر الرئيسي وجهات الاتصال في الدول" : "Head Office & Country Contacts"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gsy-slate dark:text-white/80 sm:text-base">
                {isAr
                  ? "تفاصيل المقر الرئيسي المعتمد وجهات الاتصال الرسمية في الدول عبر مراكزنا التشغيلية والإقليمية النشطة."
                  : "Verified headquarters and approved country contact details across our active and regional operating hubs."}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gsy-slate dark:text-white/70">
              <ShieldCheck className="h-4 w-4 text-gsy-gold" />
              <span>
                {isAr
                  ? "معلومات معتمدة وموثقة من إدارة مجموعة جي إس واي"
                  : "Approved management contact records"}
              </span>
            </div>
          </div>

          {/* Global Corporate HQ Featured Card */}
          <div className="rounded-2xl border border-gsy-navy/10 bg-gsy-navy p-6 text-white shadow-card sm:p-8 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gsy-gold-light">
                  {isAr ? "المقر الرئيسي العالمي للشركات" : "Global Corporate Headquarters"}
                </span>
                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  {t(SITE_SETTINGS.companyName, locale)} – Dubai, UAE
                </h3>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
                {isAr ? "المقر الرئيسي النشط" : "Live Group HQ"}
              </span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm text-white/85">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gsy-gold-light">
                  {isAr ? "العنوان المعتمد" : "Verified Address"}
                </span>
                <p className="mt-2 flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold-light" />
                  <span>{t(SITE_SETTINGS.hqAddress, locale)}</span>
                </p>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gsy-gold-light">
                  {isAr ? "الهاتف الرسمي" : "Official Telephone"}
                </span>
                <p className="mt-2 flex items-center gap-2 font-mono">
                  <Phone className="h-4 w-4 shrink-0 text-gsy-gold-light" />
                  <span dir="ltr">{SITE_SETTINGS.hqPhone}</span>
                </p>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gsy-gold-light">
                  {isAr ? "البريد الإلكتروني للعمل" : "Official Business Email"}
                </span>
                <p className="mt-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-gsy-gold-light" />
                  <a
                    href={`mailto:${SITE_SETTINGS.hqEmail}`}
                    className="hover:text-gsy-gold-light hover:underline"
                  >
                    {SITE_SETTINGS.hqEmail}
                  </a>
                </p>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gsy-gold-light">
                  {isAr ? "الموقع على الخريطة" : "Map Location"}
                </span>
                <p className="mt-2">
                  <a
                    href="https://maps.google.com/?q=Dubai+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-gsy-gold-light hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{isAr ? "عرض في خرائط Google" : "View on Google Maps"}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Regional Country Desks Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {verifiedDesks.map((c) => (
              <div
                key={c.slug}
                className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 dark:border-white/10 dark:bg-gsy-navy"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-gsy-navy/5 pb-3 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden="true">
                        {c.flag}
                      </span>
                      <h4 className="text-base font-extrabold text-gsy-navy dark:text-white">
                        {isAr ? c.name_ar : c.name}
                      </h4>
                    </div>
                    <StatusBadge status={c.status} locale={locale} />
                  </div>

                  <p className="mt-3 text-xs font-bold text-gsy-navy dark:text-white">
                    {c.entity_name}
                  </p>

                  <div className="mt-4 space-y-2.5 text-xs text-gsy-slate dark:text-white/80">
                    <p className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                      <span>{t(c.office.address, locale)}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                      <span dir="ltr" className="font-semibold">{c.contact.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                      <a
                        href={`mailto:${c.contact.email}`}
                        className="font-medium text-gsy-navy hover:text-gsy-gold hover:underline dark:text-white dark:hover:text-gsy-gold-light"
                      >
                        {c.contact.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-gsy-navy/5 pt-3 text-xs dark:border-white/10">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${c.office.city}, ${c.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-gsy-slate hover:text-gsy-gold dark:text-white/70 dark:hover:text-gsy-gold-light"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>{isAr ? "موقع الخريطة" : "Map Location"}</span>
                  </a>

                  <Link
                    href={localePath(locale, `/presence/${c.slug}`)}
                    className="inline-flex items-center gap-1 font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
                  >
                    <span>{isAr ? "ملف الدولة" : "Country Profile"}</span>
                    <ArrowIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CONTACT ENQUIRY FORM (MOVED BELOW OFFICIAL OFFICES) */}
        <section id="contact-form-section" className="scroll-mt-24 space-y-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {isAr ? "كيف يمكننا مساعدتك؟" : "How Can We Help You?"}
            </h2>
            <p className="mt-1.5 text-xs text-gsy-slate dark:text-white/75 sm:text-sm">
              {isAr
                ? "شاركنا بياناتك واستفسارك، وسيقوم فريقنا بتوجيه رسالتك مباشرة إلى القسم المختص."
                : "Share your details and enquiry with us. Our team will direct your message to the relevant department."}
            </p>
          </div>
          <RoutedContactForm locale={locale} />
        </section>

        {/* 4. FINAL CTA */}
        <section className="rounded-3xl border border-gsy-navy/10 bg-white p-8 text-center shadow-card sm:p-12 dark:border-gsy-gold-light/20 dark:bg-gsy-navy">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {isAr
                ? "لنبنِ معاً روابط وشراكات تجارية أقوى."
                : "Let's Build Stronger Business Connections."}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gsy-slate dark:text-white/80 sm:text-base">
              {isAr
                ? "تواصل مع مجموعة جي إس واي الدولية لمناقشة متطلبات منتجاتك وفرص التجارة والشراكات والاستفسارات التجارية."
                : "Connect with GSY International Group to discuss your product requirements, trade opportunities, partnerships and business enquiries."}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3 text-sm font-extrabold text-gsy-navy-deep shadow-lg transition hover:bg-gsy-gold-light"
              >
                <span>{isAr ? "تواصل مع فريقنا" : "Contact Our Team"}</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
              <Link
                href={localePath(locale, "/businesses")}
                className="inline-flex items-center gap-2 rounded-lg border border-gsy-navy/20 bg-gsy-navy/5 px-6 py-3 text-sm font-bold text-gsy-navy transition hover:bg-gsy-navy/10 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                <span>{isAr ? "استكشف قطاعات الأعمال" : "Explore Our Businesses"}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
