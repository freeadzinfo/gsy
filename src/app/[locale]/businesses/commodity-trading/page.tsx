import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { BUSINESS_DIVISIONS } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";
import { CommodityDesksInteractive } from "@/components/businesses/CommodityDesksInteractive";

export default async function CommodityTradingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "commodity-trading")!;

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      formVariant="division"
      formTitle={
        locale === "ar"
          ? "استفسار تجاري — مكاتب تداول السلع"
          : "Commodity Trading Desk Enquiry"
      }
      customSection={<CommodityDesksInteractive locale={locale} />}
    />
  );
}

