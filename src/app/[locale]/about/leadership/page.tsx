import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { UserCircle2 } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { getUiCopy } from "@/data/dictionary";

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const copy = getUiCopy(locale);

  const slots = [
    {
      role: { en: "Group Chairman", ar: "رئيس مجلس الإدارة" },
      scope: { en: "Group Holding Strategy & Governance — Dubai HQ", ar: "استراتيجية الشركة القابضة والحوكمة — دبي" },
    },
    {
      role: { en: "Group Chief Executive Officer (Placeholder)", ar: "الرئيس التنفيذي للمجموعة (بيانات تجريبية)" },
      scope: { en: "Cross-Border Food Platform & 25-Country Rollout", ar: "المنصة الغذائية والتوسع في 25 دولة" },
    },
    {
      role: { en: "Head of Commodity Trading & Chartering (Placeholder)", ar: "رئيس قطاع تداول السلع والشحن (بيانات تجريبية)" },
      scope: { en: "FMCG, Fertilizer, Frozen, Minerals, Metals & Freight Desk", ar: "مكاتب السلع الخمسة ومكتب التأجير البحري" },
    },
    {
      role: { en: "Head of Noor Al Arab & Retail Group (Placeholder)", ar: "رئيس قطاع نور العرب والأسواق المركزية (بيانات تجريبية)" },
      scope: { en: "HORECA Distribution & 50-Outlet 2030 Supermarket Expansion", ar: "توزيع الضيافة وخطة الـ 50 متجراً لعام 2030" },
    },
    {
      role: { en: "Independent Directors & Audit Committee (Placeholder)", ar: "الأعضاء المستقلون ولجنة التدقيق والمخاطر (بيانات تجريبية)" },
      scope: { en: "Board Risk, Compliance & Big-4 External Audit Oversight", ar: "إشراف مجلس الإدارة على المخاطر والامتثال والتدقيق" },
    },
    {
      role: { en: "Group Chief Financial & Risk Officer (Placeholder)", ar: "المدير المالي وإدارة المخاطر (بيانات تجريبية)" },
      scope: { en: "Trade Finance, Treasury, Credit Insurance & Sanctions Governance", ar: "التمويل التجاري والخزانة والتأمين الائتماني والامتثال" },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "القيادة والحوكمة" : "Executive & Board Leadership"}
        title={locale === "ar" ? "القيادة التنفيذية" : "Leadership"}
        subtitle={
          locale === "ar"
            ? "بطاقات توضيحية لمقاعد مجلس الإدارة والقيادة التنفيذية بانتظار اعتماد الأسماء والسير الذاتية الرسمية."
            : "Structured executive and independent board profile slots prepared for approved corporate biographies prior to launch."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance",
          href: "/about/governance",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تشارك معنا" : "Partner With Us",
          href: "/investors/partner-with-gsy",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "القيادة" : "Leadership" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative h-64 overflow-hidden rounded-2xl border border-gsy-navy/10 shadow-card sm:h-80 dark:border-gsy-gold-light/15">
          <Image
            src="/images/boardroom-team.jpg"
            alt={
              locale === "ar"
                ? "غرفة اجتماعات القيادة التنفيذية في دبي (صورة توضيحية)"
                : "GSY International Group Dubai executive leadership boardroom — illustrative demo imagery"
            }
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gsy-navy/90 via-gsy-navy/25 to-transparent" />
          <div className="absolute bottom-5 start-5 end-5 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <span className="rounded bg-gsy-gold-bright px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-gsy-navy-deep">
                {copy.demoPlaceholderTag}
              </span>
              <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                {locale === "ar"
                  ? "مجلس الإدارة واللجان التنفيذية — دبي"
                  : "Group Board & Executive Leadership — Dubai HQ"}
              </h2>
            </div>
            <p className="text-xs text-white/80">{copy.illustImageCaption}</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gsy-ivory text-gsy-gold dark:bg-white/10 dark:text-gsy-gold-light">
                  <UserCircle2 className="h-8 w-8" />
                </span>
                <span className="rounded-full border border-gsy-gold/30 bg-gsy-gold-pale px-2.5 py-0.5 text-[10px] font-bold uppercase text-gsy-gold dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light">
                  {copy.demoPlaceholderTag}
                </span>
              </div>
              <h2 className="mt-4 text-base font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? slot.role.ar : slot.role.en}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {locale === "ar" ? slot.scope.ar : slot.scope.en}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

