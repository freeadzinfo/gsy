import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ExternalLink,
  Globe2,
  Info,
  Landmark,
  PackageCheck,
  Ship,
} from "lucide-react";
import { Locale } from "@/types/cms";
import { localePath, t } from "@/lib/i18n";

interface BranchNode {
  id: string;
  badge: { en: string; ar: string };
  divisionTag: { en: string; ar: string };
  domain: string;
  domainUrl?: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  description: { en: string; ar: string };
  tags: { en: string; ar: string }[];
  internalHref: string;
  internalLabel: { en: string; ar: string };
  logoSrc?: string;
  logoBg?: "dark" | "light";
  monogram?: {
    code: string;
    caption: { en: string; ar: string };
    icon: "trade" | "investments" | "oem";
  };
}

const BRANCH_NODES: BranchNode[] = [
  {
    id: "noor-al-arab",
    badge: { en: "Operating Subsidiary", ar: "شركة تابعة رئيسية" },
    divisionTag: { en: "Dubai HQ Flagship", ar: "الذراع الرئيسي" },
    domain: "nooralarabfoodstuff.com",
    domainUrl: "https://nooralarabfoodstuff.com/",
    title: { en: "Noor Al Arab", ar: "نور العرب" },
    subtitle: { en: "Foodstuff Trading Co LLC", ar: "لتجارة المواد الغذائية" },
    description: {
      en: "Flagship commercial foodstuff house in Dubai supplying Basmati rice, refined sugar, palm olein, pulses, and spices across the GCC (AED 1B target before 2030).",
      ar: "الذراع الغذائي والتجاري الرائد في دبي لتوريد الأرز والسكر وزيت النخيل والبقوليات والتوابل عبر الخليج (بمستهدف مليار درهم قبل 2030).",
    },
    tags: [
      { en: "Jebel Ali Hub", ar: "مركز جبل علي" },
      { en: "ISO 22000 & HACCP", ar: "أيزو 22000" },
      { en: "Dubai Zad", ar: "زاد دبي" },
    ],
    internalHref: "/businesses/noor-al-arab",
    internalLabel: { en: "Explore Catalog", ar: "استكشف الكتالوج" },
    logoSrc: "/images/brands/noor-al-arab.jpg",
    logoBg: "dark",
  },
  {
    id: "pets-pantry",
    badge: { en: "Branch Brand", ar: "علامة فرعية" },
    divisionTag: { en: "Consumer Division", ar: "قطاع المستهلك" },
    domain: "petspantry.ae",
    domainUrl: "https://petspantry.ae/",
    title: { en: "Pets' Pantry", ar: "بيتس بانتري" },
    subtitle: { en: "Food & Accessories", ar: "أغذية ومستلزمات الحيوانات" },
    description: {
      en: "Dedicated consumer brand division specializing in wholesome pet nutrition, premium dry foods, specialty treats, and quality pet accessories.",
      ar: "علامة استهلاكية متخصصة في أغذية الحيوانات الأليفة المتوازنة والأطعمة الجافة والمكافآت ومستلزمات العناية عالية الجودة.",
    },
    tags: [
      { en: "Pet Nutrition", ar: "تغذية الحيوانات" },
      { en: "Accessories", ar: "المستلزمات" },
      { en: "UAE Retail", ar: "التجزئة بالإمارات" },
    ],
    internalHref: "/products?category=Noor+Al+Arab",
    internalLabel: { en: "View Consumer Range", ar: "عرض المنتجات" },
    logoSrc: "/images/brands/pets-pantry.jpg",
    logoBg: "light",
  },
  {
    id: "gsy-trade",
    badge: { en: "Global Trading", ar: "التجارة الدولية" },
    divisionTag: { en: "Working Title", ar: "مسمى عمل مبدئي" },
    domain: "gsyinternationaltrade.in",
    domainUrl: "https://gsyinternationaltrade.in/",
    title: { en: "GSY International Trade", ar: "جي إس واي للتجارة الدولية" },
    subtitle: { en: "Commodity Export & Chartering", ar: "تصدير السلع والشحن المستأجر" },
    description: {
      en: "Physical commodity portal connecting agricultural origins across India, Southeast Asia, and Africa, chartering the right vessel on demand.",
      ar: "بوابة تجارة السلع الفعلية التي تربط مصادر الإنتاج في الهند وجنوب شرق آسيا وأفريقيا مع تأجير السفن بالرحلة حسب الحاجة.",
    },
    tags: [
      { en: "Origin Sourcing", ar: "التوريد من المنشأ" },
      { en: "Asset-Light Ocean", ar: "شحن بحري مرن" },
      { en: "Bulk Exports", ar: "صادرات الجملة" },
    ],
    internalHref: "/businesses/commodity-trading",
    internalLabel: { en: "Explore Trading Desks", ar: "مكاتب التداول" },
    monogram: {
      code: "GSY TRADE",
      caption: { en: "International Trade", ar: "التجارة الدولية" },
      icon: "trade",
    },
  },
  {
    id: "gsy-investments",
    badge: { en: "Investment Arm", ar: "ذراع الاستثمار" },
    divisionTag: { en: "Working Title", ar: "مسمى عمل مبدئي" },
    domain: "gsyinvestmentgroups.com",
    domainUrl: "https://gsyinvestmentgroups.com/",
    title: { en: "GSY Investment Groups", ar: "مجموعات جي إس واي للاستثمار" },
    subtitle: { en: "Capital & Asset Stewardship", ar: "إدارة الأصول ورأس المال" },
    description: {
      en: "Strategic capital stewardship supporting warehousing hubs, commercial real estate, agricultural infrastructure, and Sharia-aligned partner growth.",
      ar: "الحوكمة الرأسمالية الداعمة لمراكز التخزين والأصول العقارية التجارية والبنية التحتية الزراعية وبرامج الشراكة المتوافقة مع الشريعة.",
    },
    tags: [
      { en: "Asset Stewardship", ar: "إدارة الأصول" },
      { en: "Supply Hubs", ar: "مراكز الإمداد" },
      { en: "Halal Program", ar: "البرنامج الحلال" },
    ],
    internalHref: "/investors/halal-investment",
    internalLabel: { en: "Investor Overview", ar: "نظرة عامة للمستثمرين" },
    monogram: {
      code: "GSY INVESTMENTS",
      caption: { en: "Asset Capital Holding", ar: "رأس المال والأصول" },
      icon: "investments",
    },
  },
  {
    id: "noor-oem",
    badge: { en: "Operating Branch", ar: "فرع تشغيلي" },
    divisionTag: { en: "OEM Co-Packing", ar: "التعبئة التعاقدية" },
    domain: "nooralarabfoodstuff.com",
    title: { en: "Noor Private Label (OEM)", ar: "نور للعلامات الخاصة (OEM)" },
    subtitle: { en: "Custom Co-Packing Solutions", ar: "حلول التعبئة والتغليف" },
    description: {
      en: "Contract packaging capability offering retail BOPP pouches and sacks, tinning, food-grade jerry cans, and private branding for supermarket chains.",
      ar: "قدرات التعبئة التعاقدية لإنتاج أكياس BOPP والعبوات الصفيح والعبوات الغذائية والعلامات الخاصة لسلاسل الأسواق المركزية.",
    },
    tags: [
      { en: "OEM Packaging", ar: "تعبئة OEM" },
      { en: "BOPP Sacks", ar: "أكياس BOPP" },
      { en: "Retail Supply", ar: "توريد التجزئة" },
    ],
    internalHref: "/supermarkets",
    internalLabel: { en: "Supermarket Supply", ar: "توريد الأسواق" },
    monogram: {
      code: "OEM PACKAGING",
      caption: { en: "Private Brand Co-Packing", ar: "التعبئة للعلامات الخاصة" },
      icon: "oem",
    },
  },
];

