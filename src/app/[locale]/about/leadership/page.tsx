import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { UserCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { isValidLocale, localePath } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { getUiCopy } from "@/data/dictionary";

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const copy = getUiCopy(locale);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const philosophyPoints = [
    {
      id: "strategic-direction",
      title: { en: "Strategic Direction", ar: "التوجيه الاستراتيجي" },
      desc: {
        en: "Guiding the group's long-term business priorities and growth ambitions.",
        ar: "توجيه أولويات الأعمال طويلة الأجل وطموحات النمو للمجموعة.",
      },
    },
    {
      id: "business-development",
      title: { en: "Business Development", ar: "تطوير الأعمال" },
      desc: {
        en: "Identifying opportunities across international markets and industries.",
        ar: "تحديد الفرص الواعدة عبر الأسواق والقطاعات الدولية.",
      },
    },
    {
      id: "accountability",
      title: { en: "Accountability", ar: "المساءلة والشفافية" },
      desc: {
        en: "Encouraging responsible decision-making and business practices.",
        ar: "تشجيع اتخاذ القرارات المسؤولة والممارسات التجارية المنضبطة.",
      },
    },
    {
      id: "collaboration",
      title: { en: "Collaboration", ar: "التعاون المشترك" },
      desc: {
        en: "Connecting teams and businesses across the GSY Group.",
        ar: "ربط فرق العمل والشركات عبر مختلف قطاعات مجموعة جي إس واي.",
      },
    },
    {
      id: "long-term-vision",
      title: { en: "Long-Term Vision", ar: "رؤية طويلة الأمد" },
      desc: {
        en: "Building a stronger international business network for the future.",
        ar: "بناء شبكة أعمال دولية أكثر قوة ومرونة للمستقبل.",
      },
    },
  ];

  const slots = [
    {
      role: { en: "Group Chairman", ar: "رئيس مجلس الإدارة" },
      scope: { en: "Group Holding Strategy & Governance — Dubai HQ", ar: "استراتيجية الشركة القابضة والحوكمة — دبي" },
    },
    {
      role: { en: "Group Chief Executive Officer (Placeholder)", ar: "الرئيس التنفيذي للمجموعة (بيانات تجريبية)" },
      scope: { en: "Cross-Border Food Platform & 25-Country Rollout", ar: "المنصة الغذائية والتوسع في 25 دولة" },
    },
    {
      role: { en: "Head of Commodity Trading & Chartering (Placeholder)", ar: "رئيس قطاع تداول السلع والشحن (بيانات تجريبية)" },
      scope: { en: "FMCG, Fertilizer, Frozen, Minerals, Metals & Freight Desk", ar: "مكاتب السلع الخمسة ومكتب التأجير البحري" },
    },
    {
      role: { en: "Head of Noor Al Arab & Retail Group (Placeholder)", ar: "رئيس قطاع نور العرب والأسواق المركزية (بيانات تجريبية)" },
      scope: { en: "HORECA Distribution & 50-Outlet 2030 Supermarket Expansion", ar: "توزيع الضيافة وخطة الـ 50 متجراً لعام 2030" },
    },
    {
      role: { en: "Independent Directors & Audit Committee (Placeholder)", ar: "الأعضاء المستقلون ولجنة التدقيق والمخاطر (بيانات تجريبية)" },
      scope: { en: "Board Risk, Compliance & Big-4 External Audit Oversight", ar: "إشراف مجلس الإدارة على المخاطر والامتثال والتدقيق" },
    },
    {
      role: { en: "Group Chief Financial & Risk Officer (Placeholder)", ar: "المدير المالي وإدارة المخاطر (بيانات تجريبية)" },
      scope: { en: "Trade Finance, Treasury, Credit Insurance & Sanctions Governance", ar: "التمويل التجاري والخزانة والتأمين الائتماني والامتثال" },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. Page Introduction */}
      <PageHero
        locale={locale}
        eyebrow={
          locale === "ar"
            ? "قيادة توجه مسيرتنا نحو المستقبل"
            : "Leadership Guiding Our Journey Forward"
        }
        title={locale === "ar" ? "قيادتنا التنفيذية" : "Our Leadership"}
        subtitle={
          locale === "ar"
            ? "تتشكل مسيرة مجموعة جي إس واي الدولية من خلال القيادة والخبرة والالتزام المشترك ببناء علاقات تجارية طويلة الأمد.\n\nيوجه فريق القيادة لدينا المسار التجاري للمجموعة، ويدعم التطوير الاستراتيجي، ويعمل على تعزيز تواجدنا الدولي عبر آسيا والخليج وأفريقيا."
            : "GSY International Group's journey is shaped by leadership, experience and a shared commitment to building long-term business relationships.\n\nOur leadership team guides the group's business direction, supports strategic development and works towards strengthening our international presence across Asia, the Gulf and Africa."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "اكتشف رؤية 2030" : "Discover Our Vision 2030",
          href: "/about/vision-2030",
        }}
        secondaryCta={{
          label: locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance",
          href: "/about/governance",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "قيادتنا" : "Our Leadership" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. Leadership Philosophy */}
        <div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "فلسفة القيادة" : "Leadership Philosophy"}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {locale === "ar"
                ? "مسترشدة بالخبرة. موجهة نحو النمو."
                : "Guided by Experience. Focused on Growth."}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
              {locale === "ar"
                ? "نؤمن بأن القيادة الفعالة تبنى على الخبرة والمساءلة والتعاون والفهم الدقيق لفرص الأعمال."
                : "We believe effective leadership is built on experience, accountability, collaboration and a clear understanding of business opportunities."}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {philosophyPoints.map((pt) => (
              <div
                key={pt.id}
                className="rounded-xl border border-gsy-navy/10 bg-white p-5 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <h3 className="text-sm font-extrabold text-gsy-navy dark:text-gsy-gold-light">
                  {locale === "ar" ? pt.title.ar : pt.title.en}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                  {locale === "ar" ? pt.desc.ar : pt.desc.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Our Leadership Team */}
        <div>
          <div className="relative h-64 overflow-hidden rounded-2xl border border-gsy-navy/10 shadow-card sm:h-80 dark:border-gsy-gold-light/15">
            <Image
              src="/images/boardroom-team.jpg"
              alt={
                locale === "ar"
                  ? "غرفة اجتماعات القيادة التنفيذية في دبي (صورة توضيحية)"
                  : "GSY International Group Dubai executive leadership boardroom — illustrative demo imagery"
              }
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/90 via-gsy-navy/25 to-transparent" />
            <div className="absolute bottom-5 start-5 end-5 flex flex-wrap items-end justify-between gap-3 text-white">
              <div>
                <span className="rounded bg-gsy-gold-bright px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-gsy-navy-deep">
                  {copy.demoPlaceholderTag}
                </span>
                <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                  {locale === "ar"
                    ? "تعرف على فريق القيادة لدينا"
                    : "Meet Our Leadership Team"}
                </h2>
                <p className="mt-1 text-xs text-white/85 sm:text-sm">
                  {locale === "ar"
                    ? "يجمع الأفراد في مجموعة جي إس واي الدولية بين القيادة والخبرة التجارية والالتزام المشترك بمواصلة تطوير المجموعة."
                    : "The people behind GSY International Group bring together leadership, business experience and a shared commitment to the group's continued development."}
                </p>
              </div>
              <p className="text-xs text-white/80">{copy.illustImageCaption}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((slot, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gsy-ivory text-gsy-gold dark:bg-white/10 dark:text-gsy-gold-light">
                    <UserCircle2 className="h-8 w-8" />
                  </span>
                  <span className="rounded-full border border-gsy-gold/30 bg-gsy-gold-pale px-2.5 py-0.5 text-[10px] font-bold uppercase text-gsy-gold dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light">
                    {copy.demoPlaceholderTag}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-gsy-navy dark:text-white">
                  {locale === "ar" ? slot.role.ar : slot.role.en}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                  {locale === "ar" ? slot.scope.ar : slot.scope.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Moving Forward Together */}
        <div className="rounded-2xl border border-gsy-gold/30 bg-gsy-navy p-7 text-white shadow-card sm:p-9 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
                {locale === "ar" ? "نتحرك للأمام معاً" : "Moving Forward Together"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                {locale === "ar"
                  ? "قيادة الفصل التالي من مسيرة جي إس واي"
                  : "Leading the Next Chapter of GSY"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {locale === "ar"
                  ? "مع عمل مجموعة جي إس واي الدولية نحو تحقيق طموحات رؤية 2030، تظل القيادة مركزة على تطوير الأعمال، والشراكات الدولية، وتعزيز أعمال المجموعة المترابطة. هدفنا هو بناء مجموعة بقيمة 2.5 مليار دولار مع التواجد في أكثر من 25 دولة بحلول عام 2030."
                  : "As GSY International Group works towards its Vision 2030 ambitions, leadership remains focused on business development, international partnerships and strengthening the group's connected businesses. Our goal is to build a US$2.5 billion group with a presence in more than 25 countries by 2030."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href={localePath(locale, "/about/vision-2030")}
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "اكتشف رؤية 2030" : "Discover Our Vision 2030"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

