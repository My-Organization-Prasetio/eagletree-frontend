import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-neutral-50/60">
      <PageContainer className="max-w-xl text-center">
        {/* Monospace Status Tag */}
        <span className="text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase mb-4 block">
          404 &middot; Halaman Tidak Ditemukan
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-950 tracking-tight mb-4">
          Tautan yang Anda Tuju Tidak Tersedia.
        </h1>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-8 max-w-md mx-auto font-light">
          Halaman yang Anda tuju mungkin telah dipindahkan, diperbarui, atau alamat URL yang dimasukkan kurang tepat.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand-950 hover:bg-brand-900 text-white font-medium text-xs uppercase tracking-wider transition-colors"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/properties"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-xs uppercase tracking-wider border border-neutral-200 transition-colors"
          >
            Katalog Properti
          </Link>
        </div>

        {/* Quick Suggestion Links */}
        <div className="pt-6 border-t border-neutral-200/80 text-xs">
          <p className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-3">
            Destinasi Terpopuler
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-neutral-600">
            <Link href="/for-sale" className="hover:text-brand-950 transition-colors">
              Properti Dijual
            </Link>
            <span className="text-neutral-300">&middot;</span>
            <Link href="/for-rent" className="hover:text-brand-950 transition-colors">
              Properti Disewa
            </Link>
            <span className="text-neutral-300">&middot;</span>
            <Link href="/new-projects" className="hover:text-brand-950 transition-colors">
              Proyek Baru
            </Link>
            <span className="text-neutral-300">&middot;</span>
            <Link href="/mortgage-calculator" className="hover:text-brand-950 transition-colors">
              Simulasi KPR
            </Link>
            <span className="text-neutral-300">&middot;</span>
            <Link href="/contact" className="hover:text-brand-950 transition-colors">
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
