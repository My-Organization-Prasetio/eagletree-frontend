"use client";

import { Building2, MessageCircle, Mail } from "lucide-react";
import type { ProjectItem } from "@/types/project";
import { formatCurrency } from "@/lib/utils";

type ProjectInquiryCardProps = {
  project: ProjectItem;
};

export function ProjectInquiryCard({ project }: ProjectInquiryCardProps) {
  const whatsappNumber = "6281212345678"; // Dummy central number
  const whatsappMessage = `Halo Eagletree, saya tertarik dan ingin mendapat informasi lebih lanjut (brosur/pricelist) mengenai proyek ${project.title} dari ${project.developer}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-md p-6 sticky top-24">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 size={32} className="text-brand-900" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-1">Tertarik dengan Proyek Ini?</h3>
        <p className="text-sm text-neutral-500">
          Dapatkan e-brosur, pricelist terbaru, dan jadwal kunjungan lokasi (show unit).
        </p>
      </div>

      <div className="bg-neutral-50 rounded-xl p-4 mb-6 border border-neutral-100 text-center">
        <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          Harga Mulai
        </span>
        <span className="block text-2xl font-bold text-brand-900">
          {formatCurrency(project.startingPrice.amount, project.startingPrice.currency)}
        </span>
      </div>

      <div className="space-y-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-xl font-medium transition-colors shadow-sm"
        >
          <MessageCircle size={20} />
          Hubungi via WhatsApp
        </a>
        <button
          onClick={() => alert("Formulir inquiry sedang dalam pengembangan")}
          className="w-full flex items-center justify-center gap-2 bg-white border border-brand-900 text-brand-900 hover:bg-brand-50 px-4 py-3 rounded-xl font-medium transition-colors"
        >
          <Mail size={20} />
          Minta E-Brosur
        </button>
      </div>

      <p className="text-xs text-center text-neutral-400 mt-6">
        Dengan menghubungi kami, Anda menyetujui Syarat & Ketentuan layanan Eagletree.
      </p>
    </div>
  );
}
