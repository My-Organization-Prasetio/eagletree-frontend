"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Coins, Home, MapPin, Search } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

type PropertySearchProps = { locale: Locale };

export function PropertySearch({ locale }: PropertySearchProps) {
  const content = copy[locale].home.search;
  const [listingType, setListingType] = useState<"buy" | "rent">("buy");

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      {/* Transaction Switcher Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-brand-950/50 backdrop-blur-lg rounded-2xl border border-white/20 mb-3 shadow-lg">
        <button
          type="button"
          onClick={() => setListingType("buy")}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            listingType === "buy"
              ? "bg-accent-500 text-brand-950 shadow-md scale-100"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
        >
          {content.buy}
        </button>
        <button
          type="button"
          onClick={() => setListingType("rent")}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            listingType === "rent"
              ? "bg-accent-500 text-brand-950 shadow-md scale-100"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
        >
          {content.rent}
        </button>
      </div>

      {/* Floating Glassmorphic Search Form */}
      <form
        className="w-full bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_16px_48px_rgba(201,154,85,0.15),_0_8px_24px_rgba(16,45,38,0.12)] border border-neutral-200/80 flex flex-col md:flex-row items-stretch gap-2.5 text-foreground"
        action="/properties"
        method="get"
      >
        <input type="hidden" name="listing" value={listingType} />

        {/* Location Input */}
        <div className="group flex-1 flex flex-col text-left px-4 py-2.5 rounded-2xl bg-neutral-50/80 hover:bg-white border border-neutral-200 hover:border-accent-500/60 focus-within:border-brand-800 focus-within:ring-2 focus-within:ring-brand-800/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
          <label
            htmlFor="home-location"
            className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-0.5"
          >
            {content.locationLabel}
          </label>
          <div className="flex items-center gap-2 text-neutral-900">
            <MapPin className="text-accent-600 group-hover:text-accent-500 shrink-0 transition-colors" size={16} aria-hidden="true" />
            <input
              id="home-location"
              name="location"
              type="search"
              placeholder={content.locationPlaceholder}
              className="w-full bg-transparent text-sm font-semibold placeholder:text-neutral-400 placeholder:font-normal focus:outline-none"
            />
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="group md:w-44 flex flex-col text-left px-4 py-2.5 rounded-2xl bg-neutral-50/80 hover:bg-white border border-neutral-200 hover:border-accent-500/60 focus-within:border-brand-800 focus-within:ring-2 focus-within:ring-brand-800/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative">
          <label
            htmlFor="home-property-type"
            className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-0.5"
          >
            {content.typeLabel}
          </label>
          <div className="relative flex items-center">
            <Home className="text-accent-600 group-hover:text-accent-500 shrink-0 mr-1.5 hidden sm:inline transition-colors" size={15} aria-hidden="true" />
            <select
              id="home-property-type"
              name="type"
              defaultValue="all"
              className="w-full bg-transparent text-sm font-semibold focus:outline-none appearance-none cursor-pointer pr-6 text-neutral-900"
            >
              <option value="all">{content.anyType}</option>
              <option value="house">{content.house}</option>
              <option value="apartment">{content.apartment}</option>
              <option value="villa">{content.villa}</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-0 top-1 text-neutral-500 group-hover:text-accent-600 transition-colors"
              size={15}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="group md:w-48 flex flex-col text-left px-4 py-2.5 rounded-2xl bg-neutral-50/80 hover:bg-white border border-neutral-200 hover:border-accent-500/60 focus-within:border-brand-800 focus-within:ring-2 focus-within:ring-brand-800/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative">
          <label
            htmlFor="home-price-range"
            className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-0.5"
          >
            Kisaran Budget
          </label>
          <div className="relative flex items-center">
            <Coins className="text-accent-600 group-hover:text-accent-500 shrink-0 mr-1.5 hidden sm:inline transition-colors" size={15} aria-hidden="true" />
            <select
              id="home-price-range"
              name="budget"
              defaultValue="all"
              className="w-full bg-transparent text-sm font-semibold focus:outline-none appearance-none cursor-pointer pr-6 text-neutral-900"
            >
              <option value="all">Semua Harga</option>
              <option value="under-1b">&lt; Rp 1 Miliar</option>
              <option value="1b-3b">Rp 1 M - 3 Miliar</option>
              <option value="3b-5b">Rp 3 M - 5 Miliar</option>
              <option value="above-5b">&gt; Rp 5 Miliar</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-0 top-1 text-neutral-500 group-hover:text-accent-600 transition-colors"
              size={15}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Submit Search Button */}
        <button
          className="md:self-stretch px-7 py-3 rounded-2xl bg-brand-950 hover:bg-brand-900 text-white font-bold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg shrink-0 cursor-pointer"
          type="submit"
        >
          <Search size={17} aria-hidden="true" />
          <span>{content.search}</span>
        </button>

        {/* Browse Link */}
        <Link
          className="hidden xl:flex items-center justify-center gap-1 px-3 py-2 text-xs font-bold text-neutral-600 hover:text-brand-950 transition-colors shrink-0 whitespace-nowrap self-center"
          href="/properties"
        >
          <span>{content.browse}</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </form>
    </div>
  );
}
