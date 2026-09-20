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
    <div className="min-h-screen bg-background py-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col gap-6 sm:gap-8">
        {/* Page Heading */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-1.5">
            Eagletree Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-950 tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-sm md:text-base text-neutral-600 max-w-2xl leading-relaxed">
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
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-brand-950">
              {total} properti ditemukan
            </span>
            {total > 0 && (
              <span className="text-xs text-neutral-500 font-medium">
                (Halaman {page} dari {totalPages})
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort-dropdown" className="text-xs font-semibold text-neutral-600">
              Urutkan:
            </label>
            <select
              id="sort-dropdown"
              value={filters.sort ?? "newest"}
              onChange={(e) => handleFilterChange({ sort: e.target.value as PropertySortOption })}
              className="px-3 py-2 bg-surface-raised border border-border-subtle rounded-xl text-xs font-medium text-brand-950 focus:outline-none focus:border-brand-800 cursor-pointer shadow-xs"
            >
              <option value="newest">Terbaru</option>
              <option value="popular">Paling Populer</option>
              <option value="price-asc">Harga: Rendah ke Tinggi</option>
              <option value="price-desc">Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>

        {/* Full-width Property Grid (1 col mobile, 2 tablet, 3 lg, 4 xl) */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} locale={locale} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center p-12 bg-surface-raised rounded-3xl border border-border-subtle text-center shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-900 mb-4">
              <SlidersHorizontal size={28} />
            </div>
            <h3 className="text-lg font-bold text-brand-950 mb-1">
              Tidak ada properti yang cocok
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mb-6 leading-relaxed">
              Coba ubah kriteria pencarian, kurangi batas harga, atau atur ulang filter untuk menemukan pilihan lain.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-brand-950 hover:bg-brand-900 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              Atur Ulang Semua Filter
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
              className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-border-subtle bg-surface-raised text-xs font-semibold text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer shadow-xs"
            >
              <ChevronLeft size={16} />
              <span>Sebelumnya</span>
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    handleFilterChange({ page: p });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    p === page
                      ? "bg-brand-950 text-white shadow-xs"
                      : "bg-surface-raised text-neutral-600 border border-border-subtle hover:border-brand-800 hover:text-brand-950"
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
              className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-border-subtle bg-surface-raised text-xs font-semibold text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer shadow-xs"
            >
              <span>Berikutnya</span>
              <ChevronRight size={16} />
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
