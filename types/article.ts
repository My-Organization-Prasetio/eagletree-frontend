export type ArticleCategory =
  | "Panduan"
  | "Gaya Hidup"
  | "Wawasan"
  | "Investasi"
  | "Inspirasi";

export type ArticleItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string[];
  category: ArticleCategory;
  image: {
    src: string;
    alt: string;
  };
  author: {
    name: string;
    role: string;
    initials: string;
  };
  publishedAt: string;
  readingTimeMinutes: number;
};
