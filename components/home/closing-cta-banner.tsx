import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StrongPhoneCallIcon } from "@/components/icons/contact-icons";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type ClosingCtaBannerProps = { locale: Locale };

export function ClosingCtaBanner({ locale }: ClosingCtaBannerProps) {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32 bg-navy-950 text-white border-t border-navy-800"
      aria-labelledby="closing-cta-title"
    >
      {/* High-End Twilight Penthouse Panorama Background */}
      <div className="absolute inset-0">
        <Image
          src="/closing-penthouse-banner.jpg"
          alt="Luxury Penthouse Terrace at Dusk"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic Gradient: Deep Midnight Navy to transparent */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/40"
          aria-hidden="true"
        />
      </div>

      <PageContainer className="relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-gold-400 text-xs font-bold tracking-[0.22em] uppercase mb-4">
            <span className="w-6 h-px bg-gold-400" aria-hidden="true" />
            <span>{locale === "en" ? "START YOUR JOURNEY" : "MULAI LANGKAH ANDA"}</span>
          </div>

          {/* Heading */}
          <h2
            id="closing-cta-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-serif mb-4"
          >
            {locale === "en" ? (
              <>
                Ready to Find Your <br />
                <span className="text-gold-400 italic font-normal">Dream Property?</span>
              </>
            ) : (
              <>
                Siap Menemukan <br />
                <span className="text-gold-400 italic font-normal">Properti Impian Anda?</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-lg mb-8">
            {locale === "en"
              ? "Let our certified property advisors guide you to the perfect home with complete legal security."
              : "Konsultan properti tersertifikasi AREBI siap mendampingi Anda menemukan hunian terbaik dengan kepastian legalitas penuh."}
          </p>

          {/* Dual Action Buttons Matching Reference */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <StrongPhoneCallIcon size={16} />
              <span>{locale === "en" ? "Book a Consultation" : "Jadwalkan Konsultasi"}</span>
            </Link>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>{locale === "en" ? "Browse Listings" : "Jelajahi Semua Listing"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
