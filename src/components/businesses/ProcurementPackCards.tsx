"use client";

import React, { useState } from "react";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { Locale } from "@/types/cms";

const PACK_DOCS = [
  {
    id: "trade-licences",
    title: { en: "Trade Licences Pack", ar: "حزمة الرخص التجارية" },
    desc: {
      en: "UAE & active regional entity commercial registration dossier (Demo placeholder)",
      ar: "ملف السجلات التجارية والرخص المعتمدة في الإمارات والمراكز النشطة (تجريبي)",
    },
  },
  {
    id: "certifications",
    title: { en: "Certifications (HACCP, ISO, Halal)", ar: "شهادات الجودة (الهاسب والأيزو والحلال)" },
    desc: {
      en: "Verified food safety, quality management and Halal assurance certificates (Demo placeholder)",
      ar: "شهادات السلامة الغذائية وأنظمة الجودة واعتماد الحلال (تجريبي)",
    },
  },
  {
    id: "bank-reference",
    title: { en: "Bank Reference Letter", ar: "خطاب المرجع المصرفي" },
    desc: {
      en: "Trade finance standing & LC issuance capability overview (Available upon tender registration)",
      ar: "خطاب الأهلية المصرفية والقدرة على فتح الاعتمادات المستندية (تجريبي)",
    },
  },
  {
    id: "company-profile",
    title: { en: "Corporate Company Profile", ar: "الملف التعريفي للمجموعة" },
    desc: {
      en: "Complete GSY International Group capabilities and past performance summary (Demo PDF)",
      ar: "نظرة شاملة على قدرات مجموعة جي إس واي وسجل الإنجازات (تجريبي)",
    },
  },
];

export function ProcurementPackCards({ locale }: { locale: Locale }) {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  return (
    <section className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-xl font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar"
              ? "حزمة تأهيل المشتريات الحكومية والمناقصات"
              : "Procurement Pack Downloads"}
          </h2>
          <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "مستندات الاعتماد الجاهزة لجهات المناقصات والوزارات والمنظمات الدولية."
              : "Standard tender pre-qualification documentation ready for ministries, reserve agencies and NGOs."}
          </p>
        </div>
      </div>

      {downloadedId && (
        <div
          role="status"
          className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>
            {locale === "ar"
              ? `معاينة تحميل تجريبي: (${downloadedId}) — يتم إرفاق ملف PDF المعتمد من نظام إدارة المحتوى عند الإطلاق.`
              : `Demo download triggered for "${downloadedId}" — official signed PDF documents connect via CMS in production.`}
          </span>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PACK_DOCS.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col justify-between rounded-xl border border-gsy-navy/10 bg-gsy-ivory/70 p-4 dark:border-white/10 dark:bg-white/5"
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
              <span>{locale === "ar" ? "تحميل (تجريبي)" : "Download Demo"}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

