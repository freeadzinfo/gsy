"use client";

import React, { useState } from "react";
import { Download, FileText, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { Locale } from "@/types/cms";

const PACK_DOCS = [
  {
    id: "trade-licences",
    title: { en: "Relevant Trade Licences", ar: "الرخص التجارية ذات الصلة" },
    desc: {
      en: "Commercial registrations and active entity licences for eligible procurement jurisdictions.",
      ar: "السجلات التجارية والتراخيص المعتمدة للكيانات العاملة في الاختصاصات المؤهلة.",
    },
  },
  {
    id: "certifications",
    title: {
      en: "Applicable Product & Company Certifications",
      ar: "شهادات المنتجات والشركات المعمول بها",
    },
    desc: {
      en: "Applicable quality, food safety and operational standards documentation confirmed for the relevant entity and product scope.",
      ar: "معايير الجودة والسلامة والامتثال المعتمدة والمؤكدة للكيان المعني ونطاق المنتجات.",
    },
  },
  {
    id: "bank-reference",
    title: { en: "Bank Reference", ar: "خطاب المرجع المصرفي" },
    desc: {
      en: "Financial standing and banking references to support buyer evaluation and due diligence.",
      ar: "الملاءة المالية والمراجع المصرفية لدعم تقييم المشتري وإجراءات العناية الواجبة.",
    },
  },
  {
    id: "company-profile",
    title: { en: "Company Profile", ar: "الملف التعريفي للشركة" },
    desc: {
      en: "Overview of GSY International Group capabilities, operations and international trade corridors.",
      ar: "نظرة شاملة على قدرات مجموعة جي إس واي وعملياتها وممراتها التجارية الدولية.",
    },
  },
];

export function ProcurementPackCards({ locale }: { locale: Locale }) {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="space-y-6 rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
            {locale === "ar" ? "وثائق المشتريات والتأهيل" : "Procurement Documentation"}
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "دعم إجراءات المشتريات الخاصة بكم"
              : "Supporting Your Procurement Process"}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gsy-slate dark:text-white/80">
            {locale === "ar"
              ? "لفرص المناقصات المؤهلة، يمكن توفير حزمة معلومات المشتريات المعتمدة لدعم تقييم المشتري وإجراءات العناية الواجبة بالمورد."
              : "For eligible tender opportunities, an approved procurement information pack may be made available to support buyer evaluation and supplier due diligence."}
          </p>
        </div>

        <a
          href="#enquiry-form"
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
        >
          <span>{locale === "ar" ? "طلب مستندات المشتريات" : "Request Procurement Documents"}</span>
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>

      {downloadedId && (
        <div
          role="status"
          className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>
            {locale === "ar"
              ? `تم تسجيل طلب (${downloadedId}) — في بيئة الإنتاج، يتم توفير الوثائق المعتمدة عقب التحقق من بيانات المناقصة والجهة الطالبة.`
              : `Request logged for "${downloadedId}" — in production, verified documents are made available to registered buyers following tender due diligence.`}
          </span>
        </div>
      )}

      {/* 4 Documentation Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PACK_DOCS.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col justify-between rounded-xl border border-gsy-navy/10 bg-gsy-ivory/70 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <div>
              <FileText className="h-6 w-6 text-gsy-gold dark:text-gsy-gold-light" />
              <h3 className="mt-3 text-sm font-extrabold text-gsy-navy dark:text-white">
                {locale === "ar" ? doc.title.ar : doc.title.en}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                {locale === "ar" ? doc.desc.ar : doc.desc.en}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDownloadedId(doc.title[locale])}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-gsy-navy/20 bg-white px-3 py-2 text-xs font-bold text-gsy-navy transition hover:border-gsy-gold hover:text-gsy-gold dark:border-white/20 dark:bg-gsy-navy dark:text-white dark:hover:text-gsy-gold-light"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{locale === "ar" ? "طلب المستند" : "Request Document"}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Compliance Note */}
      <div className="flex items-start gap-2.5 rounded-xl border border-gsy-navy/10 bg-gsy-ivory/50 p-4 text-xs text-gsy-slate dark:border-white/10 dark:bg-white/5 dark:text-white/75">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
        <p className="leading-relaxed">
          {locale === "ar"
            ? "تنبيه هام: يتم تضمين المستندات الحالية والمعتمدة فقط من الإدارة ضمن حزمة معلومات المشتريات. لا تُعرض شعارات الشهادات أو يُدعى شمولها ما لم يتم تأكيدها رسمياً للكيان والمنتجات ذات الصلة."
            : "Important: Only current, verified and management-approved documents should be included in the downloadable procurement pack. Do not display certification logos or imply certification coverage unless confirmed for the relevant entity and products."}
        </p>
      </div>
    </section>
  );
}
