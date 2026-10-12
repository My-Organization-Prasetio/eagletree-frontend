"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Calendar, CheckCircle2, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type Milestone = {
  id: string;
  year: string;
  titleId: string;
  titleEn: string;
  locationId: string;
  locationEn: string;
  descId: string;
  descEn: string;
  tagId: string;
  tagEn: string;
  isHq?: boolean;
};

const milestones: Milestone[] = [
  {
    id: "2020-hq",
    year: "2020",
    titleId: "Pendirian Kantor Pusat di Jakarta",
    titleEn: "Founding of Jakarta Headquarters",
    locationId: "Menara Eagletree, Jl. Jend. Sudirman, Jakarta Selatan",
    locationEn: "Menara Eagletree, Jl. Jend. Sudirman, South Jakarta",
    descId:
      "EagleTree resmi didirikan dengan akreditasi AREBI, memfokuskan layanan awal pada portofolio hunian premium di kawasan Sudirman CBD dan Jakarta Selatan dengan komitmen transparansi legalitas.",
    descEn:
      "EagleTree officially commenced operations with AREBI licensing, providing transparent residential advisory in the Sudirman CBD and South Jakarta corridors.",
    tagId: "Kantor Pusat & Lisensi AREBI",
    tagEn: "Headquarters & AREBI License",
    isHq: true,
  },
  {
    id: "2021-bsd",
    year: "2021",
    titleId: "Ekspansi Kawasan Residensial BSD & Serpong",
    titleEn: "Expansion to BSD City & Serpong",
    locationId: "BSD City, Tangerang Selatan",
    locationEn: "BSD City, South Tangerang",
    descId:
      "Merespons tingginya kebutuhan keluarga muda akan hunian terpadu, Eagletree memperluas jangkauan penasihat ke kawasan kota mandiri BSD City dan Alam Sutera.",
    descEn:
      "Expanded specialized advisory into master-planned townships in BSD City and Alam Sutera, catering to modern family residences.",
    tagId: "Pusat Konsultasi Kota Mandiri",
    tagEn: "Township Advisory Hub",
  },
  {
    id: "2022-bdg",
    year: "2022",
    titleId: "Jangkauan Representasi Bandung & Jawa Barat",
    titleEn: "Bandung & West Java Representation",
    locationId: "Dago & Bandung Pusat, Jawa Barat",
    locationEn: "Dago & Central Bandung, West Java",
    descId:
      "Memperluas layanan penasihat untuk kavling komersial strategis serta portofolio vila dan hunian peristirahatan di kawasan perbukitan Jawa Barat.",
    descEn:
      "Established representation in Bandung covering scenic hill villas and prime commercial parcels in the Greater Bandung corridor.",
    tagId: "Aset Residensial & Komersial",
    tagEn: "Residential & Commercial Assets",
  },
  {
    id: "2023-sby",
    year: "2023",
    titleId: "Kemitraan Bank Rekanan KPR Nasional",
    titleEn: "National Mortgage Banking Partnerships",
    locationId: "Surabaya & Jejaring Perbankan Nasional",
    locationEn: "Surabaya & National Banking Network",
    descId:
      "Memperkuat kerja sama resmi bersama 8+ bank nasional tier-1 untuk memfasilitasi simulasi suku bunga promo dan pendampingan pengajuan KPR nasabah tanpa komisi klien.",
    descEn:
      "Formed direct partnerships with 8+ tier-1 national banks, enabling transparent rate comparisons and mortgage support at zero fee.",
    tagId: "Kemitraan 8+ Bank Rekanan",
    tagEn: "8+ Bank Partner Program",
  },
  {
    id: "2024-bali",
    year: "2024",
    titleId: "Layanan Villa & Aset Wisata Bali",
    titleEn: "Luxury Villa & Resort Hub in Bali",
    locationId: "Seminyak & Badung, Bali",
    locationEn: "Seminyak & Badung, Bali",
    descId:
      "Menghadirkan kurasi khusus villa privat dan properti liburan di Bali dengan kepatuhan penuh terhadap regulasi kepemilikan dan uji tuntas sertifikat.",
    descEn:
      "Established advisory presence in Bali, specializing in private luxury villas and vacation retreats with verified legal standing.",
    tagId: "Spesialisasi Villa Eksklusif",
    tagEn: "Luxury Villa Portfolio",
  },
  {
    id: "2026-v2",
    year: "2026",
    titleId: "Peluncuran Platform Terintegrasi V2",
    titleEn: "Launch of Integrated V2 Platform",
    locationId: "Ekosistem Digital Nasional (Jakarta HQ)",
    locationEn: "National Digital Ecosystem (Jakarta HQ)",
    descId:
      "Merilis platform generasi kedua yang menyatukan kurasi listing terverifikasi, kalkulator simulasi KPR transparan, dan direktori konsultan berlisensi dalam satu akses mudah.",
    descEn:
      "Rolled out the V2 platform seamlessly combining verified property listings, transparent mortgage calculations, and certified advisors.",
    tagId: "Kalkulator KPR & Platform V2",
    tagEn: "Mortgage Engine & V2 Platform",
  },
];

type AboutJourneyProps = {
  locale: Locale;
};

