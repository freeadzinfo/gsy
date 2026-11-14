import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, Scale, FileCheck2, Landmark, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { isValidLocale, localePath } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function GovernancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const pillars = [
    {
      icon: Scale,
      title: {
        en: "Understanding and Managing Business Risks",
        ar: "فهم وإدارة مخاطر الأعمال",
      },
      desc: {
        en: "International business involves commercial, operational, financial and market-related risks. We recognise the importance of identifying relevant risks, evaluating business decisions carefully and maintaining appropriate controls across our activities.",
        ar: "تنطوي الأعمال الدولية على مخاطر تجارية وتشغيلية ومالية ومرتبطة بالسوق. وندرك أهمية تحديد المخاطر ذات الصلة، وتقييم القرارات التجارية بعناية، والحفاظ على الضوابط المناسبة عبر مختلف أنشطتنا.",
      },
      points: [
        { en: "Understanding commercial & market conditions", ar: "فهم الظروف التجارية والسوقية" },
        { en: "Considering operational & supply chain risks", ar: "مراعاة المخاطر التشغيلية وسلاسل الإمداد" },
        { en: "Supporting responsible business decisions", ar: "دعم القرارات التجارية المسؤولة" },
      ],
    },
    {
      icon: ShieldCheck,
      title: {
        en: "Responsible Business Across Markets",
        ar: "أعمال مسؤولة عبر الأسواق",
      },
      desc: {
        en: "Operating across international markets requires attention to applicable laws, regulations and business requirements. We recognise the importance of appropriate due diligence and compliance considerations when engaging with customers, suppliers and partners.",
        ar: "يتطلب العمل عبر الأسواق الدولية الاهتمام بالقوانين واللوائح والمتطلبات التجارية المعمول بها. وندرك أهمية العناية الواجبة المناسبة واعتبارات الامتثال عند التعامل مع العملاء والموردين وشركاء الأعمال.",
      },
      points: [
        { en: "Respecting applicable laws & regulations", ar: "احترام القوانين واللوائح المعمول بها" },
        { en: "Considering relevant business & partner due diligence", ar: "إجراء العناية الواجبة المناسبة للشركاء" },
        { en: "Promoting ethical & transparent conduct", ar: "تعزيز السلوك الأخلاقي والشفاف" },
      ],
    },
    {
      icon: FileCheck2,
      title: {
        en: "A Commitment to Responsible Operations",
        ar: "التزام بالعمليات المسؤولة",
      },
      desc: {
        en: "Quality and responsibility are important considerations across our trading, food distribution, shipping and retail activities. We aim to work with appropriate business processes and quality considerations that support customer confidence and long-term relationships.",
        ar: "تعد الجودة والمسؤولية من الاعتبارات المهمة عبر أنشطتنا في التجارة وتوزيع الأغذية والشحن والتجزئة. ونهدف إلى العمل وفق إجراءات تجارية مناسبة واعتبارات جودة تدعم ثقة العملاء وعلاقات العمل طويلة الأمد.",
      },
      points: [
        { en: "Quality-focused trading & distribution", ar: "تجارة وتوزيع يرتكزان على الجودة" },
        { en: "Supporting customer confidence", ar: "تعزيز ثقة العملاء والشركاء" },
        { en: "Destination-specific product specifications", ar: "مراعاة مواصفات أسواق الوجهة" },
      ],
    },
    {
      icon: Landmark,
      title: {
        en: "Trust Built Through Every Relationship",
        ar: "الثقة تبنى من خلال كل علاقة تجارية",
      },
      desc: {
        en: "We believe responsible business practices are essential to sustainable growth. As GSY International Group continues to develop its international presence, we remain focused on strengthening business oversight, maintaining compliance awareness and building trusted relationships across markets.",
        ar: "نؤمن بأن ممارسات الأعمال المسؤولة ركيزة أساسية للنمو المستدام. ومع مواصلة مجموعة جي إس واي الدولية تطوير تواجدها الدولي، يظل تركيزنا منصباً على تعزيز الرقابة على الأعمال والوعي بالامتثال وبناء علاقات موثوقة عبر الأسواق.",
      },
      points: [
        { en: "Transparency & accountability in conduct", ar: "الشفافية والمساءلة في التعاملات" },
        { en: "Appropriate business oversight", ar: "الرقابة المناسبة على الأنشطة" },
        { en: "Sustainable international growth", ar: "نمو دولي مستدام ومسؤول" },
      ],
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. Page Introduction */}
      <PageHero
        locale={locale}
        eyebrow={
          locale === "ar"
            ? "بناء الثقة من خلال ممارسات الأعمال المسؤولة"
            : "Building Trust Through Responsible Business Practices"
        }
        title={locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance"}
        subtitle={
          locale === "ar"
            ? "في مجموعة جي إس واي الدولية، ندرك أن الثقة والمساءلة والممارسات التجارية المسؤولة ركائز أساسية لبناء علاقات تجارية طويلة الأجل.\n\nومع امتداد أنشطتنا عبر التجارة الدولية والشحن وتوزيع الأغذية والتجزئة، نولي أهمية بالغة للرقابة المناسبة والوعي بالامتثال واتخاذ القرارات المسؤولة."
            : "At GSY International Group, we recognise that trust, accountability and responsible business practices are essential to building long-term business relationships.\n\nAs our activities span international trade, shipping, food distribution and retail, we place importance on appropriate business oversight, compliance awareness and responsible decision-making."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "تواصل مع جي إس واي" : "Contact GSY",
          href: "/contact",
        }}
        secondaryCta={{
          label: locale === "ar" ? "استكشف أعمالنا" : "Explore Our Businesses",
          href: "/businesses",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. Our Governance Approach */}
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "نهجنا في الحوكمة" : "Our Governance Approach"}
            </p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-gsy-navy sm:text-2xl dark:text-white">
              {locale === "ar"
                ? "أعمال مسؤولة. علاقات أقوى."
                : "Responsible Business. Stronger Relationships."}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80 sm:text-base">
              {locale === "ar"
                ? "يسترشد نهجنا في الحوكمة بأهمية الشفافية والمساءلة والسلوك التجاري المسؤول. ونهدف إلى الحفاظ على الرقابة المناسبة على أنشطة أعمالنا مع دعم المصالح طويلة الأجل لعملائنا وموردينا وشركائنا وأصحاب المصلحة."
                : "Our approach to governance is guided by the importance of transparency, accountability and responsible business conduct. We aim to maintain appropriate oversight of our business activities while supporting the long-term interests of our customers, suppliers, partners and stakeholders."}
            </p>
          </div>
        </div>

        {/* 3. Risk Management, 4. Compliance & Due Diligence, 5. Quality, 6. Our Commitment */}
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-gsy-navy dark:text-white">
                    {locale === "ar" ? p.title.ar : p.title.en}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                    {locale === "ar" ? p.desc.ar : p.desc.en}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-gsy-navy/10 pt-4 dark:border-white/10">
                  {p.points.map((pt) => (
                    <span
                      key={pt.en}
                      className="rounded-full bg-gsy-gold/10 px-2.5 py-0.5 text-[11px] font-semibold text-gsy-navy dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light"
                    >
                      {locale === "ar" ? pt.ar : pt.en}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Specifications & Destination Variance Callout */}
        <div className="rounded-2xl border border-gsy-gold/35 bg-gsy-gold-pale/60 p-6 dark:border-gsy-gold-light/25 dark:bg-gsy-gold-bright/10">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
            <div className="text-xs leading-relaxed text-gsy-navy sm:text-sm dark:text-white/90">
              <p className="font-extrabold">
                {locale === "ar"
                  ? "مواصفات المنتجات والمتطلبات التنظيمية"
                  : "Product Specifications & Regulatory Requirements"}
              </p>
              <p className="mt-1">
                {locale === "ar"
                  ? "قد تختلف مواصفات المنتجات والشهادات والمتطلبات التنظيمية اعتماداً على نوع المنتج والسوق والوجهة النهائية؛ وتلتزم المجموعة بالشفافية والمساءلة والعناية الواجبة المناسبة في كافة تعاملاتها."
                  : "Product specifications, certifications and regulatory requirements may vary depending on the product, market and destination. GSY International Group maintains appropriate business processes, partner due diligence and compliance awareness across all activities."}
              </p>
            </div>
          </div>
        </div>

        {/* 7. Closing Section */}
        <div className="rounded-2xl border border-gsy-gold/30 bg-gsy-navy p-7 text-white shadow-card sm:p-9 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
                {locale === "ar" ? "شراكات مبنية على الثقة" : "Trust & Responsibility"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                {locale === "ar"
                  ? "بناء الأعمال على الثقة والمسؤولية"
                  : "Building Business on Trust and Responsibility"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {locale === "ar"
                  ? "نرحب بالعلاقات التجارية القائمة على الشفافية والمساءلة والثقة المتبادلة."
                  : "We welcome business relationships built on transparency, accountability and mutual trust."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "تواصل مع جي إس واي" : "Contact GSY"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={localePath(locale, "/businesses")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <span>{locale === "ar" ? "استكشف أعمالنا" : "Explore Our Businesses"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

