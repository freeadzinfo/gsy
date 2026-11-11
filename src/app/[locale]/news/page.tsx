import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { NewsClient } from "@/components/news/NewsClient";

export default async function NewsPage({
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
        eyebrow={locale === "ar" ? "المركز الإعلامي" : "News • Milestones & Press"}
        title={locale === "ar" ? "الأخبار ومحطات التوسع" : "Milestones & Press Releases"}
        subtitle={
          locale === "ar"
            ? "أخبار توسع المجموعة وإعلانات الممرات التجارية والأسواق المركزية (بيانات تجريبية متوافقة مع موجز الإدارة)."
            : "Group milestones, corridor launches and retail updates (illustrative demo entries derived strictly from Management Brief v4)."
        }
        backgroundImage="/images/hero-port.jpg"
        primaryCta={{
          label: locale === "ar" ? "استفسارات الإعلام" : "Media & Press Contact",
          href: "/contact",
        }}
        secondaryCta={{
          label: locale === "ar" ? "رؤية 2030" : "Explore Vision 2030",
          href: "/about/vision-2030",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "الأخبار" : "News" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <NewsClient locale={locale} />
      </section>
    </div>
  );
}

