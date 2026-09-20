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
    <div className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Gallery */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-60" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm bg-white text-brand-900">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 sm:p-6 flex-grow">
        <div className="mb-4">
          <div className="flex items-center gap-1.5 text-brand-700 mb-2">
            <Building2 size={14} />
            <span className="text-xs font-medium uppercase tracking-wider">{project.developer}</span>
          </div>
          <Link href={`/new-projects/${project.slug}`} className="focus:outline-none">
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-accent-600 transition-colors line-clamp-1">
              {project.title}
              <span className="absolute inset-0 z-10" aria-hidden="true" />
            </h3>
          </Link>
          <div className="flex items-center gap-1.5 mt-2 text-neutral-500">
            <MapPin size={16} className="shrink-0" />
            <p className="text-sm font-medium line-clamp-1">
              {project.location.district}, {project.location.city}
            </p>
          </div>
        </div>

        <div className="mt-auto">
          {/* Price */}
          <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
            <Tag size={14} className="shrink-0" />
            <span className="text-xs font-medium uppercase tracking-wider">Mulai Dari</span>
          </div>
          <p className="text-xl font-bold text-brand-900">
            {formatCurrency(project.startingPrice.amount, project.startingPrice.currency)}
          </p>

          {/* Unit Types Tags */}
          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
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
