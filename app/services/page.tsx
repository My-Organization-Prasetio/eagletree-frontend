import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, Calculator, LineChart, MessageSquare, Search, ShieldCheck } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Layanan Eagletree — Jual Beli Sewa Properti",
  description:
    "Solusi lengkap properti dari Eagletree: konsultasi pencarian, pemasaran properti, manajemen sewa, hingga bantuan KPR.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: Search,
    title: "Pendampingan Pencarian Properti",
    description:
      "Kami membantu Anda menemukan rumah, apartemen, atau properti komersial yang sesuai dengan kebutuhan, anggaran, dan visi masa depan Anda. Dari penyaringan awal hingga jadwal survei, kami mendampingi setiap langkah.",
  },
  {
    icon: Building2,
    title: "Pemasaran & Penjualan",
    description:
      "Memasarkan properti Anda ke audiens yang tepat. Kami menyusun strategi harga, menyiapkan materi visual berkualitas, dan mengelola seluruh proses negosiasi hingga penandatanganan akta.",
  },
  {
    icon: Calculator,
    title: "Konsultasi Pembiayaan & KPR",
    description:
      "Membantu Anda memahami opsi pembiayaan, mensimulasikan cicilan, dan mengurus administrasi pengajuan KPR ke bank-bank rekanan Eagletree untuk mendapatkan suku bunga terbaik.",
  },
  {
    icon: ShieldCheck,
    title: "Verifikasi Legalitas",
    description:
      "Memastikan keamanan transaksi Anda. Tim kami bekerja sama dengan notaris terpercaya untuk memeriksa kelengkapan dokumen, sertifikat, dan legalitas properti sebelum transaksi dilakukan.",
  },
  {
    icon: LineChart,
    title: "Saran Investasi Properti",
    description:
      "Analisis mendalam mengenai potensi kawasan, tren harga, dan estimasi imbal hasil (yield) sewa untuk membantu Anda mengambil keputusan investasi yang terukur.",
  },
  {
    icon: MessageSquare,
    title: "Manajemen Sewa Menyewa",
    description:
      "Layanan end-to-end untuk pemilik properti sewa. Dari pencarian penyewa berkualitas, penyusunan kontrak sewa, hingga penanganan keluhan teknis selama masa sewa berjalan.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-surface-raised border-b border-border-subtle py-16 sm:py-24">
        <PageContainer className="max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-3">
            Layanan Kami
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-950 leading-tight">
            Solusi menyeluruh untuk setiap kebutuhan properti Anda.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Apakah Anda membeli rumah pertama, menjual aset, atau membangun portofolio investasi, tim Eagletree siap memberikan keahlian dan pendampingan profesional.
          </p>
        </PageContainer>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className="p-7 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-accent-700 tracking-wider">
                      0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-950 mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-brand-950">
                  <span>Konsultasi Spesialis</span>
                  <ArrowUpRight size={14} className="text-accent-700" />
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-brand-950 text-white border-t border-brand-900">
        <PageContainer className="text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Diskusikan Rencana Properti Anda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Tidak yakin layanan mana yang paling tepat untuk Anda? Konsultan kami siap mendengarkan rencana Anda dan memberikan arahan objektif tanpa komitmen.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold text-sm transition-colors"
            >
              <span>Hubungi Konsultan Kami</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
