"use client";

import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function ProjectsClient({ projects }: { projects: any[] }) {
  const featured = projects.slice(0, 5);
  const alsoBuilt = projects.slice(5);

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
            Products, developer tools, and systems.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          {/* Promoted Core Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((project: any) => (
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

          {/* Also Built - Compact List */}
          {alsoBuilt.length > 0 && (
            <div className="mt-14 space-y-4">
              <div className="border-b border-border pb-2">
                <h2 className="text-base font-bold tracking-tight">Also built</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Other tools, libraries, and open-source experiments.
                </p>
              </div>
              <div className="divide-y divide-border">
                {alsoBuilt.map((project: any) => (
                  <div
                    key={project.title}
                    className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm"
                  >
                    <div className="min-w-0 pr-3">
                      <span className="font-medium text-foreground text-sm">
                        {project.title}
                      </span>
                      <span className="text-muted-foreground text-xs sm:text-sm ml-2">
                        — {project.description}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto pt-1 sm:pt-0">
                      {project.links?.map((link: any) => (
                        <a
                          key={link.href + link.type}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-0.5 rounded bg-accent/60 hover:bg-accent"
                        >
                          {link.type} <ExternalLink className="size-2.5 opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Repositories on GitHub.{" "}
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
