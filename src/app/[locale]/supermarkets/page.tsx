import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Tag,
  ShoppingBag,
  CheckCircle2,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { SUPERMARKET_BRANDS, SUPERMARKET_GROWTH_PLAN } from "@/data/supermarkets";
import { CAREERS_DATA } from "@/data/careers";
import { getUiCopy } from "@/data/dictionary";
import {
  SupermarketStoreFinder,
  WeeklyOffersGrid,
} from "@/components/shared/SupermarketStoreFinder";
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
        ? "مجموعة أسواق جي إس واي | الإمارات وماليزيا"
        : "GSY Supermarket Group | UAE & Malaysia",
    description:
      locale === "ar"
        ? "استكشف علامات أسواق جي إس واي، ومواقع الفروع، والعروض، وفرص الشراكة في قطاع التجزئة في الإمارات وماليزيا."
        : "Explore GSY supermarket brands, store locations, offers and retail partnership opportunities in the UAE and Malaysia.",
  };
}

export default async function SupermarketsHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const copy = getUiCopy(locale);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;
  const retailJobs = CAREERS_DATA.filter((j) => j.department === "Retail");

  const whyShopPoints = [
    {
      title: {
        en: "Food Sourcing Connections",
        ar: "روابط توريد الأغذية المباشرة",
      },
      desc: {
        en: "Connected to GSY’s food sourcing and origin-market relationships.",
        ar: "مرتبطون بأنشطة توريد الأغذية المباشرة لـ GSY وعلاقاتنا الراسخة في أسواق المنشأ.",
      },
    },
    {
      title: {
        en: "Everyday Grocery Categories",
        ar: "فئات البقالة اليومية",
      },
      desc: {
        en: "Range of everyday grocery and food categories designed to serve local shopping needs.",
        ar: "تشكيلة من فئات البقالة والأغذية اليومية المصممة لتلبية احتياجات التسوق المحلية.",
      },
    },
    {
      title: {
        en: "Halal and Fresh/Frozen Ranges",
        ar: "تشكيلة الحلال والمنتجات الطازجة والمجمدة",
      },
      desc: {
        en: "Halal and fresh or frozen product ranges, where certified and available.",
        ar: "تشكيلات المنتجات الحلال والطازجة أو المجمدة، حيثما تكون معتمدة ومتاحة.",
      },
    },
    {
      title: {
        en: "Noor Al Arab and Private Labels",
        ar: "نور العرب والعلامات التجارية الخاصة",
      },
      desc: {
        en: "Access to Noor Al Arab products and other approved private-label offerings.",
        ar: "الوصول الحصري إلى منتجات نور العرب والعروض المعتمدة للعلامات الخاصة.",
      },
    },
    {
      title: {
        en: "Retail Formats for Local Markets",
        ar: "أشكال تجزئة تناسب الأسواق المحلية",
      },
      desc: {
        en: "Different supermarket formats designed around customer needs in the markets we serve.",
        ar: "أشكال ومفاهيم متنوعة للسوبرماركت مصممة حول متطلبات العملاء في الأسواق التي نخدمها.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gsy-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/supermarket-store.jpg"
            alt="GSY Supermarket Group — illustrative store photography"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/55 rtl:bg-gradient-to-l" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center rounded-full bg-gsy-gold-bright/20 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-gsy-gold-light border border-gsy-gold-bright/30">
                  {locale === "ar" ? "مجموعة أسواق جي إس واي" : "GSY SUPERMARKET GROUP"}
                </span>
                <Link
                  href={localePath(locale, "/about/gsy-family")}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white/90 hover:bg-white/20 transition"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-gsy-gold-light" />
                  <span>{copy.aGsyFamilyCompany}</span>
                </Link>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
                {locale === "ar" ? "مجموعة أسواق جي إس واي" : "GSY Supermarket Group"}
              </h1>

              <p className="mt-2 text-xl font-bold text-gsy-gold-light sm:text-2xl">
                {locale === "ar"
                  ? "طعام طازج وعالي الجودة لكل عائلة."
                  : "Fresh, quality food for every family."}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                {locale === "ar"
                  ? "تجمع مجموعة أسواق جي إس واي أشكالاً متنوعة من متاجر التجزئة المصممة لتلبية احتياجات التسوق اليومية في الإمارات وماليزيا. وترتبط شبكة التجزئة بأنشطة المجموعة في توريد الأغذية وعلاماتها التجارية وشبكات التوزيع."
                  : "GSY Supermarket Group brings together retail formats designed to serve everyday shopping needs across the UAE and Malaysia. Our retail network is connected to GSY’s food sourcing, brands and distribution activities."}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#store-finder"
                  className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
                >
                  <MapPin className="h-4 w-4" />
                  <span>{locale === "ar" ? "ابحث عن متجر" : "Find a Store"}</span>
                </a>
                <a
                  href="#weekly-offers"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  <Tag className="h-4 w-4" />
                  <span>{locale === "ar" ? "عروض هذا الأسبوع" : "This Week’s Offers"}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gsy-gold-light/30 bg-[#081931] shadow-2xl">
                <Image
                  src="/images/supermarket-store.jpg"
                  alt="GSY Supermarket Group — retail aisles"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold text-white">
                    {locale === "ar" ? "الإمارات • ماليزيا • دول الخليج" : "UAE • Malaysia • GCC"}
                  </span>
                  <span className="rounded-full bg-gsy-gold-bright px-2.5 py-0.5 text-[10px] font-extrabold text-gsy-navy-deep">
                    {locale === "ar" ? "خطة التوسع 2030: 50 متجراً" : "2030 Planned Footprint: 50 Stores"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. OUR SUPERMARKET BRANDS */}
        <section id="our-brands">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "علامات السوبرماركت لدينا" : "Our Supermarket Brands"}
              </h2>
              <p className="mt-1 text-sm font-semibold text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar"
                  ? "أشكال متاجر تجزئة مصممة لتلبية احتياجات التسوق المحلية"
                  : "Retail formats designed for local shopping needs"}
              </p>
            </div>
            <span className="rounded-full bg-gsy-ivory-dark px-3 py-1 text-xs font-medium text-gsy-slate dark:bg-white/10 dark:text-white/75">
              {locale === "ar" ? "3 علامات تجزئة" : "3 Retail Formats"}
            </span>
          </div>

          <p className="mt-3 text-xs italic text-gsy-slate dark:text-white/70">
            {locale === "ar"
              ? "ملاحظة: تخضع أسماء العلامات التجارية والشعارات وأعداد المتاجر والتوزيع الدقيق للمتاجر للتأكيد قبل النشر النهائي."
              : "Brand names, logos, store counts and the exact store split by brand must be confirmed before publication."}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
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
                  className="flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card transition hover:shadow-card-hover dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={brandPhoto}
                      alt={t(brand.name, locale)}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/85 via-gsy-navy/25 to-transparent" />
                    <span
                      className="absolute bottom-3 start-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg"
                      style={{ backgroundColor: brand.primaryColor }}
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </span>
                    <span className="absolute bottom-3 end-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gsy-navy shadow-sm">
                      {locale === "ar" ? "السوق: " : "Market: "}
                      {t(brand.country, locale)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-gsy-navy dark:text-white">
                        {t(brand.name, locale)}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-gsy-gold dark:text-gsy-gold-light">
                        {t(brand.positioning, locale)}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                        {t(brand.about, locale)}
                      </p>
                      <p className="mt-3 text-xs font-semibold text-gsy-navy dark:text-white/90">
                        {t(brand.storesTodayText, locale)} •{" "}
                        {locale === "ar"
                          ? `هدف 2030: ${brand.target2030Count} متجراً`
                          : `2030 Target: ${brand.target2030Count} stores`}
                      </p>
                    </div>

                    <Link
                      href={localePath(locale, `/supermarkets/${brand.slug}`)}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold text-gsy-navy hover:text-gsy-gold dark:text-gsy-gold-light transition"
                    >
                      <span>{copy.visitBrand}</span>
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. STORE FINDER */}
        <section id="store-finder" className="scroll-mt-24">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar"
                  ? "ابحث عن أحد فروع أسواق جي إس واي بالقرب منك"
                  : "Find a GSY Supermarket Near You"}
              </h2>
              <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "استكشف مواقع متاجرنا حسب العلامة التجارية أو الدولة أو المدينة أو المنطقة."
                  : "Explore our supermarket locations by brand, country, city or area."}
              </p>
            </div>
            <Link
              href={localePath(locale, "/supermarkets/stores")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              <span>{locale === "ar" ? "استكشف جميع الفروع" : "Explore All Stores"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <p className="mb-4 text-xs italic text-gsy-slate dark:text-white/70">
            {locale === "ar"
              ? "ملاحظة: يجب استيراد قوائم المتاجر من بيانات معتمدة داخل نظام إدارة المحتوى (CMS). لا يتم نشر فروع تجريبية أو مواقع غير مؤكدة أو أرقام اتصال غير موثقة دون تدقيق."
              : "Store listings must be populated from verified data within the CMS. Do not publish placeholder store listings, unconfirmed store locations or placeholder contact numbers without verification."}
          </p>

          <SupermarketStoreFinder locale={locale} />
        </section>

        {/* 4. WHY SHOP WITH US */}
        <section>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar" ? "لماذا تتسوق معنا" : "Why Shop With Us"}
            </h2>
            <p className="mt-1 text-base font-bold text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar"
                ? "مرتبطون بالجودة. مركزون على الاحتياجات اليومية."
                : "Connected to Quality. Focused on Everyday Needs."}
            </p>
            <p className="mt-1 text-xs text-gsy-slate dark:text-white/75">
              {locale === "ar"
                ? "أبرز الأسباب التي تجعل التسوق في أسواق مجموعة جي إس واي خياراً موثوقاً للعائلات والمجتمعات."
                : "Highlighting key reasons to shop across GSY Supermarket Group brands:"}
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyShopPoints.map((pt, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gsy-gold-pale text-gsy-gold dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-gsy-navy dark:text-white">
                    {t(pt.title, locale)}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(pt.desc, locale)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. OFFERS & PROMOTIONS */}
        <section id="weekly-offers" className="scroll-mt-24">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "العروض والترويجات" : "Offers & Promotions"}
              </h2>
              <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "استكشف أحدث عروض ونشرات التخفيضات عبر علاماتنا التجارية وأسواقنا."
                  : "Explore the latest supermarket offers and promotions across our brands and markets."}
              </p>
            </div>
            <Link
              href={localePath(locale, "/supermarkets/offers")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              <span>{locale === "ar" ? "عرض العروض الحالية" : "View Current Offers"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <p className="mb-4 text-xs italic text-gsy-slate dark:text-white/70">
            {locale === "ar"
              ? "تصفح العروض حسب العلامة التجارية والدولة مع فترات الصلاحية والمتاجر المشاركة وشروط المنتجات الواضحة. تنتهي وتختفي العروض تلقائياً فور انقضاء مدتها."
              : "Browse offers by brand and country with promotion validity period, participating store locations, clear terms and product details. Expired offers automatically disappear or display as concluded."}
          </p>

          <WeeklyOffersGrid locale={locale} />
        </section>

        {/* 6. GROWING WITH YOU (TOWARDS 2030) */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div>
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "بناء شبكة متاجرنا نحو عام 2030"
                : "Building Our Supermarket Network Towards 2030"}
            </h2>
            <p className="mt-1 text-sm font-semibold text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar"
                ? "تهدف مجموعة أسواق جي إس واي إلى توسيع حضورها في قطاع التجزئة عبر الإمارات وماليزيا وأسواق دول مجلس التعاون الخليجي الأخرى."
                : "GSY Supermarket Group aims to expand its retail presence across the UAE, Malaysia and other GCC markets."}
            </p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-gsy-navy/10 dark:border-white/10">
            <table className="w-full border-collapse text-start text-sm">
              <thead>
                <tr className="bg-gsy-navy text-xs font-bold uppercase text-white dark:bg-[#050f1e]">
                  <th className="px-4 py-3 text-start">{locale === "ar" ? "السوق" : "Market"}</th>
                  <th className="px-4 py-3 text-start">{locale === "ar" ? "الشكل التجاري" : "Format"}</th>
                  <th className="px-4 py-3 text-start">{locale === "ar" ? "المتاجر الحالية" : "Stores Today"}</th>
                  <th className="px-4 py-3 text-start">
                    {locale === "ar" ? "الهدف التوسعي المخطط لعام 2030" : "Planned 2030 Expansion Target"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gsy-navy/10 dark:divide-white/10">
                {SUPERMARKET_GROWTH_PLAN.map((row) => (
                  <tr key={row.market.en}>
                    <td className="px-4 py-3.5 font-bold text-gsy-navy dark:text-white">
                      {t(row.market, locale)}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-gsy-slate dark:text-white/75">
                      {t(row.format, locale)}
                    </td>
                    <td className="px-4 py-3.5 text-gsy-slate dark:text-white/80">
                      {row.today === 0 ? "–" : row.today}
                    </td>
                    <td className="px-4 py-3.5 font-extrabold text-gsy-gold dark:text-gsy-gold-light">
                      {locale === "ar" ? row.by2030Ar : row.by2030}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gsy-ivory font-extrabold text-gsy-navy dark:bg-white/5 dark:text-white">
                  <td className="px-4 py-3.5">{locale === "ar" ? "إجمالي شبكة التجزئة المخططة" : "Total Planned Retail Footprint"}</td>
                  <td className="px-4 py-3.5 text-xs text-gsy-slate dark:text-white/70">
                    {locale === "ar" ? "سوبرماركت وهايبرماركت" : "Supermarkets & Hypermarkets"}
                  </td>
                  <td className="px-4 py-3.5">5</td>
                  <td className="px-4 py-3.5 text-gsy-gold dark:text-gsy-gold-light">
                    {locale === "ar" ? "50 متجراً عبر الإمارات وماليزيا والخليج بحلول 2030" : "50 stores across UAE, Malaysia and GCC by 2030"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 dark:border-amber-400/30 dark:bg-amber-400/10">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-200">
                <strong>{locale === "ar" ? "تنبيه هام: " : "IMPORTANT: "}</strong>
                {locale === "ar"
                  ? "تمثل الأرقام المذكورة أعلاه أهدافاً توسعية مخططاً لها بحلول عام 2030، وتخضع لموافقة الإدارة والجدوى التجارية والتنفيذ الفعلي. ويجب عدم تقديمها كإنجازات حالية أو أعداد متاجر تشغيلية مؤكدة."
                  : "The figures above represent planned expansion targets by 2030, subject to management approval, commercial feasibility and execution. They must NOT be presented as current achievements or confirmed operational store numbers."}
              </p>
            </div>
          </div>
        </section>

        {/* 7. BECOME A SUPPLIER & 8. STORE PARTNERSHIPS */}
        <section className="grid gap-8 lg:grid-cols-2">
          {/* 7. BECOME A SUPPLIER */}
          <div id="become-supplier" className="scroll-mt-24">
            <DivisionEnquiryForm
              locale={locale}
              variant="supplier"
              title={
                locale === "ar"
                  ? "توريد المنتجات لمجموعة أسواق جي إس واي"
                  : "Supply Products to GSY Supermarket Group"
              }
              subtitle={
                locale === "ar"
                  ? "هل أنت مورد للأغذية أو السلع الاستهلاكية ومهتم بالتعاون مع شبكة التجزئة لدينا؟ شارك معلومات شركتك ومنتجاتك مع فريق مشتريات التجزئة للنظر فيها."
                  : "Are you a food or consumer-goods supplier interested in working with our retail network? Share your company and product information with our retail buying team for consideration."
              }
              submitLabel={
                locale === "ar" ? "إرسال استفسار المورّد" : "Submit Supplier Enquiry"
              }
              routeTarget={
                locale === "ar"
                  ? "فريق مشتريات التجزئة والتوريد"
                  : "Retail Buying & Procurement Team"
              }
            />
          </div>

          {/* 8. STORE PARTNERSHIPS */}
          <div id="store-partners" className="scroll-mt-24">
            <DivisionEnquiryForm
              locale={locale}
              variant="store-partner"
              title={
                locale === "ar"
                  ? "استكشف فرص شراكات المتاجر"
                  : "Explore Retail Partnership Opportunities"
              }
              subtitle={
                locale === "ar"
                  ? "نرحب باستفسارات ملاك العقارات وأصحاب المواقع وشركاء التجزئة المحتملين المهتمين بدعم التطوير المستقبلي للسوبرماركت. إذا كان لديك موقع تجاري مناسب أو ترغب في مناقشة شراكة متجر محتملة، شارك تفاصيلك مع فريق تطوير التجزئة."
                  : "We welcome enquiries from property owners, landlords and potential retail partners interested in supporting future supermarket development. If you have a suitable retail location or would like to discuss a potential store partnership, share your details with our retail development team."
              }
              submitLabel={
                locale === "ar" ? "مناقشة شراكة متجر" : "Discuss a Store Partnership"
              }
              routeTarget={
                locale === "ar" ? "فريق تطوير التجزئة" : "Retail Development Team"
              }
            />
          </div>
        </section>

        {/* 9. RETAIL CAREERS */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="max-w-3xl">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
                <Briefcase className="h-5 w-5 text-gsy-gold" />
                <span>
                  {locale === "ar" ? "ابنِ مسيرتك المهنية في قطاع التجزئة" : "Build Your Career in Retail"}
                </span>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "كن جزءاً من فرق العمل التي تخدم العملاء عبر شبكة متاجرنا. استكشف الفرص المتاحة في عمليات التجزئة وإدارة المتاجر، بما في ذلك أدوار: مدير متجر، كاشير، قصاب / لحام، خباز، ومنسق بضائع."
                  : "Be part of the teams serving customers across our supermarket network. Explore opportunities in retail operations and store management, including roles such as: Store Manager, Cashier, Butcher, Bakery, Merchandiser."}
              </p>
            </div>
            <Link
              href={localePath(locale, "/careers")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gsy-gold/40 bg-gsy-gold-pale px-4 py-2 text-xs font-bold text-gsy-gold hover:bg-gsy-gold/20 dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light"
            >
              <span>{locale === "ar" ? "استكشف وظائف التجزئة" : "Explore Retail Careers"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {retailJobs.map((job) => (
              <Link
                key={job.slug}
                href={localePath(locale, `/careers/${job.slug}`)}
                className="flex items-center justify-between rounded-xl border border-gsy-navy/10 bg-gsy-ivory/60 p-4 transition hover:border-gsy-gold/40 dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <h3 className="text-sm font-bold text-gsy-navy dark:text-white">
                    {t(job.title, locale)}
                  </h3>
                  <p className="mt-1 text-xs text-gsy-slate dark:text-white/75">
                    {t(job.location, locale)} • {t(job.employmentType, locale)}
                  </p>
                </div>
                <ArrowIcon className="h-4 w-4 text-gsy-gold" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
