"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Send,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/contact-icons";
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
    <main className="min-h-screen pt-24 pb-20 bg-neutral-50/60">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} className="text-neutral-400" />
          <span className="text-neutral-800 font-medium">Titip Properti</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-brand-950 text-white p-8 sm:p-12 lg:p-14 mb-12 rounded-2xl border border-brand-900 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <p className="text-[11px] uppercase tracking-widest text-accent-400 font-semibold mb-3">
              Layanan Penjualan & Sewa Properti
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white mb-4">
              Titipkan Properti Anda Kepada Penasihat Berpengalaman.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
              Jual atau sewakan aset Anda dengan dukungan 50+ konsultan berlisensi Eagletree, database pembeli terverifikasi, dan komitmen penutupan transaksi yang transparan.
            </p>
          </div>
        </div>

        {/* 4 Keunggulan Titip di Eagletree */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-200/80">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Keunggulan Layanan</p>
              <h2 className="font-serif text-2xl font-medium text-brand-950 mt-1">Standar Representasi Eagletree</h2>
            </div>
            <p className="text-xs text-neutral-500 mt-2 sm:mt-0 max-w-md">
              Pendekatan terukur memastikan setiap aset mendapatkan valuasi pasar yang presisi dan pembeli yang berkualifikasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <span className="text-xs font-mono font-medium text-neutral-400 block mb-3">01 / VALUASI</span>
              <h3 className="font-medium text-base text-brand-950 mb-2">Penetapan Harga Presisi</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Analisis mendalam berdasarkan riwayat transaksi kawasan terkini untuk memastikan harga jual atau sewa yang optimal.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <span className="text-xs font-mono font-medium text-neutral-400 block mb-3">02 / PEMBELI</span>
              <h3 className="font-medium text-base text-brand-950 mb-2">Jaringan Pembeli Terkualifikasi</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Aset dipasarkan langsung ke database pembeli aktif, investor institusional, dan keluarga dengan daya beli riil.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <span className="text-xs font-mono font-medium text-neutral-400 block mb-3">03 / LEGALITAS</span>
              <h3 className="font-medium text-base text-brand-950 mb-2">Perlindungan Hukum & Notaris</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Pendampingan legal lengkap sejak pengecekan sertifikat hingga penandatanganan AJB bersama rekanan notaris terpercaya.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <span className="text-xs font-mono font-medium text-neutral-400 block mb-3">04 / PRESENTASI</span>
              <h3 className="font-medium text-base text-brand-950 mb-2">Dokumentasi Arsitektural</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Fotografi profesional dan penyajian informasi listing yang terstruktur untuk menonjolkan nilai unik properti Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Form Titip Properti Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-neutral-200/80 shadow-2xs">
            <div className="mb-6 pb-4 border-b border-neutral-100">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-brand-950">Formulir Titip Jual / Sewa</h2>
              <p className="text-xs text-neutral-500 mt-1">
                Lengkapi rincian properti Anda di bawah ini. Konsultan area kami akan meninjau dan menghubungi Anda.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 rounded-xl bg-brand-50/40 border border-brand-200/80 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-900 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-serif text-lg font-medium text-brand-950 mb-2">Properti Berhasil Didaftarkan</h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Terima kasih, <strong>{formData.ownerName}</strong>. Konsultan Eagletree akan menghubungi nomor WhatsApp Anda dalam 1x24 jam untuk verifikasi awal dan koordinasi survei lokasi.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-brand-950 text-white font-medium text-xs hover:bg-brand-900 transition-colors"
                >
                  Kirim Properti Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Transaksi */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                    Tujuan Pemasaran *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Dijual", "Disewa"].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFormData({ ...formData, listingType: mode })}
                        className={`py-2.5 px-4 rounded-lg border text-xs font-medium transition-all text-center ${
                          formData.listingType === mode
                            ? "bg-brand-950 text-white border-brand-950"
                            : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Data Pemilik */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Nama Pemilik / Kuasa *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="Nama lengkap"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                    />
                  </div>

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
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                  />
                </div>

                {/* Detail Properti */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Tipe Properti *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                    >
                      {propertyTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Kota / Wilayah *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Contoh: Jakarta Selatan, BSD City"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Alamat Lengkap / Komplek *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Nama jalan, nomor rumah, atau cluster"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                  />
                </div>

                {/* Dimensi & Spesifikasi */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">LT (m²)</label>
                    <input
                      type="number"
                      value={formData.landArea}
                      onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                      placeholder="120"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">LB (m²)</label>
                    <input
                      type="number"
                      value={formData.buildingArea}
                      onChange={(e) => setFormData({ ...formData, buildingArea: e.target.value })}
                      placeholder="90"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">Kamar Tidur</label>
                    <input
                      type="number"
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                      placeholder="3"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">Kamar Mandi</label>
                    <input
                      type="number"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                      placeholder="2"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Legalitas Sertifikat
                    </label>
                    <select
                      value={formData.certificate}
                      onChange={(e) => setFormData({ ...formData, certificate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                    >
                      {certificates.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Estimasi Harga Target (Rp) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.expectedPrice}
                      onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                      placeholder="Contoh: 2.500.000.000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Catatan Khusus Properti
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Contoh: Hadap timur, baru renovasi, semi-furnished, akses tol 5 menit..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-brand-950 hover:bg-brand-900 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send size={14} />
                  <span>{isSubmitting ? "Mengirim Data..." : "Kirim Data Properti"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info & 4 Langkah Mudah */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-6 rounded-xl border border-neutral-200/80">
              <h3 className="font-medium text-sm text-brand-950 mb-4 pb-3 border-b border-neutral-100">
                Alur Kerja Titip Properti
              </h3>
              <ol className="space-y-4 text-xs">
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 text-[10px] font-mono font-medium flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="block text-brand-950 font-medium">Verifikasi Awal & Survei</strong>
                    <span className="text-neutral-500">Konsultan kami meninjau lokasi dan memeriksa kelayakan dokumen.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 text-[10px] font-mono font-medium flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="block text-brand-950 font-medium">Valuasi & Rencana Pemasaran</strong>
                    <span className="text-neutral-500">Menyepakati target harga dan strategi paparan listing.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 text-[10px] font-mono font-medium flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="block text-brand-950 font-medium">Penayangan & Pendampingan</strong>
                    <span className="text-neutral-500">Penyaringan calon pembeli potensial dan jadwal kunjungan terkoordinasi.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 text-[10px] font-mono font-medium flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <strong className="block text-brand-950 font-medium">Negosiasi & Akad Notaris</strong>
                    <span className="text-neutral-500">Penyelesaian transaksi aman hingga serah terima kunci.</span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-brand-950 text-white p-6 rounded-xl border border-brand-900">
              <h4 className="font-serif text-base font-medium mb-1.5">Konsultasi Langsung</h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 font-light">
                Perlu panduan terkait perpajakan, estimasi nilai pasar, atau skema eksklusif? Hubungi tim representasi kami.
              </p>
              <a
                href="https://wa.me/6281290088902?text=Halo%20EagleTree,%20saya%20ingin%20berkonsultasi%20mengenai%20titip%20jual%20properti%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-2xs"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Listing Specialist</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-neutral-200/80">
          <div className="text-center mb-6">
            <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Tanya Jawab</p>
            <h3 className="font-serif text-xl font-medium text-brand-950 mt-1">Pertanyaan Seputar Titip Properti</h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-neutral-200/80">
              <h4 className="font-medium text-brand-950 mb-1">
                Apakah ada biaya di awal saat menitipkan properti?
              </h4>
              <p className="text-neutral-600 leading-relaxed text-xs">
                Tidak ada biaya di depan (no upfront fee). Segala proses verifikasi, pemotretan, dan penayangan listing ditanggung oleh Eagletree. Komisi jasa agen hanya dibayarkan apabila transaksi properti berhasil terealisasi (success fee).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200/80">
              <h4 className="font-medium text-brand-950 mb-1">
                Berapa besaran komisi jasa agen Eagletree?
              </h4>
              <p className="text-neutral-600 leading-relaxed text-xs">
                Besaran komisi mengikuti standar asosiasi AREBI (Asosiasi Real Estate Broker Indonesia) dan Permendag RI, yaitu berkisar 2% - 3% untuk transaksi jual beli, dan 5% untuk transaksi sewa menyewa.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200/80">
              <h4 className="font-medium text-brand-950 mb-1">
                Apakah saya boleh menitipkan properti ke agen lain juga?
              </h4>
              <p className="text-neutral-600 leading-relaxed text-xs">
                Eagletree melayani opsi Listing Terbuka (Open Listing) maupun Listing Eksklusif (Exclusive Listing). Pada opsi Eksklusif, properti Anda mendapatkan alokasi kampanye prioritas dan komitmen penuh dari penasihat senior kami.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
