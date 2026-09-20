"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { resolveLocale } from "@/lib/i18n";

export function LocaleDocument() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const locale = resolveLocale(searchParams.get("lang") ?? undefined);
    document.documentElement.lang = locale;
    document.title = locale === "en"
      ? "Find a place to belong | Eagletree"
      : "Temukan tempat untuk pulang | Eagletree";
  }, [searchParams]);

  return null;
}
