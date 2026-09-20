"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type HorizontalCarouselProps = {
  children: React.ReactNode;
  itemCount: number;
  previousLabel: string;
  nextLabel: string;
  carouselLabel: string;
  className?: string;
};

export function HorizontalCarousel({
  children,
  itemCount,
  previousLabel,
  nextLabel,
  carouselLabel,
  className = "",
}: HorizontalCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hasControls = itemCount > 3;

  function scrollTrack(direction: "previous" | "next") {
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.85;
    trackRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="overflow-x-auto no-scrollbar scroll-smooth w-full"
        aria-label={carouselLabel}
        ref={trackRef}
      >
        <div className="flex gap-5 sm:gap-6 pb-2 w-max min-w-full">
          {children}
        </div>
      </div>
      {hasControls && (
        <div className="flex items-center gap-2 justify-end mt-4">
          <button
            type="button"
            onClick={() => scrollTrack("previous")}
            aria-label={previousLabel}
            className="w-9 h-9 rounded-full border border-border-subtle bg-surface-raised flex items-center justify-center text-neutral-700 hover:text-brand-950 hover:border-brand-900 transition-colors shadow-xs cursor-pointer"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollTrack("next")}
            aria-label={nextLabel}
            className="w-9 h-9 rounded-full border border-border-subtle bg-surface-raised flex items-center justify-center text-neutral-700 hover:text-brand-950 hover:border-brand-900 transition-colors shadow-xs cursor-pointer"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
