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
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "كلمة القيادة" : "Chairman's Message"}
        title={
          locale === "ar"
            ? "نحو بناء مجموعة بقيمة 2.5 مليار دولار بحلول 2030"
            : "Building a US$2.5 billion group across 25+ countries by 2030"
        }
        subtitle={
          locale === "ar"
            ? "رؤية مجموعة جي إس واي للانتقال من 7 دول إلى أكثر من 25 دولة عبر نموذج التداول والغذاء والأسواق المركزية."
            : "Strategic direction from our Dubai headquarters on disciplined cross-border trade, food security and 2030 retail growth."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "استكشف رؤية 2030" : "Explore Vision 2030",
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

          <div className="space-y-4 text-sm leading-relaxed text-gsy-slate md:col-span-8 sm:text-base dark:text-white/85">
            <blockquote className="border-s-4 border-gsy-gold ps-4 text-lg font-bold text-gsy-navy dark:text-white">
              {copy.homeSections.chairmanQuote}
            </blockquote>

            <p>
              {locale === "ar"
                ? "منذ انطلاق أعمالنا في عام 1974، ارتكزت مسيرة مجموعة جي إس واي على التجارة الحقيقية الموثوقة، وخدمة الموزعين وتجار التجزئة والمؤسسات الحكومية بانضباط تشغيلي ومالي صارم."
                : "Since our beginnings in 1974, GSY has been built on dependable physical trade, deep supplier relationships, and disciplined service to distributors, retailers and institutional buyers."}
            </p>
            <p>
              {locale === "ar"
                ? "نعمل اليوم كمحركين متكاملين من مقرنا الرئيسي في دبي: منصة غذائية متكاملة تمتد من التوريد والتصنيع إلى علامة نور العرب وأسواقنا المركزية، وبيت تداول سلع مرن الأصول عبر ممر أفريقيا والخليج وآسيا."
                : "From our corporate headquarters in Dubai, we bring together two complementary engines: an integrated food platform connecting origin sourcing to Noor Al Arab and our own supermarkets, alongside an asset-light commodity trading house on the Africa–GCC–Asia corridor."}
            </p>
            <p>
              {locale === "ar"
                ? "يرتكز نمونا نحو عام 2030 على مبادئ واضحة: التداول أولاً قبل الاستثمار في الأصول، وبناء العلامات المملوكة، وتطوير شبكة التوزيع كميزة تنافسية، والتوسع المنضبط دون مديونية مفرطة تحت حوكمة مؤسسية راسخة."
                : "Our expansion toward 2030 follows clear discipline: trade before we build, own the brand, make distribution our moat, and grow without excess debt — underpinned by independent board oversight, Big-4 external audit standards and bank-grade compliance."}
            </p>

            <div className="pt-4">
              <Link
                href={localePath(locale, "/about/vision-2030")}
                className="inline-flex items-center rounded-lg bg-gsy-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
              >
                {locale === "ar" ? "اقرأ خطة رؤية 2030" : "Explore Vision 2030 Roadmap"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

