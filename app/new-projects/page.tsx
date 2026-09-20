import { Suspense } from "react";
import { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectFilterBar } from "@/components/projects/project-filter-bar";
import { ProjectCard } from "@/components/projects/project-card";
import { mockProjects } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Proyek Baru | Eagletree Property",
  description: "Temukan katalog proyek perumahan dan apartemen baru dari developer ternama di Indonesia.",
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function NewProjectsPage({ searchParams }: Props) {
  const params = await searchParams;
  const city = typeof params.city === "string" ? params.city : "all";
  const sort = typeof params.sort === "string" ? params.sort : "newest";

  // Filter projects
  let filteredProjects = [...mockProjects];

  if (city !== "all") {
    filteredProjects = filteredProjects.filter((p) => 
      p.location.city.toLowerCase().includes(city.toLowerCase()) ||
      p.location.district.toLowerCase().includes(city.toLowerCase())
    );
  }

  // Sort projects
  if (sort === "price-asc") {
    filteredProjects.sort((a, b) => a.startingPrice.amount - b.startingPrice.amount);
  } else if (sort === "price-desc") {
    filteredProjects.sort((a, b) => b.startingPrice.amount - a.startingPrice.amount);
  } else {
    // newest / default: we can just leave it as is or sort by something if we had a date.
  }

  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16 bg-neutral-50">
      <PageContainer>
        {/* Header Section */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center justify-center sm:justify-start gap-2 px-3 py-1.5 rounded-full bg-brand-100/50 text-brand-800 text-sm font-medium mb-4">
            <Building2 size={16} />
            <span>Katalog Proyek Terpilih</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-950 mb-4">
            Proyek Properti Baru
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Jelajahi perumahan, apartemen, dan kawasan komersial terbaru dari developer terpercaya di Indonesia.
          </p>
        </div>

        {/* Filters */}
        <Suspense fallback={<div className="h-20 bg-white rounded-xl border border-neutral-200 animate-pulse mb-8" />}>
          <ProjectFilterBar />
        </Suspense>

        {/* Results */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
              <Building2 size={32} className="text-neutral-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Proyek Tidak Ditemukan</h3>
            <p className="text-neutral-500">
              Maaf, belum ada proyek baru yang sesuai dengan kriteria pencarian Anda.
            </p>
          </div>
        )}
      </PageContainer>
    </main>
  );
}
