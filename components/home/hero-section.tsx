import Image from "next/image";
import { PropertySearch } from "@/components/home/property-search";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

type HeroSectionProps = { locale: Locale };

export function HeroSection({ locale }: HeroSectionProps) {
  const content = copy[locale].home.hero;

  const editorialMetrics = [
    { value: "450+", label: content.highlights[0] ?? (locale === "en" ? "Curated Properties" : "Properti Pilihan") },
    { value: "100%", label: content.highlights[1] ?? (locale === "en" ? "Verified Legal Due Diligence" : "Legalitas Terverifikasi") },
    { value: "15+ Thn", label: content.highlights[2] ?? (locale === "en" ? "Advisory Experience" : "Pendampingan Ahli") },
  ];

  return (
    <section
      className="relative bg-[#faf8f5] border-b border-neutral-200/80 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
      aria-labelledby="home-hero-title"
    >
      {/* Architectural Subtle Ambient Lighting & Grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,154,85,0.07),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e1d8_1px,transparent_1px),linear-gradient(to_bottom,#e5e1d8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_20%,transparent_100%)] opacity-25"
        aria-hidden="true"
      />

      <PageContainer className="relative z-10">
        {/* Main Editorial Presentation: Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Brand Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-3 text-accent-700 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="w-8 h-px bg-accent-600/70" aria-hidden="true" />
              <span>{content.eyebrow}</span>
              <span className="text-[11px] text-neutral-400 font-mono tracking-normal font-normal">/ 01</span>
            </div>

            {/* Editorial Title */}
            <h1
              id="home-hero-title"
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-brand-950 tracking-[-0.035em] leading-[1.08] mt-4 sm:mt-5"
            >
              {content.title}
            </h1>

            {/* Refined Narrative */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mt-4 sm:mt-5">
              {content.description}
            </p>

            {/* Editorial Quality Metrics */}
            <div
              className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-neutral-200/80 max-w-xl"
              aria-label={content.highlightsLabel}
            >
              {editorialMetrics.map((item, index) => (
                <div key={item.label} className={index > 0 ? "border-l border-neutral-200/80 pl-4" : ""}>
                  <span className="block text-xl sm:text-2xl font-bold text-brand-950 tracking-tight">
                    {item.value}
                  </span>
                  <span className="block text-xs text-neutral-500 font-medium mt-1 leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[5/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_20px_50px_-15px_rgba(16,45,38,0.12)] group">
              <Image
                src="/editorial-luxury-villa.jpg"
                alt={content.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle architectural vignette overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/15 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Luxury Portfolio Stamp */}
              <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-[10px] font-bold tracking-widest text-accent-700 uppercase shadow-2xs">
                Eagletree Signature
              </div>

              {/* Architectural Detail Plate */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-brand-950 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between text-[11px] font-bold tracking-wider text-accent-700 uppercase">
                  <span>{locale === "en" ? "Travertine Pavilion" : "Paviliun Travertine"}</span>
                  <span className="font-mono text-neutral-500 font-normal">Koleksi 2026</span>
                </div>
                <p className="text-sm font-bold text-brand-950 mt-0.5 truncate">
                  Cilandak, Jakarta Selatan
                </p>
                <div className="flex items-center gap-2.5 text-xs text-neutral-600 mt-1 font-medium">
                  <span>850 m²</span>
                  <span className="text-neutral-300">·</span>
                  <span>{locale === "en" ? "5 Bedrooms" : "5 Kamar Tidur"}</span>
                  <span className="text-neutral-300">·</span>
                  <span>{locale === "en" ? "Reflection Pool" : "Kolam Refleksi"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Precision Search Console */}
        <div className="mt-10 sm:mt-14 lg:mt-16 w-full">
          <PropertySearch locale={locale} />
        </div>
      </PageContainer>
    </section>
  );
}

