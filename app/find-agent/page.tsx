"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { AgentCard } from "@/components/agent/agent-card";
import { mockAgents } from "@/lib/mock-data";

export default function FindAgentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("all");

  const offices = Array.from(new Set(mockAgents.map(a => a.office)));

  const filteredAgents = mockAgents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          agent.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOffice = selectedOffice === "all" || agent.office === selectedOffice;
    
    return matchesSearch && matchesOffice;
  });

  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16 bg-neutral-50/60">
      <PageContainer>
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold mb-2">
            Konsultan Berlisensi
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950 mb-3">
            Direktori Penasihat Properti
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed font-light">
            Temukan konsultan berdedikasi dengan spesialisasi area yang relevan untuk mendampingi pencarian maupun penjualan aset properti Anda.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-neutral-200/80 rounded-xl p-3.5 sm:p-4 shadow-2xs mb-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-3 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari nama penasihat atau kawasan spesialisasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-neutral-50/70 border border-neutral-200 rounded-lg text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
            />
          </div>
          
          <div className="relative sm:w-64">
            <select
              value={selectedOffice}
              onChange={(e) => setSelectedOffice(e.target.value)}
              className="w-full pl-3 pr-8 py-2 bg-neutral-50/70 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 focus:outline-none focus:border-brand-900 appearance-none cursor-pointer"
            >
              <option value="all">Semua Kantor Cabang</option>
              {offices.map(office => (
                <option key={office} value={office}>{office}</option>
              ))}
            </select>
            <ChevronDown size={13} className="pointer-events-none absolute right-3 top-3 text-neutral-400" />
          </div>
        </div>

        {/* Results Grid */}
        {filteredAgents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-neutral-200/80">
            <h3 className="font-serif text-base font-medium text-brand-950 mb-1">Penasihat Tidak Ditemukan</h3>
            <p className="text-xs text-neutral-500 font-light">
              Maaf, tidak ada penasihat yang sesuai dengan kata kunci pencarian Anda.
            </p>
          </div>
        )}
      </PageContainer>
    </main>
  );
}
