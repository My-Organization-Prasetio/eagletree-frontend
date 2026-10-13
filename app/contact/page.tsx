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
                      Telepon Kantor / Hotline WhatsApp
                    </p>
                    <a href="tel:+622174866920" className="font-medium text-brand-950 hover:text-accent-700 transition-colors block">
                      (021) 7486 6920 / (021) 2951 1779
                    </a>
                    <a href="https://wa.me/6281290088902" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-accent-700 transition-colors text-[11px] block mt-0.5">
                      WhatsApp: +62 812-9008-8902 / +62 857-1941-1181
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Mail size={16} className="text-brand-900 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-0.5">
                      Email Resmi Administrasi
                    </p>
                    <a href="mailto:admbintaro.eagletree@gmail.com" className="font-medium text-brand-950 hover:text-accent-700 transition-colors">
                      admbintaro.eagletree@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200/80">
              <h2 className="font-medium text-sm text-brand-950 mb-3 pb-3 border-b border-neutral-100">
                Kantor Pusat & Badan Hukum
              </h2>
              <div className="flex gap-3 items-start text-xs">
                <MapPin size={16} className="text-brand-900 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-brand-950 mb-1">
                    PT. Denadi Mitra Propertindo (Eagle Tree Property)
                  </p>
                  <p className="text-[11px] text-accent-700 font-medium mb-1">
                    Unit Bisnis Unity Group • Anggota Resmi AREBI
                  </p>
                  <p className="text-neutral-600 leading-relaxed text-[11px]">
                    Ruko Kebayoran Arcade 2 Blok B3 No. 39<br />
                    Bintaro Sektor 7, Pondok Aren<br />
                    Tangerang Selatan 15224, Banten
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200/80">
              <h2 className="font-medium text-sm text-brand-950 mb-3 pb-3 border-b border-neutral-100">
                Jejaring Kantor Cabang
              </h2>
              <ul className="space-y-3 text-[11px] text-neutral-600">
                <li>
                  <span className="font-semibold text-brand-950 block">1. Central Office (Head Office)</span>
                  Ruko Kebayoran Arcade 2 Blok B3 No. 39, Bintaro Sektor 7 (021-7486 6920)
                </li>
                <li>
                  <span className="font-semibold text-brand-950 block">2. Beryl Office</span>
                  Ruko Beryl 3 No. 35, Gading Serpong, Tangerang (021-5421 2188)
                </li>
                <li>
                  <span className="font-semibold text-brand-950 block">3. Althia Office</span>
                  Ruko Kebayoran Arcade 3 Blok E1 No. 6, Bintaro Sektor 7
                </li>
                <li>
                  <span className="font-semibold text-brand-950 block">4. Fortune 8 Office</span>
                  Ruko Fortune 8 Blok FB/B No. 25, Graha Raya Bintaro
                </li>
                <li>
                  <span className="font-semibold text-brand-950 block">5. Victory 8 Office</span>
                  Ruko Kebayoran Symphony Blok FS2 No. 01, Bintaro Sektor 7
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-neutral-200/80">
              <h3 className="font-medium text-sm text-brand-950 mb-1">Perlu Penasihat Spesifik?</h3>
              <p className="text-xs text-neutral-500 mb-4">Temukan konsultan berlisensi yang terspesialisasi di area Bintaro, Serpong, dan sekitarnya.</p>
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
