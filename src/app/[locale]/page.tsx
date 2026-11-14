import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Award,
  Landmark,
  Briefcase,
  Newspaper,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { SITE_SETTINGS } from "@/data/site-settings";
import { getUiCopy } from "@/data/dictionary";
import { SUPERMARKET_BRANDS } from "@/data/supermarkets";
import { NEWS_DATA } from "@/data/news";
import { StatsBar } from "@/components/shared/StatsBar";
import { GroupModelStrip } from "@/components/shared/GroupModelStrip";
import { FamilyNetworkDiagram } from "@/components/shared/FamilyNetworkDiagram";
import { TradeCorridorsMap } from "@/components/shared/TradeCorridorsMap";
import { GlobalPresenceMap } from "@/components/shared/GlobalPresenceMap";
import { VisionTimeline } from "@/components/shared/VisionTimeline";
import { RoutedContactForm } from "@/components/shared/RoutedContactForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const copy = getUiCopy(locale);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Section 3 businesses: Commodity Trading, Shipping & Chartering, Noor Al Arab, Distribution & HORECA, Supermarkets, Logistics & Supply Chain, Pets Pantry
  const businessTiles = [
    {
      title: { en: "Commodity Trading", ar: "تجارة السلع" },
      summary: {
        en: "Sourcing and trading essential commodities across food, agricultural and industrial sectors.",
        ar: "توريد وتداول السلع الأساسية عبر قطاعات الأغذية والزراعة والصناعة.",
      },
      href: "/businesses/commodity-trading",
      image: "/images/commodity-trading.jpg",
      tag: { en: "5 Trading Desks", ar: "5 مكاتب تداول" },
    },
    {
      title: { en: "Shipping & Chartering", ar: "الشحن والتأجير البحري" },
      summary: {
        en: "Voyage chartering and shipping coordination supporting international commodity movements.",
        ar: "تأجير السفن بالرحلة وتنسيق الشحن لدعم حركة السلع الدولية.",
      },
      href: "/businesses/shipping-chartering",
      image: "/images/shipping-vessel.jpg",
      tag: { en: "Asset-Light Chartering", ar: "تأجير بحري مرن" },
    },
    {
      title: { en: "Noor Al Arab", ar: "نور العرب" },
      summary: {
        en: "Our food brand focused on bringing quality food products to consumers and trade partners.",
        ar: "علامتنا الغذائية المكرسة لتقديم منتجات غذائية عالية الجودة للمستهلكين والشركاء التجاريين.",
      },
      href: "/businesses/noor-al-arab",
      image: "/images/noor-al-arab.jpg",
      tag: { en: "AED 1B Target 2030", ar: "هدف مليار درهم 2030" },
    },
    {
      title: { en: "Distribution & HORECA", ar: "التوزيع والضيافة" },
      summary: {
        en: "Supplying wholesale buyers, hotels, restaurants, caterers and other institutional customers.",
        ar: "تزويد مشتري الجملة والفنادق والمطاعم وشركات التموين والعملاء المؤسسيين.",
      },
      href: "/businesses/distribution",
      image: "/images/noor-al-arab.jpg",
      tag: { en: "Wholesale & HORECA", ar: "الجملة والضيافة" },
    },
    {
      title: { en: "Supermarkets", ar: "الأسواق المركزية" },
      summary: {
        en: "Operating retail supermarket brands serving customers in the UAE and Malaysia.",
        ar: "تشغيل علامات الأسواق المركزية للتجزئة لخدمة العملاء في الإمارات وماليزيا.",
      },
      href: "/supermarkets",
      image: "/images/elite-baskets-fresh.jpg",
      tag: { en: "5 → 50 Outlets", ar: "5 ← 50 متجراً" },
    },
    {
      title: { en: "Logistics & Supply Chain", ar: "اللوجستيات وسلاسل الإمداد" },
      summary: {
        en: "Coordinating logistics and supply chain activities to support the movement of goods across markets.",
        ar: "تنسيق الأنشطة اللوجستية وسلاسل الإمداد لدعم حركة البضائع عبر الأسواق.",
      },
      href: "/businesses/logistics",
      image: "/images/cold-chain-warehouse.jpg",
      tag: { en: "Ports & Cold Chain", ar: "الموانئ والتبريد" },
    },
    {
      title: { en: "Pets Pantry", ar: "بيتس بانتري" },
      summary: {
        en: "Pet food and supplies in the UAE.",
        ar: "أغذية ومستلزمات الحيوانات الأليفة في الإمارات.",
      },
      href: "/businesses/pets-pantry",
      image: "/images/brands/pets-pantry.jpg",
      tag: { en: "Pet Food & Supplies", ar: "أغذية ومستلزمات الحيوانات" },
    },
  ];

  const latestNews = NEWS_DATA.slice(0, 3);

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gsy-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-port.jpg"
            alt={
              locale === "ar"
                ? "ميناء تجاري وبواخر شحن — صورة توضيحية لمجموعة جي إس واي الدولية"
                : "Deepwater commercial port terminal — illustrative corporate imagery for GSY International Group"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#071324]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/55 rtl:bg-gradient-to-l"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-11 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Hero Copy (Left / Start) */}
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-gsy-gold-light/35 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-gsy-gold-light backdrop-blur-sm">
                {t(SITE_SETTINGS.tagline, locale)}
              </p>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[2.85rem] lg:leading-[1.12] xl:text-[3.1rem]">
                {t(SITE_SETTINGS.heroHeadline, locale)}
              </h1>

              {t(SITE_SETTINGS.heroSubheadline, locale) ? (
                <p className="mt-4 text-lg font-medium text-gsy-gold-light sm:text-xl">
                  {t(SITE_SETTINGS.heroSubheadline, locale)}
                </p>
              ) : null}

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                {t(SITE_SETTINGS.oneLineDescription, locale)}
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  href={localePath(locale, "/investors/partner-with-gsy")}
                  className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3.5 text-sm font-extrabold text-gsy-navy-deep shadow-lg transition hover:bg-gsy-gold-light"
                >
                  <span>{copy.partnerWithUs}</span>
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link
                  href={localePath(locale, "/businesses")}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <span>{copy.exploreBusinesses}</span>
                </Link>
              </div>
            </div>

            {/* Hero Featured Video (Right / End — video only, no toggle or image) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gsy-gold-light/30 bg-[#081931] shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/ewQN_K4CvMc?rel=0"
                  title={
                    locale === "ar"
                      ? "فيديو تعريفي بمجموعة جي إس واي الدولية"
                      : "GSY International Group Overview Video"
                  }
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <StatsBar locale={locale} />

      {/* 3. THE GSY FAMILY + 5-STEP GROUP MODEL STRIP */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {copy.homeSections.familyEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl sm:whitespace-nowrap dark:text-white">
              {copy.homeSections.familyHeading}
            </h2>
          </div>
          <Link
            href={localePath(locale, "/about/gsy-family")}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gsy-navy/20 bg-white px-4 py-2.5 text-xs font-bold text-gsy-navy shadow-sm transition hover:border-gsy-gold hover:text-gsy-gold dark:border-white/20 dark:bg-gsy-navy dark:text-white dark:hover:text-gsy-gold-light"
          >
            <span>{copy.homeSections.familyCta}</span>
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8">
          <FamilyNetworkDiagram locale={locale} />
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gsy-slate dark:text-white/70">
            {locale === "ar"
              ? "النموذج المتكامل من 5 خطوات: من المنشأ إلى التجزئة"
              : "5-Step Integrated Group Model: Origin to Shelf"}
          </p>
          <GroupModelStrip locale={locale} />
        </div>
      </section>

      {/* 4. VISION 2030 (NEXT TO THE GSY FAMILY) */}
      <section className="border-y border-gsy-navy/10 bg-white py-16 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
                {copy.homeSections.visionEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
                {copy.homeSections.visionHeading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
                {copy.homeSections.visionSub}
              </p>
            </div>
            <Link
              href={localePath(locale, "/about/vision-2030")}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              <span>{locale === "ar" ? "اكتشف رؤيتنا" : "Discover Our Vision"}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8">
            <VisionTimeline locale={locale} />
          </div>
        </div>
      </section>

      {/* 3. OUR BUSINESSES (7 TILES) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {copy.homeSections.businessesEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {copy.homeSections.businessesHeading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
              {copy.homeSections.businessesSub}
            </p>
          </div>
          <Link
            href={localePath(locale, "/businesses")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
          >
            <span>{copy.exploreBusinesses}</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessTiles.map((tile, i) => (
            <Link
              key={i}
              href={localePath(locale, tile.href)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 hover:shadow-card-hover dark:border-white/10 dark:bg-gsy-navy"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={tile.image}
                  alt={`${t(tile.title, locale)} — ${copy.demoPlaceholderTag}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/80 via-gsy-navy/20 to-transparent" />
                <span className="absolute bottom-3 start-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-bold text-gsy-navy">
                  {t(tile.tag, locale)}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-lg font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                    {t(tile.title, locale)}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/75">
                    {t(tile.summary, locale)}
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                  <span>{copy.learnMore}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. TRADE CORRIDORS */}
      <section className="border-y border-gsy-navy/10 bg-white py-16 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {copy.homeSections.corridorsEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {copy.homeSections.corridorsHeading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
              {copy.homeSections.corridorsSub}
            </p>
          </div>
          <div className="mt-8">
            <TradeCorridorsMap locale={locale} />
          </div>
        </div>
      </section>

      {/* 7. GLOBAL PRESENCE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {copy.homeSections.presenceEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {copy.homeSections.presenceHeading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
              {copy.homeSections.presenceSub}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={localePath(locale, "/presence/africa")}
              className="rounded-lg border border-gsy-gold/40 bg-gsy-gold-pale px-4 py-2 text-xs font-bold text-gsy-gold hover:bg-gsy-gold hover:text-white dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light"
            >
              {locale === "ar" ? "تركيز أفريقيا" : "GSY in Africa"}
            </Link>
            <Link
              href={localePath(locale, "/presence")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gsy-navy px-4 py-2 text-xs font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
            >
              <span>{locale === "ar" ? "استكشف انتشارنا العالمي" : "Explore Our Global Presence"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <GlobalPresenceMap locale={locale} compact />
        </div>
      </section>

      {/* 6. OUR SUPERMARKETS + FIND A STORE + CURRENT OFFERS */}
      <section className="border-y border-gsy-navy/10 bg-white py-16 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
                {copy.homeSections.supermarketsEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
                {copy.homeSections.supermarketsHeading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
                {copy.homeSections.supermarketsSub}
              </p>
            </div>
            <Link
              href={localePath(locale, "/supermarkets")}
              className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
            >
              <span>{locale === "ar" ? "استكشف أسواقنا المركزية" : "Explore Our Supermarkets"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 3 Brand Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {SUPERMARKET_BRANDS.map((brand) => {
              const brandPhoto =
                brand.slug === "elite-baskets"
                  ? "/images/elite-baskets-fresh.jpg"
                  : brand.slug === "supermarket-malaysia"
                    ? "/images/noor-al-arab.jpg"
                    : "/images/supermarket-store.jpg";
              return (
                <div
                  key={brand.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-gsy-ivory/50 shadow-card dark:border-gsy-gold-light/15 dark:bg-[#050f1e]"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={brandPhoto}
                      alt={t(brand.name, locale)}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/80 via-gsy-navy/20 to-transparent" />
                    <span
                      className="absolute bottom-3 start-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shadow"
                      style={{ backgroundColor: brand.primaryColor }}
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </span>
                    <span className="absolute bottom-3 end-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-bold text-gsy-navy">
                      {t(brand.country, locale)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-gsy-navy dark:text-white">
                        {t(brand.name, locale)}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-gsy-gold dark:text-gsy-gold-light">
                        {t(brand.positioning, locale)}
                      </p>
                      <p className="mt-3 text-xs font-semibold text-gsy-slate dark:text-white/75">
                        {t(brand.storesTodayText, locale)} •{" "}
                        {locale === "ar"
                          ? `هدف 2030: ${brand.target2030Count} متجراً`
                          : `2030 plan: ${brand.target2030Count} outlets`}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-gsy-navy/10 pt-4 dark:border-white/10">
                      <Link
                        href={localePath(locale, `/supermarkets/${brand.slug}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-navy hover:text-gsy-gold dark:text-white dark:hover:text-gsy-gold-light"
                      >
                        <span>{copy.visitBrand}</span>
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={localePath(locale, "/about/gsy-family")}
                        className="text-[10px] font-semibold text-gsy-slate hover:underline dark:text-white/60"
                      >
                        {copy.aGsyFamilyCompany}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. TRUST (CERTIFICATIONS, BANK & PARTNER LOGO PLACEHOLDERS) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {copy.homeSections.trustEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {copy.homeSections.trustHeading}
            </h2>
            <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
              {copy.homeSections.trustSub}
            </p>
          </div>
          <Link
            href={localePath(locale, "/about/governance")}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
          >
            <span>{locale === "ar" ? "حوكمتنا والتزامنا" : "Our Governance & Compliance"}</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {[
            { code: "HACCP", desc: { en: "Food Safety Standard", ar: "معيار سلامة الغذاء" } },
            { code: "ISO Certified", desc: { en: "Quality & Systems", ar: "أنظمة إدارة الجودة" } },
            { code: "Halal Assured", desc: { en: "Certified Halal Supply", ar: "سلاسل توريد حلال" } },
          ].map((cert) => (
            <div
              key={cert.code}
              className="flex flex-col items-center justify-center rounded-xl border border-gsy-gold/30 bg-white p-5 text-center shadow-card dark:border-gsy-gold-light/25 dark:bg-gsy-navy"
            >
              <Award className="h-6 w-6 text-gsy-gold dark:text-gsy-gold-light" />
              <p className="mt-2 text-sm font-extrabold text-gsy-navy dark:text-white">
                {cert.code}
              </p>
              <p className="mt-0.5 text-[11px] text-gsy-slate dark:text-white/75">
                {t(cert.desc, locale)}
              </p>
            </div>
          ))}

          {[
            { en: "Trade Finance Bank Slot 1", ar: "شريك مصرفي تمويل تجاري 1" },
            { en: "Trade Finance Bank Slot 2", ar: "شريك مصرفي تمويل تجاري 2" },
            { en: "Big-4 Audit & Partner Slot", ar: "شريك التدقيق والاعتماد" },
          ].map((slot, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gsy-navy/25 bg-white/70 p-5 text-center dark:border-white/20 dark:bg-white/5"
            >
              <Landmark className="h-5 w-5 text-gsy-slate dark:text-white/60" />
              <p className="mt-2 text-xs font-bold text-gsy-navy dark:text-white/85">
                {t(slot, locale)}
              </p>
              <p className="mt-0.5 text-[10px] text-gsy-slate dark:text-white/55">
                {locale === "ar" ? "شعار بانتظار الاعتماد" : "Logo placeholder (upon approval)"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWS (LATEST 3 POSTS) */}
      <section className="border-y border-gsy-navy/10 bg-white py-16 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
                {copy.homeSections.newsEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
                {copy.homeSections.newsHeading}
              </h2>
              <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
                {copy.homeSections.newsSub}
              </p>
            </div>
            <Link
              href={localePath(locale, "/blog")}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              <span>{locale === "ar" ? "عرض جميع الأخبار" : "View All News"}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestNews.map((article) => (
              <Link
                key={article.slug}
                href={localePath(locale, `/blog/${article.slug}`)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-gsy-ivory/50 shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-white/10 dark:bg-[#050f1e]"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={article.image}
                    alt={t(article.title, locale)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-gsy-gold dark:text-gsy-gold-light">
                      <span className="inline-flex items-center gap-1">
                        <Newspaper className="h-3.5 w-3.5" />
                        {t(article.tag, locale)}
                      </span>
                      <span className="text-gsy-slate dark:text-white/60">{article.date}</span>
                    </div>
                    <h3 className="mt-2.5 text-base font-extrabold leading-snug text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                      {t(article.title, locale)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                      {t(article.excerpt, locale)}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                    {copy.learnMore}
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CAREERS BANNER */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gsy-navy px-6 py-10 text-white shadow-card sm:flex-row sm:items-center sm:px-10 dark:border dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gsy-gold-light">
              <Briefcase className="h-4 w-4" />
              {locale === "ar" ? "الوظائف في مجموعة جي إس واي" : "Careers at GSY"}
            </span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              {copy.homeSections.careersTitle}
            </h2>
            <p className="mt-2 text-sm text-white/80">{copy.homeSections.careersBody}</p>
          </div>
          <Link
            href={localePath(locale, "/careers")}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
          >
            <span>{copy.viewOpenRoles}</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 13. CONTACT (ROUTED BY 'I AM A') */}
      <section className="border-t border-gsy-navy/10 bg-white py-16 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {copy.homeSections.contactEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {copy.homeSections.contactHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
              {copy.homeSections.contactSub}
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-gsy-navy/10 bg-gsy-ivory/70 p-5 text-xs dark:border-white/10 dark:bg-white/5">
              <p className="flex items-center gap-2 font-bold text-gsy-navy dark:text-white">
                <ShieldCheck className="h-4 w-4 text-gsy-gold" />
                <span>{t(SITE_SETTINGS.hqAddress, locale)}</span>
              </p>
              <p className="flex items-center gap-2 text-gsy-slate dark:text-white/75">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>
                  {locale === "ar"
                    ? "توجيه ذكي عبر 6 مسارات: مشتري، مورد، استفسار شحن، مستثمر، باحث عن عمل، إعلام"
                    : "Smart routing across 6 tracks: Buyer, Supplier, Shipping Enquiry, Investor, Job Seeker, Media"}
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <RoutedContactForm locale={locale} />
          </div>
        </div>
      </section>
    </div>
  );
}

