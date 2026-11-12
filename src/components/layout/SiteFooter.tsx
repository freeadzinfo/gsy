import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/types/cms";
import { SITE_SETTINGS } from "@/data/site-settings";
import { getUiCopy } from "@/data/dictionary";
import { localePath, t } from "@/lib/i18n";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getUiCopy(locale);

  const divisionLinks = [
    { label: { en: "Commodity Trading", ar: "تجارة السلع" }, href: "/businesses/commodity-trading" },
    { label: { en: "Shipping & Chartering", ar: "الشحن والتأجير البحري" }, href: "/businesses/shipping-chartering" },
    { label: { en: "Noor Al Arab", ar: "نور العرب" }, href: "/businesses/noor-al-arab" },
    { label: { en: "Government & Tenders", ar: "الحكومات والمناقصات" }, href: "/businesses/government-tenders" },
    { label: { en: "Distribution & HORECA", ar: "التوزيع والضيافة" }, href: "/businesses/distribution" },
    { label: { en: "Logistics & Supply Chain", ar: "اللوجستيات وسلاسل الإمداد" }, href: "/businesses/logistics" },
    { label: { en: "GSY Supermarket Group", ar: "مجموعة الأسواق المركزية" }, href: "/supermarkets" },
  ];

  const groupLinks = [
    { label: { en: "The GSY Family", ar: "عائلة جي إس واي" }, href: "/about/gsy-family" },
    { label: { en: "Vision 2030", ar: "رؤية 2030" }, href: "/about/vision-2030" },
    { label: { en: "Governance & Compliance", ar: "الحوكمة والامتثال" }, href: "/about/governance" },
    { label: { en: "Global Presence Map", ar: "خريطة الانتشار العالمي" }, href: "/presence" },
    { label: { en: "GSY in Africa", ar: "جي إس واي في أفريقيا" }, href: "/presence/africa" },
    { label: { en: "Halal Investment Program", ar: "برنامج الاستثمار الحلال" }, href: "/investors/halal-investment" },
    { label: { en: "Media Gallery", ar: "معرض الصور" }, href: "/about/gallery" },
    { label: { en: "Blog & Events", ar: "المدونة والفعاليات" }, href: "/blog" },
    { label: { en: "Careers", ar: "الوظائف" }, href: "/careers" },
    { label: { en: "Contact", ar: "اتصل بنا" }, href: "/contact" },
  ];

  return (
    <footer className="border-t border-gsy-navy/10 bg-gsy-navy text-white dark:border-gsy-gold-light/15 dark:bg-[#040c18]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white p-1">
                <Image
                  src="/images/gsy-logo.jpg"
                  alt="GSY International Group Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-extrabold tracking-tight">
                  {t(SITE_SETTINGS.companyName, locale)}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gsy-gold-light">
                  {locale === "ar" ? "دبي • تأسست عام 1974" : "Dubai HQ • Since 1974"}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {copy.footer.aboutSummary}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-gsy-gold-light/25 bg-white/5 px-3 py-2 text-xs text-gsy-gold-light">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>
                {locale === "ar"
                  ? `الهدف الاستراتيجي 2030: ${SITE_SETTINGS.groupGoal2030}`
                  : `2030 Group Goal: ${SITE_SETTINGS.groupGoal2030} (${SITE_SETTINGS.groupGoalAedApprox})`}
              </span>
            </div>
          </div>

          {/* Divisions */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gsy-gold-light">
              {copy.footer.divisionsTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {divisionLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(locale, item.href)}
                    className="text-white/80 transition hover:text-gsy-gold-light"
                  >
                    {t(item.label, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group & Markets */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gsy-gold-light">
              {copy.footer.groupTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {groupLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(locale, item.href)}
                    className="text-white/80 transition hover:text-gsy-gold-light"
                  >
                    {t(item.label, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HQ Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gsy-gold-light">
              {locale === "ar" ? "المقر الرئيسي" : "Corporate Headquarters"}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold-light" />
                <span>{t(SITE_SETTINGS.hqAddress, locale)}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gsy-gold-light" />
                <span>{SITE_SETTINGS.hqEmail}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gsy-gold-light" />
                <span dir="ltr">{SITE_SETTINGS.hqPhone}</span>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              {copy.footer.legalNotice}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/65 sm:flex-row sm:items-center">
          <p>{copy.footer.copyright}</p>
          <p>
            {locale === "ar"
              ? "مسارات التجزئة، التجارة، الشحن البحري، الموانئ، والانتشار العالمي — نموذج عرض داخلي"
              : "Asset-light chartering • Integrated food platform • 28 tracked markets"}
          </p>
        </div>
      </div>
    </footer>
  );
}

