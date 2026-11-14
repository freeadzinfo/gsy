import React from "react";
import { notFound } from "next/navigation";
import { Target, Sparkles, Building2 } from "lucide-react";
import { isValidLocale, t } from "@/lib/i18n";
import { BUSINESS_DIVISIONS, NOOR_AL_ARAB_PLAN } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";
import { NoorAlArabCatalogInteractive } from "@/components/businesses/NoorAlArabCatalogInteractive";

export default async function NoorAlArabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "noor-al-arab")!;

  const heroAction = (
    <a
      href="#enquiry-form"
      className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
    >
      <Building2 className="h-4 w-4" />
      <span>
        {locale === "ar"
          ? "كن شريكاً تجارياً لنور العرب"
          : "Become Noor Al Arab Trade Partner"}
      </span>
    </a>
  );

  const targetCounterStrip = (
    <section className="border-b border-gsy-navy/10 bg-white dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-gsy-navy/10 px-4 sm:grid-cols-4 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse sm:px-6 lg:px-8 dark:divide-white/10">
        {[
          {
            val: "AED 1B",
            label: {
              en: "2030 Brand Target (Before 2030)",
              ar: "هدف العلامة قبل 2030",
            },
          },
          {
            val: "1,000 SKUs",
            label: {
              en: "UAE HORECA & Retail Range",
              ar: "أصناف التوزيع في الإمارات",
            },
          },
          {
            val: "₹200 Cr / yr",
            label: {
              en: "India Export & Distribution Target",
              ar: "هدف المبيعات السنوية في الهند",
            },
          },
          {
            val: "US$100M",
            label: {
              en: "Malaysia Distribution Target",
              ar: "هدف التوزيع في ماليزيا",
            },
          },
        ].map((item, i) => (
          <div key={i} className="px-4 py-6 text-center">
            <p className="text-2xl font-extrabold text-gsy-navy dark:text-gsy-gold-light" dir="ltr">
              {item.val}
            </p>
            <p className="mt-1 text-xs font-semibold text-gsy-slate dark:text-white/75">
              {t(item.label, locale)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  const customSection = (
    <div className="space-y-14">
      {/* 5. Our Growth Vision */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "رؤيتنا للنمو" : "Our Growth Vision"}
            </span>
            <h2 className="mt-1 flex items-center gap-2 text-2xl font-extrabold text-gsy-navy dark:text-white">
              <Target className="h-6 w-6 text-gsy-gold" />
              <span>
                {locale === "ar"
                  ? "بناء علامة تجارية متنامية في توزيع الأغذية"
                  : "Building a Growing Food Distribution Brand"}
              </span>
            </h2>
          </div>
          <span className="rounded-full bg-gsy-gold/15 px-3.5 py-1 text-xs font-bold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
            {locale === "ar" ? "هدف مستقبلي للعلامة قبل 2030" : "Future Brand Target (Before 2030)"}
          </span>
        </div>

        <div className="rounded-2xl border border-gsy-gold/30 bg-gsy-gold-pale/50 p-6 dark:border-gsy-gold-light/25 dark:bg-gsy-gold-bright/10">
          <p className="text-base font-extrabold text-gsy-navy sm:text-lg dark:text-white">
            {locale === "ar"
              ? "تعمل نور العرب نحو هدف نمو طموح يتمثل في تحقيق مليار درهم إماراتي قبل عام 2030."
              : "Noor Al Arab is working towards an ambitious growth target of AED 1 billion before 2030."}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/80">
            {locale === "ar"
              ? "يمثل هذا الرقم هدفاً استراتيجياً مستقبلياً للعلامة التجارية قبل 2030، حيث تركز خططنا على توسيع شبكات التوزيع والشراكات التجارية عبر قنوات التوريد الرئيسية."
              : "This figure represents an ambitious future brand milestone before 2030. Our growth plans focus on expanding distribution channels, operational capabilities and strategic trade relationships."}
          </p>
        </div>

        {/* 4 Geographic Plans Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              market: { en: "UAE", ar: "الإمارات" },
              desc: {
                en: "Expanding product distribution through HORECA, wholesale, catering and retail channels.",
                ar: "توسيع توزيع المنتجات عبر قنوات الضيافة (HORECA) والجملة والتموين والتجزئة.",
              },
            },
            {
              market: { en: "GCC", ar: "دول الخليج" },
              desc: {
                en: "Growing Noor Al Arab products and distribution into additional GCC markets.",
                ar: "تنمية منتجات وتوزيع نور العرب في أسواق خليجية إضافية.",
              },
            },
            {
              market: { en: "India", ar: "الهند" },
              desc: {
                en: "Developing distribution supported by GSY’s India export operations.",
                ar: "تطوير التوزيع بدعم من عمليات التصدير التابعة لـ جي إس واي في الهند.",
              },
            },
            {
              market: { en: "Malaysia", ar: "ماليزيا" },
              desc: {
                en: "Expanding distribution connections with supermarket operations and sourcing opportunities.",
                ar: "توسيع روابط التوزيع مع عمليات الأسواق المركزية وفرص التوريد.",
              },
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gsy-navy/10 bg-white p-5 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <span className="text-xs font-extrabold text-gsy-gold dark:text-gsy-gold-light">
                {t(item.market, locale)}
              </span>
              <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/80 sm:text-sm">
                {t(item.desc, locale)}
              </p>
            </div>
          ))}
        </div>

        {/* Market Expansion Plan Table */}
        <div className="overflow-x-auto rounded-2xl border border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <table className="w-full border-collapse text-start text-sm">
            <thead>
              <tr className="bg-gsy-navy text-xs font-bold uppercase tracking-wider text-white dark:bg-[#050f1e]">
                <th className="px-5 py-3.5 text-start">{locale === "ar" ? "السوق" : "Market"}</th>
                <th className="px-5 py-3.5 text-start">{locale === "ar" ? "خطة التوزيع" : "Distribution Plan"}</th>
                <th className="px-5 py-3.5 text-start">{locale === "ar" ? "المسار الاستراتيجي" : "Strategic Alignment"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gsy-navy/10 dark:divide-white/10">
              {NOOR_AL_ARAB_PLAN.map((row) => (
                <tr key={row.market.en}>
                  <td className="px-5 py-4 font-extrabold text-gsy-navy dark:text-white">
                    {t(row.market, locale)}
                  </td>
                  <td className="px-5 py-4 text-gsy-slate dark:text-white/80">
                    {t(row.plan, locale)}
                  </td>
                  <td className="px-5 py-4 font-bold text-gsy-gold dark:text-gsy-gold-light">
                    {t(row.target, locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[11px] text-gsy-slate/80 dark:text-white/60">
          {locale === "ar"
            ? "* تنويه تنظيمي: يُعرض مبلغ مليار درهم كهدف مستقبلي للعلامة التجارية قبل 2030. تبقى الأهداف المالية الخاصة بكل سوق، وأعداد الأصناف (SKUs)، وأرقام التوسع غير منشورة ما لم يتم اعتمادها بشكل منفصل من الإدارة."
            : "* Important note: The AED 1 billion figure is presented strictly as a future brand target before 2030. Market-specific financial targets, SKU counts and expansion figures remain unpublished unless separately approved by management."}
        </p>
      </section>

      {/* 3. Our Product Range (Filterable Collection) */}
      <NoorAlArabCatalogInteractive locale={locale} />
    </div>
  );

  const finalCta = (
    <section className="rounded-2xl border border-gsy-gold/30 bg-gradient-to-r from-gsy-navy via-gsy-navy to-gsy-navy-mid p-8 text-center text-white sm:p-10 dark:border-gsy-gold-light/20 dark:from-gsy-navy-deep dark:to-gsy-navy">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gsy-gold/20 px-3.5 py-1 text-xs font-bold text-gsy-gold-light">
        <Sparkles className="h-3.5 w-3.5" />
        <span>{locale === "ar" ? "شراكات الأعمال والتوزيع" : "Trade & Distribution Partnerships"}</span>
      </span>
      <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
        {locale === "ar" ? "لننمُ معاً" : "Let's Grow Together"}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
        {locale === "ar"
          ? "تواصل مع نور العرب لمناقشة التوريد بالجملة، وتوزيع التجزئة، ومتطلبات قطاع الضيافة (HORECA)، وشراكات المنتجات الغذائية."
          : "Connect with Noor Al Arab to discuss wholesale supply, retail distribution, HORECA requirements and food product partnerships."}
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="#enquiry-form"
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
        >
          <Building2 className="h-4 w-4" />
          <span>
            {locale === "ar"
              ? "كن شريكاً تجارياً لنور العرب"
              : "Become Noor Al Arab Trade Partner"}
          </span>
        </a>
      </div>
    </section>
  );

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      heroTitle={locale === "ar" ? "نور العرب" : "Noor Al Arab"}
      heroEyebrow={
        locale === "ar"
          ? "غذاء موثوق للمنازل والمطابخ وشركات التموين"
          : "Trusted Food for Homes, Kitchens and Caterers"
      }
      heroSubtitle={
        locale === "ar"
          ? "انطلاقاً من جذورنا كعلامة تجارية متخصصة في الأرز، تتطور نور العرب لتصبح شركة توزيع أغذية أوسع نطاقاً، حيث تربط المنتجات الغذائية بتجار الجملة والتجزئة ومشغلي قطاع الضيافة والمشترين المؤسسيين."
          : "From our roots as a rice brand, Noor Al Arab is growing into a broader food distribution business, connecting food products with wholesalers, retailers, HORECA operators and institutional buyers."
      }
      primaryCta={{
        label:
          locale === "ar"
            ? "كن شريكاً تجارياً لنور العرب"
            : "Become Noor Al Arab Trade Partner",
        href: "#enquiry-form",
      }}
      whatWeDoTitle={locale === "ar" ? "نبذة عن نور العرب" : "About Noor Al Arab"}
      whatWeDoIntro={
        locale === "ar"
          ? "نور العرب هي العلامة التجارية للأغذية وذراع التوزيع التابع لمجموعة جي إس واي الدولية. انطلاقاً من مكانتها الراسخة كعلامة تجارية متخصصة في الأرز، تعمل نور العرب على توسيع نطاق منتجاتها وقنوات توزيعها لخدمة العملاء في أسواق الجملة والتجزئة والتموين وقطاع الضيافة (HORECA). وينصب تركيزنا على ربط المنتجات الغذائية بعملاء الأعمال من خلال شبكة توزيع متنامية في دولة الإمارات العربية المتحدة وأسواق دولية مختارة."
          : "Noor Al Arab is GSY International Group’s food brand and distribution business. Building on its rice brand foundation, Noor Al Arab is expanding its product range and distribution channels to serve customers across wholesale, retail, catering and HORECA markets. Our focus is to connect food products with business customers through a growing distribution network across the UAE and selected international markets."
      }
      whoWeServeTitle={locale === "ar" ? "الجهات التي نخدمها" : "Who We Supply"}
      complianceTitle={
        locale === "ar"
          ? "معايير الجودة والامتثال"
          : "Quality Standards & Compliance"
      }
      complianceSubtitle={
        locale === "ar"
          ? "تلتزم نور العرب بمعايير جودة صارمة وعناية واجبة في اختيار الشركاء وقنوات التوريد:"
          : "Noor Al Arab upholds strict food safety, traceability and partner due diligence across all channels:"
      }
      formVariant="noor-al-arab"
      formTitle={
        locale === "ar"
          ? "كن شريكاً تجارياً لنور العرب"
          : "Become a Noor Al Arab Trade Partner"
      }
      formSubtitle={
        locale === "ar"
          ? "هل تتطلع إلى توريد منتجات غذائية لعملك؟ تواصل مع فريقنا لمناقشة فئات المنتجات، متطلبات الشراء، والفرص التجارية المتاحة."
          : "Looking to source food products for your business? Connect with our team to discuss your product categories, purchasing requirements and potential trade opportunities."
      }
      formSubmitLabel={
        locale === "ar" ? "إرسال استفسار الحساب التجاري" : "Submit Trade Enquiry"
      }
      heroAction={heroAction}
      afterHeroSection={targetCounterStrip}
      customSection={customSection}
      finalCtaSection={finalCta}
    />
  );
}
