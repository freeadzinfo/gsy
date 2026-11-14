import React from "react";
import { notFound } from "next/navigation";
import { FileText, Sparkles } from "lucide-react";
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

  const heroAction = (
    <a
      href="#enquiry-form"
      className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
    >
      <FileText className="h-4 w-4" />
      <span>
        {locale === "ar" ? "تقديم استفسار مناقصة" : "Submit a Tender Enquiry"}
      </span>
    </a>
  );

  const finalCta = (
    <section className="rounded-2xl border border-gsy-gold/30 bg-gradient-to-r from-gsy-navy via-gsy-navy to-gsy-navy-mid p-8 text-center text-white sm:p-10 dark:border-gsy-gold-light/20 dark:from-gsy-navy-deep dark:to-gsy-navy">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gsy-gold/20 px-3.5 py-1 text-xs font-bold text-gsy-gold-light">
        <Sparkles className="h-3.5 w-3.5" />
        <span>
          {locale === "ar"
            ? "المشتريات والتوريد الحكومي"
            : "Government & Institutional Procurement"}
        </span>
      </span>
      <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
        {locale === "ar"
          ? "دعنا نناقش متطلبات المشتريات الخاصة بك"
          : "Let's Discuss Your Procurement Requirements"}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
        {locale === "ar"
          ? "تواصل مع مجموعة جي إس واي الدولية لمناقشة فرص التوريد الحكومية والمؤسسية والمناقصات المؤهلة."
          : "Contact GSY International Group to discuss eligible government, tender and institutional supply opportunities."}
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="#enquiry-form"
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
        >
          <FileText className="h-4 w-4" />
          <span>
            {locale === "ar" ? "تقديم استفسار مناقصة" : "Submit a Tender Enquiry"}
          </span>
        </a>
      </div>
    </section>
  );

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      heroTitle={locale === "ar" ? "المناقصات الحكومية والمؤسسية" : "Government & Tenders"}
      heroEyebrow={
        locale === "ar"
          ? "إمدادات موثوقة للحكومات والمؤسسات"
          : "Reliable Supply for Governments and Institutions"
      }
      heroSubtitle={
        locale === "ar"
          ? "ربط وكالات المشتريات الحكومية والمشترين المؤسسيين بحلول إمداد مختارة من السلع الغذائية الأساسية، والأسمدة، وحديد البناء، وخدمات التموين المؤسسي."
          : "Connecting government procurement agencies and institutional buyers with selected food staples, fertilizer, construction steel and institutional catering supply solutions."
      }
      primaryCta={{
        label: locale === "ar" ? "تقديم استفسار مناقصة" : "Submit a Tender Enquiry",
        href: "#enquiry-form",
      }}
      whatWeDoTitle={locale === "ar" ? "ما نقوم بتوريده" : "What We Supply"}
      whatWeDoIntro={
        locale === "ar"
          ? "تدعم مجموعة جي إس واي الدولية متطلبات المشتريات الحكومية والمؤسسية من خلال توريد سلع ومنتجات مختارة. ينصب تركيزنا في إمداد المناقصات والمؤسسات على فهم المواصفات الفنية، وتنسيق متطلبات التوريد المناسبة، والتعاون مع المشترين المؤهلين عبر مسارات الاستفسار والمشتريات المعنية. وتخضع كافة ترتيبات التوريد لمواصفات المناقصة، ومتطلبات المنتج، والشروط التنظيمية، والقدرة التشغيلية المؤكدة."
          : "GSY International Group supports government and institutional procurement requirements through the sourcing and supply of selected commodities and products. Our tender and institutional supply proposition focuses on understanding procurement specifications, coordinating suitable supply requirements and working with eligible buyers through the relevant enquiry and procurement processes. All supply arrangements are subject to tender specifications, product requirements, regulatory conditions and confirmed operating capability."
      }
      whoWeServeTitle={locale === "ar" ? "الجهات التي نعمل معها" : "Who We Work With"}
      complianceTitle={
        locale === "ar"
          ? "معايير الحوكمة والامتثال للمناقصات"
          : "Tender Governance & Standards"
      }
      complianceSubtitle={
        locale === "ar"
          ? "انضباط تشغيلي وعناية واجبة عبر كافة مراحل المشتريات الحكومية والمؤسسية:"
          : "Operational discipline and due diligence across government and institutional procurement:"
      }
      formVariant="tenders"
      formTitle={
        locale === "ar"
          ? "ناقش متطلبات المشتريات الخاصة بك"
          : "Discuss Your Procurement Requirement"
      }
      formSubtitle={
        locale === "ar"
          ? "هل لديك مناقصة حكومية أو متطلب مشتريات مؤسسية؟ شارك التفاصيل مع فريقنا حتى يتمكن المكتب المختص من مراجعة الفرصة."
          : "Have a government tender or institutional procurement requirement? Share the details with our team so that the relevant desk can review the opportunity."
      }
      formSubmitLabel={
        locale === "ar" ? "إرسال استفسار المناقصة" : "Submit Tender Enquiry"
      }
      heroAction={heroAction}
      customSection={<ProcurementPackCards locale={locale} />}
      finalCtaSection={finalCta}
    />
  );
}
