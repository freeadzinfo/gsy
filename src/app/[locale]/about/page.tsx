import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, BookOpen, Crown, Users, Target, ShieldCheck, Network } from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
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
        en: "Established in 1974, GSY's journey reflects decades of involvement in trade and business development across international markets.",
        ar: "تأسست في عام 1974، وتعكس مسيرة جي إس واي عقوداً من المشاركة في التجارة وتطوير الأعمال عبر الأسواق الدولية.",
      },
      href: "/about/our-story",
      cta: { en: "Discover Our Story", ar: "اكتشف قصتنا" },
      icon: BookOpen,
    },
    {
      title: { en: "Chairman's Message", ar: "رسالة رئيس مجلس الإدارة" },
      desc: {
        en: "A commitment to building lasting business relationships, connecting markets and creating opportunities through international trade.",
        ar: "التزام راسخ ببناء علاقات تجارية دائمة، وربط الأسواق وخلق الفرص من خلال التجارة الدولية.",
      },
      href: "/about/chairmans-message",
      cta: { en: "Read the Chairman's Message", ar: "اقرأ رسالة رئيس مجلس الإدارة" },
      icon: Crown,
    },
    {
      title: { en: "Leadership", ar: "القيادة التنفيذية" },
      desc: {
        en: "Explore the experienced leadership, governance teams and division leaders guiding GSY International Group.",
        ar: "استكشف القيادة التنفيذية وفرق الحوكمة وقادة القطاعات الذين يقودون مجموعة جي إس واي الدولية.",
      },
      href: "/about/leadership",
      cta: { en: "Meet Our Leadership", ar: "تعرف على القيادة" },
      icon: Users,
    },
    {
      title: { en: "Vision 2030", ar: "رؤية 2030" },
      desc: {
        en: "Our vision is to build a US$2.5 billion international group with a presence in more than 25 countries by 2030.",
        ar: "رؤيتنا هي بناء مجموعة دولية بقيمة 2.5 مليار دولار مع التواجد في أكثر من 25 دولة بحلول عام 2030.",
      },
      href: "/about/vision-2030",
      cta: { en: "Explore Vision 2030", ar: "استكشف رؤية 2030" },
      icon: Target,
    },
    {
      title: { en: "Governance & Compliance", ar: "الحوكمة والامتثال" },
      desc: {
        en: "Building trust through quality-focused operations, responsible business practices, appropriate governance and compliance.",
        ar: "بناء الثقة من خلال العمليات المرتكزة على الجودة، والممارسات المسؤولة، والحوكمة المناسبة والامتثال.",
      },
      href: "/about/governance",
      cta: { en: "Our Governance & Compliance", ar: "الحوكمة والامتثال لدينا" },
      icon: ShieldCheck,
    },
    {
      title: { en: "The GSY Family", ar: "عائلة جي إس واي" },
      desc: {
        en: "Bringing together complementary businesses across commodity trading, shipping, food brands, distribution and supermarkets.",
        ar: "جمع الشركات المتكاملة عبر تجارة السلع والشحن والعلامات الغذائية والتوزيع والأسواق المركزية.",
      },
      href: "/about/gsy-family",
      cta: { en: "Explore the GSY Family", ar: "استكشف عائلة جي إس واي" },
      icon: Network,
    },
  ];

  const ourValues = [
    {
      id: "integrity",
      title: { en: "Integrity", ar: "النزاهة" },
      detail: {
        en: "Building relationships through honest and responsible business practices.",
        ar: "بناء العلاقات من خلال ممارسات تجارية صادقة ومسؤولة.",
      },
    },
    {
      id: "relationships",
      title: { en: "Long-Term Relationships", ar: "علاقات طويلة الأمد" },
      detail: {
        en: "Valuing trust and collaboration with customers, suppliers and partners.",
        ar: "تقدير الثقة والتعاون مع العملاء والموردين والشركاء.",
      },
    },
    {
      id: "growth",
      title: { en: "Responsible Growth", ar: "النمو المسؤول" },
      detail: {
        en: "Pursuing sustainable business development and long-term opportunities.",
        ar: "السعي لتحقيق تنمية أعمال مستدامة واستثمار الفرص طويلة الأجل.",
      },
    },
    {
      id: "discipline",
      title: { en: "Operational Discipline", ar: "الانضباط التشغيلي" },
      detail: {
        en: "Maintaining focus on effective business processes and execution.",
        ar: "الحفاظ على التركيز على العمليات التجارية الفعالة ودقة التنفيذ.",
      },
    },
    {
      id: "partnership",
      title: { en: "Partnership", ar: "الشراكة" },
      detail: {
        en: "Working together to create value across our business network.",
        ar: "العمل معاً لخلق القيمة عبر شبكة أعمالنا المتكاملة.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. Page Introduction */}
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "منذ 1974 • دبي، الإمارات" : "Since 1974 • Dubai, UAE"}
        title={locale === "ar" ? "عن مجموعة جي إس واي الدولية" : "About GSY International Group"}
        subtitle={
          locale === "ar"
            ? "مجموعة جي إس واي الدولية هي مجموعة أعمال دولية تتخذ من دبي مقراً لها وتعود جذورها إلى عام 1974. نربط بين مصادر الإنتاج وممرات التجارة الدولية والعملاء عبر آسيا والخليج وأفريقيا.\n\nوتمتد أعمالنا عبر تجارة السلع، والشحن والتأجير البحري، والعلامات الغذائية، والتصدير، والتوزيع، والأسواق المركزية. ومن خلال هذه الأنشطة المتكاملة، نهدف إلى بناء علاقات تجارية دائمة وخلق الفرص عبر الأسواق الدولية."
            : "GSY International Group is a Dubai-headquartered international business group with roots dating back to 1974. We connect sourcing origins, international trade corridors and customers across Asia, the Gulf and Africa.\n\nOur businesses span commodity trading, shipping and chartering, food brands, exports, distribution and supermarkets. Through these complementary activities, we aim to build lasting business relationships and create opportunities across international markets."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف رؤية 2030" : "Explore Vision 2030",
          href: "/about/vision-2030",
        }}
        secondaryCta={{
          label: locale === "ar" ? "اكتشف قصتنا" : "Discover Our Story",
          href: "/about/our-story",
        }}
        breadcrumbs={[{ label: locale === "ar" ? "عن المجموعة" : "About" }]}
      />
      <StatsBar locale={locale} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. Who We Are */}
        <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
          {locale === "ar"
            ? "مجموعة واحدة. أعمال متنوعة. رؤية مشتركة."
            : "One Group. Diverse Businesses. Shared Vision."}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
          {locale === "ar"
            ? "على مر السنين، تطورت جي إس واي من جذورها التجارية إلى مجموعة من الأعمال المترابطة التي تخدم أجزاء مختلفة من التجارة الدولية وسلسلة التوريد الغذائي. يجمع نهجنا بين المعرفة بالسوق والعلاقات التجارية والقدرات التشغيلية لربط الموردين والمشترين والموزعين وأسواق التجزئة."
            : "Over the years, GSY has developed from its trading roots into a group of connected businesses serving different parts of the international trade and food supply chain. Our approach brings together market knowledge, business relationships and operational capabilities to connect suppliers, buyers, distributors and retail markets."}
        </p>

        {/* Five-step business model strip */}
        <div className="mt-6">
          <GroupModelStrip locale={locale} />
        </div>

        {/* 3. Our Journey & 4. Our Vision */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar" ? "مسيرتنا" : "Our Journey"}
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar"
                  ? "مبنية على الخبرة. موجهة نحو المستقبل."
                  : "Built on Experience. Focused on the Future."}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "تأسست في عام 1974، وتعكس مسيرة جي إس واي عقوداً من المشاركة في التجارة وتطوير الأعمال. واليوم، نواصل البناء على تلك الأسس الراسخة مع استكشاف فرص جديدة عبر الأسواق الدولية. طموحنا هو تطوير شبكة أعمال عالمية أقوى والعمل نحو تحقيق أهداف رؤية 2030."
                  : "Established in 1974, GSY's journey reflects decades of involvement in trade and business development. Today, we continue to build on that foundation while pursuing new opportunities across international markets. Our ambition is to develop a stronger global business network and work towards our Vision 2030 goals."}
              </p>
            </div>
            <div className="mt-6">
              <Link
                href={localePath(locale, "/about/our-story")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold transition hover:underline dark:text-gsy-gold-light"
              >
                <span>{locale === "ar" ? "اكتشف قصتنا" : "Discover Our Story"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar" ? "رؤيتنا" : "Our Vision"}
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "نتطلع إلى عام 2030" : "Looking Ahead to 2030"}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
                {locale === "ar"
                  ? "رؤيتنا هي بناء مجموعة دولية بقيمة 2.5 مليار دولار مع التواجد في أكثر من 25 دولة بحلول عام 2030. ونهدف إلى تحقيق هذا الطموح من خلال التوسع في الأعمال، وتعزيز الروابط الدولية، والتطوير المستمر لأنشطتنا في التجارة والشحن والأغذية والتجزئة."
                  : "Our vision is to build a US$2.5 billion international group with a presence in more than 25 countries by 2030. We aim to pursue this ambition through business expansion, stronger international connections and the continued development of our trading, shipping, food and retail activities."}
              </p>
            </div>
            <div className="mt-6">
              <Link
                href={localePath(locale, "/about/vision-2030")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold transition hover:underline dark:text-gsy-gold-light"
              >
                <span>{locale === "ar" ? "استكشف رؤية 2030" : "Explore Vision 2030"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Explore the GSY Group */}
        <div className="mt-14">
          <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "اكتشف عائلة جي إس واي" : "Discover the GSY Family"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "تجمع مجموعتنا بين الشركات العاملة في مختلف القطاعات والأسواق. استكشف الأفراد والشركات والقيادة وراء مجموعة جي إس واي الدولية."
              : "Our group brings together businesses operating across different sectors and markets. Explore the people, businesses and leadership behind GSY International Group."}
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <span>{t(card.cta, locale)}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* 5. Our Values */}
        <div className="mt-14">
          <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "المبادئ الكامنة وراء أعمالنا"
              : "The Principles Behind Our Business"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "القيم التوجيهية التي تحكم ممارساتنا التجارية وشراكاتنا عبر الأسواق الدولية."
              : "The guiding principles that shape our business practices and partnerships across international markets."}
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ourValues.map((val) => (
            <div
              key={val.id}
              className="rounded-xl border border-gsy-navy/10 bg-white p-5 dark:border-white/10 dark:bg-gsy-navy"
            >
              <h3 className="text-sm font-extrabold text-gsy-navy dark:text-gsy-gold-light">
                {t(val.title, locale)}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {t(val.detail, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

