import { redirect } from "next/navigation";
import { mockArticles, getArticleBySlug } from "@/lib/mock-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const bySlug = mockArticles.map((a) => ({ slug: a.slug }));
  const byIndex = mockArticles.map((_, i) => ({ slug: String(i + 1) }));
  return [...bySlug, ...byIndex];
}

export default async function ArtikelSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (article) {
    redirect(`/articles/${article.slug}`);
  } else {
    redirect(`/articles`);
  }
}
