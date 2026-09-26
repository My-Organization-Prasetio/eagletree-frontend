"use client";

import { CircleUserRound, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/layout/brand-mark";
import { copy, resolveLocale } from "@/lib/i18n";

const utilityLinks = [
  { href: "/about", label: "Tentang Eagletree" },
  { href: "/join", label: "Join Eagletree" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/articles", label: "Artikel" },
  { href: "/contact", label: "Kontak" },
];

const navigationLinks = [
  { href: "/for-sale", label: "Dijual" },
  { href: "/for-rent", label: "Disewa" },
  { href: "/properties", label: "Semua Properti" },
  { href: "/new-projects", label: "Proyek Baru" },
  { href: "/mortgage-calculator", label: "KPR" },
  { href: "/find-agent", label: "Cari Agen" },
  { href: "/titip-properti", label: "Titip Properti" },
  { href: "/testimoni", label: "Testimoni" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const content = copy[resolveLocale(searchParams.get("lang") ?? undefined)].header;

  useEffect(() => {
    function handleScroll() {
      setIsTopBarHidden(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isActive(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  }

  return (
    <header className="sticky top-0 z-40 bg-surface-raised border-b border-border-subtle shadow-xs">
      <div
        className={`overflow-hidden border-b border-brand-900 bg-brand-950 text-brand-100 text-xs transition-all duration-300 ${
          isTopBarHidden ? "max-h-0 opacity-0 py-0 border-transparent pointer-events-none" : "max-h-12 opacity-100 py-1.5"
        }`}
        aria-label={content.topBarLabel}
        aria-hidden={isTopBarHidden}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          <p className="text-xs text-brand-100/90 font-medium truncate pr-4">{content.utilityMessage}</p>
          <div className="hidden lg:flex items-center gap-6 text-brand-100/80 shrink-0">
            {utilityLinks.map((link, index) => (
              <Link
                href={link.href}
                key={link.href}
                className="hover:text-white transition-colors"
              >
                {Object.values(content.utilityLinks)[index]}
              </Link>
            ))}
            <span className="inline-flex items-center gap-1.5 font-medium ml-2 text-brand-100/90" aria-label={content.languageLabel}>
              <Link
                className="text-accent-500 font-bold hover:underline"
                href="?lang=id"
                aria-current="true"
              >
                ID
              </Link>
              <span className="text-brand-700" aria-hidden="true">|</span>
              <Link className="hover:text-white transition-colors" href="?lang=en">
                EN
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link
          className="flex items-center shrink-0 focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <BrandMark />
        </Link>

        <nav className="hidden xl:flex items-center gap-1 lg:gap-2" aria-label={content.primaryLabel}>
          {navigationLinks.map((link) => {
            const active = isActive(link.href);
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
                {link.label}
              </Link>
            );
          })}
        </nav>

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
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden border-t border-border-subtle bg-surface-raised transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] py-4 shadow-lg" : "max-h-0 py-0 invisible"
        }`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col gap-1" aria-label={content.mobileLabel}>
          <div className="flex items-center gap-3 pb-3 mb-2 border-b border-border-subtle text-xs font-semibold text-neutral-600" aria-label={content.languageLabel}>
            <span>Bahasa:</span>
            <Link className="text-brand-950 font-bold underline" href="?lang=id" tabIndex={isMenuOpen ? 0 : -1}>
              {content.indonesian}
            </Link>
            <span>•</span>
            <Link className="text-neutral-600 hover:text-brand-950" href="?lang=en" tabIndex={isMenuOpen ? 0 : -1}>
              {content.english}
            </Link>
          </div>
          {navigationLinks.map((link) => {
            const active = isActive(link.href);
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
                {link.label}
              </Link>
            );
          })}
          <Link
            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 rounded-lg mt-2 pt-3 border-t border-border-subtle"
            href="/login"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
          >
            <CircleUserRound size={18} strokeWidth={1.8} aria-hidden="true" />
            {content.login}
          </Link>
          <Link
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-950 text-white text-sm font-semibold hover:bg-brand-900 transition-colors shadow-sm"
            href="/properties"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
          >
            <Search size={17} aria-hidden="true" />
            {content.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
