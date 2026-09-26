"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, Send, ShieldCheck, ArrowRight } from "lucide-react";
import type { AgentProfile } from "@/types/agent";
import type { PropertyPrice } from "@/types/property";

type AgentContactCardProps = {
  agent?: AgentProfile;
  propertyTitle: string;
  propertyPrice: PropertyPrice;
  propertySlug: string;
};

function calculateEstimatedKpr(amount: number) {
  // 20% DP, 20 years (240 mos), 6.5% annual interest
  const principal = amount * 0.8;
  const monthlyRate = 0.065 / 12;
  const months = 240;
  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(monthlyPayment);
}

export function AgentContactCard({
  agent,
  propertyTitle,
  propertyPrice,
}: AgentContactCardProps) {
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState(
    `Halo, saya tertarik dengan properti ${propertyTitle}. Mohon informasi jadwal survey dan kelengkapan dokumennya.`
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fallbackAgent: AgentProfile = {
    id: "eagletree-care",
    name: "Konsultan Resmi Eagletree",
    role: "Property Specialist",
    region: "Indonesia",
    initials: "ET",
    office: "Eagletree Head Office",
    whatsapp: "6281212345678",
    phone: "+6281212345678",
  };

  const currentAgent = agent || fallbackAgent;

  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://eagletree.id/properties/${propertyTitle.toLowerCase().replace(/\s+/g, "-")}`;
  const whatsappMessage = `Halo ${currentAgent.name}, saya tertarik dengan listing "${propertyTitle}" (${currentUrl}). Boleh minta info ketersediaan dan jadwal survey lokasi?`;
  const whatsappUrl = `https://wa.me/${currentAgent.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const estimatedMonthlyKpr = calculateEstimatedKpr(propertyPrice.amount);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-4 p-5 sm:p-6 bg-white rounded-xl border border-neutral-200/80 shadow-2xs sticky top-24">
      {/* Agent Bio Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
        <div className="relative w-12 h-12 rounded-full bg-brand-950 text-accent-400 flex items-center justify-center font-medium text-sm overflow-hidden shrink-0">
          {currentAgent.photo ? (
            <Image src={currentAgent.photo} alt={currentAgent.name} fill className="object-cover" />
          ) : (
            currentAgent.initials
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-medium text-sm text-brand-950 truncate">
              {currentAgent.name}
            </h3>
            <span title="Konsultan Terverifikasi">
              <ShieldCheck size={14} className="text-brand-900 shrink-0" aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs text-neutral-500">{currentAgent.role}</p>
          <p className="text-[11px] text-neutral-400 truncate">{currentAgent.office}</p>
        </div>
      </div>

      {/* Main Direct CTAs */}
      <div className="flex flex-col gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-accent-500 hover:bg-accent-400 text-brand-950 font-medium text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
        >
          <MessageCircle size={15} className="shrink-0" />
          <span>Hubungi via WhatsApp</span>
        </a>

        {currentAgent.phone && (
          <a
            href={`tel:${currentAgent.phone}`}
            className="flex items-center justify-center gap-1.5 w-full py-2 px-4 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 font-medium text-xs rounded-lg transition-colors border border-neutral-200/80 cursor-pointer text-center"
          >
            <Phone size={13} className="text-neutral-500" />
            <span>Telepon: {currentAgent.phone}</span>
          </a>
        )}
      </div>

      {/* Quick Inquiry Form */}
      <div className="pt-2">
        <p className="text-xs font-medium text-brand-950 mb-2.5">
          Kirim Pertanyaan Tertulis
        </p>

        {isSubmitted ? (
          <div className="p-4 rounded-lg bg-brand-50/50 border border-brand-200 text-center flex flex-col items-center gap-1.5">
            <CheckCircle2 size={20} className="text-brand-900" />
            <p className="text-xs font-medium text-brand-950">Pesan Terkirim</p>
            <p className="text-[11px] text-neutral-500">
              Konsultan kami akan segera menghubungi Anda.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitInquiry} className="flex flex-col gap-2.5">
            <input
              type="text"
              required
              placeholder="Nama lengkap Anda"
              value={inquiryName}
              onChange={(e) => setInquiryName(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900"
            />
            <input
              type="tel"
              required
              placeholder="Nomor WhatsApp"
              value={inquiryPhone}
              onChange={(e) => setInquiryPhone(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900"
            />
            <textarea
              rows={2}
              required
              value={inquiryMessage}
              onChange={(e) => setInquiryMessage(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-900 resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-1.5 w-full py-2 bg-brand-950 hover:bg-brand-900 text-white text-xs font-medium uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <Send size={12} />
              <span>Kirimkan Pesan</span>
            </button>
          </form>
        )}
      </div>

      {/* Mini KPR Simulator Widget */}
      {!propertyPrice.period && (
        <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
          <div className="p-3 bg-neutral-50/80 rounded-lg border border-neutral-200/60">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
              ESTIMASI KPR
            </span>
            <p className="font-mono text-sm font-medium text-brand-950">
              Rp {new Intl.NumberFormat("id-ID").format(estimatedMonthlyKpr)}{" "}
              <span className="text-xs font-sans text-neutral-500 font-light">/ bln</span>
            </p>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              Asumsi DP 20%, bunga 6.5%, tenor 20 thn.
            </p>
          </div>
          <Link
            href={`/mortgage-calculator?price=${propertyPrice.amount}`}
            className="text-xs font-medium text-brand-950 hover:text-accent-700 transition-colors inline-flex items-center gap-1"
          >
            <span>Kalkulator KPR Lengkap</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      )}
    </div>
  );
}
