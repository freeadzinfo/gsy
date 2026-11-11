import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export default async function HalalInvestmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const pillars = [
    {
      title: { en: "Real Asset & Physical Trade Backing", ar: "مدعوم بتجارة فعلية وأصول حقيقية" },
      desc: {
        en: "Capital participation tied to physical agricultural staples, halal foods, and supermarket expansion — without speculative leverage.",
        ar: "مشاركة مرتبطة بتجارة السلع الغذائية الأساسية والأغذية الحلال وتوسع المتاجر دون رافعة مالية مفرطة.",
      },
    },
    {
      title: { en: "Disciplined Risk & Credit Controls", ar: "ضوابط صارمة للمخاطر والائتمان" },
      desc: {
        en: "Back-to-back trade execution, credit-insured buyers, LC-backed settlements and board-level risk oversight.",
        ar: "تنفيذ متقابل للصفقات، ومشترون مؤمنون ائتمانياً، وتسويات باعتمادات مستندية وإشراف لجنة المخاطر.",
      },
    },
    {
      title: { en: "Private Qualified Investor Documentation", ar: "وثائق مخصصة للمستثمرين المؤهلين" },
      desc: {
        en: "Detailed structure terms, audit packs and country-level data are provided confidentially after investor qualification.",
        ar: "تُشارك الهياكل التعاقدية التفصيلية وبيانات التدقيق بشكل سري وخاص بعد تأكيد أهلية المستثمر.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "المستثمرون • برنامج الاستثمار" : "Investors • Retained Flagship Page"}
        title={locale === "ar" ? "برنامج الاستثمار الحلال" : "Halal Investment Program"}
        subtitle={
          locale === "ar"
            ? "مشاركة أخلاقية متوافقة مع الشريعة في نمو سلاسل الإمداد الغذائي والتجزئة عبر آسيا والخليج وأفريقيا."
            : "Shariah-aligned, physical-trade and retail-backed participation supporting GSY's 2030 expansion."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "طلب ملف الاستثمار الخاص" : "Request Investor Pack",
          href: "#halal-enquiry",
        }}
        secondaryCta={{
          label: locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance",
          href: "/about/governance",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "المستثمرون" : "Investors", href: "/investors" },
          { label: locale === "ar" ? "برنامج الاستثمار الحلال" : "Halal Investment Program" },
        ]}
      />

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <CheckCircle2 className="h-5 w-5 text-gsy-gold dark:text-gsy-gold-light" />
              <h2 className="mt-3 text-base font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? p.title.ar : p.title.en}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {locale === "ar" ? p.desc.ar : p.desc.en}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-gsy-gold/30 bg-gsy-gold-pale/60 p-4 text-xs text-gsy-navy dark:border-gsy-gold-light/25 dark:bg-gsy-gold-bright/10 dark:text-white/90">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
          <span>
            {locale === "ar"
              ? "ملاحظة الإفصاح: تظل شروط التمويل ومعدلات العائد والهياكل الخاصة خارج الصفحات العامة وتُرسل حصرياً عند التواصل المباشر."
              : "Public disclosure note: EBITDA, IRR and specific funding terms are intentionally withheld from public web pages and shared directly with qualified investors."}
          </span>
        </div>

        <div id="halal-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="investor"
            title={
              locale === "ar"
                ? "طلب معلومات برنامج الاستثمار الحلال"
                : "Request Private Halal Investment Pack"
            }
            routeTarget={
              locale === "ar"
                ? "مكتب علاقات المستثمرين — دبي"
                : "Investor Relations & Dubai Holding Desk"
            }
          />
        </div>
      </div>
    </div>
  );
}

