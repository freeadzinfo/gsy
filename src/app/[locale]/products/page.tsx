import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { isValidLocale, t } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { ProductsCatalogClient } from "@/components/products/ProductsCatalogClient";
import { PRODUCT_CATEGORIES } from "@/data/products";
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
        ? "استكشف تشكيلة منتجاتنا | مجموعة جي إس واي العالمية"
        : "Explore Our Product Range | GSY International Group",
    description:
      locale === "ar"
        ? "اكتشف فئات الأغذية والسلع الاستهلاكية والسلع الأساسية التي تديرها أنشطة التجارة والتصدير والعلامات التجارية والتوزيع في جي إس واي. قد يختلف توفر المنتجات والمواصفات ومتطلبات الوجهات حسب كل سوق."
        : "Discover food, FMCG and commodity categories handled across GSY’s trading, export, brand and distribution activities. Product availability, specifications and destination requirements may vary by market.",
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. HERO SECTION */}
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "كتالوج المجموعة" : "GSY Product Range"}
        title={locale === "ar" ? "استكشف تشكيلة منتجاتنا" : "Explore Our Product Range"}
        subtitle={
          locale === "ar"
            ? "اكتشف فئات الأغذية والسلع الاستهلاكية والسلع الأساسية التي تديرها أنشطة التجارة والتصدير والعلامات التجارية والتوزيع في جي إس واي. قد يختلف توفر المنتجات والمواصفات ومتطلبات الوجهات حسب كل سوق."
            : "Discover food, FMCG and commodity categories handled across GSY’s trading, export, brand and distribution activities. Product availability, specifications and destination requirements may vary by market."
        }
        backgroundImage="/images/commodity-trading.jpg"
        primaryCta={{
          label: locale === "ar" ? "الاستفسار عن منتج" : "Enquire About a Product",
          href: "#product-enquiry",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تصفح الفئات المعتمدة" : "Explore Categories",
          href: "#product-categories",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "المنتجات" : "Products" }]}
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. PRODUCT CATEGORIES (8 MANDATORY CATEGORIES) */}
        <section id="product-categories" className="scroll-mt-24 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
                {locale === "ar" ? "فئات المنتجات الرئيسية" : "Product Categories"}
              </h2>
              <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "8 فئات رئيسية تغطي الأغذية والسلع الاستهلاكية والمدخلات الزراعية والمعادن والفلزات."
                  : "Core food, FMCG, agricultural input and commodity categories handled across GSY's network."}
              </p>
            </div>
            <span className="rounded-full bg-gsy-gold-pale px-3 py-1 text-xs font-bold text-gsy-gold dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light">
              {locale === "ar" ? "8 فئات معتمدة" : "8 Approved Categories"}
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 hover:shadow-card-hover dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gsy-navy text-xs font-extrabold text-gsy-gold-bright dark:bg-white/10 dark:text-gsy-gold-light">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-gsy-slate/70 dark:text-white/60">
                      CAT-{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-gsy-navy dark:text-white">
                    {t(cat.title, locale)}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(cat.description, locale)}
                  </p>
                </div>

                <div className="mt-5 border-t border-gsy-navy/10 pt-3 dark:border-white/10">
                  <a
                    href={`#catalogue`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
                  >
                    <span>{locale === "ar" ? "تصفح المنتجات في الكتالوج" : "Browse products"}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. PRODUCT CATALOGUE WITH FILTERS */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {locale === "ar" ? "كتالوج المنتجات التفاعلي" : "Product Catalogue"}
            </h2>
            <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
              {locale === "ar"
                ? "تصفح وابحث عن المنتجات حسب الفئة، واطلع على المواصفات المعتمدة والتعبئة والتغليف، واربط كل صنف بقطاع الأعمال أو العلامة التجارية ذات الصلة."
                : "Explore and filter products by category, view confirmed specifications, packaging and origins, and connect each listing to its relevant GSY business division or brand."}
            </p>
            <p className="mt-2 text-xs italic text-gsy-slate/80 dark:text-white/65">
              {locale === "ar"
                ? "ملاحظة: تُنشر فقط مواصفات المنتجات والمناشئ وتفاصيل التعبئة وتوافر الأسواق المعتمدة والمؤكدة رسمياً."
                : "Notice: Only confirmed product specifications, origins, packaging details and market availability are published. Unverified technical specifications or stock availability are not displayed."}
            </p>
          </div>

          <Suspense
            fallback={
              <div className="h-48 rounded-2xl bg-white/50 p-6 text-sm text-gsy-slate dark:bg-white/5 dark:text-white/70">
                Loading product catalogue...
              </div>
            }
          >
            <ProductsCatalogClient locale={locale} />
          </Suspense>
        </section>

        {/* 4. PRODUCT ENQUIRY FORM */}
        <section id="product-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="product"
            title={locale === "ar" ? "الاستفسار عن منتج" : "Enquire About a Product"}
            subtitle={
              locale === "ar"
                ? "حدد المنتج أو الفئة المطلوبة وشارك تفاصيل شركتك ومتطلباتك التجارية ليتواصل معك فريق الأعمال المختص."
                : "Express interest in a specific product or commodity category and share your commercial requirements with the appropriate GSY business team."
            }
            submitLabel={
              locale === "ar" ? "إرسال الاستفسار عن المنتج" : "Submit Product Enquiry"
            }
            routeTarget={
              locale === "ar"
                ? "فريق التجارة وتوزيع الأغذية"
                : "Trading & Food Distribution Team"
            }
          />
        </section>
      </div>
    </div>
  );
}
