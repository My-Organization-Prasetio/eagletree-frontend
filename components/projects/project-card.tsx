import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, Tag } from "lucide-react";
import type { ProjectItem } from "@/types/project";
import { formatCurrency } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-neutral-200/80 overflow-hidden hover:border-neutral-300 shadow-2xs hover:shadow-sm transition-all duration-200">
      {/* Image Gallery */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-50" />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-950 text-white shadow-xs">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 flex-grow">
        <div className="mb-4">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-accent-700 mb-1">
            {project.developer}
          </span>
          <Link href={`/new-projects/${project.slug}`} className="focus:outline-none">
            <h3 className="text-lg font-bold text-brand-950 group-hover:text-accent-700 transition-colors line-clamp-1">
              {project.title}
              <span className="absolute inset-0 z-10" aria-hidden="true" />
            </h3>
          </Link>
          <div className="flex items-center gap-1.5 mt-1.5 text-neutral-500">
            <MapPin size={14} className="shrink-0 text-accent-700" />
            <p className="text-xs font-medium line-clamp-1">
              {project.location.district}, {project.location.city}
            </p>
          </div>
        </div>

        <div className="mt-auto">
          {/* Price */}
          <span className="block text-[10px] text-neutral-500 font-semibold uppercase tracking-wider mb-0.5">
            Mulai Dari
          </span>
          <p className="text-lg font-extrabold text-brand-950">
            {formatCurrency(project.startingPrice.amount, project.startingPrice.currency)}
          </p>

          {/* Unit Types Tags */}
          <div className="mt-3 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
            {project.unitTypesAvailable.map((type) => (
              <span 
                key={type}
                className="inline-flex items-center px-2 py-1 rounded-md bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
