import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Landmark,
  Building2,
  Store,
  Truck,
  Sprout,
  Users2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { isValidLocale, t } from "@/lib/i18n";
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
        ? "تشارك مع جي إس واي | مجموعة جي إس واي العالمية"
        : "Partner With GSY | GSY International Group",
    description:
      locale === "ar"
        ? "استكشف فرص الشراكات التجارية وبناء علاقات طويلة الأجل مع مجموعة جي إس واي العالمية."
        : "Explore business partnership opportunities and building long-term relationships with GSY International Group.",
  };
}

export default async function PartnerWithGsyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const tracks = [
    {
      icon: Sprout,
      title: { en: "Suppliers & Producers", ar: "الموردون والمنتجون" },
      desc: {
        en: "Explore sourcing and supply relationships across agricultural staples, foods, fertilizer, minerals and metals.",
        ar: "استكشف علاقات التوريد والشراء للسلع الزراعية الأساسية والأغذية والأسمدة والمعادن.",
      },
    },
    {
      icon: Truck,
      title: { en: "Distributors", ar: "الموزعون" },
      desc: {
        en: "Discuss distribution opportunities across relevant wholesale, retail and HORECA markets.",
        ar: "ناقش فرص التوزيع عبر أسواق الجملة والتجزئة وقطاع الضيافة في الأسواق الإقليمية والدولية.",
      },
    },
    {
      icon: Landmark,
      title: { en: "Banks & Financial Institutions", ar: "البنوك والمؤسسات المالية" },
      desc: {
        en: "Connect with our team to discuss institutional relationships, LC facilities and trade finance cooperation.",
        ar: "تواصل مع فريقنا لمناقشة العلاقات المؤسسية والاعتمادات المستندية والتمويل التجاري.",
      },
    },
    {
      icon: Store,
      title: { en: "Retail Partners", ar: "شركاء التجزئة" },
      desc: {
        en: "Explore supermarket and retail development opportunities across our retail footprint.",
        ar: "استكشف فرص تطوير قطاع التجزئة والمتاجر ضمن شبكة علاماتنا التجارية.",
      },
    },
    {
      icon: Building2,
      title: { en: "Property Owners", ar: "ملاك العقارات" },
      desc: {
        en: "Discuss potential retail locations and store development partnerships in prime commercial sites.",
        ar: "ناقش المواقع التجارية المحتملة وشراكات تطوير المتاجر في أفضل المواقع الحيوية.",
      },
    },
    {
      icon: Users2,
      title: { en: "Business Investors", ar: "المستثمرون التجاريون" },
      desc: {
        en: "Contact GSY to explore relevant partnership discussions and long-term commercial participation.",
        ar: "تواصل مع مجموعة جي إس واي لمناقشة فرص الشراكة الاستراتيجية والمشاركات التجارية طويلة الأجل.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "الشراكات المؤسسية" : "Institutional Partnerships"}
        title={locale === "ar" ? "تشارك مع جي إس واي" : "Partner With GSY"}
        subtitle={
          locale === "ar"
            ? "بناء شراكات طويلة الأجل من خلال التجارة والاستثمار والنمو التجاري المسؤول. ترحب مجموعة جي إس واي العالمية بمناقشة التعاون مع الشركاء التجاريين المناسبين والمنتجين والموزعين وشركاء التجزئة والمستثمرين."
            : "Building long-term partnerships through trade, investment and responsible business growth. GSY International Group welcomes discussions with suitable business partners, producers, distributors, retail partners and investors."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "ناقش فرصة شراكة" : "Discuss a Partnership",
          href: "#partner-enquiry",
        }}
        secondaryCta={{
          label: locale === "ar" ? "الملف التعريفي للشركة" : "Company Profile",
          href: "/investors/company-profile",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "المستثمرون" : "Investors", href: "/investors" },
          { label: locale === "ar" ? "تشارك مع جي إس واي" : "Partner With GSY" },
        ]}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white sm:text-3xl">
              {locale === "ar"
                ? "استكشف فرص الشراكات التجارية"
                : "Explore Business Partnership Opportunities"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
              {locale === "ar"
                ? "نرحب باستفسارات المؤسسات والشركات المهتمة باستكشاف الفرص التجارية والشراكات طويلة الأجل مع مجموعة جي إس واي العالمية."
                : "We welcome enquiries from organisations interested in exploring business opportunities and long-term partnerships with GSY International Group."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((tr) => {
              const Icon = tr.icon;
              return (
                <div
                  key={tr.title.en}
                  className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:border-gsy-gold/40 hover:shadow-card-hover dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
                >
                  <div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-bright dark:bg-white/10 dark:text-gsy-gold-light">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold text-gsy-navy dark:text-white">
                      {t(tr.title, locale)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/80">
                      {t(tr.desc, locale)}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-gsy-navy/10 pt-3 dark:border-white/10">
                    <a
                      href="#partner-enquiry"
                      className="inline-flex items-center gap-1 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
                    >
                      <span>{locale === "ar" ? "تواصل حول هذا المسار" : "Connect on this track"}</span>
                      <ArrowIcon className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div id="partner-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="investor"
            title={
              locale === "ar"
                ? "ابدأ محادثة مع جي إس واي"
                : "Start a Conversation With GSY"
            }
            subtitle={
              locale === "ar"
                ? "مهتم باستكشاف شراكة تجارية مع مجموعة جي إس واي؟ أرسل تفاصيلك وسيقوم فريقنا المختص بالتواصل معك."
                : "Interested in exploring a business partnership with GSY? Submit your details and our relevant team can follow up."
            }
            submitLabel={
              locale === "ar" ? "إرسال الاستفسار" : "Submit Enquiry"
            }
            routeTarget={
              locale === "ar"
                ? "فريق الشراكات الاستراتيجية — دبي"
                : "Strategic Partnerships Team (Dubai HQ)"
            }
          />
        </div>
      </div>
    </div>
  );
}
