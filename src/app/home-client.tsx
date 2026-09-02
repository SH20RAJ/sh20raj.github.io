"use client";

import { ProjectCard } from "@/components/project-card";
import { GitHubStats } from "@/components/github-stats";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRightIcon,
  FileDown,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
} from "lucide-react";

const proofPosts = [
  {
    title: "30tools — Scaled to 4.3M+ Requests",
    text: "High-performance developer utility platform engineered for sub-millisecond client-side execution. Scaled to 4.3M+ requests, 213K+ monthly active users, and 500K+ search impressions via programmatic SEO architecture.",
    tech: ["Next.js", "TypeScript", "Web APIs", "Programmatic SEO"],
    href: "/projects/30tools",
  },
  {
    title: "CampusLoop — Verified College Social Network",
    text: "Building the verified student-only campus network for 1,350+ Indian colleges. Gatekept by institutional college emails to enable anonymous campus feeds, real-time canteen polls, student marketplace, and encrypted batch time capsules.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Cloudflare Workers", "PWA"],
    href: "https://campusloop.space/",
  },
  {
    title: "Merged fix into Google's gemini-cli",
    text: "Traced and fixed a cancellation bug in a 107k-star TypeScript codebase (#20405): the active turn's AbortSignal wasn't reaching chat compression, so Ctrl+C left in-flight LLM calls running on a detached controller. Threaded the signal through LocalAgentExecutor and GeminiClient into the compression service. Reviewed and merged by a Google maintainer.",
    tech: ["TypeScript", "Node.js", "Gemini API", "Open Source"],
    href: "https://github.com/google-gemini/gemini-cli/pull/20778",
  },
  {
    title: "Bitotsav 2026 — Tech Lead & Cloud Infrastructure",
    text: "Architected high-concurrency event infrastructure serving ~5,000 live participants. Built offline-resilient QR access verification, low-latency Redis state caches, real-time leaderboard telemetry, and AI participant services.",
    tech: ["Next.js", "PostgreSQL", "Redis", "OpenAI", "Cloudflare"],
    href: "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn",
  },
  {
    title: "Kishan AI — AICTE APF Round 1 Shortlist (Top 500 across India)",
    text: "Selected in Round 1 Top 500 nationally across India. Engineered multimodal AI for rural agriculture: offline-tolerant crop pathology vision models, regional voice synthesis, and real-time mandi pricing analytics.",
    tech: ["AI / Computer Vision", "Voice Synthesis", "Telegram Bot API", "Python"],
    href: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
  },
  {
    title: "IndexFast & MCP Pure — Agent Infrastructure",
    text: "Engineered Model Context Protocol (MCP) servers on Cloudflare Workers and a multi-engine indexing pipeline for Google, Bing, and IndexNow protocols with sub-second propagation.",
    tech: ["TypeScript", "Cloudflare Workers", "MCP Protocol", "API Design"],
    href: "https://indexfast.co",
  },
];

