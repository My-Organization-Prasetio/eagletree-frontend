import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Building2, Star, Award, MessageCircle, Calendar, CheckCircle2 } from "lucide-react";
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
    title: `Profil Agen: ${agent.name} - ${agent.office} | Eagletree Property`,
    description: agent.bio || `Temukan properti idaman Anda bersama ${agent.name}, ${agent.role} di ${agent.office}.`,
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
    <main className="flex min-h-screen flex-col pt-24 pb-20 bg-neutral-50">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} />
          <Link href="/find-agent" className="hover:text-brand-700 transition-colors">
            Direktori Agen
          </Link>
          <ChevronRight size={14} />
          <span className="text-neutral-900 font-medium" aria-current="page">
            {agent.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sticky top-24">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full bg-brand-50 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden relative z-10">
                    {agent.photo ? (
                      <Image 
                        src={agent.photo} 
                        alt={agent.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-brand-700 tracking-wider">{agent.initials}</span>
                    )}
                  </div>
                  {agent.licenseNumber && (
                    <div className="absolute bottom-0 right-0 bg-accent-500 text-white p-2 rounded-full shadow-md z-20" title="Licensed Agent">
                      <Award size={20} />
                    </div>
                  )}
                </div>
                
                <h1 className="text-2xl font-bold text-neutral-900 mb-1">{agent.name}</h1>
                <p className="text-brand-700 font-medium mb-2">{agent.role}</p>
                {agent.licenseNumber && (
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold bg-neutral-100 px-3 py-1 rounded-full">
                    {agent.licenseNumber}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                    <Building2 size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Kantor Cabang</p>
                    <p className="text-sm font-semibold text-neutral-900">{agent.office}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Spesialisasi Area</p>
                    <p className="text-sm font-semibold text-neutral-900">{agent.region}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                    <Calendar size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Bergabung Sejak</p>
                    <p className="text-sm font-semibold text-neutral-900">{agent.joinedYear || 2020}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-xl font-medium transition-colors shadow-sm"
                >
                  <MessageCircle size={20} />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Listings */}
          <div className="lg:col-span-2 space-y-10">
            {/* Bio Section */}
            <section className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Tentang Agen</h2>
              <p className="text-neutral-700 leading-relaxed text-lg mb-8">
                {agent.bio || `${agent.name} adalah ${agent.role} profesional yang siap membantu Anda dalam proses jual, beli, dan sewa properti dengan pelayanan terbaik dan transparan.`}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-neutral-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-accent-500 mb-2">
                    <Star size={20} className="fill-accent-500" />
                  </div>
                  <span className="block text-2xl font-bold text-neutral-900">{agent.rating || "5.0"}</span>
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Rating</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-brand-500 mb-2">
                    <Building2 size={20} />
                  </div>
                  <span className="block text-2xl font-bold text-neutral-900">{agentProperties.length}</span>
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Listing Aktif</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-500 mb-2">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="block text-2xl font-bold text-neutral-900">{agent.transactionCount || agentProperties.length * 3}</span>
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Transaksi Selesai</span>
                </div>
              </div>
            </section>

            {/* Listings Section */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Listing Properti</h2>
              <AgentListingTabs properties={agentProperties} />
            </section>
          </div>

        </div>
      </PageContainer>
    </main>
  );
}
