import Image from "next/image";
import { MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
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
          : "Didampingi oleh penasihat properti berlisensi resmi yang mengedepankan objektivitas dan kenyamanan keputusan Anda.",
    },
    {
      title: locale === "en" ? "Integrated Mortgage Support" : "Dukungan KPR Resmi Tanpa Biaya",
      desc:
        locale === "en"
          ? "Direct partnerships with tier-1 national banks allow transparent rate comparisons at zero client commission."
          : "Bermitra dengan 8+ bank rekanan tier-1 untuk simulasi cicilan transparan dan pendampingan pengajuan tanpa komisi klien.",
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
                    Kantor Pusat Eagletree Hub Jakarta
                  </span>
                  <span className="text-neutral-300 font-light block text-[11px] mt-0.5">
                    Menara Eagletree Lt. 12, Jl. Jend. Sudirman Kav. 45, Jakarta Selatan
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
                ? "EagleTree was founded with a clear intention: to simplify the home-buying journey in Indonesia. We noticed that property seekers frequently encounter confusing market information, aggressive sales pitches, and complicated legal procedures."
                : "EagleTree didirikan dengan komitmen sederhana: membuat proses pencarian hunian di Indonesia menjadi lebih tenang dan meyakinkan. Kami melihat bahwa mencari tempat tinggal sering kali diwarnai oleh informasi harga yang tidak transparan, penawaran yang terburu-buru, serta prosedur legalitas yang membingungkan."}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-8">
              {locale === "en"
                ? "We position ourselves as your personal advisor, not just an intermediary. From initial consultations to notarized deed signings, our certified advisors prioritize your peace of mind and family lifestyle goals."
                : "Oleh karena itu, kami memposisikan diri sebagai rekan penasihat Anda. Kami mendengarkan apa yang sebenarnya Anda butuhkan, memeriksa keabsahan surat tanah secara teliti, dan mendampingi proses pengajuan pembiayaan agar Anda dapat mengambil keputusan dengan rasa aman."}
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
