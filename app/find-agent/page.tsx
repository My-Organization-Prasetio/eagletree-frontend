"use client";

import { useState } from "react";
import { Search, MapPin, Building2, Users } from "lucide-react";
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
    <main className="flex min-h-screen flex-col pt-24 pb-16 bg-neutral-50">
      <PageContainer>
        {/* Header Section */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-brand-100/50 text-brand-800 text-sm font-medium mb-4">
            <Users size={16} />
            <span>Direktori Agen Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-950 mb-4">
            Temukan Agen Properti Terbaik
          </h1>
          <p className="text-lg text-neutral-600">
            Konsultan properti profesional kami siap membantu Anda menemukan hunian impian atau memasarkan properti Anda dengan harga terbaik.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm mb-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Cari nama agen atau wilayah spesialisasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
            />
          </div>
          
          <div className="relative md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 size={18} className="text-neutral-400" />
            </div>
            <select
              value={selectedOffice}
              onChange={(e) => setSelectedOffice(e.target.value)}
              className="w-full pl-10 pr-8 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 appearance-none outline-none transition-shadow"
            >
              <option value="all">Semua Kantor Cabang</option>
              {offices.map(office => (
                <option key={office} value={office}>{office}</option>
              ))}
            </select>
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
          <div className="py-20 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
              <Users size={32} className="text-neutral-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Agen Tidak Ditemukan</h3>
            <p className="text-neutral-500">
              Maaf, tidak ada agen yang sesuai dengan kata kunci pencarian Anda.
            </p>
          </div>
        )}
      </PageContainer>
    </main>
  );
}
