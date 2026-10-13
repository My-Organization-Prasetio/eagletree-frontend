import Image from "next/image";
import { Compass, Handshake, ShieldCheck, UserCheck } from "lucide-react";
import { mockAgents } from "@/lib/mock-data";
import { PageContainer } from "@/components/layout/page-container";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

const valueIcons = [Compass, ShieldCheck, Handshake];

type TrustSectionProps = { locale: Locale };

export function TrustSection({ locale }: TrustSectionProps) {
  const content = copy[locale].trust;

  return (
    <section className="py-16 sm:py-24 bg-surface-raised border-b border-border-subtle" aria-labelledby="trust-title">
      <PageContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-0.5 rounded-full bg-accent-600" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-accent-700">{content.eyebrow}</p>
            </div>
            <h2 id="trust-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-950">{content.title}</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">{content.description}</p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-18">
          {content.values.map(({ title, description }, index) => {
            const Icon = valueIcons[index];

            return (
              <article
                className="p-7 sm:p-8 rounded-3xl bg-neutral-50/70 border border-border-subtle hover:border-brand-800/40 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                key={title}
              >
                <span className="w-13 h-13 rounded-2xl bg-brand-50 text-brand-950 flex items-center justify-center shadow-xs border border-brand-100/80" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.8} className="text-brand-900" />
                </span>
                <h3 className="text-xl font-bold text-brand-950 tracking-tight">{title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
              </article>
            );
          })}
        </div>

        {/* Local Agents Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl border border-brand-800/80">
          <div className="max-w-md flex flex-col gap-2 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-accent-400 border border-white/15 self-start">
              <UserCheck size={12} className="text-accent-400" />
              {content.localEyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{content.localTitle}</h3>
            <p className="text-sm text-brand-100/85 leading-relaxed">{content.localDescription}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 relative z-10">
            {mockAgents.map((agent) => {
              const regionName =
                agent.id === "maya-pradana"
                  ? content.agentRegions.maya
                  : agent.id === "raka-wijaya"
                  ? content.agentRegions.raka
                  : agent.id === "sari-utama"
                  ? content.agentRegions.sari
                  : agent.region;

              return (
                <div className="flex items-center gap-3.5 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-white/10" key={agent.id}>
                  <div className="w-11 h-11 rounded-xl bg-brand-900 text-accent-400 font-bold flex items-center justify-center text-sm border border-brand-700 shadow-xs relative overflow-hidden shrink-0" aria-hidden="true">
                    {agent.photo ? (
                      <Image
                        src={agent.photo}
                        alt={agent.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    ) : (
                      agent.initials
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-snug">{agent.name}</p>
                    <p className="text-[11px] text-brand-100/70">
                      {regionName}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
