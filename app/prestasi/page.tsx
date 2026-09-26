import Link from "next/link";
import {
  ChevronRight,
  Trophy,
  Award,
  Medal,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Star,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestasi & Penghargaan | Eagletree Property",
  description:
    "Jejak rekor pencapaian, penghargaan dari pengembang terkemuka, dan sertifikasi resmi Eagletree Property Agent.",
};

const awardsTimeline = [
  {
    year: "2025",
    items: [
      {
        title: "Most Outstanding Property Agency 2025",
        organization: "Indonesia Property Excellence Awards",
        category: "Nasional",
        description:
          "Dianugerahi sebagai agensi properti dengan pertumbuhan tercepat dan kepatuhan standar transaksi tertinggi.",
      },
      {
        title: "Top 1 Sales Champion - Jade Pavilion",
        organization: "Ciputra Group",
        category: "Developer Partner",
        description:
          "Peringkat pertama penjualan unit residensial dan ruko komersial sepanjang kuartal 1-3 2025.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Platinum Brokerage Partner 2024",
        organization: "Sinar Mas Land",
        category: "Developer Partner",
        description:
          "Apresiasi atas kontribusi penjualan konsisten melebihi target tahunan di kawasan BSD City dan sekitarnya.",
      },
      {
        title: "Best Luxury Estate Consultant",
        organization: "AREBI (Asosiasi Real Estate Broker Indonesia)",
        category: "Asosiasi Industri",
        description:
          "Pengakuan keunggulan dalam penanganan transaksi hunian mewah dan portofolio komersial bernilai tinggi.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Top Digital Innovation in Real Estate",
        organization: "PropTech Indonesia Summit",
        category: "Inovasi Teknologi",
        description:
          "Pelopor pemanfaatan virtual staging dan platform digital terintegrasi untuk kenyamanan pencarian properti.",
      },
      {
        title: "Best Agency Partner of The Year",
        organization: "Pakuwon Jati",
        category: "Developer Partner",
        description:
          "Mitra pemasaran terbaik untuk kategori kondominium dan residensial high-rise di Surabaya dan Jakarta.",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Highest Customer Satisfaction Index",
        organization: "Property Excellence Forum",
        category: "Layanan Pelanggan",
        description:
          "Raihan skor kepuasan pelanggan 98% berdasarkan survei independen terhadap lebih dari 500 pembeli.",
      },
    ],
  },
];

const partners = [
  "Ciputra Group",
  "Sinar Mas Land",
  "Agung Podomoro Land",
  "Pakuwon Group",
  "Summarecon Agung",
  "Alam Sutera Realty",
  "Paramount Land",
  "Intiland Development",
];

export default function PrestasiPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-neutral-50">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} />
          <span className="text-brand-950 font-medium">Prestasi & Penghargaan</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl border border-brand-800/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-4 border border-accent-500/30">
              <Trophy size={13} />
              Rekor Pencapaian
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Dedikasi, Integritas, dan Rekor Prestasi yang Teruji.
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Setiap penghargaan adalah wujud nyata dari komitmen Eagletree dalam menghadirkan standar pelayanan tertinggi bagi pembeli, pemilik properti, dan mitra pengembang di seluruh Indonesia.
            </p>
          </div>
        </div>

        {/* Key Milestone Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mx-auto mb-3">
              <Trophy size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">50+</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Penghargaan Bergengsi</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">Rp 5T+</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Nilai Transaksi Terwujud</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mx-auto mb-3">
              <Building2 size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">1,200+</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Transaksi Properti Sukses</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mx-auto mb-3">
              <Award size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-950">10+ Tahun</p>
            <p className="text-xs text-neutral-500 mt-1 font-medium">Pengalaman & Kepercayaan</p>
          </div>
        </div>

        {/* Awards by Year Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Daftar Penghargaan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-1">
              Rekognisi Industri dari Tahun ke Tahun
            </h2>
          </div>

          <div className="space-y-12">
            {awardsTimeline.map((group) => (
              <div key={group.year} className="relative">
                {/* Year Marker */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-brand-950 text-accent-400 font-extrabold text-sm shadow-xs">
                    Tahun {group.year}
                  </span>
                  <div className="h-px bg-neutral-200 flex-1" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.items.map((award) => (
                    <div
                      key={award.title}
                      className="p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-accent-500/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-accent-700">
                            {award.category}
                          </span>
                          <span className="text-xs text-neutral-400 font-medium">{award.organization}</span>
                        </div>
                        <h3 className="text-lg font-bold text-brand-950 mb-2">{award.title}</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">{award.description}</p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
                        <CheckCircle2 size={14} className="text-accent-600" />
                        <span>Sertifikat & Trofi Resmi Terverifikasi</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikasi & Akreditasi Legalitas */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-surface-raised border border-border-subtle">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Kepatuhan Hukum & Standar</span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 mt-1">Sertifikasi & Kemitraan Resmi</h3>
            <p className="text-sm text-neutral-600 mt-2">
              Keamanan transaksi klien adalah prioritas utama kami. Eagletree beroperasi di bawah payung hukum yang sah dan tersertifikasi lembaga berwenang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200">
              <ShieldCheck size={28} className="text-accent-600 mb-3" />
              <h4 className="font-bold text-base text-brand-950 mb-1">Anggota Resmi AREBI</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Terdaftar di Asosiasi Real Estate Broker Indonesia dengan kepatuhan kode etik broker profesional.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200">
              <Award size={28} className="text-accent-600 mb-3" />
              <h4 className="font-bold text-base text-brand-950 mb-1">SIU-P4 Terbitan Kemendag</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Memiliki Surat Izin Usaha Perusahaan Perantara Perdagangan Properti resmi dari Kementerian Perdagangan RI.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200">
              <Medal size={28} className="text-accent-600 mb-3" />
              <h4 className="font-bold text-base text-brand-950 mb-1">Konsultan Bersertifikasi BNSP</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Seluruh Lead Consultant memiliki sertifikasi kompetensi profesi dari Badan Nasional Sertifikasi Profesi.
              </p>
            </div>
          </div>
        </div>

        {/* Developer Partners */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Kolaborasi Terpercaya</span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 mt-1">Mitra Pengembang Terkemuka</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="p-5 rounded-xl bg-white border border-neutral-200/80 text-center font-bold text-sm text-brand-950 shadow-2xs hover:border-accent-500 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-brand-950 text-white p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Bekerja Sama dengan Agensi Properti Terpercaya
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Dapatkan pengalaman transaksi properti yang transparan, aman, dan didukung oleh tim konsultan pemenang penghargaan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/properties"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold text-sm transition-all"
            >
              Lihat Properti Pilihan
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Hubungi Konsultan Kami
            </Link>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
