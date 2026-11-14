"use client";

import React, { useState } from "react";
import { Download, FileCheck2, Lock } from "lucide-react";
import { Locale } from "@/types/cms";

export function GatedProfileForm({ locale }: { locale: Locale }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setUnlocked(true);
    }
  };

  if (unlocked) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-500/35 bg-white p-8 shadow-card dark:bg-gsy-navy"
      >
        <div className="flex items-start gap-3">
          <FileCheck2 className="mt-1 h-7 w-7 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "تم فتح الملف التعريفي للمجموعة (عرض تجريبي)"
                : "Company Profile PDF Unlocked (Demo Preview)"}
            </h2>
            <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
              {locale === "ar"
                ? `شكراً ${name}. تم تسجيل البريد الإلكتروني (${email}). في النسخة النهائية سيبدأ تحميل ملف PDF الرسمي لملف مجموعة جي إس واي الدولية.`
                : `Thank you, ${name}. Registered access for ${email}. In production, this triggers the signed PDF download of GSY International Group's Corporate Profile.`}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  const blob = new Blob(
                    [
                      "GSY International Group - Demo Corporate Profile Placeholder\nFounded: 1974 | HQ: Dubai | Active Today: 7 Countries | 2030 Vision: 25+ Countries, US$2.5B Group.\nNote: Replace with official approved corporate PDF.",
                    ],
                    { type: "text/plain;charset=utf-8" }
                  );
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "GSY-International-Group-Profile-Demo.txt";
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
              >
                <Download className="h-4 w-4" />
                <span>
                  {locale === "ar" ? "تنزيل ملخص الملف التجريبي" : "Download Demo Summary File"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setUnlocked(false)}
                className="rounded-lg border border-gsy-navy/20 px-4 py-2.5 text-xs font-bold text-gsy-navy dark:border-white/20 dark:text-white"
              >
                {locale === "ar" ? "إعادة القفل" : "Reset Demo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleUnlock}
      className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
        <Lock className="h-4 w-4" />
        <span>
          {locale === "ar" ? "تحميل الملف التعريفي المعتمد" : "Approved Company Profile"}
        </span>
      </div>
      <h2 className="mt-2 text-xl font-extrabold text-gsy-navy dark:text-white">
        {locale === "ar"
          ? "اكتشف مجموعة جي إس واي العالمية"
          : "Discover GSY International Group"}
      </h2>
      <p className="mt-1.5 text-sm text-gsy-slate dark:text-white/75">
        {locale === "ar"
          ? "حمّل الملف التعريفي المعتمد للتعرف على مجموعة جي إس واي الدولية، وقطاعات أعمالها، وأسواقها، وتوجهها الاستراتيجي."
          : "Download the approved company profile to learn about GSY International Group, its business divisions, markets and strategic direction."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="profile-name"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar" ? "الاسم الكامل" : "Full Name"} *
          </label>
          <input
            id="profile-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="profile-email"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar" ? "البريد الإلكتروني للعمل" : "Business Email"} *
          </label>
          <input
            id="profile-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
      >
        <Download className="h-4 w-4" />
        <span>
          {locale === "ar" ? "تحميل الملف التعريفي للشركة" : "Download Company Profile"}
        </span>
      </button>
    </form>
  );
}

