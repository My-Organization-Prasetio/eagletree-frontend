"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { PropertyImage } from "@/types/property";

type PropertyGalleryProps = {
  images: PropertyImage[];
  title: string;
};

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const totalImages = images.length;
  const isLightboxOpen = lightboxIndex !== null;

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    setLightboxIndex((curr) => {
      if (curr === null) return null;
      return curr === 0 ? totalImages - 1 : curr - 1;
    });
  }, [totalImages]);

  const handleNext = useCallback(() => {
    setLightboxIndex((curr) => {
      if (curr === null) return null;
      return curr === totalImages - 1 ? 0 : curr + 1;
    });
  }, [totalImages]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Desktop & Tablet Mosaic Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden bg-[#eef2ef]">
        {/* Main Hero Photo (Takes 2 cols & 2 rows on desktop) */}
        <div
          onClick={() => handleOpenLightbox(0)}
          className="relative md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[460px] cursor-pointer group overflow-hidden"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt || title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenLightbox(0);
            }}
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-[#102d26] text-xs font-semibold backdrop-blur-xs shadow-md transition-all cursor-pointer"
          >
            <Expand size={16} />
            <span>Lihat Semua Foto ({totalImages})</span>
          </button>
        </div>

        {/* Thumbnail Photos (Up to 3 more visible) */}
        {images.slice(1, 5).map((img, idx) => {
          const actualIndex = idx + 1;
          const isLastVisible = idx === 3;
          const remainingCount = totalImages - 4;

          return (
            <div
              key={img.src + idx}
              onClick={() => handleOpenLightbox(actualIndex)}
              className="relative hidden md:block aspect-[4/3] cursor-pointer group overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt || `${title} foto ${actualIndex + 1}`}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

              {/* Show "+X Foto Lainnya" overlay on the 4th thumbnail if there are more */}
              {isLastVisible && remainingCount > 0 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-base font-semibold">
                  +{remainingCount} Foto Lainnya
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Galeri Foto Properti"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-white/80">
                {lightboxIndex + 1} / {totalImages}
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40" />
              <span className="hidden sm:inline-block text-xs sm:text-sm text-white/70 truncate max-w-md">
                {title}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Tutup galeri"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Photo Center View */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full h-full max-h-[75vh] max-w-5xl">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt || title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Foto berikutnya"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Caption & Thumbnails Strip */}
          <div className="flex flex-col items-center gap-3 text-center z-10">
            {images[lightboxIndex].caption && (
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                {images[lightboxIndex].caption}
              </p>
            )}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
              {images.map((thumb, tIdx) => (
                <button
                  key={thumb.src + tIdx}
                  type="button"
                  onClick={() => setLightboxIndex(tIdx)}
                  className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer ${
                    tIdx === lightboxIndex
                      ? "ring-2 ring-[#c99a55] opacity-100 scale-105"
                      : "opacity-40 hover:opacity-80"
                  }`}
                >
                  <Image src={thumb.src} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
