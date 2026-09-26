"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Quote,
  CheckCircle2,
  Building2,
  HeartHandshake,
  TrendingUp,
  Sparkles,
  ArrowRight,
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
  { id: "all", label: "Semua Ulasan" },
  { id: "buyer", label: "Pembeli Properti" },
  { id: "owner", label: "Pemilik Properti" },
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
    <main className="min-h-screen pt-24 pb-20 bg-neutral-50">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} />
          <span className="text-brand-950 font-medium">Testimoni Klien</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl border border-brand-800/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-4 border border-accent-500/30">
              <Sparkles size={13} />
              Kisah Nyata Klien
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Kepercayaan yang Tumbuh di Setiap Babak Perjalanan Properti Anda.
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Dengarkan langsung pengalaman para pemilik rumah, investor, dan keluarga yang telah mempercayakan keputusan berharga mereka bersama konsultan Eagletree Property.
            </p>
          </div>
        </div>

        {/* Key Trust Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <div className="flex items-center justify-center gap-1 text-accent-600 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">4.9 / 5.0</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Rata-rata Kepuasan Klien</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">1,200+</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Transaksi Sukses Dituntaskan</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">98%</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Klien Merekomendasikan Kami</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">Rp 5T+</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Total Akumulasi Transaksi</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeCategory === tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-brand-950 text-white shadow-sm"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-brand-950"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredTestimonials.map((item) => (
            <figure
              key={item.id}
              className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-accent-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Category badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-accent-600">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-semibold">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-950 font-bold flex items-center justify-center text-xs border border-brand-200 shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <figcaption className="font-bold text-sm text-brand-950 leading-tight">
                      {item.name}
                    </figcaption>
                    <p className="text-xs text-neutral-500 leading-tight mt-0.5">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold shrink-0" title="Transaksi Terverifikasi">
                  <ShieldCheck size={14} />
                  <span className="hidden sm:inline">Terverifikasi</span>
                </div>
              </div>
            </figure>
          ))}
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl bg-surface-raised border border-border-subtle p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mb-3">
              Siap Menuliskan Kisah Sukses Properti Anda?
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Jelajahi ratusan listing pilihan kami atau bicarakan kebutuhan spesifik Anda dengan konsultan berpengalaman Eagletree hari ini.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <Link
              href="/properties"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-950 hover:bg-brand-900 text-white font-bold text-sm text-center shadow-sm hover:shadow-md transition-all"
            >
              Jelajahi Properti
            </Link>
            <Link
              href="/find-agent"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold text-sm text-center transition-all"
            >
              Temukan Konsultan
            </Link>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
