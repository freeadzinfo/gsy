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
        {locale === "ar" ? "طلب عرض سعر شحن" : "Request a Freight Quote"}
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
                ? "السفينة المناسبة لكل شحنة • نموذج تشغيلي خفيف الأصول"
                : "The Right Vessel for Every Cargo • Asset-Light Operating Model"}
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-gsy-slate sm:text-sm dark:text-white/80">
              {locale === "ar"
                ? "تتولى جي إس واي للشحن والتأجير البحري تنسيق تأجير السفن ومتطلبات الشحن لبضائع مختارة. ويقوم نموذجنا التشغيلي على أساس خفيف الأصول وقائم على استئجار السفن بالرحلة، حيث تُستأجر السفن وفق متطلبات الشحنة (دون ادعاء ملكية أي سفن). *خدمات تأجير السفن لأطراف ثالثة مشروطة بتأكيد توفر الخدمة والتراخيص اللازمة."
                : "GSY Shipping & Chartering coordinates vessel chartering and freight requirements for selected cargoes. Our operating model is asset-light and voyage-based, with vessels chartered according to cargo requirements (no owned vessels claimed). *Third-party cargo chartering is supported subject to confirmation of service availability and applicable licensing."}
            </p>
          </div>
        </div>
      </div>

      {/* Cargo Categories & Port Network */}
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-5 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <h3 className="text-lg font-extrabold text-gsy-navy dark:text-white">
            {locale === "ar" ? "فئات البضائع" : "Cargo Categories"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/80">
            {locale === "ar"
              ? "تدعم أنشطة الشحن والتأجير لدينا فئات بضائع مختارة، تشمل:"
              : "Our shipping and chartering activities support selected cargo categories, including:"}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { en: "Rice", ar: "الأرز" },
              { en: "Sugar", ar: "السكر" },
              { en: "Edible oils", ar: "زيوت الطعام" },
              { en: "Fertilizer", ar: "الأسمدة" },
              { en: "Minerals and ores", ar: "المعادن والخامات" },
              { en: "Steel and metals", ar: "الصلب والفلزات" },
              { en: "Containerised FMCG", ar: "السلع الاستهلاكية المعبأة في حاويات" },
            ].map((cargo) => (
              <span
                key={cargo.en}
                className="rounded-lg bg-gsy-ivory px-3 py-1.5 text-xs font-bold text-gsy-navy dark:bg-white/10 dark:text-white"
              >
                {locale === "ar" ? cargo.ar : cargo.en}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gsy-navy/10 bg-white p-6 shadow-card lg:col-span-7 dark:border-gsy-gold-light/15 dark:bg-gsy-navy">
          <h3 className="flex items-center gap-2 text-lg font-extrabold text-gsy-navy dark:text-white">
            <Anchor className="h-5 w-5 text-gsy-gold" />
            <span>{locale === "ar" ? "شبكة الموانئ" : "Port Network"}</span>
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
            {locale === "ar"
              ? "تشير مذكرة الإدارة إلى الموانئ التالية ضمن شبكة الشحن:"
              : "The management brief references the following ports within the shipping network:"}
          </p>
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
          <p className="mt-3 text-[11px] text-gsy-slate/80 dark:text-white/60">
            {locale === "ar"
              ? "تعتمد تغطية الخدمة وتوافرها على الشحنة المحددة والمسار والترتيبات التشغيلية."
              : "Service coverage and availability depend on the specific cargo, route and operational arrangements."}
          </p>
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
                ? "بوابة تتبع السفن للعملاء المسجلين (اختياري للمرحلة القادمة)"
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
      heroEyebrow={
        locale === "ar"
          ? "السفينة المناسبة لكل شحنة"
          : "The Right Vessel for Every Cargo"
      }
      heroTitle={locale === "ar" ? "الشحن والتأجير البحري" : "Shipping & Chartering"}
      heroSubtitle={
        locale === "ar"
          ? "تنسيق حركة البضائع من المنشأ حتى التفريغ عبر تأجير السفن بالرحلة وحلول الشحن البحري."
          : "Coordinating cargo movement from origin to discharge through voyage chartering and freight solutions."
      }
      primaryCta={{
        label: locale === "ar" ? "طلب عرض سعر شحن" : "Request a Freight Quote",
        href: "#enquiry-form",
      }}
      whatWeDoTitle={
        locale === "ar"
          ? "خدمات الشحن والتأجير البحري"
          : "Our Shipping & Chartering Services"
      }
      whatWeDoIntro={
        locale === "ar"
          ? "تتولى جي إس واي للشحن والتأجير البحري تنسيق تأجير السفن ومتطلبات الشحن لبضائع مختارة. ويقوم نموذجنا التشغيلي على أساس خفيف الأصول وقائم على استئجار السفن بالرحلة، حيث تُستأجر السفن وفق متطلبات الشحنة. ينصب تركيزنا على تنسيق مسار الشحنة بالكامل، بدءاً من اختيار السفينة وعمليات التحميل وصولاً إلى متابعة سير الرحلة والتفريغ."
          : "GSY Shipping & Chartering coordinates vessel chartering and freight requirements for selected cargoes. Our operating model is asset-light and voyage-based, with vessels chartered according to cargo requirements. We focus on coordinating the cargo journey, from vessel selection and loading to voyage progress and discharge."
      }
      howWeWorkTitle={locale === "ar" ? "عملية الشحن لدينا" : "Our Shipping Process"}
      whoWeServeTitle={
        locale === "ar"
          ? "لماذا جي إس واي للشحن والتأجير"
          : "Why GSY Shipping & Chartering"
      }
      complianceTitle={
        locale === "ar"
          ? "الامتثال والمعايير التشغيلية"
          : "Operational Compliance & Standards"
      }
      complianceSubtitle={
        locale === "ar"
          ? "يلتزم مكتب التأجير البحري بمعايير فحص وامتثال وانضباط تشغيلي صارمة عبر كافة مسارات الشحن:"
          : "Our shipping and chartering operations maintain strict compliance and operational discipline across all corridors:"
      }
      formVariant="shipping"
      formTitle={
        locale === "ar"
          ? "طلب عرض سعر شحن"
          : "Request a Freight Quote"
      }
      formSubtitle={
        locale === "ar"
          ? "شارك متطلبات الشحن الخاصة بك مع فريقنا. يُرجى تقديم نوع الشحنة، الكمية، موانئ التحميل والتفريغ، وتواريخ فترة الجاهزية المتوقعة لمراجعة الطلب."
          : "Share your cargo and shipping requirements with our team. Provide the cargo type, quantity, loading and discharge ports, and expected laycan dates so that the requirement can be reviewed."
      }
      formSubmitLabel={
        locale === "ar" ? "طلب عرض سعر شحن" : "Request a Freight Quote"
      }
      heroAction={heroAction}
      customSection={customSection}
    />
  );
}

