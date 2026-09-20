import type { Metadata } from "next";
import { PropertyListingView } from "@/components/property/property-listing-view";
import { mockProperties } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Daftar Semua Properti Dijual & Disewa | Eagletree",
  description: "Jelajahi portofolio properti pilihan di seluruh Indonesia. Temukan rumah impian, apartemen modern, vila tropis, dan kavling tanah potensial.",
  alternates: {
    canonical: "/properties",
  },
  openGraph: {
    title: "Daftar Semua Properti | Eagletree",
    description: "Temukan rumah, apartemen, vila, dan tanah pilihan bersama konsultan properti terpercaya di Eagletree.",
    url: "/properties",
    siteName: "Eagletree Property Platform",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daftar Properti Pilihan | Eagletree",
    description: "Temukan properti terbaik di kawasan strategis Indonesia.",
  },
};

type PropertiesPageProps = {
  searchParams: Promise<{
    type?: string;
    location?: string;
    listing?: string;
    q?: string;
  }>;
};

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams;

  // Schema.org ItemList JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: mockProperties.map((prop, index) => ({
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
          listingType: params.listing === "rent" ? "rent" : params.listing === "buy" ? "buy" : "all",
          type: params.type ? (params.type.charAt(0).toUpperCase() + params.type.slice(1)) as any : "all",
          query: params.q || params.location || "",
        }}
        title="Daftar Properti Pilihan"
        subtitle="Eksplorasi seluruh koleksi properti terbaik dari kawasan strategis Jabodetabek, Surabaya, Bandung, hingga Bali."
      />
    </>
  );
}
