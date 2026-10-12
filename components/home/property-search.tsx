"use client";

import { useState } from "react";
import { ArrowUpRight, Bed, ChevronDown, Coins, Home, MapPin, Search } from "lucide-react";
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
      {/* Upper Segmented Switcher & Quick Link */}
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="inline-flex p-1 rounded-xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-2xs">
          <button
            type="button"
            onClick={() => setListingType("buy")}
            className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              listingType === "buy"
                ? "bg-navy-950 text-white shadow-xs"
                : "text-neutral-600 hover:text-navy-950 hover:bg-neutral-100/60"
            }`}
          >
            {content.buy}
          </button>
          <button
            type="button"
            onClick={() => setListingType("rent")}
            className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              listingType === "rent"
                ? "bg-navy-950 text-white shadow-xs"
                : "text-neutral-600 hover:text-navy-950 hover:bg-neutral-100/60"
            }`}
          >
            {content.rent}
          </button>
        </div>

        <Link
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-gold-600 transition-colors group"
          href="/properties"
        >
          <span>{content.browse}</span>
          <ArrowUpRight
            size={14}
            className="text-neutral-400 group-hover:text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Main 4-Column Valora Reference Search Console */}
      <form
        action="/properties"
        method="get"
        className="w-full bg-white rounded-2xl p-3 sm:p-3.5 border border-neutral-200/90 shadow-[0_20px_50px_-12px_rgba(12,25,44,0.14)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-0 items-center"
      >
        <input type="hidden" name="listing" value={listingType} />

        {/* 1. Location Input (3 cols) */}
        <div className="lg:col-span-3 group flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-neutral-50/90">
          <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0 border border-gold-100">
            <MapPin size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <label
              htmlFor="home-location"
              className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5"
            >
              {locale === "en" ? "Location" : "Lokasi"}
            </label>
            <input
              id="home-location"
              name="location"
              type="search"
              placeholder={locale === "en" ? "Select Location" : "Pilih Kawasan..."}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-navy-950 placeholder:text-neutral-400 placeholder:font-normal focus:outline-none"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-9 bg-neutral-200/90 mx-auto" aria-hidden="true" />

        {/* 2. Property Type (2.5 cols) */}
        <div className="lg:col-span-2 group flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-neutral-50/90 relative">
          <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0 border border-gold-100">
            <Home size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <label
              htmlFor="home-property-type"
              className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5"
            >
              {locale === "en" ? "Property Type" : "Tipe Properti"}
            </label>
            <div className="relative flex items-center">
              <select
                id="home-property-type"
                name="type"
                defaultValue="all"
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-navy-950 focus:outline-none appearance-none cursor-pointer pr-5 truncate"
              >
                <option value="all">{locale === "en" ? "All Types" : "Semua Tipe"}</option>
                <option value="house">{locale === "en" ? "House" : "Rumah"}</option>
                <option value="apartment">{locale === "en" ? "Apartment" : "Apartemen"}</option>
                <option value="villa">{locale === "en" ? "Villa" : "Vila"}</option>
                <option value="land">{locale === "en" ? "Land" : "Tanah"}</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-0 text-neutral-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-9 bg-neutral-200/90 mx-auto" aria-hidden="true" />

        {/* 3. Price Range (2.5 cols) */}
        <div className="lg:col-span-3 group flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-neutral-50/90 relative">
          <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0 border border-gold-100">
            <Coins size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <label
              htmlFor="home-price-range"
              className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5"
            >
              {locale === "en" ? "Price Range" : "Rentang Harga"}
            </label>
            <div className="relative flex items-center">
              <select
                id="home-price-range"
                name="budget"
                defaultValue="all"
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-navy-950 focus:outline-none appearance-none cursor-pointer pr-5 truncate"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-0 text-neutral-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-9 bg-neutral-200/90 mx-auto" aria-hidden="true" />

        {/* 4. Bedrooms (2 cols) */}
        <div className="lg:col-span-2 group flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-neutral-50/90 relative">
          <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0 border border-gold-100">
            <Bed size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <label
              htmlFor="home-bedrooms"
              className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5"
            >
              {locale === "en" ? "Bedrooms" : "Kamar Tidur"}
            </label>
            <div className="relative flex items-center">
              <select
                id="home-bedrooms"
                name="bedrooms"
                defaultValue="all"
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-navy-950 focus:outline-none appearance-none cursor-pointer pr-5 truncate"
              >
                <option value="all">{locale === "en" ? "Any" : "Semua"}</option>
                <option value="1">1+ KT</option>
                <option value="2">2+ KT</option>
                <option value="3">3+ KT</option>
                <option value="4">4+ KT</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-0 text-neutral-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* 5. Submit Button (1.5 cols) */}
        <div className="lg:col-span-2 lg:pl-2">
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search size={16} />
            <span>{locale === "en" ? "Search Property" : "Cari Properti"}</span>
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
            className="px-2.5 py-1 rounded-md bg-white hover:bg-navy-950 text-neutral-600 hover:text-white border border-neutral-200/70 hover:border-navy-950 transition-all font-medium shadow-2xs"
          >
            {loc}
          </Link>
        ))}
      </div>
    </div>
  );
}
