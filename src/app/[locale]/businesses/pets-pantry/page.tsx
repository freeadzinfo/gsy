import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ShoppingBag,
  ExternalLink,
  Sparkles,
  Dog,
  Cat,
  Fish,
  Cookie,
  Package,
  Layers,
} from "lucide-react";
import { isValidLocale, t } from "@/lib/i18n";
import { BUSINESS_DIVISIONS } from "@/data/businesses";
import { DivisionTemplate } from "@/components/businesses/DivisionTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "بيتس بانتري | أغذية ومستلزمات الحيوانات الأليفة في الإمارات | مجموعة جي إس واي الدولية"
      : "Pets Pantry | Pet Food & Supplies UAE | GSY International Group",
    description: isAr
      ? "اكتشف بيتس بانتري، إحدى شركات عائلة جي إس واي المتخصصة في أغذية ومستلزمات الحيوانات الأليفة في الإمارات. استكشف الاحتياجات اليومية للحيوانات الأليفة."
      : "Discover Pets Pantry, a GSY Family business offering pet food and supplies in the UAE. Explore everyday essentials for companion animals.",
    alternates: {
      canonical: `/${locale}/businesses/pets-pantry`,
      languages: {
        en: "/en/businesses/pets-pantry",
        ar: "/ar/businesses/pets-pantry",
      },
    },
  };
}

