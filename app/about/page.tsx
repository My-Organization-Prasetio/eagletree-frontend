import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutJourney } from "@/components/about/about-journey";
import { AboutVisionMission } from "@/components/about/about-vision-mission";
import { AboutApproach } from "@/components/about/about-approach";
import { AboutCta } from "@/components/about/about-cta";
import { resolveLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Tentang Eagletree — Konsultan Properti Terpercaya & Berlisensi",
  description:
    "Mengenal EagleTree lebih dekat: pendekatan personal, kurasi portofolio dengan kepastian legalitas, jejak perjalanan dari kantor pusat Jakarta, serta transparansi pembiayaan KPR.",
  alternates: { canonical: "/about" },
};

type AboutPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const { lang } = await searchParams;
  const locale: Locale = resolveLocale(lang);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 1. Hero Banner: Personal & Human-Centered, inspired by "MULAI LANGKAH ANDA" */}
      <AboutHero locale={locale} />

      {/* 2. Our Story: Background, Purpose & Verified Information */}
      <AboutStory locale={locale} />

      {/* 3. Company Journey: Static Visual Image + Chronological Timeline (No Map Library) */}
      <AboutJourney locale={locale} />

      {/* 4. Vision & Mission: Long-term Direction & Values in Natural Editorial Layout */}
      <AboutVisionMission locale={locale} />

      {/* 5. Our Approach: How EagleTree Assists Property & Financing Decisions */}
      <AboutApproach locale={locale} />

      {/* 6. Contact / Call to Action: Seamless Invitation matching Homepage */}
      <AboutCta locale={locale} />
    </div>
  );
}
