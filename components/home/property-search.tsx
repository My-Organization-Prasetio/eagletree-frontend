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
      <div className="flex items-center gap-1 p-1 bg-brand-950/80 backdrop-blur-md rounded-lg border border-white/15 mb-3">
        <button
          type="button"
          onClick={() => setListingType("buy")}
          className={`px-5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
            listingType === "buy"
              ? "bg-accent-500 text-brand-950"
              : "text-neutral-300 hover:text-white"
          }`}
        >
          {content.buy}
        </button>
        <button
          type="button"
          onClick={() => setListingType("rent")}
          className={`px-5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
            listingType === "rent"
              ? "bg-accent-500 text-brand-950"
              : "text-neutral-300 hover:text-white"
          }`}
        >
          {content.rent}
        </button>
      </div>

      {/* Floating Architectural Search Form */}
      <form
        className="w-full bg-white rounded-xl p-2.5 sm:p-3 shadow-xl border border-neutral-200 flex flex-col md:flex-row items-stretch gap-2 text-foreground"
        action="/properties"
        method="get"
      >
        <input type="hidden" name="listing" value={listingType} />

        {/* Location Input */}
        <div className="flex-1 flex flex-col text-left px-3.5 py-2 rounded-lg bg-neutral-50 border border-neutral-200 focus-within:bg-white focus-within:border-brand-950 transition-colors">
          <label
            htmlFor="home-location"
            className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-0.5"
          >
            {content.locationLabel}
          </label>
          <div className="flex items-center gap-2 text-neutral-900">
            <MapPin className="text-accent-700 shrink-0" size={15} aria-hidden="true" />
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
        <div className="md:w-44 flex flex-col text-left px-3.5 py-2 rounded-lg bg-neutral-50 border border-neutral-200 focus-within:bg-white focus-within:border-brand-950 transition-colors relative">
          <label
            htmlFor="home-property-type"
            className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-0.5"
          >
            {content.typeLabel}
          </label>
          <div className="relative flex items-center">
            <select
              id="home-property-type"
              name="type"
              defaultValue="all"
              className="w-full bg-transparent text-sm font-semibold focus:outline-none appearance-none cursor-pointer pr-5 text-neutral-900"
            >
              <option value="all">{content.anyType}</option>
              <option value="house">{content.house}</option>
              <option value="apartment">{content.apartment}</option>
              <option value="villa">{content.villa}</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-0 top-1 text-neutral-500"
              size={14}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="md:w-48 flex flex-col text-left px-3.5 py-2 rounded-lg bg-neutral-50 border border-neutral-200 focus-within:bg-white focus-within:border-brand-950 transition-colors relative">
          <label
            htmlFor="home-price-range"
            className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-0.5"
          >
            Kisaran Budget
          </label>
          <div className="relative flex items-center">
            <select
              id="home-price-range"
              name="budget"
              defaultValue="all"
              className="w-full bg-transparent text-sm font-semibold focus:outline-none appearance-none cursor-pointer pr-5 text-neutral-900"
            >
              <option value="all">Semua Harga</option>
              <option value="under-1b">&lt; Rp 1 Miliar</option>
              <option value="1b-3b">Rp 1 M - 3 Miliar</option>
              <option value="3b-5b">Rp 3 M - 5 Miliar</option>
              <option value="above-5b">&gt; Rp 5 Miliar</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-0 top-1 text-neutral-500"
              size={14}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Submit Search Button */}
        <button
          className="md:self-stretch px-6 py-2.5 rounded-lg bg-brand-950 hover:bg-brand-900 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0 cursor-pointer"
          type="submit"
        >
          <Search size={16} aria-hidden="true" />
          <span>{content.search}</span>
        </button>

        {/* Browse Link */}
        <Link
          className="hidden xl:flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-neutral-600 hover:text-brand-950 transition-colors shrink-0 whitespace-nowrap self-center"
          href="/properties"
        >
          <span>{content.browse}</span>
          <ArrowUpRight size={13} aria-hidden="true" />
        </Link>
      </form>
    </div>
  );
}
