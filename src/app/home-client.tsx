"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { GitHubStats } from "@/components/github-stats";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRightIcon,
  FileDown,
  ExternalLink,
  RocketIcon,
  Github,
  Linkedin,
  Award,
  Youtube,
  Mail,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const proofPosts = [
  {
    title: "Bitotsav 2026",
    label: "Real-world scale + leadership under pressure",
    text: "Built and managed the complete tech ecosystem for Bitotsav '26, serving ~5,000 participants. Built the fest website, QR-based entry/scanning system, team creation/joining workflows, points system, admin panel, internal tools, AI features, announcements/community messaging, and crisis-time technical operations.",
    tech: ["Next.js", "PostgreSQL", "Redis", "OpenAI", "QR validation", "Admin tools"],
    href: "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn",
  },
  {
    title: "Kishan AI — AICTE APF 2025 Top 500",
    label: "National innovation recognition",
    text: "Kishan AI was shortlisted in Round 1 of AICTE Productization Fellowship 2025 among the Top 500 teams across India. Built an AI assistant for farmers with crop disease diagnosis, weather insights, mandi price analytics, government scheme recommendations, regional voice chatbot, and Telegram/Web/App access.",
    tech: ["AI", "Telegram bot", "Voice chatbot", "Image + text diagnosis"],
    href: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
  },
  {
    title: "30tools — Solo SEO/Product Growth",
    label: "SEO + product growth proof",
    text: "Built and grew 30tools with solo SEO and product execution. Reported 4.3M+ requests in 30 days, 213,790 visits, 329,860 page views, 2,134 registered users, 55,800+ Bing clicks, 500,000+ impressions, and 45,000 active users.",
    tech: ["Next.js", "TypeScript", "SEO", "Browser APIs", "Analytics"],
    href: "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_",
  },
  {
    title: "Bitotsav 2025",
    label: "Event product delivery",
    text: "Contributed to Bitotsav 2025 by developing frontend, improving website SEO, and creating a QR-based management system for smooth scanning and security.",
    tech: ["Frontend", "SEO", "QR management", "Security"],
    href: "https://www.linkedin.com/posts/sh20raj_bitotsav2025-bitmesra-webdevelopment-activity-7313430509747888128-vHg3",
  },
  {
    title: "BitSyll",
    label: "Student utility + open source",
    text: "Built BitSyll, an academic resource platform for college students with syllabus, notes, PYQs, academic calendar, routines, transport schedule, club contacts, recommended books, YouTube channels, and planned AI chatbot features.",
    tech: ["Next.js 15", "ShadCN", "Framer Motion", "Cloudflare"],
    href: "https://www.linkedin.com/posts/sh20raj_engineerlife-bitsyll-opensource-activity-7278949308203171840-JyF_",
  },
  {
    title: "Sopplayer",
    label: "Open-source usage proof",
    text: "Built Sopplayer, a stylish HTML5 video player. Reported 1,183,451 requests, 38GB bandwidth usage, and jsDelivr popularity ranking.",
    tech: ["JavaScript", "HTML5 Video", "jsDelivr", "Open-source"],
    href: "https://www.linkedin.com/posts/sh20raj_sopplayer-html5videoplayer-opensourcelove-activity-7279897143249715201-4gO6",
  },
  {
    title: "Website Traffic Spike",
    label: "Real usage",
    text: "Shared traffic spikes across personal projects, showing that my shipped products are used globally and not just portfolio demos.",
    tech: ["Personal projects", "Global traffic"],
    href: "https://www.linkedin.com/posts/sh20raj_webdevelopment-trafficspike-proudmoment-activity-7278792173464997888-hln3",
  },
  {
    title: "SketchFlow",
    label: "SaaS product execution",
    text: "Built SketchFlow, a collaborative whiteboard SaaS with markdown editor, real-time collaboration, templates, sharing, AI-powered design ideas, and product launch links.",
    tech: ["SaaS", "Real-time UI", "Collaboration", "Product design"],
    href: "https://www.linkedin.com/posts/sh20raj_collaborativewhiteboard-innovation-teamcollaboration-activity-7297327326223122433-6lYx",
  },
];

