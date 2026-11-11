import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Globe2,
  Info,
  Landmark,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { SITE_SETTINGS } from "@/data/site-settings";
import { PageHero } from "@/components/shared/PageHero";
import { GroupModelStrip } from "@/components/shared/GroupModelStrip";

export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const milestones = [
    {
      year: "1974",
      title: { en: "Foundation & Physical Trade Roots", ar: "التأسيس وجذور التجارة الفعلية" },
      body: {
        en: "Founded in 1974, building lasting relationships with agricultural producers, origin mills and wholesale buyers.",
        ar: "تأسست المجموعة عام 1974، وبنت علاقات مستدامة مع المنتجين الزراعيين والمصانع وتجار الجملة.",
      },
    },
    {
      year: "2000s–2025",
      title: { en: "Multi-Continent Corridor & Brand Development", ar: "التوسع عبر القارات وتأسيس العلامات" },
      body: {
        en: "Expanding origin export operations in India (Chennai), ASEAN hubs in Malaysia and Singapore, UAE headquarters, and consumer retail stores.",
        ar: "التوسع في مراكز التصدير في الهند (تشيناي)، ومراكز آسيان في ماليزيا وسنغافورة، والمقر الرئيسي في دبي، والأسواق المركزية.",
      },
    },
    {
      year: "2026",
      title: { en: "One GSY Family — Dubai Holding Structure", ar: "عائلة جي إس واي الواحدة — الشركة القابضة في دبي" },
      body: {
        en: "Uniting 350+ professionals across 7 active jurisdictions under a single governance and supply architecture linking Asia, the Gulf and Africa.",
        ar: "توحيد أكثر من 350 موظفاً في 7 أسواق نشطة تحت هيكل حوكمة وإمداد موحد يربط آسيا والخليج وأفريقيا.",
      },
    },
    {
      year: "2030",
      title: { en: "US$2.5B Group Across 25+ Countries", ar: "مجموعة بقيمة 2.5 مليار دولار في أكثر من 25 دولة" },
      body: {
        en: "Scaling systematically from 7 active countries today to 25+ markets, 50 supermarkets and hypermarkets, and Noor Al Arab's AED 1B regional food target.",
        ar: "التوسع المنظم من 7 أسواق نشطة اليوم إلى أكثر من 25 دولة، و50 سوبرماركت وهايبرماركت، ومستهدف علامة نور العرب البالغ مليار درهم.",
      },
    },
  ];

  const brandArchitecture = [
    {
      tier: { en: "Parent Holding Enterprise", ar: "الشركة القابضة الأم" },
      name: { en: "GSY International Group of Companies", ar: "مجموعة شركات جي إس واي الدولية" },
      domain: "gsyinternationalgroup.com",
      href: "/about/governance",
      icon: Building2,
      summary: {
        en: "Dubai-headquartered holding group uniting international trade governance, multi-origin agricultural sourcing, and disciplined expansion across 7 active countries today toward 25+ markets by 2030.",
        ar: "مجموعة قابضة مقرها دبي توحد حوكمة التجارة الدولية، وتوريد المحاصيل من عدة مصادر منشأ، والتوسع المنظم من 7 أسواق نشطة اليوم نحو أكثر من 25 دولة بحلول 2030.",
      },
      tags: [
        { en: "Holding Governance", ar: "حوكمة القابضة" },
        { en: "7 Countries → 25+ (2030)", ar: "7 دول ← 25+ (2030)" },
        { en: "Dubai HQ", ar: "المقر الرئيسي دبي" },
      ],
    },
    {
      tier: { en: "Primary Operating Subsidiary (Flagship Brand)", ar: "الذراع التجاري التشغيلي الرئيسي" },
      name: { en: "Noor Al Arab For Foodstuff Trading Co LLC", ar: "شركة نور العرب لتجارة المواد الغذائية ذ.م.م" },
      domain: "nooralarabfoodstuff.com",
      href: "/businesses/noor-al-arab",
      icon: ShieldCheck,
      summary: {
        en: "Flagship Dubai foodstuff and commodity operating arm supplying Basmati rice, refined cane sugar, Malaysian palm olein, pulses, and spices across UAE & GCC retail, wholesale, and HORECA channels.",
        ar: "الذراع الغذائي والتجاري الرائد في دبي لتوريد أرز البسمتي، والسكر المكرر، وزيت النخيل الماليزي، والبقوليات والتوابل لقطاعات التجزئة والجملة والضيافة في الإمارات والخليج.",
      },
      tags: [
        { en: "Jebel Ali Bonded Hub", ar: "مركز جبل علي الجمركي" },
        { en: "ISO 22000 & HACCP", ar: "أيزو 22000 والهاسب" },
        { en: "Dubai Zad Registered", ar: "مسجل في منصة زاد دبي" },
      ],
    },
    {
      tier: { en: "Origin Export & Freight Link", ar: "بوابة التصدير والشحن البحري" },
      name: { en: "GSY International Trade (Working Title)", ar: "جي إس واي للتجارة الدولية (مسمى عمل)" },
      domain: "gsyinternationaltrade.in",
      href: "/businesses/commodity-trading",
      icon: Globe2,
      summary: {
        en: "Physical origin-export portal connecting farms and mills across India and Southeast Asia with GCC and African markets, chartering the right vessel on demand under GSY's asset-light shipping model.",
        ar: "بوابة التصدير الفعلي التي تربط مصادر الإنتاج الزراعي والمصانع في الهند وجنوب شرق آسيا بأسواق الخليج وأفريقيا عبر تأجير السفن بالرحلة وفق نموذج الشحن المرن.",
      },
      tags: [
        { en: "Origin Sourcing", ar: "التوريد من المنشأ" },
        { en: "Bulk & Container Exports", ar: "تصدير السائب والحاويات" },
        { en: "Asset-Light Chartering", ar: "تأجير بحري مرن" },
      ],
    },
    {
      tier: { en: "Capital & Asset Stewardship", ar: "الاستثمار والأصول" },
      name: { en: "GSY Investment Groups (Working Title)", ar: "مجموعات جي إس واي للاستثمار (مسمى عمل)" },
      domain: "gsyinvestmentgroups.com",
      href: "/investors",
      icon: Landmark,
      summary: {
        en: "Strategic capital stewardship supporting group commercial infrastructure, warehousing hubs, supply-chain assets, and Sharia-aligned partner growth programs under holding governance.",
        ar: "ذراع الحوكمة الرأسمالية الداعم للبنية التحتية التجارية ومراكز التخزين وسلاسل الإمداد وبرامج الشراكة المتوافقة مع الشريعة تحت مظلة المجموعة.",
      },
      tags: [
        { en: "Asset Stewardship", ar: "إدارة الأصول" },
        { en: "Supply Infrastructure", ar: "البنية التحتية للإمداد" },
        { en: "Trade Growth Capital", ar: "رأس مال النمو التجاري" },
      ],
    },
    {
      tier: { en: "Operating Branch • Co-Packing", ar: "فرع التعبئة والعلامات الخاصة" },
      name: { en: "Noor Private Label (OEM)", ar: "تعبئة نور للعلامات الخاصة (OEM)" },
      domain: "nooralarabfoodstuff.com",
      href: "/businesses/noor-al-arab",
      icon: PackageCheck,
      summary: {
        en: "Contract packing and private-label solutions producing tailored retail BOPP pouches and sacks, tinning, and food-grade jerry cans for regional distributors and GSY's own supermarket chains.",
        ar: "خدمات التعبئة التعاقدية والعلامات الخاصة لإنتاج أكياس BOPP والعبوات الصفيح والعبوات الغذائية لسلاسل التجزئة والموزعين ومجموعة الأسواق المركزية.",
      },
      tags: [
        { en: "OEM Co-Packing", ar: "التعبئة التعاقدية OEM" },
        { en: "BOPP Sacks & Pouches", ar: "أكياس وعبوات BOPP" },
        { en: "Supermarket Supply", ar: "توريد الأسواق المركزية" },
      ],
    },
    {
      tier: { en: "Consumer Division", ar: "قطاع المستهلك المتخصص" },
      name: { en: "Pets' Pantry — Food & Accessories", ar: "بيتس بانتري — أغذية ومستلزمات الحيوانات الأليفة" },
      domain: "petspantry.ae",
      href: "/about/gsy-family",
      icon: ShoppingBag,
      summary: {
        en: "Dedicated UAE consumer brand offering wholesome pet nutrition, premium dry foods, specialty treats, and quality accessories across specialty retail and group distribution.",
        ar: "علامة استهلاكية متخصصة في الإمارات تقدم أغذية الحيوانات الأليفة المتوازنة والأطعمة الجافة والمكافآت ومستلزمات العناية عالية الجودة.",
      },
      tags: [
        { en: "Pet Nutrition", ar: "تغذية الحيوانات الأليفة" },
        { en: "Treats & Accessories", ar: "المكافآت والمستلزمات" },
        { en: "UAE Consumer Retail", ar: "التجزئة في الإمارات" },
      ],
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "تاريخنا منذ 1974" : "Our Story • Since 1974"}
        title={
          locale === "ar"
            ? "خمسون عاماً من ربط مصادر الإنتاج بالأسواق"
            : "50 years of connecting origins to markets"
        }
        subtitle={t(SITE_SETTINGS.oneLineDescription, locale)}
        backgroundImage="/images/hero-port.jpg"
        primaryCta={{
          label: locale === "ar" ? "اقرأ رسالة رئيس مجلس الإدارة" : "Read Chairman's Message",
          href: "/about/chairmans-message",
        }}
        secondaryCta={{
          label: locale === "ar" ? "استكشف أعمالنا" : "Explore Our Businesses",
          href: "/businesses",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "قصتنا" : "Our Story" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {/* Historical Milestones (Brief v4) */}
        <div className="grid gap-6 md:grid-cols-2">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <span className="inline-block rounded-full bg-gsy-gold/15 px-3 py-1 text-xs font-extrabold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
                {m.year}
              </span>
              <h2 className="mt-3 text-xl font-extrabold text-gsy-navy dark:text-white">
                {t(m.title, locale)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                {t(m.body, locale)}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Brand Hierarchy & Operating Ecosystem */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar"
                  ? "الهيكل المؤسسي ومنظومة العلامات"
                  : "Corporate Structure & Brand Architecture"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
                {locale === "ar"
                  ? "كيف تطورت العائلة التجارية من منشأ التوريد إلى التجزئة"
                  : "From Origin Harvests to Specialized Brands Under Unified Governance"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                {locale === "ar"
                  ? "تتكامل الكيانات والمنصات التابعة لمجموعة جي إس واي بين الحوكمة في دبي، والتداول الفعلي من أسواق المنشأ، والتعبئة الصناعية، والعلامات الاستهلاكية."
                  : "Connecting origin harvest cultivation, asset-light maritime logistics, Jebel Ali bonded distribution, OEM co-packing, and consumer divisions under GSY International Group."}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gsy-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-gsy-slate dark:border-white/15 dark:bg-gsy-navy dark:text-white/75">
              <Info className="h-3.5 w-3.5 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
              {locale === "ar"
                ? "مسميات الكيانات غير العلامات المسجلة هي مسميات عمل قيد الاعتماد القانوني النهائي."
                : "Non-brand entity titles remain working titles pending Chairman & legal sign-off."}
            </span>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {brandArchitecture.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name.en}
                  className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-md bg-gsy-ivory px-2.5 py-1 text-[11px] font-semibold text-gsy-slate dark:bg-white/10 dark:text-white/75" dir="ltr">
                        {item.domain}
                      </span>
                    </div>

                    <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
                      {t(item.tier, locale)}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold text-gsy-navy dark:text-white">
                      {t(item.name, locale)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/80">
                      {t(item.summary, locale)}
                    </p>
                  </div>

                  <div className="mt-5 space-y-4 border-t border-gsy-navy/10 pt-4 dark:border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag.en}
                          className="rounded-full bg-gsy-gold/10 px-2.5 py-0.5 text-[11px] font-semibold text-gsy-navy dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light"
                        >
                          {t(tag, locale)}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={localePath(locale, item.href)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
                    >
                      <span>{locale === "ar" ? "استكشف القسم" : "Explore division"}</span>
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integrated Trade Governance Summary */}
        <div className="rounded-2xl border border-gsy-gold/30 bg-gsy-navy p-7 text-white shadow-card sm:p-9 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
                {locale === "ar"
                  ? "الحوكمة المتكاملة وتوزيع العلامات"
                  : "Integrated Trade Governance & Multi-Brand Distribution"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                {locale === "ar"
                  ? "شبكة مترابطة تخدم الجملة والضيافة والمستهلك النهائي"
                  : "One Family Model Linking Dubai Execution With Origin Strength"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {locale === "ar"
                  ? "تتولى مجموعة جي إس واي الدولية الحوكمة والرقابة والتوجيه الاستراتيجي والتمويل المصرفي المنضبط، بينما تقود شركة نور العرب للتجارة الغذائية التداول الفعلي والتخليص الجمركي في ميناء جبل علي والتوريد عبر الخليج، وتوسع علامات المستهلك مثل بيتس بانتري ومجموعة أسواق جي إس واي حضورنا المباشر حتى رف المستهلك."
                  : "GSY International Group provides capital stewardship, bank-grade KYC/compliance discipline, and multi-corridor trade linkages across 7 active markets today. Noor Al Arab Foodstuff Trading Co LLC drives commercial commodity trading, Jebel Ali Port import clearance, and GCC distribution, while Noor Private Label OEM, Pets' Pantry, and the GSY Supermarket Group extend our reach cleanly into consumer retail."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href={localePath(locale, "/about/gsy-family")}
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "شبكة عائلة جي إس واي" : "Explore GSY Family Network"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={localePath(locale, "/investors/company-profile")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <span>{locale === "ar" ? "ملف المجموعة التعريفي" : "Company Profile"}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 5-Step Operating Model Strip */}
        <div>
          <h2 className="mb-4 text-xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "نموذجنا المتكامل" : "How GSY Operates Across Five Integrated Steps"}
          </h2>
          <GroupModelStrip locale={locale} />
        </div>
      </section>
    </div>
  );
}

