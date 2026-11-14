"use client";

import React, { useState } from "react";
import { CheckCircle2, Lock, Send, Upload } from "lucide-react";
import { Locale } from "@/types/cms";
import { CAREER_DEPARTMENTS } from "@/data/careers";

export function GeneralCareerEnquiryForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState(
    CAREER_DEPARTMENTS[0]?.id || "Commodity Trading"
  );
  const [message, setMessage] = useState("");
  const [cvName, setCvName] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-500/35 bg-white p-8 shadow-card dark:bg-gsy-navy"
      >
        <div className="flex items-start gap-3.5">
          <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h3 className="text-xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "تم استلام استفسارك المهني بنجاح"
                : "Career Enquiry Submitted Successfully"}
            </h3>
            <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
              {locale === "ar"
                ? `شكراً ${fullName}. تم تسجيل طلبك واهتمامك بقسم (${areaOfInterest}). سيقوم فريق استقطاب المواهب في مجموعة جي إس واي بالتواصل معك عند توفر فرص شاغرة تتوافق مع خبراتك.`
                : `Thank you, ${fullName}. Your profile and interest in ${areaOfInterest} have been securely registered with GSY Group People & Talent Acquisition. We will contact you when suitable opportunities arise.`}
            </p>
            <p className="mt-3 text-xs text-gsy-slate/75 dark:text-white/60">
              {locale === "ar"
                ? "إشعار الخصوصية: يتم التعامل مع السير الذاتية وبيانات المرشحين بسرية تامة وتخزينها بأمان وفقاً لسياسة الخصوصية وحفظ البيانات الخاصة بالمجموعة."
                : "Privacy Notice: CVs and applicant information are stored securely in compliance with GSY Group's data protection, confidentiality and retention policy."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFullName("");
                setEmail("");
                setPhone("");
                setCountry("");
                setMessage("");
                setCvName("");
                setConsent(false);
              }}
              className="mt-5 rounded-lg bg-gsy-navy px-4 py-2 text-xs font-bold text-white hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
            >
              {locale === "ar" ? "تقديم استفسار آخر" : "Submit Another Enquiry"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
    >
      <div className="border-b border-gsy-navy/10 pb-4 dark:border-white/10">
        <h3 className="text-xl font-extrabold text-gsy-navy dark:text-white sm:text-2xl">
          {locale === "ar" ? "ابقَ على تواصل مع جي إس واي" : "Stay Connected With GSY"}
        </h3>
        <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
          {locale === "ar"
            ? "إذا كنت ترغب في التعبير عن اهتمامك بالفرص المستقبلية، يُرجى استخدام نموذج الاستفسار المهني التالي."
            : "If you would like to express your interest in future opportunities, use the career enquiry form."}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="career-name"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar" ? "الاسم الكامل" : "Full Name"} *
          </label>
          <input
            id="career-name"
            type="text"
            required
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="career-email"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar" ? "البريد الإلكتروني" : "Email Address"} *
          </label>
          <input
            id="career-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="career-phone"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar" ? "رقم الهاتف / واتساب" : "Phone Number"} *
          </label>
          <input
            id="career-phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="career-country-input"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar" ? "الدولة" : "Country"} *
          </label>
          <input
            id="career-country-input"
            type="text"
            required
            placeholder={
              locale === "ar"
                ? "مثال: الإمارات، السعودية، الهند، ماليزيا..."
                : "e.g. UAE, Saudi Arabia, India, Malaysia..."
            }
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        {/* Area of Interest */}
        <div className="sm:col-span-2">
          <label
            htmlFor="career-area"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar" ? "مجال الاهتمام الوظيفي" : "Area of Interest"} *
          </label>
          <select
            id="career-area"
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          >
            {CAREER_DEPARTMENTS.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {locale === "ar" ? dept.name.ar : dept.name.en}
              </option>
            ))}
          </select>
        </div>

        {/* CV / Resume Upload */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "تحميل السيرة الذاتية (PDF أو DOCX)"
              : "CV / Resume Upload"} *
          </label>
          <label className="mt-1.5 flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-gsy-navy/30 bg-gsy-ivory/60 px-4 py-3 text-xs font-medium text-gsy-navy transition hover:border-gsy-gold dark:border-white/25 dark:bg-white/5 dark:text-white">
            <Upload className="h-4 w-4 text-gsy-gold" />
            <span className="truncate">
              {cvName ||
                (locale === "ar"
                  ? "اختر ملف السيرة الذاتية (PDF, DOCX)"
                  : "Attach CV / Resume File (PDF, DOCX up to 10MB)")}
            </span>
            <input
              type="file"
              required={!cvName}
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => setCvName(e.target.files?.[0]?.name || "")}
            />
          </label>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="career-message"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {locale === "ar"
              ? "الرسالة / نبذة عن خبراتك"
              : "Message / Career Summary"}
          </label>
          <textarea
            id="career-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              locale === "ar"
                ? "شارك نبذة مختصرة عن مسيرتك المهنية وما تتطلع لتحقيقه مع جي إس واي..."
                : "Share a brief summary of your background, achievements and aspirations..."
            }
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        {/* Consent to be contacted */}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs leading-relaxed text-gsy-slate dark:text-white/80">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 rounded border-gsy-navy/30 accent-gsy-gold"
            />
            <span>
              {locale === "ar"
                ? "أوافق على قيام فريق استقطاب المواهب في مجموعة جي إس واي العالمية بالتواصل معي بشأن الفرص الوظيفية المستقبلية المناسبة لملفي الشخصي."
                : "Consent to be contacted: I agree that GSY International Group's talent team may contact me regarding relevant future career opportunities."}
            </span>
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gsy-navy/10 pt-4 dark:border-white/10">
        <div className="flex items-center gap-1.5 text-xs text-gsy-slate dark:text-white/60">
          <Lock className="h-3.5 w-3.5 text-gsy-gold" />
          <span>
            {locale === "ar"
              ? "تخزين آمن ومشفر للسير الذاتية وبيانات المرشحين."
              : "Confidential and secure candidate data retention."}
          </span>
        </div>

        <button
          type="submit"
          disabled={!consent}
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-gsy-navy-mid disabled:opacity-50 dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light shadow-sm"
        >
          <Send className="h-4 w-4" />
          <span>{locale === "ar" ? "إرسال الاستفسار المهني" : "Submit Career Enquiry"}</span>
        </button>
      </div>
    </form>
  );
}
