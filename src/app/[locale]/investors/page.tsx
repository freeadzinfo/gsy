import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, FileDown, Handshake, Landmark, ArrowRight, ArrowLeft } from "lucide-react";
import { isValidLocale, localePath } from "@/lib/i18n";
import { SITE_SETTINGS } from "@/data/site-settings";
import { PageHero } from "@/components/shared/PageHero";
import { StatsBar } from "@/components/shared/StatsBar";

export default async function InvestorsOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const cards = [
    {
      icon: Landmark,
      title: { en: "Halal Investment Program", ar: "برنامج الاستثمار الحلال" },
      desc: {
        en: "Asset-backed Shariah-aligned growth across physical food trade and community retail.",
        ar: "نمو متوافق مع الشريعة الإسلامية ومدعوم بأصول وتجارة غذائية حقيقية.",
      },
      href: "/investors/halal-investment",
    },
    {
      icon: Handshake,
      title: { en: "Partner with GSY", ar: "تشارك مع جي إس واي" },
      desc: {
        en: "Structured engagement tracks for store investors, trade finance banks and origin producers.",
        ar: "مسارات شراكة واضحة لمستثمري المتاجر وبنوك التمويل التجاري ومنتجي المنشأ.",
      },
      href: "/investors/partner-with-gsy",
    },
    {
      icon: FileDown,
      title: { en: "Company Profile PDF", ar: "الملف التعريفي للمجموعة (PDF)" },
      desc: {
        en: "Download the corporate profile pack (gated by name and work email).",
        ar: "تحميل الملف التعريفي المؤسسي للمجموعة (بعد إدخال الاسم والبريد الإلكتروني).",
      },
      href: "/investors/company-profile",
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "علاقات المستثمرين والشركاء" : "Investors & Institutional Partners"}
        title={
          locale === "ar"
            ? `بناء مجموعة بقيمة ${SITE_SETTINGS.groupGoal2030} بحلول 2030`
            : `Building a ${SITE_SETTINGS.groupGoal2030} group by 2030`
        }
        subtitle={
          locale === "ar"
            ? "حوكمة شركة قابضة في الإمارات، وأعضاء مجلس إدارة مستقلون، وتدقيق مالي من إحدى الشركات الأربع الكبرى، ولجنة مخاطر وامتثال."
            : "UAE holding company governance, independent directors, Big-4 external audit and disciplined board-level risk oversight."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "تشارك مع جي إس واي" : "Partner with GSY",
          href: "/investors/partner-with-gsy",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تحميل ملف الشركة (PDF)" : "Company Profile PDF",
          href: "/investors/company-profile",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "المستثمرون" : "Investors" }]}
      />
      <StatsBar locale={locale} />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        {/* Governance Story in Plain Words (Page 11) */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
            <div>
              <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar"
                  ? "الحوكمة والشفافية في صلب استراتيجيتنا"
                  : "Institutional Governance in Plain Words"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/80">
                {locale === "ar"
                  ? "تُدار مجموعة جي إس واي عبر شركة قابضة في دولة الإمارات العربية المتحدة، بمشاركة أعضاء مجلس إدارة مستقلين، وتدقيق خارجي من إحدى الشركات الأربع الكبرى (Big-4)، ولجنة مخاطر ترفع تقاريرها لمجلس الإدارة. وبموجب سياسة المجموعة، لا ننشر الأرباح قبل الفوائد والضرائب أو معدلات العائد أو شروط التمويل أو نتائج الدول على الموقع العام؛ بل تُشارك حصرياً مع المستثمرين والشركاء المعتمدين."
                  : "GSY International Group operates through a UAE holding company with independent directors, Big-4 external audit standards and a dedicated board risk committee. In line with corporate disclosure policy, EBITDA, profit, IRR, SPV funding terms and country P&Ls are never published on the public site and are shared privately with qualified partners."}
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={localePath(locale, card.href)}
                className="group flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                    {locale === "ar" ? card.title.ar : card.title.en}
                  </h3>
                  <p className="mt-2 text-sm text-gsy-slate dark:text-white/75">
                    {locale === "ar" ? card.desc.ar : card.desc.en}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                  <span>{locale === "ar" ? "افتح الصفحة" : "Explore"}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}

