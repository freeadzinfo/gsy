import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
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
            ? "سبعة قطاعات تشغيلية مترابطة، إضافة إلى مجموعة أسواق جي إس واي المركزية، يجمعها مكتب التأجير البحري المشترك."
            : "Seven core B2B, consumer and brand divisions plus GSY Supermarket Group — connected end-to-end by Shipping & Chartering."
        }
        backgroundImage="/images/hero-port.jpg"
        sideGallery={{
          mainImage: "/images/hero-port.jpg",
          mainCaption:
            locale === "ar"
              ? "من المنشأ إلى التجزئة — 7 قطاعات متكاملة"
              : "Origin to Shelf — 7 Integrated Divisions",
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
              ? "كيف يعمل نموذج أعمالنا"
              : "How Our Business Model Works"}
          </h2>
          <div className="mt-5">
            <GroupModelStrip locale={locale} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "قطاعات أعمالنا" : "Our Business Divisions"}
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
                    <span>
                      {locale === "ar"
                        ? `استكشف ${t(div.name, locale)}`
                        : `Explore ${t(div.name, locale)}`}
                    </span>
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Closing Section: Connected Across Markets */}
        <div className="relative overflow-hidden rounded-3xl bg-gsy-navy p-8 text-white shadow-xl dark:bg-gsy-navy-deep sm:p-12">
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-8">
              <span className="text-xs font-bold tracking-wider text-gsy-gold uppercase">
                {locale === "ar" ? "الربط عبر الأسواق" : "Connected Across Markets"}
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                {locale === "ar" ? "متصلون عبر الأسواق الدولية" : "Connected Across Markets"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                {locale === "ar"
                  ? "تربط أنشطة أعمالنا بين مصادر الإنتاج، الممرات التجارية، وأسواق العملاء في آسيا، الخليج، وأفريقيا. ومن خلال التعاون بين قطاعاتنا، نهدف إلى تعزيز الوصول إلى الأسواق، وتنسيق سلاسل الإمداد، وبناء علاقات تجارية طويلة الأمد."
                  : "Our business activities connect sourcing origins, trade corridors and customer markets across Asia, the Gulf and Africa. Through collaboration between our divisions, we aim to strengthen market access, supply coordination and long-term business relationships."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:justify-center">
              <Link
                href={localePath(locale, "/presence")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "استكشف حضورنا العالمي" : "Explore Our Global Presence"}</span>
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

