import React, { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { ProductsCatalogClient } from "@/components/products/ProductsCatalogClient";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const deskGallery = [
    {
      title: { en: "FMCG & Noor Al Arab Staples", ar: "السلع الاستهلاكية ونور العرب" },
      image: "/images/commodity-trading.jpg",
    },
    {
      title: { en: "Fertilizer & Agricultural Inputs", ar: "الأسمدة والمدخلات الزراعية" },
      image: "/images/fertilizer-agri.jpg",
    },
    {
      title: { en: "Minerals & Industrial Metals", ar: "المعادن والخامات والفلزات" },
      image: "/images/minerals-metals.jpg",
    },
    {
      title: { en: "Frozen Foods & Cold Chain", ar: "الأغذية المجمدة وسلسلة التبريد" },
      image: "/images/cold-chain-warehouse.jpg",
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "كتالوج المجموعة" : "CMS Products Collection"}
        title={locale === "ar" ? "المنتجات والسلع الأساسية" : "Product Catalogue"}
        subtitle={
          locale === "ar"
            ? "منتجات السلع الأساسية والأسمدة والمجمدات والمعادن والفلزات وتشكيلة نور العرب المعبأة."
            : "Cross-border physical commodities and Noor Al Arab consumer & HORECA lines — structured in a single CMS collection so new lines scale without code changes."
        }
        backgroundImage="/images/commodity-trading.jpg"
        primaryCta={{
          label: locale === "ar" ? "اطلب عرض سعر للكميات" : "Request Bulk Product Quote",
          href: "/contact",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تشكيلة نور العرب" : "Noor Al Arab Brand",
          href: "/businesses/noor-al-arab",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "المنتجات" : "Products" }]}
      />
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deskGallery.map((card) => (
            <div
              key={card.title.en}
              className="relative h-40 overflow-hidden rounded-2xl border border-gsy-navy/10 shadow-sm dark:border-white/10"
            >
              <Image
                src={card.image}
                alt={locale === "ar" ? card.title.ar : card.title.en}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/90 via-gsy-navy/30 to-transparent" />
              <p className="absolute bottom-3 start-3 end-3 text-xs font-extrabold text-white">
                {locale === "ar" ? card.title.ar : card.title.en}
              </p>
            </div>
          ))}
        </div>
        <Suspense fallback={<div className="h-40 rounded-2xl bg-white/50 p-6 text-sm">Loading catalogue...</div>}>
          <ProductsCatalogClient locale={locale} />
        </Suspense>
      </section>
    </div>
  );
}

