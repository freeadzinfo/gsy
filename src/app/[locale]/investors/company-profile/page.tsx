import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { GatedProfileForm } from "@/components/investors/GatedProfileForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "الملف التعريفي للشركة | مجموعة جي إس واي العالمية"
        : "Company Profile | GSY International Group",
    description:
      locale === "ar"
        ? "حمّل الملف التعريفي المعتمد للتعرف على مجموعة جي إس واي الدولية، وقطاعات أعمالها، وأسواقها، وتوجهها الاستراتيجي."
        : "Download the approved company profile to learn about GSY International Group, its business divisions, markets and strategic direction.",
  };
}

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
        eyebrow={locale === "ar" ? "الملف التعريفي للشركة" : "Company Profile"}
        title={
          locale === "ar"
            ? "اكتشف مجموعة جي إس واي العالمية"
            : "Discover GSY International Group"
        }
        subtitle={
          locale === "ar"
            ? "حمّل الملف التعريفي المعتمد للتعرف على مجموعة جي إس واي الدولية، وقطاعات أعمالها، وأسواقها، وتوجهها الاستراتيجي."
            : "Download the approved company profile to learn about GSY International Group, its business divisions, markets and strategic direction."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "تحميل الملف التعريفي للشركة" : "Download Company Profile",
          href: "#profile-gate",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تشارك مع جي إس واي" : "Partner With GSY",
          href: "/investors",
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
