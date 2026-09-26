import { Suspense } from "react";
import { Metadata } from "next";
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
  }

  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16 bg-neutral-50/60">
      <PageContainer>
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-widest text-accent-700 font-semibold mb-2">
            Katalog Proyek Primer
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950 mb-3">
            Peluncuran Proyek Baru
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed font-light">
            Kawasan residensial, kondominium, dan area komersial terpadu yang dikembangkan oleh mitra pengembang institusional terpercaya.
          </p>
        </div>

        {/* Filters */}
        <Suspense fallback={<div className="h-16 bg-white rounded-xl border border-neutral-200/80 animate-pulse mb-8" />}>
          <ProjectFilterBar />
        </Suspense>

        {/* Results */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-neutral-200/80">
            <h3 className="font-serif text-base font-medium text-brand-950 mb-1">Tidak Ada Proyek yang Sesuai</h3>
            <p className="text-xs text-neutral-500 font-light">
              Maaf, belum ada proyek baru yang sesuai dengan kriteria pencarian Anda.
            </p>
          </div>
        )}
      </PageContainer>
    </main>
  );
}
