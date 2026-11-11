import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle2, Globe2, ShieldCheck, Layers } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { SITE_SETTINGS } from "@/data/site-settings";
import { PageHero } from "@/components/shared/PageHero";
import { VisionTimeline } from "@/components/shared/VisionTimeline";

export default async function Vision2030Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const countryEngineSteps = [
    { en: "1. Export", ar: "1. التصدير المباشر" },
    { en: "2. Trade Office", ar: "2. مكتب التداول" },
    { en: "3. Wholesale Company", ar: "3. شركة الجملة" },
    { en: "4. Distribution Network", ar: "4. شبكة التوزيع" },
    { en: "5. Processing", ar: "5. التصنيع والتعبئة" },
    { en: "6. Retail", ar: "6. التجزئة والأسواق" },
  ];

  const principles = [
    { en: "Trade before we build", ar: "التداول قبل الاستثمار في الأصول" },
    { en: "Own the brand", ar: "امتلاك العلامة التجارية" },
    { en: "Distribution is the moat", ar: "شبكة التوزيع هي الميزة التنافسية" },
    { en: "Grow without excess debt", ar: "النمو المنضبط دون ديون مفرطة" },
  ];

  const regions = [
    {
      name: { en: "GCC", ar: "دول مجلس التعاون الخليجي" },
      desc: {
        en: "UAE flagship hub, Saudi Arabia (2027), Oman (2027), Qatar (2028), Kuwait & Bahrain (2029).",
        ar: "الإمارات كمركز رئيسي، السعودية وعمان (2027)، قطر (2028)، الكويت والبحرين (2029).",
      },
    },
    {
      name: { en: "Africa", ar: "أفريقيا" },
      desc: {
        en: "Tanzania launching, Kenya East Africa hub (2027), Nigeria Lagos office (2028), Ghana & Egypt (2029), South Africa (2030).",
        ar: "إطلاق تنزانيا، مركز كينيا (2027)، مكتب لاغوس بنيجيريا (2028)، غانا ومصر (2029)، جنوب أفريقيا (2030).",
      },
    },
    {
      name: { en: "Asia (+ Europe & Americas trade markets)", ar: "آسيا (مع أسواق أوروبا والأمريكتين)" },
      desc: {
        en: "India, Malaysia, Singapore, China sourcing, Sri Lanka, Indonesia, Bangladesh, Thailand, Vietnam, Philippines, plus UK, Portugal, Netherlands, USA and Canada.",
        ar: "الهند وماليزيا وسنغافورة والصين وسريلانكا وإندونيسيا وبنغلاديش وتايلاند وفيتنام والفلبين، مع أسواق المملكة المتحدة والبرتغال وهولندا والولايات المتحدة وكندا.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "رؤية مجموعة جي إس واي 2030" : "About • Vision 2030"}
        title={
          locale === "ar"
            ? `بناء مجموعة بقيمة ${SITE_SETTINGS.groupGoal2030} في أكثر من 25 دولة بحلول 2030`
            : `Building a ${SITE_SETTINGS.groupGoal2030} group across 25+ countries by 2030`
        }
        subtitle={
          locale === "ar"
            ? "مجموعة متكاملة في التجارة والشحن والأغذية والأسواق المركزية على ممر آسيا – الخليج – أفريقيا."
            : "An integrated trade, shipping, food and supermarket group operating across 25+ countries — with goals and milestones driven from one central CMS setting."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف خريطة الـ 28 سوقاً" : "Explore 28-Market Presence",
          href: "/presence",
        }}
        secondaryCta={{
          label: locale === "ar" ? "علاقات المستثمرين" : "Investor Overview",
          href: "/investors",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "رؤية 2030" : "Vision 2030" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {/* Timeline 2026 -> 2030 */}
        <div>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "الجدول الزمني للتوسع 2026 – 2030" : "2026 – 2030 Expansion Timeline"}
          </h2>
          <div className="mt-6">
            <VisionTimeline locale={locale} />
          </div>
        </div>

        {/* How We Grow: The GSY Country Engine */}
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
            <Layers className="h-4 w-4" />
            <span>{locale === "ar" ? "كيف ننمو" : "How We Grow"}</span>
          </div>
          <h2 className="mt-2 text-xl font-extrabold text-gsy-navy sm:text-2xl dark:text-white">
            {locale === "ar"
              ? "محرك التوسع القطري — 6 مراحل مرحلية مشروطة بتحقيق الأهداف"
              : "The GSY Country Engine — Six Gated Steps"}
          </h2>
          <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
            {locale === "ar"
              ? "يتبع كل سوق جديد ست خطوات متدرجة؛ ولا ننتقل إلى المرحلة التالية إلا بعد تحقيق أهداف المرحلة السابقة."
              : "Every market follows six gated steps. We move up to the next step only when the preceding step hits its commercial targets."}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {countryEngineSteps.map((s) => (
              <div
                key={s.en}
                className="rounded-xl border border-gsy-navy/10 bg-gsy-ivory/70 p-4 text-center font-bold text-gsy-navy dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <span className="text-sm">{locale === "ar" ? s.ar : s.en}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Three Regions & Principles */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
              <Globe2 className="h-5 w-5 text-gsy-gold" />
              <span>
                {locale === "ar"
                  ? "مناطق النمو الرئيسية الثلاث"
                  : "Three Regions of Growth (Plus Europe & Americas Trade Markets)"}
              </span>
            </h2>
            <div className="grid gap-4">
              {regions.map((r) => (
                <div
                  key={r.name.en}
                  className="rounded-xl border border-gsy-navy/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-gsy-navy"
                >
                  <h3 className="text-base font-extrabold text-gsy-navy dark:text-gsy-gold-light">
                    {locale === "ar" ? r.name.ar : r.name.en}
                  </h3>
                  <p className="mt-1.5 text-sm text-gsy-slate dark:text-white/80">
                    {locale === "ar" ? r.desc.ar : r.desc.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
              <ShieldCheck className="h-5 w-5 text-gsy-gold" />
              <span>{locale === "ar" ? "مبادئنا وحوكمتنا" : "Our Principles & Governance"}</span>
            </h2>
            <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-white/10 dark:bg-gsy-navy">
              <ul className="space-y-3 text-sm font-bold text-gsy-navy dark:text-white">
                {principles.map((p) => (
                  <li key={p.en} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
                    <span>{locale === "ar" ? p.ar : p.en}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-gsy-navy/10 pt-4 text-xs leading-relaxed text-gsy-slate dark:border-white/10 dark:text-white/75">
                {locale === "ar"
                  ? "الحوكمة: شركة قابضة في الإمارات، وأعضاء مجلس إدارة مستقلون، وتدقيق مالي من إحدى الشركات الأربع الكبرى، ولجنة مخاطر وامتثال ترفع تقاريرها لمجلس الإدارة."
                  : "Governance: UAE holding company, independent directors, Big-4 external audit, and risk & compliance reporting directly to a board committee."}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Vision Statement */}
        <blockquote className="rounded-2xl border-s-4 border-gsy-gold bg-gsy-navy p-7 text-base font-medium leading-relaxed text-white shadow-card sm:p-9 sm:text-lg dark:bg-[#050f1e]">
          {locale === "ar"
            ? "«على مدى خمسة عقود ربطت جي إس واي بين المنتجين والأسواق. وبحلول عام 2030 نهدف إلى العمل في أكثر من 25 دولة وبناء مجموعة بقيمة 2.5 مليار دولار لنقل الغذاء والأسمدة والمواد من المنشأ إلى السوق عبر ممر آسيا – الخليج – أفريقيا تحت مجموعة واحدة.»"
            : "“For five decades GSY has connected producers and markets. By 2030 we aim to operate in more than 25 countries and build a US$2.5 billion group, moving food, fertilizer and materials from origin to market on the Asia–Gulf–Africa corridor — sourcing, shipping, processing and delivering under one group.”"}
        </blockquote>
      </section>
    </div>
  );
}

