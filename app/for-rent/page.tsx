import type { Metadata } from "next";
import { PropertyListingView } from "@/components/property/property-listing-view";
import { mockProperties } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Properti Disewa — Rumah, Apartemen & Vila | Eagletree",
  description: "Temukan properti sewa bulanan dan tahunan: apartemen strategis pusat kota, vila privat Bali, dan rumah sewa keluarga nyaman.",
  alternates: {
    canonical: "/for-rent",
  },
  openGraph: {
    title: "Properti Disewa | Eagletree",
    description: "Sewa hunian yang siap mengikuti ritme hidup Anda. Pilihan apartemen, rumah, dan vila sewa terbaik.",
    url: "/for-rent",
    siteName: "Eagletree Property Platform",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Properti Disewa | Eagletree",
    description: "Sewa apartemen, vila, dan rumah berkualitas di Indonesia.",
  },
};

type ForRentPageProps = {
  searchParams: Promise<{
    type?: string;
    sort?: string;
  }>;
};

export default async function ForRentPage({ searchParams }: ForRentPageProps) {
  const params = await searchParams;
  const forRentProperties = mockProperties.filter((p) => p.status === "For rent" || !!p.price.period);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Properti Disewa Eagletree",
    itemListElement: forRentProperties.map((prop, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: prop.title,
      url: `https://eagletree.id${prop.href}`,
      image: `https://eagletree.id${prop.image.src}`,
      description: prop.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertyListingView
        initialFilters={{
          listingType: "rent",
          type: params.type ? (params.type.charAt(0).toUpperCase() + params.type.slice(1)) as any : "all",
          sort: params.sort === "newest" ? "newest" : "newest",
        }}
        title="Properti Disewa"
        subtitle="Temukan ruang sewa yang fleksibel, fully furnished, dan berlokasi strategis untuk mendukung gaya hidup Anda."
      />
    </>
  );
}
