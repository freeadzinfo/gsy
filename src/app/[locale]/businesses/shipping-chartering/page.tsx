import React from "react";
import { notFound } from "next/navigation";
import { Anchor, Lock, Ship, ShieldCheck } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { BUSINESS_DIVISIONS, SHIPPING_KEY_PORTS } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";

export default async function ShippingCharteringPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "shipping-chartering")!;

  const heroAction = (
    <a
      href="#enquiry-form"
      className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
    >
      <Ship className="h-4 w-4" />
      <span>
        {locale === "ar" ? "اطلب عرض سعر شحن" : "Request a Freight Quote"}
      </span>
    </a>
  );

  const customSection = (
    <section className="space-y-8">
      {/* Asset-Light Positioning Rule Callout (Brief page 8) */}
      <div className="rounded-2xl border border-gsy-gold/35 bg-gsy-gold-pale/60 p-6 dark:border-gsy-gold-light/25 dark:bg-gsy-gold-bright/10">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
          <div>
            <h2 className="text-base font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "نموذج تشغيلي مرن وخفيف الأصول: نستأجر السفينة المناسبة لكل شحنة"
                : "Fleet-Flexible & Asset-Light: We charter the right vessel for every cargo"}
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/80">
              {locale === "ar"
                ? "يعمل مكتب التأجير البحري المشترك في دبي على استئجار السفن بالرحلة (Handysize إلى Supramax) وحجز مساحات الحاويات بأسعار الكميات. *ملاحظة: يتم تفعيل خدمات التأجير لأطراف ثالثة بعد تأكيد نطاق الرخصة التجارية في الإمارات."
                : "Our shared chartering desk fixes dry bulk voyages (Handysize to Supramax) and volume container allocations per cargo rather than owning vessels. *Third-party cargo chartering is displayed subject to formal confirmation of UAE trade licence scope."}
            </p>
          </div>
        </div>
      </div>

      {/* Cargoes & Key Ports */}
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-5 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <h3 className="text-lg font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "البضائع التي نشحنها" : "Cargoes Handled"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
            {locale === "ar"
              ? "الأرز، السكر، زيوت الطعام، الأسمدة، المعادن والخامات، الصلب والفلزات، والسلع الاستهلاكية المعبأة في حاويات."
              : "Rice, sugar, edible oils, fertilizer, minerals and ores, steel and metals, and containerised FMCG."}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Rice",
              "Sugar",
              "Edible oils",
              "Fertilizer",
              "Minerals & ores",
              "Steel & metals",
              "Containerised FMCG",
            ].map((cargo) => (
              <span
                key={cargo}
                className="rounded-lg bg-gsy-ivory px-3 py-1.5 text-xs font-bold text-gsy-navy dark:bg-white/10 dark:text-white"
              >
                {cargo}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-7 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <h3 className="flex items-center gap-2 text-lg font-extrabold text-gsy-navy dark:text-white">
            <Anchor className="h-5 w-5 text-gsy-gold" />
            <span>{locale === "ar" ? "الموانئ الرئيسية (8 بوابات بحرية)" : "Key Ports (8 Core Maritime Gateways)"}</span>
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SHIPPING_KEY_PORTS.map((port) => (
              <div
                key={port.name}
                className="rounded-xl border border-gsy-navy/10 bg-gsy-ivory/70 p-3 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-extrabold text-gsy-navy dark:text-white">
                  {port.name}
                </p>
                <p className="text-[11px] font-medium text-gsy-slate dark:text-white/70">
                  {port.country} • {locale === "ar" ? port.region.ar : port.region.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Phase-2 Vessel Tracking Widget Slot (Page 8 note) */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-gsy-navy/25 bg-white p-5 dark:border-white/20 dark:bg-gsy-navy">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gsy-ivory text-gsy-navy dark:bg-white/10 dark:text-gsy-gold-light">
            <Lock className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "بوابة تتبع السفن الحية للعملاء المسجلين (اختياري للمرحلة القادمة)"
                : "Client Vessel-Tracking Widget Slot (Future Logged-In Enhancement)"}
            </p>
            <p className="text-xs text-gsy-slate dark:text-white/75">
              {locale === "ar"
                ? "مساحة مخصصة لربط تتبع الشحنات والرحلات البحرية للمشترين والعملاء المعتمدين فقط."
                : "Reserved widget container per Brief v4 — live cargo tracking visible only to authenticated trade clients."}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-gsy-gold/15 px-3 py-1 text-[11px] font-bold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
          {locale === "ar" ? "توسعة مستقبلية" : "Optional Future Widget"}
        </span>
      </div>
    </section>
  );

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      formVariant="shipping"
      formTitle={
        locale === "ar"
          ? "نموذج طلب عرض سعر شحن بحري"
          : "Request a Freight Quote"
      }
      heroAction={heroAction}
      customSection={customSection}
    />
  );
}

