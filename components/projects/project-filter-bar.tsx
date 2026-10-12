"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { ChevronDown } from "lucide-react";

export function ProjectFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
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
    <div className="bg-white border border-neutral-200/80 rounded-xl p-3.5 sm:p-4 shadow-2xs mb-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
      <div className="text-xs text-neutral-500 font-medium w-full sm:w-auto">
        Filter Kawasan & Pengurutan
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
        {/* City Filter */}
        <div className="relative flex-1 sm:w-44">
          <select
            value={city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
            className="w-full pl-3 pr-8 py-2 bg-neutral-50/70 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 focus:outline-none focus:border-brand-900 appearance-none cursor-pointer"
          >
            <option value="all">Semua Wilayah</option>
            <option value="jakarta">Jakarta</option>
            <option value="tangerang">Tangerang / BSD</option>
            <option value="bogor">Bogor</option>
            <option value="bandung">Bandung</option>
            <option value="surabaya">Surabaya</option>
            <option value="bali">Bali</option>
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute right-3 top-3 text-neutral-400" />
        </div>

        {/* Sort */}
        <div className="relative flex-1 sm:w-44">
          <select
            value={sort}
            onChange={(e) => handleFilterChange("sort", e.target.value)}
            className="w-full pl-3 pr-8 py-2 bg-neutral-50/70 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 focus:outline-none focus:border-brand-900 appearance-none cursor-pointer"
          >
            <option value="newest">Terbaru</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute right-3 top-3 text-neutral-400" />
        </div>
      </div>
    </div>
  );
}
