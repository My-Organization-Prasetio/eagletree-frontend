import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  Building,
  Calendar,
  Check,
  ChevronRight,
  Compass,
  FileCheck,
  Home,
  MapPin,
  Ruler,
  Share2,
  Sparkles,
  Zap,
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

      <div className="min-h-screen bg-[#f7f8f5] py-6 lg:py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[#68766f] mb-6 overflow-x-auto whitespace-nowrap py-1"
          >
            <Link href="/" className="hover:text-[#102d26] transition-colors">
              Beranda
            </Link>
            <ChevronRight size={13} className="shrink-0 text-[#87938d]" />
            <Link href="/properties" className="hover:text-[#102d26] transition-colors">
              Properti
            </Link>
            <ChevronRight size={13} className="shrink-0 text-[#87938d]" />
            <Link
              href={property.status === "For rent" ? "/for-rent" : "/for-sale"}
              className="hover:text-[#102d26] transition-colors"
            >
              {property.status === "For rent" ? "Disewa" : "Dijual"}
            </Link>
            <ChevronRight size={13} className="shrink-0 text-[#87938d]" />
            <span className="text-[#102d26] font-semibold truncate max-w-xs">
              {property.title}
            </span>
          </nav>

          {/* Header Title & Price Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#102d26] text-white text-[11px] font-semibold uppercase tracking-wider">
                  {property.status}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#e1ece7] text-[#36705d] text-[11px] font-semibold">
                  {property.type}
                </span>
                {property.certificate && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-[#dde2de] text-[11px] text-[#53625c]">
                    <FileCheck size={12} className="text-[#36705d]" />
                    {property.certificate}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102d26] tracking-tight">
                {property.title}
              </h1>
              <p className="flex items-center gap-1.5 mt-2 text-sm text-[#53625c]">
                <MapPin size={16} className="text-[#36705d] shrink-0" />
                <span>{property.address || property.location}</span>
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-baseline md:items-end justify-between gap-1 pt-2 md:pt-0 border-t md:border-t-0 border-[#dde2de]">
              <span className="text-xs text-[#68766f]">Harga Penawaran</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#936b2d]">
                {formattedPrice}
                {property.price.period && (
                  <span className="text-sm font-normal text-[#68766f]">
                    {" "}
                    / {property.price.period === "month" ? "bulan" : "tahun"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Photo Gallery with Lightbox */}
          <section aria-label="Galeri Foto Properti" className="mb-10">
            <PropertyGallery images={property.images} title={property.title} />
          </section>

          {/* 2-Column Content: Left Overview, Right Sticky Agent Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Key Specifications Grid */}
              <section className="p-6 bg-white rounded-2xl border border-[#dde2de] shadow-xs">
                <h2 className="text-base font-bold text-[#102d26] mb-4 pb-3 border-b border-[#dde2de] flex items-center gap-2">
                  <Sparkles size={17} className="text-[#c99a55]" />
                  <span>Spesifikasi Utama Properti</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {property.specifications?.bedrooms !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <BedDouble size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Kamar Tidur</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.bedrooms} Ruang
                        </p>
                      </div>
                    </div>
                  )}

                  {property.specifications?.bathrooms !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Bath size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Kamar Mandi</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.bathrooms} Ruang
                        </p>
                      </div>
                    </div>
                  )}

                  {property.specifications?.buildingAreaSqm !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Building size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Luas Bangunan</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.buildingAreaSqm} m²
                        </p>
                      </div>
                    </div>
                  )}

                  {property.specifications?.landAreaSqm !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Ruler size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Luas Tanah</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.landAreaSqm} m²
                        </p>
                      </div>
                    </div>
                  )}

                  {property.specifications?.floors !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Home size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Jumlah Lantai</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.floors} Lantai
                        </p>
                      </div>
                    </div>
                  )}

                  {property.specifications?.parking !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Home size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Kapasitas Garasi</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.parking} Mobil
                        </p>
                      </div>
                    </div>
                  )}

                  {property.specifications?.electricityWatts !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Zap size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Daya Listrik</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.electricityWatts} Watt
                        </p>
                      </div>
                    </div>
                  )}

                  {property.specifications?.facing && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Compass size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Arah Hadap</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.specifications.facing}
                        </p>
                      </div>
                    </div>
                  )}

                  {property.yearBuilt && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5]">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Tahun Bangun</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.yearBuilt}
                        </p>
                      </div>
                    </div>
                  )}

                  {property.certificate && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f8f5] col-span-2">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#36705d] shadow-xs shrink-0">
                        <FileCheck size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#68766f]">Status Sertifikat</p>
                        <p className="text-sm font-bold text-[#102d26]">
                          {property.certificate}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Narrative Description Section */}
              <section className="p-6 bg-white rounded-2xl border border-[#dde2de] shadow-xs">
                <h2 className="text-lg font-bold text-[#102d26] mb-4 pb-3 border-b border-[#dde2de]">
                  Deskripsi Properti
                </h2>
                <div className="prose prose-sm max-w-none text-[#53625c] leading-relaxed flex flex-col gap-4">
                  <p className="text-base text-[#102d26] font-medium">
                    {property.description}
                  </p>
                  {property.longDescription && (
                    <p className="text-sm">
                      {property.longDescription}
                    </p>
                  )}
                </div>
              </section>

              {/* Facilities & Amenities Grid */}
              {property.facilities && property.facilities.length > 0 && (
                <section className="p-6 bg-white rounded-2xl border border-[#dde2de] shadow-xs">
                  <h2 className="text-lg font-bold text-[#102d26] mb-4 pb-3 border-b border-[#dde2de]">
                    Fasilitas & Keunggulan
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {property.facilities.map((fac) => (
                      <div
                        key={fac}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f7f8f5] text-xs font-semibold text-[#102d26]"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#e1ece7] text-[#36705d] flex items-center justify-center shrink-0">
                          <Check size={14} />
                        </div>
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Location & Surroundings */}
              <section className="p-6 bg-white rounded-2xl border border-[#dde2de] shadow-xs">
                <h2 className="text-lg font-bold text-[#102d26] mb-4 pb-3 border-b border-[#dde2de]">
                  Lokasi & Akses Sekitar
                </h2>
                <div className="flex flex-col gap-3 text-sm text-[#53625c]">
                  <p>
                    <strong className="text-[#102d26]">Alamat Lengkap:</strong>{" "}
                    {property.address || property.location}
                  </p>
                  <p className="text-xs text-[#68766f]">
                    *Lokasi presisi dan survei tempat dapat diatur langsung dengan menghubungi agen pengelola kami.
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
            <section className="mt-16 pt-12 border-t border-[#dde2de]">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#936b2d]">
                  Rekomendasi Terkait
                </p>
                <h2 className="text-2xl font-bold text-[#102d26] mt-1">
                  Properti Serupa yang Mungkin Anda Sukai
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
