import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { BUSINESS_DIVISIONS } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";

export default async function DistributionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "distribution")!;

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      formVariant="division"
      formTitle={
        locale === "ar"
          ? "استفسار التوزيع وقطاع الضيافة"
          : "Distribution & HORECA Partnership Enquiry"
      }
    />
  );
}

