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
      heroEyebrow={
        locale === "ar"
          ? "تجارة السلع عبر ممر أفريقيا – دول الخليج – آسيا"
          : "Commodity Trading Across the Africa–GCC–Asia Corridor"
      }
      heroTitle={locale === "ar" ? "تجارة السلع" : "Commodity Trading"}
      heroSubtitle={
        locale === "ar"
          ? "بيت تداول مستقل على ممر أفريقيا – الخليج – آسيا."
          : "An independent trading house on the Africa–GCC–Asia corridor."
      }
      primaryCta={{
        label:
          locale === "ar"
            ? "مناقشة متطلبات التداول"
            : "Discuss a Trade Requirement",
        href: "#enquiry-form",
      }}
      secondaryCta={{
        label: locale === "ar" ? "تواصل مع جي إس واي" : "Contact GSY",
        href: "/contact",
      }}
      whatWeDoTitle={locale === "ar" ? "ماذا نقدم" : "What We Do"}
      whatWeDoIntro={
        locale === "ar"
          ? "ربط الموردين والمشترين من خلال تجارة سلع دولية منظمة. تعمل جي إس واي للتداول عبر فئات سلع مختارة، لتربط موردي المنشأ بالموزعين والمصنعين والمشترين المؤسسيين. ويركز نموذج تداولنا على توريد المنتجات، والعناية الواجبة بالأطراف المقابلة، وتنسيق العقود، والتنفيذ الموثوق للشحنات."
          : "Connecting suppliers and buyers through structured international commodity trade. GSY Trading works across selected commodity categories, connecting origin suppliers with distributors, processors, manufacturers and institutional buyers. Our trading model focuses on product sourcing, counterparty due diligence, contract coordination and reliable cargo execution."
      }
      howWeWorkTitle={locale === "ar" ? "آلية العمل" : "How We Work"}
      whoWeServeTitle={locale === "ar" ? "الجهات التي نخدمها" : "Who We Serve"}
      complianceTitle={
        locale === "ar" ? "الامتثال والعناية الواجبة" : "Compliance & Due Diligence"
      }
      complianceSubtitle={
        locale === "ar"
          ? "تتطلب التجارة المسؤولة الاهتمام بالأطراف المقابلة ومصادر المنتجات وحركة الشحنات. ويشمل إطار عمل التداول لدينا ما يلي:"
          : "Responsible trading requires attention to counterparties, product origins and cargo movements. Our trading framework includes:"
      }
      formVariant="division"
      formTitle={
        locale === "ar"
          ? "تواصل مع فريق تجارة السلع لدينا"
          : "Connect With Our Commodity Trading Team"
      }
      formSubtitle={
        locale === "ar"
          ? "هل تبحث عن توريد سلع أو مناقشة متطلبات توريد دولية؟ تواصل مع فريقنا لمناقشة متطلبات المنتج، الحجم، وأسواق الوجهة."
          : "Looking to source commodities or discuss an international supply requirement? Connect with our team to discuss your product, volume and destination-market requirements."
      }
      formSubmitLabel={
        locale === "ar" ? "مناقشة متطلبات التداول" : "Discuss a Trade Requirement"
      }
      formSecondaryAction={{
        label: locale === "ar" ? "تواصل مع جي إس واي" : "Contact GSY",
        href: "/contact",
      }}
      customSection={<CommodityDesksInteractive locale={locale} />}
    />
  );
}

