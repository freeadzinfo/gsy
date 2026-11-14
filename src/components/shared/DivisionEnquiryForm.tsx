"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Route, Send, Upload } from "lucide-react";
import { Locale } from "@/types/cms";
import { localePath } from "@/lib/i18n";

export type FormVariant =
  | "division"
  | "shipping"
  | "noor-al-arab"
  | "tenders"
  | "supplier"
  | "store-partner"
  | "investor"
  | "africa"
  | "country"
  | "product";

interface DivisionEnquiryFormProps {
  locale: Locale;
  variant: FormVariant;
  title: string;
  routeTarget: string;
  subtitle?: string;
  submitLabel?: string;
  secondaryAction?: { label: string; href: string };
  initialValues?: Record<string, string>;
}

export function DivisionEnquiryForm({
  locale,
  variant,
  title,
  routeTarget,
  subtitle,
  submitLabel,
  secondaryAction,
  initialValues,
}: DivisionEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState<Record<string, string>>({
    charterType: "voyage",
    salesTeam: "UAE",
    partnerType: "Store Investor",
    unit: "MT",
    productCategory: "Rice",
    ...initialValues,
  });
  const [catalogueName, setCatalogueName] = useState<string>("");

  const update = (key: string, value: string) =>
    setFormState((prev) => ({ ...prev, [key]: value }));

  const effectiveRoute =
    variant === "noor-al-arab"
      ? locale === "ar"
        ? `فريق مبيعات نور العرب — ${formState.salesTeam || "UAE"}`
        : `Noor Al Arab Sales Team (${formState.salesTeam || "UAE"})`
      : variant === "investor"
        ? formState.enquiryType === "Halal Investment Programme"
          ? locale === "ar"
            ? "مكتب الاستثمار الحلال — دبي"
            : "Halal Investment Desk"
          : formState.enquiryType === "Retail / Store Partnership"
            ? locale === "ar"
              ? "فريق تطوير التجزئة والمتاجر"
              : "Retail Development Team"
            : formState.enquiryType === "Banking / Financial Institution"
              ? locale === "ar"
                ? "مكتب الخزينة والعلاقات المصرفية"
                : "Treasury & Institutional Banking Desk"
              : formState.enquiryType === "Supplier / Producer"
                ? locale === "ar"
                  ? "فريق التوريد وسلاسل الإمداد"
                  : "Sourcing & Supply Chain Team"
                : locale === "ar"
                  ? "فريق الشراكات الاستراتيجية"
                  : "Strategic Partnerships Team"
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

        {/* Noor Al Arab Trade Account Fields */}
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
                <option value="HORECA">
                  {locale === "ar" ? "فنادق ومطاعم ومقاهي" : "Hotels, Restaurants and Cafes"}
                </option>
                <option value="Caterer">
                  {locale === "ar" ? "شركات التموين والإعاشة" : "Caterers & Foodservice"}
                </option>
                <option value="Wholesaler">
                  {locale === "ar" ? "تجار الجملة والتوزيع" : "Wholesalers & Distributors"}
                </option>
                <option value="Supermarket">
                  {locale === "ar" ? "الأسواق المركزية وسلاسل المتاجر" : "Supermarkets & Retail Chains"}
                </option>
                <option value="Retailer">
                  {locale === "ar" ? "متاجر التجزئة ومحلات البقالة" : "Retailers & Independent Grocers"}
                </option>
                <option value="Institution">
                  {locale === "ar" ? "المؤسسات والمشتريات العامة" : "Institutions & Procurement Bodies"}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الدولة (توجيه فريق المبيعات)" : "Country"} *
              </label>
              <select
                value={formState.salesTeam}
                onChange={(e) => update("salesTeam", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              >
                <option value="UAE">
                  {locale === "ar" ? "الإمارات ودول الخليج (فريق دبي)" : "UAE & GCC (Dubai Sales Team)"}
                </option>
                <option value="India">
                  {locale === "ar" ? "الهند (فريق مبيعات وتصدير الهند)" : "India (GSY Export Sales Team)"}
                </option>
                <option value="Malaysia">
                  {locale === "ar" ? "ماليزيا (فريق مبيعات كوالالمبور)" : "Malaysia (Kuala Lumpur Sales Team)"}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "حجم الشراء الشهري" : "Monthly Purchase Volume"}
              </label>
              <input
                type="text"
                placeholder={
                  locale === "ar"
                    ? "مثال: 50 طن متري / 2 حاوية / تقدير القيمة"
                    : "e.g. 50 MT / 2 FCL / estimated value"
                }
                onChange={(e) => update("monthlyVolume", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "فئات المنتجات" : "Product Categories"}
              </label>
              <input
                type="text"
                placeholder={
                  locale === "ar"
                    ? "أرز، سكر، زيوت طعام، أغذية معبأة، توابل، مجمدات..."
                    : "Rice, Sugar, Edible Oils, Packaged Foods, Spices, Frozen Foods"
                }
                onChange={(e) => update("categories", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
          </>
        )}

        {/* Government & Tenders Fields */}
        {variant === "tenders" && (
          <>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الدولة" : "Country"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "الدولة المعنية بالمناقصة" : "Country of procurement"}
                onChange={(e) => update("country", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الجهة الحكومية / المنظمة" : "Government Agency / Organisation"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "الوزارة، الهيئة، أو المنظمة" : "Ministry, agency or institution"}
                onChange={(e) => update("agency", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "رقم المناقصة" : "Tender Number"}
              </label>
              <input
                type="text"
                placeholder={locale === "ar" ? "الرقم المرجعي للمناقصة" : "Tender / RFQ reference number"}
                onChange={(e) => update("tenderNumber", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "المنتج / المتطلب" : "Product / Requirement"} *
              </label>
              <input
                type="text"
                required
                placeholder={
                  locale === "ar"
                    ? "أرز، أسمدة، حديد بناء، تموين مؤسسي..."
                    : "e.g. Rice, Urea 46%, Construction Steel, Institutional Catering"
                }
                onChange={(e) => update("productRequirement", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الكمية المطلوبة" : "Required Quantity"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "مثال: 50,000 طن متري" : "e.g. 50,000 MT"}
                onChange={(e) => update("quantity", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الموعد النهائي لتقديم المناقصة" : "Tender Submission Deadline"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "مثال: 30 نوفمبر 2026" : "e.g. 30 November 2026"}
                onChange={(e) => update("deadline", e.target.value)}
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
                {locale === "ar" ? "دولة التسجيل" : "Country of Registration"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "مثال: الإمارات، الهند، ماليزيا..." : "e.g. UAE, India, Malaysia..."}
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
                <option value="Fresh Produce">{locale === "ar" ? "المنتجات الطازجة والمخبوزات" : "Fresh Produce & Bakery"}</option>
                <option value="Halal Butchery">{locale === "ar" ? "اللحوم والدواجن الحلال" : "Halal Meat & Poultry"}</option>
                <option value="Dry FMCG">{locale === "ar" ? "البقالة الجافة والسلع التموينية" : "Dry Groceries & Staples"}</option>
                <option value="Frozen & Dairy">{locale === "ar" ? "الأغذية المجمدة والألبان" : "Frozen & Dairy"}</option>
                <option value="Household">{locale === "ar" ? "المستلزمات المنزلية وغير الغذائية" : "Household & Non-Food"}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "شهادات سلامة وجودة الأغذية (حلال، الهاسب، الأيزو)" : "Food Safety / Quality Certifications"}
              </label>
              <input
                type="text"
                placeholder={locale === "ar" ? "مثال: حلال، HACCP، ISO 22000" : "e.g. Halal, HACCP, ISO 22000"}
                onChange={(e) => update("certifications", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "رفع الكتالوج / الملف التعريفي للشركة" : "Product Catalogue / Company Profile Upload"}
              </label>
              <label className="mt-1.5 flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-gsy-navy/30 bg-gsy-ivory/60 px-3.5 py-2.5 text-xs font-medium text-gsy-navy hover:border-gsy-gold dark:border-white/25 dark:bg-white/5 dark:text-white">
                <Upload className="h-4 w-4 text-gsy-gold" />
                <span className="truncate">
                  {catalogueName || (locale === "ar" ? "إرفاق ملف PDF أو قائمة أسعار" : "Attach PDF / Catalogue / Profile")}
                </span>
                <input
                  type="file"
                  accept=".pdf,.xlsx,.csv,.docx"
                  className="sr-only"
                  onChange={(e) => setCatalogueName(e.target.files?.[0]?.name || "")}
                />
              </label>
            </div>
          </>
        )}

        {/* Product Catalogue Enquiry Fields */}
        {variant === "product" && (
          <>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "المنتج محل الاهتمام" : "Product of Interest"} *
              </label>
              <input
                type="text"
                required
                value={formState.productName || ""}
                placeholder={
                  locale === "ar"
                    ? "مثال: أرز بسمتي نور العرب الفاخر / سماد اليوريا 46%"
                    : "e.g. Noor Al Arab Extra Long Basmati Rice / Urea 46%"
                }
                onChange={(e) => update("productName", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "فئة المنتج" : "Product Category"} *
              </label>
              <select
                value={formState.productCategory || "Rice"}
                onChange={(e) => update("productCategory", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              >
                <option value="Rice">{locale === "ar" ? "الأرز" : "Rice"}</option>
                <option value="Sugar">{locale === "ar" ? "السكر" : "Sugar"}</option>
                <option value="Edible Oils">{locale === "ar" ? "زيوت الطعام" : "Edible Oils"}</option>
                <option value="Pulses & Spices">{locale === "ar" ? "البقوليات والتوابل" : "Pulses & Spices"}</option>
                <option value="Packaged Foods">{locale === "ar" ? "الأغذية المعبأة" : "Packaged Foods"}</option>
                <option value="Frozen Foods">{locale === "ar" ? "الأغذية المجمدة" : "Frozen Foods"}</option>
                <option value="Fertilizer">{locale === "ar" ? "الأسمدة" : "Fertilizer"}</option>
                <option value="Minerals & Metals">{locale === "ar" ? "المعادن والفلزات" : "Minerals & Metals"}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "سوق الوجهة / الدولة" : "Destination Market / Country"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "الإمارات، دول الخليج، أفريقيا، آسيا..." : "e.g. UAE, GCC, East Africa, Malaysia..."}
                onChange={(e) => update("destination", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الكمية التقديرية المطلوبة" : "Estimated Required Volume"}
              </label>
              <input
                type="text"
                placeholder={locale === "ar" ? "مثال: 500 طن متري / 5 حاويات" : "e.g. 500 MT / 5 FCL containers"}
                onChange={(e) => update("volume", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
          </>
        )}

        {/* Store Partner Track */}
        {variant === "store-partner" && (
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-gsy-navy dark:text-white">
              {locale === "ar" ? "نوع الشراكة المطلوبة" : "Partnership Track"}
            </label>
            <select
              value={formState.partnerType}
              onChange={(e) => update("partnerType", e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
            >
              <option value="New Store Site / Landlord">
                {locale === "ar" ? "مالك عقار / اقتراح موقع متجر تجزئة (الإمارات، ماليزيا، دول الخليج)" : "Landlord / Retail Site Proposal (UAE, Malaysia, GCC)"}
              </option>
              <option value="Store Investment Partner">
                {locale === "ar" ? "شريك استثماري لتطوير وتوسيع المتاجر (تُناقش الشروط مباشرة)" : "Store Expansion Investment Partner (Terms Discussed Privately)"}
              </option>
            </select>
          </div>
        )}

        {/* Investor & Partnership Track */}
        {variant === "investor" && (
          <>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "الدولة" : "Country"} *
              </label>
              <input
                type="text"
                required
                placeholder={locale === "ar" ? "مثال: الإمارات، السعودية، ماليزيا، المملكة المتحدة..." : "e.g. UAE, Saudi Arabia, Malaysia, UK..."}
                onChange={(e) => update("country", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gsy-navy dark:text-white">
                {locale === "ar" ? "نوع الاستفسار" : "Enquiry Type"} *
              </label>
              <select
                value={formState.enquiryType || "Halal Investment Programme"}
                onChange={(e) => update("enquiryType", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
              >
                <option value="Halal Investment Programme">
                  {locale === "ar" ? "برنامج الاستثمار الحلال" : "Halal Investment Programme"}
                </option>
                <option value="Business Partnership">
                  {locale === "ar" ? "شراكة تجارية" : "Business Partnership"}
                </option>
                <option value="Retail / Store Partnership">
                  {locale === "ar" ? "شراكة متاجر التجزئة" : "Retail / Store Partnership"}
                </option>
                <option value="Banking / Financial Institution">
                  {locale === "ar" ? "بنوك ومؤسسات مالية" : "Banking / Financial Institution"}
                </option>
                <option value="Supplier / Producer">
                  {locale === "ar" ? "موردون ومنتجون" : "Supplier / Producer"}
                </option>
                <option value="Other">
                  {locale === "ar" ? "أخرى" : "Other"}
                </option>
              </select>
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-gsy-navy dark:text-white">
            {variant === "investor"
              ? (locale === "ar" ? "الرسالة" : "Message")
              : variant === "supplier"
                ? (locale === "ar" ? "معلومات إضافية" : "Additional Information")
                : (locale === "ar" ? "تفاصيل إضافية" : "Additional Notes / Requirements")}
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
        <div className="flex flex-wrap items-center gap-3">
          {secondaryAction && (
            <Link
              href={localePath(locale, secondaryAction.href)}
              className="rounded-lg border border-gsy-navy/20 px-4 py-2.5 text-xs font-bold text-gsy-navy transition hover:bg-gsy-navy/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
            >
              {secondaryAction.label}
            </Link>
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
          >
            <Send className="h-4 w-4" />
            <span>{submitLabel ?? (locale === "ar" ? "إرسال الاستفسار" : "Submit Enquiry")}</span>
          </button>
        </div>
      </div>
    </form>
  );
}

