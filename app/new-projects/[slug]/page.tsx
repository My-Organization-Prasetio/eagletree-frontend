import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

import { PageContainer } from "@/components/layout/page-container";
import { ProjectUnitTable } from "@/components/projects/project-unit-table";
import { ProjectInquiryCard } from "@/components/projects/project-inquiry-card";
import { mockProjects, getProjectBySlug } from "@/lib/mock-data";

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js static generation
export async function generateStaticParams() {
  return mockProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const project = getProjectBySlug(p.slug);
  
  if (!project) return { title: "Proyek Tidak Ditemukan" };

  return {
    title: `${project.title} - ${project.developer} | Eagletree Property`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const p = await params;
  const project = getProjectBySlug(p.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col pt-24 pb-20 bg-neutral-50">
      <PageContainer>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Beranda
          </Link>
          <ChevronRight size={14} />
          <Link href="/new-projects" className="hover:text-brand-700 transition-colors">
            Proyek Baru
          </Link>
          <ChevronRight size={14} />
          <span className="text-neutral-900 font-medium" aria-current="page">
            {project.title}
          </span>
        </nav>

        {/* Hero Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-12 h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
          <div className="relative md:col-span-2 h-full">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm bg-white text-brand-900">
                {project.status}
              </span>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2 sm:gap-4 h-full">
            {project.gallery.slice(0, 2).map((img, idx) => (
              <div key={idx} className="relative flex-1 bg-neutral-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Main Content (Left 2/3) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Header Info */}
            <div>
              <div className="flex items-center gap-2 text-brand-700 mb-3">
                <Building2 size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">{project.developer}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 text-neutral-600 mb-6">
                <MapPin size={20} className="shrink-0" />
                <p className="text-base sm:text-lg">{project.location.fullAddress}</p>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-neutral-200">
              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Total Unit</span>
                <span className="block text-lg font-bold text-neutral-900">{project.specifications.totalUnits || "-"}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Luas Lahan</span>
                <span className="block text-lg font-bold text-neutral-900">{project.specifications.landAreaHectares ? `${project.specifications.landAreaHectares} Ha` : "-"}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Serah Terima</span>
                <span className="block text-lg font-bold text-neutral-900">{project.specifications.handoverYear || "-"}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Legalitas</span>
                <span className="block text-lg font-bold text-neutral-900">{project.specifications.certificate || "-"}</span>
              </div>
            </div>

            {/* Facilities */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Fasilitas Master Plan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{fac}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Unit Types Table */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Tipe Unit Tersedia</h2>
              <ProjectUnitTable 
                unitTypes={project.unitTypesAvailable} 
                startingPrice={project.startingPrice} 
              />
            </section>
            
          </div>

          {/* Sidebar / Sticky Action (Right 1/3) */}
          <div className="lg:col-span-1">
            <ProjectInquiryCard project={project} />
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
