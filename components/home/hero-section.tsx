import Image from "next/image";
import { PropertySearch } from "@/components/home/property-search";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

type HeroSectionProps = { locale: Locale };

export function HeroSection({ locale }: HeroSectionProps) {
  const content = copy[locale].home.hero;

  return (
    <section
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-950 py-20 text-white"
      aria-labelledby="home-hero-title"
    >
      {/* High-resolution Architectural Hero Background */}
      <Image
        className="object-cover object-center opacity-40 scale-100"
        src="/property-senja-residence.jpg"
        alt={content.imageAlt}
        fill
        priority
        sizes="100vw"
      />

      {/* Atmospheric Scrim for Legibility & Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/60 to-brand-950/80 pointer-events-none" />

      <PageContainer className="relative z-10 flex flex-col items-center text-center gap-8 sm:gap-10 max-w-4xl">
        {/* Headline and Copy */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent-400">
            {content.eyebrow}
          </p>

          <h1
            id="home-hero-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            {content.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
            {content.description}
          </p>
        </div>

        {/* Search Bar Component */}
        <PropertySearch locale={locale} />

        {/* Trust Signals */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs text-neutral-300 font-medium"
          aria-label={content.highlightsLabel}
        >
          {content.highlights.map((highlight, idx) => (
            <span key={highlight} className="inline-flex items-center gap-2">
              {idx > 0 && <span className="text-neutral-500 hidden sm:inline">•</span>}
              <span>{highlight}</span>
            </span>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

