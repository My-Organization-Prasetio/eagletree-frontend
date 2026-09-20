import type { Metadata } from "next";
import { PropertyListingView } from "@/components/property/property-listing-view";
import { mockProperties } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Properti Dijual — Rumah, Apartemen & Tanah | Eagletree",
  description: "Cari dan temukan properti dijual dengan legalitas aman (SHM/HGB), lokasi prima, dan harga terbaik didampingi agen profesional Eagletree.",
  alternates: {
    canonical: "/for-sale",
  },
  openGraph: {
    title: "Properti Dijual | Eagletree",
    description: "Katalog lengkap rumah, apartemen, dan tanah dijual di kawasan pilihan Indonesia.",
    url: "/for-sale",
    siteName: "Eagletree Property Platform",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Properti Dijual | Eagletree",
    description: "Pilihan hunian dan investasi properti dijual terbaik di Indonesia.",
  },
};

type ForSalePageProps = {
  searchParams: Promise<{
    type?: string;
    sort?: string;
  }>;
};

export default async function ForSalePage({ searchParams }: ForSalePageProps) {
  const params = await searchParams;
  const forSaleProperties = mockProperties.filter((p) => p.status !== "For rent" && !p.price.period);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Properti Dijual Eagletree",
    itemListElement: forSaleProperties.map((prop, index) => ({
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
          listingType: "buy",
          type: params.type ? (params.type.charAt(0).toUpperCase() + params.type.slice(1)) as any : "all",
          sort: params.sort === "newest" ? "newest" : "newest",
        }}
        title="Properti Dijual"
        subtitle="Miliki hunian impian dan instrumen investasi bernilai jangka panjang dengan legalitas terverifikasi."
      />
    </>
  );
}