export default async function PetsPantryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === "pets-pantry")!;

  const heroAction = (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="https://petspantry.ae/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light"
      >
        <ShoppingBag className="h-4 w-4" />
        <span>{locale === "ar" ? "استكشف بيتس بانتري" : "Explore Pets Pantry"}</span>
        <ExternalLink className="h-3.5 w-3.5 opacity-75" />
      </a>
      <a
        href="#enquiry-form"
        className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/20"
      >
        <span>{locale === "ar" ? "أرسل استفساراً" : "Send an Enquiry"}</span>
      </a>
    </div>
  );

  const productCategories = [
    {
      id: "dog",
      title: { en: "Dog Products", ar: "منتجات الكلاب" },
      desc: {
        en: "Wholesome dry foods, wet foods, dental chews, everyday leashes, bowls and health essentials for dogs of all breeds and sizes.",
        ar: "أطعمة جافة ورطبة مغذية، ومضغات للأسنان، وأطواق وأوعية طعام ومستلزمات صحية أساسية للكلاب بمختلف السلالات والأعمار.",
      },
      icon: Dog,
      tag: { en: "Canine Nutrition & Care", ar: "تغذية ورعاية الكلاب" },
    },
    {
      id: "cat",
      title: { en: "Cat Products", ar: "منتجات القطط" },
      desc: {
        en: "Tailored feline nutrition, moisture-rich meals, daily litter supplies, scratching posts, toys and gentle care accessories.",
        ar: "تغذية مخصصة للقطط، ووجبات غنية، ومستلزمات الرمل اليومية، وأعمدة الخدش، وألعاب وإكسسوارات العناية اللطيفة.",
      },
      icon: Cat,
      tag: { en: "Feline Nutrition & Living", ar: "تغذية ومستلزمات القطط" },
    },
    {
      id: "fish-bird",
      title: { en: "Fish and Bird Products", ar: "منتجات الأسماك والطيور" },
      desc: {
        en: "Complete fish flakes, sinking pellets, aquarium water conditioners, nutritious bird seeds, cage feeders and daily habitat accessories.",
        ar: "رقائق أسماك وحبيبات متوازنة، ومحسنات بيئة الأحواض، وبذور طيور مغذية، ومغذيات أقفاص ومستلزمات بيئية يومية.",
      },
      icon: Fish,
      tag: { en: "Aquatics & Aviary Care", ar: "رعاية الأسماك والطيور" },
    },
    {
      id: "pet-food",
      title: { en: "Pet Food", ar: "أغذية الحيوانات الأليفة" },
      desc: {
        en: "Balanced daily meals crafted with quality proteins, vitamins and essential minerals to support vitality, digestion and coat health.",
        ar: "وجبات يومية متوازنة معدة ببروتينات وفيتامينات ومعادن أساسية لدعم النشاط والهضم وصحة الفراء.",
      },
      icon: Package,
      tag: { en: "Balanced Daily Nutrition", ar: "تغذية يومية متوازنة" },
    },
    {
      id: "treats",
      title: { en: "Treats", ar: "المكافآت والأطعمة الخفيفة" },
      desc: {
        en: "Delicious training rewards, functional dental snacks and wholesome bites designed for daily bonding and positive reinforcement.",
        ar: "مكافآت تدريب لذيذة، ووجبات خفيفة للأسنان، ولقيمات صحية مخصصة للتدريب وتعزيز الترابط اليومي.",
      },
      icon: Cookie,
      tag: { en: "Training & Rewards", ar: "التدريب والمكافآت" },
    },
    {
      id: "accessories",
      title: { en: "Accessories", ar: "المستلزمات والإكسسوارات" },
      desc: {
        en: "Durable everyday collars, leashes, travel carriers, feeding bowls, cozy bedding and interactive lifestyle accessories.",
        ar: "أطواق ومقود متينة، وحقائب نقل آمنة، وأوعية تغذية، ومفارش مريحة، وإكسسوارات تفاعلية للحياة اليومية.",
      },
      icon: Layers,
      tag: { en: "Everyday Lifestyle Essentials", ar: "احتياجات الحياة اليومية" },
    },
    {
      id: "grooming",
      title: { en: "Grooming and Care Products", ar: "منتجات العناية والنظافة" },
      desc: {
        en: "Gentle pet shampoos, conditioning sprays, hygiene wipes, deshedding brushes, nail clippers and routine hygiene solutions.",
        ar: "شامبوهات لطيفة، وبخاخات ترطيب، ومناديل نظافة، وفرش إزالة الوبر، ومقصات أظافر، ومحاليل العناية اليومية.",
      },
      icon: Sparkles,
      tag: { en: "Hygiene & Wellness", ar: "النظافة والصحة العامة" },
    },
  ];

  const customSection = (
    <div className="space-y-12">
      {/* Product Categories Section */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gsy-gold dark:text-gsy-gold-light">
              {locale === "ar" ? "كتالوج الفئات المعتمدة" : "Approved Product Range"}
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-gsy-navy dark:text-white">
              {locale === "ar"
                ? "فئات المنتجات لرعاية الحيوانات الأليفة"
                : "Product Categories for Companion Animals"}
            </h2>
          </div>
          <a
            href="https://petspantry.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold hover:underline dark:text-gsy-gold-light"
          >
            <span>{locale === "ar" ? "زيارة متجر petspantry.ae" : "Visit petspantry.ae"}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-gsy-slate dark:text-white/80">
          {locale === "ar"
            ? "نلبي احتياجات مربي الحيوانات الأليفة في دولة الإمارات العربية المتحدة عبر تشكيلة منسقة تغطي التغذية الصحية، والمكافآت، والمستلزمات، وأدوات العناية اليومية."
            : "Serving pet owners across the UAE with a carefully curated catalogue covering wholesome daily nutrition, treats, essential accessories, and routine grooming care."}
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group flex flex-col justify-between rounded-2xl border border-gsy-navy/10 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-gsy-gold/40 dark:border-gsy-gold-light/15 dark:bg-gsy-navy"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gsy-ivory text-gsy-navy dark:bg-white/10 dark:text-gsy-gold-light">
                      <Icon className="h-5 w-5 text-gsy-gold dark:text-gsy-gold-light" />
                    </div>
                    <span className="rounded-full bg-gsy-ivory px-2.5 py-0.5 text-[10px] font-bold text-gsy-slate dark:bg-white/5 dark:text-white/70">
                      {t(cat.tag, locale)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-gsy-navy dark:text-white">
                    {t(cat.title, locale)}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(cat.desc, locale)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gsy-navy/5 dark:border-white/5">
                  <a
                    href="https://petspantry.ae/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gsy-gold transition group-hover:text-gsy-navy dark:text-gsy-gold-light dark:group-hover:text-white"
                  >
                    <span>{locale === "ar" ? "تصفح في المتجر" : "Explore on petspantry.ae"}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Official Website Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gsy-navy p-6 text-white shadow-card sm:p-8 dark:bg-[#061224]">
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 max-w-xl">
            <span className="rounded-full bg-gsy-gold-bright/20 px-3 py-0.5 text-[11px] font-bold text-gsy-gold-light">
              {locale === "ar" ? "المتجر الإلكتروني الرسمي" : "Official UAE Pet Care Store"}
            </span>
            <h3 className="text-xl font-extrabold text-white">
              {locale === "ar"
                ? "تسوق مستلزمات حيوانك الأليف عبر petspantry.ae"
                : "Shop Companion Animal Essentials at petspantry.ae"}
            </h3>
            <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
              {locale === "ar"
                ? "تفضل بزيارة موقع بيتس بانتري للاطلاع على التشكيلة الكاملة من أطعمة ومستلزمات الكلاب، القطط، الطيور، وأسماك الزينة في دولة الإمارات العربية المتحدة."
                : "Visit the official Pets Pantry platform to explore the complete range of dog, cat, bird, and aquatic supplies available for companion animal owners in the UAE."}
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://petspantry.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gsy-gold-bright px-6 py-3 text-xs font-extrabold text-gsy-navy-deep transition hover:bg-gsy-gold-light shadow-md"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>{locale === "ar" ? "زيارة متجر بيتس بانتري" : "Visit Pets Pantry Online"}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <DivisionTemplate
      locale={locale}
      division={division}
      heroEyebrow={
        locale === "ar"
          ? "إحدى شركات عائلة جي إس واي"
          : "A GSY Family Business"
      }
      heroTitle={
        locale === "ar"
          ? "بيتس بانتري – الاحتياجات اليومية للحيوانات الأليفة"
          : "Pets Pantry – Everyday Essentials for Pets"
      }
      heroSubtitle={
        locale === "ar"
          ? "تعد بيتس بانتري إحدى شركات عائلة جي إس واي، حيث تقدم أغذية ومستلزمات الحيوانات الأليفة في دولة الإمارات العربية المتحدة. ونلبي احتياجات مربي الحيوانات الأليفة الباحثين عن المنتجات والاحتياجات اليومية لرعاية حيواناتهم الأليفة."
          : "Pets Pantry is part of the GSY Family, offering pet food and supplies in the UAE. We serve pet owners looking for products and everyday essentials for their companion animals."
      }
      primaryCta={{
        label: locale === "ar" ? "استكشف بيتس بانتري" : "Explore Pets Pantry",
        href: "https://petspantry.ae/",
      }}
      secondaryCta={{
        label: locale === "ar" ? "أرسل استفساراً" : "Send an Enquiry",
        href: "#enquiry-form",
      }}
      whatWeDoTitle={
        locale === "ar"
          ? "فئات المنتجات والخدمات"
          : "Product Range & Pet Care Focus"
      }
      whatWeDoIntro={
        locale === "ar"
          ? "تقدم بيتس بانتري تشكيلة متكاملة من الأغذية والمستلزمات اليومية لرعاية الحيوانات الأليفة المنزلية في دولة الإمارات العربية المتحدة، مع التركيز على الجودة والتغذية المتوازنة والمستلزمات الأساسية."
          : "Pets Pantry offers a comprehensive selection of pet food and daily supplies for companion animals across the UAE, prioritizing wholesome nutrition, dependable quality and everyday care."
      }
      whoWeServeTitle={locale === "ar" ? "الجهات التي نخدمها" : "Who We Serve"}
      howWeWorkTitle={locale === "ar" ? "نهجنا في التوريد والجودة" : "Our Approach to Pet Care"}
      complianceTitle={
        locale === "ar"
          ? "معايير الجودة والسلامة"
          : "Quality & Standards Commitment"
      }
      complianceSubtitle={
        locale === "ar"
          ? "الالتزام بأعلى معايير سلامة الأغذية والمستلزمات للحيوانات الأليفة في دولة الإمارات:"
          : "Adherence to highest standards of pet food safety and product care in the UAE:"
      }
      formVariant="division"
      formTitle={
        locale === "ar"
          ? "تواصل مع فريق بيتس بانتري"
          : "Contact the Pets Pantry Team"
      }
      formSubtitle={
        locale === "ar"
          ? "هل لديك استفسار حول منتجات الحيوانات الأليفة أو التوريد أو الشراكات في الإمارات؟ شارك تفاصيل طلبك مع فريقنا المختص."
          : "Have questions about pet supplies, retail listings, or product partnerships in the UAE? Share your details with our dedicated team."
      }
      formSubmitLabel={
        locale === "ar" ? "إرسال الاستفسار" : "Submit Enquiry"
      }
      heroAction={heroAction}
      customSection={customSection}
    />
  );
}
