import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Clock,
  Share2,
  Tag,
  User,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import {
  getArticleBySlug,
  getRelatedArticles,
  mockArticles,
} from "@/lib/mock-data";

type ArticleDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return mockArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArticleDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel Tidak Ditemukan | Eagletree" };
  }

  const title = `${article.title} | Eagletree`;
  return {
    title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title,
      description: article.description,
      url: `/articles/${article.slug}`,
      siteName: "Eagletree Property Platform",
      images: [
        {
          url: article.image.src,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: [article.image.src],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getRelatedArticles(article.id, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: "https://eagletree.id" },
          { "@type": "ListItem", position: 2, name: "Artikel", item: "https://eagletree.id/articles" },
          { "@type": "ListItem", position: 3, name: article.title, item: `https://eagletree.id/articles/${article.slug}` },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        author: { "@type": "Person", name: article.author.name },
        image: `https://eagletree.id${article.image.src}`,
        url: `https://eagletree.id/articles/${article.slug}`,
        publisher: {
          "@type": "Organization",
          name: "Eagletree",
          url: "https://eagletree.id",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[480px] bg-brand-950">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            className="object-cover opacity-80"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent" />
        </div>

        <PageContainer className="relative z-10 -mt-32 sm:-mt-40 pb-16">
          {/* Article Card */}
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs text-white/70 mb-6 overflow-x-auto whitespace-nowrap py-1"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <ChevronRight size={13} className="shrink-0 text-white/40" />
              <Link href="/articles" className="hover:text-white transition-colors">
                Artikel
              </Link>
              <ChevronRight size={13} className="shrink-0 text-white/40" />
              <span className="text-white font-semibold truncate max-w-xs">
                {article.title}
              </span>
            </nav>

            {/* Main Content Card */}
            <div className="bg-surface-raised rounded-3xl border border-border-subtle shadow-lg overflow-hidden">
              {/* Header */}
              <div className="p-6 sm:p-10 pb-0 sm:pb-0">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent-50 text-accent-700 font-bold uppercase tracking-wider border border-accent-100">
                    <Tag size={11} />
                    {article.category}
                  </span>
                  <span className="text-neutral-500 flex items-center gap-1 font-medium">
                    <Calendar size={12} />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="text-neutral-400 flex items-center gap-1">
                    <Clock size={12} />
                    {article.readingTimeMinutes} menit baca
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-950 tracking-tight leading-tight">
                  {article.title}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {article.description}
                </p>

                {/* Author Row */}
                <div className="flex items-center gap-3 mt-6 py-5 border-b border-border-subtle">
                  <div
                    className="w-10 h-10 rounded-full bg-brand-100 text-brand-900 font-bold flex items-center justify-center text-xs border border-brand-200"
                    aria-hidden="true"
                  >
                    {article.author.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-950">
                      {article.author.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {article.author.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <div className="p-6 sm:p-10 pt-6 sm:pt-8">
                <div className="prose prose-sm sm:prose-base max-w-none">
                  {article.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-neutral-700 leading-[1.8] mb-5 last:mb-0 text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Share & Back */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-6 border-t border-border-subtle">
                  <Link
                    href="/articles"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-950 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Kembali ke daftar artikel
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Share2 size={14} />
                    <span>Bagikan artikel ini</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="max-w-5xl mx-auto mt-16 pt-12 border-t border-border-subtle">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-700">
                  Artikel Terkait
                </p>
                <h2 className="text-2xl font-bold text-brand-950 mt-1">
                  Bacaan lain yang mungkin menarik
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/articles/${rel.slug}`}
                    className="group bg-surface-raised rounded-2xl overflow-hidden border border-border-subtle hover:border-brand-800/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={rel.image.src}
                        alt={rel.image.alt}
                        fill
                        className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 767px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <span className="text-[11px] font-bold text-accent-700 uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h3 className="text-sm font-bold text-brand-950 line-clamp-2 group-hover:text-accent-700 transition-colors leading-snug">
                        {rel.title}
                      </h3>
                      <span className="text-xs text-neutral-500 mt-auto">
                        {formatDate(rel.publishedAt)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </PageContainer>
      </div>
    </>
  );
}
