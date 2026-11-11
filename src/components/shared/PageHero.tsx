import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { Locale } from "@/types/cms";
import { localePath } from "@/lib/i18n";
import { getUiCopy } from "@/data/dictionary";

interface Crumb {
  label: string;
  href?: string;
}

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroSideGallery {
  mainImage: string;
  mainCaption?: string;
  badgeText?: string;
}

interface PageHeroProps {
  locale: Locale;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  showFamilyBadge?: boolean;
  accentColor?: string;
  backgroundImage?: string;
  sideGallery?: HeroSideGallery;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  actions?: React.ReactNode;
}

export function PageHero({
  locale,
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  showFamilyBadge = false,
  accentColor,
  backgroundImage = "/images/dubai-hq.jpg",
  sideGallery,
  primaryCta,
  secondaryCta,
  actions,
}: PageHeroProps) {
  const copy = getUiCopy(locale);
  const Chevron = locale === "ar" ? ChevronLeft : ChevronRight;
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Provide meaningful default CTAs when a page doesn't supply custom ones
  const resolvedPrimary: HeroCta = primaryCta ?? {
    label: copy.partnerWithUs,
    href: "/contact",
  };
  const resolvedSecondary: HeroCta | undefined =
    secondaryCta ??
    (!actions
      ? {
          label: copy.exploreBusinesses,
          href: "/businesses",
        }
      : undefined);

  const renderHref = (href: string) =>
    href.startsWith("#") ? href : localePath(locale, href);

  const resolvedSideGallery: HeroSideGallery = sideGallery ?? {
    mainImage: backgroundImage,
    mainCaption: eyebrow || copy.aGsyGroupCompany,
    badgeText: locale === "ar" ? "منذ 1974 • 25+ دولة" : "Est. 1974 • 25+ Markets",
  };

  return (
    <section
      className="relative overflow-hidden border-b border-gsy-navy/10 bg-gsy-navy text-white dark:border-gsy-gold-light/15 dark:bg-[#050f1e]"
      style={
        accentColor
          ? {
              backgroundColor: accentColor,
            }
          : undefined
      }
    >
      {/* Full-bleed Photographic Hero Backdrop */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: accentColor
              ? `linear-gradient(120deg, ${accentColor}eb 0%, rgba(11,31,58,0.84) 60%, rgba(7,19,36,0.72) 100%)`
              : "linear-gradient(120deg, rgba(7,19,36,0.94) 0%, rgba(11,31,58,0.84) 58%, rgba(11,31,58,0.58) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-11 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-xs text-white/80"
            >
              <Link href={localePath(locale, "/")} className="hover:text-gsy-gold-light">
                {copy.homeLabel}
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <Chevron className="h-3.5 w-3.5 text-white/45" aria-hidden="true" />
                  {crumb.href ? (
                    <Link
                      href={localePath(locale, crumb.href)}
                      className="hover:text-gsy-gold-light"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-gsy-gold-light">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {showFamilyBadge && (
            <Link
              href={localePath(locale, "/about/gsy-family")}
              className="inline-flex items-center gap-1.5 rounded-full border border-gsy-gold-light/40 bg-white/10 px-3 py-1 text-xs font-semibold text-gsy-gold-light backdrop-blur-sm transition hover:bg-white/20"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{copy.aGsyFamilyCompany}</span>
            </Link>
          )}
        </div>

        <div className="mt-5 grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            {eyebrow && (
              <p className="inline-block rounded-full border border-gsy-gold-light/30 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gsy-gold-light backdrop-blur-sm">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15] xl:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
                {subtitle}
              </p>
            )}

            {/* Hero CTA Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {actions ? (
                actions
              ) : (
                <>
                  <Link
                    href={renderHref(resolvedPrimary.href)}
                    className="inline-flex items-center gap-2 rounded-lg bg-gsy-gold-bright px-5 py-3 text-sm font-extrabold text-gsy-navy-deep shadow-lg transition hover:bg-gsy-gold-light"
                  >
                    <span>{resolvedPrimary.label}</span>
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  {resolvedSecondary && (
                    <Link
                      href={renderHref(resolvedSecondary.href)}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                      <span>{resolvedSecondary.label}</span>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gsy-gold-light/30 bg-[#081931] shadow-2xl">
              <Image
                src={resolvedSideGallery.mainImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
