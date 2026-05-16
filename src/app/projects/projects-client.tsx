"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsClient({ projects }: { projects: any[] }) {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 py-12 px-6">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            My Projects
          </h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A dump of everything I&apos;ve built — from small utilities to full-scale SaaS products.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="https://github.com/sh20raj-dump" target="_blank" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground gap-2">
            <span className="size-2 rounded-full bg-green-500 animate-pulse" />
            GitHub Dump
            <ExternalLink className="size-3" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full">
        {projects.map((project: any, id: number) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>

      <div className="mx-auto max-w-2xl w-full text-center py-20 border-t mt-20">
        <h2 className="text-2xl font-bold">Want to see more?</h2>
        <p className="text-muted-foreground mt-2">I have over 500+ repositories on GitHub. Check out my main profile and dumps.</p>
        <div className="flex justify-center gap-4 mt-8">
          <Link href="https://github.com/SH20RAJ" target="_blank" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 active:scale-95">Main GitHub</Link>
          <Link href="https://github.com/sh20raj-dump" target="_blank" className="inline-flex h-12 items-center justify-center rounded-full border bg-background px-8 text-sm font-semibold shadow-sm hover:bg-accent transition-all hover:scale-105 active:scale-95">GitHub Dump</Link>
        </div>
      </div>
    </main>
  );
}
