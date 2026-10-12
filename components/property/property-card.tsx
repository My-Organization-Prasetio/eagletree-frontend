"use client";

import { ArrowRight, Bath, BedDouble, Heart, MapPin, MessageCircle, Phone, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/lib/i18n";
import type { PropertyCardData } from "@/types/property";

type PropertyCardProps = {
  property: PropertyCardData;
  locale: Locale;
  onFavoriteToggle?: (propertyId: string, isFavorite: boolean) => void;
  onInterestedToggle?: (propertyId: string, isInterested: boolean) => void;
};

function formatPrice({ amount, currency, period }: PropertyCardData["price"], locale: Locale, periodLabel: string) {
  const formattedAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

  if (!period) {
    return { formattedAmount, periodText: null };
  }

  return { formattedAmount, periodText: `/ ${periodLabel}` };
}

function formatArea(value: number) {
  return `${new Intl.NumberFormat("id-ID").format(value)} m²`;
}

export function PropertyCard({
  property,
  locale,
  onFavoriteToggle,
  onInterestedToggle,
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite ?? false);
  const [isInterested, setIsInterested] = useState(property.isInterested ?? false);
  const specifications = property.specifications;
  const content = copy[locale].property;
  const rawLocalized = (content.items as Record<string, { title?: string; location?: string; alt?: string }>)[property.id];
  const propertyTitle = rawLocalized?.title ?? property.title;
  const propertyLocation = rawLocalized?.location ?? property.location;
  const propertyAlt = rawLocalized?.alt ?? property.image.alt;
  const propertyHref = property.href || `/properties/${property.slug || property.id}`;

  const statusLabels = {
    "For sale": content.forSale,
    "For rent": content.forRent,
    "New listing": content.newListing,
    Featured: content.featured,
  };
  const typeLabels = {
    House: content.house,
    Apartment: content.apartment,
    Villa: content.villa,
    Land: content.land,
  };

  function handleFavoriteToggle() {
    const nextValue = !isFavorite;
    setIsFavorite(nextValue);
    onFavoriteToggle?.(property.id, nextValue);
  }

  function handleInterestedToggle() {
    const nextValue = !isInterested;
    setIsInterested(nextValue);
    onInterestedToggle?.(property.id, nextValue);
  }

  const agent = property.agent;
  const whatsappHref = agent?.whatsapp
    ? `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(`Halo, saya tertarik dengan properti ${propertyTitle}.`)}&type=phone_number&app_absent=0`
    : undefined;

  const { formattedAmount, periodText } = formatPrice(
    property.price,
    locale,
    property.price.period === "month" ? content.month : content.year
  );

  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-neutral-200/90 hover:border-gold-400/80 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Media Wrap with Zoom Effect */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
        <Link
          className="block w-full h-full focus-visible:ring-2 focus-visible:ring-accent-500"
          href={propertyHref}
          aria-label={`${content.view}: ${propertyTitle}`}
        >
          <Image
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            src={property.image.src}
            alt={propertyAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 400px"
          />
        </Link>

        {/* Status Badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-brand-950 text-white shadow-xs flex items-center gap-1.5">
          {(property.status === "Featured" || property.status === "New listing") && (
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" aria-hidden="true" />
          )}
          <span>{statusLabels[property.status]}</span>
        </span>

        {/* Favorite Button */}
        <button
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-xs cursor-pointer ${
            isFavorite
              ? "bg-white text-red-500"
              : "bg-white/90 text-neutral-600 hover:text-red-500 hover:bg-white"
          }`}
          type="button"
          aria-label={isFavorite ? content.favoriteRemove : content.favoriteAdd}
          aria-pressed={isFavorite}
          onClick={handleFavoriteToggle}
        >
          <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3.5">
        {/* Type & Title */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-accent-700">
            {typeLabels[property.type]}
          </span>
          <h3 className="text-lg font-bold text-brand-950 line-clamp-1 group-hover:text-accent-700 transition-colors mt-0.5">
            <Link href={propertyHref}>{propertyTitle}</Link>
          </h3>
          <p className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium line-clamp-1 mt-1">
            <MapPin size={14} className="text-accent-600 shrink-0" aria-hidden="true" />
            <span>{propertyLocation}</span>
          </p>
        </div>

        {/* Specifications Minimalist Box */}
        {specifications && (
          <dl className="grid grid-cols-3 gap-2 py-2 px-3 rounded-lg bg-neutral-50/80 border border-neutral-200/60 text-xs">
            {specifications.bedrooms !== undefined && (
              <div className="flex flex-col gap-0.5">
                <dt className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium">
                  <BedDouble size={12} className="text-neutral-400 shrink-0" aria-hidden="true" />
                  <span>{content.bedrooms}</span>
                </dt>
                <dd className="font-bold text-brand-950">{specifications.bedrooms} KT</dd>
              </div>
            )}
            {specifications.bathrooms !== undefined && (
              <div className="flex flex-col gap-0.5">
                <dt className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium">
                  <Bath size={12} className="text-neutral-400 shrink-0" aria-hidden="true" />
                  <span>{content.bathrooms}</span>
                </dt>
                <dd className="font-bold text-brand-950">{specifications.bathrooms} KM</dd>
              </div>
            )}
            {specifications.buildingAreaSqm !== undefined && (
              <div className="flex flex-col gap-0.5">
                <dt className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium">
                  <Ruler size={12} className="text-neutral-400 shrink-0" aria-hidden="true" />
                  <span>{content.building}</span>
                </dt>
                <dd className="font-bold text-brand-950 truncate">{formatArea(specifications.buildingAreaSqm)}</dd>
              </div>
            )}
          </dl>
        )}

        {/* Price & Action Row */}
        <div className="flex items-end justify-between gap-2 pt-1 mt-auto">
          <div>
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest block">
              {locale === "en" ? "Price" : "Harga"}
            </span>
            <div className="flex items-baseline">
              <span className="text-xl font-extrabold text-gold-600 tracking-tight">
                {formattedAmount}
              </span>
              {periodText && (
                <span className="text-xs text-neutral-500 font-normal ml-1">{periodText}</span>
              )}
            </div>
          </div>

          <Link
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-950 hover:text-gold-600 transition-colors py-1 group/link"
            href={propertyHref}
          >
            <span>{content.view}</span>
            <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Agent Row */}
        {agent && (
          <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-border-subtle/80">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="w-8 h-8 rounded-full bg-brand-100 text-brand-900 font-bold flex items-center justify-center text-xs relative overflow-hidden shrink-0 border border-brand-200"
                aria-hidden="true"
              >
                {agent.photo ? <Image src={agent.photo} alt="" fill sizes="32px" /> : agent.initials}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-brand-950 truncate">{agent.name}</p>
                <p className="text-[10px] text-neutral-500 truncate">{agent.office}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.contactWhatsapp}
                  className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 flex items-center justify-center transition-colors border border-emerald-200/80"
                  title="WhatsApp Agen"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                </a>
              )}
              {agent.phone && (
                <a
                  href={`tel:${agent.phone}`}
                  aria-label={content.contactPhone}
                  className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 hover:bg-neutral-200 flex items-center justify-center transition-colors border border-border-subtle"
                  title="Telepon Agen"
                >
                  <Phone size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
