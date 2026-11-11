import React from "react";
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
      title: { en: "Sourced direct from our own origins", ar: "توريد مباشر من مصادر المجموعة" },
      desc: { en: "Direct rice, spices and halal ranges from India and Malaysia.", ar: "أرز وتوابل ومنتجات حلال مباشرة من الهند وماليزيا." },
    },
    {
      title: { en: "Noor Al Arab and private-label value", ar: "قيمة علامة نور العرب والعلامات الخاصة" },
      desc: { en: "Everyday family value across staples, oils and pantry essentials.", ar: "قيمة يومية للعائلات عبر السلع الأساسية والزيوت." },
    },
    {
      title: { en: "Halal assured", ar: "ضمان الحلال المعتمد" },
      desc: { en: "Certified Halal butchery, frozen proteins and imported groceries.", ar: "ملحمة حلال معتمدة ومجمدات ومنتجات غذائية موثوقة." },
    },
    {
      title: { en: "Fresh and frozen ranges", ar: "أقسام الطازج والمجمدات اليومية" },
      desc: { en: "Daily produce, artisan bakery, seafood and temperature-controlled frozen aisles.", ar: "خضروات طازجة، مخبز يومي، مأكولات بحرية ومجمدات." },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. HERO */}
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
              <Link
                href={localePath(locale, "/about/gsy-family")}
                className="inline-flex items-center gap-1.5 rounded-full border border-gsy-gold-light/35 bg-white/10 px-3 py-1 text-xs font-bold text-gsy-gold-light"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{copy.aGsyFamilyCompany}</span>
              </Link>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
                {locale === "ar"
                  ? "طعام طازج وجودة عالية لكل عائلة — مجموعة أسواق جي إس واي"
                  : "Fresh, quality food for every family — GSY Supermarket Group."}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                {locale === "ar"
                  ? "5 أسواق مركزية نشطة اليوم في الإمارات وماليزيا، تنمو إلى 50 متجراً وهايبرماركت بحلول عام 2030."
                  : "Operating 5 live supermarkets across the UAE and Malaysia today, growing to 50 supermarkets and hypermarkets across UAE, Malaysia and GCC by 2030."}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#store-finder"
                  className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
                >
                  <MapPin className="h-4 w-4" />
                  <span>{copy.findAStore}</span>
                </a>
                <a
                  href="#weekly-offers"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  <Tag className="h-4 w-4" />
                  <span>{copy.thisWeeksOffers}</span>
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
                    {locale === "ar" ? "الإمارات وماليزيا ودول الخليج" : "UAE • Malaysia • GCC"}
                  </span>
                  <span className="rounded-full bg-gsy-gold-bright px-2.5 py-0.5 text-[10px] font-extrabold text-gsy-navy-deep">
                    {locale === "ar" ? "5 متاجر ← 50 بحلول 2030" : "5 Stores → 50 by 2030"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. OUR BRANDS */}
        <section>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "علاماتنا التجارية في التجزئة" : "Our Retail Brands"}
          </h2>
          <p className="mt-1.5 text-xs text-gsy-slate dark:text-white/70">
            {locale === "ar"
              ? "الأسماء وأعداد الفروع مستمدة من خطة العمل، وتخضع للتأكيد النهائي للشعارات وتوزيع المتاجر."
              : "Brand names and store counts come from the business plan. GSY to confirm final logos and store split per brand."}
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
                  className="flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
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
                      className="absolute bottom-3 start-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow"
                      style={{ backgroundColor: brand.primaryColor }}
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </span>
                    <span className="absolute bottom-3 end-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gsy-navy">
                      {t(brand.country, locale)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-gsy-navy dark:text-white">
                        {t(brand.name, locale)}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-gsy-gold dark:text-gsy-gold-light">
                        {t(brand.positioning, locale)}
                      </p>
                      <p className="mt-3 text-xs text-gsy-slate dark:text-white/75">
                        {t(brand.storesTodayText, locale)} •{" "}
                        {locale === "ar"
                          ? `هدف 2030: ${brand.target2030Count}`
                          : `2030 target: ${brand.target2030Count}`}
                      </p>
                    </div>
                    <Link
                      href={localePath(locale, `/supermarkets/${brand.slug}`)}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-navy hover:text-gsy-gold dark:text-gsy-gold-light"
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
          <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "محدد مواقع المتاجر" : "Store Finder"}
              </h2>
              <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "تصفح المتاجر حسب العلامة والدولة والمدينة مع ساعات العمل والاتجاهات."
                  : "Filter by brand, country and city with opening hours, contact and directions."}
              </p>
            </div>
            <Link
              href={localePath(locale, "/supermarkets/stores")}
              className="text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              {locale === "ar" ? "فتح صفحة محدد المتاجر المستقلة ←" : "Dedicated Store Finder Page →"}
            </Link>
          </div>
          <SupermarketStoreFinder locale={locale} />
        </section>

        {/* 4. WHY SHOP WITH US */}
        <section>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "لماذا تتسوق معنا" : "Why Shop With Us"}
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyShopPoints.map((pt, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gsy-navy/10 bg-white p-5 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <CheckCircle2 className="h-5 w-5 text-gsy-gold dark:text-gsy-gold-light" />
                <h3 className="mt-3 text-base font-extrabold text-gsy-navy dark:text-white">
                  {t(pt.title, locale)}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                  {t(pt.desc, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. OFFERS */}
        <section id="weekly-offers" className="scroll-mt-24">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
                {copy.thisWeeksOffers}
              </h2>
              <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "عروض ونشرات أسبوعية حسب العلامة والدولة — تختفي تلقائياً بعد انتهاء صلاحيتها."
                  : "Weekly promotional flyers per brand and country, updated by store teams and expired automatically after end date."}
              </p>
            </div>
            <Link
              href={localePath(locale, "/supermarkets/offers")}
              className="text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              {locale === "ar" ? "عرض صفحة العروض" : "All Offers Page"}
            </Link>
          </div>
          <WeeklyOffersGrid locale={locale} />
        </section>

        {/* 6. GROWING WITH YOU (5 -> 50 BY 2030) */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar"
                  ? "ننمو معكم — من 5 فروع اليوم إلى 50 فرعاً بحلول 2030"
                  : "Growing With You — 5 Outlets Today to 50 by 2030"}
              </h2>
              <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "التوسع عبر الإمارات وماليزيا والهايبرماركت في دول الخليج (أرقام قابلة للتعديل من CMS)."
                  : "Expanding across UAE, Malaysia and GCC hypermarkets (CMS-editable targets)."}
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-gsy-navy/10 dark:border-white/10">
            <table className="w-full border-collapse text-start text-sm">
              <thead>
                <tr className="bg-gsy-navy text-xs font-bold uppercase text-white dark:bg-[#050f1e]">
                  <th className="px-4 py-3 text-start">{locale === "ar" ? "السوق" : "Market"}</th>
                  <th className="px-4 py-3 text-start">{locale === "ar" ? "اليوم" : "Today"}</th>
                  <th className="px-4 py-3 text-start">{locale === "ar" ? "بحلول 2030" : "By 2030"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gsy-navy/10 dark:divide-white/10">
                {SUPERMARKET_GROWTH_PLAN.map((row) => (
                  <tr key={row.market.en}>
                    <td className="px-4 py-3.5 font-bold text-gsy-navy dark:text-white">
                      {t(row.market, locale)}
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
                  <td className="px-4 py-3.5">{locale === "ar" ? "الإجمالي" : "Total"}</td>
                  <td className="px-4 py-3.5">5</td>
                  <td className="px-4 py-3.5 text-gsy-gold dark:text-gsy-gold-light">50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. BECOME A SUPPLIER & 8. STORE PARTNERS */}
        <section className="grid gap-8 lg:grid-cols-2">
          <div id="become-supplier" className="scroll-mt-24">
            <DivisionEnquiryForm
              locale={locale}
              variant="supplier"
              title={locale === "ar" ? "7. كن مورداً لمتاجرنا" : "Become a Supplier"}
              subtitle={
                locale === "ar"
                  ? "قدّم منتجاتك وكتالوجك لفريق مشتريات التجزئة."
                  : "Submit your company profile, certifications and catalogue for review."
              }
              routeTarget={
                locale === "ar" ? "فريق مشتريات التجزئة" : "Retail Buying Team"
              }
            />
          </div>

          <div id="store-partners" className="scroll-mt-24">
            <DivisionEnquiryForm
              locale={locale}
              variant="store-partner"
              title={locale === "ar" ? "8. شركاء المتاجر والمواقع" : "Store Partners"}
              subtitle={
                locale === "ar"
                  ? "للمستثمرين وملاك العقارات: مواقع المتاجر الجديدة وشراكات التطوير (تُشارك التفاصيل الخاصة مباشرة)."
                  : "For investors and landlords: new store sites and store investment partnerships (terms shared privately)."
              }
              routeTarget={
                locale === "ar" ? "فريق تطوير التجزئة" : "Retail Development Team"
              }
            />
          </div>
        </section>

        {/* 9. RETAIL CAREERS */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
                <Briefcase className="h-5 w-5 text-gsy-gold" />
                <span>{locale === "ar" ? "وظائف قطاع التجزئة" : "Retail Careers"}</span>
              </h2>
              <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "أدوار مديري المتاجر وأمناء الصندوق والجزارين والخبازين ومنسقي البضائع (مصفاة من قاعدة الوظائف)."
                  : "Store manager, cashier, butcher, bakery and merchandiser roles filtered automatically from the Jobs collection."}
              </p>
            </div>
            <Link
              href={localePath(locale, "/careers")}
              className="text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              {copy.viewOpenRoles}
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
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

