import { Locale, LocalizedString } from "@/types/cms";

export function isValidLocale(value: string): value is Locale {
  return value === "en" || value === "ar";
}

export function t(value: LocalizedString, locale: Locale): string {
  return locale === "ar" ? value.ar : value.en;
}

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

