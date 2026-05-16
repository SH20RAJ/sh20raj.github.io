"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsClient({ projects }: { projects: any[] }) {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-32 py-12 px-6">
      <div className="mx-auto w-full max-w-7xl px-6 space-y-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors group">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg md:text-2xl max-w-[800px] leading-relaxed">
            A dump of everything I&apos;ve built — from small utilities to full-scale SaaS products.
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <Link href="https://github.com/sh20raj-dump" target="_blank" className="inline-flex h-12 items-center justify-center rounded-full border-2 bg-background px-8 text-sm font-bold shadow-sm transition-all hover:bg-accent gap-3">
            <span className="size-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            GitHub Dump
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl px-6 mx-auto w-full">
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

      <div className="mx-auto max-w-7xl px-8 w-full text-center py-32 border-t mt-32">
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
