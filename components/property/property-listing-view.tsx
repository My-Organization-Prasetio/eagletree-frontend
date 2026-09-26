"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { PropertyFilterBar } from "@/components/property/property-filter-bar";
import { PropertyCard } from "@/components/property/property-card";
import { filterProperties } from "@/lib/mock-data";
import type { PropertyFilters, PropertySortOption } from "@/types/property";
import type { Locale } from "@/lib/i18n";

type PropertyListingViewProps = {
  initialFilters?: Partial<PropertyFilters>;
  title: string;
  subtitle: string;
  locale?: Locale;
};

export function PropertyListingView({
  initialFilters = {},
  title,
  subtitle,
  locale = "id",
}: PropertyListingViewProps) {
  const [filters, setFilters] = useState<PropertyFilters>({
    listingType: initialFilters.listingType ?? "all",
    type: initialFilters.type ?? "all",
    query: initialFilters.query ?? "",
    minPrice: initialFilters.minPrice ?? null,
    maxPrice: initialFilters.maxPrice ?? null,
    minBedrooms: initialFilters.minBedrooms ?? null,
    minBathrooms: initialFilters.minBathrooms ?? null,
    sort: initialFilters.sort ?? "newest",
    page: 1,
  });

  function handleFilterChange(updated: Partial<PropertyFilters>) {
    setFilters((prev) => ({
      ...prev,
      ...updated,
      page: updated.page !== undefined ? updated.page : 1,
    }));
  }

  function handleResetFilters() {
    setFilters({
      listingType: initialFilters.listingType ?? "all",
      type: "all",
      query: "",
      minPrice: null,
      maxPrice: null,
      minBedrooms: null,
      minBathrooms: null,
      sort: "newest",
      page: 1,
    });
  }

  const { properties, total, page, totalPages } = useMemo(() => {
    return filterProperties(filters);
  }, [filters]);

  return (
    <div className="min-h-screen bg-neutral-50/60 py-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col gap-6 sm:gap-8">
        {/* Page Heading */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold mb-1.5">
            Eagletree Portfolio
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-brand-950 tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* Top Horizontal Filter Bar */}
        <PropertyFilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
          initialListingType={initialFilters.listingType ?? "all"}
        />

        {/* Results Info & Sort Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-1">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-brand-950">
              {total} Properti Ditemukan
            </span>
            {total > 0 && (
              <span className="text-xs text-neutral-400">
                &middot; Halaman {page} dari {totalPages}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort-dropdown" className="text-xs text-neutral-500">
              Urutkan:
            </label>
            <select
              id="sort-dropdown"
              value={filters.sort ?? "newest"}
              onChange={(e) => handleFilterChange({ sort: e.target.value as PropertySortOption })}
              className="px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 focus:outline-none focus:border-brand-900 cursor-pointer"
            >
              <option value="newest">Terbaru</option>
              <option value="popular">Paling Populer</option>
              <option value="price-asc">Harga: Rendah ke Tinggi</option>
              <option value="price-desc">Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>

        {/* Full-width Property Grid */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} locale={locale} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-neutral-200/80 text-center">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 mb-3">
              <SlidersHorizontal size={20} />
            </div>
            <h3 className="font-serif text-base font-medium text-brand-950 mb-1">
              Tidak ada properti yang sesuai
            </h3>
            <p className="text-xs text-neutral-500 max-w-md mb-5 leading-relaxed font-light">
              Coba sesuaikan kata kunci pencarian, perluas rentang harga, atau atur ulang filter Anda.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 bg-brand-950 hover:bg-brand-900 text-white text-xs font-medium uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Atur Ulang Filter
            </button>
          </div>
        )}

        {/* Numeric Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Navigasi halaman properti" className="flex items-center justify-center gap-2 pt-6 pb-4">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => {
                handleFilterChange({ page: page - 1 });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft size={14} />
              <span>Sebelumnya</span>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    handleFilterChange({ page: p });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    p === page
                      ? "bg-brand-950 text-white"
                      : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-brand-950"
                  }`}
                  aria-current={p === page ? "page" : undefined}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => {
                handleFilterChange({ page: page + 1 });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <span>Berikutnya</span>
              <ChevronRight size={14} />
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