export function HomeClient({ DATA }: { DATA: any }) {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      {/* Hero */}
      <section id="hero" className="pt-10 pb-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="flex items-start gap-5">
            <Avatar className="size-20 border border-border shrink-0">
              <AvatarImage alt="Shaswat Raj" src={DATA.avatarUrl} className="object-cover" />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold tracking-tight">Shaswat Raj</h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Software Engineer · CS @ BIT Mesra (2022–2026) {/* TODO(shaswat): confirm — graduated, or final year? */} · Open-Source Contributor
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                79 PRs merged into repos I don&apos;t own — including a merged fix into <strong className="text-foreground font-semibold">Google&apos;s gemini-cli</strong>. Specializing in high-performance web systems, distributed tools, Model Context Protocol (MCP) infrastructure, and scalable AI agent architectures.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <FileDown className="size-4" /> Resume
                </a>
                <Link
                  href="https://github.com/SH20RAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Github className="size-4" /> GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/sh20raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </Link>
                <a
                  href="mailto:sh20raj@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Mail className="size-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Key Engineering Highlights */}
      <section id="proof" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Engineering Highlights</h2>
          <div className="space-y-4">
            {proofPosts.map((post) => {
              const isInternal = post.href.startsWith("/");
              const CardComponent = isInternal ? Link : "a";
              const cardProps = isInternal
                ? { href: post.href }
                : { href: post.href, target: "_blank", rel: "noopener noreferrer" };

              return (
                <CardComponent
                  key={post.title}
                  {...cardProps}
                  className="group block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    {isInternal ? (
                      <ArrowRightIcon className="size-3.5 text-muted-foreground shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    ) : (
                      <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {post.text}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section id="open-source" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <GitHubStats />
        </div>
      </section>

      {/* Performance & Quality */}
      <section id="performance" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight">Site Performance</h2>
            <a
              href="/lighthouse.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="size-3.5" /> Lighthouse Report
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Static export deployed to GitHub Pages. Zero tracking, minimal client runtime, and pure static asset delivery.
          </p>
          <div className="mt-3 p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
            <code>TODO(shaswat): generate and commit a real Lighthouse run to public/lighthouse.html before publishing benchmark scores</code>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold tracking-tight">Featured Projects</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.projects.slice(0, 4).map((project: any) => (
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
        </div>
      </section>

      {/* Technical Depth / Skills */}
      <section id="skills" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Technical Depth</h2>
          <div className="space-y-4">
            {[
              {
                category: "Systems & Languages",
                skills: ["TypeScript", "JavaScript", "Python", "C++", "Go", "SQL", "Bash / Shell"],
              },
              {
                category: "Backend & Distributed Systems",
                skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Prisma", "Database Optimization", "WebSockets", "REST / GraphQL"],
              },
              {
                category: "AI & Agentic Architectures",
                skills: ["Model Context Protocol (MCP)", "Gemini API", "Claude API", "OpenAI", "RAG Pipelines", "Vector Search", "Multimodal Agents"],
              },
              {
                category: "Cloud, Edge & Infrastructure",
                skills: ["Cloudflare Workers / Edge", "Docker", "Vercel", "AWS", "GitHub Actions CI/CD", "Linux Server Admin"],
              },
              {
                category: "Frontend & Performance",
                skills: ["Next.js (App Router)", "React", "Tailwind CSS", "State Machines", "Web Vitals & Performance", "Programmatic SEO"],
              },
            ].map((group) => (
              <div key={group.category}>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded px-2 py-0.5 text-xs font-normal border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fundamentals & Contest Track Record (Commented out until populated) */}
          {/*
          <div className="mt-8 pt-6 border-t border-border space-y-3">
            <h3 className="text-sm font-semibold tracking-tight">Core CS &amp; Competitive Track Record</h3>
            {/* TODO(shaswat): fill or delete — do not ship this section empty *\/}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">LeetCode / Contest</span>
                <span className="font-mono font-medium">TODO(shaswat): rating / solved count</span>
              </div>
              <div className="p-2.5 rounded border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Codeforces / CodeChef</span>
                <span className="font-mono font-medium">TODO(shaswat): handle &amp; rating</span>
              </div>
              <div className="p-2.5 rounded border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Academics</span>
                <span className="font-mono font-medium">TODO(shaswat): CGPA / Department rank</span>
              </div>
              <div className="p-2.5 rounded border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">ICPC / Contest Results</span>
                <span className="font-mono font-medium">TODO(shaswat): ICPC / Hackerearth ranks</span>
              </div>
              <div className="p-2.5 rounded border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Programs / Fellowships</span>
                <span className="font-mono font-medium">TODO(shaswat): GSoC / fellowship names</span>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Experience (Commented out until filled) */}
      {/*
      <section id="experience" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Experience</h2>
          {/* TODO(shaswat): Fill internship experience details (company, role, dates, ownership, and shipped impact) *\/}
          <div className="space-y-4">
            <div className="border-l-2 border-border pl-4 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">TODO(shaswat): Company Name — Software Engineer Intern</h3>
                <span className="text-xs text-muted-foreground">TODO(shaswat): Dates (e.g. May 2025 – Aug 2025)</span>
              </div>
              <p className="text-xs text-muted-foreground">TODO(shaswat): Location or Remote</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 space-y-1">
                <li>TODO(shaswat): Bullet 1 on what you owned end-to-end</li>
                <li>TODO(shaswat): Bullet 2 on what shipped and measurable latency/throughput/user impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Fellowships & Achievements */}
      <section id="hackathons" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Honors &amp; Fellowships</h2>
          <div className="space-y-3">
            {DATA.hackathons.map((project: any) => (
              <div
                key={project.title + project.dates}
                className="flex items-start gap-3 py-2"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="size-8 rounded object-contain shrink-0 mt-0.5"
                  />
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="text-xs text-muted-foreground">{project.dates}</p>
                  {project.description && (
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-3">About</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I am a software engineer focused on building robust, scalable systems and developer tooling. With 79 external PRs merged into open-source repositories I don&apos;t own, I take pride in end-to-end craftsmanship — from low-level API design and fault-tolerant cloud backends to razor-sharp, accessible frontends. Currently building <strong className="text-foreground font-semibold">CampusLoop</strong> (the verified campus network for 1,350+ Indian colleges), architecting MCP server infrastructure, and contributing to open source.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 text-center space-y-3">
          <h2 className="text-lg font-bold tracking-tight">Get in touch</h2>
          <p className="text-sm text-muted-foreground">
            Open to Software Engineering &amp; Founding Engineer roles, distributed systems, and AI infrastructure.{" "}
            <Link href="/hire" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">
              Contact me
            </Link>
          </p>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/60 border border-border text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Available for Full-time Roles &amp; High-Impact Sprints · Target start: Immediate / <code>TODO(shaswat): specify exact start date &amp; location preference</code>
            </span>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <a
              href="mailto:sh20raj@gmail.com"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              sh20raj@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
