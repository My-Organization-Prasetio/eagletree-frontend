import Link from "next/link";
import { ArrowLeft, Home, Search, Building2, Calculator, PhoneCall } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <PageContainer className="max-w-2xl text-center">
        {/* Visual Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-950 tracking-tight mb-4">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-lg mx-auto">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan, diubah tautannya, atau sementara tidak tersedia.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-950 hover:bg-brand-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <Home size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-brand-950 font-bold text-sm border border-neutral-200 shadow-xs hover:border-neutral-300 transition-all"
          >
            <Search size={16} />
            <span>Jelajahi Properti</span>
          </Link>
        </div>

        {/* Quick Suggestion Links */}
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-4">
            Tautan Cepat yang Mungkin Membantu
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <Link
              href="/for-sale"
              className="p-3 rounded-xl bg-white border border-neutral-200/80 hover:border-accent-500 hover:shadow-sm transition-all group"
            >
              <Building2 size={16} className="text-accent-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold text-brand-950 group-hover:text-accent-700">Properti Dijual</p>
              <p className="text-[11px] text-neutral-500">Rumah & apartemen</p>
            </Link>

            <Link
              href="/for-rent"
              className="p-3 rounded-xl bg-white border border-neutral-200/80 hover:border-accent-500 hover:shadow-sm transition-all group"
            >
              <Building2 size={16} className="text-accent-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold text-brand-950 group-hover:text-accent-700">Properti Disewa</p>
              <p className="text-[11px] text-neutral-500">Sewa bulanan/tahunan</p>
            </Link>

            <Link
              href="/mortgage-calculator"
              className="p-3 rounded-xl bg-white border border-neutral-200/80 hover:border-accent-500 hover:shadow-sm transition-all group"
            >
              <Calculator size={16} className="text-accent-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold text-brand-950 group-hover:text-accent-700">Simulasi KPR</p>
              <p className="text-[11px] text-neutral-500">Hitung cicilan bank</p>
            </Link>

            <Link
              href="/contact"
              className="p-3 rounded-xl bg-white border border-neutral-200/80 hover:border-accent-500 hover:shadow-sm transition-all group"
            >
              <PhoneCall size={16} className="text-accent-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold text-brand-950 group-hover:text-accent-700">Hubungi Kami</p>
              <p className="text-[11px] text-neutral-500">Bantuan langsung agen</p>
            </Link>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
