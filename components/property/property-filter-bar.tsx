"use client";

import { useState } from "react";
import { Check, ChevronDown, Filter, RotateCcw, Search, X } from "lucide-react";
import type { PropertyFilters, PropertySortOption, PropertyType } from "@/types/property";

type PropertyFilterBarProps = {
  filters: PropertyFilters;
  onFilterChange: (updated: Partial<PropertyFilters>) => void;
  onReset: () => void;
  initialListingType?: "all" | "buy" | "rent";
};

const propertyTypes: { label: string; value: PropertyType | "all" }[] = [
  { label: "Semua Tipe", value: "all" },
  { label: "Rumah", value: "House" },
  { label: "Apartemen", value: "Apartment" },
  { label: "Vila", value: "Villa" },
  { label: "Tanah", value: "Land" },
];

const bedroomOptions = [
  { label: "Semua", value: null },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
];

const bathroomOptions = [
  { label: "Semua", value: null },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
];

const pricePresets = [
  { label: "< 1 M", min: 0, max: 1000000000 },
  { label: "1 M - 3 M", min: 1000000000, max: 3000000000 },
  { label: "3 M - 5 M", min: 3000000000, max: 5000000000 },
  { label: "> 5 M", min: 5000000000, max: 0 },
];

export function PropertyFilterBar({
  filters,
  onFilterChange,
  onReset,
  initialListingType = "all",
}: PropertyFilterBarProps) {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const activeFilterCount =
    (filters.query ? 1 : 0) +
    (filters.type && filters.type !== "all" ? 1 : 0) +
    (filters.listingType && filters.listingType !== initialListingType ? 1 : 0) +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0) +
    (filters.minBedrooms ? 1 : 0) +
    (filters.minBathrooms ? 1 : 0);

  return (
    <div className="w-full bg-white rounded-xl border border-neutral-200/80 shadow-2xs p-3.5 sm:p-4 flex flex-col gap-3">
      {/* Top Controls Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5">
        {/* Search input */}
        <div className="flex-1 relative flex items-center min-w-[220px]">
          <Search size={15} className="absolute left-3.5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari lokasi, kawasan, atau nama proyek..."
            value={filters.query ?? ""}
            onChange={(e) => onFilterChange({ query: e.target.value })}
            className="w-full pl-9 pr-3.5 py-2 bg-neutral-50/70 border border-neutral-200 rounded-lg text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
          />
        </div>

        {/* Transaction Tab (Semua / Dijual / Disewa) */}
        <div className="flex items-center p-0.5 bg-neutral-100/90 rounded-lg border border-neutral-200/80 shrink-0">
          {[
            { label: "Semua", value: "all" },
            { label: "Dijual", value: "buy" },
            { label: "Disewa", value: "rent" },
          ].map((tab) => {
            const active = (filters.listingType ?? "all") === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => onFilterChange({ listingType: tab.value as "all" | "buy" | "rent" })}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  active
                    ? "bg-brand-950 text-white shadow-2xs"
                    : "text-neutral-600 hover:text-brand-950"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Property Type Dropdown */}
        <div className="relative shrink-0 min-w-[130px]">
          <select
            value={filters.type ?? "all"}
            onChange={(e) => onFilterChange({ type: e.target.value as PropertyType | "all" })}
            className="w-full pl-3 pr-8 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 focus:outline-none focus:border-brand-900 cursor-pointer appearance-none"
          >
            {propertyTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown size={13} className="pointer-events-none absolute right-3 top-3 text-neutral-400" />
        </div>

        {/* Price Range Dropdown / Popover Toggle */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => {
              setIsPriceOpen(!isPriceOpen);
              setIsMoreOpen(false);
            }}
            className={`flex items-center justify-between gap-2 px-3 py-2 border rounded-lg text-xs font-medium transition-colors cursor-pointer w-full lg:w-auto ${
              filters.minPrice || filters.maxPrice
                ? "bg-brand-50 border-brand-900/30 text-brand-950"
                : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
            }`}
          >
            <span>
              {filters.minPrice || filters.maxPrice
                ? `Rp ${(filters.minPrice || 0) / 1e9}M - ${filters.maxPrice ? (filters.maxPrice / 1e9) + "M" : "Max"}`
                : "Kisaran Harga"}
            </span>
            <ChevronDown size={13} className="text-neutral-400" />
          </button>

          {isPriceOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-72 p-3.5 bg-white border border-neutral-200 rounded-xl shadow-lg z-30 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Rentang Anggaran</span>
                <button
                  type="button"
                  onClick={() => setIsPriceOpen(false)}
                  className="text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X size={13} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-neutral-500 block mb-1">Min (Rp)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={filters.minPrice || ""}
                    onChange={(e) => onFilterChange({ minPrice: e.target.value ? Number(e.target.value) : null })}
                    className="w-full px-2.5 py-1.5 bg-neutral-50/70 border border-neutral-200 rounded-md text-xs focus:outline-none focus:border-brand-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-neutral-500 block mb-1">Maks (Rp)</label>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice || ""}
                    onChange={(e) => onFilterChange({ maxPrice: e.target.value ? Number(e.target.value) : null })}
                    className="w-full px-2.5 py-1.5 bg-neutral-50/70 border border-neutral-200 rounded-md text-xs focus:outline-none focus:border-brand-900"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-1 pt-1">
                {pricePresets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      onFilterChange({ minPrice: preset.min, maxPrice: preset.max || null });
                      setIsPriceOpen(false);
                    }}
                    className="px-2 py-0.5 text-[10px] font-medium rounded bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bedroom Selector */}
        <div className="hidden sm:flex items-center gap-1 shrink-0">
          <span className="text-xs text-neutral-400 mr-1">KT:</span>
          {bedroomOptions.map((opt) => {
            const isSelected = filters.minBedrooms === opt.value || (!filters.minBedrooms && opt.value === null);
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => onFilterChange({ minBedrooms: opt.value })}
                className={`px-2 py-1 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-brand-950 text-white border-brand-950"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* More Filters Toggle */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => {
              setIsMoreOpen(!isMoreOpen);
              setIsPriceOpen(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-2 border rounded-lg text-xs font-medium transition-colors cursor-pointer w-full lg:w-auto justify-center ${
              filters.minBathrooms
                ? "bg-brand-50 border-brand-900/30 text-brand-950"
                : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
            }`}
          >
            <Filter size={13} />
            <span>Filter Lain</span>
            {filters.minBathrooms && (
              <span className="w-4 h-4 rounded-full bg-brand-950 text-white text-[10px] flex items-center justify-center font-bold">
                1
              </span>
            )}
          </button>

          {isMoreOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-60 p-3.5 bg-white border border-neutral-200 rounded-xl shadow-lg z-30 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Kamar Mandi</span>
                <button
                  type="button"
                  onClick={() => setIsMoreOpen(false)}
                  className="text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X size={13} />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {bathroomOptions.map((opt) => {
                  const isSelected = filters.minBathrooms === opt.value || (!filters.minBathrooms && opt.value === null);
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => {
                        onFilterChange({ minBathrooms: opt.value });
                        setIsMoreOpen(false);
                      }}
                      className={`py-1 text-xs font-medium rounded-md border transition-colors cursor-pointer text-center ${
                        isSelected
                          ? "bg-brand-950 text-white border-brand-950"
                          : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Reset Button */}
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer shrink-0"
            title="Reset semua filter"
          >
            <RotateCcw size={12} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

      {/* Row 2: Active Filter Chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-100">
          <span className="text-[11px] text-neutral-400">Filter Aktif:</span>
          {filters.query && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-800">
              &quot;{filters.query}&quot;
              <button
                type="button"
                onClick={() => onFilterChange({ query: "" })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={11} />
              </button>
            </span>
          )}
          {filters.type && filters.type !== "all" && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-800">
              Tipe: {filters.type}
              <button
                type="button"
                onClick={() => onFilterChange({ type: "all" })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={11} />
              </button>
            </span>
          )}
          {filters.listingType && filters.listingType !== initialListingType && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-800">
              {filters.listingType === "buy" ? "Dijual" : "Disewa"}
              <button
                type="button"
                onClick={() => onFilterChange({ listingType: initialListingType })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={11} />
              </button>
            </span>
          )}
          {filters.minPrice && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-800">
              Min Rp {(filters.minPrice / 1e9).toFixed(1)} M
              <button
                type="button"
                onClick={() => onFilterChange({ minPrice: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={11} />
              </button>
            </span>
          )}
          {filters.maxPrice && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-800">
              Maks Rp {(filters.maxPrice / 1e9).toFixed(1)} M
              <button
                type="button"
                onClick={() => onFilterChange({ maxPrice: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={11} />
              </button>
            </span>
          )}
          {filters.minBedrooms && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-800">
              {filters.minBedrooms}+ KT
              <button
                type="button"
                onClick={() => onFilterChange({ minBedrooms: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={11} />
              </button>
            </span>
          )}
          {filters.minBathrooms && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-800">
              {filters.minBathrooms}+ KM
              <button
                type="button"
                onClick={() => onFilterChange({ minBathrooms: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={11} />
              </button>
            </span>
          )}
          <button
            type="button"
            onClick={onReset}
            className="text-[11px] text-accent-700 hover:text-accent-600 underline font-medium ml-1 cursor-pointer"
          >
            Hapus Semua
          </button>
        </div>
      )}
    </div>
  );
}
