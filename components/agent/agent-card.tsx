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
    <div className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <div className="p-6 flex-grow flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-brand-50 border-2 border-neutral-200/90 shadow-2xs flex items-center justify-center overflow-hidden relative">
            {agent.photo ? (
              <Image 
                src={agent.photo} 
                alt={agent.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            ) : (
              <span className="text-xl font-bold text-brand-950 tracking-wider">{agent.initials}</span>
            )}
          </div>
          {agent.licenseNumber && (
            <span className="absolute -bottom-1 -right-1 bg-accent-500 text-brand-950 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-2xs">
              AREBI
            </span>
          )}
        </div>

        {/* Info */}
        <h3 className="text-lg font-bold text-brand-950 mb-0.5">{agent.name}</h3>
        <p className="text-xs font-semibold text-accent-700 uppercase tracking-wider mb-4">{agent.role}</p>

        <div className="w-full space-y-2 py-3 border-y border-neutral-100 text-xs mb-5 text-left">
          <div className="flex items-center justify-between">
            <span className="text-neutral-500">Kantor Cabang</span>
            <span className="font-semibold text-brand-950 truncate max-w-[150px]">{agent.office}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neutral-500">Spesialisasi Area</span>
            <span className="font-semibold text-brand-950 truncate max-w-[150px]">{agent.region}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neutral-500">Rating Klien</span>
            <span className="font-semibold text-brand-950">
              {agent.rating ? (
                <span className="inline-flex items-center gap-1">
                  <span>{agent.rating}</span>
                  <Star size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                  <span className="text-neutral-500 font-normal">(Terverifikasi)</span>
                </span>
              ) : (
                "Konsultan Baru"
              )}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-auto space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand-950 hover:bg-brand-900 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-2xs"
          >
            <MessageCircle size={16} />
            <span>Hubungi WhatsApp</span>
          </a>
          <Link
            href={`/agents/${agent.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="w-full flex items-center justify-center gap-1.5 bg-neutral-50 hover:bg-neutral-100 text-brand-950 border border-neutral-200 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
          >
            <span>Lihat Profil & Listing</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
