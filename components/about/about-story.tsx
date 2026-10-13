import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type AboutStoryProps = {
  locale: Locale;
};

export function AboutStory({ locale }: AboutStoryProps) {
  const highlights = [
    {
      title: locale === "en" ? "Curated & Verified Listings" : "Kurasi & Legalitas Terverifikasi",
      desc:
        locale === "en"
          ? "Every home undergoes legal document verification (SHM/HGB) and physical quality inspection before being presented."
          : "Setiap properti melewati pengecekan keabsahan sertifikat (SHM/HGB) dan inspeksi kelayakan fisik sebelum kami rekomendasikan.",
    },
    {
      title: locale === "en" ? "AREBI Certified Advisory" : "Konsultan Berlisensi AREBI",
      desc:
        locale === "en"
          ? "Our property advisors adhere to professional ethical standards, prioritizing your needs over sales pressure."
          : "Didampingi oleh penasihat properti berlisensi resmi yang mengedepankan objektivitas dan kepatuhan kode etik AREBI.",
    },
    {
      title: locale === "en" ? "Unity Group Ecosystem & Support" : "Sinergi Unity Group & Konsultasi KPR",
      desc:
        locale === "en"
          ? "Supported by Unity Group's architecture and development arm, plus comprehensive mortgage assistance with tier-1 banks."
          : "Didukung ekosistem arsitektur dan pengembangan Unity Group, serta pendampingan pengajuan KPR ke bank rekanan terpercaya.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#faf8f5] border-b border-neutral-200/80" aria-labelledby="our-story-title">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Natural Photography with Subtle Location Caption */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 group">
              <Image
                src="/editorial-luxury-interior.jpg"
                alt="Ruang Tamu & Suasana Hunian Eagletree"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />

              {/* Minimal Bottom Location Callout */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-navy-950/90 backdrop-blur-md text-white border border-white/10 flex items-start gap-2.5">
                <MapPin size={16} className="text-gold-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold block text-white leading-tight">
                    Kantor Pusat Eagle Tree Property
                  </span>
                  <span className="text-neutral-300 font-light block text-[11px] mt-0.5">
                    PT. Denadi Mitra Propertindo • Kebayoran Arcade 2 B3/39, Bintaro Sektor 7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-5 h-px bg-gold-500/80" aria-hidden="true" />
              <span>{locale === "en" ? "OUR STORY & PURPOSE" : "CERITA & TUJUAN KAMI"}</span>
            </div>

            {/* Headline */}
            <h2
              id="our-story-title"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 leading-[1.2] mb-5 font-serif"
            >
              {locale === "en" ? (
                <>
                  Guiding Property Decisions with <br />
                  <span className="text-gold-600 italic font-normal">
                    Honesty and Personal Care.
                  </span>
                </>
              ) : (
                <>
                  Mendampingi Pilihan Properti dengan <br />
                  <span className="text-gold-600 italic font-normal">
                    Pendekatan yang Jujur dan Personal.
                  </span>
                </>
              )}
            </h2>

            {/* Natural, Non-Generic Paragraphs */}
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-4">
              {locale === "en"
                ? "Founded in 2012 under PT. Denadi Mitra Propertindo as part of Unity Group, EagleTree was built on a solid foundation of senior real-estate expertise and architectural synergy. Over more than a decade, our mission remains clear: to provide honest, legally verified, and tranquil property journeys for families and investors across Greater Jakarta and Tangerang."
                : "Didirikan pada tahun 2012 di bawah naungan PT. Denadi Mitra Propertindo sebagai unit bisnis Unity Group, EagleTree hadir dengan fondasi keahlian manajemen properti yang matang serta sinergi erat dengan konsultan arsitektur dan kontraktor. Selama lebih dari satu dekade, komitmen kami tetap teguh: menghadirkan pendampingan transaksi properti yang transparan, aman secara legal, dan berorientasi pada ketenangan jangka panjang klien."}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-8">
              {locale === "en"
                ? "Operating through our strategic branch network in Bintaro and Serpong, we position ourselves as your trusted advisor, not merely a sales broker. From comprehensive certificate due diligence to mortgage advisory, our certified advisors safeguard every step of your transaction."
                : "Melalui jaringan kantor cabang strategis kami di kawasan Bintaro dan Serpong, kami memposisikan diri sebagai rekan penasihat terpercaya. Kami mendengarkan kebutuhan riil Anda, memeriksa keabsahan surat tanah secara teliti, serta mengawal proses pembiayaan hingga penandatanganan akta resmi."}
            </p>

            {/* 3 Editorial Value Points (Clean list, avoiding repetitive card boxes) */}
            <div className="w-full pt-6 border-t border-neutral-200/80 flex flex-col gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-950 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-neutral-500 font-light leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </PageContainer>
    </section>
  );
}