const caseStudies = [
  {
    title: "Bitotsav 2026",
    problem: "Bitotsav 2026 needed registration, QR-based entry, team formation, and live admin tooling for ~5,000 participants, much of it in zones with unreliable connectivity.",
    built: "A Next.js/PostgreSQL/Redis stack — QR entry/validation designed to work despite patchy internet, a real-time admin panel, a points/leaderboard system, and OpenAI-powered participant features — plus running technical operations live during the event.",
    constraint: "Low-connectivity scanning, last-minute scope changes, staying stable under real crowd load rather than demo conditions.",
    result: "Held up for all ~5,000 participants with no major incident.",
    cta: "View LinkedIn Proof",
    href: "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn",
    stack: ["Next.js", "PostgreSQL", "Redis", "OpenAI", "QR"],
  },
  {
    title: "30tools",
    problem: "Users need fast no-login browser tools without installing anything.",
    built: "A growing ecosystem of 140+ free browser/developer/creator tools with SEO-focused pages.",
    constraint: "The service needed to stay fast and reliable as traffic climbed — millions of requests, hundreds of thousands of visits/page views, thousands of users, and strong Bing performance.",
    result: "Reported 4.3M+ requests in 30 days, 213,790 visits, 329,860 page views, 2,134 registered users, 55,800+ Bing clicks, 500,000+ impressions, and 45,000 active users.",
    cta: "View Growth Proof",
    href: "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_",
    stack: ["Next.js", "TypeScript", "SEO", "Browser APIs"],
  },
  {
    title: "Kishan AI",
    problem: "Farmers need accessible AI help without installing complex apps.",
    built: "A Telegram/Web/App AI assistant for crop disease diagnosis, weather, mandi prices, schemes, and regional voice — built to work reliably in low-bandwidth rural conditions.",
    constraint: "Low-bandwidth access, regional language UX, unreliable mobile data in rural areas, and the need for zero-app-friction onboarding.",
    result: "AICTE Productization Fellowship 2025 Round 1 Top 500 shortlisted.",
    cta: "View APF Proof",
    href: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
    stack: ["AI", "Telegram Bot", "Voice", "Computer Vision"],
  },
  {
    title: "IndexFast / Debo / MCP Pure",
    problem: "Founders and indie builders need faster indexing, AI memory, and MCP infrastructure that fits inside their existing workflows instead of adding another dashboard.",
    built: "IndexFast — MCP-native indexing for Google/Bing/IndexNow. Debo — AI memory engine over notes, links, audio. MCP Pure — open-source MCP servers on Cloudflare Workers.",
    constraint: "Each product had to integrate cleanly with existing developer and creator workflows without requiring heavy onboarding or separate infrastructure.",
    result: "Three live AI/dev products shipped solo, used in real workflows.",
    cta: "View Projects",
    href: "/projects",
    stack: ["Next.js", "TypeScript", "MCP", "AI SDK", "Cloudflare"],
  },
];

