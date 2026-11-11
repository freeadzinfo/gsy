import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LocaleDirectionSync } from "@/components/layout/LocaleDirectionSync";
import { getUiCopy } from "@/data/dictionary";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={dir} className="flex min-h-dvh flex-col">
      <LocaleDirectionSync locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gsy-navy focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        {copy.skipToContent}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

