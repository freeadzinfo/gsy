import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryClient } from "@/components/about/GalleryClient";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={
          locale === "ar" ? "عن المجموعة • معرض الصور" : "About • Media Gallery"
        }
        title={
          locale === "ar"
            ? "معرض المجموعة والعمليات والفعاليات"
            : "Corporate, Operations & Events Gallery"
        }
        subtitle={
          locale === "ar"
            ? "نظرة مرئية على المقر الرئيسي في دبي، والموانئ، ومرافق التعبئة، والأسواق المركزية، والملتقيات التجارية (صور توضيحية تجريبية)."
            : "Visual showcase across Dubai HQ, trade expos, shipping corridors, packing facilities, Noor Al Arab lines and retail stores (illustrative demo visuals)."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف عائلة جي إس واي" : "Explore The GSY Family",
          href: "/about/gsy-family",
        }}
        secondaryCta={{
          label: locale === "ar" ? "الفعاليات والأخبار" : "View Events in Blog",
          href: "/blog?category=event",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "معرض الصور" : "Gallery" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <GalleryClient locale={locale} />
      </section>
    </div>
  );
}

