import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type AboutVisionMissionProps = {
  locale: Locale;
};

export function AboutVisionMission({ locale }: AboutVisionMissionProps) {
  const missions = [
    {
      number: "01",
      title: locale === "en" ? "Objective & Empathetic Guidance" : "Pendampingan Objektif & Berorientasi Kebutuhan",
      desc:
        locale === "en"
          ? "We take the time to understand your lifestyle, long-term plans, and financial comfort before offering options."
          : "Mendengarkan aspirasi gaya hidup dan kenyamanan finansial Anda secara utuh sebelum merekomendasikan pilihan properti.",
    },
    {
      number: "02",
      title: locale === "en" ? "Uncompromised Legal Integrity" : "Kepastian Hukum & Transparansi Dokumen",
      desc:
        locale === "en"
          ? "We verify certificate status (SHM/HGB), planning permits, and developer backgrounds prior to inspections."
          : "Memeriksa status sertifikat tanah, izin bangunan, dan rekam jejak pengembang demi keamanan transaksi Anda.",
    },
    {
      number: "03",
      title: locale === "en" ? "Transparent Financing Facilitation" : "Fasilitasi Pembiayaan KPR yang Terbuka",
      desc:
        locale === "en"
          ? "We assist rate comparisons and application coordination across partner banks without extra client commissions."
          : "Membantu simulasi perhitungan cicilan dan pengajuan KPR bersama bank rekanan terpercaya tanpa biaya komisi tambahan.",
    },
    {
      number: "04",
      title: locale === "en" ? "Enduring Partnership" : "Kemitraan Jangka Panjang",
      desc:
        locale === "en"
          ? "Our advisory commitment continues well past the signing of deeds, supporting future property decisions."
          : "Komitmen kami tidak berhenti saat akad selesai, melainkan terus mendampingi kebutuhan pengelolaan aset Anda di masa depan.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#faf8f5] border-b border-neutral-200/80" aria-labelledby="vision-mission-title">
      <PageContainer>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2.5 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-5 h-px bg-gold-500/80" aria-hidden="true" />
            <span>{locale === "en" ? "VISION & MISSION" : "VISI & MISI"}</span>
          </div>
          <h2
            id="vision-mission-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-serif"
          >
            {locale === "en" ? "Our Long-Term Direction" : "Komitmen & Arah Jangka Panjang"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 font-light mt-3 leading-relaxed">
            {locale === "en"
              ? "The core principles that shape how we communicate, curate, and represent our clients every day."
              : "Prinsip yang memandu cara kami bekerja, menyeleksi properti, dan mendampingi setiap klien."}
          </p>
        </div>

        {/* Editorial Vision Quote Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/80 mb-12 shadow-2xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600 font-mono block mb-3">
            {locale === "en" ? "OUR VISION" : "VISI EAGLETREE"}
          </span>
          <p className="text-xl sm:text-2xl font-serif text-navy-950 leading-relaxed font-medium">
            {locale === "en" ? (
              <>
                “To be Indonesia's most trusted property advisory firm,{" "}
                <span className="text-gold-600 italic font-normal">
                  bringing clarity, legal security, and empathetic service to every real estate journey.”
                </span>
              </>
            ) : (
              <>
                “Menjadi konsultan properti paling terpercaya di Indonesia,{" "}
                <span className="text-gold-600 italic font-normal">
                  yang menghadirkan kejelasan informasi, kepastian legalitas, dan kenyamanan personal dalam setiap keputusan kepemilikan hunian.”
                </span>
              </>
            )}
          </p>
        </div>

        {/* 4 Mission Points in Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((m) => (
            <div key={m.number} className="flex items-start gap-4 p-6 rounded-xl bg-white border border-neutral-200/80">
              <span className="font-mono text-sm font-extrabold text-gold-600 mt-0.5">
                {m.number}
              </span>
              <div>
                <h3 className="text-base font-bold text-navy-950 mb-1.5 leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
