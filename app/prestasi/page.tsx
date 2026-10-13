import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { CertificateGallery } from "@/components/prestasi/certificate-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestasi & Penghargaan | Eagletree Property",
  description:
    "Jejak rekor pencapaian, penghargaan dari pengembang terkemuka, dan sertifikasi resmi Eagletree Property Agent.",
};

const awardsTimeline = [
  {
    year: "2024",
    items: [
      {
        title: "Top Performing Broker Partner",
        organization: "Sinar Mas Land",
        category: "Kemitraan Pengembang",
        description:
          "Apresiasi kontribusi pemasaran konsisten untuk portofolio residensial primer di koridor BSD City dan sekitarnya.",
      },
      {
        title: "Kepatuhan Kode Etik & Standar Broker",
        organization: "AREBI (Asosiasi Real Estate Broker Indonesia)",
        category: "Asosiasi Profesi",
        description:
          "Pengakuan konsistensi implementasi kode etik broker berlisensi dan perlindungan konsumen dalam setiap transaksi.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Mitra Pemasaran Terbaik Kategori Residensial",
        organization: "Mitra Pengembang Terkemuka",
        category: "Kemitraan Strategis",
        description:
          "Penghargaan atas pencapaian volume penjualan unit hunian tapak dan ruko komersial di kawasan Tangerang Selatan.",
      },
      {
        title: "Top Associate Sales Producer",
        organization: "Eagle Tree Internal Excellence",
        category: "Pencapaian Internal",
        description:
          "Apresiasi tahunan untuk jajaran agen terbaik cabang Central, Beryl, dan Althia atas integritas dan kepuasan nasabah.",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Apresiasi Loyalitas Kemitraan KPR",
        organization: "Jejaring Bank Rekanan",
        category: "Layanan Pembiayaan",
        description:
          "Pengakuan atas kelancaran administrasi dan pendampingan berkas pengajuan fasilitas KPR nasabah secara transparan.",
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
    <main className="min-h-screen pt-24 pb-20 bg-neutral-50/60">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} className="text-neutral-400" />
          <span className="text-neutral-800 font-medium">Prestasi & Penghargaan</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-brand-950 text-white p-8 sm:p-12 lg:p-14 mb-12 rounded-2xl border border-brand-900 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <p className="text-[11px] uppercase tracking-widest text-accent-400 font-semibold mb-3">
              Rekor Pencapaian
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white mb-4">
              Dedikasi, Integritas, dan Rekor Prestasi yang Teruji.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
              Setiap rekognisi industri mencerminkan ketelitian kerja penasihat Eagletree dalam memfasilitasi transaksi bernilai tinggi bagi pembeli, pemilik, dan mitra pengembang.
            </p>
          </div>
        </div>

        {/* Key Milestone Stats - Clean Architectural Divider */}
        <div className="border-y border-neutral-200/80 py-8 mb-14 bg-white/70 rounded-xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">LEGALITAS</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">AREBI</p>
              <p className="text-xs text-neutral-500 mt-1">Anggota Resmi Terdaftar</p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">JEJARING</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">5 Cabang</p>
              <p className="text-xs text-neutral-500 mt-1">Bintaro & Serpong</p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">PORTOFOLIO</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">1,200+</p>
              <p className="text-xs text-neutral-500 mt-1">Unit Properti Terfasilitasi</p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center">
              <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block mb-1">PENGALAMAN</span>
              <p className="font-serif text-3xl sm:text-4xl font-normal text-brand-950">10+ Thn</p>
              <p className="text-xs text-neutral-500 mt-1">Beroperasi Sejak 2012</p>
            </div>
          </div>
        </div>

        {/* Certificate Photo Gallery */}
        <CertificateGallery />

        {/* Awards by Year Timeline */}
        <div className="mb-16">
          <div className="mb-8 pb-4 border-b border-neutral-200/80">
            <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Arsip Penghargaan</p>
            <h2 className="font-serif text-2xl font-medium text-brand-950 mt-1">
              Rekognisi Industri dari Tahun ke Tahun
            </h2>
          </div>

          <div className="space-y-10">
            {awardsTimeline.map((group) => (
              <div key={group.year}>
                {/* Year Marker */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold tracking-wider text-brand-950 bg-neutral-200/70 px-2.5 py-1 rounded">
                    {group.year}
                  </span>
                  <div className="h-px bg-neutral-200/80 flex-1" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((award) => (
                    <div
                      key={award.title}
                      className="p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-700">
                            {award.category}
                          </span>
                          <span className="text-xs text-neutral-400">{award.organization}</span>
                        </div>
                        <h3 className="font-medium text-base text-brand-950 mb-2">{award.title}</h3>
                        <p className="text-xs text-neutral-600 leading-relaxed">{award.description}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2 text-[11px] text-neutral-400">
                        <CheckCircle2 size={12} className="text-brand-900" />
                        <span>Sertifikat Terverifikasi</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikasi & Akreditasi Legalitas */}
        <div className="mb-16">
          <div className="mb-6 pb-4 border-b border-neutral-200/80">
            <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Kepatuhan Hukum & Standar</p>
            <h3 className="font-serif text-2xl font-medium text-brand-950 mt-1">Sertifikasi & Kemitraan Resmi</h3>
            <p className="text-xs text-neutral-500 mt-1">
              Keamanan transaksi klien adalah prioritas utama. Eagletree beroperasi di bawah payung hukum yang sah dan tersertifikasi lembaga berwenang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-white border border-neutral-200/80">
              <span className="text-xs font-mono font-medium text-neutral-400 block mb-2">01 / AREBI</span>
              <h4 className="font-medium text-base text-brand-950 mb-1.5">Anggota Resmi AREBI</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Terdaftar di Asosiasi Real Estate Broker Indonesia dengan kepatuhan kode etik broker profesional.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80">
              <span className="text-xs font-mono font-medium text-neutral-400 block mb-2">02 / SIU-P4</span>
              <h4 className="font-medium text-base text-brand-950 mb-1.5">SIU-P4 Terbitan Kemendag</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Memiliki Surat Izin Usaha Perusahaan Perantara Perdagangan Properti resmi dari Kementerian Perdagangan RI.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80">
              <span className="text-xs font-mono font-medium text-neutral-400 block mb-2">03 / BNSP</span>
              <h4 className="font-medium text-base text-brand-950 mb-1.5">Konsultan Tersertifikasi BNSP</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Seluruh Lead Consultant memiliki sertifikasi kompetensi profesi dari Badan Nasional Sertifikasi Profesi.
              </p>
            </div>
          </div>
        </div>

        {/* Developer Partners */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-6">
            <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">Kolaborasi Pengembang</p>
            <h3 className="font-serif text-2xl font-medium text-brand-950 mt-1">Mitra Pengembang Terkemuka</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="py-3 px-4 rounded-lg bg-white border border-neutral-200/80 text-center font-medium text-xs text-neutral-800 hover:border-neutral-300 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-brand-950 text-white p-8 sm:p-12 text-center max-w-3xl mx-auto border border-brand-900 shadow-xs">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3">
            Bekerja Sama dengan Agensi Properti Terpercaya
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mb-6 leading-relaxed font-light">
            Dapatkan pengalaman transaksi properti yang transparan, aman, dan didukung oleh tim konsultan pemenang penghargaan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/properties"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-brand-950 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              Lihat Properti Pilihan
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              Hubungi Konsultan Kami
            </Link>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
