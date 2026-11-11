import React from "react";
import { notFound } from "next/navigation";
import { Users, Globe2, TrendingUp } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { CareersClient } from "@/components/careers/CareersClient";

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const lifePillars = [
    {
      icon: Globe2,
      title: { en: "25+ Country Growth Horizon", ar: "أفق نمو عبر أكثر من 25 دولة" },
      desc: {
        en: "Work on cross-border corridors connecting Dubai HQ, Chennai, Kuala Lumpur, Singapore and expanding African hubs.",
        ar: "اعمل عبر ممرات دولية تربط دبي وتشيناي وكوالالمبور وسنغافورة والمراكز الأفريقية الجديدة.",
      },
    },
    {
      icon: Users,
      title: { en: "350+ Colleagues Across One Family", ar: "أكثر من 350 موظفاً في عائلة واحدة" },
      desc: {
        en: "Collaborate across physical commodity trading, voyage chartering, Noor Al Arab foods and retail supermarkets.",
        ar: "تعاون بين فرق تداول السلع والشحن البحري ونور العرب وأسواق التجزئة.",
      },
    },
    {
      icon: TrendingUp,
      title: { en: "Disciplined Operational Ownership", ar: "ثقافة ملكية وانضباط تشغيلي" },
      desc: {
        en: "Direct responsibility, clear commercial accountability and structured merit progression.",
        ar: "مسؤولية مباشرة ومحاسبة مهنية واضحة وتطور وظيفي منظم.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "الوظائف والحياة في جي إس واي" : "Careers • Life at GSY"}
        title={
          locale === "ar"
            ? "انمو معنا عبر أكثر من 25 دولة"
            : "Grow with us across 25+ countries"
        }
        subtitle={
          locale === "ar"
            ? "فرص مهنية في تداول السلع، التأجير البحري، نور العرب، التوزيع واللوجستيات، وأسواق التجزئة."
            : "Explore roles across trading desks, maritime chartering, food processing, country expansion and retail operations."
        }
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "تصفح الوظائف الشاغرة" : "Browse Open Roles",
          href: "#open-roles",
        }}
        secondaryCta={{
          label: locale === "ar" ? "استكشف عائلة جي إس واي" : "The GSY Family",
          href: "/about/gsy-family",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "الوظائف" : "Careers" }]}
      />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "الحياة في مجموعة جي إس واي" : "Life at GSY"}
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {lifePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title.en}
                  className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-gsy-navy dark:text-white">
                    {locale === "ar" ? p.title.ar : p.title.en}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/75">
                    {locale === "ar" ? p.desc.ar : p.desc.en}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="open-roles" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "الوظائف الشاغرة (بيانات تجريبية)" : "Open Roles (Demo Jobs Collection)"}
          </h2>
          <CareersClient locale={locale} />
        </section>
      </div>
    </div>
  );
}

