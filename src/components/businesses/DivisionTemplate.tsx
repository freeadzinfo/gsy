import React from "react";
import Link from "next/link";
import { Briefcase, CheckCircle2, MapPin, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { BusinessDivision, Locale } from "@/types/cms";
import { COUNTRIES_DATA } from "@/data/countries";
import { CAREERS_DATA } from "@/data/careers";
import { PageHero } from "@/components/shared/PageHero";
import { DivisionEnquiryForm, FormVariant } from "@/components/shared/DivisionEnquiryForm";
import { StatusBadge } from "@/components/shared/GlobalPresenceMap";
import { localePath, t } from "@/lib/i18n";

interface DivisionTemplateProps {
  locale: Locale;
  division: BusinessDivision;
  formVariant: FormVariant;
  formTitle: string;
  formSubtitle?: string;
  formSubmitLabel?: string;
  formSecondaryAction?: { label: string; href: string };
  heroAction?: React.ReactNode;
  customSection?: React.ReactNode;
  afterHeroSection?: React.ReactNode;
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  whatWeDoTitle?: string;
  whatWeDoIntro?: string;
  howWeWorkTitle?: string;
  whoWeServeTitle?: string;
  complianceTitle?: string;
  complianceSubtitle?: string;
  finalCtaSection?: React.ReactNode;
}

export function DivisionTemplate({
  locale,
  division,
  formVariant,
  formTitle,
  formSubtitle,
  formSubmitLabel,
  formSecondaryAction,
  heroAction,
  customSection,
  afterHeroSection,
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  primaryCta,
  secondaryCta,
  whatWeDoTitle,
  whatWeDoIntro,
  howWeWorkTitle,
  whoWeServeTitle,
  complianceTitle,
  complianceSubtitle,
  finalCtaSection,
}: DivisionTemplateProps) {
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const operatingCountries = COUNTRIES_DATA.filter((c) =>
    division.operatingCountries.includes(c.slug)
  );

  const relatedJobs = CAREERS_DATA.filter(
    (job) => job.divisionSlug === division.slug
  );

  const divisionGalleryMap: Record<
    BusinessDivision["slug"],
    {
      mainImage: string;
      badge: { en: string; ar: string };
    }
  > = {
    "commodity-trading": {
      mainImage: "/images/commodity-trading.jpg",
      badge: { en: "5 Trading Desks", ar: "5 مكاتب تداول" },
    },
    "shipping-chartering": {
      mainImage: "/images/shipping-vessel.jpg",
      badge: { en: "Asset-Light", ar: "تأجير مرن" },
    },
    "noor-al-arab": {
      mainImage: "/images/noor-al-arab.jpg",
      badge: { en: "AED 1B Target 2030", ar: "هدف مليار درهم" },
    },
    "government-tenders": {
      mainImage: "/images/fertilizer-agri.jpg",
      badge: { en: "Public Tenders", ar: "المناقصات" },
    },
    distribution: {
      mainImage: "/images/elite-baskets-fresh.jpg",
      badge: { en: "Wholesale & HORECA", ar: "الجملة والضيافة" },
    },
    logistics: {
      mainImage: "/images/cold-chain-warehouse.jpg",
      badge: { en: "Coordinated Logistics", ar: "لوجستيات منسقة" },
    },
    "pets-pantry": {
      mainImage: "/images/brands/pets-pantry.jpg",
      badge: { en: "Pet Food & Supplies (UAE)", ar: "أغذية ومستلزمات الحيوانات (الإمارات)" },
    },
  };

  const visual = divisionGalleryMap[division.slug];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={heroEyebrow ?? (locale === "ar" ? "قطاعات أعمال جي إس واي" : "GSY Business Division")}
        title={heroTitle ?? t(division.name, locale)}
        subtitle={heroSubtitle ?? t(division.heroPromise, locale)}
        showFamilyBadge={division.isFamilyBrand}
        backgroundImage={division.image}
        sideGallery={{
          mainImage: visual.mainImage,
          mainCaption: heroTitle ?? t(division.name, locale),
          badgeText: t(visual.badge, locale),
        }}
        primaryCta={
          primaryCta ??
          (!heroAction
            ? {
                label:
                  locale === "ar" ? "أرسل استفساراً لهذا القطاع" : "Send Division Enquiry",
                href: "#enquiry-form",
              }
            : undefined)
        }
        secondaryCta={
          secondaryCta ??
          (!heroAction
            ? {
                label:
                  locale === "ar" ? "تصفح المنتجات" : "View Product Catalogue",
                href: "/products",
              }
            : undefined)
        }
        breadcrumbs={[
          { label: locale === "ar" ? "الأعمال" : "Businesses", href: "/businesses" },
          { label: heroTitle ?? t(division.name, locale) },
        ]}
        actions={heroAction}
      />

      {afterHeroSection}

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {/* What We Do (3-4 Blocks) */}
        <section>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {whatWeDoTitle ?? (locale === "ar" ? "ماذا نقدم" : "What We Do")}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gsy-slate dark:text-white/80">
            {whatWeDoIntro ?? t(division.summary, locale)}
          </p>
          <div
            className={`mt-6 grid gap-5 sm:grid-cols-2 ${
              division.whatWeDo.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {division.whatWeDo.map((block, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gsy-navy/10 bg-white p-5 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <span className="text-xs font-extrabold text-gsy-gold dark:text-gsy-gold-light">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 text-base font-extrabold text-gsy-navy dark:text-white">
                  {t(block.title, locale)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                  {t(block.description, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Division-Specific Content (Desks, Ports, SKUs, Procurement Pack) */}
        {customSection}

        {/* How We Work (Process Strip) */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
            {howWeWorkTitle ?? (locale === "ar" ? "آلية العمل" : "How We Work")}
          </h2>
          <div
            className={`mt-6 grid gap-4 ${
              division.processSteps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
            } sm:grid-cols-2`}
          >
            {division.processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-gsy-navy/10 bg-gsy-ivory/70 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gsy-navy text-xs font-extrabold text-gsy-gold-light dark:bg-gsy-gold-bright dark:text-gsy-navy-deep">
                  {step.step}
                </span>
                <h3 className="mt-3 text-sm font-extrabold text-gsy-navy dark:text-white">
                  {t(step.title, locale)}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                  {t(step.detail, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Serve & Compliance */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <h2 className="text-lg font-extrabold text-gsy-navy dark:text-white">
              {whoWeServeTitle ?? (locale === "ar" ? "الجهات التي نخدمها" : "Who We Serve")}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-gsy-slate dark:text-white/80">
              {(locale === "ar" ? division.whoWeServe.ar : division.whoWeServe.en).map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-gsy-navy dark:text-white">
              <ShieldCheck className="h-5 w-5 text-gsy-gold dark:text-gsy-gold-light" />
              <span>{complianceTitle ?? (locale === "ar" ? "الامتثال وضوابط المخاطر" : "Compliance & Risk Discipline")}</span>
            </h2>
            {complianceSubtitle && (
              <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {complianceSubtitle}
              </p>
            )}
            <ul className="mt-4 space-y-2.5 text-sm text-gsy-slate dark:text-white/80">
              {(locale === "ar" ? division.complianceNotes.ar : division.complianceNotes.en).map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Where We Operate (Filtered Countries) */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
              <MapPin className="h-5 w-5 text-gsy-gold" />
              <span>{locale === "ar" ? "الأسواق التي نعمل بها" : "Where This Division Operates"}</span>
            </h2>
            <Link
              href={localePath(locale, "/presence")}
              className="text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              {locale === "ar" ? "عرض خريطة الانتشار العالمي ←" : "Open Global Presence Map →"}
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {operatingCountries.map((c) => (
              <Link
                key={c.slug}
                href={localePath(locale, `/presence/${c.slug}`)}
                className="flex flex-col justify-between rounded-xl border border-gsy-navy/10 bg-white p-4 shadow-sm transition hover:border-gsy-gold/40 dark:border-white/10 dark:bg-gsy-navy"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl" aria-hidden="true">
                      {c.flag}
                    </span>
                    <StatusBadge status={c.status} locale={locale} />
                  </div>
                  <h3 className="mt-2.5 text-sm font-extrabold text-gsy-navy dark:text-white">
                    {locale === "ar" ? c.name_ar : c.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-gsy-slate dark:text-white/75">
                    {t(c.role, locale)}
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-bold text-gsy-gold dark:text-gsy-gold-light">
                  {c.office.city}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Division Enquiry Form */}
        <section id="enquiry-form" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant={formVariant}
            title={formTitle}
            subtitle={formSubtitle}
            submitLabel={formSubmitLabel}
            secondaryAction={formSecondaryAction}
            routeTarget={t(division.enquiryRouteLabel, locale)}
          />
        </section>

        {/* Final CTA Banner */}
        {finalCtaSection}

        {/* Related Open Roles */}
        {relatedJobs.length > 0 && (
          <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-gsy-navy dark:text-white">
                <Briefcase className="h-5 w-5 text-gsy-gold" />
                <span>{locale === "ar" ? "الوظائف المرتبطة بهذا القطاع" : "Related Open Roles"}</span>
              </h2>
              <Link
                href={localePath(locale, "/careers")}
                className="text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
              >
                {locale === "ar" ? "جميع الوظائف" : "All Careers"}
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {relatedJobs.map((job) => (
                <Link
                  key={job.slug}
                  href={localePath(locale, `/careers/${job.slug}`)}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gsy-navy/10 bg-gsy-ivory/60 p-4 transition hover:border-gsy-gold/40 dark:border-white/10 dark:bg-white/5"
                >
                  <div>
                    <h3 className="text-sm font-bold text-gsy-navy dark:text-white">
                      {t(job.title, locale)}
                    </h3>
                    <p className="mt-1 text-xs text-gsy-slate dark:text-white/75">
                      {t(job.location, locale)} • {t(job.employmentType, locale)}
                    </p>
                  </div>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

