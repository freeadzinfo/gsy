import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { isValidLocale, localePath, t } from "@/lib/i18n";
import { NEWS_DATA } from "@/data/news";
import { PageHero } from "@/components/shared/PageHero";

export function generateStaticParams() {
  return NEWS_DATA.map((a) => ({ slug: a.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const article = NEWS_DATA.find((a) => a.slug === slug);
  if (!article) notFound();

  const BackIcon = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={t(article.tag, locale)}
        title={t(article.title, locale)}
        subtitle={t(article.excerpt, locale)}
        backgroundImage={article.image}
        primaryCta={{
          label: locale === "ar" ? "جميع الأخبار" : "All News & Milestones",
          href: "/news",
        }}
        secondaryCta={{
          label: locale === "ar" ? "تواصل إعلامي" : "Media Desk Contact",
          href: "/contact",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "الأخبار" : "News", href: "/news" },
          { label: t(article.tag, locale) },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-gsy-navy/10 bg-white shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <div className="relative h-64 w-full sm:h-80">
            <Image
              src={article.image}
              alt={t(article.title, locale)}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 p-6 sm:p-10">
            <p className="flex items-center gap-2 text-xs font-bold text-gsy-gold dark:text-gsy-gold-light">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </p>
            {(locale === "ar" ? article.body.ar : article.body.en).map((para, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-gsy-slate sm:text-base dark:text-white/85"
              >
                {para}
              </p>
            ))}

            <div className="pt-6">
              <Link
                href={localePath(locale, "/news")}
                className="inline-flex items-center gap-2 text-xs font-bold text-gsy-navy hover:text-gsy-gold dark:text-gsy-gold-light"
              >
                <BackIcon className="h-4 w-4" />
                <span>{locale === "ar" ? "العودة إلى الأخبار" : "Back to all News"}</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

