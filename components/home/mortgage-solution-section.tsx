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
        {/* Dominant Red Card with Refined Transparency (Strictly Zero White Borders, Strictly No Rounded) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#821818]/65 via-[#962020]/55 to-[#701414]/65 backdrop-blur-md text-white p-7 sm:p-10 lg:p-14 border-0 rounded-none shadow-[0_20px_50px_-15px_rgba(130,24,24,0.18)]">
          {/* Subtle Ambient Depth (No harsh white grid) */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(255,255,255,0.06),transparent)]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Dominant Copy, 3 Pillars & Bank Ticker */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
              {/* Sharp Eyebrow Badge (No rounded) */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-black/35 border-l-4 border-amber-400 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase rounded-none mb-4 shadow-xs">
                <Landmark size={14} className="text-amber-400" />
                <span>{locale === "en" ? "MORTGAGE SOLUTIONS & FINANCING" : "SOLUSI KPR & PEMBIAYAAN RESMI"}</span>
              </div>

              {/* Dominant Headline */}
              <h2
                id="solusi-kpr-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.18] mb-4 font-serif"
              >
                {locale === "en" ? (
                  <>
                    Finance Your Dream Home <br />
                    <span className="text-amber-300 italic font-normal">With Complete Certainty.</span>
                  </>
                ) : (
                  <>
                    Rencanakan Kepemilikan Hunian <br />
                    <span className="text-amber-300 italic font-normal">Dengan Solusi KPR Terpercaya.</span>
                  </>
                )}
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-neutral-100 font-light leading-relaxed max-w-2xl mb-7">
                {locale === "en"
                  ? "Calculate transparent monthly installments, compare special promo interest rates from 8+ tier-1 banking partners, and receive end-to-end guidance from licensed Eagletree mortgage specialists at zero consultation fee."
                  : "Hitung estimasi cicilan transparan, bandingkan suku bunga promo mulai 2.75% fixed dari 8+ bank rekanan tier-1 terpercaya, dan nikmati pendampingan pengajuan KPR hingga akad kredit tanpa biaya tambahan."}
              </p>

              {/* 3 Sharp Value Proposition Badges (No rounded, Zero borders) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-7">
                <div className="p-3.5 bg-black/25 rounded-none flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 rounded-none border border-amber-300/30">
                    <Percent size={15} />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-white">Bunga 2.75% Fixed</span>
                    <span className="block text-[11px] text-neutral-200 font-light">Promo bank tier-1</span>
                  </div>
                </div>

                <div className="p-3.5 bg-black/25 rounded-none flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 rounded-none border border-amber-300/30">
                    <Zap size={15} />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-white">Fast Approval</span>
                    <span className="block text-[11px] text-neutral-200 font-light">Proses 1-3 hari kerja</span>
                  </div>
                </div>

                <div className="p-3.5 bg-black/25 rounded-none flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 rounded-none border border-amber-300/30">
                    <ShieldCheck size={15} />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-white">100% Bebas Biaya</span>
                    <span className="block text-[11px] text-neutral-200 font-light">Tanpa komisi klien</span>
                  </div>
                </div>
              </div>

              {/* Bank Partners Strip (No rounded, subtle dark divider, Zero white border) */}
              <div className="w-full pt-4 border-t border-black/25 flex flex-col sm:flex-row sm:items-center gap-2.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300/90 font-bold shrink-0">
                  {locale === "en" ? "Partner Banks:" : "Mitra Bank Rekanan:"}
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {bankPartners.map((bank) => (
                    <span
                      key={bank}
                      className="px-2.5 py-1 bg-black/30 text-neutral-100 text-[11px] font-semibold rounded-none tracking-wide"
                    >
                      {bank}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Gateway Card to KPR Page (Strictly Sharp, Zero Borders) */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-black/35 backdrop-blur-md p-7 sm:p-8 rounded-none text-center flex flex-col items-center justify-between shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)]">
                
                <div className="w-13 h-13 bg-amber-400 text-navy-950 flex items-center justify-center rounded-none font-bold shadow-md mb-4">
                  <Calculator size={24} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  {locale === "en" ? "Interactive Mortgage Calculator" : "Kalkulator Simulasi KPR"}
                </h3>

                <p className="text-xs text-neutral-200 font-light leading-relaxed mb-6 max-w-xs">
                  {locale === "en"
                    ? "Explore detailed monthly installments, down payment options, and bank rate comparisons on our dedicated mortgage portal."
                    : "Simulasikan angsuran bulanan, sesuaikan uang muka (DP), dan bandingkan suku bunga berbagai bank rekanan di halaman kalkulator kami."}
                </p>

                {/* Primary Sharp CTA Button (No rounded) */}
                <Link
                  href="/mortgage-calculator"
                  className="w-full py-3.5 px-6 bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs sm:text-sm tracking-wide rounded-none transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer mb-3"
                >
                  <span>{locale === "en" ? "Go to Mortgage Calculator" : "Buka Kalkulator KPR"}</span>
                  <ArrowRight size={15} />
                </Link>

                {/* Secondary Sharp WhatsApp Link */}
                <a
                  href="https://wa.me/628111222333?text=Halo%20Eagletree%2C%20saya%20ingin%20berkonsultasi%20mengenai%20simulasi%20dan%20pengajuan%20KPR."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-neutral-200 hover:text-amber-300 font-medium transition-colors pt-1"
                >
                  <PhoneCall size={13} className="text-amber-400" />
                  <span>{locale === "en" ? "Chat with Mortgage Specialist" : "Tanya Spesialis KPR via WhatsApp"}</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </PageContainer>
    </section>
  );
}
