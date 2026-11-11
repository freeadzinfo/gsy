import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, ShoppingBag } from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { BUSINESS_DIVISIONS } from "@/data/businesses";
import { PageHero } from "@/components/shared/PageHero";
import { GroupModelStrip } from "@/components/shared/GroupModelStrip";

export default async function BusinessesOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "الأعمال والقطاعات" : "04 • Business Divisions"}
        title={
          locale === "ar"
            ? "منصة غذائية متكاملة وبيت تداول سلع عبر ثلاث قارات"
            : "An integrated food platform and asset-light commodity trading house"
        }
        subtitle={
          locale === "ar"
            ? "ستة قطاعات تشغيلية مترابطة، إضافة إلى مجموعة أسواق جي إس واي المركزية، يجمعها مكتب التأجير البحري المشترك."
            : "Six core B2B and brand divisions plus GSY Supermarket Group — connected end-to-end by Shipping & Chartering."
        }
        backgroundImage="/images/hero-port.jpg"
        sideGallery={{
          mainImage: "/images/hero-port.jpg",
          mainCaption:
            locale === "ar"
              ? "من المنشأ إلى التجزئة — 6 قطاعات متكاملة"
              : "Origin to Shelf — 6 Integrated Divisions",
          badgeText: locale === "ar" ? "دبي • 25+ دولة" : "Dubai HQ • 25+ Markets",
        }}
        primaryCta={{
          label: locale === "ar" ? "استكشف تجارة السلع" : "Commodity Trading Desks",
          href: "/businesses/commodity-trading",
        }}
        secondaryCta={{
          label: locale === "ar" ? "اطلب عرض شحن بحري" : "Shipping & Freight Quote",
          href: "/businesses/shipping-chartering",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "الأعمال" : "Businesses" }]}
      />

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "النموذج التشغيلي ذو الخمس مراحل"
              : "The Group Model — Five Integrated Steps"}
          </h2>
          <div className="mt-5">
            <GroupModelStrip locale={locale} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "قطاعات المجموعة" : "All Business Divisions"}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_DIVISIONS.map((div) => (
              <Link
                key={div.slug}
                href={localePath(locale, `/businesses/${div.slug}`)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={div.image}
                    alt={t(div.name, locale)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/85 via-gsy-navy/20 to-transparent" />
                  {div.isFamilyBrand && (
                    <span className="absolute bottom-3 start-3 rounded-full bg-gsy-gold-bright px-2.5 py-0.5 text-[10px] font-extrabold text-gsy-navy-deep">
                      {locale === "ar" ? "إحدى شركات عائلة جي إس واي" : "A GSY Family company"}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-lg font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                      {t(div.name, locale)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/75">
                      {t(div.summary, locale)}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                    <span>{locale === "ar" ? "استكشف القطاع" : "Explore division"}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}

            {/* Dedicated Supermarkets Tile per Page 10 */}
            <Link
              href={localePath(locale, "/supermarkets")}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gsy-gold/40 bg-gsy-navy text-white shadow-card transition hover:-translate-y-0.5 dark:bg-[#050f1e]"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/images/supermarket-store.jpg"
                  alt="GSY Supermarket Group"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy via-gsy-navy/35 to-transparent" />
                <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-extrabold text-gsy-navy">
                  <ShoppingBag className="h-3 w-3 text-gsy-gold" />
                  {locale === "ar" ? "5 متاجر ← 50 بحلول 2030" : "5 Stores → 50 by 2030"}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    {locale === "ar" ? "مجموعة أسواق جي إس واي المركزية" : "GSY Supermarket Group"}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
                    {locale === "ar"
                      ? "إيليت باسكتس، سوبرماركت جي إس واي، وسوبرماركت ماليزيا — واجهة التجزئة المباشرة للمجموعة."
                      : "Elite Baskets, GSY Supermarket and Supermarket Malaysia — our consumer retail face across UAE, Malaysia and GCC."}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold-light">
                  <span>{locale === "ar" ? "زيارة قسم التجزئة" : "Open Supermarkets hub"}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

