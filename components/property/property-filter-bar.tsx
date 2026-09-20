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
    <div className="w-full bg-surface-raised rounded-2xl border border-border-subtle shadow-md p-4 sm:p-5 flex flex-col gap-4">
      {/* Top Controls Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
        {/* Search input */}
        <div className="flex-1 relative flex items-center min-w-[240px]">
          <Search size={16} className="absolute left-3.5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari nama, kota, atau kawasan..."
            value={filters.query ?? ""}
            onChange={(e) => onFilterChange({ query: e.target.value })}
            className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50/80 border border-border-subtle rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all"
          />
        </div>

        {/* Transaction Tab (Semua / Dijual / Disewa) */}
        <div className="flex items-center p-1 bg-neutral-100 rounded-xl border border-border-subtle shrink-0">
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
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  active
                    ? "bg-brand-950 text-white shadow-xs"
                    : "text-neutral-600 hover:text-brand-950"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Property Type Dropdown */}
        <div className="relative shrink-0 min-w-[140px]">
          <select
            value={filters.type ?? "all"}
            onChange={(e) => onFilterChange({ type: e.target.value as PropertyType | "all" })}
            className="w-full pl-3.5 pr-8 py-2.5 bg-neutral-50/80 border border-border-subtle rounded-xl text-xs font-semibold text-neutral-800 focus:outline-none focus:border-brand-800 cursor-pointer appearance-none"
          >
            {propertyTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute right-3 top-3.5 text-neutral-500" />
        </div>

        {/* Price Range Dropdown / Popover Toggle */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => {
              setIsPriceOpen(!isPriceOpen);
              setIsMoreOpen(false);
            }}
            className={`flex items-center justify-between gap-2 px-3.5 py-2.5 border rounded-xl text-xs font-semibold transition-colors cursor-pointer w-full lg:w-auto ${
              filters.minPrice || filters.maxPrice
                ? "bg-brand-50 border-brand-800/40 text-brand-950"
                : "bg-neutral-50/80 border-border-subtle text-neutral-800 hover:bg-neutral-100"
            }`}
          >
            <span>
              {filters.minPrice || filters.maxPrice
                ? `Rp ${(filters.minPrice || 0) / 1e9}M - ${filters.maxPrice ? (filters.maxPrice / 1e9) + "M" : "Max"}`
                : "Kisaran Harga"}
            </span>
            <ChevronDown size={14} className="text-neutral-500" />
          </button>

          {isPriceOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 p-4 bg-surface-raised border border-border-subtle rounded-2xl shadow-xl z-30 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Rentang Harga (Rp)</span>
                <button
                  type="button"
                  onClick={() => setIsPriceOpen(false)}
                  className="text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X size={14} />
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
                    className="w-full px-2.5 py-1.5 bg-neutral-50 border border-border-subtle rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-neutral-500 block mb-1">Maks (Rp)</label>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice || ""}
                    onChange={(e) => onFilterChange({ maxPrice: e.target.value ? Number(e.target.value) : null })}
                    className="w-full px-2.5 py-1.5 bg-neutral-50 border border-border-subtle rounded-lg text-xs"
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
                    className="px-2 py-1 text-[10px] font-medium rounded-md bg-brand-50 text-brand-900 hover:bg-brand-100 transition-colors cursor-pointer"
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
          <span className="text-xs font-medium text-neutral-500 mr-1">KT:</span>
          {bedroomOptions.map((opt) => {
            const isSelected = filters.minBedrooms === opt.value || (!filters.minBedrooms && opt.value === null);
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => onFilterChange({ minBedrooms: opt.value })}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-brand-950 text-white border-brand-950 shadow-xs"
                    : "bg-surface-raised text-neutral-600 border-border-subtle hover:border-brand-800"
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
            className={`flex items-center gap-1.5 px-3.5 py-2.5 border rounded-xl text-xs font-semibold transition-colors cursor-pointer w-full lg:w-auto justify-center ${
              filters.minBathrooms
                ? "bg-brand-50 border-brand-800/40 text-brand-950"
                : "bg-neutral-50/80 border-border-subtle text-neutral-800 hover:bg-neutral-100"
            }`}
          >
            <Filter size={14} />
            <span>Filter Lainnya</span>
            {filters.minBathrooms && (
              <span className="w-4 h-4 rounded-full bg-brand-950 text-white text-[10px] flex items-center justify-center font-bold">
                1
              </span>
            )}
          </button>

          {isMoreOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-surface-raised border border-border-subtle rounded-2xl shadow-xl z-30 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Kamar Mandi</span>
                <button
                  type="button"
                  onClick={() => setIsMoreOpen(false)}
                  className="text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
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
                      className={`py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer text-center ${
                        isSelected
                          ? "bg-brand-950 text-white border-brand-950"
                          : "bg-white text-neutral-600 border-border-subtle hover:border-brand-800"
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
            className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-neutral-500 hover:text-red-600 transition-colors cursor-pointer shrink-0"
            title="Reset semua filter"
          >
            <RotateCcw size={13} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

      {/* Row 2: Active Filter Chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-subtle/70">
          <span className="text-xs text-neutral-500 font-medium">Filter Aktif:</span>
          {filters.query && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-lg text-xs font-medium text-brand-950">
              &quot;{filters.query}&quot;
              <button
                type="button"
                onClick={() => onFilterChange({ query: "" })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {filters.type && filters.type !== "all" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-lg text-xs font-medium text-brand-950">
              Tipe: {filters.type}
              <button
                type="button"
                onClick={() => onFilterChange({ type: "all" })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {filters.listingType && filters.listingType !== initialListingType && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-lg text-xs font-medium text-brand-950">
              {filters.listingType === "buy" ? "Dijual" : "Disewa"}
              <button
                type="button"
                onClick={() => onFilterChange({ listingType: initialListingType })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {filters.minPrice && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-lg text-xs font-medium text-brand-950">
              Min Rp {(filters.minPrice / 1e9).toFixed(1)} M
              <button
                type="button"
                onClick={() => onFilterChange({ minPrice: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {filters.maxPrice && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-lg text-xs font-medium text-brand-950">
              Maks Rp {(filters.maxPrice / 1e9).toFixed(1)} M
              <button
                type="button"
                onClick={() => onFilterChange({ maxPrice: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {filters.minBedrooms && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-lg text-xs font-medium text-brand-950">
              {filters.minBedrooms}+ KT
              <button
                type="button"
                onClick={() => onFilterChange({ minBedrooms: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {filters.minBathrooms && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-lg text-xs font-medium text-brand-950">
              {filters.minBathrooms}+ KM
              <button
                type="button"
                onClick={() => onFilterChange({ minBathrooms: null })}
                className="hover:text-red-500 cursor-pointer"
              >
                <X size={12} />
              </button>
            </span>
          )}
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-accent-700 hover:text-accent-600 underline font-semibold ml-1 cursor-pointer"
          >
            Hapus Semua
          </button>
        </div>
      )}
    </div>
  );
}
