import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Hubungi Kami — Eagletree Property",
  description:
    "Hubungi tim Eagletree untuk konsultasi properti, penjadwalan survei, atau informasi layanan KPR dan pemasaran.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50/60 pt-24 pb-20">
      <PageContainer className="max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold mb-2">
            Hubungi Penasihat Kami
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-950 tracking-tight leading-tight mb-4">
            Mari mulai percakapan tentang portofolio properti Anda.
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
            Tim konsultan Eagletree siap memberikan pendampingan objektif, menjawab pertanyaan regulasi pasar, atau mengoordinasikan kunjungan properti pilihan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-200/80">
              <h2 className="font-medium text-sm text-brand-950 mb-4 pb-3 border-b border-neutral-100">
                Komunikasi Langsung
              </h2>
              <ul className="flex flex-col gap-4 text-xs">
                <li className="flex gap-3 items-start">
                  <Phone size={16} className="text-brand-900 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-0.5">
                      Telepon / WhatsApp
                    </p>
                    <a href="tel:+628111222333" className="font-medium text-brand-950 hover:text-accent-700 transition-colors">
                      +62 811 1222 333
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Mail size={16} className="text-brand-900 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-0.5">
                      Email Representasi
                    </p>
                    <a href="mailto:hello@eagletree.id" className="font-medium text-brand-950 hover:text-accent-700 transition-colors">
                      hello@eagletree.id
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200/80">
              <h2 className="font-medium text-sm text-brand-950 mb-4 pb-3 border-b border-neutral-100">
                Kantor Pusat Eagletree
              </h2>
              <div className="flex gap-3 items-start text-xs">
                <MapPin size={16} className="text-brand-900 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-brand-950 mb-1">
                    Eagletree Hub Jakarta
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    Menara Eagletree Lantai 12<br />
                    Jl. Jend. Sudirman Kav. 45<br />
                    Jakarta Selatan 12930, Indonesia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-neutral-200/80">
              <h3 className="font-medium text-sm text-brand-950 mb-1">Perlu Penasihat Spesifik?</h3>
              <p className="text-xs text-neutral-500 mb-4">Temukan konsultan berlisensi yang terspesialisasi di area domisili properti target Anda.</p>
              <Link href="/find-agent" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-700 hover:text-accent-600 transition-colors">
                Direktori Konsultan <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-200/80 shadow-2xs">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-brand-950 mb-2">
                Kirimkan Pesan
              </h2>
              <p className="text-xs text-neutral-500 mb-6">
                Kami akan merespons pesan Anda dalam 1x24 jam kerja.
              </p>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">Nama Lengkap *</label>
                    <input type="text" id="name" required className="px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors" placeholder="Nama Anda" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">WhatsApp / Telepon *</label>
                    <input type="tel" id="phone" required className="px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors" placeholder="0812-xxxx-xxxx" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">Alamat Email *</label>
                  <input type="email" id="email" required className="px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors" placeholder="nama@email.com" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="topic" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">Topik Konsultasi</label>
                  <select id="topic" className="px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors cursor-pointer">
                    <option value="">Pilih topik pembicaraan...</option>
                    <option value="buy">Mencari properti untuk dibeli</option>
                    <option value="rent">Mencari properti untuk disewa</option>
                    <option value="sell">Ingin memasarkan / menjual aset</option>
                    <option value="consultation">Konsultasi regulasi / KPR</option>
                    <option value="other">Kemitraan atau hal lainnya</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">Pesan atau Rincian Kebutuhan</label>
                  <textarea id="message" rows={4} className="px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 focus:ring-1 focus:ring-brand-900 transition-colors resize-none" placeholder="Tuliskan preferensi lokasi, estimasi anggaran, atau hal yang ingin Anda tanyakan..." />
                </div>

                <button type="submit" className="mt-2 w-full py-3.5 rounded-lg bg-brand-950 hover:bg-brand-900 text-white font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer">
                  Kirimkan Pesan
                </button>
                <p className="text-[11px] text-neutral-400 text-center">
                  Data Anda dijaga kerahasiaannya sesuai ketentuan privasi Eagletree.
                </p>
              </form>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
