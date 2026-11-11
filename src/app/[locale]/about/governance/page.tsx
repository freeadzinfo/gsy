import React from "react";
import { notFound } from "next/navigation";
import { ShieldCheck, Scale, FileCheck2, Landmark, AlertCircle } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function GovernancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const pillars = [
    {
      icon: Landmark,
      title: { en: "UAE Holding Company Structure", ar: "هيكل الشركة القابضة في الإمارات" },
      desc: {
        en: "Group strategy, treasury oversight, brand ownership and holding governance anchored in Dubai, United Arab Emirates.",
        ar: "إدارة استراتيجية المجموعة والخزانة والملكية الفكرية للعلامات وحوكمة الشركة القابضة من دبي.",
      },
    },
    {
      icon: Scale,
      title: { en: "Independent Board & Big-4 Audit", ar: "أعضاء مجلس إدارة مستقلون وتدقيق عالمي" },
      desc: {
        en: "Supported by independent directors, Big-4 external audit standards, and a formal risk & compliance committee reporting to the board.",
        ar: "بدعم من مديرين مستقلين، وتدقيق خارجي وفق معايير الشركات الأربع الكبرى، ولجنة مخاطر وامتثال ترفع تقاريرها للمجلس.",
      },
    },
    {
      icon: ShieldCheck,
      title: { en: "KYC, Sanctions & Vessel Screening", ar: "فحص اعرف عميلك والعقوبات والسفن" },
      desc: {
        en: "Every commodity counterparty, origin facility and chartered vessel undergoes strict KYC and international sanctions screening before fixture or contract execution.",
        ar: "يخضع كل طرف تجاري ومنشأ وسفينة مستأجرة لفحص اعرف عميلك والعقوبات الدولية قبل تثبيت الشحن أو العقود.",
      },
    },
    {
      icon: FileCheck2,
      title: { en: "OECD Minerals & Trade Risk Discipline", ar: "العناية الواجبة للمعادن والانضباط الائتماني" },
      desc: {
        en: "OECD Due Diligence Guidance applied to minerals origination, paired with back-to-back trade contracts, credit insurance and LC-backed sales.",
        ar: "تطبيق إرشادات منظمة التعاون الاقتصادي للمعادن، إلى جانب العقود المتقابلة والتأمين الائتماني والاعتمادات المستندية.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "المعايير المؤسسية" : "Institutional Standards"}
        title={locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance"}
        subtitle={
          locale === "ar"
            ? "حوكمة شفافة وانضباط مصرفي في إدارة المخاطر عبر كافة شركات المجموعة."
            : "Bank-grade compliance, transparent holding oversight and disciplined risk controls across all group divisions."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "بوابة المستثمرين" : "Investor Relations",
          href: "/investors",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تواصل مع المقر الرئيسي" : "Contact Dubai HQ",
          href: "/contact",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-extrabold text-gsy-navy dark:text-white">
                  {locale === "ar" ? p.title.ar : p.title.en}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                  {locale === "ar" ? p.desc.ar : p.desc.en}
                </p>
              </div>
            );
          })}
        </div>

        {/* Confidentiality Rule Callout per Brief Page 2 */}
        <div className="rounded-2xl border border-gsy-gold/35 bg-gsy-gold-pale/60 p-6 dark:border-gsy-gold-light/25 dark:bg-gsy-gold-bright/10">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
            <div className="text-xs leading-relaxed text-gsy-navy sm:text-sm dark:text-white/90">
              <p className="font-extrabold">
                {locale === "ar"
                  ? "سياسة النشر العام للبيانات (وفق موجز الإدارة v4)"
                  : "Public Disclosure Policy (Management Brief v4 Guardrail)"}
              </p>
              <p className="mt-1">
                {locale === "ar"
                  ? "لا ينشر الموقع العام أبداً الأرباح قبل الفوائد والضرائب (EBITDA) أو هامش الربح أو معدل العائد الداخلي (IRR) أو شروط التمويل أو قوائم الدخل القُطرية؛ وتُشارك هذه البيانات حصرياً مع المستثمرين المعتمدين."
                  : "Per group disclosure rules, EBITDA, profit margins, IRR, SPV/store-investor funding terms, internal country tiers and country-level P&Ls are strictly excluded from the public website and shared privately with qualified partners."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