const MONOGRAM_ICONS = {
  trade: Ship,
  investments: Landmark,
  oem: PackageCheck,
};

/**
 * 2-tier Corporate Brand Hierarchy Tree: Parent Holding HQ -> 5 Operating Subsidiaries & Brand Divisions,
 * styled in GSY Light/Dark colors and aligned strictly with Management Brief v4.
 */
export function BrandHierarchyTree({ locale }: { locale: Locale }) {
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
            <Building2 className="h-3.5 w-3.5" />
            <span>
              {locale === "ar"
                ? "الهيكل المؤسسي وشجرة العلامات"
                : "Corporate Structure & Brand Architecture"}
            </span>
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
            {locale === "ar"
              ? "الشجرة التنظيمية لمجموعة شركات جي إس واي"
              : "GSY Group Brand Hierarchy Tree"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
            {locale === "ar"
              ? "تربط هذه الشجرة التنظيمية الشركة القابضة الأم في دبي بخمس شركات وعلامات تشغيلية ومتخصصة عبر 7 أسواق نشطة اليوم وصولاً إلى أكثر من 25 دولة بحلول 2030."
              : "Unified corporate tree linking GSY International Group in Dubai directly with its operating trading, consumer, investment, and OEM branches across 7 active markets today → 25+ by 2030."}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-lg border border-gsy-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-gsy-slate dark:border-white/15 dark:bg-gsy-navy dark:text-white/75">
          <Info className="h-3.5 w-3.5 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
          {locale === "ar"
            ? "الكيانات المميزة بمسمى عمل تخضع للاعتماد القانوني النهائي."
            : "Working titles outside registered brands await final Chairman legal sign-off."}
        </span>
      </div>

      {/* Tree Canvas */}
      <div className="flex flex-col items-center">
        {/* TIER 1: PARENT HOLDING NODE */}
        <div className="w-full max-w-2xl">
          <div className="relative rounded-2xl border-2 border-gsy-gold bg-white p-6 text-center shadow-card-hover transition hover:border-gsy-gold-bright sm:p-8 dark:border-gsy-gold-light dark:bg-gsy-navy">
            <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gsy-gold-bright px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-gsy-navy-deep shadow-md">
              <Building2 className="h-3.5 w-3.5" />
              <span>
                {locale === "ar"
                  ? "الشركة القابضة الأم"
                  : "Parent Brand & Holding Enterprise"}
              </span>
            </div>

            <div className="relative mx-auto mt-3 h-32 w-32 overflow-hidden rounded-full border-4 border-gsy-gold bg-white p-1.5 shadow-lg sm:h-40 sm:w-40 dark:border-gsy-gold-light">
              <Image
                src="/images/brands/gsy-international.jpg"
                alt="GSY International Group of Companies Official Crest"
                fill
                sizes="160px"
                className="rounded-full object-contain"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <a
                href="https://www.gsyinternationalgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="inline-flex items-center gap-1.5 rounded-full border border-gsy-gold/40 bg-gsy-gold/10 px-3.5 py-1 text-xs font-bold text-gsy-gold transition hover:bg-gsy-gold hover:text-white dark:border-gsy-gold-light/40 dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light dark:hover:bg-gsy-gold-bright dark:hover:text-gsy-navy-deep"
              >
                <Globe2 className="h-3.5 w-3.5" />
                <span>gsyinternationalgroup.com</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {locale === "ar" ? "جي إس واي الدولية" : "GSY INTERNATIONAL"}
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "مجموعة الشركات • المقر الرئيسي دبي" : "Group of Companies • Dubai HQ"}
            </p>
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/80">
              {locale === "ar"
                ? "مجموعة تجارية وشحن وغذاء مقرها دبي، تأسست عام 1974، تشرف على الحوكمة وإدارة الأصول والاستثمارات عبر 7 أسواق نشطة اليوم نحو أكثر من 25 دولة بحلول 2030."
                : "Dubai-headquartered conglomerate founded in 1974 overseeing international trade, agricultural supply chains, and governance across 7 active markets today — scaling to 25+ countries by 2030."}
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 border-t border-gsy-navy/10 pt-4 dark:border-white/10">
              {[
                { en: "7 Markets Today → 25+ (2030)", ar: "7 أسواق ← 25+ (2030)" },
                { en: "Holding Governance", ar: "حوكمة الشركة القابضة" },
                { en: "350+ Group Team", ar: "أكثر من 350 موظفاً" },
              ].map((pill) => (
                <span
                  key={pill.en}
                  className="rounded-md border border-gsy-navy/10 bg-gsy-ivory px-3 py-1 text-xs font-semibold text-gsy-navy dark:border-white/15 dark:bg-white/5 dark:text-white/85"
                >
                  {t(pill, locale)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 5-BRANCH TREE CONNECTOR (LG+ 5-RAIL ALIGNMENT: 10% / 30% / 50% / 70% / 90%) */}
        <div className="relative flex w-full flex-col items-center py-1" aria-hidden="true">
          <div className="h-8 w-[3px] bg-gradient-to-b from-gsy-gold to-gsy-gold-bright md:h-11" />
          {/* Desktop 5-Branch Horizontal Rail */}
          <div className="relative hidden h-[3px] w-4/5 bg-gsy-gold lg:block dark:bg-gsy-gold-light">
            {[
              { pos: "left-0", translate: "-translate-x-1/2" },
              { pos: "left-1/4", translate: "-translate-x-1/2" },
              { pos: "left-1/2", translate: "-translate-x-1/2" },
              { pos: "left-3/4", translate: "-translate-x-1/2" },
              { pos: "right-0", translate: "translate-x-1/2" },
            ].map((drop, i) => (
              <React.Fragment key={i}>
                <span
                  className={`absolute -top-1.5 ${drop.pos} ${drop.translate} h-3 w-3 rounded-full bg-gsy-gold shadow dark:bg-gsy-gold-light`}
                />
                <span
                  className={`absolute top-0 ${drop.pos} ${drop.translate} h-10 w-[3px] bg-gradient-to-b from-gsy-gold to-gsy-gold-bright dark:from-gsy-gold-light dark:to-gsy-gold`}
                />
              </React.Fragment>
            ))}
          </div>
          {/* Mobile / Tablet vertical drop */}
          <div className="h-6 w-[3px] bg-gsy-gold lg:hidden dark:bg-gsy-gold-light" />
        </div>

        {/* TIER 2: 5 SUBSIDIARY & BRAND BRANCH CARDS */}
        <div className="mt-2 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-9 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {BRANCH_NODES.map((node) => {
            const MonogramIcon = node.monogram ? MONOGRAM_ICONS[node.monogram.icon] : null;
            return (
              <div
                key={node.id}
                className="flex flex-col justify-between rounded-2xl border border-gsy-navy/15 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/60 hover:shadow-card-hover xl:p-5 dark:border-gsy-gold-light/20 dark:bg-gsy-navy"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="rounded-full border border-gsy-gold/40 bg-gsy-gold/10 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-gsy-gold dark:border-gsy-gold-light/40 dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light">
                      {t(node.badge, locale)}
                    </span>
                    <span className="text-[10px] font-medium text-gsy-slate dark:text-white/65">
                      {t(node.divisionTag, locale)}
                    </span>
                  </div>

                  {/* Brand Logo or Monogram Emblem */}
                  {node.logoSrc ? (
                    <div
                      className={`relative mx-auto mt-4 h-28 w-28 overflow-hidden rounded-2xl border-2 border-gsy-gold/55 shadow-md xl:h-32 xl:w-32 dark:border-gsy-gold-light/60 ${
                        node.logoBg === "dark" ? "bg-[#060606]" : "bg-white p-2"
                      }`}
                    >
                      <Image
                        src={node.logoSrc}
                        alt={t(node.title, locale)}
                        fill
                        sizes="128px"
                        className="object-contain p-1"
                      />
                    </div>
                  ) : (
                    node.monogram &&
                    MonogramIcon && (
                      <div className="mx-auto mt-4 flex h-28 w-28 flex-col items-center justify-center rounded-2xl border-2 border-gsy-gold/45 bg-gsy-navy p-2.5 text-center text-gsy-gold-light shadow-md xl:h-32 xl:w-32 dark:border-gsy-gold-light/50 dark:bg-[#081931]">
                        <MonogramIcon className="h-7 w-7 text-gsy-gold-bright" />
                        <span className="mt-2 text-[11px] font-extrabold uppercase leading-tight tracking-wider text-white">
                          {node.monogram.code}
                        </span>
                        <span className="mt-0.5 text-[9px] font-semibold leading-tight text-gsy-gold-light">
                          {t(node.monogram.caption, locale)}
                        </span>
                      </div>
                    )
                  )}

                  {/* Portal / Domain Link Pill */}
                  <div className="mt-4 flex justify-center">
                    {node.domainUrl ? (
                      <a
                        href={node.domainUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="inline-flex max-w-full items-center gap-1 rounded-full border border-gsy-gold/35 bg-gsy-ivory px-2.5 py-1 text-[10.5px] font-bold text-gsy-gold transition hover:bg-gsy-gold hover:text-white dark:border-gsy-gold-light/30 dark:bg-white/5 dark:text-gsy-gold-light dark:hover:bg-gsy-gold-bright dark:hover:text-gsy-navy-deep"
                      >
                        <Globe2 className="h-3 w-3 shrink-0" />
                        <span className="truncate">{node.domain}</span>
                        <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                      </a>
                    ) : (
                      <span
                        dir="ltr"
                        className="inline-flex max-w-full items-center gap-1 rounded-full border border-gsy-navy/15 bg-gsy-ivory px-2.5 py-1 text-[10.5px] font-bold text-gsy-slate dark:border-white/15 dark:bg-white/5 dark:text-white/75"
                      >
                        <PackageCheck className="h-3 w-3 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
                        <span className="truncate">{node.domain}</span>
                      </span>
                    )}
                  </div>

                  <h4 className="mt-3.5 text-center text-base font-extrabold text-gsy-navy dark:text-white">
                    {t(node.title, locale)}
                  </h4>
                  <p className="mt-0.5 text-center text-[10.5px] font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
                    {t(node.subtitle, locale)}
                  </p>
                  <p className="mt-2.5 text-center text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(node.description, locale)}
                  </p>
                </div>

                <div className="mt-4 space-y-3 border-t border-gsy-navy/10 pt-3.5 dark:border-white/10">
                  <div className="flex flex-wrap justify-center gap-1">
                    {node.tags.map((tag) => (
                      <span
                        key={tag.en}
                        className="rounded-md bg-gsy-ivory px-2 py-0.5 text-[10px] font-semibold text-gsy-navy dark:bg-white/10 dark:text-white/80"
                      >
                        {t(tag, locale)}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={localePath(locale, node.internalHref)}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-gsy-navy/15 bg-gsy-ivory/80 px-3 py-2 text-xs font-bold text-gsy-navy transition hover:border-gsy-gold hover:bg-gsy-navy hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-gsy-gold-bright dark:hover:text-gsy-navy-deep"
                  >
                    <span>{t(node.internalLabel, locale)}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* TREE ARCHITECTURE GOVERNANCE FOOTER BOX */}
        <div className="mt-10 w-full rounded-2xl border border-gsy-gold/30 bg-gsy-navy p-6 text-white shadow-card sm:p-8 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
                {locale === "ar"
                  ? "الحوكمة المتكاملة وتوزيع العلامات"
                  : "Integrated Trade Governance & Multi-Brand Distribution"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {locale === "ar"
                  ? "تحت هذا الهيكل الشجري، توفر مجموعة جي إس واي الدولية الحوكمة الرأسمالية والامتثال المصرفي والربط بين الأسواق، وتقود شركة نور العرب للتجارة الغذائية التداول الفعلي والتخليص الجمركي في ميناء جبل علي والتوريد الخليجي، بينما توسع أقسام التجزئة مثل بيتس بانتري ومجموعة أسواق جي إس واي حضور المجموعة حتى المستهلك النهائي."
                  : "Under this tree architecture, GSY International Group provides capital stewardship, bank-grade KYC/compliance, and multi-market linkages across 7 live jurisdictions (scaling to 25+ by 2030). Noor Al Arab Foodstuff Trading Co LLC drives physical foodstuff execution, Jebel Ali import clearance, and GCC distribution, while specialized divisions such as Pets' Pantry, Noor Private Label OEM, and GSY Supermarket Group extend reach cleanly to retail shelves."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href={localePath(locale, "/investors/company-profile")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gsy-gold-bright px-4 py-2.5 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "ملف المجموعة" : "View Corporate Profile"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <span>{locale === "ar" ? "تواصل مع المقر" : "Contact Group Headquarters"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
