import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, BookOpen, Crown, Users, Target, ShieldCheck, Network } from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { SITE_SETTINGS, WHY_GSY_POINTS } from "@/data/site-settings";
import { PageHero } from "@/components/shared/PageHero";
import { GroupModelStrip } from "@/components/shared/GroupModelStrip";
import { StatsBar } from "@/components/shared/StatsBar";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const cards = [
    {
      title: { en: "Our Story", ar: "قصتنا" },
      desc: {
        en: "Five decades of international trade since 1974 connecting origin markets to consumers.",
        ar: "خمسة عقود من التجارة الدولية منذ عام 1974 تربط أسواق المنشأ بالمستهلكين.",
      },
      href: "/about/our-story",
      icon: BookOpen,
    },
    {
      title: { en: "Chairman's Message", ar: "رسالة رئيس مجلس الإدارة" },
      desc: {
        en: "Strategic vision for building a US$2.5B group across 25+ countries by 2030.",
        ar: "الرؤية الاستراتيجية لبناء مجموعة بقيمة 2.5 مليار دولار في أكثر من 25 دولة بحلول 2030.",
      },
      href: "/about/chairmans-message",
      icon: Crown,
    },
    {
      title: { en: "Leadership", ar: "القيادة التنفيذية" },
      desc: {
        en: "Board governance, independent directors and division leadership placeholders.",
        ar: "حوكمة مجلس الإدارة والمديرين المستقلين والقيادة التنفيذية.",
      },
      href: "/about/leadership",
      icon: Users,
    },
    {
      title: { en: "Vision 2030", ar: "رؤية 2030" },
      desc: {
        en: "2026–2030 roadmap, six-gated GSY Country Engine and growth principles.",
        ar: "خارطة طريق 2026–2030 ومحرك التوسع القطري ومبادئ النمو.",
      },
      href: "/about/vision-2030",
      icon: Target,
    },
    {
      title: { en: "Governance & Compliance", ar: "الحوكمة والامتثال" },
      desc: {
        en: "UAE holding company structure, Big-4 audit, risk committee, KYC and OECD compliance.",
        ar: "الشركة القابضة بالإمارات، التدقيق المالي، لجنة المخاطر، والامتثال.",
      },
      href: "/about/governance",
      icon: ShieldCheck,
    },
    {
      title: { en: "The GSY Family", ar: "عائلة جي إس واي" },
      desc: {
        en: "Interactive network diagram of all 8 family entities and internal supply flows.",
        ar: "المخطط الشبكي التفاعلي لجميع شركات العائلة وتدفقات الإمداد البينية.",
      },
      href: "/about/gsy-family",
      icon: Network,
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "عن مجموعة جي إس واي" : "About GSY International Group"}
        title={t(SITE_SETTINGS.tagline, locale)}
        subtitle={t(SITE_SETTINGS.oneLineDescription, locale)}
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف رؤية 2030" : "Explore Vision 2030",
          href: "/about/vision-2030",
        }}
        secondaryCta={{
          label: locale === "ar" ? "شبكة عائلة جي إس واي" : "The GSY Family Network",
          href: "/about/gsy-family",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "عن المجموعة" : "About" }]}
      />
      <StatsBar locale={locale} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
          {locale === "ar"
            ? "نموذج عمل المجموعة (5 مراحل)"
            : "The Group Model — From Origin to Retail"}
        </h2>
        <p className="mt-2 text-sm text-gsy-slate dark:text-white/75">
          {locale === "ar"
            ? "محركان متكاملان: منصة غذائية متكاملة وبيت تداول سلع، يربطهما الشحن والتأجير البحري."
            : "Two engines working together: an integrated food platform and an asset-light commodity trading house on the Africa–GCC–Asia corridor."}
        </p>
        <div className="mt-6">
          <GroupModelStrip locale={locale} />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    {t(card.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm text-gsy-slate dark:text-white/75">
                    {t(card.desc, locale)}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
                  <span>{locale === "ar" ? "استكشف القسم" : "Open page"}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_GSY_POINTS.map((pt) => (
            <div
              key={pt.id}
              className="rounded-xl border border-gsy-navy/10 bg-white p-5 dark:border-white/10 dark:bg-gsy-navy"
            >
              <h3 className="text-sm font-extrabold text-gsy-navy dark:text-gsy-gold-light">
                {t(pt.title, locale)}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {t(pt.detail, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

