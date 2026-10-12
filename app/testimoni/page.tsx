"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  category: "buyer" | "owner" | "investor" | "renter";
  categoryLabel: string;
  rating: number;
  initials: string;
  quote: string;
  propertyContext: string;
  date: string;
};

const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Nadia & Reza",
    role: "Pembeli Rumah Pertama",
    category: "buyer",
    categoryLabel: "Pembeli Rumah",
    rating: 5,
    initials: "NR",
    quote:
      "Eagletree membantu kami memahami setiap opsi dengan sabar dan objektif. Sebagai pembeli rumah pertama, kami sempat kewalahan dengan istilah legal dan proses KPR, namun agen Eagletree mengawal dari survei hingga serah terima kunci.",
    propertyContext: "Rumah Tapak 2 Lantai di Bintaro, Tangerang Selatan",
    date: "Agustus 2026",
  },
  {
    id: "2",
    name: "Dimas Pratama",
    role: "Pemilik Properti / Penjual",
    category: "owner",
    categoryLabel: "Pemilik Properti",
    rating: 5,
    initials: "DP",
    quote:
      "Sebelumnya rumah saya di Serpong sudah 8 bulan diiklankan di berbagai portal tanpa ada penawaran serius. Begitu saya titipkan ke agen Eagletree, dalam 3 minggu sudah ada calon pembeli yang cocok dengan harga yang kami harapkan.",
    propertyContext: "Cluster Senja Residence, BSD City",
    date: "Juli 2026",
  },
  {
    id: "3",
    name: "Bima Hadi",
    role: "Investor Properti",
    category: "investor",
    categoryLabel: "Investor",
    rating: 5,
    initials: "BH",
    quote:
      "Analisis yield dan tren kenaikan capital gain yang disajikan tim riset Eagletree sangat presisi. Saya mendapatkan portofolio ruko dan unit kondominium yang saat ini langsung terisi tenant korporasi.",
    propertyContext: "Komersial Ruko & Apartemen di Surabaya & Jakarta",
    date: "Juni 2026",
  },
  {
    id: "4",
    name: "Alya Sari",
    role: "Profesional Muda",
    category: "buyer",
    categoryLabel: "Pembeli Apartemen",
    rating: 5,
    initials: "AS",
    quote:
      "Proses konsultasi terasa sangat terarah sejak pertemuan pertama. Saya tidak didorong untuk membeli unit termahal, melainkan unit yang paling efisien untuk mobilitas kerja harian saya dekat stasiun MRT.",
    propertyContext: "Metro Suite Studio di Jakarta Selatan",
    date: "Mei 2026",
  },
  {
    id: "5",
    name: "Rani Kusuma & Alex",
    role: "Penyewa Jangka Panjang",
    category: "renter",
    categoryLabel: "Penyewa",
    rating: 5,
    initials: "RK",
    quote:
      "Komunikasi dari agen kami sangat hangat, responsif, dan tidak terasa seperti sekadar transaksi komersial. Kami mendapatkan vila impian di Bali dengan perjanjian sewa yang jelas dan transparan.",
    propertyContext: "Samudra Cliff Villa di Uluwatu, Bali",
    date: "April 2026",
  },
  {
    id: "6",
    name: "dr. Hendrawan Sp.A",
    role: "Spesialis Anak & Kolektor Properti",
    category: "investor",
    categoryLabel: "Investor",
    rating: 5,
    initials: "HS",
    quote:
      "Integritas Eagletree luar biasa. Riwayat legalitas sertifikat, perizinan imb, dan histori tanah diperiksa dengan seksama sebelum kami menandatangani PPJB. Rekomendasi utama untuk pembelian bernilai tinggi.",
    propertyContext: "Lahan Kavling Eksklusif di Sentul City",
    date: "Maret 2026",
  },
  {
    id: "7",
    name: "Siti Rahmawati",
    role: "Pemilik Apartemen",
    category: "owner",
    categoryLabel: "Pemilik Properti",
    rating: 5,
    initials: "SR",
    quote:
      "Sistem pelaporan berkala saat proses penayangan properti sangat transparan. Setiap minggu ada update berapa calon pembeli yang bertanya dan bagaimana feedback mereka. Pelayanan bintang lima!",
    propertyContext: "Unit 2BR di Taman Anggrek Loft",
    date: "Februari 2026",
  },
  {
    id: "8",
    name: "Kevin Jonathan",
    role: "Tech Entrepreneur",
    category: "buyer",
    categoryLabel: "Pembeli Rumah",
    rating: 5,
    initials: "KJ",
    quote:
      "Sangat menghemat waktu berharga saya. Tim Eagletree memfilter opsi properti sesuai kriteria spesifik pencahayaan alami dan ruang kerja rumah yang saya butuhkan. Satu kali tur, langsung deal!",
    propertyContext: "Modern Contemporary House di Pondok Indah",
    date: "Januari 2026",
  },
];

