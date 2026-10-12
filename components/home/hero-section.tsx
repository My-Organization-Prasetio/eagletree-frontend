import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Calculator,
  Compass,
  KeyRound,
  Sparkles,
  Tag,
  UserCheck,
} from "lucide-react";
import { PropertySearch } from "@/components/home/property-search";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

type HeroSectionProps = { locale: Locale };

export function HeroSection({ locale }: HeroSectionProps) {
  const content = copy[locale].home.hero;

  const primaryShortcuts = [
    {
      href: "/for-sale",
      label: locale === "en" ? "For Sale" : "Dijual",
      icon: Building2,
    },
    {
      href: "/for-rent",
      label: locale === "en" ? "For Rent" : "Disewa",
      icon: KeyRound,
    },
    {
      href: "/new-projects",
      label: locale === "en" ? "New Projects" : "Proyek Baru",
      icon: Sparkles,
    },
    {
      href: "/titip-properti",
      label: locale === "en" ? "List Property" : "Titip Properti",
      icon: Tag,
    },
    {
      href: "/mortgage-calculator",
      label: locale === "en" ? "Mortgage" : "Simulasi KPR",
      icon: Calculator,
    },
    {
      href: "/find-agent",
      label: locale === "en" ? "Find Agent" : "Cari Agen",
      icon: UserCheck,
    },
  ];

  return (
    <div className="relative bg-[#faf8f5] border-b border-neutral-200/80 overflow-hidden">
      {/* 1. Main Hero Canvas */}
      <section
        className="pt-10 sm:pt-14 lg:pt-18 pb-16 sm:pb-22 lg:pb-26 bg-[#faf8f5] relative"
        aria-labelledby="home-hero-title"
      >
        {/* Subtle Ambient Light Accents */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(197,155,39,0.08),transparent)]"
          aria-hidden="true"
        />

        <PageContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Headline, Narrative & Dual CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase mb-3.5">
                <span className="w-6 h-px bg-gold-500/80" aria-hidden="true" />
                <span>{locale === "en" ? "PREMIUM PROPERTIES" : "PROPERTI EKSKLUSIF"}</span>
              </div>

              {/* Main Headline with Gold Italic Accent */}
              <h1
                id="home-hero-title"
                className="text-4xl sm:text-5xl lg:text-[3.9rem] font-bold text-navy-950 tracking-[-0.035em] leading-[1.08]"
              >
                {locale === "en" ? (
                  <>
                    Find Your <br />
                    <span className="text-gold-500 font-serif font-normal italic">Dream Home</span> <br />
                    Live the Luxury
                  </>
                ) : (
                  <>
                    Temukan Hunian <br />
                    <span className="text-gold-500 font-serif font-normal italic">Impian Terbaik</span> <br />
                    Rasakan Kemewahan
                  </>
                )}
              </h1>

              {/* Refined Description */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mt-4 sm:mt-5">
                {locale === "en"
                  ? "Discover exceptional properties that redefine luxury living. Your perfect home is just a step away."
                  : "Jelajahi properti terkurasi yang mendefinisikan ulang standar kenyamanan dan investasi properti mewah di Indonesia."}
              </p>

              {/* Dual Action Buttons Matching Valora Reference */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-9">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>{locale === "en" ? "Explore Properties" : "Jelajahi Properti"}</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white/95 hover:bg-white text-navy-950 font-semibold text-xs sm:text-sm border border-neutral-300/80 shadow-2xs hover:shadow-sm transition-all cursor-pointer"
                >
                  <CalendarCheck size={16} className="text-gold-600" />
                  <span>{locale === "en" ? "Book a Consultation" : "Jadwalkan Konsultasi"}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: High-End Twilight Architecture Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/12] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(12,25,44,0.18)] border border-neutral-200/90 group">
                <Image
                  src="/editorial-luxury-villa.jpg"
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Signature Tag */}
                <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-[10px] font-bold tracking-widest text-gold-600 uppercase shadow-xs">
                  Eagletree Signature
                </div>

                {/* Mini Caption Pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xs flex items-center justify-between text-xs text-navy-950">
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Modern Villa in Beverly Hills Style</p>
                    <p className="text-[11px] text-neutral-500">Kebayoran Baru, Jakarta Selatan &middot; Mulai Rp 4,5 Miliar</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-navy-950 text-white text-[10px] font-bold uppercase tracking-wider shrink-0">
                    DIJUAL
                  </span>
                </div>
              </div>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* 2. Overlapping Floating Search Console */}
      <section className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <PropertySearch locale={locale} />
      </section>

      {/* 3. Quick Shortcuts Deck (Jelajahi Eagletree) */}
      <section className="py-8 sm:py-10 bg-white" aria-label={locale === "en" ? "Explore Eagletree Shortcuts" : "Pintasan Jelajahi Eagletree"}>
        <PageContainer>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-px bg-gold-600/80" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                {locale === "en" ? "Explore Eagletree" : "Jelajahi Eagletree"}
              </span>
            </div>
            <span className="text-[11px] text-neutral-400 font-mono tracking-wider hidden sm:inline-block">
              {locale === "en" ? "Quick Navigation" : "Akses Cepat"}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3.5">
            {primaryShortcuts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center justify-center py-3.5 px-2 sm:py-4 sm:px-3 rounded-xl bg-[#faf8f5] hover:bg-white border border-neutral-200/80 hover:border-gold-500 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-navy-950 group-hover:bg-navy-950 group-hover:text-gold-400 flex items-center justify-center transition-all duration-200 shadow-2xs border border-neutral-200/60 mb-2">
                  <item.icon size={19} strokeWidth={1.8} />
                </span>
                <span className="text-xs font-bold text-navy-950 group-hover:text-gold-600 transition-colors leading-tight">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
