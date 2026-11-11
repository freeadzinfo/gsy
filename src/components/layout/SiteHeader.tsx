"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Globe,
  Menu,
  Moon,
  Sun,
  X,
  ArrowRight,
  ArrowLeft,
  Building2,
} from "lucide-react";
import { Locale } from "@/types/cms";
import { MAIN_NAVIGATION, SITE_SETTINGS } from "@/data/site-settings";
import { getUiCopy } from "@/data/dictionary";
import { localePath, t } from "@/lib/i18n";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname() || `/${locale}`;
  const copy = getUiCopy(locale);
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeMegaId, setActiveMegaId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const closeAllMenus = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMegaId(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    setActiveMegaId(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMegaId(null);
        setMobileOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMegaId(null);
        setMobileOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
      } else {
        setActiveMegaId(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("gsy-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("gsy-theme", "light");
    }
  };

  const switchedLocalePath = (targetLocale: Locale) => {
    const stripped = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "";
    return `/${targetLocale}${stripped}`;
  };

  const openMega = (id: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMegaId(id);
  };

  const scheduleCloseMega = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaId(null);
    }, 150);
  };

  const activeNav = MAIN_NAVIGATION.find((n) => n.id === activeMegaId);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">
      <div className="relative z-10 border-b border-gsy-navy/10 bg-white transition-colors dark:border-gsy-gold-light/15 dark:bg-gsy-navy-deep">
        {/* Top Corporate Utility & Demo Notice Bar */}
      <div className="bg-gsy-navy text-xs text-white/90 dark:bg-[#040c18]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded bg-gsy-gold-bright/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gsy-gold-light">
              {copy.demoPlaceholderTag}
            </span>
            <span className="hidden truncate text-[11px] text-white/80 md:inline">
              {copy.demoBanner}
            </span>
            <span className="text-[11px] text-white/85 md:hidden">
              {locale === "ar" ? "نموذج عرض جي إس واي • موجز الإدارة v4" : "GSY Management Brief v4 Demo"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={localePath(locale, "/about/gsy-family")}
              className="hidden items-center gap-1 text-[11px] font-medium text-gsy-gold-light transition hover:text-white sm:inline-flex"
            >
              <Building2 className="h-3 w-3" />
              <span>{locale === "ar" ? "عائلة جي إس واي" : "The GSY Family"}</span>
            </Link>

            <span className="hidden h-3 w-px bg-white/20 sm:inline-block" aria-hidden="true" />

            {/* Language Switcher EN / AR */}
            <div className="flex items-center gap-1 rounded border border-white/15 bg-white/5 px-1.5 py-0.5">
              <Globe className="h-3 w-3 text-gsy-gold-light" aria-hidden="true" />
              <Link
                href={switchedLocalePath("en")}
                className={`px-1 py-0.5 text-[11px] font-semibold transition ${
                  locale === "en" ? "text-gsy-gold-light underline underline-offset-2" : "text-white/75 hover:text-white"
                }`}
                hrefLang="en"
              >
                EN
              </Link>
              <span className="text-white/30">/</span>
              <Link
                href={switchedLocalePath("ar")}
                className={`px-1 py-0.5 text-[11px] font-semibold transition ${
                  locale === "ar" ? "text-gsy-gold-light underline underline-offset-2" : "text-white/75 hover:text-white"
                }`}
                hrefLang="ar"
              >
                العربية
              </Link>
            </div>

            {/* Light / Dark Mode Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
              className="inline-flex items-center gap-1 rounded border border-white/15 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/90 transition hover:bg-white/15"
            >
              {isDark ? <Sun className="h-3 w-3 text-gsy-gold-light" /> : <Moon className="h-3 w-3 text-gsy-gold-light" />}
              <span className="hidden sm:inline">
                {isDark ? (locale === "ar" ? "نهاري" : "Light") : locale === "ar" ? "ليلي" : "Dark"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 xl:py-0 xl:px-8">
        {/* Official Brand Logo */}
        <Link
          href={localePath(locale, "/")}
          onClick={closeAllMenus}
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg py-0.5 focus-visible:outline-none sm:gap-3 xl:py-2"
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-gsy-gold/25 bg-white p-0.5 shadow-sm sm:h-11 sm:w-11">
            <Image
              src="/images/gsy-logo.jpg"
              alt="GSY International Group Official Logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-tight text-gsy-navy dark:text-white sm:text-base">
              {locale === "ar" ? "جي إس واي الدولية" : "GSY INTERNATIONAL"}
            </span>
            <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-gsy-gold dark:text-gsy-gold-light sm:tracking-[0.16em]">
              {locale === "ar" ? "مجموعة الشركات" : "GROUP OF COMPANIES"}
            </span>
          </div>
        </Link>

        {/* Desktop 9-Category Navigation */}
        <nav aria-label={locale === "ar" ? "القائمة الرئيسية" : "Main navigation"} className="hidden min-w-0 xl:block">
          <ul className="flex items-center gap-0.5 2xl:gap-1">
            {MAIN_NAVIGATION.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const itemHref = localePath(locale, item.href);
              const isCurrent =
                pathname === itemHref ||
                (item.href !== "/" && pathname.startsWith(itemHref + "/"));
              const isOpen = activeMegaId === item.id;

              return (
                <li
                  key={item.id}
                  className="py-2.5"
                  onMouseEnter={() => (hasChildren ? openMega(item.id) : setActiveMegaId(null))}
                  onMouseLeave={() => hasChildren && scheduleCloseMega()}
                >
                  {hasChildren ? (
                    <div className="flex items-center">
                      <Link
                        href={itemHref}
                        onClick={closeAllMenus}
                        onFocus={() => openMega(item.id)}
                        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[12.5px] font-semibold transition 2xl:px-3 2xl:text-[13px] ${
                          isCurrent || isOpen
                            ? "bg-gsy-navy/5 text-gsy-gold dark:bg-white/10 dark:text-gsy-gold-light"
                            : "text-gsy-navy/85 hover:bg-gsy-navy/5 hover:text-gsy-navy dark:text-white/85 dark:hover:bg-white/5 dark:hover:text-white"
                        }`}
                      >
                        <span>{t(item.label, locale)}</span>
                      </Link>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={`Toggle ${item.label.en} menu`}
                        onClick={() => setActiveMegaId(isOpen ? null : item.id)}
                        className="-ms-1.5 inline-flex shrink-0 items-center rounded p-1 text-gsy-navy/60 hover:text-gsy-gold dark:text-white/60 dark:hover:text-gsy-gold-light"
                      >
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={itemHref}
                      onClick={closeAllMenus}
                      className={`inline-flex items-center whitespace-nowrap rounded-md px-2 py-2 text-[12.5px] font-semibold transition 2xl:px-3 2xl:text-[13px] ${
                        isCurrent
                          ? "bg-gsy-navy/5 text-gsy-gold dark:bg-white/10 dark:text-gsy-gold-light"
                          : "text-gsy-navy/85 hover:bg-gsy-navy/5 hover:text-gsy-navy dark:text-white/85 dark:hover:bg-white/5 dark:hover:text-white"
                      }`}
                    >
                      {t(item.label, locale)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile & Tablet Menu Trigger (Icon-Only) */}
        <div className="flex shrink-0 items-center xl:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={
              locale === "ar"
                ? mobileOpen
                  ? "إغلاق القائمة"
                  : "فتح القائمة"
                : mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gsy-navy/15 bg-gsy-ivory text-gsy-navy transition hover:bg-gsy-gold-pale dark:border-white/15 dark:bg-gsy-navy-mid dark:text-white dark:hover:bg-white/10"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        </div>
      </div>

      {/* Viewport Backdrop Scrim below sticky header */}
      {((activeNav && activeNav.children) || mobileOpen) && (
        <div
          aria-hidden="true"
          onClick={closeAllMenus}
          onMouseEnter={() => activeMegaId && scheduleCloseMega()}
          className="fixed inset-0 z-0 bg-gsy-navy/40 backdrop-blur-[1px]"
        />
      )}

      {/* Desktop Mega Menu Panel — docked directly below header matching header background */}
      {activeNav && activeNav.children && (
        <div
          onMouseEnter={() => openMega(activeNav.id)}
          onMouseLeave={scheduleCloseMega}
          className="absolute inset-x-0 top-full z-20 hidden max-h-[calc(100dvh-7.5rem)] w-full overflow-y-auto overscroll-contain border-b border-gsy-navy/15 bg-white shadow-2xl dark:border-gsy-gold-light/20 dark:bg-gsy-navy-deep xl:block"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-6 xl:px-8">
            <div className="col-span-4 flex flex-col justify-between rounded-xl border border-gsy-navy/10 bg-gsy-ivory p-5 dark:border-white/10 dark:bg-gsy-navy">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gsy-gold dark:text-gsy-gold-light">
                  {t(SITE_SETTINGS.companyName, locale)}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-gsy-navy dark:text-white">
                  {t(activeNav.label, locale)}
                </h3>
                {activeNav.description && (
                  <p className="mt-2 text-sm leading-relaxed text-gsy-slate dark:text-white/75">
                    {t(activeNav.description, locale)}
                  </p>
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={localePath(
                    locale,
                    activeNav.featuredCta ? activeNav.featuredCta.href : activeNav.href
                  )}
                  onClick={closeAllMenus}
                  className="inline-flex items-center gap-2 rounded-lg bg-gsy-navy px-4 py-2 text-xs font-semibold text-white transition hover:bg-gsy-navy-mid dark:bg-gsy-gold-bright dark:text-gsy-navy-deep dark:hover:bg-gsy-gold-light"
                >
                  <span>
                    {activeNav.featuredCta
                      ? t(activeNav.featuredCta.label, locale)
                      : copy.learnMore}
                  </span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="col-span-8 grid grid-cols-2 gap-3 2xl:grid-cols-3">
              {activeNav.children.map((sub) => (
                <Link
                  key={sub.href}
                  href={localePath(locale, sub.href)}
                  onClick={closeAllMenus}
                  className="group rounded-xl border border-transparent bg-gsy-ivory/60 p-3.5 transition hover:border-gsy-gold/30 hover:bg-white hover:shadow-sm dark:bg-white/5 dark:hover:border-gsy-gold-light/30 dark:hover:bg-white/10"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-gsy-navy group-hover:text-gsy-gold dark:text-white dark:group-hover:text-gsy-gold-light">
                      {t(sub.label, locale)}
                    </span>
                    {sub.badge && (
                      <span className="shrink-0 rounded-full bg-gsy-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gsy-gold dark:bg-gsy-gold-bright/20 dark:text-gsy-gold-light">
                        {t(sub.badge, locale)}
                      </span>
                    )}
                  </div>
                  {sub.description && (
                    <p className="mt-1 text-xs leading-relaxed text-gsy-slate dark:text-white/70">
                      {t(sub.description, locale)}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile & Tablet Navigation Drawer — docked directly below header */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-20 max-h-[calc(100dvh-6.25rem)] w-full overflow-y-auto overscroll-contain border-b border-gsy-navy/15 bg-white px-4 py-4 shadow-2xl sm:px-6 dark:border-gsy-gold-light/20 dark:bg-gsy-navy-deep xl:hidden">
          <nav
            aria-label={locale === "ar" ? "القائمة المحمولة" : "Mobile Navigation"}
            className="mx-auto max-w-3xl space-y-2"
          >
            {MAIN_NAVIGATION.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = mobileExpandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-lg border border-gsy-navy/10 bg-gsy-ivory/50 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={localePath(locale, item.href)}
                      onClick={closeAllMenus}
                      className="flex-1 px-4 py-3 text-sm font-bold text-gsy-navy dark:text-white"
                    >
                      {t(item.label, locale)}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setMobileExpandedId(isExpanded ? null : item.id)}
                        aria-expanded={isExpanded}
                        aria-label={`Expand ${item.label.en}`}
                        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-3 text-gsy-navy/70 hover:text-gsy-gold dark:text-white/70 dark:hover:text-gsy-gold-light"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <div className="grid gap-1.5 border-t border-gsy-navy/10 p-2.5 sm:grid-cols-2 dark:border-white/10">
                      {item.children!.map((sub) => (
                        <Link
                          key={sub.href}
                          href={localePath(locale, sub.href)}
                          onClick={closeAllMenus}
                          className="block rounded-md px-3 py-2 text-xs font-medium text-gsy-slate hover:bg-white hover:text-gsy-gold dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-gsy-gold-light"
                        >
                          {t(sub.label, locale)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

