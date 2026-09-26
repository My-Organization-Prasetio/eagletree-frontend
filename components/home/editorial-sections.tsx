import { ArrowUpRight, Building2, Calculator, House, KeyRound, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { EditorialHeading } from "@/components/home/editorial-heading";
import { copy, type Locale } from "@/lib/i18n";
import { HorizontalCarousel } from "@/components/home/horizontal-carousel";

type EditorialSectionProps = { locale: Locale };

const shortcutIcons = [House, KeyRound, Building2, Calculator];
const shortcutLinks = ["/for-sale", "/for-rent", "/properties", "/mortgage-calculator"];

export function ShortcutSection({ locale }: EditorialSectionProps) {
  const content = copy[locale].home.shortcuts;

  return (
    <section className="py-16 sm:py-20 bg-surface-raised border-b border-border-subtle" aria-labelledby="shortcut-title">
      <PageContainer>
        <EditorialHeading identity={content.identity} title={content.title} description={content.description} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" id="shortcut-title">
          {content.items.map((label, index) => {
            const Icon = shortcutIcons[index];
            return (
              <Link
                className="group flex flex-col justify-between p-6 rounded-2xl bg-neutral-50/70 border border-border-subtle hover:border-brand-800/40 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[150px]"
                href={shortcutLinks[index]}
                key={label}
              >
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-brand-50 text-brand-950 flex items-center justify-center group-hover:bg-brand-950 group-hover:text-accent-400 group-hover:scale-105 transition-all shadow-xs" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <ArrowUpRight className="text-neutral-400 group-hover:text-accent-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} aria-hidden="true" />
                </div>
                <span className="font-bold text-neutral-900 text-sm sm:text-base group-hover:text-brand-950 transition-colors pt-5">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

const homeBanners = [
  { image: "/property-senja-residence.jpg", href: "/for-sale", position: "center" },
  { image: "/property-bukit-villa.jpg", href: "/for-rent", position: "center" },
] as const;

export function HomeBannerSection({ locale }: EditorialSectionProps) {
  const content = copy[locale].home.banners;

  return (
    <section className="py-14 sm:py-20 bg-background" aria-label={content.label}>
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {content.items.map((item, index) => (
            <Link
              className="group relative h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-border-subtle flex items-end p-7 sm:p-9"
              href={homeBanners[index].href}
              key={item.title}
            >
              <Image
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                src={homeBanners[index].image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{ objectPosition: homeBanners[index].position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/45 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-2 text-white">
                <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-accent-400 border border-white/20">
                  <Sparkles size={12} className="text-accent-400" />
                  {item.eyebrow}
                </span>
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{item.title}</span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-100 group-hover:text-accent-300 group-hover:translate-x-1 transition-all mt-2">
                  {item.action}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function PromotionBanner({ locale }: EditorialSectionProps) {
  const content = copy[locale].home.promotion;

  return (
    <section className="py-14 sm:py-20 bg-background" aria-labelledby="promotion-title">
      <PageContainer>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-brand-800/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-brand-700/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-accent-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator size={13} className="text-accent-400" />
              <span>{content.identity}</span>
            </span>
            <h2 id="promotion-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
              {content.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-100/90 leading-relaxed font-normal">
              {content.description}
            </p>
          </div>

          <Link
            className="relative z-10 inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-[0.98] shrink-0"
            href="/mortgage-calculator"
          >
            <span>{content.button}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}

export function NewsSection({ locale }: EditorialSectionProps) {
  const content = copy[locale].home.news;

  return (
    <section className="py-16 sm:py-24 bg-surface-muted/40 border-b border-border-subtle" aria-labelledby="news-title">
      <PageContainer>
        <EditorialHeading
          identity={content.identity}
          title={content.title}
          description={content.description}
          action={
            <Link className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 hover:text-accent-600 transition-colors" href="/articles">
              <span>{content.link}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          }
        />
        <HorizontalCarousel itemCount={content.items.length} previousLabel={content.previous} nextLabel={content.next} carouselLabel={content.carouselLabel}>
          {content.items.map((item, index) => (
            <article className="group w-[290px] sm:w-[350px] shrink-0 bg-surface-raised rounded-2xl overflow-hidden border border-border-subtle hover:border-brand-800/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" key={item.title}>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 gap-2.5">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                  <span className="text-accent-700 font-bold tracking-wide uppercase text-[11px]">{item.category}</span>
                  <time>{item.date}</time>
                </div>
                <h3 className="text-base font-bold text-brand-950 line-clamp-2 group-hover:text-accent-700 transition-colors leading-snug">{item.title}</h3>
                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed flex-1">{item.description}</p>
                <Link className="inline-flex items-center gap-1 text-xs font-bold text-accent-700 hover:text-accent-600 mt-2" href={`/articles/${index + 1}`}>
                  <span>{content.link}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </HorizontalCarousel>
      </PageContainer>
    </section>
  );
}

export function TestimonialSection({ locale }: EditorialSectionProps) {
  const content = copy[locale].home.testimonials;

  return (
    <section className="py-16 sm:py-24 bg-surface-raised border-b border-border-subtle" aria-labelledby="testimonials-title">
      <PageContainer>
        <EditorialHeading identity={content.identity} title={content.title} description={content.description} />
        <HorizontalCarousel itemCount={content.items.length} previousLabel={content.previous} nextLabel={content.next} carouselLabel={content.carouselLabel}>
          {content.items.map((item) => (
            <figure className="w-[320px] sm:w-[420px] shrink-0 p-7 sm:p-8 rounded-2xl bg-neutral-50/80 border border-border-subtle hover:shadow-md hover:border-brand-800/30 transition-all flex flex-col justify-between gap-6" key={item.name}>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-950 font-bold flex items-center justify-center text-sm shadow-xs border border-brand-200" aria-hidden="true">
                  {item.initials}
                </div>
                <figcaption className="flex flex-col text-xs sm:text-sm">
                  <strong className="font-bold text-brand-950 text-sm sm:text-base">{item.name}</strong>
                  <span className="text-neutral-500">{item.role}</span>
                </figcaption>
              </div>
              <blockquote className="text-sm sm:text-base italic text-neutral-700 leading-relaxed flex-1">
                “{item.quote}”
              </blockquote>
            </figure>
          ))}
        </HorizontalCarousel>
      </PageContainer>
    </section>
  );
}
