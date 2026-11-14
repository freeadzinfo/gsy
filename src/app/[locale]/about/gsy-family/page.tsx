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
        eyebrow={
          locale === "ar"
            ? "عائلة واحدة. أعمال مترابطة. طموح مشترك."
            : "One Group. Connected Businesses. Shared Ambition."
        }
        title={locale === "ar" ? "عائلة جي إس واي" : "The GSY Family"}
        subtitle={
          locale === "ar"
            ? "تجمع عائلة جي إس واي شبكة مترابطة من الأعمال التي تنشط عبر التجارة الدولية، والشحن، والأغذية، والتوزيع، والتجزئة، والخدمات اللوجستية.\n\nانطلاقاً من مقرها الرئيسي في دبي، تربط مجموعة جي إس واي الدولية مصادر الإنتاج بالعملاء والأسواق عبر آسيا والخليج وأفريقيا. وتساهم كل شركة في تعزيز القدرات الشاملة للمجموعة، وخلق روابط عبر سلسلة التوريد ودعم طموحات نمونا طويلة الأجل."
            : "The GSY Family brings together a connected network of businesses working across international trade, shipping, food, distribution, retail and logistics.\n\nHeadquartered in Dubai, GSY International Group connects sourcing origins with customers and markets across Asia, the Gulf and Africa. Each business contributes to the Group's wider capabilities, creating connections across the supply chain and supporting our long-term growth ambitions."
        }
        backgroundImage="/images/hero-port.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف أعمالنا" : "Explore Our Businesses",
          href: "/businesses",
        }}
        secondaryCta={{
          label: locale === "ar" ? "رؤيتنا 2030" : "Our Vision 2030",
          href: "/about/vision-2030",
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

        {/* Connected by a Common Purpose — How the family supplies itself (6 cards) */}
        <div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "التعاون والتكامل" : "Collaboration & Integration"}
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar" ? "مترابطون لهدف مشترك" : "Connected by a Common Purpose"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
              {locale === "ar"
                ? "تعمل أعمالنا عبر قطاعات مختلفة، لكنها تتشارك هدفاً مشتركاً: بناء علاقات موثوقة، وربط الأسواق، وخلق قيمة تجارية طويلة الأجل. ومن خلال التعاون عبر عائلة جي إس واي، نهدف إلى تعزيز قدراتنا، وتوسيع تواجدنا الدولي، وتطوير الفرص عبر شبكة أعمالنا."
                : "Our businesses operate across different sectors, but share a common purpose: building dependable relationships, connecting markets and creating long-term business value. Through collaboration across the GSY Family, we aim to strengthen our capabilities, expand our international presence and develop opportunities across our business network."}
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Growing Together Towards 2030 */}
        <div className="rounded-2xl border border-gsy-gold/30 bg-gsy-navy p-7 text-white shadow-card sm:p-9 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
                {locale === "ar" ? "النمو معاً نحو 2030" : "Growing Together Towards 2030"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                {locale === "ar"
                  ? "عائلة جي إس واي واحدة. نربط الأسواق. نبني المستقبل."
                  : "One GSY Family. Connecting markets. Building the future."}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {locale === "ar"
                  ? "تعمل عائلة جي إس واي نحو تحقيق طموح رؤية المجموعة لعام 2030: توسيع تواجدنا إلى أكثر من 25 دولة وبناء مجموعة دولية بقيمة 2.5 مليار دولار. وسيكون دافع نمونا هو الروابط التجارية الأقوى، والتوسع المسؤول، والتطوير المستمر لأنشطتنا في التجارة والشحن والأغذية والتوزيع والتجزئة."
                  : "The GSY Family is working towards the Group's Vision 2030 ambition: expanding our presence to more than 25 countries and building a US$2.5 billion international group. Our growth will be driven by stronger business connections, responsible expansion and the continued development of our trading, shipping, food, distribution and retail activities."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href={localePath(locale, "/businesses")}
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "استكشف أعمالنا" : "Explore Our Businesses"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={localePath(locale, "/about/vision-2030")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <span>{locale === "ar" ? "رؤيتنا 2030" : "Our Vision 2030"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

