"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Search, MapPin, Building2, SlidersHorizontal, ArrowDownUp } from "lucide-react";

export function ProjectFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Local state for instant visual feedback, though we sync with URL
  const [city, setCity] = useState(searchParams.get("city") || "all");
  const [sort, setSort] = useState(searchParams.get("sort") || "newest");
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all" || !value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = (key: string, value: string) => {
    if (key === "city") setCity(value);
    if (key === "sort") setSort(value);
    
    router.push(`/new-projects?${createQueryString(key, value)}`, { scroll: false });
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Mobile Title / Icon */}
      <div className="flex items-center gap-2 w-full md:w-auto text-brand-900 font-semibold">
        <SlidersHorizontal size={20} className="text-accent-500" />
        <span>Filter Proyek</span>
      </div>

      {/* Filters Container */}
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        {/* City Filter */}
        <div className="relative flex-1 sm:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin size={16} className="text-neutral-400" />
          </div>
          <select
            value={city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 appearance-none outline-none transition-shadow"
          >
            <option value="all">Semua Kota</option>
            <option value="jakarta">Jakarta</option>
            <option value="tangerang">Tangerang</option>
            <option value="bogor">Bogor</option>
            <option value="bandung">Bandung</option>
            <option value="surabaya">Surabaya</option>
            <option value="bali">Bali</option>
          </select>
        </div>

        {/* Sort */}
        <div className="relative flex-1 sm:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ArrowDownUp size={16} className="text-neutral-400" />
          </div>
          <select
            value={sort}
            onChange={(e) => handleFilterChange("sort", e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 appearance-none outline-none transition-shadow"
          >
            <option value="newest">Terbaru</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
          </select>
        </div>
      </div>
    </div>
  );
}