export function AboutJourney({ locale }: AboutJourneyProps) {
  const [activeId, setActiveId] = useState<string>("2020-hq");

  const activeMilestone =
    milestones.find((m) => m.id === activeId) ?? milestones[0];

  return (
    <section
      className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800"
      aria-labelledby="journey-heading"
    >
      <PageContainer>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 text-gold-400 text-xs font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-6 h-px bg-gold-400" aria-hidden="true" />
            <span>
              {locale === "en" ? "JOURNEY & MILESTONES" : "JEJAK LANGKAH & PERJALANAN"}
            </span>
          </div>

          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18] font-serif mb-4"
          >
            {locale === "en" ? (
              <>
                The EagleTree Journey: <br />
                <span className="text-gold-400 italic font-normal">
                  Growing on Client Trust.
                </span>
              </>
            ) : (
              <>
                Perjalanan Eagletree: <br />
                <span className="text-gold-400 italic font-normal">
                  Tumbuh Bersama Kepercayaan Klien.
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {locale === "en"
              ? "From our verified headquarters in Sudirman CBD, Jakarta, we have steadily grown our advisory presence across strategic residential and commercial hubs in Indonesia."
              : "Berawal dari kantor pusat di Sudirman CBD Jakarta, kami tumbuh secara konsisten mendampingi pencari hunian dan investor di berbagai koridor strategis Indonesia."}
          </p>
        </div>

        {/* 2-Column Layout: Visual Storytelling Image (Left) & Chronological Timeline (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Visual Storytelling Image with Headquarters Location Callout */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
              <Image
                src="/closing-penthouse-banner.jpg"
                alt="Kantor Pusat Eagletree Sudirman CBD Panorama"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />

              {/* Gradient Vignette for readability */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent"
                aria-hidden="true"
              />

              {/* Subtle Top Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/85 backdrop-blur-md border border-white/15 text-gold-400 text-xs font-semibold">
                <Building2 size={14} />
                <span>Kantor Pusat Resmi Eagletree</span>
              </div>

              {/* Verified Headquarters Location Callout at Bottom of Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/90 backdrop-blur-md text-white border border-white/15 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-400/15 border border-gold-400/30 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="text-xs">
                  <span className="font-bold block text-white text-sm leading-tight">
                    Menara Eagletree Lantai 12
                  </span>
                  <span className="text-neutral-300 font-light block mt-0.5">
                    Jl. Jend. Sudirman Kav. 45, Jakarta Selatan 12930
                  </span>
                  <span className="text-gold-300 font-medium block text-[11px] mt-1.5">
                    Jangkauan Layanan: Jabodetabek • Jawa Barat • Jawa Timur • Bali
                  </span>
                </div>
              </div>
            </div>

            {/* Active Milestone Highlight Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-gold-400">
                  {locale === "en" ? `Selected Milestone: ${activeMilestone.year}` : `Tonggak Sejarah: Tahun ${activeMilestone.year}`}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 text-[11px] font-semibold">
                  {locale === "en" ? activeMilestone.tagEn : activeMilestone.tagId}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white">
                {locale === "en" ? activeMilestone.titleEn : activeMilestone.titleId}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {locale === "en" ? activeMilestone.descEn : activeMilestone.descId}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                <MapPin size={14} className="text-gold-400 shrink-0" />
                <span>{locale === "en" ? activeMilestone.locationEn : activeMilestone.locationId}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Chronological Timeline with Connected Visual Line */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="pb-4 mb-4 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                {locale === "en" ? "Chronological Timeline" : "Linimasa Perjalanan"}
              </span>
              <span className="text-xs text-neutral-400 font-mono">2020 — 2026</span>
            </div>

            {/* Timeline Items */}
            <div className="relative pl-6 sm:pl-8 flex flex-col gap-5 border-l-2 border-gold-400/25 ml-3 sm:ml-4">
              {milestones.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`relative text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col gap-2 group ${
                      isActive
                        ? "bg-navy-900/90 border-gold-400/80 shadow-md"
                        : "bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Node Dot on the vertical line */}
                    <span
                      className={`absolute -left-[31px] sm:-left-[39px] top-5 w-4 h-4 rounded-full border-2 transition-all ${
                        isActive
                          ? "bg-gold-400 border-navy-950 ring-4 ring-gold-400/20 scale-110"
                          : "bg-navy-950 border-gold-400/50 group-hover:border-gold-400"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Top Row: Year badge & Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-md ${
                            isActive
                              ? "bg-gold-500 text-navy-950"
                              : "bg-white/10 text-neutral-300 group-hover:text-gold-400"
                          }`}
                        >
                          {item.year}
                        </span>
                        {item.isHq && (
                          <span className="px-2 py-0.5 rounded-full bg-gold-400/15 text-gold-300 text-[10px] font-bold uppercase tracking-wider">
                            Kantor Pusat
                          </span>
                        )}
                      </div>

                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 shrink-0 ${
                          isActive
                            ? "text-gold-400 translate-x-1"
                            : "text-neutral-500 group-hover:text-neutral-300"
                        }`}
                      />
                    </div>

                    {/* Milestone Title */}
                    <h3
                      className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                        isActive ? "text-white" : "text-neutral-200 group-hover:text-white"
                      }`}
                    >
                      {locale === "en" ? item.titleEn : item.titleId}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <MapPin size={12} className="text-gold-400 shrink-0" />
                      <span className="truncate">
                        {locale === "en" ? item.locationEn : item.locationId}
                      </span>
                    </div>

                    {/* Description preview */}
                    {isActive ? (
                      <p className="text-xs text-neutral-300 font-light leading-relaxed pt-2 border-t border-white/10 mt-1">
                        {locale === "en" ? item.descEn : item.descId}
                      </p>
                    ) : (
                      <p className="text-xs text-neutral-400 font-light line-clamp-1 mt-0.5">
                        {locale === "en" ? item.descEn : item.descId}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}
