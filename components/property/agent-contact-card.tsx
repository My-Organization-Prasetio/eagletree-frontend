"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calculator, CheckCircle2, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react";
import type { AgentProfile } from "@/types/agent";
import type { PropertyPrice } from "@/types/property";

type AgentContactCardProps = {
  agent?: AgentProfile;
  propertyTitle: string;
  propertyPrice: PropertyPrice;
  propertySlug: string;
};

function calculateEstimatedKpr(amount: number) {
  // Rough rule of thumb: 20% DP, 20 years (240 mos), 6.5% annual interest
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
    `Halo, saya tertarik dengan properti ${propertyTitle}. Mohon informasi jadwal survey dan dokumennya.`
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
  const whatsappMessage = `Halo ${currentAgent.name}, saya menemukan properti "${propertyTitle}" di Eagletree (${currentUrl}). Boleh minta info ketersediaan dan jadwal survey lokasi?`;
  const whatsappUrl = `https://wa.me/${currentAgent.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const estimatedMonthlyKpr = calculateEstimatedKpr(propertyPrice.amount);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-5 p-6 bg-white rounded-2xl border border-[#dde2de] shadow-sm sticky top-24">
      {/* Agent Bio Header */}
      <div className="flex items-center gap-3.5 pb-4 border-b border-[#dde2de]">
        <div className="relative w-14 h-14 rounded-full bg-[#102d26] text-white flex items-center justify-center font-bold text-base overflow-hidden shrink-0 ring-2 ring-[#c99a55]/40">
          {currentAgent.photo ? (
            <Image src={currentAgent.photo} alt={currentAgent.name} fill className="object-cover" />
          ) : (
            currentAgent.initials
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-bold text-[#102d26] truncate">
              {currentAgent.name}
            </h3>
            <span title="Agen Terverifikasi">
              <ShieldCheck size={16} className="text-[#36705d] shrink-0" aria-hidden="true" />
            </span>
          </div>
          <p className="text-xs text-[#68766f]">{currentAgent.role}</p>
          <p className="text-[11px] text-[#87938d] truncate">{currentAgent.office}</p>
        </div>
      </div>

      {/* Main Direct CTAs */}
      <div className="flex flex-col gap-2.5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl transition-all shadow-xs cursor-pointer text-center"
        >
          <MessageCircle size={19} className="shrink-0" />
          <span>Hubungi via WhatsApp</span>
        </a>

        {currentAgent.phone && (
          <a
            href={`tel:${currentAgent.phone}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#f0f5f1] hover:bg-[#e1ece7] text-[#102d26] font-medium text-xs rounded-xl transition-all border border-[#dde2de] cursor-pointer text-center"
          >
            <Phone size={14} className="text-[#36705d]" />
            <span>Telepon: {currentAgent.phone}</span>
          </a>
        )}
      </div>

      {/* Quick Inquiry Form */}
      <div className="pt-2">
        <p className="text-xs font-semibold text-[#102d26] mb-3">
          Atau Tinggalkan Pesan untuk Agen
        </p>

        {isSubmitted ? (
          <div className="p-4 rounded-xl bg-[#f0f5f1] border border-[#36705d]/20 text-center flex flex-col items-center gap-2">
            <CheckCircle2 size={24} className="text-[#36705d]" />
            <p className="text-xs font-semibold text-[#102d26]">Pesan Terkirim!</p>
            <p className="text-[11px] text-[#53625c]">
              Agen kami akan segera menghubungi Anda melalui WhatsApp atau telepon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitInquiry} className="flex flex-col gap-3">
            <input
              type="text"
              required
              placeholder="Nama lengkap Anda"
              value={inquiryName}
              onChange={(e) => setInquiryName(e.target.value)}
              className="w-full px-3 py-2 bg-[#f7f8f5] border border-[#dde2de] rounded-xl text-xs text-[#1c2925] focus:outline-none focus:border-[#36705d]"
            />
            <input
              type="tel"
              required
              placeholder="Nomor WhatsApp (cth: 08123456789)"
              value={inquiryPhone}
              onChange={(e) => setInquiryPhone(e.target.value)}
              className="w-full px-3 py-2 bg-[#f7f8f5] border border-[#dde2de] rounded-xl text-xs text-[#1c2925] focus:outline-none focus:border-[#36705d]"
            />
            <textarea
              rows={2}
              required
              value={inquiryMessage}
              onChange={(e) => setInquiryMessage(e.target.value)}
              className="w-full px-3 py-2 bg-[#f7f8f5] border border-[#dde2de] rounded-xl text-xs text-[#1c2925] focus:outline-none focus:border-[#36705d] resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#102d26] hover:bg-[#173f35] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <Send size={13} />
              <span>Kirim Pesan</span>
            </button>
          </form>
        )}
      </div>

      {/* Mini KPR Simulator Widget */}
      {!propertyPrice.period && (
        <div className="pt-4 border-t border-[#dde2de] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#68766f]">
              Simulasi KPR
            </span>
            <Calculator size={14} className="text-[#c99a55]" />
          </div>
          <div className="p-3 bg-[#faf5eb] rounded-xl border border-[#c99a55]/25">
            <p className="text-[11px] text-[#53625c]">Estimasi Cicilan Bulanan</p>
            <p className="text-base font-bold text-[#936b2d]">
              Rp {new Intl.NumberFormat("id-ID").format(estimatedMonthlyKpr)}{" "}
              <span className="text-xs font-normal text-[#68766f]">/ bulan</span>
            </p>
            <p className="text-[10px] text-[#87938d] mt-1">
              Asumsi DP 20%, bunga 6.5%, tenor 20 tahun.
            </p>
          </div>
          <Link
            href={`/mortgage-calculator?price=${propertyPrice.amount}`}
            className="text-xs font-semibold text-[#102d26] hover:text-[#936b2d] transition-colors inline-flex items-center gap-1 mt-1"
          >
            <span>Hitung Simulasi KPR Lengkap</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
