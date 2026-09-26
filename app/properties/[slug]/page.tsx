import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  FileCheck,
  MapPin,
  Check,
} from "lucide-react";
import { getPropertyBySlug, getRelatedProperties, mockProperties } from "@/lib/mock-data";
import { PropertyGallery } from "@/components/property/property-gallery";
import { AgentContactCard } from "@/components/property/agent-contact-card";
import { PropertyCard } from "@/components/property/property-card";

type PropertyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// SSG Static Paths for all mock properties
export async function generateStaticParams() {
  return mockProperties.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Properti Tidak Ditemukan | Eagletree",
      description: "Halaman properti yang Anda cari tidak ditemukan.",
    };
  }

  const title = `${property.title} — ${property.type} di ${property.location} | Eagletree`;
  const description = property.description;
  const mainImage = property.images[0]?.src || property.image.src;

  return {
    title,
    description,
    alternates: {
      canonical: `/properties/${property.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/properties/${property.slug}`,
      siteName: "Eagletree Property Platform",
      images: [
        {
          url: mainImage,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [mainImage],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const related = getRelatedProperties(property.id, 3);

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(property.price.amount);

  // Schema.org RealEstateListing & BreadcrumbList JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://eagletree.id",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Properti",
            item: "https://eagletree.id/properties",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: property.title,
            item: `https://eagletree.id${property.href}`,
          },
        ],
      },
      {
        "@type": "RealEstateListing",
        name: property.title,
        description: property.longDescription || property.description,
        url: `https://eagletree.id${property.href}`,
        image: property.images.map((img) => `https://eagletree.id${img.src}`),
        datePosted: `${property.yearBuilt || 2024}-01-01`,
        offers: {
          "@type": "Offer",
          price: property.price.amount,
          priceCurrency: property.price.currency,
          availability: "https://schema.org/InStock",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: property.address || property.location,
          addressCountry: "ID",
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

      <div className="min-h-screen bg-neutral-50/60 py-6 lg:py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-neutral-500 mb-6 overflow-x-auto whitespace-nowrap py-1"
          >
            <Link href="/" className="hover:text-brand-700 transition-colors">
              Beranda
            </Link>
            <ChevronRight size={13} className="shrink-0 text-neutral-400" />
            <Link href="/properties" className="hover:text-brand-700 transition-colors">
              Properti
            </Link>
            <ChevronRight size={13} className="shrink-0 text-neutral-400" />
            <Link
              href={property.status === "For rent" ? "/for-rent" : "/for-sale"}
              className="hover:text-brand-700 transition-colors"
            >
              {property.status === "For rent" ? "Disewa" : "Dijual"}
            </Link>
            <ChevronRight size={13} className="shrink-0 text-neutral-400" />
            <span className="text-neutral-900 font-medium truncate max-w-xs">
              {property.title}
            </span>
          </nav>

          {/* Header Title & Price Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-brand-950 text-white text-[10px] font-mono uppercase tracking-wider">
                  {property.status === "For rent" ? "DISEWA" : "DIJUAL"}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-neutral-200/80 text-neutral-800 text-[11px] font-medium">
                  {property.type}
                </span>
                {property.certificate && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-white border border-neutral-200 text-[11px] text-neutral-600">
                    <FileCheck size={12} className="text-brand-900" />
                    {property.certificate}
                  </span>
                )}
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-brand-950 tracking-tight">
                {property.title}
              </h1>
              <p className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-neutral-600">
                <MapPin size={14} className="text-neutral-400 shrink-0" />
                <span>{property.address || property.location}</span>
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-baseline md:items-end justify-between gap-0.5 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-200">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Nilai Penawaran</span>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-brand-950">
                {formattedPrice}
                {property.price.period && (
                  <span className="text-xs font-sans text-neutral-500 font-light">
                    {" "}
                    / {property.price.period === "month" ? "bulan" : "tahun"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Photo Gallery with Lightbox */}
          <section aria-label="Galeri Foto Properti" className="mb-8">
            <PropertyGallery images={property.images} title={property.title} />
          </section>

          {/* 2-Column Content: Left Overview, Right Sticky Agent Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Key Specifications Grid */}
              <section className="p-6 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
                <h2 className="font-serif text-base font-medium text-brand-950 mb-4 pb-3 border-b border-neutral-100">
                  Spesifikasi Properti
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {property.specifications?.bedrooms !== undefined && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Kamar Tidur</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.bedrooms} Ruang
                      </p>
                    </div>
                  )}

                  {property.specifications?.bathrooms !== undefined && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Kamar Mandi</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.bathrooms} Ruang
                      </p>
                    </div>
                  )}

                  {property.specifications?.buildingAreaSqm !== undefined && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Luas Bangunan</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.buildingAreaSqm} m²
                      </p>
                    </div>
                  )}

                  {property.specifications?.landAreaSqm !== undefined && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Luas Tanah</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.landAreaSqm} m²
                      </p>
                    </div>
                  )}

                  {property.specifications?.floors !== undefined && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Jumlah Lantai</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.floors} Lantai
                      </p>
                    </div>
                  )}

                  {property.specifications?.parking !== undefined && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Garasi / Carport</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.parking} Mobil
                      </p>
                    </div>
                  )}

                  {property.specifications?.electricityWatts !== undefined && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Daya Listrik</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.electricityWatts} Watt
                      </p>
                    </div>
                  )}

                  {property.specifications?.facing && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Arah Hadap</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.specifications.facing}
                      </p>
                    </div>
                  )}

                  {property.yearBuilt && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Tahun Bangun</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.yearBuilt}
                      </p>
                    </div>
                  )}

                  {property.certificate && (
                    <div className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-100 col-span-2">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-0.5">Status Sertifikat</p>
                      <p className="text-sm font-medium text-brand-950">
                        {property.certificate}
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {/* Narrative Description Section */}
              <section className="p-6 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
                <h2 className="font-serif text-base font-medium text-brand-950 mb-3 pb-3 border-b border-neutral-100">
                  Ulasan Properti
                </h2>
                <div className="prose prose-sm max-w-none text-neutral-600 leading-relaxed flex flex-col gap-3 font-light text-xs sm:text-sm">
                  <p className="text-brand-950 font-normal">
                    {property.description}
                  </p>
                  {property.longDescription && (
                    <p>
                      {property.longDescription}
                    </p>
                  )}
                </div>
              </section>

              {/* Facilities & Amenities Grid */}
              {property.facilities && property.facilities.length > 0 && (
                <section className="p-6 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
                  <h2 className="font-serif text-base font-medium text-brand-950 mb-3 pb-3 border-b border-neutral-100">
                    Fasilitas & Fitur Unggulan
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {property.facilities.map((fac) => (
                      <div
                        key={fac}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 text-xs text-neutral-800"
                      >
                        <Check size={13} className="text-brand-900 shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Location & Surroundings */}
              <section className="p-6 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
                <h2 className="font-serif text-base font-medium text-brand-950 mb-3 pb-3 border-b border-neutral-100">
                  Lokasi & Akses
                </h2>
                <div className="flex flex-col gap-2 text-xs sm:text-sm text-neutral-600 font-light">
                  <p>
                    <strong className="text-brand-950 font-medium">Alamat:</strong>{" "}
                    {property.address || property.location}
                  </p>
                  <p className="text-xs text-neutral-400">
                    *Koordinat presisi dan jadwal survei langsung dapat diatur bersama konsultan pengelola listing.
                  </p>
                </div>
              </section>
            </div>

            {/* Right Sticky Agent Sidebar (4 cols) */}
            <aside className="lg:col-span-4">
              <AgentContactCard
                agent={property.agent}
                propertyTitle={property.title}
                propertyPrice={property.price}
                propertySlug={property.slug}
              />
            </aside>
          </div>

          {/* Related Properties Section */}
          {related.length > 0 && (
            <section className="mt-14 pt-8 border-t border-neutral-200/80">
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold">
                  Rekomendasi Terkait
                </p>
                <h2 className="font-serif text-2xl font-medium text-brand-950 mt-1">
                  Properti Serupa di Kawasan Ini
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((item) => (
                  <PropertyCard key={item.id} property={item} locale="id" />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
