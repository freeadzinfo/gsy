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
      title: { en: "Where Our Journey Began", ar: "حيث بدأت مسيرتنا" },
      body: {
        en: "GSY's journey began in 1974 with a foundation in trade and a vision to build lasting business relationships across markets.",
        ar: "بدأت مسيرة جي إس واي في عام 1974 على أسس متينة في التجارة ورؤية واضحة لبناء علاقات تجارية دائمة عبر الأسواق.",
      },
    },
    {
      year: "Evolution",
      title: { en: "Growing Beyond Traditional Trade", ar: "النمو إلى ما هو أبعد من التجارة التقليدية" },
      body: {
        en: "Over the years, the business has continued to evolve, developing connections across markets and expanding its activities into complementary areas of international trade and commerce.",
        ar: "على مر السنين، واصلت الأعمال تطورها، حيث قامت بتوسيع الروابط عبر الأسواق وتوسيع أنشطتها إلى مجالات متكاملة من التجارة الدولية والأعمال.",
      },
    },
    {
      year: "International",
      title: { en: "Connecting Markets Across Borders", ar: "ربط الأسواق عبر الحدود" },
      body: {
        en: "Headquartered in Dubai, GSY International Group works across international trade corridors connecting Asia, the Gulf and Africa, bringing together sourcing markets, shipping activities, distribution channels and retail operations.",
        ar: "انطلاقاً من مقرها الرئيسي في دبي، تعمل مجموعة جي إس واي الدولية عبر ممرات التجارة الدولية التي تربط آسيا والخليج وأفريقيا، جامعةً بين أسواق المنشأ وأنشطة الشحن وقنوات التوزيع وعمليات التجزئة.",
      },
    },
    {
      year: "2030",
      title: { en: "The Next Chapter – Vision 2030", ar: "الفصل التالي – رؤية 2030" },
      body: {
        en: "Our journey continues with an ambitious vision for the future. By 2030, GSY aims to build a US$2.5 billion group and expand its presence to more than 25 countries.",
        ar: "تتواصل مسيرتنا برؤية طموحة للمستقبل. بحلول عام 2030، تهدف جي إس واي إلى بناء مجموعة بقيمة 2.5 مليار دولار وتوسيع تواجدها إلى أكثر من 25 دولة.",
      },
    },
  ];

  const brandArchitecture = [
    {
      tier: { en: "Business Area 1", ar: "مجال الأعمال 1" },
      name: { en: "Commodity Trading", ar: "تجارة السلع" },
      domain: "commodity-trading",
      href: "/businesses/commodity-trading",
      icon: Globe2,
      summary: {
        en: "Connecting suppliers and buyers across food, agricultural and industrial commodity markets.",
        ar: "ربط الموردين والمشترين عبر أسواق السلع الغذائية والزراعية والصناعية.",
      },
      tags: [
        { en: "Food Commodities", ar: "السلع الغذائية" },
        { en: "Agricultural Products", ar: "المنتجات الزراعية" },
        { en: "Industrial Trade", ar: "التجارة الصناعية" },
      ],
    },
    {
      tier: { en: "Business Area 2", ar: "مجال الأعمال 2" },
      name: { en: "Shipping & Chartering", ar: "الشحن والتأجير البحري" },
      domain: "shipping-chartering",
      href: "/businesses/shipping-chartering",
      icon: Building2,
      summary: {
        en: "Supporting international cargo movements through voyage chartering and shipping coordination.",
        ar: "دعم حركة البضائع الدولية من خلال تأجير السفن بالرحلة والتنسيق الملاحي.",
      },
      tags: [
        { en: "Voyage Chartering", ar: "تأجير السفن بالرحلة" },
        { en: "Cargo Coordination", ar: "تنسيق حركة الشحن" },
        { en: "Trade Corridors", ar: "الممرات التجارية" },
      ],
    },
    {
      tier: { en: "Business Area 3", ar: "مجال الأعمال 3" },
      name: { en: "Food Brands — Noor Al Arab", ar: "العلامات الغذائية — نور العرب" },
      domain: "nooralarabfoodstuff.com",
      href: "/businesses/noor-al-arab",
      icon: ShieldCheck,
      summary: {
        en: "Developing food product offerings through our regional food brand Noor Al Arab.",
        ar: "تطوير عروض المنتجات الغذائية من خلال علامتنا الغذائية الإقليمية نور العرب.",
      },
      tags: [
        { en: "Food Brand", ar: "علامة غذائية" },
        { en: "Quality Products", ar: "منتجات عالية الجودة" },
        { en: "Consumer & Trade", ar: "المستهلك والتجارة" },
      ],
    },
    {
      tier: { en: "Business Area 4", ar: "مجال الأعمال 4" },
      name: { en: "Exports & Distribution", ar: "التصدير والتوزيع" },
      domain: "distribution-horeca",
      href: "/businesses/distribution",
      icon: PackageCheck,
      summary: {
        en: "Connecting products with wholesale buyers, distributors and HORECA customers.",
        ar: "ربط المنتجات بمشتري الجملة والموزعين وعملاء قطاع الضيافة والمطاعم والفنادق.",
      },
      tags: [
        { en: "Wholesale Buyers", ar: "مشتري الجملة" },
        { en: "Commercial Distributors", ar: "الموزعون التجاريون" },
        { en: "HORECA Channels", ar: "قطاع الضيافة والمطاعم" },
      ],
    },
    {
      tier: { en: "Business Area 5", ar: "مجال الأعمال 5" },
      name: { en: "Supermarkets", ar: "الأسواق المركزية (السوبرماركت)" },
      domain: "supermarkets",
      href: "/businesses/supermarkets",
      icon: ShoppingBag,
      summary: {
        en: "Expanding into consumer retail through our supermarket brands serving customers in the UAE and Malaysia.",
        ar: "التوسع في تجارة التجزئة الاستهلاكية من خلال علاماتنا التجارية للسوبرماركت التي تخدم العملاء في الإمارات وماليزيا.",
      },
      tags: [
        { en: "Consumer Retail", ar: "تجزئة المستهلك" },
        { en: "Everyday Groceries", ar: "البقالة اليومية" },
        { en: "UAE & Malaysia", ar: "الإمارات وماليزيا" },
      ],
    },
    {
      tier: { en: "Group Stewardship", ar: "القيادة المؤسسية" },
      name: { en: "GSY International Group", ar: "مجموعة جي إس واي الدولية" },
      domain: "gsyinternationalgroup.com",
      href: "/about/gsy-family",
      icon: Landmark,
      summary: {
        en: "Together, these businesses represent the continuing evolution of the GSY Group across international markets.",
        ar: "تمثل هذه الأنشطة مجتمعة التطور المستمر لمجموعة جي إس واي عبر الأسواق الدولية.",
      },
      tags: [
        { en: "Corporate Governance", ar: "الحوكمة المؤسسية" },
        { en: "International Network", ar: "شبكة دولية" },
        { en: "Vision 2030", ar: "رؤية 2030" },
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
        {/* 2. Our Beginnings, 4. International Journey & 5. Vision 2030 Milestones */}
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

        {/* 3. Our Evolution — Connected Business Areas */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar" ? "تطور أعمالنا" : "Our Evolution"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
                {locale === "ar"
                  ? "النمو إلى ما هو أبعد من التجارة التقليدية"
                  : "Growing Beyond Traditional Trade"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                {locale === "ar"
                  ? "مع تطور الأسواق والفرص التجارية، تطورت مجموعة جي إس واي أيضاً. وتوسعت أنشطتنا عبر عدة مجالات أعمال مترابطة تمثل مجتمعة التطور المستمر لمجموعة جي إس واي."
                  : "As markets and business opportunities evolved, so did GSY. Our activities developed across several connected business areas, representing the continuing evolution of the GSY Group."}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gsy-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-gsy-slate dark:border-white/15 dark:bg-gsy-navy dark:text-white/75">
              <Info className="h-3.5 w-3.5 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
              {locale === "ar"
                ? "ربط مصادر الإنتاج بالأسواق عبر آسيا والخليج وأفريقيا."
                : "Connecting origins to markets across Asia, the Gulf and Africa."}
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

        {/* 6. Closing Section — Our Story Continues */}
        <div className="rounded-2xl border border-gsy-gold/30 bg-gsy-navy p-7 text-white shadow-card sm:p-9 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
                {locale === "ar" ? "مسيرة متواصلة" : "Our Story Continues"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                {locale === "ar" ? "قصتنا مستمرة" : "Our Story Continues"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {locale === "ar"
                  ? "من بداياتنا في عام 1974 إلى طموحاتنا لعام 2030، تظل مجموعة جي إس واي الدولية ملتزمة ببناء العلاقات وربط الأسواق وخلق الفرص من خلال الأعمال الدولية."
                  : "From our beginnings in 1974 to our ambitions for 2030, GSY International Group remains focused on building relationships, connecting markets and creating opportunities through international business."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href={localePath(locale, "/about/gsy-family")}
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "استكشف عائلة جي إس واي" : "Explore the GSY Family"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={localePath(locale, "/about/vision-2030")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <span>{locale === "ar" ? "استكشف رؤيتنا 2030" : "Explore Our Vision 2030"}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 5-Step Operating Model Strip */}
        <div>
          <h2 className="mb-4 text-xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "ربط الأسواق عبر خمس خطوات متكاملة"
              : "Connecting Markets Across Five Integrated Steps"}
          </h2>
          <GroupModelStrip locale={locale} />
        </div>
      </section>
    </div>
  );
}

