import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Globe2, ShieldCheck, Layers, ArrowRight, ArrowLeft, TrendingUp, Info } from "lucide-react";
import { isValidLocale, localePath } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { VisionTimeline } from "@/components/shared/VisionTimeline";

export default async function Vision2030Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const growthBusinesses = [
    {
      title: { en: "Commodity Trading", ar: "تجارة السلع" },
      desc: {
        en: "Strengthening our international trading activities across agricultural commodities, FMCG, fertilizers, minerals and metals.",
        ar: "تعزيز أنشطة التداول التجاري الدولي للسلع الزراعية، والسلع الاستهلاكية، والأسمدة، والمعادن.",
      },
    },
    {
      title: { en: "Shipping & Chartering", ar: "الشحن والتأجير البحري" },
      desc: {
        en: "Developing shipping and voyage chartering activities to support international commodity movements.",
        ar: "تطوير أنشطة الشحن وتأجير السفن بالرحلة لدعم حركة تدفق السلع الدولية.",
      },
    },
    {
      title: { en: "Food Brands – Noor Al Arab", ar: "العلامات الغذائية — نور العرب" },
      desc: {
        en: "Expanding our food brand presence and developing opportunities across international food markets.",
        ar: "توسيع حضور علامتنا الغذائية وتطوير الفرص في أسواق الأغذية الدولية.",
      },
    },
    {
      title: { en: "Distribution & HORECA", ar: "التوزيع وقطاع الضيافة" },
      desc: {
        en: "Strengthening wholesale distribution and serving hotels, restaurants, caterers and institutional customers.",
        ar: "تعزيز التوزيع بالجملة وتلبية احتياجات الفنادق والمطاعم وشركات الإعاشة والعملاء المؤسسيين.",
      },
    },
    {
      title: { en: "Supermarkets", ar: "الأسواق المركزية (السوبرماركت)" },
      desc: {
        en: "Growing our retail presence through our supermarket brands in the UAE and Malaysia.",
        ar: "تنمية تواجدنا في التجزئة من خلال علاماتنا التجارية للسوبرماركت في الإمارات وماليزيا.",
      },
    },
    {
      title: { en: "Logistics & Supply Chain", ar: "الخدمات اللوجستية وسلسلة الإمداد" },
      desc: {
        en: "Supporting the group's trading and distribution activities through coordinated supply chain operations.",
        ar: "دعم أنشطة التداول والتوزيع للمجموعة من خلال عمليات سلسلة توريد منسقة ومتكاملة.",
      },
    },
  ];

  const principles = [
    { en: "Trade before we build", ar: "التداول قبل الاستثمار في الأصول" },
    { en: "Own the brand", ar: "امتلاك العلامة التجارية" },
    { en: "Distribution is the moat", ar: "شبكة التوزيع هي الميزة التنافسية" },
    { en: "Grow without excess debt", ar: "النمو المنضبط دون ديون مفرطة" },
  ];

  const regions = [
    {
      name: { en: "GCC Corridor", ar: "ممر دول الخليج العربي" },
      desc: {
        en: "UAE corporate flagship hub connecting key Gulf distribution and consumer retail channels.",
        ar: "المركز الرئيسي للمجموعة في الإمارات يربط قنوات التوزيع الكبرى وتجزئة المستهلك في الخليج.",
      },
    },
    {
      name: { en: "Africa Trade Routes", ar: "ممرات التجارة الأفريقية" },
      desc: {
        en: "Expanding presence across East, West and North African commodity, food, and import markets.",
        ar: "توسيع الحضور عبر أسواق السلع والأغذية والاستيراد في شرق وغرب وشمال أفريقيا.",
      },
    },
    {
      name: { en: "Asia Origins & Global Desks", ar: "مصادر المنشأ في آسيا والمكاتب الدولية" },
      desc: {
        en: "Direct origin sourcing networks linking India, Southeast Asia and international destination markets.",
        ar: "شبكات التوريد المباشر من المنشأ في الهند وجنوب شرق آسيا والربط بالأسواق المستهدفة دولياً.",
      },
    },
  ];

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. Page Introduction */}
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "رؤية 2030" : "Vision 2030"}
        title={
          locale === "ar"
            ? "بناء مجموعة دولية بقيمة 2.5 مليار دولار"
            : "Building a US$2.5 Billion International Group"
        }
        subtitle={
          locale === "ar"
            ? "تمثل رؤيتنا لعام 2030 طموح مجموعة جي إس واي الدولية لبناء شبكة أعمال دولية أكثر قوة، والتوسع في أكثر من 25 دولة والعمل نحو بناء قيمة مجموعة تبلغ 2.5 مليار دولار.\n\nبناءً على مسيرتنا منذ عام 1974، نهدف إلى تعزيز أعمالنا الحالية، وتطوير فرص جديدة في السوق، وربط المزيد من مصادر الإنتاج بالأسواق الدولية."
            : "Our Vision 2030 represents GSY International Group's ambition to build a stronger international business network, expand into more than 25 countries and work towards a group value of US$2.5 billion.\n\nBuilding on our journey since 1974, we aim to strengthen our existing businesses, develop new market opportunities and connect more origins with international markets."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "تشارك مع جي إس واي" : "Partner With GSY",
          href: "/contact",
        }}
        secondaryCta={{
          label: locale === "ar" ? "استكشف أعمالنا" : "Explore Our Businesses",
          href: "/businesses",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "رؤية 2030" : "Vision 2030" },
        ]}
      />

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {/* 2. Our 2030 Ambition */}
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "طموح 2030" : "Our 2030 Ambition"}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gsy-navy sm:text-3xl dark:text-white">
              {locale === "ar" ? "أهدافنا لعام 2030" : "Our Goals for 2030"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
              {locale === "ar"
                ? "تعكس تطلعاتنا المستقبلية التزامنا بالتوسع في الأعمال، والربط الدولي، والتنمية طويلة الأجل."
                : "Our future ambitions reflect our commitment to business expansion, international connectivity and long-term development."}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl border border-gsy-gold/30 bg-gsy-ivory/60 p-6 dark:border-white/10 dark:bg-white/5">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                  <Globe2 className="h-5 w-5" />
                </span>
                <p className="mt-4 text-3xl font-extrabold text-gsy-navy dark:text-white sm:text-4xl">
                  25+ {locale === "ar" ? "دولة" : "Countries"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                  {locale === "ar"
                    ? "طموحنا هو توسيع تواجدنا الدولي إلى أكثر من 25 دولة بحلول عام 2030."
                    : "Our ambition is to expand our international presence to more than 25 countries by 2030."}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-gsy-gold/30 bg-gsy-ivory/60 p-6 dark:border-white/10 dark:bg-white/5">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gsy-navy text-gsy-gold-light dark:bg-gsy-gold-bright/20">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <p className="mt-4 text-3xl font-extrabold text-gsy-navy dark:text-white sm:text-4xl">
                  US$2.5 {locale === "ar" ? "مليار" : "Billion"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
                  {locale === "ar"
                    ? "هدفنا هو بناء مجموعة بقيمة 2.5 مليار دولار بحلول عام 2030."
                    : "Our target is to build a group with a value of US$2.5 billion by 2030."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-lg border border-gsy-navy/10 bg-white p-3 text-xs text-gsy-slate dark:border-white/10 dark:bg-gsy-navy dark:text-white/75">
            <Info className="h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
            <span>
              {locale === "ar"
                ? "تمثل هذه الأرقام أهدافاً وتطلعات مستقبلية وليست إنجازات حالية."
                : "These figures represent future targets and are not current achievements."}
            </span>
          </div>
        </div>

        {/* Timeline 2026 -> 2030 */}
        <div>
          <h2 className="text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "الجدول الزمني للتوسع 2026 – 2030" : "2026 – 2030 Expansion Timeline"}
          </h2>
          <div className="mt-6">
            <VisionTimeline locale={locale} />
          </div>
        </div>

        {/* 3. Our Strategic Growth Areas */}
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
            <Layers className="h-4 w-4" />
            <span>{locale === "ar" ? "مجالات النمو الاستراتيجي" : "Strategic Growth Areas"}</span>
          </div>
          <h2 className="mt-2 text-xl font-extrabold text-gsy-navy sm:text-2xl dark:text-white">
            {locale === "ar"
              ? "الأعمال التي تقود رؤيتنا"
              : "The Businesses Driving Our Vision"}
          </h2>
          <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
            {locale === "ar"
              ? "تدعم رؤيتنا لعام 2030 بالتطوير المستمر لأنشطة أعمالنا المترابطة."
              : "Our Vision 2030 is supported by the continued development of our connected business activities."}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {growthBusinesses.map((b) => (
              <div
                key={b.title.en}
                className="rounded-xl border border-gsy-navy/10 bg-gsy-ivory/60 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-base font-extrabold text-gsy-navy dark:text-gsy-gold-light">
                  {locale === "ar" ? b.title.ar : b.title.en}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/80 sm:text-sm">
                  {locale === "ar" ? b.desc.ar : b.desc.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Expanding Our Global Presence & 5. The GSY Family */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar" ? "توسيع حضورنا الدولي" : "Expanding Our Global Presence"}
              </p>
              <h2 className="mt-1 flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
                <Globe2 className="h-5 w-5 text-gsy-gold" />
                <span>
                  {locale === "ar" ? "ربط المزيد من الأسواق" : "Connecting More Markets"}
                </span>
              </h2>
              <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
                {locale === "ar"
                  ? "يركز طموحنا للتوسع الدولي على تعزيز أسواقنا الحالية وتطوير الفرص في مناطق جديدة. انطلاقاً من دبي كمقر رئيسي، نهدف إلى بناء روابط أقوى عبر آسيا والخليج وأفريقيا مع استكشاف الفرص في أسواق دولية إضافية."
                  : "Our international expansion ambition focuses on strengthening our existing markets and developing opportunities in new regions. With Dubai as our headquarters, we aim to build stronger connections across Asia, the Gulf and Africa while pursuing opportunities in additional international markets."}
              </p>
            </div>

            <div className="grid gap-3 pt-2">
              {regions.map((r) => (
                <div
                  key={r.name.en}
                  className="rounded-xl border border-gsy-navy/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-gsy-navy"
                >
                  <h3 className="text-sm font-extrabold text-gsy-navy dark:text-gsy-gold-light">
                    {locale === "ar" ? r.name.ar : r.name.en}
                  </h3>
                  <p className="mt-1 text-xs text-gsy-slate dark:text-white/80 sm:text-sm">
                    {locale === "ar" ? r.desc.ar : r.desc.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold dark:text-gsy-gold-light">
                {locale === "ar" ? "عائلة جي إس واي" : "The GSY Family"}
              </p>
              <h2 className="mt-1 flex items-center gap-2 text-xl font-extrabold text-gsy-navy dark:text-white">
                <ShieldCheck className="h-5 w-5 text-gsy-gold" />
                <span>
                  {locale === "ar" ? "مجموعة واحدة. رؤية مشتركة." : "One Group. A Shared Vision."}
                </span>
              </h2>
              <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
                {locale === "ar"
                  ? "تلعب أعمالنا المترابطة دوراً رئيسياً في تحقيق طموحاتنا طويلة الأجل من خلال التعاون عبر تجارة السلع والشحن والعلامات الغذائية والتوزيع والتجزئة."
                  : "Our connected businesses play an important role in achieving our long-term ambitions through collaboration across commodity trading, shipping, food brands, distribution and retail."}
              </p>
            </div>

            <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-white/10 dark:bg-gsy-navy">
              <ul className="space-y-3 text-sm font-bold text-gsy-navy dark:text-white">
                {principles.map((p) => (
                  <li key={p.en} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
                    <span>{locale === "ar" ? p.ar : p.en}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-gsy-navy/10 pt-4 text-xs leading-relaxed text-gsy-slate dark:border-white/10 dark:text-white/75">
                {locale === "ar"
                  ? "تهدف عائلة جي إس واي إلى تطوير شبكة أعمال دولية أكثر تكاملاً تعمل بانضباط تشغيلي وحوكمة مؤسسية راسخة."
                  : "The GSY Family aims to develop a more integrated international business network operating under disciplined governance and execution."}
              </div>
            </div>
          </div>
        </div>

        {/* 6. Our Commitment */}
        <blockquote className="rounded-2xl border-s-4 border-gsy-gold bg-gsy-navy p-7 text-white shadow-card sm:p-9 dark:bg-[#050f1e]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
            {locale === "ar" ? "التزامنا" : "Our Commitment"}
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
            {locale === "ar" ? "النمو بهدف ومسؤولية" : "Growing with Purpose"}
          </h2>
          <p className="mt-3 text-sm font-medium leading-relaxed text-white/90 sm:text-base">
            {locale === "ar"
              ? "«مع عملنا نحو عام 2030، يظل تركيزنا منصباً على التنمية المسؤولة للأعمال، والشراكات طويلة الأجل، والروابط الأقوى مع الأسواق، والنمو المستمر لمجموعة جي إس واي. ولا تقتصر رؤيتنا على توسيع نطاق وصولنا فحسب، بل تمتد إلى بناء مجموعة دولية أقوى وأكثر ترابطاً للمستقبل.»"
              : "“As we work towards 2030, our focus remains on responsible business development, long-term partnerships, stronger market connections and the continued growth of the GSY Group. Our vision is not only about expanding our reach, but also about building a stronger and more connected international group for the future.”"}
          </p>
        </blockquote>

        {/* 7. Closing Section */}
        <div className="rounded-2xl border border-gsy-gold/30 bg-gsy-navy p-7 text-white shadow-card sm:p-9 dark:border-gsy-gold-light/20 dark:bg-[#050f1e]">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gsy-gold-light">
                {locale === "ar" ? "شاركنا الرؤية" : "Join the Vision"}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                {locale === "ar" ? "كن جزءاً من رؤية جي إس واي" : "Be Part of the GSY Vision"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {locale === "ar"
                  ? "نرحب بفرص التواصل والشراكة مع المشترين والموردين وشركاء الأعمال والمستثمرين الذين يشاركوننا طموحنا نحو النمو الدولي."
                  : "We welcome opportunities to connect with buyers, suppliers, business partners and investors who share our ambition for international growth."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
              >
                <span>{locale === "ar" ? "تشارك مع جي إس واي" : "Partner With GSY"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={localePath(locale, "/businesses")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <span>{locale === "ar" ? "استكشف أعمالنا" : "Explore Our Businesses"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

