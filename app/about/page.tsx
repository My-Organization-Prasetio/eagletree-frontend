import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Heart, Shield, Target, Users } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Tentang Eagletree — Konsultan Properti Terpercaya Indonesia",
  description:
    "Eagletree adalah platform konsultan properti yang menghubungkan pencari hunian dengan agen profesional di seluruh Indonesia.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Heart,
    title: "Pendekatan Personal",
    description:
      "Kami percaya setiap pencari properti memiliki cerita dan kebutuhan unik. Konsultasi kami dirancang untuk memahami, bukan menjual.",
  },
  {
    icon: Shield,
    title: "Transparansi & Kepercayaan",
    description:
      "Setiap listing disajikan dengan informasi yang jujur dan lengkap. Tidak ada biaya tersembunyi, tidak ada janji yang berlebihan.",
  },
  {
    icon: Target,
    title: "Kualitas di Atas Kuantitas",
    description:
      "Kami tidak mengejar jumlah listing terbanyak, melainkan properti terbaik yang telah melewati kurasi tim kami.",
  },
  {
    icon: Users,
    title: "Agen yang Berpengalaman",
    description:
      "Konsultan properti Eagletree tersertifikasi dan memiliki pengetahuan mendalam tentang kawasan mereka.",
  },
  {
    icon: Award,
    title: "Dedikasi Jangka Panjang",
    description:
      "Hubungan kami tidak berakhir saat transaksi selesai. Kami hadir untuk mendampingi Anda di setiap tahap perjalanan properti.",
  },
];

const milestones = [
  { year: "2020", label: "Didirikan di Jakarta" },
  { year: "2022", label: "Ekspansi ke Bali & Surabaya" },
  { year: "2024", label: "500+ transaksi berhasil" },
  { year: "2026", label: "Platform V2 diluncurkan" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-3xl pointer-events-none" />
        <PageContainer className="relative z-10 py-20 sm:py-28 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-400 mb-3">
            Tentang Eagletree
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Menemukan properti, dengan cara yang lebih personal.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-100/85 leading-relaxed max-w-2xl">
            Eagletree hadir untuk menghubungkan pencari properti dengan
            konsultan yang benar-benar memahami kebutuhan mereka. Bukan hanya
            soal bangunan, tetapi tentang menemukan tempat yang terasa tepat.
          </p>
        </PageContainer>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-surface-raised border-b border-border-subtle">
        <PageContainer>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-2">
            Nilai-Nilai Kami
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-brand-950 tracking-tight mb-10">
            Prinsip yang memandu setiap langkah kami.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-neutral-50/70 border border-border-subtle hover:border-brand-800/30 hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center shadow-xs">
                  <v.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-brand-950">
                  {v.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-background border-b border-border-subtle">
        <PageContainer>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-2">
            Perjalanan Kami
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-950 tracking-tight mb-10">
            Dari langkah pertama hingga hari ini.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-2xl bg-surface-raised border border-border-subtle text-center"
              >
                <p className="text-3xl font-extrabold text-accent-600">
                  {m.year}
                </p>
                <p className="text-sm text-neutral-600 mt-2 font-medium">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-surface-muted/40">
        <PageContainer className="text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-950 tracking-tight">
            Siap menemukan properti yang tepat?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Jelajahi koleksi properti pilihan kami atau hubungi konsultan Eagletree untuk konsultasi gratis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-950 hover:bg-brand-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              Jelajahi Properti
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/find-agent"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-surface-raised border border-border-subtle text-brand-950 font-semibold text-sm hover:shadow-md transition-all"
            >
              Hubungi Agen
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
