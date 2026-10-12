"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Compass, Handshake, Play } from "lucide-react";
import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type AboutSpotlightSectionProps = { locale: Locale };

export function AboutSpotlightSection({ locale }: AboutSpotlightSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const pillars = [
    {
      icon: Compass,
      title: locale === "en" ? "Expert Guidance" : "Panduan Konsultan Ahli",
      desc:
        locale === "en"
          ? "Professional advice for smart investment and residential decisions."
          : "Pendampingan profesional oleh penasihat berlisensi AREBI untuk setiap keputusan cerdas Anda.",
    },
    {
      icon: Building,
      title: locale === "en" ? "Wide Range" : "Portofolio Eksklusif",
      desc:
        locale === "en"
          ? "Access to exclusive premium properties in Indonesia's prime locations."
          : "Akses ke pilihan rumah, vila, dan penthouse mewah terkurasi di lokasi paling strategis.",
    },
    {
      icon: Handshake,
      title: locale === "en" ? "Trusted Service" : "Layanan Aman & Terpercaya",
      desc:
        locale === "en"
          ? "Transparent deals and hassle-free transactions with legal certainty."
          : "Jaminan kepastian legalitas (SHM/HGB), transparansi transaksi, dan proses yang nyaman.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fcFAF7] border-b border-neutral-200/80" aria-labelledby="about-spotlight-title">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Video Spotlight Living Room Media */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(12,25,44,0.14)] border border-neutral-200/90 group">
              <Image
                src="/editorial-luxury-interior.jpg"
                alt="Eagletree Luxury Living Interior"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Cinematic Vignette */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Centered Interactive Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label="Putar Video Tur Interior"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-navy-950 backdrop-blur-md flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/80 cursor-pointer group/btn"
                >
                  <Play size={24} className="fill-navy-950 text-navy-950 ml-1 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>

              {/* Floating Quality Tag */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-[10px] font-bold tracking-wider uppercase text-gold-600 shadow-2xs">
                Private Viewing Video Tour
              </div>

              {/* Bottom Mini Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-navy-950/85 backdrop-blur-md text-white border border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold truncate">Grand Penthouse Living Room & Sky Lounge</span>
                <span className="text-[10px] font-mono text-gold-400 font-bold shrink-0 ml-2">4K UHD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, 3 Golden Value Pillars & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase mb-3.5">
              <span className="w-6 h-px bg-gold-500/80" aria-hidden="true" />
              <span>{locale === "en" ? "ABOUT EAGLETREE REALTY" : "TENTANG EAGLETREE"}</span>
            </div>

            {/* Editorial Heading */}
            <h2
              id="about-spotlight-title"
              className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-navy-950 leading-[1.18] mb-4 font-serif"
            >
              {locale === "en" ? (
                <>
                  We Help You Find <br />
                  <span className="text-gold-500 italic font-normal">The Perfect Space</span>
                </>
              ) : (
                <>
                  Kami Membantu Anda Menemukan <br />
                  <span className="text-gold-500 italic font-normal">Ruang & Hunian Terbaik</span>
                </>
              )}
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-8 max-w-xl">
              {locale === "en"
                ? "At Eagletree Realty, we believe that a home is more than just a place—it's a lifestyle. Our mission is to help you find properties that match your dreams and exceed your expectations with full legal peace of mind."
                : "Di Eagletree Realty, kami meyakini hunian lebih dari sekadar bangunan fisik—ia adalah cerminan gaya hidup dan warisan masa depan. Misi kami mendampingi setiap langkah Anda menemukan properti yang sempurna dengan kepastian legalitas prima."}
            </p>

            {/* 3 Pillars Grid with Golden Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 w-full border-t border-b border-neutral-200/80 py-6">
              {pillars.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <item.icon size={19} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy-950 leading-snug mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>{locale === "en" ? "Learn More About Us" : "Pelajari Tentang Kami"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}
