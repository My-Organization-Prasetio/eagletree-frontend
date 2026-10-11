"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Coins, Home, MapPin, Search } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

type PropertySearchProps = { locale: Locale };

const popularLocations = [
  "Jakarta Selatan",
  "Menteng",
  "Canggu",
  "Ubud",
  "BSD City",
  "Surabaya Barat",
];

export function PropertySearch({ locale }: PropertySearchProps) {
  const content = copy[locale].home.search;
  const [listingType, setListingType] = useState<"buy" | "rent">("buy");

  const budgetOptions =
    locale === "en"
      ? [
          { value: "all", label: "All Budgets" },
          { value: "under-1b", label: "< IDR 1 Billion" },
          { value: "1b-3b", label: "IDR 1 - 3 Billion" },
          { value: "3b-5b", label: "IDR 3 - 5 Billion" },
          { value: "above-5b", label: "> IDR 5 Billion" },
        ]
      : [
          { value: "all", label: "Semua Harga" },
          { value: "under-1b", label: "< Rp 1 Miliar" },
          { value: "1b-3b", label: "Rp 1 M - 3 Miliar" },
          { value: "3b-5b", label: "Rp 3 M - 5 Miliar" },
          { value: "above-5b", label: "> Rp 5 Miliar" },
        ];

  return (
    <div className="w-full flex flex-col">
      {/* Upper Bar: Segmented Transaction Switcher & Quick Navigation */}
      <div className="flex items-center justify-between gap-4 mb-3.5">
        <div className="inline-flex p-1 rounded-xl bg-neutral-200/70 border border-neutral-300/60 shadow-2xs">
          <button
            type="button"
            onClick={() => setListingType("buy")}
            className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              listingType === "buy"
                ? "bg-brand-950 text-white shadow-xs"
                : "text-neutral-600 hover:text-brand-950 hover:bg-white/40"
            }`}
          >
            {content.buy}
          </button>
          <button
            type="button"
            onClick={() => setListingType("rent")}
            className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              listingType === "rent"
                ? "bg-brand-950 text-white shadow-xs"
                : "text-neutral-600 hover:text-brand-950 hover:bg-white/40"
            }`}
          >
            {content.rent}
          </button>
        </div>

        <Link
          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-brand-950 transition-colors group"
          href="/properties"
        >
          <span>{content.browse}</span>
          <ArrowUpRight
            size={14}
            className="text-neutral-400 group-hover:text-brand-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Main Architectural Search Console */}
      <form
        action="/properties"
        method="get"
        className="w-full bg-white rounded-2xl p-2.5 sm:p-3 border border-neutral-200/90 shadow-[0_16px_40px_-12px_rgba(16,45,38,0.08)] flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-0"
      >
        <input type="hidden" name="listing" value={listingType} />

        {/* 1. Location Input */}
        <div className="group flex-1 flex flex-col justify-center px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-neutral-50/80 focus-within:bg-neutral-50/90">
          <label
            htmlFor="home-location"
            className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 group-focus-within:text-accent-700 transition-colors mb-1"
          >
            {content.locationLabel}
          </label>
          <div className="flex items-center gap-2.5">
            <MapPin
              size={16}
              className="text-accent-600 shrink-0 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <input
              id="home-location"
              name="location"
              type="search"
              placeholder={content.locationPlaceholder}
              className="w-full bg-transparent text-sm font-semibold text-brand-950 placeholder:text-neutral-400 placeholder:font-normal focus:outline-none"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-10 bg-neutral-200/80 mx-1 shrink-0" aria-hidden="true" />

        {/* 2. Property Type Select */}
        <div className="group lg:w-56 flex flex-col justify-center px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-neutral-50/80 focus-within:bg-neutral-50/90 relative">
          <label
            htmlFor="home-property-type"
            className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 group-focus-within:text-accent-700 transition-colors mb-1"
          >
            {content.typeLabel}
          </label>
          <div className="relative flex items-center">
            <Home
              size={16}
              className="text-accent-600 shrink-0 mr-2.5 pointer-events-none group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <select
              id="home-property-type"
              name="type"
              defaultValue="all"
              className="w-full bg-transparent text-sm font-semibold text-brand-950 focus:outline-none appearance-none cursor-pointer pr-6"
            >
              <option value="all">{content.anyType}</option>
              <option value="house">{content.house}</option>
              <option value="apartment">{content.apartment}</option>
              <option value="villa">{content.villa}</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-0 text-neutral-400 group-hover:text-accent-700 transition-colors"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-10 bg-neutral-200/80 mx-1 shrink-0" aria-hidden="true" />

        {/* 3. Budget Range Select */}
        <div className="group lg:w-56 flex flex-col justify-center px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-neutral-50/80 focus-within:bg-neutral-50/90 relative">
          <label
            htmlFor="home-price-range"
            className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 group-focus-within:text-accent-700 transition-colors mb-1"
          >
            {locale === "en" ? "Budget Range" : "Kisaran Budget"}
          </label>
          <div className="relative flex items-center">
            <Coins
              size={16}
              className="text-accent-600 shrink-0 mr-2.5 pointer-events-none group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <select
              id="home-price-range"
              name="budget"
              defaultValue="all"
              className="w-full bg-transparent text-sm font-semibold text-brand-950 focus:outline-none appearance-none cursor-pointer pr-6"
            >
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-0 text-neutral-400 group-hover:text-accent-700 transition-colors"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* 4. Submit Search Button */}
        <div className="lg:pl-2 shrink-0">
          <button
            type="submit"
            className="w-full lg:w-auto px-8 py-3.5 rounded-xl bg-brand-950 hover:bg-brand-900 text-white font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-950/20 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search size={16} aria-hidden="true" />
            <span>{content.search}</span>
          </button>
        </div>
      </form>

      {/* Popular Area Chips */}
      <div className="mt-3.5 flex flex-wrap items-center gap-2 px-1 text-xs">
        <span className="text-neutral-400 font-medium">
          {locale === "en" ? "Popular Areas:" : "Area Populer:"}
        </span>
        {popularLocations.map((loc) => (
          <Link
            key={loc}
            href={`/properties?location=${encodeURIComponent(loc)}`}
            className="px-2.5 py-1 rounded-md bg-white hover:bg-brand-950 text-neutral-600 hover:text-white border border-neutral-200/70 hover:border-brand-950 transition-all font-medium shadow-2xs"
          >
            {loc}
          </Link>
        ))}
      </div>
    </div>
  );
}