export function HomeClient({ DATA }: { DATA: any }) {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20 pb-16">
      {/* Hero */}
      <section id="hero" className="pt-12">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-7">
          <div className="gap-10 flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="flex-col flex flex-1 space-y-5 text-center md:text-left">
              <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[var(--duo-feather)]">
                  <span className="relative flex size-1.5">
                    <span className="relative inline-flex size-1.5 rounded-full bg-[var(--duo-feather)]" />
                  </span>
                  CS @ BIT Mesra · Open-source contributor
                </span>
              </BlurFade>
              <div className="space-y-2">
                <h1>
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-extrabold tracking-tighter sm:text-4xl xl:text-5xl"
                    yOffset={8}
                    text="Shaswat Raj — Software Engineer & Open-Source Builder"
                  />
                </h1>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[540px] text-sm md:text-base text-muted-foreground leading-relaxed mx-auto md:mx-0">
                  CS student at BIT Mesra with 500+ public repos and 300+ merged pull requests — including one into Google's own gemini-cli. I like building things end-to-end: AI agents, dev tools, MCP servers, and the occasional national fellowship shortlist.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-[var(--duo-feather)] transition-colors self-center"
                  >
                    <FileDown className="h-3.5 w-3.5" /> Resume
                  </a>
                  <Link
                    href="https://github.com/SH20RAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--duo-swan)] bg-background px-4 text-xs font-semibold uppercase tracking-wider text-[var(--duo-eel)] transition-all hover:bg-accent active:scale-[0.98]"
                  >
                    <Github className="size-3.5 mr-2" />
                    GitHub
                  </Link>
                  <Link
                    href="#projects"
                    className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--duo-swan)] bg-background px-4 text-xs font-semibold uppercase tracking-wider text-[var(--duo-eel)] transition-all hover:bg-accent active:scale-[0.98]"
                  >
                    View projects
                  </Link>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 3.2}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ventures</span>
                    <a
                      href="https://app.notion.com/p/The-Venture-Vault-393cd0ed0c25801eb0daf8cbf1862c94"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[var(--duo-eel)] hover:text-[var(--duo-feather)] transition-colors"
                    >
                      The Venture Vault <ExternalLink className="size-3 inline ml-0.5" />
                    </a>
                    <span className="text-[var(--duo-swan)]" aria-hidden="true">·</span>
                    <a
                      href="https://stack-shade.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[var(--duo-eel)] hover:text-[var(--duo-feather)] transition-colors"
                    >
                      StackShade <ExternalLink className="size-3 inline ml-0.5" />
                    </a>
                  </div>
                </BlurFade>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative">
                <Avatar className="size-32 md:size-44 border-4 border-background shadow-xl">
                  <AvatarImage alt="Shaswat Raj" src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback className="text-3xl">{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>

          {/* Stack strip */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-4 border-t border-[var(--duo-swan)]/60 text-[11px] text-muted-foreground/80 font-medium uppercase tracking-widest">
              <span className="text-[var(--duo-eel)] font-bold">Stack</span>
              {["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Node.js", "Cloudflare", "Vercel", "OpenAI", "Claude", "Gemini", "RAG", "MCP"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Proof from real shipped work */}
      <section id="proof" className="mx-auto w-full max-w-5xl px-6 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Proof, not promises
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              Real systems, used by real people — linked so you can check for yourself.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proofPosts.map((post, id) => (
            <BlurFade key={post.title} delay={BLUR_FADE_DELAY * 6 + id * 0.04}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="font-extrabold text-base group-hover:text-[var(--duo-feather)] transition-colors">
                      {post.title}
                    </h3>
                    <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest text-[var(--duo-macaw)]">
                      {post.label}
                    </span>
                  </div>
                  <ExternalLink className="size-4 text-muted-foreground group-hover:text-[var(--duo-feather)] transition-colors shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {post.text}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[var(--duo-feather)]">
                  View on LinkedIn <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Open source at scale — live GitHub stats */}
      <section id="open-source" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <GitHubStats />
        </BlurFade>
      </section>

      {/* Featured Case Studies */}
      <section id="case-studies" className="mx-auto w-full max-w-5xl px-6 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Case studies
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((cs, id) => (
            <BlurFade key={cs.title} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-6 shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg transition-all h-full flex flex-col">
                <h3 className="text-xl font-extrabold tracking-tight mb-4">{cs.title}</h3>
                <div className="space-y-3 text-sm flex-1">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--duo-cardinal)] mb-1">Problem</p>
                    <p className="text-muted-foreground leading-relaxed text-xs">{cs.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--duo-feather)] mb-1">What I built</p>
                    <p className="text-muted-foreground leading-relaxed text-xs">{cs.built}</p>
                  </div>
                  {cs.constraint && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--duo-fox)] mb-1">Hard constraint</p>
                      <p className="text-muted-foreground leading-relaxed text-xs">{cs.constraint}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--duo-macaw)] mb-1">Result</p>
                    <p className="text-muted-foreground leading-relaxed text-xs">{cs.result}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cs.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={cs.href}
                  target={cs.href.startsWith("http") ? "_blank" : undefined}
                  rel={cs.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center justify-center gap-2 h-10 rounded-full bg-[var(--duo-eel)] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none w-fit"
                >
                  {cs.cta} <ArrowRightIcon className="size-3.5" />
                </Link>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Social proof strip — links to public endorsements (no fake quotes) */}
      <section id="social-proof" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-2xl border-2 border-[var(--duo-swan)] bg-card p-5 md:p-6 space-y-4">
            <div>
              <h3 className="text-base md:text-lg font-extrabold tracking-tight">
                Verify the rest yourself
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-xl">
                Endorsements, repos, and launches on independent platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              <a
                href="https://www.linkedin.com/in/sh20raj/details/recommendations/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-[var(--duo-swan)] bg-background p-3 hover:border-[var(--duo-feather)] transition-colors"
              >
                <Linkedin className="size-4 text-[var(--duo-feather)] shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">LinkedIn</p>
                  <p className="text-[10px] text-muted-foreground">Recommendations</p>
                </div>
              </a>
              <a
                href="https://github.com/SH20RAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-[var(--duo-swan)] bg-background p-3 hover:border-[var(--duo-feather)] transition-colors"
              >
                <Github className="size-4 text-[var(--duo-eel)] dark:text-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">GitHub</p>
                  <p className="text-[10px] text-muted-foreground">Code & packages</p>
                </div>
              </a>
              <a
                href="https://codeforces.com/profile/sh20raj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-[var(--duo-swan)] bg-background p-3 hover:border-[var(--duo-feather)] transition-colors"
              >
                <Github className="size-4 text-[var(--duo-eel)] dark:text-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">Codeforces</p>
                  <p className="text-[10px] text-muted-foreground">Competitive programming</p>
                </div>
              </a>
              <a
                href="https://peerlist.io/sh20raj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-[var(--duo-swan)] bg-background p-3 hover:border-[var(--duo-feather)] transition-colors"
              >
                <Award className="size-4 text-[var(--duo-macaw)] shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">Peerlist</p>
                  <p className="text-[10px] text-muted-foreground">Verified profile</p>
                </div>
              </a>
              <a
                href="https://www.producthunt.com/@sh20raj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-[var(--duo-swan)] bg-background p-3 hover:border-[var(--duo-feather)] transition-colors"
              >
                <RocketIcon className="size-4 text-[var(--duo-fox)] shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">Product Hunt</p>
                  <p className="text-[10px] text-muted-foreground">Maker profile</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@StackShade"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-[var(--duo-swan)] bg-background p-3 hover:border-[var(--duo-feather)] transition-colors"
              >
                <Youtube className="size-4 text-[var(--duo-cardinal)] shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">YouTube</p>
                  <p className="text-[10px] text-muted-foreground">Build logs &amp; demos</p>
                </div>
              </a>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mx-auto w-full max-w-5xl px-6 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Selected projects
            </h2>
            <Link href="/projects" className="group inline-flex items-center gap-1 text-sm font-bold text-[var(--duo-feather)] hover:underline">
              View all <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA.projects.slice(0, 8).map((project: any, id: number) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ProjectCard
                href={project.href}
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
      </section>

      {/* Open source at scale — live GitHub stats */}
      <section id="open-source" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <GitHubStats />
        </BlurFade>
      </section>

      {/* Technical Depth */}
      <section id="skills" className="mx-auto w-full max-w-5xl px-6 space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <h2 className="text-2xl font-extrabold tracking-tight">Technical Depth</h2>
        </BlurFade>
        <div className="space-y-4">
          {[
            { category: "Frontend", skills: ["UI/UX Design", "Landing Pages", "Animations", "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Responsive UI", "Dashboards", "SEO", "Performance"] },
            { category: "Backend", skills: ["Node.js", "Express", "API Design", "Auth", "Cron Jobs", "Webhooks", "Database Modeling", "Automation"] },
            { category: "AI & Automation", skills: ["OpenAI", "Claude", "Gemini APIs", "AI SDK", "RAG", "Embeddings", "Transcription", "MCP Tools", "Agent Workflows", "Email Automation", "Voice Bots", "Chatbots"] },
            { category: "Cloud & DevOps", skills: ["Cloudflare", "Vercel", "AWS", "Docker", "GitHub Actions", "CI/CD Pipelines", "Edge Functions", "Serverless", "Linux"] },
            { category: "Product", skills: ["MVP Building", "Landing Pages", "Onboarding Flows", "SEO Pages", "Analytics", "Waitlists", "Launch Copy"] },
          ].map((group, idx) => (
            <BlurFade key={group.category} delay={BLUR_FADE_DELAY * 5 + idx * 0.05}>
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-[var(--duo-wolf)] uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} className="px-3 py-1 rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] border-0 text-xs font-bold hover:bg-[var(--duo-feather)]/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Fellowships & Achievements */}
      <section id="hackathons" className="mx-auto w-full max-w-5xl px-6 space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-extrabold tracking-tight">Fellowships & Achievements</h2>
        </BlurFade>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {DATA.hackathons.map((project: any, id: number) => (
            <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 5.1 + id * 0.05}>
              <HackathonCard title={project.title} description={project.description} location={project.location} dates={project.dates} image={project.image} links={project.links} />
            </BlurFade>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-5xl px-6 space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-extrabold tracking-tight">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5.2}>
          <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-6 md:p-8 shadow-[0_2px_0_var(--duo-swan)]">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              I'm a CS student at BIT Mesra. Most of what I build ends up open source or live in production — currently working on Solus, a privacy-first personal social network, and contributing to projects like Google's gemini-cli along the way. Always up for interesting problems, whether that's an internship, GSoC, or a hard bug.
            </p>
            <div className="mt-4">
              <Link
                href="https://codeforces.com/profile/sh20raj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--duo-feather)] hover:underline"
              >
                <Github className="size-3.5" />
                Codeforces profile
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="rounded-2xl bg-[var(--duo-eel)] text-white p-10 md:p-14 text-center space-y-5">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-white max-w-xl mx-auto">
              Want to see more, or just say hi?
            </h2>
            <p className="mx-auto max-w-[460px] text-zinc-400 text-sm leading-relaxed">
              Looking to hire me for a project instead?{" "}
              <Link href="/hire" className="font-semibold text-white underline hover:text-zinc-200">
                Reach out
              </Link>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <a
                href="/resume.pdf"
                download
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[var(--duo-feather)] px-7 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
              >
                <FileDown className="size-3.5" /> Resume
              </a>
              <Link
                href="https://github.com/SH20RAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                <Github className="size-3.5" /> GitHub
              </Link>
              <a
                href="mailto:sh20raj@gmail.com"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                <Mail className="size-3.5" /> Email
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
