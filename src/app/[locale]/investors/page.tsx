import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  TrendingUp,
  Globe2,
  Building2,
  Handshake,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Landmark,
  Store,
  Truck,
  Sprout,
  Users2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { GatedProfileForm } from "@/components/investors/GatedProfileForm";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "تشارك مع جي إس واي | مجموعة جي إس واي العالمية"
        : "Partner With GSY | GSY International Group",
    description:
      locale === "ar"
        ? "بناء شراكات طويلة الأجل من خلال التجارة والاستثمار والنمو التجاري المسؤول عبر الأسواق الدولية."
        : "Building long-term partnerships through trade, investment and responsible business growth across international markets.",
  };
}

export default async function InvestorsOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const visionHighlights = [
    {
      title: {
        en: "US$2.5 billion group goal by 2030",
        ar: "هدف بناء مجموعة بقيمة 2.5 مليار دولار بحلول 2030",
      },
      icon: TrendingUp,
    },
    {
      title: {
        en: "Expansion across international markets",
        ar: "التوسع عبر الأسواق الدولية",
      },
      icon: Globe2,
    },
    {
      title: {
        en: "Growth across trading, shipping, food and retail",
        ar: "النمو في التجارة والشحن والأغذية والتجزئة",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Long-term business partnerships",
        ar: "شراكات تجارية طويلة الأجل",
      },
      icon: Handshake,
    },
  ];

  const halalPrinciples = [
    {
      title: { en: "Shariah alignment", ar: "التوافق مع الشريعة" },
      desc: {
        en: "Commercial alignment with Islamic principles and real asset participation.",
        ar: "توافق تجاري مع مبادئ الشريعة والمشاركة في الأصول الحقيقية.",
      },
    },
    {
      title: { en: "Transparency", ar: "الشفافية" },
      desc: {
        en: "Transparent operational reporting and clear contractual terms.",
        ar: "تقارير تشغيلية شفافة وبنود تعاقدية واضحة.",
      },
    },
    {
      title: { en: "Clear business activity", ar: "نشاط تجاري واضح" },
      desc: {
        en: "Participation linked directly to operating trade flows and retail stores.",
        ar: "مشاركات مرتبطة مباشرة بالتجارة التشغيلية ومتاجر التجزئة.",
      },
    },
    {
      title: { en: "Responsible growth", ar: "نمو مسؤول" },
      desc: {
        en: "Long-term sustainable expansion balancing partner value and resilience.",
        ar: "توسع مستدام يوازن بين القيمة للشركاء واستمرارية الأعمال.",
      },
    },
    {
      title: { en: "Appropriate investor communication", ar: "تواصل ملائم مع المستثمرين" },
      desc: {
        en: "Direct and confidential engagement tailored for qualified partners.",
        ar: "تواصل مباشر وسري مخصص للشركاء والمستثمرين المؤهلين.",
      },
    },
  ];

  const partnershipCategories = [
    {
      title: { en: "Suppliers & Producers", ar: "الموردون والمنتجون" },
      desc: {
        en: "Explore sourcing and supply relationships across agricultural staples, foods, fertilizer, minerals and metals.",
        ar: "استكشف علاقات التوريد والشراء للسلع الزراعية الأساسية والأغذية والأسمدة والمعادن.",
      },
      icon: Sprout,
    },
    {
      title: { en: "Distributors", ar: "الموزعون" },
      desc: {
        en: "Discuss distribution opportunities across relevant wholesale, retail and HORECA markets.",
        ar: "ناقش فرص التوزيع عبر أسواق الجملة والتجزئة وقطاع الضيافة في الأسواق الإقليمية والدولية.",
      },
      icon: Truck,
    },
    {
      title: { en: "Banks & Financial Institutions", ar: "البنوك والمؤسسات المالية" },
      desc: {
        en: "Connect with our team to discuss institutional relationships, LC facilities and trade finance cooperation.",
        ar: "تواصل مع فريقنا لمناقشة العلاقات المؤسسية والاعتمادات المستندية والتمويل التجاري.",
      },
      icon: Landmark,
    },
    {
      title: { en: "Retail Partners", ar: "شركاء التجزئة" },
      desc: {
        en: "Explore supermarket and retail development opportunities across our retail footprint.",
        ar: "استكشف فرص تطوير قطاع التجزئة والمتاجر ضمن شبكة علاماتنا التجارية.",
      },
      icon: Store,
    },
    {
      title: { en: "Property Owners", ar: "ملاك العقارات" },
      desc: {
        en: "Discuss potential retail locations and store development partnerships in prime commercial sites.",
        ar: "ناقش المواقع التجارية المحتملة وشراكات تطوير المتاجر في أفضل المواقع الحيوية.",
      },
      icon: Building2,
    },
    {
      title: { en: "Business Investors", ar: "المستثمرون التجاريون" },
      desc: {
        en: "Contact GSY to explore relevant partnership discussions and long-term commercial participation.",
        ar: "تواصل مع مجموعة جي إس واي لمناقشة فرص الشراكة الاستراتيجية والمشاركات التجارية طويلة الأجل.",
      },
      icon: Users2,
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. HERO SECTION */}
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "الشراكات والاستثمار" : "Partnerships & Investment"}
        title={locale === "ar" ? "تشارك مع جي إس واي" : "Partner With GSY"}
        subtitle={
          locale === "ar"
            ? "بناء شراكات طويلة الأجل من خلال التجارة والاستثمار والنمو التجاري المسؤول. ترحب مجموعة جي إس واي العالمية بمناقشة التعاون مع الشركاء التجاريين المناسبين والمنتجين والموزعين وشركاء التجزئة والمستثمرين الذين يشاركوننا رؤية طويلة الأجل نحو النمو التجاري المسؤول."
            : "Building long-term partnerships through trade, investment and responsible business growth. GSY International Group welcomes discussions with suitable business partners, producers, distributors, retail partners and investors who share a long-term approach to responsible business growth."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف البرنامج الاستثماري" : "Explore Investment Programme",
          href: localePath(locale, "/investors/halal-investment"),
        }}
        secondaryCta={{
          label: locale === "ar" ? "ناقش فرصة شراكة" : "Discuss a Partnership",
          href: "#partner-with-gsy",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "المستثمرون" : "Investors" }]}
      />

      {/* STATS STRIP BELOW HERO */}
      <section className="border-b border-gsy-navy/10 bg-white dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-gsy-navy/10 px-4 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x rtl:lg:divide-x-reverse sm:px-6 lg:px-8 dark:divide-white/10">
          {[
            {
              val: "1974",
              label: { en: "Founded", ar: "سنة التأسيس" },
            },
            {
              val: "7",
              label: { en: "Countries today", ar: "دول ننشط فيها اليوم" },
            },
            {
              val: "25+",
              label: { en: "Countries by 2030", ar: "دولة بحلول 2030" },
            },
            {
              val: "350+",
              label: { en: "People", ar: "فريق العمل" },
            },
            {
              val: "US$2.5B",
              label: { en: "Group goal 2030", ar: "هدف المجموعة 2030" },
            },
          ].map((item, idx) => (
            <div key={idx} className="px-4 py-6 text-center sm:py-7">
              <div className="text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-gsy-gold-light">
                {item.val}
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gsy-slate dark:text-white/75">
                {locale === "ar" ? item.label.ar : item.label.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. OUR GROWTH VISION */}
        <section id="growth-vision" className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-10 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "رؤية النمو 2030" : "Vision 2030"}
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {locale === "ar" ? "البناء من أجل نمو طويل الأجل" : "Building for Long-Term Growth"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85">
              {locale === "ar"
                ? "تعمل مجموعة جي إس واي العالمية نحو تحقيق رؤيتها في بناء مجموعة بقيمة 2.5 مليار دولار أمريكي بحلول عام 2030، مدعومة بتطوير أعمالها في قطاعات التجارة والشحن البحري والأغذية والتوزيع والأسواق المركزية."
                : "GSY International Group is working towards its vision of building a US$2.5 billion group by 2030, supported by the development of its trading, shipping, food, distribution and supermarket businesses."}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85">
              {locale === "ar"
                ? "يركز طموحنا التوسعي على تعزيز الأنشطة التجارية وتوسيع الروابط السوقية وتطوير علاقات طويلة الأجل مع الشركاء عبر الأسواق الدولية."
                : "Our growth ambition is focused on strengthening business activities, expanding market connections and developing long-term relationships with partners across international markets."}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visionHighlights.map((vh, i) => {
              const Icon = vh.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 rounded-xl border border-gsy-navy/10 bg-gsy-ivory/60 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gsy-navy text-gsy-gold-bright dark:bg-white/10 dark:text-gsy-gold-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold text-gsy-navy dark:text-white">
                    {t(vh.title, locale)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>
                <strong>{locale === "ar" ? "تنبيه هام: " : "Important Note: "}</strong>
                {locale === "ar"
                  ? "يمثل رقم 2.5 مليار دولار أمريكي طموحاً مستقبلياً للمجموعة بحلول عام 2030، وليس إيراداً حالياً."
                  : "The US$2.5 billion figure is a future group ambition, not current revenue."}
              </span>
            </div>
          </div>
        </section>

        {/* 3. HALAL INVESTMENT PROGRAMME */}
        <section id="halal-investment" className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-10 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar" ? "برنامج الاستثمار الحلال" : "Halal Investment Programme"}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
                {locale === "ar"
                  ? "استثمار أخلاقي. نشاط تجاري حقيقي. نمو مسؤول."
                  : "Ethical Investment. Real Business. Responsible Growth."}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85">
                {locale === "ar"
                  ? "استكشف فرصاً استثمارية متوافقة مع الشريعة الإسلامية ومرتبطة بأنشطة تجارية حقيقية. يُقدَّم برنامج الاستثمار الحلال لـ GSY كعرض استثماري مصمم حول مبادئ الشريعة والمشاركة في النشاط التجاري الفعلي."
                  : "Explore Shariah-conscious investment opportunities connected to real business activities. GSY’s Halal Investment Programme is presented as an investment offering designed around Shariah-compliant principles and participation in real business activity."}
              </p>
            </div>
            <Link
              href={localePath(locale, "/investors/halal-investment")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gsy-gold-bright px-4 py-2.5 text-xs font-extrabold text-gsy-navy-deep hover:bg-gsy-gold-light transition shadow-sm"
            >
              <span>{locale === "ar" ? "طلب معلومات البرنامج" : "Request Programme Information"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {halalPrinciples.map((hp, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-xl border border-gsy-navy/10 bg-gsy-ivory/50 p-4.5 dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <CheckCircle2 className="h-5 w-5 text-gsy-gold dark:text-gsy-gold-light" />
                  <h3 className="mt-3 text-sm font-extrabold text-gsy-navy dark:text-white">
                    {t(hp.title, locale)}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(hp.desc, locale)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-gsy-navy/10 bg-gsy-ivory/80 p-4 text-xs leading-relaxed text-gsy-slate dark:border-white/10 dark:bg-white/5 dark:text-white/75">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
              <span>
                {locale === "ar"
                  ? "تخضع معلومات البرنامج ومعايير الأهلية وإفصاحات المخاطر والهيكل التعاقدي والوضع التنظيمي للمراجعة والموافقة من قِبل المستشارين القانونيين والشرعيين للشركة قبل النشر النهائي."
                  : "Programme information, eligibility criteria, risk disclosures, contractual structure and regulatory position must be reviewed and approved by the company's legal and Shariah advisers before publication."}
              </span>
            </div>
          </div>
        </section>

        {/* 4. PARTNER WITH GSY */}
        <section id="partner-with-gsy" className="scroll-mt-24 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar" ? "مسارات الشراكة" : "Partnership Tracks"}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
                {locale === "ar"
                  ? "استكشف فرص الشراكات التجارية"
                  : "Explore Business Partnership Opportunities"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85">
                {locale === "ar"
                  ? "نرحب باستفسارات المؤسسات والشركات المهتمة باستكشاف الفرص التجارية والشراكات طويلة الأجل مع مجموعة جي إس واي العالمية."
                  : "We welcome enquiries from organisations interested in exploring business opportunities and long-term partnerships with GSY International Group."}
              </p>
            </div>
            <a
              href="#investor-enquiry"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gsy-navy px-4 py-2.5 text-xs font-extrabold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light transition"
            >
              <span>{locale === "ar" ? "ناقش فرصة شراكة" : "Discuss a Partnership"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipCategories.map((pc, i) => {
              const Icon = pc.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 hover:shadow-card-hover dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-bright dark:bg-white/10 dark:text-gsy-gold-light">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold text-gsy-navy dark:text-white">
                      {t(pc.title, locale)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                      {t(pc.desc, locale)}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-gsy-navy/10 pt-3 dark:border-white/10">
                    <a
                      href="#investor-enquiry"
                      className="inline-flex items-center gap-1 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
                    >
                      <span>{locale === "ar" ? "تواصل حول هذا المسار" : "Connect on this track"}</span>
                      <ArrowIcon className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. COMPANY PROFILE DOWNLOAD */}
        <section id="company-profile" className="scroll-mt-24">
          <GatedProfileForm locale={locale} />
        </section>

        {/* 6. INVESTOR & PARTNERSHIP ENQUIRY */}
        <section id="investor-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="investor"
            title={locale === "ar" ? "ابدأ محادثة مع جي إس واي" : "Start a Conversation With GSY"}
            subtitle={
              locale === "ar"
                ? "مهتم بمعرفة المزيد عن برنامج الاستثمار في جي إس واي أو استكشاف شراكة تجارية؟ أرسل تفاصيلك وسيقوم فريقنا المختص بالتواصل معك."
                : "Interested in learning more about GSY's investment programme or exploring a business partnership? Submit your details and our relevant team can follow up."
            }
            submitLabel={locale === "ar" ? "إرسال الاستفسار" : "Submit Enquiry"}
            routeTarget={locale === "ar" ? "فريق الاستثمار والشراكات" : "Investment & Partnerships Desk"}
          />
        </section>
      </div>
    </div>
  );
}
