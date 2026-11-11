import React from "react";
import { notFound } from "next/navigation";
import { Target } from "lucide-react";
import { isValidLocale, t } from "@/lib/i18n";
import { BUSINESS_DIVISIONS, NOOR_AL_ARAB_PLAN } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";
import { NoorAlArabCatalogInteractive } from "@/components/businesses/NoorAlArabCatalogInteractive";

export default async function NoorAlArabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "noor-al-arab")!;

  const targetCounterStrip = (
    <section className="border-b border-gsy-navy/10 bg-white dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-gsy-navy/10 px-4 sm:grid-cols-4 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse sm:px-6 lg:px-8 dark:divide-white/10">
        {[
          {
            val: "AED 1B",
            label: { en: "2030 Brand Target (Before 2030)", ar: "هدف العلامة قبل 2030" },
          },
          {
            val: "1,000 SKUs",
            label: { en: "UAE HORECA & Retail Range", ar: "أصناف التوزيع في الإمارات" },
          },
          {
            val: "₹200 Cr / yr",
            label: { en: "India Export & Distribution Target", ar: "هدف المبيعات السنوية في الهند" },
          },
          {
            val: "US$100M",
            label: { en: "Malaysia Distribution Target", ar: "هدف التوزيع في ماليزيا" },
          },
        ].map((item, i) => (
          <div key={i} className="px-4 py-6 text-center">
            <p className="text-2xl font-extrabold text-gsy-navy dark:text-gsy-gold-light" dir="ltr">
              {item.val}
            </p>
            <p className="mt-1 text-xs font-semibold text-gsy-slate dark:text-white/75">
              {t(item.label, locale)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  const customSection = (
    <div className="space-y-12">
      {/* Market Expansion Table (Page 11) */}
      <section>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-2xl font-extrabold text-gsy-navy dark:text-white">
            <Target className="h-5 w-5 text-gsy-gold" />
            <span>
              {locale === "ar"
                ? "خطة أسواق نور العرب (مستهدف مليار درهم قبل 2030)"
                : "Noor Al Arab Regional Distribution Plan"}
            </span>
          </h2>
          <span className="rounded-full bg-gsy-gold/15 px-3 py-1 text-xs font-bold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
            {locale === "ar"
              ? "أرقام مستهدفة لعام 2030 (قابلة للتعديل من CMS)"
              : "2030 Brand Targets (CMS-Editable)"}
          </span>
        </div>

        <div className="mt-4 overflow-x-auto rounded-2xl border border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <table className="w-full border-collapse text-start text-sm">
            <thead>
              <tr className="bg-gsy-navy text-xs font-bold uppercase tracking-wider text-white dark:bg-[#050f1e]">
                <th className="px-5 py-3.5 text-start">{locale === "ar" ? "السوق" : "Market"}</th>
                <th className="px-5 py-3.5 text-start">{locale === "ar" ? "الخطة" : "Plan"}</th>
                <th className="px-5 py-3.5 text-start">{locale === "ar" ? "الهدف (CMS)" : "Target (CMS-editable)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gsy-navy/10 dark:divide-white/10">
              {NOOR_AL_ARAB_PLAN.map((row) => (
                <tr key={row.market.en}>
                  <td className="px-5 py-4 font-extrabold text-gsy-navy dark:text-white">
                    {t(row.market, locale)}
                  </td>
                  <td className="px-5 py-4 text-gsy-slate dark:text-white/80">
                    {t(row.plan, locale)}
                  </td>
                  <td className="px-5 py-4 font-bold text-gsy-gold dark:text-gsy-gold-light">
                    {t(row.target, locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Filterable Product Range */}
      <NoorAlArabCatalogInteractive locale={locale} />
    </div>
  );

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      formVariant="noor-al-arab"
      formTitle={
        locale === "ar"
          ? "طلب فتح حساب تجاري — نور العرب"
          : "Noor Al Arab Trade Account Form"
      }
      afterHeroSection={targetCounterStrip}
      customSection={customSection}
    />
  );
}

