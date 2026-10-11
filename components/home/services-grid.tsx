import Link from "next/link";
import { ArrowRight, Building, Home, KeyRound, ShieldCheck } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type ServicesGridProps = { locale: Locale };

export function ServicesGrid({ locale }: ServicesGridProps) {
  const services = [
    {
      icon: Home,
      title: locale === "en" ? "Buy a Home" : "Beli Properti",
      desc:
        locale === "en"
          ? "Find the perfect home that fits your lifestyle and budget."
          : "Temukan hunian impian yang sesuai gaya hidup, lokasi idaman, dan anggaran Anda.",
      href: "/for-sale",
    },
    {
      icon: KeyRound,
      title: locale === "en" ? "Rent a Property" : "Sewa Properti",
      desc:
        locale === "en"
          ? "Explore a wide range of rental properties for short or long term."
          : "Pilihan sewa rumah, apartemen, dan vila premium untuk jangka pendek maupun panjang.",
      href: "/for-rent",
    },
    {
      icon: Building,
      title: locale === "en" ? "Sell Your Property" : "Titip Jual Properti",
      desc:
        locale === "en"
          ? "Get the best value for your property with our expert team."
          : "Dapatkan valuasi pasar optimal dan eksposur pembeli berkualitas bersama tim kami.",
      href: "/titip-properti",
    },
    {
      icon: ShieldCheck,
      title: locale === "en" ? "Property Management" : "Manajemen & Legalitas",
      desc:
        locale === "en"
          ? "We manage your property and due diligence so you can enjoy peace of mind."
          : "Pendampingan legalitas transaksi, pengecekan sertifikat, dan konsultasi KPR terpadu.",
      href: "/about",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#faf8f5] border-b border-neutral-200/80" aria-labelledby="services-title">
      <PageContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase mb-2.5">
            <span className="w-5 h-px bg-gold-500/80" aria-hidden="true" />
            <span>{locale === "en" ? "OUR SERVICES" : "LAYANAN KAMI"}</span>
            <span className="w-5 h-px bg-gold-500/80" aria-hidden="true" />
          </div>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 font-serif"
          >
            {locale === "en" ? "How We Can Help You" : "Bagaimana Kami Membantu Anda"}
          </h2>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group p-7 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 hover:border-gold-400/80 shadow-2xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Circular Golden Badge */}
                <div className="w-13 h-13 rounded-full bg-gold-50 border border-gold-200/80 text-gold-600 group-hover:bg-navy-950 group-hover:text-gold-400 group-hover:border-navy-950 flex items-center justify-center mb-6 transition-all duration-300 shadow-2xs">
                  <item.icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Inline Link */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 group-hover:text-gold-600 transition-colors pt-2 border-t border-neutral-100">
                <span>{locale === "en" ? "Learn More" : "Pelajari Lebih Lanjut"}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
