import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "برنامج الاستثمار الحلال | مجموعة جي إس واي العالمية"
        : "Halal Investment Programme | GSY International Group",
    description:
      locale === "ar"
        ? "استكشف فرصاً استثمارية متوافقة مع الشريعة الإسلامية ومرتبطة بأنشطة تجارية حقيقية في التجارة وسلاسل الإمداد والتجزئة."
        : "Explore Shariah-conscious investment opportunities connected to real business activities across trade, supply chains and retail.",
  };
}

export default async function HalalInvestmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const principles = [
    {
      title: { en: "Shariah Alignment", ar: "التوافق مع الشريعة" },
      desc: {
        en: "Designed around Shariah-compliant principles and participation in real commercial business activity.",
        ar: "مصمم وفق مبادئ الشريعة الإسلامية القائمة على المشاركة في الأنشطة التجارية الحقيقية.",
      },
    },
    {
      title: { en: "Transparency", ar: "الشفافية الكاملة" },
      desc: {
        en: "Clear business structures and transactions with transparent operational reporting.",
        ar: "هياكل أعمال ومعاملات تجارية واضحة مع تقارير تشغيلية شفافة.",
      },
    },
    {
      title: { en: "Clear Business Activity", ar: "نشاط تجاري واضح" },
      desc: {
        en: "Capital participation connected directly to physical commodities, food supply and supermarket retail expansion.",
        ar: "مشاركات مالية مرتبطة مباشرة بالسلع الأساسية وسلاسل الإمداد وتوسع المتاجر.",
      },
    },
    {
      title: { en: "Responsible Growth", ar: "النمو المسؤول" },
      desc: {
        en: "Sustainable commercial scaling balancing partner trust with long-term business resilience.",
        ar: "توسع تجاري مستدام يوازن بين ثقة الشركاء واستمرارية الأعمال على المدى الطويل.",
      },
    },
    {
      title: { en: "Appropriate Investor Communication", ar: "التواصل الملائم مع المستثمرين" },
      desc: {
        en: "Disciplined investor relations, dedicated consultation and direct engagement with qualified partners.",
        ar: "علاقات مستثمرين منضبطة واستشارات مخصصة وتواصل مباشر مع الشركاء المؤهلين.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "برنامج الاستثمار الحلال" : "Halal Investment Programme"}
        title={
          locale === "ar"
            ? "استثمار أخلاقي. نشاط تجاري حقيقي. نمو مسؤول."
            : "Ethical Investment. Real Business. Responsible Growth."
        }
        subtitle={
          locale === "ar"
            ? "استكشف فرصاً استثمارية متوافقة مع الشريعة الإسلامية ومرتبطة بأنشطة تجارية حقيقية. يُقدَّم برنامج الاستثمار الحلال لـ GSY كعرض استثماري مصمم حول مبادئ الشريعة والمشاركة في النشاط التجاري الفعلي."
            : "Explore Shariah-conscious investment opportunities connected to real business activities. GSY’s Halal Investment Programme is presented as an investment offering designed around Shariah-compliant principles and participation in real business activity."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "طلب معلومات البرنامج" : "Request Programme Information",
          href: "#halal-enquiry",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تشارك مع جي إس واي" : "Partner With GSY",
          href: "/investors",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "المستثمرون" : "Investors", href: "/investors" },
          { label: locale === "ar" ? "برنامج الاستثمار الحلال" : "Halal Investment Programme" },
        ]}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        {/* Programme Principles */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {locale === "ar" ? "مبادئ البرنامج الاستثماري" : "Programme Principles"}
            </h2>
            <p className="mt-2 text-sm text-gsy-slate dark:text-white/75">
              {locale === "ar"
                ? "يقوم البرنامج على خمسة مبادئ أساسية لضمان التوافق الأخلاقي والنزاهة المؤسسية والارتباط بالاقتصاد الحقيقي."
                : "The programme is grounded in five core principles ensuring ethical alignment, institutional integrity, and connection to the real economy."}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gsy-gold-pale text-gsy-gold dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-gsy-navy dark:text-white">
                    {locale === "ar" ? p.title.ar : p.title.en}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                    {locale === "ar" ? p.desc.ar : p.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regulatory & Advisory Compliance Notice */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 dark:border-amber-400/30 dark:bg-amber-400/10">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="text-xs leading-relaxed text-amber-900 dark:text-amber-200">
              <strong className="font-bold">
                {locale === "ar" ? "إشعار الامتثال والاستشارة: " : "Regulatory & Advisory Notice: "}
              </strong>
              <span>
                {locale === "ar"
                  ? "تخضع معلومات البرنامج، ومعايير الأهلية، وإفصاحات المخاطر، والهيكل التعاقدي، والوضع التنظيمي للمراجعة والموافقة من قِبل المستشارين القانونيين والشرعيين للشركة قبل النشر النهائي. لا تتضمن هذه الصفحة أي عوائد مضمونة أو ادعاءات استثمارية غير مشروطة."
                  : "Programme information, eligibility criteria, risk disclosures, contractual structure and regulatory position must be reviewed and approved by the company's legal and Shariah advisers before publication. Guaranteed returns or risk-free investment claims are strictly not offered."}
              </span>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div id="halal-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="investor"
            title={
              locale === "ar"
                ? "طلب معلومات برنامج الاستثمار الحلال"
                : "Request Programme Information"
            }
            subtitle={
              locale === "ar"
                ? "شارك تفاصيل التواصل الخاصة بك وسيقوم الفريق المعني بمتابعة طلبك ومناقشة تفاصيل البرنامج بصورة مباشرة."
                : "Submit your details and our relevant team can follow up with verified programme documentation and eligibility requirements."
            }
            submitLabel={
              locale === "ar" ? "طلب معلومات البرنامج" : "Request Programme Information"
            }
            routeTarget={
              locale === "ar"
                ? "مكتب الاستثمار الحلال — دبي"
                : "Halal Investment Desk"
            }
            initialValues={{ enquiryType: "Halal Investment Programme" }}
          />
        </div>
      </div>
    </div>
  );
}
