"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, ChevronRight, MapPin } from "lucide-react";
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
    id: "2012-hq",
    year: "2012",
    titleId: "Pendirian Eagle Tree Property di Jakarta & Bintaro",
    titleEn: "Establishment of Eagle Tree Property",
    locationId: "PT. Denadi Mitra Propertindo • Bintaro Sektor 7",
    locationEn: "PT. Denadi Mitra Propertindo • Bintaro Sector 7",
    descId:
      "Didirikan resmi pada tahun 2012 di bawah naungan PT. Denadi Mitra Propertindo sebagai unit bisnis dari Unity Group, dipimpin oleh dewan direksi berpengalaman ex-manajemen PT Jaya Real Property Tbk dengan keanggotaan resmi AREBI.",
    descEn:
      "Officially founded in 2012 under PT. Denadi Mitra Propertindo as a business unit of Unity Group, led by seasoned directors formerly of PT Jaya Real Property Tbk with full AREBI accreditation.",
    tagId: "Kantor Pusat Bintaro & Lisensi AREBI",
    tagEn: "Bintaro Headquarters & AREBI Accreditation",
    isHq: true,
  },
  {
    id: "2015-branch",
    year: "2015",
    titleId: "Ekspansi Jaringan Kantor Bintaro & Gading Serpong",
    titleEn: "Expansion to Bintaro & Gading Serpong Branches",
    locationId: "Kebayoran Arcade, Althia, & Beryl Serpong",
    locationEn: "Kebayoran Arcade, Althia, & Beryl Serpong",
    descId:
      "Memperluas jangkauan layanan dengan mendirikan kantor cabang strategis Central di Kebayoran Arcade, Beryl di Gading Serpong, dan Althia di Bintaro Sektor 9 untuk melayani pasar residensial dan komersial yang berkembang pesat.",
    descEn:
      "Broadened strategic reach by opening Central Branch at Kebayoran Arcade, Beryl Branch in Gading Serpong, and Althia Branch in Sector 9 to serve high-growth residential and commercial markets.",
    tagId: "Jejaring Kantor Cabang Strategis",
    tagEn: "Strategic Branch Network",
  },
  {
    id: "2018-unity",
    year: "2018",
    titleId: "Sinergi Unity Group & Pengembangan Aset Properti",
    titleEn: "Unity Group Synergy & Asset Development",
    locationId: "Kebayoran Symphony & Graha Raya Bintaro",
    locationEn: "Kebayoran Symphony & Graha Raya Bintaro",
    descId:
      "Mengintegrasikan layanan perantara dengan keahlian arsitektur dan kontraktor dari Unity Group, serta membuka kantor cabang Fortune 8 Graha Raya dan Victory 8 Bintaro untuk mengelola pengembangan aset properti produktif.",
    descEn:
      "Integrated brokerage services with Unity Group's architecture and contracting capabilities, establishing Fortune 8 Graha Raya and Victory 8 Bintaro branches to manage productive property asset development.",
    tagId: "Sinergi Arsitektur & Kontraktor",
    tagEn: "Architectural & Construction Synergy",
  },
  {
    id: "2021-kpr",
    year: "2021",
    titleId: "Konsolidasi Layanan KPR & Kemitraan Perbankan",
    titleEn: "Comprehensive Mortgage & Banking Partnerships",
    locationId: "Jejaring Perbankan Nasional",
    locationEn: "National Banking Network",
    descId:
      "Memperkuat pendampingan nasabah melalui kemitraan dengan bank-bank nasional terkemuka untuk memfasilitasi pengajuan KPR, perbandingan bunga promo, dan konsultasi legalitas kredit secara transparan.",
    descEn:
      "Strengthened buyer advisory through direct facilitation with leading national banks, assisting mortgage applications, rate comparisons, and credit documentation.",
    tagId: "Pendampingan KPR Transparan",
    tagEn: "Transparent Mortgage Advisory",
  },
  {
    id: "2024-standards",
    year: "2024",
    titleId: "Penguatan Standar Layanan & Kepatuhan Transaksi",
    titleEn: "Service Standardization & Transaction Compliance",
    locationId: "Koridor Tangerang Selatan & Jabodetabek",
    locationEn: "South Tangerang & Greater Jakarta Corridor",
    descId:
      "Peningkatan standar kepatuhan broker profesional, verifikasi sertifikat kepemilikan yang lebih ketat, dan pendampingan transaksi bernilai tinggi di seluruh portofolio hunian primer dan sekunder.",
    descEn:
      "Elevated professional broker standards, stricter certificate due diligence, and dedicated advisory for high-value transactions across primary and secondary portfolios.",
    tagId: "Integritas & Kepatuhan Transaksi",
    tagEn: "Integrity & Transaction Compliance",
  },
  {
    id: "2026-v2",
    year: "2026",
    titleId: "Peluncuran Platform Terintegrasi Eagletree V2",
    titleEn: "Launch of Integrated Eagletree V2 Platform",
    locationId: "Ekosistem Digital Eagletree",
    locationEn: "Eagletree Digital Ecosystem",
    descId:
      "Merilis platform digital generasi kedua yang menyatukan kurasi listing terverifikasi, kalkulator simulasi KPR transparan, dan direktori konsultan berlisensi resmi dalam satu akses mudah.",
    descEn:
      "Launched the second-generation platform unifying verified listings, transparent mortgage calculation simulations, and certified advisor directories in one seamless experience.",
    tagId: "Kalkulator KPR & Platform V2",
    tagEn: "Mortgage Simulator & V2 Platform",
  },
];

type AboutJourneyProps = {
  locale: Locale;
};

export function AboutJourney({ locale }: AboutJourneyProps) {
  const [activeId, setActiveId] = useState<string>("2012-hq");

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
              ? "From our verified headquarters in Kebayoran Arcade, Bintaro Sector 7, we have steadily grown our advisory presence across strategic residential and commercial hubs in Greater Jakarta and Tangerang."
              : "Berawal dari kantor pusat di Kebayoran Arcade Bintaro Sektor 7, kami tumbuh secara konsisten mendampingi pencari hunian dan investor di koridor strategis Tangerang Selatan dan Jabodetabek."}
          </p>
        </div>

        {/* 2-Column Layout: Visual Storytelling Image (Left) & Chronological Timeline (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Visual Storytelling Image with Headquarters Location Callout */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
              <Image
                src="/closing-penthouse-banner.jpg"
                alt="Kantor Pusat Eagle Tree Property Kebayoran Arcade Bintaro"
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
                <span>PT. Denadi Mitra Propertindo • Unity Group</span>
              </div>

              {/* Verified Headquarters Location Callout at Bottom of Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/90 backdrop-blur-md text-white border border-white/15 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-400/15 border border-gold-400/30 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="text-xs">
                  <span className="font-bold block text-white text-sm leading-tight">
                    Central Office (Headquarters)
                  </span>
                  <span className="text-neutral-300 font-light block mt-0.5">
                    Ruko Kebayoran Arcade 2 Blok B3 No. 39, Bintaro Sektor 7, Tangerang Selatan
                  </span>
                  <span className="text-gold-300 font-medium block text-[11px] mt-1.5">
                    Jejaring Kantor: Central • Beryl Gading Serpong • Althia • Fortune 8 • Victory 8
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
