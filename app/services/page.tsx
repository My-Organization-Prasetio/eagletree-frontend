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
      <section className="py-16 sm:py-24">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-3xl bg-white border border-border-subtle hover:border-brand-800/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-900 flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 group-hover:bg-brand-950 group-hover:text-accent-400 transition-all duration-300">
                  <s.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-950 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-brand-950 text-white mt-10">
        <PageContainer className="text-center max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Diskusikan rencana properti Anda.
          </h2>
          <p className="mt-4 text-brand-100/80 leading-relaxed">
            Tidak yakin layanan mana yang Anda butuhkan? Mari bicara. Konsultan kami akan mendengarkan kebutuhan Anda dan memberikan saran langkah selanjutnya tanpa komitmen.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Hubungi Kami Sekarang
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
