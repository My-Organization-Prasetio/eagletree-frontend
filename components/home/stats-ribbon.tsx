import { Award, Building2, Sparkles, Trophy, Users } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";

type StatsRibbonProps = { locale: Locale };

export function StatsRibbon({ locale }: StatsRibbonProps) {
  const stats = [
    {
      icon: Sparkles,
      value: "10+",
      label: locale === "en" ? "Years of Experience" : "Tahun Pengalaman",
    },
    {
      icon: Building2,
      value: "1,200+",
      label: locale === "en" ? "Properties Sold" : "Properti Terjual",
    },
    {
      icon: Users,
      value: "2,500+",
      label: locale === "en" ? "Happy Clients" : "Klien Puas",
    },
    {
      icon: Trophy,
      value: "25+",
      label: locale === "en" ? "Award Winning" : "Penghargaan Industri",
    },
  ];

  return (
    <section className="bg-navy-950 text-white py-10 sm:py-12 border-y border-navy-800 relative overflow-hidden" aria-label="Eagletree Metrics">
      {/* Subtle Ambient Golden Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(197,155,39,0.06),transparent)]"
        aria-hidden="true"
      />

      <PageContainer className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 sm:gap-5 ${
                index > 0 ? "pt-5 lg:pt-0 lg:pl-8 xl:pl-10" : ""
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.07] border border-white/15 text-gold-400 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <item.icon size={24} strokeWidth={1.8} />
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-white tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="block text-xs sm:text-[13px] text-neutral-300 font-medium mt-1.5 leading-snug">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
