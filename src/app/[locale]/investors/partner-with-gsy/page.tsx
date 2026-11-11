import React from "react";
import { notFound } from "next/navigation";
import { Landmark, ShoppingBag, Sprout } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export default async function PartnerWithGsyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const tracks = [
    {
      icon: ShoppingBag,
      title: { en: "Store Investors & Landlords", ar: "مستثمرو المتاجر وملاك العقارات" },
      desc: {
        en: "Co-invest in our 5 → 50 retail rollout across UAE, Malaysia and GCC hypermarkets, or propose prime retail sites.",
        ar: "شارك في خطة التوسع من 5 إلى 50 متجراً في الإمارات وماليزيا والخليج، أو اقترح مواقع تجارية مميزة.",
      },
    },
    {
      icon: Landmark,
      title: { en: "Banks & Trade Finance Partners", ar: "البنوك ومؤسسات التمويل التجاري" },
      desc: {
        en: "Partner across LC-backed, credit-insured physical trade flows governed by UAE holding oversight and Big-4 audit standards.",
        ar: "شراكة في تمويل التجارة الفعلية المضمونة باعتمادات مستندية وتأمين ائتماني وتحت تدقيق عالمي.",
      },
    },
    {
      icon: Sprout,
      title: { en: "Origin Producers & Mills", ar: "المنتجون ومصانع المنشأ" },
      desc: {
        en: "Long-term offtake across rice, pulses, spices, edible oils, fertilizer, frozen proteins, minerals and metals.",
        ar: "اتفاقيات شراء مستمرة للأرز والبقوليات والتوابل والزيوت والأسمدة والمجمدات والمعادن.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "شراكات استراتيجية" : "Investors • Partner With GSY"}
        title={locale === "ar" ? "تشارك مع مجموعة جي إس واي" : "Partner with GSY"}
        subtitle={
          locale === "ar"
            ? "صفحة مخصصة لمستثمري المتاجر، والبنوك وشركاء التمويل، والمنتجين في أسواق المنشأ."
            : "Dedicated partnership gateway for store investors, trade finance banks and origin producers."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "قدّم طلب الشراكة" : "Submit Partnership Enquiry",
          href: "#partner-enquiry",
        }}
        secondaryCta={{
          label: locale === "ar" ? "ملف الشركة التعريفي" : "Download Company Profile",
          href: "/investors/company-profile",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "المستثمرون" : "Investors", href: "/investors" },
          { label: locale === "ar" ? "تشارك مع جي إس واي" : "Partner with GSY" },
        ]}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((tr) => {
            const Icon = tr.icon;
            return (
              <div
                key={tr.title.en}
                className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-extrabold text-gsy-navy dark:text-white">
                  {locale === "ar" ? tr.title.ar : tr.title.en}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                  {locale === "ar" ? tr.desc.ar : tr.desc.en}
                </p>
              </div>
            );
          })}
        </div>

        <div id="partner-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="investor"
            title={
              locale === "ar"
                ? "نموذج استفسار شراكات الاستثمار والبنوك والمنتجين"
                : "Investor, Banking & Producer Partnership Form"
            }
            subtitle={
              locale === "ar"
                ? "اختر مسار الشراكة ليقوم فريق دبي بالتواصل المباشر معكم."
                : "Select your partnership track to connect directly with our Dubai corporate leadership."
            }
            routeTarget={
              locale === "ar"
                ? "الإدارة المالية والشراكات الاستراتيجية — دبي"
                : "Corporate Finance & Partnerships Desk (Dubai HQ)"
            }
          />
        </div>
      </div>
    </div>
  );
}

