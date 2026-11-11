import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { GatedProfileForm } from "@/components/investors/GatedProfileForm";

export default async function CompanyProfilePage({
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
        eyebrow={locale === "ar" ? "المستثمرون • الملف المؤسسي" : "Investors • Company Profile"}
        title={locale === "ar" ? "الملف التعريفي لمجموعة جي إس واي" : "GSY Company Profile Download"}
        subtitle={
          locale === "ar"
            ? "ملف تعريفي رسمي محمي بالاسم والبريد الإلكتروني وفق متطلبات الإدارة."
            : "Downloadable corporate profile gated by name and email per Management Brief v4."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "افتح نموذج التحميل" : "Unlock Profile PDF",
          href: "#profile-gate",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تشارك مع جي إس واي" : "Partner with GSY",
          href: "/investors/partner-with-gsy",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "المستثمرون" : "Investors", href: "/investors" },
          { label: locale === "ar" ? "الملف التعريفي" : "Company Profile" },
        ]}
      />
      <section id="profile-gate" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8">
        <GatedProfileForm locale={locale} />
      </section>
    </div>
  );
}

