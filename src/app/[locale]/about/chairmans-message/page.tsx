import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isValidLocale, localePath } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { getUiCopy } from "@/data/dictionary";

export default async function ChairmansMessagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const copy = getUiCopy(locale);

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      {/* 1. Page Introduction */}
      <PageHero
        locale={locale}
        eyebrow={
          locale === "ar"
            ? "نبني على إرثنا. نتحرك للأمام بهدف واضح."
            : "Building on Our Legacy. Moving Forward with Purpose."
        }
        title={locale === "ar" ? "رسالة رئيس مجلس الإدارة" : "Chairman's Message"}
        subtitle={
          locale === "ar"
            ? "منذ عام 1974، واصلت مجموعة جي إس واي الدولية نموها من خلال العلاقات التجارية، والتجارة الدولية، والالتزام بالتنمية طويلة الأجل.\n\nتعكس مسيرتنا أهمية الثقة والتعاون والفرص الناتجة عن ربط الأسواق عبر الحدود."
            : "Since 1974, GSY International Group has continued to grow through business relationships, international trade and a commitment to long-term development.\n\nOur journey reflects the importance of trust, collaboration and the opportunities created by connecting markets across borders."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف رؤيتنا 2030" : "Explore Our Vision 2030",
          href: "/about/vision-2030",
        }}
        secondaryCta={{
          label: locale === "ar" ? "الحوكمة والامتثال" : "Governance & Compliance",
          href: "/about/governance",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "عن المجموعة" : "About", href: "/about" },
          { label: locale === "ar" ? "رسالة رئيس مجلس الإدارة" : "Chairman's Message" },
        ]}
      />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card md:grid-cols-12 md:p-10 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-gsy-gold/30 bg-gsy-navy shadow-sm">
              <Image
                src="/images/chairman-portrait.jpg"
                alt={
                  locale === "ar"
                    ? "رئيس مجلس إدارة مجموعة جي إس واي الدولية (صورة تجريبية)"
                    : "Chairman, GSY International Group — illustrative demo portrait"
                }
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gsy-navy/95 via-gsy-navy/70 to-transparent p-3 text-center">
                <span className="inline-block rounded bg-gsy-gold-bright px-2 py-0.5 text-[10px] font-extrabold uppercase text-gsy-navy-deep">
                  {copy.demoPlaceholderTag}
                </span>
                <p className="mt-1 text-[11px] font-medium text-white/90">
                  {locale === "ar"
                    ? "صورة رئيس مجلس الإدارة (استبدل بالصورة الرسمية)"
                    : "Executive Portrait Placeholder"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-gsy-slate md:col-span-8 sm:text-base dark:text-white/85">
            {/* 2. Chairman's Message */}
            <div>
              <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "رسالة من رئيس مجلس الإدارة" : "A Message from the Chairman"}
              </h2>

              <div className="mt-3 rounded-xl border border-dashed border-gsy-gold/40 bg-gsy-gold/5 p-4 text-xs text-gsy-slate dark:border-gsy-gold-light/30 dark:bg-gsy-gold-bright/10 dark:text-white/80">
                <p className="font-bold text-gsy-navy dark:text-gsy-gold-light">
                  {locale === "ar"
                    ? "[محتوى الرسالة — في انتظار البيان المعتمد من رئيس مجلس الإدارة]"
                    : "[Message Content — Awaiting Chairman's approved statement]"}
                </p>
                <p className="mt-1 leading-relaxed">
                  {locale === "ar"
                    ? "سيتم إدراج البيان الرسمي المعتمد لرئيس مجلس الإدارة هنا ليعكس المنظور الشخصي حول تاريخ المجموعة وفلسفتها وأولوياتها ورؤيتها المستقبلية."
                    : "The Chairman's original, approved message will be inserted here to reflect his personal perspective on the group's history, business philosophy, current priorities and future vision."}
                </p>
              </div>

              <blockquote className="mt-4 border-s-4 border-gsy-gold ps-4 text-base font-medium italic text-gsy-navy sm:text-lg dark:text-white">
                &ldquo;{copy.homeSections.chairmanQuote}&rdquo;
              </blockquote>
            </div>

            {/* 3. Our Direction */}
            <div className="border-t border-gsy-navy/10 pt-5 dark:border-white/10">
              <h3 className="text-lg font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "نتطلع إلى عام 2030" : "Looking Ahead to 2030"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85">
                {locale === "ar"
                  ? "مع مواصلة مجموعة جي إس واي الدولية مسيرتها، يتمثل طموحنا في بناء مجموعة بقيمة 2.5 مليار دولار مع التواجد في أكثر من 25 دولة بحلول عام 2030."
                  : "As GSY International Group continues its journey, our ambition is to build a US$2.5 billion group with a presence in more than 25 countries by 2030."}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85">
                {locale === "ar"
                  ? "ونهدف إلى تحقيق هذه الرؤية من خلال تطوير أعمالنا في تجارة السلع، والشحن، والعلامات الغذائية، والتوزيع، ومتاجر السوبرماركت."
                  : "We aim to pursue this vision through the development of our commodity trading, shipping, food brands, distribution and supermarket businesses."}
              </p>
            </div>

            {/* 4. Closing Section */}
            <div className="border-t border-gsy-navy/10 pt-5 dark:border-white/10">
              <h3 className="text-base font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? "مواصلة مسيرة جي إس واي" : "Continuing the GSY Journey"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85">
                {locale === "ar"
                  ? "يوفر تاريخنا الأساس الراسخ لطموحاتنا المستقبلية. ونظل ملتزمين بتطوير أعمالنا، وتعزيز العلاقات، وربط الفرص عبر الأسواق الدولية."
                  : "Our history provides the foundation for our future ambitions. We remain focused on developing our businesses, strengthening relationships and connecting opportunities across international markets."}
              </p>

              <div className="pt-4">
                <Link
                  href={localePath(locale, "/about/vision-2030")}
                  className="inline-flex items-center rounded-lg bg-gsy-navy px-5 py-2.5 text-xs font-bold text-white transition hover:bg-gsy-gold hover:text-gsy-navy dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
                >
                  {locale === "ar" ? "استكشف رؤيتنا 2030" : "Explore Our Vision 2030"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

