import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EditorialHeading } from "@/components/home/editorial-heading";
import {
  NewsSection,
  HomeBannerSection,
  TestimonialSection,
} from "@/components/home/editorial-sections";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSpotlightSection } from "@/components/home/about-spotlight-section";
import { StatsRibbon } from "@/components/home/stats-ribbon";
import { ServicesGrid } from "@/components/home/services-grid";
import { MortgageSolutionSection } from "@/components/home/mortgage-solution-section";
import { ClosingCtaBanner } from "@/components/home/closing-cta-banner";
import { PageContainer } from "@/components/layout/page-container";
import { PropertyCard } from "@/components/property/property-card";
import { mockProperties, propertyCategories } from "@/lib/mock-data";
import { copy, resolveLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Eagletree | Temukan Hunian Impian & Investasi Properti Terbaik",
  description: "Jelajahi portofolio rumah eksklusif, apartemen premium, dan vila tropis terbaik di Indonesia bersama konsultan properti tepercaya Eagletree.",
};

type HomeProps = { searchParams: Promise<{ lang?: string }> };

export default async function Home({ searchParams }: HomeProps) {
  const { lang } = await searchParams;
  const locale: Locale = resolveLocale(lang);
  const content = copy[locale].home;
  
  // 4 Featured properties for the reference 4-column row
  const featuredProperties = mockProperties.slice(0, 4);
  const latestProperties = mockProperties.slice(4, 8);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 1. Hero Section (Twilight Villa, Headline with Gold Accent, Dual CTAs, Floating Search & Shortcuts) */}
      <HeroSection locale={locale} />

      {/* 2. Featured Properties / Explore Our Exclusive Listings (Matching Valora Reference 4-Card Row) */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80" aria-labelledby="featured-listings-title">
        <PageContainer>
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2.5 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase mb-2">
                <span className="w-5 h-px bg-gold-500/80" aria-hidden="true" />
                <span>{locale === "en" ? "FEATURED PROPERTIES" : "PROPERTI UNGGULAN"}</span>
              </div>
              <h2
                id="featured-listings-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-serif"
              >
                {locale === "en" ? "Explore Our Exclusive Listings" : "Jelajahi Listing Eksklusif Kami"}
              </h2>
            </div>

            <Link
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gold-500/80 hover:bg-gold-500 text-gold-700 hover:text-navy-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-2xs hover:shadow-xs self-start sm:self-auto cursor-pointer"
              href="/for-sale"
            >
              <span>{locale === "en" ? "View All Properties" : "Lihat Semua Properti"}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} locale={locale} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 3. About Section (Video Spotlight Living Room Media + 3 Golden Value Pillars) */}
      <AboutSpotlightSection locale={locale} />

      {/* 4. Full-Width Dark Stats Ribbon Bar (10+ Years, 1,200+ Sold, 2,500+ Clients, 25+ Awards) */}
      <StatsRibbon locale={locale} />

      {/* 5. Our Services (How We Can Help You - 4 Modular Service Cards) */}
      <ServicesGrid locale={locale} />

      {/* 6. Featured Banners & Dominant KPR Mortgage Solution */}
      <HomeBannerSection locale={locale} />
      <MortgageSolutionSection locale={locale} />

      {/* 7. Lifestyle Categories */}
      <section className="py-20 sm:py-28 bg-[#fdfbf7] border-b border-neutral-200/80" aria-labelledby="projects-title">
        <PageContainer>
          <EditorialHeading
            identity={content.projects.identity}
            title={content.projects.title}
            description={content.projects.description}
            action={
              <Link className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 hover:text-gold-700 transition-colors" href="/properties">
                <span>{content.projects.link}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="projects-title">
            {propertyCategories.map((category, index) => (
              <Link
                className="group relative h-80 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-neutral-200/80 flex items-end p-6 sm:p-8 transition-all duration-300"
                href={category.href}
                key={category.label}
              >
                <Image
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={category.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-1.5 text-white w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight">{content.discover.categories[index]?.label ?? category.label}</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">{content.discover.categories[index]?.description ?? ""}</span>
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 8. Latest Listings (4 cols) */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80" aria-labelledby="latest-title">
        <PageContainer>
          <EditorialHeading
            identity={content.latest.eyebrow}
            title={content.latest.title}
            description={content.latest.description}
            action={
              <Link className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 hover:text-gold-700 transition-colors" href="/for-sale?sort=newest">
                <span>{content.latest.link}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7" id="latest-title">
            {latestProperties.map((property) => (
              <PropertyCard key={property.id} property={property} locale={locale} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 9. Property Articles & Insights */}
      <NewsSection locale={locale} />

      {/* 10. Client Testimonials */}
      <TestimonialSection locale={locale} />

      {/* 11. Closing CTA Skyline Penthouse Banner */}
      <ClosingCtaBanner locale={locale} />
    </div>
  );
}
