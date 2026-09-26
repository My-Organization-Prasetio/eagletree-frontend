import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { EditorialHeading } from "@/components/home/editorial-heading";
import { copy, type Locale } from "@/lib/i18n";
import { HorizontalCarousel } from "@/components/home/horizontal-carousel";

type EditorialSectionProps = { locale: Locale };

const shortcutLinks = ["/for-sale", "/for-rent", "/properties", "/mortgage-calculator"];
const shortcutSubtitles = [
  "Rumah, apartemen & vila pilihan",
  "Sewa jangka pendek & panjang",
  "Seluruh portofolio terkurasi",
  "Simulasi cicilan & suku bunga bank",
];

export function ShortcutSection({ locale }: EditorialSectionProps) {
  const content = copy[locale].home.shortcuts;

  return (
    <section className="py-12 sm:py-16 bg-surface-raised border-b border-border-subtle" aria-labelledby="shortcut-title">
      <PageContainer>
        <EditorialHeading identity={content.identity} title={content.title} description={content.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="shortcut-title">
          {content.items.map((label, index) => (
            <Link
              className="group flex flex-col justify-between p-5 rounded-xl bg-white border border-neutral-200/80 hover:border-brand-900 shadow-2xs hover:shadow-sm transition-all"
              href={shortcutLinks[index]}
              key={label}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-accent-700 transition-colors">
                  0{index + 1}
                </span>
                <ArrowUpRight className="text-neutral-400 group-hover:text-brand-950 transition-colors" size={17} aria-hidden="true" />
              </div>
              <div>
                <span className="block font-bold text-brand-950 text-base group-hover:text-accent-700 transition-colors">
                  {label}
                </span>
                <span className="block text-xs text-neutral-500 mt-1 leading-normal">
                  {shortcutSubtitles[index]}
                </span>
              </div>
            </Link>
          ))}
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
              className="group relative h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden border border-border-subtle flex items-end p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow"
              href={homeBanners[index].href}
              key={item.title}
            >
              <Image
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={homeBanners[index].image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{ objectPosition: homeBanners[index].position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-2 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-400">
                  {item.eyebrow}
                </span>
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{item.title}</span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-100 group-hover:text-accent-300 transition-colors mt-2">
                  {item.action}
                  <ArrowUpRight size={15} aria-hidden="true" />
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
    <section className="py-12 sm:py-16 bg-background" aria-labelledby="promotion-title">
      <PageContainer>
        <div className="rounded-xl bg-brand-950 p-8 sm:p-10 lg:p-12 text-white border border-brand-900 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-400 mb-2 block">
              {content.identity}
            </span>
            <h2 id="promotion-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
              {content.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {content.description}
            </p>
          </div>

          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-brand-950 font-bold text-sm transition-colors shrink-0"
            href="/mortgage-calculator"
          >
            <span>{content.button}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
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
            <article className="group w-[290px] sm:w-[350px] shrink-0 bg-white rounded-xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 shadow-2xs hover:shadow-sm transition-all flex flex-col" key={item.title}>
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
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
            <figure className="w-[320px] sm:w-[400px] shrink-0 p-6 sm:p-7 rounded-xl bg-white border border-neutral-200/80 shadow-2xs flex flex-col justify-between gap-6" key={item.name}>
              <blockquote className="text-sm sm:text-base italic text-neutral-700 leading-relaxed flex-1">
                “{item.quote}”
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-950 font-bold flex items-center justify-center text-xs border border-brand-200" aria-hidden="true">
                  {item.initials}
                </div>
                <figcaption className="flex flex-col text-xs sm:text-sm">
                  <strong className="font-bold text-brand-950 text-sm">{item.name}</strong>
                  <span className="text-neutral-500 text-xs">{item.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </HorizontalCarousel>
      </PageContainer>
    </section>
  );
}
