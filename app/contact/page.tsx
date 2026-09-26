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
    <div className="min-h-screen bg-background">
      <PageContainer className="py-12 sm:py-20 max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-3">
            Hubungi Kami
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-950 tracking-tight leading-tight mb-4">
            Mari mulai percakapan tentang properti impian Anda.
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Tim konsultan Eagletree siap menjawab pertanyaan Anda, mendiskusikan peluang pasar, atau menjadwalkan survei ke lokasi properti pilihan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact Info (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <h2 className="text-lg font-bold text-brand-950 mb-4 border-b border-border-subtle pb-2">
                Informasi Kontak
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-900 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide mb-1">
                      Telepon / WhatsApp
                    </p>
                    <a href="tel:+628111222333" className="text-sm font-semibold text-brand-950 hover:text-accent-700 transition-colors">
                      +62 811 1222 333
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-900 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a href="mailto:hello@eagletree.id" className="text-sm font-semibold text-brand-950 hover:text-accent-700 transition-colors">
                      hello@eagletree.id
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-950 mb-4 border-b border-border-subtle pb-2">
                Kantor Pusat
              </h2>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-900 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-950 mb-1">
                    Eagletree Hub Jakarta
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Menara Eagletree Lantai 12<br />
                    Jl. Jend. Sudirman Kav. 45<br />
                    Jakarta Selatan 12930, Indonesia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-surface-raised rounded-2xl border border-border-subtle">
              <h3 className="text-sm font-bold text-brand-950 mb-2">Ingin berbicara dengan agen spesifik?</h3>
              <p className="text-xs text-neutral-600 mb-4">Lihat direktori agen kami untuk menemukan konsultan yang fokus di area Anda.</p>
              <Link href="/find-agent" className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-600 transition-colors">
                Cari Agen <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border-subtle shadow-lg">
              <h2 className="text-xl font-bold text-brand-950 mb-6">
                Kirim Pesan Langsung
              </h2>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-neutral-700">Nama Lengkap</label>
                    <input type="text" id="name" className="px-4 py-3 rounded-xl border border-border-subtle bg-surface-raised focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all text-sm" placeholder="Contoh: Budi Santoso" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-neutral-700">Nomor Telepon / WhatsApp</label>
                    <input type="tel" id="phone" className="px-4 py-3 rounded-xl border border-border-subtle bg-surface-raised focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all text-sm" placeholder="Contoh: 08123456789" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-neutral-700">Email Address</label>
                  <input type="email" id="email" className="px-4 py-3 rounded-xl border border-border-subtle bg-surface-raised focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all text-sm" placeholder="budi@example.com" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="topic" className="text-xs font-bold text-neutral-700">Topik Pembicaraan</label>
                  <select id="topic" className="px-4 py-3 rounded-xl border border-border-subtle bg-surface-raised focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all text-sm appearance-none cursor-pointer">
                    <option value="">Pilih topik...</option>
                    <option value="buy">Mencari properti untuk dibeli</option>
                    <option value="rent">Mencari properti untuk disewa</option>
                    <option value="sell">Ingin memasarkan/menjual properti</option>
                    <option value="consultation">Konsultasi umum / KPR</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-neutral-700">Pesan Anda</label>
                  <textarea id="message" rows={5} className="px-4 py-3 rounded-xl border border-border-subtle bg-surface-raised focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all text-sm resize-none" placeholder="Ceritakan detail kebutuhan atau pertanyaan Anda..." />
                </div>

                <button type="button" className="mt-2 w-full py-4 rounded-xl bg-brand-950 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]">
                  Kirim Pesan
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-2">
                  Dengan mengirimkan pesan, Anda menyetujui Kebijakan Privasi Eagletree.
                </p>
              </form>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
