import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Briefcase } from "lucide-react";
import { isValidLocale, t } from "@/lib/i18n";
import { CAREERS_DATA } from "@/data/careers";
import { PageHero } from "@/components/shared/PageHero";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";

export function generateStaticParams() {
  return CAREERS_DATA.map((j) => ({ job: j.slug }));
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ locale: string; job: string }>;
}) {
  const { locale, job: jobSlug } = await params;
  if (!isValidLocale(locale)) notFound();

  const job = CAREERS_DATA.find((j) => j.slug === jobSlug);
  if (!job) notFound();

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={`${job.department} • ${t(job.employmentType, locale)}`}
        title={t(job.title, locale)}
        subtitle={t(job.summary, locale)}
        backgroundImage="/images/boardroom-team.jpg"
        primaryCta={{
          label: locale === "ar" ? "قدّم الآن" : "Apply Now",
          href: "#apply-form",
        }}
        secondaryCta={{
          label: locale === "ar" ? "جميع الوظائف" : "View All Open Roles",
          href: "/careers",
        }}
        breadcrumbs={[
          { label: locale === "ar" ? "الوظائف" : "Careers", href: "/careers" },
          { label: t(job.title, locale) },
        ]}
      />

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 rounded-2xl border border-gsy-navy/10 bg-white p-5 text-sm font-bold text-gsy-navy shadow-sm dark:border-gsy-gold-light/15 dark:bg-gsy-navy dark:text-white">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gsy-gold" />
            {t(job.location, locale)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-gsy-gold" />
            {t(job.experience, locale)}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <h2 className="text-lg font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar" ? "المسؤوليات الرئيسية" : "Key Responsibilities"}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-gsy-slate dark:text-white/80">
              {(locale === "ar" ? job.responsibilities.ar : job.responsibilities.en).map(
                (r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold" />
                    <span>{r}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
            <h2 className="text-lg font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar" ? "المتطلبات والخبرات" : "Requirements"}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-gsy-slate dark:text-white/80">
              {(locale === "ar" ? job.requirements.ar : job.requirements.en).map(
                (r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{r}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div id="apply-form" className="scroll-mt-24">
          <JobApplicationForm locale={locale} jobTitle={t(job.title, locale)} />
        </div>
      </div>
    </div>
  );
}

