import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StrongPhoneCallIcon } from "@/components/icons/contact-icons";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type AboutHeroProps = {
  locale: Locale;
};

export function AboutHero({ locale }: AboutHeroProps) {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32 bg-navy-950 text-white border-b border-navy-800"
      aria-labelledby="about-hero-title"
    >
      {/* Authentic High-Resolution Architectural Skyline Background */}
      <div className="absolute inset-0">
        <Image
          src="/closing-penthouse-banner.jpg"
          alt="Eagletree Penthouse Terrace at Dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic Gradient: Deep Midnight Navy into open atmosphere */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/45"
          aria-hidden="true"
        />
      </div>

      <PageContainer className="relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow matching Homepage "MULAI LANGKAH ANDA" */}
          <div className="inline-flex items-center gap-2.5 text-gold-400 text-xs font-bold tracking-[0.22em] uppercase mb-4">
            <span className="w-6 h-px bg-gold-400" aria-hidden="true" />
            <span>{locale === "en" ? "ABOUT EAGLETREE" : "TENTANG EAGLETREE"}</span>
          </div>

          {/* Natural, Personal Headline */}
          <h1
            id="about-hero-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-serif mb-4"
          >
            {locale === "en" ? (
              <>
                Getting to Know EagleTree, <br />
                <span className="text-gold-400 italic font-normal">
                  Closer to Your Dream Home.
                </span>
              </>
            ) : (
              <>
                Mengenal EagleTree, <br />
                <span className="text-gold-400 italic font-normal">
                  Lebih Dekat dengan Impian Anda.
                </span>
              </>
            )}
          </h1>

          {/* Natural, Human-Centered Supporting Narrative */}
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-lg mb-8">
            {locale === "en"
              ? "Every journey toward a dream home holds a unique story. We are here to help you navigate the right path with a personal, transparent, and tailored advisory approach."
              : "Setiap perjalanan menuju hunian impian memiliki cerita. Kami hadir untuk membantu Anda menemukan jalan yang tepat, dengan pendekatan yang lebih personal, transparan, dan sesuai kebutuhan Anda."}
          </p>

          {/* Dual Action Buttons matching Homepage */}
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
              <span>{locale === "en" ? "Explore Listings" : "Jelajahi Properti"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
