"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  TrendingUp,
  GraduationCap,
  Building,
  Laptop,
  Trophy,
  Plane,
  CheckCircle2,
  Send,
  Sparkles,
  PhoneCall,
  Users,
  Briefcase,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

const benefits = [
  {
    icon: TrendingUp,
    title: "Skema Komisi Progresif Hingga 80%",
    description: "Nikmati bagi hasil komisi tertinggi di industri dengan sistem pencairan transparan, cepat, dan tanpa potongan tersembunyi.",
  },
  {
    icon: GraduationCap,
    title: "Eagletree Academy & Mentorship",
    description: "Program akselerasi komprehensif mulai dari pemula hingga menjadi Top Producer, dibimbing langsung oleh mentor berpengalaman puluhan tahun.",
  },
  {
    icon: Building,
    title: "Akses Proyek Primer Eksklusif",
    description: "Kemitraan strategis resmi dengan developer terkemuka (Ciputra, Sinar Mas Land, Pakuwon, dll) memberikan Anda ribuan stok unit siap jual.",
  },
  {
    icon: Laptop,
    title: "Dukungan Platform & Digital Leads",
    description: "Dilengkapi aplikasi CRM canggih, web portofolio agen personal, dan distribusi leads pembeli potensial harian dari tim marketing pusat.",
  },
  {
    icon: Trophy,
    title: "Jenjang Karir & Kepemimpinan",
    description: "Peluang membangun tim bisnis Anda sendiri hingga memimpin kantor cabang mandiri dengan pasif income yang berkelanjutan.",
  },
  {
    icon: Plane,
    title: "Reward Internasional & Rekognisi",
    description: "Penghargaan tahunan bergengsi, bonus pencapaian, serta perjalanan wisata eksklusif ke berbagai destinasi impian dunia.",
  },
];

const agentStories = [
  {
    name: "Raka Wijaya",
    role: "Principal Associate / Top Producer 2025",
    experience: "3 Tahun di Eagletree",
    quote: "Bergabung dengan Eagletree mengubah jalan hidup saya. Dari yang awalnya tidak paham istilah properti, dalam tahun kedua saya berhasil meraih penghargaan Top Producer dan membeli rumah impian saya sendiri.",
    avatar: "RW",
  },
  {
    name: "Maya Pradana",
    role: "Senior Property Consultant",
    experience: "4 Tahun di Eagletree",
    quote: "Kultur di sini sangat suportif dan profesional. Tidak ada persaingan toxic, melainkan saling berbagi tips closing dan sinergi proyek. Akses listing eksklusifnya benar-benar membuka pintu ke klien high-net-worth.",
    avatar: "MP",
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
    <main className="min-h-screen pt-24 pb-20 bg-neutral-50">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} />
          <span className="text-brand-950 font-medium">Karir & Kemitraan</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl border border-brand-800/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-4 border border-accent-500/30">
              <Sparkles size={13} />
              Peluang Karir Bergengsi
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Bangun Karir & Wujudkan Potensi Finansial Tanpa Batas di Eagletree.
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
              Industri properti menawarkan akselerasi finansial terbesar bagi Anda yang berdedikasi tinggi. Bergabunglah bersama konsultan properti elit kami dan dapatkan ekosistem pendukung terbaik.
            </p>
            <a
              href="#form-join"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold text-sm shadow-md transition-all"
            >
              <span>Daftar Menjadi Konsultan</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* 6 Core Benefits */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Kenapa Bergabung Bersama Kami</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-1">Ekosistem Sukses Konsultan Eagletree</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-accent-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-base text-brand-950 mb-2">{b.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kisah Sukses Agen */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Inspirasi Nyata</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-1">Mereka yang Telah Membuktikannya</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agentStories.map((story) => (
              <div
                key={story.name}
                className="p-8 rounded-3xl bg-surface-raised border border-border-subtle hover:border-brand-800/30 transition-all flex flex-col justify-between"
              >
                <blockquote className="text-base text-neutral-700 leading-relaxed italic mb-6">
                  “{story.quote}”
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/80">
                  <div className="w-12 h-12 rounded-full bg-brand-950 text-accent-400 font-extrabold flex items-center justify-center text-sm">
                    {story.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-brand-950">{story.name}</h4>
                    <p className="text-xs text-accent-700 font-semibold">{story.role}</p>
                    <p className="text-xs text-neutral-500">{story.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="form-join" className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/90 shadow-sm mb-16">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Formulir Rekrutmen</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-1">
              Mulai Perjalanan Anda Hari Ini
            </h2>
            <p className="text-sm text-neutral-500 mt-2">
              Lengkapi formulir di bawah ini. Tim HR & Talent Acquisition Eagletree akan mengundang Anda untuk sesi konsultasi karir.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 px-6 rounded-2xl bg-brand-50/50 border border-brand-200 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-950 mb-2">Aplikasi Berhasil Dikirim!</h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                Terima kasih, <strong>{formData.fullName}</strong>. Tim Talent Development kami akan menghubungi nomor WhatsApp Anda dalam 1-2 hari kerja untuk jadwal interview dan orientation session.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-brand-950 text-white font-bold text-sm hover:bg-brand-900 transition-colors"
              >
                Kirim Formulir Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Contoh: Rian Pratama"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Nomor WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Email Aktif *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Kota Domisili *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Contoh: Jakarta Selatan, BSD, Surabaya"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Latar Belakang Pengalaman
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                  >
                    <option value="Fresh Graduate / Baru di Properti">Fresh Graduate / Baru di Properti</option>
                    <option value="1 - 2 Tahun di Bidang Sales / Marketing">1 - 2 Tahun di Bidang Sales / Marketing</option>
                    <option value="Agen Properti Berpengalaman (1 - 3 Tahun)">Agen Properti Berpengalaman (1 - 3 Tahun)</option>
                    <option value="Senior Property Consultant (> 3 Tahun)">Senior Property Consultant (&gt; 3 Tahun)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                  Mengapa Anda Tertarik Bergabung dengan Eagletree?
                </label>
                <textarea
                  rows={3}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Ceritakan singkat tentang motivasi atau target pencapaian karir Anda..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                <Send size={16} />
                <span>{isSubmitting ? "Mengirim Aplikasi..." : "Kirim Lamaran Kemitraan"}</span>
              </button>
            </form>
          )}
        </div>
      </PageContainer>
    </main>
  );
}
