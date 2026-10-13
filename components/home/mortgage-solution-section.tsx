import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Landmark,
  Percent,
  PhoneCall,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type MortgageSolutionSectionProps = { locale: Locale };

const bankPartners = [
  "BCA",
  "Bank Mandiri",
  "BNI",
  "BRI",
  "CIMB Niaga",
  "PermataBank",
  "OCBC",
  "Danamon",
];

export function MortgageSolutionSection({ locale }: MortgageSolutionSectionProps) {
  return (
    <section className="py-14 sm:py-20 bg-background" aria-labelledby="solusi-kpr-title">
      <PageContainer>
        {/* Deep Midnight Navy Container with Refined Golden & Ambient Depth */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-navy-950 via-[#0e1e36] to-navy-950 text-white p-7 sm:p-10 lg:p-12 xl:p-14 border border-navy-800 shadow-[0_20px_50px_-15px_rgba(12,25,44,0.3)]">
          {/* Subtle Ambient Radial Lighting for Depth */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-gold-400/[0.07] rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.04),transparent)]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Eyebrow, Heading, 3 Value Propositions & Bank Partners */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
              {/* Elegant Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/25 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-5 shadow-2xs">
                <Landmark size={14} className="text-gold-400" />
                <span>
                  {locale === "en"
                    ? "MORTGAGE SOLUTIONS & FINANCING"
                    : "SOLUSI KPR & PEMBIAYAAN RESMI"}
                </span>
              </div>

              {/* Editorial Headline */}
              <h2
                id="solusi-kpr-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] mb-4 font-serif"
              >
                {locale === "en" ? (
                  <>
                    Finance Your Dream Home <br />
                    <span className="text-gold-400 italic font-normal">With Complete Certainty.</span>
                  </>
                ) : (
                  <>
                    Rencanakan Kepemilikan Hunian <br />
                    <span className="text-gold-400 italic font-normal">Dengan Solusi KPR Terpercaya.</span>
                  </>
                )}
              </h2>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mb-8">
                {locale === "en"
                  ? "Calculate transparent monthly installment estimates, explore indicative promo rates from tier-1 partner banks, and receive end-to-end guidance from licensed Eagletree advisors at zero client consultation fee."
                  : "Hitung estimasi cicilan transparan, pelajari indikasi suku bunga promo mulai 2.75%* fixed dari bank rekanan terpercaya, dan nikmati pendampingan pengajuan berkas KPR ke perbankan tanpa biaya tambahan."}
              </p>

              {/* 3 Premium Value Proposition Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full mb-8">
                <div className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-gold-400/30 transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/20 group-hover:scale-105 transition-transform">
                    <Percent size={16} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-white">
                      {locale === "en" ? "From 2.75%* Fixed" : "Mulai 2.75%* Fixed"}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-neutral-300 font-light mt-0.5">
                      {locale === "en" ? "Bank promo simulation*" : "Simulasi promo bank*"}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-gold-400/30 transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/20 group-hover:scale-105 transition-transform">
                    <Zap size={16} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-white">
                      {locale === "en" ? "Document Support" : "Bantuan Berkas KPR"}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-neutral-300 font-light mt-0.5">
                      {locale === "en" ? "1-3 days prep" : "Pendampingan berkas"}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-gold-400/30 transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/20 group-hover:scale-105 transition-transform">
                    <ShieldCheck size={16} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-white">
                      {locale === "en" ? "100% Free Advice" : "100% Bebas Biaya"}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-neutral-300 font-light mt-0.5">
                      {locale === "en" ? "Zero client commission" : "Tanpa komisi nasabah"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Official Bank Partners Strip */}
              <div className="w-full pt-5 border-t border-white/10 flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 shrink-0">
                    {locale === "en" ? "Official Banking Partners:" : "Mitra Bank Rekanan Resmi:"}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {bankPartners.map((bank) => (
                      <span
                        key={bank}
                        className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white text-[11px] sm:text-xs font-medium tracking-wide transition-colors"
                      >
                        {bank}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  *Suku bunga promo merupakan simulasi indikatif program perbankan. Persetujuan kredit dan ketentuan akhir sepenuhnya menjadi hak prerogatif bank penyedia KPR.
                </p>
              </div>
            </div>

            {/* Right Column: Calculator Gateway Card */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-white/15 p-6 sm:p-8 shadow-xl flex flex-col items-center text-center">
                {/* Top Subtle Gold Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500" />

                <div className="w-13 h-13 rounded-2xl bg-gold-500 hover:bg-gold-400 text-navy-950 flex items-center justify-center font-bold shadow-md mb-4 transition-transform hover:scale-105">
                  <Calculator size={24} strokeWidth={2.2} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {locale === "en" ? "Interactive Mortgage Calculator" : "Kalkulator Simulasi KPR"}
                </h3>

                <p className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed mb-6 max-w-xs">
                  {locale === "en"
                    ? "Explore detailed monthly installments, down payment options, and bank rate comparisons on our dedicated mortgage portal."
                    : "Simulasikan angsuran bulanan, sesuaikan uang muka (DP), dan bandingkan suku bunga berbagai bank rekanan secara transparan."}
                </p>

                {/* Primary CTA Button */}
                <Link
                  href="/mortgage-calculator"
                  className="w-full py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2 cursor-pointer mb-3 group"
                >
                  <span>{locale === "en" ? "Go to Mortgage Calculator" : "Buka Kalkulator KPR"}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary WhatsApp Link */}
                <a
                  href="https://wa.me/6281290088902?text=Halo%20EagleTree%2C%20saya%20ingin%20berkonsultasi%20mengenai%20simulasi%20dan%20pengajuan%20KPR."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-neutral-200 hover:text-white font-medium transition-all flex items-center justify-center gap-2 group"
                >
                  <PhoneCall size={14} className="text-gold-400 group-hover:scale-110 transition-transform" />
                  <span>{locale === "en" ? "Chat with Mortgage Specialist" : "Tanya Spesialis KPR via WhatsApp"}</span>
                </a>

                {/* Trust guarantee micro note */}
                <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-1.5 text-[11px] text-neutral-400">
                  <CheckCircle2 size={14} className="text-gold-400 shrink-0" />
                  <span>
                    {locale === "en"
                      ? "100% Free Consultation & Guidance"
                      : "Konsultasi & Pendampingan 100% Gratis"}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </PageContainer>
    </section>
  );
}
