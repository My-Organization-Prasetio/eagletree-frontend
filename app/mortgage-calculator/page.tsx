import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MortgageCalculatorView } from "@/components/mortgage/mortgage-calculator-view";

export const metadata: Metadata = {
  title: "Kalkulator Simulasi KPR — Hitung Estimasi Cicilan Bulanan | Eagletree",
  description: "Hitung simulasi angsuran KPR rumah impian Anda secara akurat. Dapatkan rincian plafon kredit, porsi bunga, tabel amortisasi, dan estimasi syarat penghasilan.",
  alternates: {
    canonical: "/mortgage-calculator",
  },
  openGraph: {
    title: "Kalkulator Simulasi KPR | Eagletree",
    description: "Hitung estimasi cicilan bulanan KPR dengan suku bunga kompetitif dan tabel amortisasi lengkap di Eagletree.",
    url: "/mortgage-calculator",
    siteName: "Eagletree Property Platform",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Simulasi KPR | Eagletree",
    description: "Simulasikan cicilan KPR hunian Anda dengan mudah dan akurat.",
  },
};

type MortgageCalculatorPageProps = {
  searchParams: Promise<{ price?: string }>;
};

export default async function MortgageCalculatorPage({
  searchParams,
}: MortgageCalculatorPageProps) {
  const params = await searchParams;
  const initialPrice = params.price ? Number(params.price) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kalkulator KPR Eagletree",
    url: "https://eagletree.id/mortgage-calculator",
    applicationCategory: "FinanceApplication",
    description: "Alat simulasi perhitungan angsuran Kredit Pemilikan Rumah (KPR) interaktif.",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#f7f8f5] py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[#68766f] mb-6 overflow-x-auto whitespace-nowrap py-1"
          >
            <Link href="/" className="hover:text-[#102d26] transition-colors">
              Beranda
            </Link>
            <ChevronRight size={14} className="shrink-0 text-[#87938d]" />
            <span className="text-[#102d26] font-semibold">Kalkulator KPR</span>
          </nav>

          {/* Page Heading */}
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#936b2d] mb-1.5">
              Perencanaan Finansial
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#102d26] tracking-tight">
              Kalkulator Simulasi KPR
            </h1>
            <p className="mt-3 text-sm md:text-base text-[#53625c] leading-relaxed">
              Rencanakan pembelian properti Anda dengan proyeksi angka yang transparan. Hitung estimasi cicilan per bulan, perbandingan pokok dan bunga pinjaman, serta jadwal amortisasi lengkap sebelum mengajukan ke perbankan.
            </p>
          </div>

          {/* Interactive Calculator View */}
          <MortgageCalculatorView initialPrice={initialPrice} />
        </div>
      </div>
    </>
  );
}
