"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/property/property-card";
import type { PropertyDetail } from "@/types/property";
import { Building2 } from "lucide-react";

type AgentListingTabsProps = {
  properties: PropertyDetail[];
};

export function AgentListingTabs({ properties }: AgentListingTabsProps) {
  const [activeTab, setActiveTab] = useState<"sale" | "rent">("sale");

  const forSale = properties.filter((p) => p.status !== "For rent" && !p.price.period);
  const forRent = properties.filter((p) => p.status === "For rent" || !!p.price.period);

  const displayedProperties = activeTab === "sale" ? forSale : forRent;

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-neutral-200 mb-8">
        <button
          onClick={() => setActiveTab("sale")}
          className={`pb-4 text-base font-semibold transition-colors relative ${
            activeTab === "sale" ? "text-brand-900" : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          Properti Dijual ({forSale.length})
          {activeTab === "sale" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-900 rounded-t-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("rent")}
          className={`pb-4 text-base font-semibold transition-colors relative ${
            activeTab === "rent" ? "text-brand-900" : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          Properti Disewa ({forRent.length})
          {activeTab === "rent" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-900 rounded-t-full" />
          )}
        </button>
      </div>

      {/* Grid */}
      {displayedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} locale="id" />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center flex flex-col items-center border border-neutral-200 border-dashed rounded-2xl bg-neutral-50/50">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
            <Building2 size={32} className="text-neutral-300" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Belum Ada Listing</h3>
          <p className="text-neutral-500">
            Agen ini belum memiliki properti yang {activeTab === "sale" ? "dijual" : "disewakan"} saat ini.
          </p>
        </div>
      )}
    </div>
  );
}
