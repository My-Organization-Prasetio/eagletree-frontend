import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type AboutApproachProps = {
  locale: Locale;
};

export function AboutApproach({ locale }: AboutApproachProps) {
  const steps = [
    {
      step: "01",
      title: locale === "en" ? "Initial Consultation & Criteria" : "Konsultasi Awal & Diskusi Kebutuhan",
      desc:
        locale === "en"
          ? "We discuss your family's lifestyle needs, timeline, and realistic budget before searching for options."
          : "Kami mendiskusikan preferensi hunian, rencana jangka panjang keluarga, serta rentang anggaran yang nyaman sebelum memulai pencarian.",
    },
    {
      step: "02",
      title: locale === "en" ? "Curated Screening & Legal Verification" : "Penyaringan Unit & Pemeriksaan Dokumen",
      desc:
        locale === "en"
          ? "We screen matching listings and verify land certificates (SHM/HGB) and permit status before arranging visits."
          : "Kami menyaring portofolio yang relevan dan memeriksa keabsahan sertifikat (SHM/HGB) serta izin bangunan sebelum menjadwalkan survei.",
    },
    {
      step: "03",
      title: locale === "en" ? "Transparent Mortgage Facilitation" : "Simulasi Angsuran & Koordinasi KPR",
      desc:
        locale === "en"
          ? "We help compare bank interest rates transparently and coordinate paperwork with 8+ tier-1 partner banks."
          : "Membantu Anda membandingkan skema suku bunga bank secara objektif serta mengoordinasikan pengajuan KPR bersama bank rekanan resmi.",
    },
    {
      step: "04",
      title: locale === "en" ? "Negotiation & Notary Closing" : "Pendampingan Negosiasi & Akad Notaris",
      desc:
        locale === "en"
          ? "Our certified advisors assist in fair price discussions, notary coordination, and handover documentation."
          : "Penasihat kami mendampingi proses penawaran harga yang wajar, kelengkapan berkas di hadapan notaris/PPAT, hingga serah terima kunci.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80" aria-labelledby="approach-title">
      <PageContainer>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-5 h-px bg-gold-500/80" aria-hidden="true" />
            <span>{locale === "en" ? "OUR APPROACH" : "PENDEKATAN LAYANAN"}</span>
          </div>
          <h2
            id="approach-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-serif"
          >
            {locale === "en" ? "How We Work With You" : "Bagaimana Kami Mendampingi Anda"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 font-light mt-3 leading-relaxed">
            {locale === "en"
              ? "A structured, transparent workflow designed to give you clarity and confidence at every step."
              : "Tahapan kerja yang terstruktur dan transparan agar Anda merasa tenang sejak pencarian awal hingga serah terima hunian."}
          </p>
        </div>

        {/* 4 Steps in Clean Editorial Numbered Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col border-t-2 border-gold-400/40 pt-6">
              <span className="font-mono text-xs font-bold text-gold-600 mb-3 tracking-wider">
                LANGKAH {item.step}
              </span>
              <h3 className="text-base font-bold text-navy-950 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
