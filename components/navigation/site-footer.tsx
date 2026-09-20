"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BrandMark } from "@/components/layout/brand-mark";
import { copy, resolveLocale } from "@/lib/i18n";

export function SiteFooter() {
  const searchParams = useSearchParams();
  const content = copy[resolveLocale(searchParams.get("lang") ?? undefined)].footer;

  return (
    <footer className="bg-white text-neutral-600 pt-16 pb-12 border-t border-border-subtle">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link href="/" aria-label={content.label} className="inline-block focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md">
            <BrandMark />
          </Link>
          <p className="text-sm leading-relaxed text-neutral-600 max-w-md">
            {content.description}
          </p>
        </div>

        <nav className="md:col-span-4 flex flex-col gap-3" aria-label={content.explore}>
          <p className="text-brand-950 font-bold text-base tracking-wide">{content.explore}</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/for-sale" className="text-neutral-600 hover:text-accent-700 transition-colors">
                Properti Dijual
              </Link>
            </li>
            <li>
              <Link href="/for-rent" className="text-neutral-600 hover:text-accent-700 transition-colors">
                Properti Disewa
              </Link>
            </li>
            <li>
              <Link href="/properties" className="text-neutral-600 hover:text-accent-700 transition-colors">
                {content.properties}
              </Link>
            </li>
            <li>
              <Link href="/mortgage-calculator" className="text-neutral-600 hover:text-accent-700 transition-colors">
                {content.kpr}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3 flex flex-col gap-3">
          <p className="text-brand-950 font-bold text-base tracking-wide">{content.enquiries}</p>
          <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
            {content.contact}
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Eagletree. {content.copyright}</p>
        <p className="text-accent-700 font-semibold">{content.tagline}</p>
      </div>
    </footer>
  );
}