const categoryTabs = [
  { id: "all", label: "Semua Kategori" },
  { id: "buyer", label: "Pembeli Rumah & Unit" },
  { id: "owner", label: "Pemilik & Penjual" },
  { id: "investor", label: "Investor" },
  { id: "renter", label: "Penyewa" },
];

export default function TestimoniPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonialsData
      : testimonialsData.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-neutral-50/60">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} className="text-neutral-400" />
          <span className="text-neutral-800 font-medium">Testimoni Klien</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-brand-950 text-white p-8 sm:p-12 lg:p-14 mb-12 rounded-2xl border border-brand-900 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <p className="text-[11px] uppercase tracking-widest text-accent-400 font-semibold mb-3">
              Catatan Kepuasan Klien
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white mb-4">
              Kepercayaan yang Dibangun Dari Reputasi Riil.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
              Dengarkan refleksi para pemilik aset, investor, dan keluarga yang telah mempercayakan keputusan bernilai penting bersama konsultan Eagletree.
            </p>
          </div>
        </div>

        {/* Key Trust Stats - Architectural Metric Divider */}
        <div className="border-y border-neutral-200/80 py-8 mb-12 bg-white/70 rounded-xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">INDEX KEPUASAN</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">4.9 / 5.0</p>
              <p className="text-xs text-neutral-500 mt-1">Skor Klien Terverifikasi</p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">TRANSAKSI SELESAI</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">1,200+</p>
              <p className="text-xs text-neutral-500 mt-1">Akad Transaksi Berhasil</p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">RETENSI & REKOMENDASI</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">98%</p>
              <p className="text-xs text-neutral-500 mt-1">Klien Merekomendasikan</p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">TOTAL VOLUME</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">Rp 5T+</p>
              <p className="text-xs text-neutral-500 mt-1">Nilai Properti Difasilitasi</p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none" role="tablist">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeCategory === tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium shrink-0 transition-colors cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-brand-950 text-white"
                  : "bg-white text-neutral-600 border border-neutral-200/80 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filteredTestimonials.map((item) => (
            <figure
              key={item.id}
              className="p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent-700 bg-accent-50/80 px-2 py-0.5 rounded">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">{item.date}</span>
                </div>

                <blockquote className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-950 text-accent-400 font-medium flex items-center justify-center text-xs shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <figcaption className="font-medium text-xs sm:text-sm text-brand-950 leading-tight">
                      {item.name}
                    </figcaption>
                    <p className="text-[11px] text-neutral-500 leading-tight mt-0.5">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-brand-900 text-[11px] font-medium shrink-0" title="Transaksi Terverifikasi">
                  <ShieldCheck size={14} />
                  <span className="hidden sm:inline">Terverifikasi</span>
                </div>
              </div>
            </figure>
          ))}
        </div>

        {/* CTA Card */}
        <div className="rounded-xl bg-white border border-neutral-200/80 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-950 mb-1.5">
              Siap Menemukan Properti Terbaik Anda?
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Jelajahi ratusan inventaris terverifikasi atau diskusikan kriteria spesifik Anda bersama penasihat Eagletree.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/properties"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand-950 hover:bg-brand-900 text-white font-medium text-xs uppercase tracking-wider text-center transition-colors"
            >
              Katalog Properti
            </Link>
            <Link
              href="/find-agent"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-brand-950 font-medium text-xs uppercase tracking-wider text-center transition-colors"
            >
              Hubungi Konsultan
            </Link>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
