"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  HelpCircle,
  Phone,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

const propertyTypes = ["Rumah Tapak", "Apartemen", "Ruko / Komersial", "Tanah / Kavling", "Vila"];
const certificates = ["SHM (Sertifikat Hak Milik)", "HGB (Hak Guna Bangunan)", "Strata Title", "Lainnya"];

export default function TitipPropertiPage() {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    listingType: "Dijual",
    propertyType: "Rumah Tapak",
    city: "Jakarta Selatan",
    address: "",
    landArea: "",
    buildingArea: "",
    bedrooms: "",
    bathrooms: "",
    certificate: "SHM (Sertifikat Hak Milik)",
    expectedPrice: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          <span className="text-brand-950 font-medium">Titip Properti</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl border border-brand-800/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-4 border border-accent-500/30">
              <Sparkles size={13} />
              Layanan Pemilik Properti
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Titipkan Properti Anda, Biarkan Ahlinya Menemukan Pembeli Terbaik.
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Jual atau sewakan aset properti Anda lebih cepat dengan dukungan jaringan 50+ agen elit Eagletree, database ribuan qualified buyer, dan strategi pemasaran multi-channel terintegrasi.
            </p>
          </div>
        </div>

        {/* 4 Keunggulan Titip di Eagletree */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Kenapa Memilih Eagletree</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-1">Keunggulan Pemasaran Bersama Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-accent-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
                <TrendingUp size={22} />
              </div>
              <h3 className="font-bold text-base text-brand-950 mb-2">Valuasi Harga Akurat</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Kami menganalisis data transaksi riil kawasan untuk menentukan harga jual/sewa yang kompetitif namun menguntungkan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-accent-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
                <Users size={22} />
              </div>
              <h3 className="font-bold text-base text-brand-950 mb-2">Qualified Buyer Database</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Aset Anda langsung ditawarkan ke database ribuan pembeli aktif dan investor yang sedang mencari properti serupa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-accent-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-bold text-base text-brand-950 mb-2">Legalitas & Transaksi Aman</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Didampingi konsultan hukum dan rekanan notaris bersertifikat untuk memastikan keabsahan dokumen hingga tahap AJB.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-accent-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
                <Award size={22} />
              </div>
              <h3 className="font-bold text-base text-brand-950 mb-2">Materi Promosi Premium</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Foto profesional, virtual tour, dan penayangan prioritas di situs utama serta jaringan media sosial Eagletree.
              </p>
            </div>
          </div>
        </div>

        {/* Form Titip Properti Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/90 shadow-sm">
            <h2 className="text-2xl font-extrabold text-brand-950 mb-2">Formulir Titip Jual / Sewa</h2>
            <p className="text-sm text-neutral-500 mb-8">
              Isi data properti di bawah ini secara lengkap. Konsultan spesialis area kami akan segera menghubungi Anda.
            </p>

            {isSubmitted ? (
              <div className="py-12 px-6 rounded-2xl bg-brand-50/50 border border-brand-200 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-950 mb-2">Properti Berhasil Didaftarkan!</h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                  Terima kasih, <strong>{formData.ownerName}</strong>. Konsultan Eagletree akan memverifikasi data dan menghubungi nomor WhatsApp Anda dalam 1x24 jam untuk survei dan konsultasi valuasi.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-950 text-white font-bold text-sm hover:bg-brand-900 transition-colors"
                >
                  Kirim Properti Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Transaksi */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Status Pemasaran *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Dijual", "Disewa"].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFormData({ ...formData, listingType: mode })}
                        className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all text-center ${
                          formData.listingType === mode
                            ? "bg-brand-950 text-white border-brand-950 shadow-xs"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Data Pemilik */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                      Nama Pemilik / Kuasa *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="Contoh: Hendra Wijaya"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                      Nomor WhatsApp *
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
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Email Aktif
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                  />
                </div>

                {/* Detail Properti */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                      Tipe Properti *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    >
                      {propertyTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                      Kota / Wilayah *
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
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Alamat Lengkap / Nama Komplek *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Contoh: Cluster Senja Blok A3 No. 12, Jl. Senopati"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                  />
                </div>

                {/* Dimensi & Spesifikasi */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Luas Tanah (m²)</label>
                    <input
                      type="number"
                      value={formData.landArea}
                      onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                      placeholder="Contoh: 120"
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Luas Bangunan (m²)</label>
                    <input
                      type="number"
                      value={formData.buildingArea}
                      onChange={(e) => setFormData({ ...formData, buildingArea: e.target.value })}
                      placeholder="Contoh: 90"
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Kamar Tidur</label>
                    <input
                      type="number"
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                      placeholder="Contoh: 3"
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Kamar Mandi</label>
                    <input
                      type="number"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                      placeholder="Contoh: 2"
                      className="w-full px-3 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                      Legalitas Sertifikat
                    </label>
                    <select
                      value={formData.certificate}
                      onChange={(e) => setFormData({ ...formData, certificate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    >
                      {certificates.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                      Estimasi Harga yang Diharapkan (Rp) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.expectedPrice}
                      onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                      placeholder="Contoh: 2.500.000.000 (2,5 Miliar)"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950 mb-2">
                    Catatan Tambahan & Keunggulan Properti
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Contoh: Baru renovasi, hadap timur, dekat stasiun MRT, semi-furnished..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:border-accent-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? "Mengirim Data Properti..." : "Titipkan Properti Sekarang"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info & 4 Langkah Mudah */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-neutral-200/90 shadow-xs">
              <h3 className="font-bold text-base text-brand-950 mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-600" />
                <span>4 Langkah Proses Penjualan</span>
              </h3>
              <ol className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-950 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="block text-brand-950">Pengisian Data & Survei</strong>
                    <span className="text-neutral-500 text-xs">Konsultan kami mengunjungi lokasi untuk verifikasi dan pengambilan foto.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-950 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="block text-brand-950">Analisis Valuasi Pasar</strong>
                    <span className="text-neutral-500 text-xs">Menentukan strategi harga terbaik dan target pembeli potensial.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-950 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="block text-brand-950">Kampanye Pemasaran Aktif</strong>
                    <span className="text-neutral-500 text-xs">Penayangan digital, pendampingan viewing calon pembeli yang serius.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-950 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <strong className="block text-brand-950">Negosiasi & Akad Transaksi</strong>
                    <span className="text-neutral-500 text-xs">Penyusunan PPJB / AJB aman didampingi notaris terpercaya.</span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-brand-950 text-white p-6 rounded-3xl border border-brand-800 shadow-md">
              <h4 className="font-bold text-base mb-2">Ingin Konsultasi Langsung?</h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Punya pertanyaan mengenai regulasi pajak, appraisal, atau komisi? Hubungi Head of Listing Eagletree.
              </p>
              <a
                href="https://wa.me/628111222333?text=Halo%20Eagletree,%20saya%20ingin%20berkonsultasi%20mengenai%20titip%20jual%20properti%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold text-xs transition-colors"
              >
                <Phone size={14} />
                <span>WhatsApp Listing Specialist</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-neutral-200">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Tanya Jawab</span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 mt-1">Pertanyaan Seputar Titip Properti</h3>
          </div>

          <div className="space-y-4 text-sm">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200">
              <h4 className="font-bold text-brand-950 mb-1.5 flex items-center gap-2">
                <HelpCircle size={16} className="text-accent-600" />
                <span>Apakah ada biaya di awal saat menitipkan properti?</span>
              </h4>
              <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm pl-6">
                Tidak ada biaya di depan (no upfront fee). Segala biaya promosi, fotografi, dan penayangan listing ditanggung oleh Eagletree. Komisi jasa agen hanya dibayarkan apabila transaksi properti berhasil terealisasi (success fee).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200">
              <h4 className="font-bold text-brand-950 mb-1.5 flex items-center gap-2">
                <HelpCircle size={16} className="text-accent-600" />
                <span>Berapa besaran komisi jasa agen Eagletree?</span>
              </h4>
              <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm pl-6">
                Besaran komisi mengikuti standar asosiasi AREBI (Asosiasi Real Estate Broker Indonesia) dan Permendag RI, yaitu berkisar 2% - 3% untuk transaksi jual beli, dan 5% untuk transaksi sewa menyewa.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200">
              <h4 className="font-bold text-brand-950 mb-1.5 flex items-center gap-2">
                <HelpCircle size={16} className="text-accent-600" />
                <span>Apakah saya boleh menitipkan properti ke agen lain juga?</span>
              </h4>
              <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm pl-6">
                Eagletree menawarkan dua opsi: Listing Terbuka (Open Listing) dan Listing Eksklusif (Exclusive Listing). Pada opsi Eksklusif, properti Anda mendapatkan alokasi budget promosi premium, featured banner di web, dan komitmen prioritas penuh dari tim kami.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
