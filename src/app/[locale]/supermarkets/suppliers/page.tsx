import React from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { DivisionEnquiryForm } from "@/components/shared/DivisionEnquiryForm";

export default async function SuppliersPage({
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
        eyebrow={locale === "ar" ? "توريد التجزئة" : "GSY Supermarket Group"}
        title={locale === "ar" ? "كن مورداً لمتاجرنا" : "Become a Supplier"}
        subtitle={
          locale === "ar"
            ? "تعاون مع إيليت باسكتس وسوبرماركت جي إس واي وسوبرماركت ماليزيا عبر الإمارات وماليزيا ودول الخليج."
            : "Supply fresh produce, halal proteins, packaged groceries and household essentials across our expanding retail network."
        }
        backgroundImage="/images/noor-al-arab.jpg"
        primaryCta={{
          label: locale === "ar" ? "ابحث عن متاجرنا" : "View Our Stores",
          href: "/supermarkets/stores",
        }}
        secondaryCta={{
          label: locale === "ar" ? "شركاء المتاجر" : "Store Partners",
          href: "/supermarkets/partners",
        }}
        showFamilyBadge
        breadcrumbs={[
          { label: locale === "ar" ? "الأسواق المركزية" : "Supermarkets", href: "/supermarkets" },
          { label: locale === "ar" ? "كن مورداً" : "Become a Supplier" },
        ]}
      />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <DivisionEnquiryForm
          locale={locale}
          variant="supplier"
          title={locale === "ar" ? "نموذج تسجيل الموردين" : "Retail Supplier Onboarding Form"}
          subtitle={
            locale === "ar"
              ? "أرفق تفاصيل الشركة وفئة المنتجات والشهادات والكتالوج."
              : "Submit your company details, product categories, quality certifications and product catalogue."
          }
          routeTarget={locale === "ar" ? "فريق مشتريات التجزئة" : "Retail Buying Team"}
        />
      </section>
    </div>
  );
}

