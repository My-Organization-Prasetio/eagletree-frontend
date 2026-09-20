"use client";

import { useSearchParams } from "next/navigation";
import { resolveLocale } from "@/lib/i18n";

export function SkipLink() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? undefined);

  return (
    <a
      className="fixed top-3 left-3 z-50 -translate-y-[200%] focus:translate-y-0 rounded-md bg-brand-950 text-white px-3.5 py-2.5 text-sm font-semibold shadow-md transition-transform duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-500"
      href="#main-content"
    >
      {locale === "id" ? "Lewati ke konten" : "Skip to content"}
    </a>
  );
}