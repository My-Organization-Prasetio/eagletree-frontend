import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
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

      <div className="min-h-screen bg-neutral-50/60 pt-24 pb-20">
        {/* Header Section */}
        <section className="mb-10">
          <PageContainer>
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold mb-2">
                Jurnal & Wawasan Properti
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-950 tracking-tight leading-tight">
                Analisis Pasar, Regulasi & Refleksi Arsitektural.
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Artikel kurasi dari tim riset Eagletree untuk membantu Anda mengambil keputusan aset secara terukur.
              </p>
            </div>

            {/* Featured Article Card */}
            <Link
              href={`/articles/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-xl border border-neutral-200/80 overflow-hidden hover:border-neutral-300 transition-colors shadow-2xs"
            >
              <div className="relative h-64 lg:h-auto lg:col-span-7 overflow-hidden">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1023px) 100vw, 58vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 gap-3">
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="text-accent-700 uppercase tracking-wider font-semibold">
                    {featured.category}
                  </span>
                  <span className="text-neutral-300">&middot;</span>
                  <span className="text-neutral-400">
                    {formatDate(featured.publishedAt)}
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-medium text-brand-950 leading-snug group-hover:text-accent-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {featured.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-medium text-brand-950 group-hover:text-accent-700 transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          </PageContainer>
        </section>

        {/* Category Filter & Articles Grid */}
        <section>
          <PageContainer>
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 mb-6 pb-3 border-b border-neutral-200/80">
              <Link
                href="/articles"
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-brand-950 text-white"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                Semua
              </Link>
              {articleCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/articles?category=${encodeURIComponent(cat)}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-brand-950 text-white"
                      : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Articles Grid */}
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 transition-colors shadow-2xs flex flex-col"
                  >
                    <Link
                      href={`/articles/${article.slug}`}
                      className="relative h-48 w-full overflow-hidden block"
                    >
                      <Image
                        src={article.image.src}
                        alt={article.image.alt}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      />
                    </Link>
                    <div className="p-5 flex flex-col flex-1 gap-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-accent-700 uppercase tracking-wider font-semibold">
                          {article.category}
                        </span>
                        <time className="text-neutral-400">
                          {formatDate(article.publishedAt)}
                        </time>
                      </div>
                      <h3 className="font-serif text-base font-medium text-brand-950 line-clamp-2 group-hover:text-accent-700 transition-colors leading-snug">
                        <Link href={`/articles/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed flex-1 font-light">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-auto text-xs text-neutral-500">
                        <span className="font-medium text-neutral-700 truncate max-w-[150px]">
                          {article.author.name}
                        </span>
                        <span className="text-[11px] text-neutral-400 flex items-center gap-1 font-mono">
                          <Clock size={12} />
                          {article.readingTimeMinutes} min
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-neutral-200/80 text-center">
                <h3 className="font-serif text-base font-medium text-brand-950 mb-1">
                  Belum ada artikel di kategori ini
                </h3>
                <p className="text-xs text-neutral-500 mb-5 font-light">
                  Kami sedang menyiapkan konten terbaru untuk kategori ini.
                </p>
                <Link
                  href="/articles"
                  className="px-4 py-2 bg-brand-950 hover:bg-brand-900 text-white text-xs font-medium uppercase tracking-wider rounded-lg transition-colors"
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
