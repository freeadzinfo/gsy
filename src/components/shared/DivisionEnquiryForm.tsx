"use client";

import React, { useState } from "react";
import { CheckCircle2, Route, Send, Upload } from "lucide-react";
import { Locale } from "@/types/cms";

export type FormVariant =
  | "division"
  | "shipping"
  | "noor-al-arab"
  | "tenders"
  | "supplier"
  | "store-partner"
  | "investor"
  | "africa"
  | "country";

interface DivisionEnquiryFormProps {
  locale: Locale;
  variant: FormVariant;
  title: string;
  routeTarget: string;
  subtitle?: string;
}

export function DivisionEnquiryForm({
  locale,
  variant,
  title,
  routeTarget,
  subtitle,
}: DivisionEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState<Record<string, string>>({
    charterType: "voyage",
    salesTeam: "UAE",
    partnerType: "Store Investor",
    unit: "MT",
  });
  const [catalogueName, setCatalogueName] = useState<string>("");

  const update = (key: string, value: string) =>
    setFormState((prev) => ({ ...prev, [key]: value }));

  const effectiveRoute =
    variant === "noor-al-arab"
      ? locale === "ar"
        ? `فريق مبيعات نور العرب — ${formState.salesTeam || "UAE"}`
        : `Noor Al Arab Sales Team (${formState.salesTeam || "UAE"})`
      : routeTarget;

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
                ? "تم تسجيل النموذج التجريبي بنجاح"
                : "Demo Enquiry Logged (No External System Connected)"}
            </h3>
            <p className="mt-1.5 text-sm text-gsy-slate dark:text-white/80">
              {locale === "ar" ? "يُوجَّه تلقائياً إلى:" : "Routed in production to:"}{" "}
              <strong className="text-gsy-navy dark:text-gsy-gold-light">
                {effectiveRoute}
              </strong>
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 rounded-lg border border-gsy-navy/20 bg-white px-4 py-2 text-xs font-bold text-gsy-navy hover:bg-gsy-ivory dark:border-white/20 dark:bg-gsy-navy dark:text-white"
            >
              {locale === "ar" ? "إرسال طلب آخر" : "Submit another enquiry"}
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
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gsy-navy/10 pb-4 dark:border-white/10">
        <div>
          <h3 className="text-xl font-extrabold text-gsy-navy dark:text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm text-gsy-slate dark:text-white/75">
              {subtitle}
            </p>
          )}
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-lg bg-gsy-gold-pale px-3 py-1.5 text-xs font-bold text-gsy-gold dark:bg-gsy-gold-bright/15 dark:text-gsy-gold-light">
          <Route className="h-3.5 w-3.5" />
          <span>{effectiveRoute}</span>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {/* Common Company & Contact */}
        <div>
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "اسم الشركة / الجهة" : "Company / Organisation"} *
          </label>
          <input
            type="text"
            required
            onChange={(e) => update("company", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "اسم الشخص المسؤول" : "Contact Name"} *
          </label>
          <input
            type="text"
            required
            onChange={(e) => update("contactName", e.target.value)}
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
            onChange={(e) => update("email", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "رقم الهاتف / واتساب" : "Phone / WhatsApp"}
          </label>
          <input
            type="tel"
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        {/* Shipping & Chartering Freight Quote Fields (Page 8) */}
        {variant === "shipping" && (
          <>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "نوع الشحنة" : "Cargo Type"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "أرز، سماد، معادن، حاويات..." : "e.g. Rice, Fertilizer, Manganese, Containerised FMCG"}
                onChange={(e) => update("cargoType", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                  {locale === "ar" ? "الكمية" : "Quantity"} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="25,000 / 40"
                  onChange={(e) => update("quantity", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                  {locale === "ar" ? "الوحدة" : "Unit"}
                </label>
                <select
                  value={formState.unit}
                  onChange={(e) => update("unit", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-2.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
                >
                  <option value="MT">MT</option>
                  <option value="TEU">TEU</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "ميناء التحميل" : "Load Port"} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Chennai / Jebel Ali / Port Klang"
                onChange={(e) => update("loadPort", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "ميناء التفريغ" : "Discharge Port"} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mombasa / Dar es Salaam / Lagos"
                onChange={(e) => update("dischargePort", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "تواريخ فترة التحميل (Laycan)" : "Laycan Dates"} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 15–25 Nov 2026"
                onChange={(e) => update("laycan", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>

            <div>
              <span className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "نوع التأجير" : "Charter Type"}
              </span>
              <div className="mt-2 flex gap-3">
                {[
                  { id: "voyage", en: "Voyage Charter", ar: "تأجير بالرحلة" },
                  { id: "container", en: "Container Freight", ar: "شحن حاويات" },
                ].map((opt) => (
                  <label key={opt.id} className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-gsy-navy dark:text-white">
                    <input
                      type="radio"
                      name="charterType"
                      value={opt.id}
                      checked={formState.charterType === opt.id}
                      onChange={() => update("charterType", opt.id)}
                      className="accent-gsy-gold"
                    />
                    <span>{locale === "ar" ? opt.ar : opt.en}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Noor Al Arab Trade Account Fields (Page 11) */}
        {variant === "noor-al-arab" && (
          <>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "نوع النشاط التجاري" : "Business Type"} *
              </label>
              <select
                required
                onChange={(e) => update("businessType", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              >
                <option value="HORECA">HORECA (Hotel / Restaurant / Cafe)</option>
                <option value="Caterer">Catering / Institutional Kitchen</option>
                <option value="Wholesaler">Wholesaler / Distributor</option>
                <option value="Supermarket">Supermarket / Retail Chain</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "فريق المبيعات المستهدف (الدولة)" : "Sales Market (Country Routing)"} *
              </label>
              <select
                value={formState.salesTeam}
                onChange={(e) => update("salesTeam", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              >
                <option value="UAE">UAE & GCC Sales Team</option>
                <option value="India">India Sales Team</option>
                <option value="Malaysia">Malaysia Sales Team</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الحجم الشهري المتوقع" : "Estimated Monthly Volume"}
              </label>
              <input
                type="text"
                placeholder="e.g. 2 FCL / 50 MT / AED 100k"
                onChange={(e) => update("monthlyVolume", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الفئات المطلوبة" : "Product Categories"}
              </label>
              <input
                type="text"
                placeholder="Rice, Spices, Edible Oils, Frozen, HORECA"
                onChange={(e) => update("categories", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
          </>
        )}

        {/* Government & Tenders Fields (Page 11) */}
        {variant === "tenders" && (
          <>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الدولة" : "Country"} *
              </label>
              <input
                type="text"
                required
                onChange={(e) => update("country", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الجهة / الوزارة / المنظمة" : "Agency / Ministry / NGO"} *
              </label>
              <input
                type="text"
                required
                onChange={(e) => update("agency", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "رقم المناقصة" : "Tender Reference Number"}
              </label>
              <input
                type="text"
                onChange={(e) => update("tenderNumber", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "المنتج والكمية والموعد النهائي" : "Product, Quantity & Deadline"} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 50,000 MT Urea • Deadline 30 Nov"
                onChange={(e) => update("productDeadline", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
          </>
        )}

        {/* Become a Supplier Fields (Page 9) */}
        {variant === "supplier" && (
          <>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الدولة" : "Country"} *
              </label>
              <input
                type="text"
                required
                onChange={(e) => update("country", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "فئة المنتجات" : "Product Category"} *
              </label>
              <select
                required
                onChange={(e) => update("productCategory", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              >
                <option value="Fresh Produce">Fresh Produce & Bakery</option>
                <option value="Halal Butchery">Halal Meat & Poultry</option>
                <option value="Dry FMCG">Dry Groceries & Staples</option>
                <option value="Frozen & Dairy">Frozen & Dairy</option>
                <option value="Household">Household & Non-Food</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الشهادات (حلال، الهاسب، الأيزو)" : "Certifications (Halal, HACCP, ISO)"}
              </label>
              <input
                type="text"
                placeholder="e.g. Halal, HACCP, ISO 22000"
                onChange={(e) => update("certifications", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "رفع الكتالوج (تجريبي)" : "Product Catalogue Upload (Demo)"}
              </label>
              <label className="mt-1.5 flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-gsy-navy/30 bg-gsy-ivory/60 px-3.5 py-2.5 text-xs font-medium text-gsy-navy hover:border-gsy-gold dark:border-white/25 dark:bg-white/5 dark:text-white">
                <Upload className="h-4 w-4 text-gsy-gold" />
                <span className="truncate">
                  {catalogueName || (locale === "ar" ? "اختر ملف PDF أو قائمة أسعار" : "Attach PDF / Price List")}
                </span>
                <input
                  type="file"
                  accept=".pdf,.xlsx,.csv"
                  className="sr-only"
                  onChange={(e) => setCatalogueName(e.target.files?.[0]?.name || "")}
                />
              </label>
            </div>
          </>
        )}

        {/* Store Partner / Investor Track */}
        {(variant === "store-partner" || variant === "investor") && (
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-gsy-navy dark:text-white">
              {locale === "ar" ? "نوع الشراكة المطلوبة" : "Partnership Track"}
            </label>
            <select
              value={formState.partnerType}
              onChange={(e) => update("partnerType", e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
            >
              {variant === "store-partner" ? (
                <>
                  <option value="New Store Site / Landlord">Landlord / Retail Site Proposal (UAE, GCC, Malaysia)</option>
                  <option value="Store Investment Partner">Store Expansion Investment Partner (Private Terms Shared Directly)</option>
                </>
              ) : (
                <>
                  <option value="Store Investor">Store Expansion Partner</option>
                  <option value="Bank / Trade Finance">Bank / Trade Finance Facility</option>
                  <option value="Origin Producer">Origin Producer / Mill Offtake Partner</option>
                  <option value="Halal Investment">Halal Investment Program Enquiry</option>
                </>
              )}
            </select>
          </div>
        )}

        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {locale === "ar" ? "تفاصيل إضافية" : "Additional Notes / Requirements"}
          </label>
          <textarea
            rows={3}
            onChange={(e) => update("notes", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-gsy-slate dark:text-white/65">
          {locale === "ar"
            ? "نموذج عرض تفاعلي — دون إرسال خارجي."
            : "Interactive demo validation — private terms are never displayed publicly."}
        </span>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
        >
          <Send className="h-4 w-4" />
          <span>{locale === "ar" ? "إرسال الاستفسار" : "Submit Enquiry"}</span>
        </button>
      </div>
    </form>
  );
}

