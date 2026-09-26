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
      className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-brand-800 py-16 sm:py-24 text-white"
      aria-labelledby="home-hero-title"
    >
      {/* High-resolution Architectural Hero Background — brighter opacity */}
      <Image
        className="object-cover object-center opacity-90 transition-transform duration-1000 scale-100 hover:scale-105"
        src="/property-senja-residence.jpg"
        alt={content.imageAlt}
        fill
        priority
        sizes="100vw"
      />

      {/* Light, Warm Gradient Veil — much less dark, golden warm tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/30 via-transparent to-brand-950/60 pointer-events-none" />
      {/* Warm golden ambient glow from top-right */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
      {/* Soft brand glow from bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-brand-700/15 rounded-full blur-3xl pointer-events-none" />

      <PageContainer className="relative z-10 flex flex-col items-center text-center gap-8 sm:gap-10">
        {/* Headline and Copy — frosted panel for guaranteed readability */}
        <div className="max-w-3xl flex flex-col items-center gap-5 bg-brand-950/35 backdrop-blur-sm rounded-3xl px-8 py-10 sm:px-12 sm:py-14 border border-white/10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/25 backdrop-blur-md border border-accent-400/30 text-accent-100 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles size={13} className="text-accent-300" />
            <span>{content.eyebrow}</span>
          </span>

          <h1
            id="home-hero-title"
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.14] [text-shadow:_0_2px_16px_rgba(0,0,0,0.4),_0_1px_3px_rgba(0,0,0,0.3)]"
          >
            {content.title}
          </h1>

          <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-2xl font-medium [text-shadow:_0_1px_8px_rgba(0,0,0,0.3)]">
            {content.description}
          </p>
        </div>

        {/* Floating Search Bar */}
        <PropertySearch locale={locale} />

        {/* Trust Signals / Value Badges — warm gold-tinted glass */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-3xl"
          aria-label={content.highlightsLabel}
        >
          {content.highlights.map((highlight, idx) => {
            const Icon = highlightIcons[idx % highlightIcons.length];
            return (
              <div
                key={highlight}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-sm"
              >
                <Icon size={14} className="text-accent-300 shrink-0" aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

