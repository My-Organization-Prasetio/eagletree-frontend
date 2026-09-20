import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Star, Building2, ChevronRight, Award } from "lucide-react";
import type { AgentProfile } from "@/types/agent";

type AgentCardProps = {
  agent: AgentProfile;
};

export function AgentCard({ agent }: AgentCardProps) {
  const whatsappUrl = agent.whatsapp 
    ? `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent("Halo, saya ingin berkonsultasi mengenai properti di Eagletree.")}` 
    : "#";

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-brand-50 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden relative z-10">
            {agent.photo ? (
              <Image 
                src={agent.photo} 
                alt={agent.name}
                fill
                className="object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-brand-700 tracking-wider">{agent.initials}</span>
            )}
          </div>
          {agent.licenseNumber && (
            <div className="absolute -bottom-1 -right-1 bg-accent-500 text-white p-1.5 rounded-full shadow-md z-20" title="Licensed Agent">
              <Award size={16} />
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-neutral-900 mb-1">{agent.name}</h3>
        <p className="text-sm font-medium text-brand-700 mb-4">{agent.role}</p>

        <div className="w-full space-y-2 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500 flex items-center gap-1.5">
              <Building2 size={16} />
              Kantor
            </span>
            <span className="font-medium text-neutral-900 truncate max-w-[150px]">{agent.office}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500 flex items-center gap-1.5">
              <Star size={16} className="text-accent-500" />
              Rating
            </span>
            <span className="font-medium text-neutral-900">{agent.rating ? `${agent.rating}/5.0` : "New"}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500 flex items-center gap-1.5">
              <Award size={16} />
              Spesialisasi
            </span>
            <span className="font-medium text-neutral-900 truncate max-w-[150px]">{agent.region}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-auto space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
          >
            <MessageCircle size={18} />
            Hubungi Cepat
          </a>
          <Link
            href={`/agents/${agent.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="w-full flex items-center justify-center gap-2 bg-neutral-50 hover:bg-neutral-100 text-brand-900 border border-neutral-200 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors group"
          >
            Lihat Profil Lengkap
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
