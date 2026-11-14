import React from "react";
import { notFound } from "next/navigation";
import { Store } from "lucide-react";
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

  const heroAction = (
    <a
      href="#enquiry-form"
      className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
    >
      <Store className="h-4 w-4" />
      <span>
        {locale === "ar" ? "استفسر عن خدمات التوزيع" : "Enquire About Distribution"}
      </span>
    </a>
  );

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      heroTitle={
        locale === "ar"
          ? "حلول التوزيع لقطاعي التجزئة والضيافة"
          : "Distribution Solutions for Retail and HORECA"
      }
      heroEyebrow={
        locale === "ar" ? "التوزيع والضيافة" : "Distribution & HORECA"
      }
      heroSubtitle={
        locale === "ar"
          ? "ربط المنتجات الغذائية والاستهلاكية بالفنادق والمطاعم والمقاهي وشركات التموين وتجار التجزئة والعملاء المؤسسيين عبر قنوات الجملة والتوزيع."
          : "Connecting food and FMCG products with hotels, restaurants, cafés, caterers, retailers and institutional customers through wholesale and distribution channels."
      }
      primaryCta={{
        label:
          locale === "ar" ? "استفسر عن خدمات التوزيع" : "Enquire About Distribution",
        href: "#enquiry-form",
      }}
      whatWeDoTitle={
        locale === "ar" ? "محور أنشطة التوزيع" : "Distribution Focus"
      }
      whatWeDoIntro={
        locale === "ar"
          ? "تدعم جي إس واي حركة المنتجات الغذائية والسلع الاستهلاكية لعملاء الأعمال عبر قنوات الجملة والتوزيع. صُممت حلول التوزيع لدينا لخدمة الشركات التي تتطلب الوصول إلى المنتجات الغذائية وعلاقات توريد موثوقة، بما في ذلك مشغلو قطاع الضيافة (HORECA) وتجار التجزئة والمشترون المؤسسيون. وتركز أنشطتنا على ربط المنتجات بعملاء الأعمال عبر قنوات الجملة والتوريد المناسبة."
          : "GSY supports the movement of food and FMCG products to business customers through wholesale and distribution channels. Our distribution proposition is designed to serve businesses that require access to food products and dependable supply relationships, including HORECA operators, retailers and institutional buyers. Our distribution activities focus on connecting food and FMCG products with business customers through appropriate wholesale and supply channels."
      }
      whoWeServeTitle={locale === "ar" ? "الجهات التي نخدمها" : "Who We Serve"}
      howWeWorkTitle={locale === "ar" ? "آلية العمل" : "How We Work"}
      complianceTitle={
        locale === "ar"
          ? "معايير الجودة والانضباط التشغيلي"
          : "Quality & Operational Discipline"
      }
      complianceSubtitle={
        locale === "ar"
          ? "معايير تشغيلية وعناية واجبة عبر قنوات الجملة والتوزيع:"
          : "Operational standards and due diligence across wholesale and distribution channels:"
      }
      formVariant="division"
      formTitle={
        locale === "ar"
          ? "ناقش متطلبات التوزيع الخاصة بك"
          : "Discuss Your Distribution Requirements"
      }
      formSubtitle={
        locale === "ar"
          ? "هل تبحث عن شريك للتوزيع أو التوريد بالجملة؟ شارك متطلبات عملك مع فريقنا لمناقشة المنتجات المناسبة وترتيبات التوريد المحتملة."
          : "Looking for a distribution or wholesale supply partner? Share your business requirements with our team to discuss suitable products and potential supply arrangements."
      }
      formSubmitLabel={
        locale === "ar" ? "استفسر عن خدمات التوزيع" : "Enquire About Distribution"
      }
      heroAction={heroAction}
    />
  );
}
