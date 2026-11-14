import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Send,
} from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { CareersClient } from "@/components/careers/CareersClient";
import { GeneralCareerEnquiryForm } from "@/components/careers/GeneralCareerEnquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "الوظائف في مجموعة جي إس واي العالمية | انمو مع جي إس واي"
      : "Careers at GSY International Group | Grow With GSY",
    description: isAr
      ? "استكشف الفرص المهنية في مجموعة جي إس واي العالمية عبر تداول السلع، الشحن البحري، العمليات، اللوجستيات، التوزيع، التجزئة والوظائف المؤسسية."
      : "Explore career opportunities at GSY International Group across commodity trading, shipping, operations, logistics, distribution, retail and corporate functions.",
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. HERO SECTION */}
      <PageHero
        locale={locale}
        eyebrow={isAr ? "الوظائف • انمو مع جي إس واي" : "Careers • Grow With GSY"}
        title={isAr ? "انمو مع جي إس واي" : "Grow With GSY"}
        subtitle={
          isAr
            ? "ابنِ مسيرتك المهنية عبر التجارة الدولية والشحن البحري وتوزيع الأغذية والتجزئة. كن جزءاً من شركة دولية متنامية تربط الأسواق عبر آسيا والخليج وأفريقيا. تعمل فرقنا في جي إس واي عبر التجارة والشحن والعمليات والامتثال واللوجستيات والتوزيع والتجزئة والوظائف المؤسسية."
            : "Build your career across international trade, shipping, food distribution and retail. Be part of a growing international business connecting markets across Asia, the Gulf and Africa. At GSY, our teams work across trading, shipping, operations, compliance, logistics, distribution, retail and corporate functions."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: isAr ? "عرض الوظائف الشاغرة" : "View Open Roles",
          href: "#current-openings",
        }}
        secondaryCta={{
          label: isAr ? "استفسار مهني عام" : "General Career Enquiry",
          href: "#career-enquiry",
        }}
        breadcrumbs={[{ label: isAr ? "الوظائف" : "Careers" }]}
      />

      {/* STATS STRIP BELOW HERO */}
      <section className="border-b border-gsy-navy/10 bg-white dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-gsy-navy/10 px-4 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x rtl:lg:divide-x-reverse sm:px-6 lg:px-8 dark:divide-white/10">
          {[
            {
              val: "10",
              label: { en: "Career Departments", ar: "أقسام وتخصصات وظيفية" },
            },
            {
              val: "7",
              label: { en: "Countries Today", ar: "دول ننشط فيها اليوم" },
            },
            {
              val: "25+",
              label: { en: "Countries by 2030", ar: "دولة بحلول 2030" },
            },
            {
              val: "350+",
              label: { en: "People Across Group", ar: "كفاءة عبر المجموعة" },
            },
            {
              val: "US$2.5B",
              label: { en: "2030 Growth Vision", ar: "طموح المجموعة لعام 2030" },
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 text-center sm:p-5">
              <span className="block text-2xl font-black text-gsy-navy sm:text-3xl dark:text-white">
                {item.val}
              </span>
              <span className="mt-1 block text-xs font-semibold text-gsy-slate dark:text-white/70">
                {isAr ? item.label.ar : item.label.en}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {/* CURRENT OPENINGS */}
        <section id="current-openings" className="scroll-mt-24 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gsy-gold/40 bg-gsy-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gsy-navy dark:border-gsy-gold-light/30 dark:bg-gsy-gold-light/10 dark:text-gsy-gold-light">
                <Briefcase className="h-3.5 w-3.5" />
                <span>{isAr ? "الوظائف المتاحة" : "Open Positions"}</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
                {isAr ? "الفرص الوظيفية الحالية" : "Current Opportunities"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gsy-slate dark:text-white/80 sm:text-base">
                {isAr
                  ? "ابحث عن الوظائف التي تتوافق مع خبراتك ومهاراتك واهتماماتك المهنية."
                  : "Find roles that match your experience, skills and career interests."}
              </p>
            </div>
            <a
              href="#career-enquiry"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{isAr ? "أو قدّم استفساراً مهنياً عاماً" : "Or Submit General Enquiry"}</span>
            </a>
          </div>

          <CareersClient locale={locale} />
        </section>

        {/* JOB APPLICATION (TAKE THE NEXT STEP) */}
        <section className="rounded-2xl border border-gsy-gold/30 bg-gradient-to-r from-gsy-navy to-gsy-navy-mid p-8 text-white shadow-card sm:p-10 dark:border-gsy-gold-light/20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold-light">
                {isAr ? "خطوات التقديم" : "Application Guidance"}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                {isAr ? "اتخذ الخطوة التالية" : "Take the Next Step"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                {isAr
                  ? "هل أنت مهتم بفرصة في جي إس واي؟ افتح تفاصيل الوظيفة المعنية للاطلاع على المسؤوليات والمتطلبات وتقديم طلبك."
                  : "Interested in an opportunity at GSY? Open the relevant job listing to review its responsibilities and requirements and submit your application."}
              </p>
            </div>
            <a
              href="#current-openings"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3 text-sm font-extrabold text-gsy-navy-deep shadow-lg hover:bg-gsy-gold-light transition"
            >
              <span>{isAr ? "استكشف الوظائف الشاغرة" : "Explore Open Roles"}</span>
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* GENERAL CAREER ENQUIRY */}
        <section id="career-enquiry" className="scroll-mt-24 space-y-4">
          <div className="text-center sm:text-start">
            <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
              {isAr ? "قاعدة الكفاءات المستقبلية" : "Talent Network"}
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {isAr ? "ابقَ على تواصل مع جي إس واي" : "Stay Connected With GSY"}
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-gsy-slate dark:text-white/80">
              {isAr
                ? "إذا كنت ترغب في إبداء اهتمامك بفرص العمل المستقبلية، يُرجى استخدام نموذج الاستفسار المهني أدناه."
                : "If you would like to express your interest in future opportunities, use the career enquiry form."}
            </p>
          </div>

          <GeneralCareerEnquiryForm locale={locale} />
        </section>

        {/* CLOSING CTA */}
        <section className="rounded-3xl border border-gsy-navy/10 bg-white p-8 text-center shadow-card sm:p-12 dark:border-gsy-gold-light/20 dark:bg-gsy-navy">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {isAr
                ? "قد يبدأ فصلك المهني القادم هنا."
                : "Your Next Career Chapter Could Start Here."}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gsy-slate dark:text-white/80 sm:text-base">
              {isAr
                ? "استكشف الفرص عبر أعمال جي إس واي الدولية واكتشف كيف يمكن لمهاراتك أن تصنع فارقاً حقيقياً."
                : "Explore opportunities across GSY's international business and discover where your skills can make a difference."}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#current-openings"
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-6 py-3 text-sm font-extrabold text-gsy-navy-deep shadow-lg hover:bg-gsy-gold-light transition"
              >
                <span>{isAr ? "عرض الوظائف الشاغرة" : "View Open Roles"}</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="#career-enquiry"
                className="inline-flex items-center gap-2 rounded-lg border border-gsy-navy/20 bg-gsy-navy/5 px-6 py-3 text-sm font-bold text-gsy-navy hover:bg-gsy-navy/10 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition"
              >
                <span>{isAr ? "استفسار مهني عام" : "General Career Enquiry"}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
