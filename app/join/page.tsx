"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Send,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

const benefits = [
  {
    code: "01 / PENGHASILAN",
    title: "Skema Komisi Progresif Hingga 80%",
    description: "Sistem bagi hasil transparan dengan jadwal pencairan terjadwal dan tanpa potongan tersembunyi.",
  },
  {
    code: "02 / PEMBELAJARAN",
    title: "Eagletree Academy & Mentorship",
    description: "Program kurikulum terstruktur dan pendampingan lapangan langsung oleh advisor berkinerja tinggi.",
  },
  {
    code: "03 / INVENTARIS",
    title: "Akses Proyek Primer Eksklusif",
    description: "Kemitraan resmi dengan pengembang papan atas (Ciputra, Sinar Mas Land, Pakuwon) menjamin inventaris siap transaksi.",
  },
  {
    code: "04 / TEKNOLOGI",
    title: "Infrastruktur CRM & Manajemen Klien",
    description: "Alat bantu digital untuk memantau siklus transaksi, katalog portofolio web personal, dan aliran prospek.",
  },
  {
    code: "05 / KEPEMIMPINAN",
    title: "Jalur Kepemimpinan & Kemitraan Tim",
    description: "Peluang membangun unit konsultan Anda sendiri dengan struktur imbalan manajerial yang berkelanjutan.",
  },
  {
    code: "06 / PENGAKUAN",
    title: "Program Penghargaan Tahunan",
    description: "Pengakuan capaian profesional melalui sertifikasi industri, bonus prestasi, dan konferensi internasional.",
  },
];

const agentStories = [
  {
    name: "Raka Wijaya",
    role: "Principal Associate / Top Producer",
    experience: "3 Tahun di Eagletree",
    quote: "Di Eagletree, integritas dan pemahaman pasar diletakkan di atas teknik penjualan agresif. Pendekatan ini membuat klien mempercayakan transaksi bernilai besar secara konsisten.",
    initials: "RW",
  },
  {
    name: "Maya Pradana",
    role: "Senior Property Consultant",
    experience: "4 Tahun di Eagletree",
    quote: "Kultur kerja yang transparan dan tersedianya inventaris listing eksklusif memungkinkan saya fokus memberikan advis terbaik kepada klien tanpa hambatan operasional.",
    initials: "MP",
  },
];

export default function JoinEagletreePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Jakarta Selatan",
    experience: "Fresh Graduate / Baru di Properti",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-neutral-50/60">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} className="text-neutral-400" />
          <span className="text-neutral-800 font-medium">Karir & Kemitraan</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-brand-950 text-white p-8 sm:p-12 lg:p-14 mb-12 rounded-2xl border border-brand-900 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <p className="text-[11px] uppercase tracking-widest text-accent-400 font-semibold mb-3">
              Kemitraan Profesional
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white mb-4">
              Bangun Praktik Konsultasi Properti Bersama Eagletree.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light mb-6">
              Industri properti membutuhkan penasihat dengan etika dan wawasan pasar yang tajam. Bergabunglah dengan lingkungan kerja yang mendukung pertumbuhan karir jangka panjang.
            </p>
            <a
              href="#form-join"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-brand-950 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <span>Ajukan Kemitraan</span>
              <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* 6 Core Benefits */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-200/80">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Fondasi Karir</p>
              <h2 className="font-serif text-2xl font-medium text-brand-950 mt-1">Ekosistem Konsultan Eagletree</h2>
            </div>
            <p className="text-xs text-neutral-500 mt-2 sm:mt-0 max-w-md">
              Infrastruktur terintegrasi dirancang agar Anda dapat berfokus penuh pada advisory dan hubungan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div
                key={b.code}
                className="p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-medium text-neutral-400 block mb-3">{b.code}</span>
                  <h3 className="font-medium text-base text-brand-950 mb-2">{b.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kisah Rekan Agen */}
        <div className="mb-14">
          <div className="mb-6 pb-4 border-b border-neutral-200/80">
            <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Testimoni Tim</p>
            <h2 className="font-serif text-2xl font-medium text-brand-950 mt-1">Perspektif Dari Konsultan Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agentStories.map((story) => (
              <div
                key={story.name}
                className="p-6 rounded-xl bg-white border border-neutral-200/80 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-brand-950 text-accent-400 font-medium flex items-center justify-center text-xs shrink-0">
                    {story.initials}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-brand-950">{story.name}</h4>
                    <p className="text-[11px] text-neutral-500">{story.role} &middot; {story.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="form-join" className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl border border-neutral-200/80 shadow-2xs mb-12">
          <div className="mb-6 pb-4 border-b border-neutral-100">
            <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Formulir Kemitraan</p>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-brand-950 mt-1">
              Daftar Sebagai Konsultan
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Lengkapi data profil Anda. Tim Talent Acquisition Eagletree akan menghubungi Anda untuk tahap perkenalan.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-10 px-6 rounded-xl bg-brand-50/40 border border-brand-200/80 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-900 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-serif text-lg font-medium text-brand-950 mb-2">Aplikasi Berhasil Dikirim</h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                Terima kasih, <strong>{formData.fullName}</strong>. Tim Talent Development kami akan menghubungi nomor WhatsApp Anda dalam 1-2 hari kerja untuk jadwal interview dan orientation session.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 rounded-lg bg-brand-950 text-white font-medium text-xs hover:bg-brand-900 transition-colors"
              >
                Kirim Formulir Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Nama sesuai KTP"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Kota Domisili *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Contoh: Jakarta Selatan, Surabaya"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Latar Belakang Pengalaman
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                  >
                    <option value="Fresh Graduate / Baru di Properti">Fresh Graduate / Baru di Properti</option>
                    <option value="1 - 2 Tahun di Bidang Sales / Marketing">1 - 2 Tahun di Bidang Sales / Marketing</option>
                    <option value="Agen Properti Berpengalaman (1 - 3 Tahun)">Agen Properti Berpengalaman (1 - 3 Tahun)</option>
                    <option value="Senior Property Consultant (> 3 Tahun)">Senior Property Consultant (&gt; 3 Tahun)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Motivasi Bergabung Bersama Eagletree
                </label>
                <textarea
                  rows={3}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Ceritakan target profesional atau alasan Anda ingin berkarier di sektor properti..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-brand-950 hover:bg-brand-900 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
              >
                <Send size={14} />
                <span>{isSubmitting ? "Mengirim Aplikasi..." : "Kirim Pengajuan Kemitraan"}</span>
              </button>
            </form>
          )}
        </div>
      </PageContainer>
    </main>
  );
}
