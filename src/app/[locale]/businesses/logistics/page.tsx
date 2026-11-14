import React from "react";
import { notFound } from "next/navigation";
import { Truck } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { BUSINESS_DIVISIONS } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";

export default async function LogisticsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "logistics")!;

  const heroAction = (
    <a
      href="#enquiry-form"
      className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
    >
      <Truck className="h-4 w-4" />
      <span>
        {locale === "ar"
          ? "ناقش متطلباتك اللوجستية"
          : "Discuss Your Logistics Requirement"}
      </span>
    </a>
  );

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      heroTitle={
        locale === "ar"
          ? "دعم لوجستي منسق وسلاسل إمداد متكاملة"
          : "Coordinated Logistics and Supply Chain Support"
      }
      heroEyebrow={
        locale === "ar" ? "اللوجستيات وسلاسل الإمداد" : "Logistics & Supply Chain"
      }
      heroSubtitle={
        locale === "ar"
          ? "ربط التوريد والتجارة وحركة البضائع من خلال أنشطة منسقة لسلاسل الإمداد عبر شبكة أعمال جي إس واي."
          : "Connecting sourcing, trade and cargo movement through coordinated supply-chain activities across GSY’s business network."
      }
      primaryCta={{
        label:
          locale === "ar"
            ? "ناقش متطلباتك اللوجستية"
            : "Discuss Your Logistics Requirement",
        href: "#enquiry-form",
      }}
      whatWeDoTitle={
        locale === "ar" ? "خدمات الدعم اللوجستي لدينا" : "Our Logistics Support"
      }
      whatWeDoIntro={
        locale === "ar"
          ? "تربط جي إس واي بين التوريد والتجارة وحركة البضائع من خلال أنشطة منسقة لسلاسل الإمداد. يركز نهجنا على دعم حركة السلع وتنسيق المتطلبات اللوجستية ذات الصلة عبر الأنشطة التجارية. وبحسب طبيعة المتطلب، قد تُنفذ الخدمات مباشرة من قِبل جي إس واي أو يجري ترتيبها عبر شركاء خدمة معتمدين."
          : "GSY connects sourcing, trade and cargo movement through coordinated supply-chain activities. Our approach focuses on supporting the movement of goods and coordinating relevant logistics requirements across trade activities. Depending on the requirement, services may be performed directly by GSY or arranged through appropriate service partners."
      }
      howWeWorkTitle={
        locale === "ar" ? "كيف ندعم سلاسل الإمداد" : "How We Support Supply Chains"
      }
      whoWeServeTitle={
        locale === "ar" ? "ربط التوريد بأسواق الوجهة" : "Connecting Sourcing to Destination"
      }
      complianceTitle={
        locale === "ar"
          ? "نطاق العمل وحوكمة الخدمات"
          : "Operating Scope & Service Governance"
      }
      complianceSubtitle={
        locale === "ar"
          ? "ضوابط واضحة بين التنسيق المباشر وترتيبات الخدمة عبر الأطراف الثالثة:"
          : "Clear boundaries between direct coordination and third-party service arrangements:"
      }
      formVariant="division"
      formTitle={
        locale === "ar"
          ? "دعنا نناقش احتياجات سلاسل الإمداد الخاصة بك"
          : "Let's Discuss Your Supply Chain Needs"
      }
      formSubtitle={
        locale === "ar"
          ? "هل لديك متطلب لحركة البضائع أو تنسيق الشحن أو الدعم اللوجستي؟ شارك تفاصيلك مع فريقنا حتى نتمكن من فهم احتياجاتك ومناقشة الدعم المناسب."
          : "Have a cargo movement, freight coordination or logistics requirement? Share your details with our team so we can understand your needs and discuss the appropriate support."
      }
      formSubmitLabel={
        locale === "ar"
          ? "ناقش متطلباتك اللوجستية"
          : "Discuss Your Logistics Requirement"
      }
      heroAction={heroAction}
    />
  );
}
