import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

import { PageContainer } from "@/components/layout/page-container";
import { AgentListingTabs } from "@/components/agent/agent-listing-tabs";
import { mockAgents, mockProperties, getAgentBySlug } from "@/lib/mock-data";

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js static generation
export async function generateStaticParams() {
  return mockAgents.map((agent) => ({
    slug: agent.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const agent = getAgentBySlug(p.slug);
  
  if (!agent) return { title: "Agen Tidak Ditemukan" };

  return {
    title: `Profil Konsultan: ${agent.name} — ${agent.office} | Eagletree`,
    description: agent.bio || `Konsultasi properti pilihan Anda bersama ${agent.name}, ${agent.role} di ${agent.office}.`,
  };
}

export default async function AgentProfilePage({ params }: Props) {
  const p = await params;
  const agent = getAgentBySlug(p.slug);

  if (!agent) {
    notFound();
  }

  // Find all properties handled by this agent
  const agentProperties = mockProperties.filter(prop => prop.agent?.id === agent.id);

  const whatsappUrl = agent.whatsapp 
    ? `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(`Halo ${agent.name}, saya ingin berkonsultasi mengenai properti di Eagletree.`)}` 
    : "#";

  return (
    <main className="flex min-h-screen flex-col pt-24 pb-20 bg-neutral-50/60">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-neutral-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} className="text-neutral-400" />
          <Link href="/find-agent" className="hover:text-brand-700 transition-colors">
            Direktori Konsultan
          </Link>
          <ChevronRight size={14} className="text-neutral-400" />
          <span className="text-neutral-900 font-medium" aria-current="page">
            {agent.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-2xs p-6 sticky top-24">
              <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-neutral-100">
                <div className="w-24 h-24 rounded-full bg-brand-950 text-accent-400 flex items-center justify-center font-medium text-2xl overflow-hidden relative mb-4 border-2 border-neutral-200/90 shadow-2xs">
                  {agent.photo ? (
                    <Image 
                      src={agent.photo} 
                      alt={agent.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : (
                    <span>{agent.initials}</span>
                  )}
                </div>
                
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h1 className="font-serif text-xl font-medium text-brand-950">{agent.name}</h1>
                  <span title="Konsultan Terverifikasi">
                    <ShieldCheck size={16} className="text-brand-900" />
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-2">{agent.role}</p>
                {agent.licenseNumber && (
                  <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider bg-neutral-100 px-2 py-0.5 rounded">
                    {agent.licenseNumber}
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-400">Kantor</span>
                  <span className="font-medium text-neutral-800">{agent.office}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-400">Spesialisasi</span>
                  <span className="font-medium text-neutral-800">{agent.region}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-400">Bergabung</span>
                  <span className="font-medium text-neutral-800">{agent.joinedYear || 2020}</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-brand-950 px-4 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors"
              >
                <MessageCircle size={16} />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Listings (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio Section */}
            <section className="bg-white rounded-xl border border-neutral-200/80 p-6 sm:p-7 shadow-2xs">
              <h2 className="font-serif text-lg font-medium text-brand-950 mb-3">Tentang Konsultan</h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light mb-6">
                {agent.bio || `${agent.name} adalah ${agent.role} profesional yang siap membantu Anda dalam proses jual, beli, dan sewa properti dengan standar etika tinggi dan transparansi penuh.`}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-neutral-100 text-center">
                <div>
                  <span className="block font-serif text-2xl font-normal text-brand-950">{agent.rating || "5.0"}</span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Rating Klien</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-normal text-brand-950">{agentProperties.length}</span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Listing Aktif</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-normal text-brand-950">{agent.transactionCount || agentProperties.length * 3}</span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Transaksi Sukses</span>
                </div>
              </div>
            </section>

            {/* Listings Section */}
            <section>
              <div className="mb-4">
                <h2 className="font-serif text-xl font-medium text-brand-950">Portofolio Listing</h2>
                <p className="text-xs text-neutral-500">Unit yang saat ini dikelola oleh {agent.name}.</p>
              </div>
              <AgentListingTabs properties={agentProperties} />
            </section>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
