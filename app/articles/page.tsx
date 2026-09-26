import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { mockArticles, articleCategories } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Berita & Artikel Properti — Insight, Panduan & Gaya Hidup | Eagletree",
  description:
    "Baca artikel terbaru seputar properti Indonesia: panduan pembelian, tren pasar, tips investasi, dan inspirasi gaya hidup hunian dari tim Eagletree.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Berita & Artikel Properti | Eagletree",
    description:
      "Informasi, tren, dan cerita terbaru seputar properti dan gaya hidup hunian.",
    url: "/articles",
    siteName: "Eagletree Property Platform",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berita & Artikel | Eagletree",
    description:
      "Panduan, wawasan, dan inspirasi seputar dunia properti Indonesia.",
  },
};

type ArticlesPageProps = {
  searchParams: Promise<{ category?: string }>;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const params = await searchParams;
  const activeCategory = params.category || "all";
  const articles =
    activeCategory === "all"
      ? mockArticles
      : mockArticles.filter((a) => a.category === activeCategory);

  const featured = mockArticles[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Eagletree Artikel & Insight",
    url: "https://eagletree.id/articles",
    blogPost: mockArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      author: {
        "@type": "Person",
        name: article.author.name,
      },
      image: `https://eagletree.id${article.image.src}`,
      url: `https://eagletree.id/articles/${article.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero / Featured Article */}
        <section className="relative bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-brand-950/40 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent-500/8 rounded-full blur-3xl pointer-events-none" />

          <PageContainer className="relative z-10 py-16 sm:py-24">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-400 mb-2">
              Berita & Artikel
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl">
              Wawasan seputar properti, gaya hidup, dan investasi.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-100/85 max-w-2xl leading-relaxed">
              Informasi dan panduan yang membantu Anda membuat keputusan properti
              dengan lebih percaya diri.
            </p>

            {/* Featured Article Card */}
            <Link
              href={`/articles/${featured.slug}`}
              className="group mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-accent-500/30 transition-all"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 gap-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 font-bold uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <span className="text-white/60 flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(featured.publishedAt)}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-accent-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-white/70 leading-relaxed">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-400 group-hover:translate-x-1 transition-transform">
                  Baca selengkapnya
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </PageContainer>
        </section>

        {/* Category Filter & Articles Grid */}
        <section className="py-14 sm:py-20">
          <PageContainer>
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <Link
                href="/articles"
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === "all"
                    ? "bg-brand-950 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                Semua
              </Link>
              {articleCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/articles?category=${encodeURIComponent(cat)}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-brand-950 text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Results count */}
            <p className="text-sm font-bold text-brand-950 mb-6">
              {articles.length} artikel ditemukan
            </p>

            {/* Articles Grid */}
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-surface-raised rounded-2xl overflow-hidden border border-border-subtle hover:border-brand-800/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <Link
                      href={`/articles/${article.slug}`}
                      className="relative h-52 w-full overflow-hidden block"
                    >
                      <Image
                        src={article.image.src}
                        alt={article.image.alt}
                        fill
                        className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      />
                    </Link>
                    <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="inline-flex items-center gap-1 text-accent-700 font-bold tracking-wide uppercase text-[11px]">
                          <Tag size={11} />
                          {article.category}
                        </span>
                        <time className="text-neutral-500 flex items-center gap-1 font-medium">
                          <Calendar size={11} />
                          {formatDate(article.publishedAt)}
                        </time>
                      </div>
                      <h3 className="text-base font-bold text-brand-950 line-clamp-2 group-hover:text-accent-700 transition-colors leading-snug">
                        <Link href={`/articles/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed flex-1">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-border-subtle/70 mt-auto">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-full bg-brand-100 text-brand-900 font-bold flex items-center justify-center text-[10px] border border-brand-200"
                            aria-hidden="true"
                          >
                            {article.author.initials}
                          </div>
                          <span className="text-xs font-medium text-neutral-600 truncate max-w-[140px]">
                            {article.author.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                          <Clock size={11} />
                          {article.readingTimeMinutes} min
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-12 bg-surface-raised rounded-3xl border border-border-subtle text-center">
                <h3 className="text-lg font-bold text-brand-950 mb-1">
                  Belum ada artikel di kategori ini
                </h3>
                <p className="text-sm text-neutral-600 mb-6">
                  Kami sedang menyiapkan konten terbaru. Coba lihat kategori
                  lainnya.
                </p>
                <Link
                  href="/articles"
                  className="px-5 py-2.5 bg-brand-950 hover:bg-brand-900 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Lihat Semua Artikel
                </Link>
              </div>
            )}
          </PageContainer>
        </section>
      </div>
    </>
  );
}
