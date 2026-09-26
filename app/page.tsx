import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { EditorialHeading } from "@/components/home/editorial-heading";
import {
  NewsSection,
  HomeBannerSection,
  PromotionBanner,
  ShortcutSection,
  TestimonialSection,
} from "@/components/home/editorial-sections";
import { HeroSection } from "@/components/home/hero-section";
import { TrustSection } from "@/components/home/trust-section";
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
  const popularProperties = mockProperties.slice(0, 3);
  const latestProperties = mockProperties.slice(3, 7);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 1. Hero Section */}
      <HeroSection locale={locale} />

      {/* 2. Quick Shortcuts */}
      <ShortcutSection locale={locale} />

      {/* 3. Featured Banners */}
      <HomeBannerSection locale={locale} />

      {/* 4. KPR Promotion Banner */}
      <PromotionBanner locale={locale} />

      {/* 5. Lifestyle Categories */}
      <section className="py-16 sm:py-24 bg-surface-muted/40 border-b border-border-subtle" aria-labelledby="projects-title">
        <PageContainer>
          <EditorialHeading
            identity={content.projects.identity}
            title={content.projects.title}
            description={content.projects.description}
            action={
              <Link className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 hover:text-accent-600 transition-colors" href="/properties">
                <span>{content.projects.link}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="projects-title">
            {propertyCategories.map((category, index) => (
              <Link
                className="group relative h-72 sm:h-84 md:h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-border-subtle flex items-end p-7 sm:p-8 transition-all duration-500"
                href={category.href}
                key={category.label}
              >
                <Image
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  src={category.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-1.5 text-white w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight">{content.discover.categories[index]?.label ?? category.label}</span>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-accent-300 group-hover:bg-accent-500 group-hover:text-brand-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shadow-sm">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-brand-100/85 font-normal leading-relaxed">{content.discover.categories[index]?.description ?? ""}</span>
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 6. Popular / Handpicked Properties (3 cols) */}
      <section className="py-16 sm:py-24 bg-surface-raised border-b border-border-subtle" aria-labelledby="popular-title">
        <PageContainer>
          <EditorialHeading
            identity={content.popular.identity}
            title={content.popular.title}
            description={content.popular.description}
            action={
              <Link className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 hover:text-accent-600 transition-colors" href="/for-sale">
                <span>{content.popular.link}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="popular-title">
            {popularProperties.map((property) => (
              <PropertyCard key={property.id} property={property} locale={locale} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 7. Latest Listings (4 cols) */}
      <section className="py-16 sm:py-24 bg-background border-b border-border-subtle" aria-labelledby="latest-title">
        <PageContainer>
          <EditorialHeading
            identity={content.latest.eyebrow}
            title={content.latest.title}
            description={content.latest.description}
            action={
              <Link className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 hover:text-accent-600 transition-colors" href="/for-sale?sort=newest">
                <span>{content.latest.link}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7" id="latest-title">
            {latestProperties.map((property) => (
              <PropertyCard key={property.id} property={property} locale={locale} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 8. Trust & Local Advisors */}
      <TrustSection locale={locale} />

      {/* 9. Property Articles & Insights */}
      <NewsSection locale={locale} />

      {/* 10. Client Testimonials */}
      <TestimonialSection locale={locale} />

      {/* 11. Grand Closing CTA Banner */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 text-white relative overflow-hidden" aria-labelledby="cta-title">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-0 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl pointer-events-none" />

        <PageContainer className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-accent-400 border border-white/15 mb-3">
              <Sparkles size={13} className="text-accent-400" />
              <span>{content.cta.eyebrow}</span>
            </span>
            <h2 id="cta-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {content.cta.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-100/85 leading-relaxed">
              {content.cta.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all active:scale-95 cursor-pointer"
              href="/properties"
            >
              <span>{content.cta.button}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
              href="/find-agent"
            >
              <span>Konsultasi Gratis</span>
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
