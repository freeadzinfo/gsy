"use client";

import React, { useState } from "react";
import { CheckCircle2, Route, Send } from "lucide-react";
import { Locale } from "@/types/cms";
import { getUiCopy } from "@/data/dictionary";

export function RoutedContactForm({
  locale,
  defaultRole = "buyer",
  defaultCountry = "",
}: {
  locale: Locale;
  defaultRole?: string;
  defaultCountry?: string;
}) {
  const copy = getUiCopy(locale);
  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(defaultCountry);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const activeRoleObj =
    copy.form.roles.find((r) => r.id === selectedRole) ?? copy.form.roles[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 sm:p-8"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h3 className="text-lg font-extrabold text-gsy-navy dark:text-white">
              {copy.form.demoSubmittedTitle}
            </h3>
            <p className="mt-2 text-sm text-gsy-slate dark:text-white/80">
              {copy.form.demoSubmittedNote}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-3.5 py-2 text-xs font-bold text-gsy-gold-light">
              <Route className="h-4 w-4" />
              <span>{activeRoleObj.route}</span>
            </div>
            <div className="mt-4 text-xs text-gsy-slate dark:text-white/75">
              <p>
                <strong>{copy.form.iAmA}:</strong> {activeRoleObj.label}
              </p>
              <p>
                <strong>{copy.form.fullName}:</strong> {fullName} ({company || "—"})
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setMessage("");
              }}
              className="mt-5 rounded-lg border border-gsy-navy/20 bg-white px-4 py-2 text-xs font-bold text-gsy-navy hover:bg-gsy-ivory dark:border-white/20 dark:bg-gsy-navy dark:text-white"
            >
              {copy.form.reset}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="scroll-mt-24 rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card sm:p-8 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
    >
      <fieldset>
        <legend className="text-sm font-bold text-gsy-navy dark:text-white">
          {copy.form.iAmA} <span className="text-gsy-gold">*</span>
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {copy.form.roles.map((role) => {
            const active = selectedRole === role.id;
            return (
              <label
                key={role.id}
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                  active
                    ? "border-gsy-gold bg-gsy-navy text-white dark:border-gsy-gold-light dark:bg-gsy-gold-bright dark:text-gsy-navy-deep"
                    : "border-gsy-navy/15 bg-gsy-ivory/60 text-gsy-navy hover:border-gsy-gold/50 dark:border-white/15 dark:bg-white/5 dark:text-white"
                }`}
              >
                <input
                  type="radio"
                  name="enquiryRole"
                  value={role.id}
                  checked={active}
                  onChange={() => setSelectedRole(role.id)}
                  className="sr-only"
                />
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full border ${
                    active
                      ? "border-white bg-gsy-gold-light dark:border-gsy-navy-deep dark:bg-gsy-navy-deep"
                      : "border-gsy-navy/40 dark:border-white/40"
                  }`}
                />
                <span>{role.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Live Routing Indicator */}
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-gsy-gold/30 bg-gsy-gold-pale/60 px-3.5 py-2 text-xs font-medium text-gsy-navy dark:border-gsy-gold-light/25 dark:bg-gsy-gold-bright/10 dark:text-gsy-gold-light">
        <Route className="h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
        <span>
          {locale === "ar" ? "مسار التوجيه التلقائي:" : "Auto-routing target:"}{" "}
          <strong>{activeRoleObj.route}</strong>
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-fullName"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {copy.form.fullName} <span className="text-gsy-gold">*</span>
          </label>
          <input
            id="contact-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy invalid:user-invalid:border-red-500 dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {copy.form.company}
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {copy.form.email} <span className="text-gsy-gold">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy invalid:user-invalid:border-red-500 dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {copy.form.phone}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-country"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {copy.form.country}
          </label>
          <input
            id="contact-country"
            name="country"
            type="text"
            autoComplete="country-name"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder={locale === "ar" ? "مثال: الإمارات، تنزانيا، الهند" : "e.g. UAE, Tanzania, India"}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="block text-xs font-bold text-gsy-navy dark:text-white"
          >
            {copy.form.message} <span className="text-gsy-gold">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gsy-navy/20 bg-white px-3.5 py-2.5 text-sm text-gsy-navy invalid:user-invalid:border-red-500 dark:border-white/20 dark:bg-gsy-navy-deep dark:text-white"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-gsy-slate dark:text-white/65">
          {locale === "ar"
            ? "عرض تجريبي: لن يتم إرسال بريد إلكتروني خارجي."
            : "Demo form behavior: displays routing preview without external CRM submission."}
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
        >
          <Send className="h-4 w-4" />
          <span>{copy.form.submit}</span>
        </button>
      </div>
    </form>
  );
}
