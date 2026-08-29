"use client";

import { ProjectCard } from "@/components/project-card";
import { useResume } from "@/lib/resume-context";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsDumpPage() {
  const { data } = useResume();

  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Projects
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Project Archive</h1>
          <p className="text-sm text-muted-foreground mt-1">
            All projects including experiments and legacy tools.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.projectsDump.map((project: any, id: number) => (
              <ProjectCard
                key={`${project.title}-${id}`}
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
