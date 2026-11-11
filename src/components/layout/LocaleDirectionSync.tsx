"use client";

import { useEffect } from "react";
import { Locale } from "@/types/cms";

export function LocaleDirectionSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  return null;
}

