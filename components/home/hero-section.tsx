import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { PropertySearch } from "@/components/home/property-search";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

type HeroSectionProps = { locale: Locale };

const highlightIcons = [Sparkles, ShieldCheck, CheckCircle2];

export function HeroSection({ locale }: HeroSectionProps) {
  const content = copy[locale].home.hero;

  return (
    <section
      className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-brand-900 py-16 sm:py-24 text-white"
      aria-labelledby="home-hero-title"
    >
      {/* High-resolution Architectural Hero Background */}
      <Image
        className="object-cover object-center opacity-75 transition-transform duration-1000 scale-100 hover:scale-105"
        src="/property-mangrove-house.jpg"
        alt={content.imageAlt}
        fill
        priority
        sizes="100vw"
      />

      {/* Brighter, Cheerful Luxury Gradient Veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-brand-900/10 to-brand-900/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(16,45,38,0.4)_100%)] pointer-events-none" />

      <PageContainer className="relative z-10 flex flex-col items-center text-center gap-8 sm:gap-10">
        {/* Headline and Copy */}
        <div className="max-w-3xl flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-accent-300 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles size={13} className="text-accent-300" />
            <span>{content.eyebrow}</span>
          </span>

          <h1
            id="home-hero-title"
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.14] drop-shadow-lg"
          >
            {content.title}
          </h1>

          <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-2xl font-medium drop-shadow-md">
            {content.description}
          </p>
        </div>

        {/* Floating Search Bar */}
        <PropertySearch locale={locale} />

        {/* Trust Signals / Value Badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-3xl"
          aria-label={content.highlightsLabel}
        >
          {content.highlights.map((highlight, idx) => {
            const Icon = highlightIcons[idx % highlightIcons.length];
            return (
              <div
                key={highlight}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium shadow-xs"
              >
                <Icon size={14} className="text-accent-400 shrink-0" aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
