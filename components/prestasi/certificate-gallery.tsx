"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle2, Eye, ShieldCheck, X, ZoomIn } from "lucide-react";

export type CertificateItem = {
  id: string;
  title: string;
  organization: string;
  year: string;
  imageSrc: string;
  badge: string;
  description: string;
};

export const dummyCertificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Certificate of Excellence in Real Estate Brokerage",
    organization: "Global Real Estate Network & Property Council",
    year: "2025 - 2026",
    imageSrc: "/certificate-excellence.jpg",
    badge: "Keunggulan Layanan",
    description: "Sertifikat penghargaan atas standar integritas, kepuasan transaksi pembeli, dan pencapaian broker elit.",
  },
  {
    id: "cert-2",
    title: "Official Real Estate Association Accreditation",
    organization: "AREBI & Global Premier Real Estate Association",
    year: "Berlaku s.d 2026",
    imageSrc: "/certificate-accreditation.jpg",
    badge: "Akreditasi Resmi",
    description: "Sertifikasi kepatuhan kode etik broker profesional, legalitas transaksi, dan standar perlindungan konsumen.",
  },
  {
    id: "cert-3",
    title: "Developer Partnership Award & Trophy of Honor",
    organization: "The Property Developer Group / Top Developer Partners",
    year: "Penghargaan Tahunan 2024",
    imageSrc: "/certificate-partnership.jpg",
    badge: "Kemitraan Strategis",
    description: "Plakat apresiasi penghargaan atas rekor kontribusi pemasaran dan penjualan proyek primer pengembang terkemuka.",
  },
];

export function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section className="mb-20" aria-labelledby="certificate-gallery-title">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-wider font-bold text-accent-700">Bukti Fisik & Akreditasi</span>
        <h2 id="certificate-gallery-title" className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-1">
          Galeri Sertifikat & Penghargaan
        </h2>
        <p className="text-sm text-neutral-500 mt-2">
          Klik pada setiap sertifikat untuk melihat foto dokumen dalam resolusi tinggi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyCertificates.map((cert) => (
          <div
            key={cert.id}
            className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-accent-500/60 transition-all duration-300 flex flex-col"
          >
            {/* Image Preview Container */}
            <div
              className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedCert(cert);
                }
              }}
              aria-label={`Buka sertifikat ${cert.title}`}
            >
              <Image
                src={cert.imageSrc}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-brand-950 text-xs font-bold shadow-lg">
                  <ZoomIn size={16} />
                  Perbesar Sertifikat
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-brand-950/85 backdrop-blur-md text-accent-400 text-[11px] font-bold border border-white/10">
                  {cert.badge}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-medium">
                  <span>{cert.organization}</span>
                  <span className="text-accent-700 font-semibold">{cert.year}</span>
                </div>
                <h3 className="text-base font-bold text-brand-950 line-clamp-2 leading-snug group-hover:text-accent-700 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <CheckCircle2 size={14} />
                  Terverifikasi Asli
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-bold text-accent-700 hover:text-accent-600 inline-flex items-center gap-1 cursor-pointer"
                >
                  <Eye size={14} />
                  <span>Lihat Detail</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-brand-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 bg-neutral-50/50">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent-700">
                  {selectedCert.badge} • {selectedCert.year}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-brand-950 mt-0.5">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-brand-950 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup jendela"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[50vh] sm:h-[65vh] bg-neutral-900">
              <Image
                src={selectedCert.imageSrc}
                alt={selectedCert.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-600">
              <p>
                <strong>Diterbitkan oleh:</strong> {selectedCert.organization}
              </p>
              <div className="flex items-center gap-1.5 text-emerald-600 font-semibold shrink-0">
                <ShieldCheck size={16} />
                <span>Dokumen Resmi & Akreditasi Terdaftar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
