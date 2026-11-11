import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Info } from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import {
  FAMILY_SUPPLY_LOOPS,
  GSY_FAMILY_MEMBERS,
} from "@/data/family";
import { PageHero } from "@/components/shared/PageHero";
import { BrandHierarchyTree } from "@/components/shared/BrandHierarchyTree";

export default async function GsyFamilyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "01 • عائلة جي إس واي" : "01 • The GSY Family"}
        title={
          locale === "ar"
            ? "عائلة واحدة تزود نفسها عبر 25+ دولة"
            : "One family, supplying itself across 25 countries"
        }
        subtitle={
          locale === "ar"
            ? "تشتري كل شركة وعلامة في المجموعة من الشركات الشقيقة وتبيع لها، مما يعزز القيمة ويؤمن سلاسل الإمداد."
            : "Every company and brand in the group is part of the GSY Family. Each one buys from and sells to the others, so the group earns margin at every step and keeps supply secure."
        }
        backgroundImage="/images/hero-port.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف جميع القطاعات" : "Explore All Divisions",
          href: "/businesses",
        }}
        secondaryCta={{
          label: locale === "ar" ? "خريطة الانتشار العالمي" : "Global Presence Map",
          href: "/presence",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "عائلة جي إس واي" : "The GSY Family" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {/* Corporate Brand Hierarchy Tree (Parent -> 5 Branches) */}
        <BrandHierarchyTree locale={locale} />

        {/* Entities Table */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar" ? "شركات وعلامات العائلة" : "GSY Family Members & Brands"}
            </h2>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gsy-slate dark:text-white/70">
              <Info className="h-3.5 w-3.5 text-gsy-gold" />
              {locale === "ar"
                ? "مسميات الشركات غير العلامات المسجلة هي مسميات عمل لحين الاعتماد القانوني النهائي."
                : "Company names other than the brands are working titles. GSY to confirm legal names before publishing."}
            </span>
          </div>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <table className="w-full border-collapse text-start text-sm">
              <thead>
                <tr className="border-b border-gsy-navy/10 bg-gsy-navy text-xs font-bold uppercase tracking-wider text-white dark:bg-[#050f1e]">
                  <th className="px-5 py-3.5 text-start">
                    {locale === "ar" ? "عضو العائلة" : "Family member"}
                  </th>
                  <th className="px-5 py-3.5 text-start">
                    {locale === "ar" ? "الدور والنشاط" : "What it does"}
                  </th>
                  <th className="px-5 py-3.5 text-start">
                    {locale === "ar" ? "الموقع" : "Where"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gsy-navy/10 dark:divide-white/10">
                {GSY_FAMILY_MEMBERS.map((member) => (
                  <tr
                    key={member.id}
                    className="hover:bg-gsy-ivory/60 dark:hover:bg-white/5"
                  >
                    <td className="px-5 py-4 font-bold text-gsy-navy dark:text-white">
                      <Link
                        href={localePath(locale, member.href)}
                        className="hover:text-gsy-gold hover:underline dark:hover:text-gsy-gold-light"
                      >
                        {t(member.name, locale)}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-gsy-slate dark:text-white/80">
                      {t(member.whatItDoes, locale)}
                    </td>
                    <td className="px-5 py-4 font-semibold text-gsy-navy dark:text-gsy-gold-light">
                      {t(member.where, locale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How the family supplies itself (6 cards) */}
        <div>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "كيف تزود العائلة نفسها" : "How the family supplies itself"}
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FAMILY_SUPPLY_LOOPS.map((card) => (
              <Link
                key={card.id}
                href={localePath(locale, card.href)}
                className="group flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div>
                  <h3 className="text-base font-extrabold text-gsy-navy group-hover:text-gsy-gold dark:text-gsy-gold-light">
                    {t(card.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                    {t(card.description, locale)}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                  <span>{locale === "ar" ? "استكشف" : "Explore"}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

