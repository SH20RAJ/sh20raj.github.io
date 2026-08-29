"use client";

import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ProjectsClient({ projects }: { projects: any[] }) {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Products, tools, and open-source work.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project: any) => (
              <ProjectCard
                key={project.title}
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
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              500+ repositories on GitHub.{" "}
              <Link
                href="https://github.com/SH20RAJ"
                target="_blank"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
              >
                View profile
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
