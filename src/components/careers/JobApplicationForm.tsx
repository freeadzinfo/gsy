"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Upload } from "lucide-react";
import { Locale } from "@/types/cms";

export function JobApplicationForm({
  locale,
  jobTitle,
}: {
  locale: Locale;
  jobTitle: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [cvName, setCvName] = useState("");

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h3 className="text-base font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "تم استلام طلب التوظيف التجريبي"
                : "Demo Job Application Logged"}
            </h3>
            <p className="mt-1 text-xs text-gsy-slate sm:text-sm dark:text-white/80">
              {locale === "ar"
                ? `الوظيفة: ${jobTitle} — تُرسل في الإنتاج إلى فريق استقطاب المواهب.`
                : `Role: ${jobTitle} — routed in production to Group People & Talent Acquisition.`}
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 rounded-lg border border-gsy-navy/20 bg-white px-4 py-2 text-xs font-bold text-gsy-navy dark:border-white/20 dark:bg-gsy-navy dark:text-white"
            >
              {locale === "ar" ? "تقديم طلب آخر" : "Submit another application"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
    >
      <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
        {locale === "ar" ? "التقديم على هذه الوظيفة" : "Apply for This Role"}
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "الاسم الكامل" : "Full Name"} *
          </label>
          <input
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "البريد الإلكتروني" : "Email"} *
          </label>
          <input
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "رقم الهاتف" : "Phone Number"} *
          </label>
          <input
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "إرفاق السيرة الذاتية (PDF/DOC)" : "Upload CV / Resume (Demo)"}
          </label>
          <label className="mt-1.5 flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-gsy-navy/30 bg-gsy-ivory/60 px-3.5 py-2.5 text-xs font-medium text-gsy-navy dark:border-white/25 dark:bg-white/5 dark:text-white">
            <Upload className="h-4 w-4 text-gsy-gold" />
            <span className="truncate">
              {cvName || (locale === "ar" ? "اختر ملف السيرة الذاتية" : "Choose CV file")}
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => setCvName(e.target.files?.[0]?.name || "")}
            />
          </label>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "نبذة مختصرة عن الخبرة" : "Cover Note"}
          </label>
          <textarea
            rows={3}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-6 py-3 text-sm font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
      >
        <Send className="h-4 w-4" />
        <span>{locale === "ar" ? "إرسال الطلب" : "Submit Demo Application"}</span>
      </button>
    </form>
  );
}

