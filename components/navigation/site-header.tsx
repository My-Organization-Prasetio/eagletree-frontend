"use client";

import { CircleUserRound, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/layout/brand-mark";
import { copy, resolveLocale } from "@/lib/i18n";

const utilityLinks = [
  { href: "/about", label: "Tentang Eagletree", key: "about" },
  { href: "/join", label: "Join Eagletree", key: "join" },
  { href: "/prestasi", label: "Prestasi", key: "achievements" },
  { href: "/articles", label: "Artikel", key: "articles" },
  { href: "/contact", label: "Kontak", key: "contact" },
];

const navigationLinks = [
  { href: "/for-sale", label: "Dijual", enLabel: "For Sale" },
  { href: "/for-rent", label: "Disewa", enLabel: "For Rent" },
  { href: "/properties", label: "Semua Properti", enLabel: "All Properties" },
  { href: "/new-projects", label: "Proyek Baru", enLabel: "New Projects" },
  { href: "/mortgage-calculator", label: "KPR", enLabel: "Mortgage" },
  { href: "/find-agent", label: "Cari Agen", enLabel: "Find Agent" },
  { href: "/titip-properti", label: "Titip Properti", enLabel: "List Property" },
  { href: "/testimoni", label: "Testimoni", enLabel: "Testimonials" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = resolveLocale(searchParams.get("lang") ?? undefined);
  const content = copy[currentLocale].header;

  useEffect(() => {
    function handleScroll() {
      // Keep topbar always visible on mobile/tablet viewports (< 1024px)
      if (window.innerWidth < 1024) {
        setIsTopBarHidden(false);
      } else {
        setIsTopBarHidden(window.scrollY > 24);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Automatically close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, searchParams]);

  function isActive(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  }

  return (
    <header className="sticky top-0 z-40 bg-surface-raised border-b border-border-subtle shadow-xs">
      {/* Topbar: Always visible on mobile, auto-hides on desktop scroll */}
      <div
        className={`border-b border-brand-900 bg-brand-950 text-brand-100 text-xs transition-all duration-300 ${
          isTopBarHidden
            ? "max-h-0 opacity-0 py-0 border-transparent pointer-events-none overflow-hidden"
            : "max-h-16 opacity-100 py-1.5 sm:py-2"
        }`}
        aria-label={content.topBarLabel}
        aria-hidden={isTopBarHidden}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-3">
          <p className="text-xs text-brand-100/90 font-medium truncate">
            {content.utilityMessage}
          </p>

          {/* Mobile Right: Compact Language Switcher */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0 text-xs font-semibold" aria-label={content.languageLabel}>
            <Link
              className={`px-1.5 py-0.5 rounded transition-colors ${
                currentLocale === "id"
                  ? "text-accent-500 font-bold bg-white/10"
                  : "text-brand-100/70 hover:text-white"
              }`}
              href="?lang=id"
              aria-current={currentLocale === "id" ? "true" : undefined}
            >
              ID
            </Link>
            <span className="text-brand-700 select-none" aria-hidden="true">|</span>
            <Link
              className={`px-1.5 py-0.5 rounded transition-colors ${
                currentLocale === "en"
                  ? "text-accent-500 font-bold bg-white/10"
                  : "text-brand-100/70 hover:text-white"
              }`}
              href="?lang=en"
              aria-current={currentLocale === "en" ? "true" : undefined}
            >
              EN
            </Link>
          </div>

          {/* Desktop Right: Utility Links + Language Switcher */}
          <div className="hidden lg:flex items-center gap-6 text-brand-100/80 shrink-0">
            {utilityLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="hover:text-white transition-colors"
              >
                {content.utilityLinks[link.key as keyof typeof content.utilityLinks] ?? link.label}
              </Link>
            ))}
            <span className="inline-flex items-center gap-1.5 font-medium ml-2 text-brand-100/90" aria-label={content.languageLabel}>
              <Link
                className={`transition-colors ${currentLocale === "id" ? "text-accent-500 font-bold underline" : "hover:text-white"}`}
                href="?lang=id"
                aria-current={currentLocale === "id" ? "true" : undefined}
              >
                ID
              </Link>
              <span className="text-brand-700" aria-hidden="true">|</span>
              <Link
                className={`transition-colors ${currentLocale === "en" ? "text-accent-500 font-bold underline" : "hover:text-white"}`}
                href="?lang=en"
                aria-current={currentLocale === "en" ? "true" : undefined}
              >
                EN
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link
          className="flex items-center shrink-0 focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <BrandMark />
        </Link>

        {/* Desktop Primary Nav */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-2" aria-label={content.primaryLabel}>
          {navigationLinks.map((link) => {
            const active = isActive(link.href);
            const label = currentLocale === "en" ? link.enLabel : link.label;
            return (
              <Link
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "text-brand-950 font-semibold bg-brand-50 shadow-xs"
                    : "text-neutral-700 hover:text-brand-950 hover:bg-neutral-100/80"
                }`}
                href={link.href}
                key={link.href}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full text-neutral-700 hover:text-brand-950 hover:bg-neutral-100 transition-colors border border-transparent hover:border-border-subtle"
            href="/login"
            aria-label={content.login}
            title={content.login}
          >
            <CircleUserRound size={22} strokeWidth={1.8} aria-hidden="true" />
          </Link>
          <button
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-700 hover:text-brand-950 hover:bg-neutral-100 transition-colors border border-border-subtle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? content.closeMenu : content.openMenu}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with vertical scrolling */}
      <div
        className={`xl:hidden border-t border-border-subtle bg-surface-raised transition-all duration-300 ${
          isMenuOpen
            ? "max-h-[calc(100dvh-5rem)] sm:max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain py-4 shadow-xl"
            : "max-h-0 py-0 invisible overflow-hidden pointer-events-none"
        }`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col gap-1 pb-6" aria-label={content.mobileLabel}>
          {/* Language Selection Row */}
          <div className="flex items-center gap-3 pb-3 mb-2 border-b border-border-subtle text-xs font-semibold text-neutral-600" aria-label={content.languageLabel}>
            <span>{currentLocale === "en" ? "Language:" : "Bahasa:"}</span>
            <Link
              className={`px-2.5 py-1 rounded transition-colors ${
                currentLocale === "id"
                  ? "bg-brand-950 text-white font-bold"
                  : "text-neutral-600 hover:text-brand-950 hover:bg-neutral-100"
              }`}
              href="?lang=id"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {content.indonesian}
            </Link>
            <span>•</span>
            <Link
              className={`px-2.5 py-1 rounded transition-colors ${
                currentLocale === "en"
                  ? "bg-brand-950 text-white font-bold"
                  : "text-neutral-600 hover:text-brand-950 hover:bg-neutral-100"
              }`}
              href="?lang=en"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {content.english}
            </Link>
          </div>

          {/* Primary Navigation Links */}
          <div className="flex flex-col gap-0.5">
            {navigationLinks.map((link) => {
              const active = isActive(link.href);
              const label = currentLocale === "en" ? link.enLabel : link.label;
              return (
                <Link
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-950 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-950"
                  }`}
                  href={link.href}
                  key={link.href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Company & Utility Information Links */}
          <div className="pt-2.5 mt-2 border-t border-border-subtle flex flex-col gap-0.5">
            <span className="px-3 py-1 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
              {currentLocale === "en" ? "Company & Information" : "Informasi & Layanan"}
            </span>
            {utilityLinks.map((link) => {
              const active = isActive(link.href);
              const label = content.utilityLinks[link.key as keyof typeof content.utilityLinks] ?? link.label;
              return (
                <Link
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-950 font-semibold"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-brand-950"
                  }`}
                  href={link.href}
                  key={link.href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Actions: Masuk & Cari Properti CTA */}
          <div className="pt-3 mt-2 border-t border-border-subtle flex flex-col gap-2">
            <Link
              className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors border border-border-subtle"
              href="/login"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
            >
              <CircleUserRound size={18} strokeWidth={1.8} aria-hidden="true" />
              {content.login}
            </Link>
            <Link
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-950 text-white text-sm font-semibold hover:bg-brand-900 transition-colors shadow-sm active:scale-[0.99]"
              href="/properties"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
            >
              <Search size={16} aria-hidden="true" />
              {content.cta}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
