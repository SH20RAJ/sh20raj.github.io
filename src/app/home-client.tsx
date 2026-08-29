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
} from "lucide-react";

const proofPosts = [
  {
    title: "Bitotsav 2026",
    text: "Built the complete tech ecosystem for ~5,000 participants — QR entry, admin panel, points system, AI features.",
    tech: ["Next.js", "PostgreSQL", "Redis", "OpenAI"],
    href: "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn",
  },
  {
    title: "Kishan AI — AICTE Top 500",
    text: "AI assistant for farmers — crop diagnosis, weather, mandi prices. AICTE Productization Fellowship 2025 shortlisted.",
    tech: ["AI", "Telegram", "Voice", "Computer Vision"],
    href: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
  },
  {
    title: "30tools — 4.3M+ Requests",
    text: "140+ free browser tools. 213K visits, 45K active users, 55K+ Bing clicks — grown through solo SEO.",
    tech: ["Next.js", "TypeScript", "SEO"],
    href: "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_",
  },
  {
    title: "Sopplayer",
    text: "Open-source HTML5 video player. 1.18M requests, 38GB bandwidth on jsDelivr.",
    tech: ["JavaScript", "HTML5", "Open-source"],
    href: "https://www.linkedin.com/posts/sh20raj_sopplayer-html5videoplayer-opensourcelove-activity-7279897143249715201-4gO6",
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
                Software Engineer · CS @ BIT Mesra
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                500+ public repos, 300+ merged PRs — including one into Google&apos;s gemini-cli. I build AI agents, dev tools, and MCP servers.
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

      {/* Proof */}
      <section id="proof" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Shipped work</h2>
          <div className="space-y-4">
            {proofPosts.map((post) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {post.text}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {post.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section id="open-source" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <GitHubStats />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold tracking-tight">Projects</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.projects.slice(0, 6).map((project: any) => (
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

      {/* Skills */}
      <section id="skills" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Skills</h2>
          <div className="space-y-4">
            {[
              { category: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { category: "Backend", skills: ["Node.js", "Express", "API Design", "Auth", "Database Modeling"] },
              { category: "AI", skills: ["OpenAI", "Claude", "Gemini", "RAG", "MCP Tools", "AI SDK"] },
              { category: "Infrastructure", skills: ["Cloudflare", "Vercel", "Docker", "GitHub Actions", "Edge Functions"] },
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
        </div>
      </section>

      {/* Achievements */}
      <section id="hackathons" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Achievements</h2>
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
                    <p className="text-xs text-muted-foreground mt-0.5">{project.description}</p>
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
            CS student at BIT Mesra. Most of what I build ends up open source or live in production. Currently working on Solus and contributing to projects like Google&apos;s gemini-cli.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 text-center">
          <h2 className="text-lg font-bold tracking-tight">Get in touch</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Open to internships, GSoC, or interesting problems.{" "}
            <Link href="/hire" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">
              Hire me
            </Link>
          </p>
          <div className="flex justify-center gap-4 mt-4">
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
