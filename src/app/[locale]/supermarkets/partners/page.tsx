import React from "react";
import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export default async function StorePartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div className="bg-gsy-ivory dark:bg-gsy-navy-deep">
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "تطوير شبكة المتاجر" : "GSY Supermarket Group • 5 → 50 Outlets"}
        title={locale === "ar" ? "شركاء المتاجر والمواقع" : "Store Partners"}
        subtitle={
          locale === "ar"
            ? "للمستثمرين وملاك العقارات: اقتراح مواقع جديدة أو شراكات التوسع في الإمارات وماليزيا ودول الخليج."
            : "For investors and commercial landlords: propose retail sites or express interest in store expansion partnerships."
        }
        backgroundImage="/images/dubai-hq.jpg"
        primaryCta={{
          label: locale === "ar" ? "شراكات المستثمرين" : "Investor Partnership Tracks",
          href: "/investors/partner-with-gsy",
        }}
        secondaryCta={{
          label: locale === "ar" ? "محدد مواقع المتاجر" : "Explore Existing Stores",
          href: "/supermarkets/stores",
        }}
        showFamilyBadge
        breadcrumbs={[
          { label: locale === "ar" ? "الأسواق المركزية" : "Supermarkets", href: "/supermarkets" },
          { label: locale === "ar" ? "شركاء المتاجر" : "Store Partners" },
        ]}
      />

      <section className="mx-auto max-w-4xl space-y-6 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 rounded-xl border border-gsy-gold/30 bg-gsy-gold-pale/60 p-4 text-xs leading-relaxed text-gsy-navy dark:border-gsy-gold-light/25 dark:bg-gsy-gold-bright/10 dark:text-white/90">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gsy-gold dark:text-gsy-gold-light" />
          <span>
            {locale === "ar"
              ? "ملاحظة: وفق سياسة الإدارة، تبقى تفاصيل الهياكل الاستثمارية (SPV) والعوائد المالية غير منشورة للعامة وتُشارك بشكل خاص بعد تقديم طلب الشراكة."
              : "Management confidentiality note: store-investor terms (SPV structure and projected returns) are kept off public pages and shared privately upon enquiry."}
          </span>
        </div>

        <DivisionEnquiryForm
          locale={locale}
          variant="store-partner"
          title={locale === "ar" ? "نموذج اهتمام شركاء المتاجر" : "Store Partners Enquiry Form"}
          subtitle={
            locale === "ar"
              ? "يُوجَّه مباشرة إلى فريق تطوير التجزئة في مجموعة أسواق جي إس واي."
              : "Collects landlord site proposals and store partnership interest for private follow-up."
          }
          routeTarget={locale === "ar" ? "فريق تطوير التجزئة" : "Retail Development Team"}
        />
      </section>
    </div>
  );
}

