import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Anchor, Globe2, PackageCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { isValidLocale, localePath } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export default async function AfricaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const hubs = [
    {
      title: { en: "East Africa", ar: "شرق أفريقيا" },
      points: {
        en: [
          "Kenya hub (2027), Tanzania launching",
          "Ports: Mombasa, Dar es Salaam, Djibouti",
          "Serving Uganda, Rwanda, Ethiopia",
        ],
        ar: [
          "مركز كينيا (2027)، وتنزانيا قيد الإطلاق",
          "الموانئ: مومباسا، دار السلام، جيبوتي",
          "يخدم أوغندا ورواندا وإثيوبيا",
        ],
      },
      link: "/presence/tanzania",
      linkLabel: { en: "View Tanzania & Kenya", ar: "عرض تنزانيا وكينيا" },
    },
    {
      title: { en: "West Africa", ar: "غرب أفريقيا" },
      points: {
        en: [
          "Nigeria (2028), Ghana (2029)",
          "Offices: Lagos, Abidjan",
          "Ports: Lagos, Abidjan",
        ],
        ar: [
          "نيجيريا (2028)، غانا (2029)",
          "المكاتب: لاغوس، أبيدجان",
          "الموانئ: لاغوس، أبيدجان",
        ],
      },
      link: "/presence/nigeria",
      linkLabel: { en: "View Nigeria (Lagos Hub)", ar: "عرض نيجيريا (مركز لاغوس)" },
    },
    {
      title: { en: "North & Southern", ar: "شمال وجنوب أفريقيا" },
      points: {
        en: [
          "Egypt (2029)",
          "South Africa (2030)",
          "Minerals origination: SA, Gabon, Ghana, Zimbabwe",
        ],
        ar: [
          "مصر (2029)",
          "جنوب أفريقيا (2030)",
          "توريد المعادن: جنوب أفريقيا، الغابون، غانا، زيمبابوي",
        ],
      },
      link: "/presence/south-africa",
      linkLabel: { en: "View Southern Africa", ar: "عرض جنوب أفريقيا" },
    },
  ];

  const suppliedProducts = [
    { en: "Rice (bulk & bagged)", ar: "الأرز (سائب ومعبأ)" },
    { en: "Sugar", ar: "السكر" },
    { en: "Edible oils", ar: "زيوت الطعام" },
    { en: "Packaged foods", ar: "الأغذية المعبأة" },
    { en: "Fertilizer for planting seasons", ar: "الأسمدة لمواسم الزراعة" },
    { en: "Steel for construction", ar: "الصلب والحديد للبناء" },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "أفريقيا • محور النمو الاستراتيجي" : "Global Presence • Africa"}
        title={
          locale === "ar"
            ? "جي إس واي في أفريقيا — إمداد الغذاء والأسمدة والمواد لأسرع أسواق القارة نمواً"
            : "GSY in Africa — supplying food, fertilizer and materials to the continent's fastest-growing markets."
        }
        subtitle={
          locale === "ar"
            ? "تغطية متكاملة لممرات شرق وغرب وشمال وجنوب أفريقيا عبر موانئ مومباسا ودار السلام ولاغوس وأبيدجان وديربان."
            : "Connecting Asia and GCC origins directly to East, West, North and Southern Africa ports, wholesalers, co-ops and government buyers."
        }
        backgroundImage="/images/fertilizer-agri.jpg"
        primaryCta={{
          label: locale === "ar" ? "شراكات الموزعين في أفريقيا" : "Partner With Africa Team",
          href: "#africa-enquiry",
        }}
        secondaryCta={{
          label: locale === "ar" ? "سوق تنزانيا (قيد الإطلاق)" : "Tanzania Corridor (Launching)",
          href: "/presence/tanzania",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "الانتشار العالمي" : "Global Presence", href: "/presence" },
          { label: locale === "ar" ? "أفريقيا" : "Africa" },
        ]}
      />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {/* 3 Regional Hub Cards (Exact Page 13 Spec) */}
        <section className="grid gap-6 md:grid-cols-3">
          {hubs.map((hub) => (
            <div
              key={hub.title.en}
              className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
            >
              <div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                  <Globe2 className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-xl font-extrabold text-gsy-navy dark:text-white">
                  {locale === "ar" ? hub.title.ar : hub.title.en}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-gsy-slate dark:text-white/80">
                  {(locale === "ar" ? hub.points.ar : hub.points.en).map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <Anchor className="mt-1 h-3.5 w-3.5 shrink-0 text-gsy-gold" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={localePath(locale, hub.link)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
              >
                <span>{locale === "ar" ? hub.linkLabel.ar : hub.linkLabel.en}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </section>

        {/* What GSY supplies to Africa */}
        <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
            <PackageCheck className="h-5 w-5 text-gsy-gold" />
            <span>
              {locale === "ar" ? "ما تورده جي إس واي لأفريقيا" : "What GSY Supplies to Africa"}
            </span>
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {suppliedProducts.map((item) => (
              <div
                key={item.en}
                className="rounded-xl border border-gsy-navy/10 bg-gsy-ivory/70 px-4 py-3 text-sm font-bold text-gsy-navy dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                {locale === "ar" ? item.ar : item.en}
              </div>
            ))}
          </div>
        </section>

        {/* Partner CTA Form routed to Africa Team */}
        <section id="africa-enquiry" className="scroll-mt-24">
          <DivisionEnquiryForm
            locale={locale}
            variant="africa"
            title={
              locale === "ar"
                ? "الموزعون والجمعيات التعاونية والوكالات في أفريقيا — فلننمو معاً"
                : "Distributors, co-ops and agencies in Africa — let's grow together."
            }
            subtitle={
              locale === "ar"
                ? "تُوجَّه جميع طلبات الشراكة والتوريد مباشرة إلى فريق تطوير الأعمال في أفريقيا."
                : "Submit bulk staple, fertilizer, steel or local distribution enquiries directly to our Africa corridor desk."
            }
            routeTarget={locale === "ar" ? "فريق جي إس واي في أفريقيا" : "GSY Africa Regional Team"}
          />
        </section>
      </div>
    </div>
  );
}

