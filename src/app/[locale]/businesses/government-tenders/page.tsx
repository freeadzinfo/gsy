import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { BUSINESS_DIVISIONS } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";
import { ProcurementPackCards } from "@/components/businesses/ProcurementPackCards";

export default async function GovernmentTendersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "government-tenders")!;

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      formVariant="tenders"
      formTitle={
        locale === "ar"
          ? "نموذج استفسار المناقصات الحكومية والمؤسسية"
          : "Government & Institutional Tender Enquiry Form"
      }
      customSection={<ProcurementPackCards locale={locale} />}
    />
  );
}

