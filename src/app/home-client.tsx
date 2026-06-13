"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { GitHubStats } from "@/components/github-stats";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { servicesHubData } from "@/data/services";
import { monetization } from "@/data/monetization";
import { featuredMarketplaceProducts } from "@/data/marketplace";
import {
  LayoutIcon,
  CodeIcon,
  BotIcon,
  TrendingUpIcon,
  UsersIcon,
  RocketIcon,
  ArrowRightIcon,
  FileDown,
  Palette,
  ExternalLink,
  CheckCircle2,
  Zap,
  LayoutDashboard,
  Briefcase,
  ShoppingBag,
  Send,
  Github,
  Linkedin,
  Award,
  Youtube,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BLUR_FADE_DELAY = 0.04;

const hireMeServices = [
  {
    title: "Next.js Landing Pages",
    icon: LayoutIcon,
    bestFor: "SaaS, AI tools, launches, waitlists, agency clients",
    deliverables: "Responsive page, CTA, copy structure, SEO basics, deployment",
    timeline: "2–5 days",
    accent: "feather",
    href: "/landing-pages",
  },
  {
    title: "SaaS MVPs & Dashboards",
    icon: LayoutDashboard,
    bestFor: "Founders needing product UI fast",
    deliverables: "Dashboard UI, auth screens, settings, billing UI, API integration",
    timeline: "1–3 weeks",
    accent: "macaw",
    href: "/saas-mvp",
  },
  {
    title: "AI Tools & Automation",
    icon: BotIcon,
    bestFor: "AI apps, internal tools, agents, chatbots, workflows",
    deliverables: "AI API integration, chat UI, RAG/MCP/API workflows, automation",
    timeline: "3–10 days",
    accent: "beetle",
    href: "/ai-automation",
  },
  {
    title: "Agency / Founder Overflow",
    icon: Briefcase,
    bestFor: "Agencies and early startups with too much frontend/product work",
    deliverables: "Figma to Next.js, UI sections, responsive fixes, frontend bugs, client landing pages",
    timeline: "Ongoing / sprint-based",
    accent: "fox",
    href: "#agencies",
  },
];

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
    problem: "Large cultural fest needed reliable tech for registration, entry, teams, admin operations, and real-world crowd pressure.",
    built: "Website, QR scanning, admin tools, teams, points/participation system, AI features, internal management, communication flow.",
    constraint: "Internet-less zones, bad data, access issues, last-minute changes, security constraints, real-time crowd pressure.",
    result: "Successfully supported ~5,000 participants and delivered the system under pressure.",
    cta: "View LinkedIn Proof",
    href: "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn",
    stack: ["Next.js", "PostgreSQL", "Redis", "OpenAI", "QR"],
  },
  {
    title: "30tools",
    problem: "Users need fast no-login browser tools.",
    built: "A growing ecosystem of 140+ free browser/developer/creator tools with SEO-focused pages.",
    result: "Reported millions of requests, hundreds of thousands of visits/page views, thousands of users, and strong Bing performance.",
    cta: "View Growth Proof",
    href: "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_",
    stack: ["Next.js", "TypeScript", "SEO", "Browser APIs"],
  },
  {
    title: "Kishan AI",
    problem: "Farmers need accessible AI help without installing complex apps.",
    built: "Telegram/Web/App AI assistant for crop disease diagnosis, weather, mandi prices, schemes, and regional voice.",
    result: "AICTE Productization Fellowship 2025 Round 1 Top 500 shortlisted.",
    cta: "View APF Proof",
    href: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
    stack: ["AI", "Telegram Bot", "Voice", "Computer Vision"],
  },
  {
    title: "IndexFast / Debo / MCP Pure",
    problem: "Founders and indie builders need faster indexing, AI memory, and MCP infrastructure that just works.",
    built: "IndexFast — MCP-native indexing for Google/Bing/IndexNow. Debo — AI memory engine over notes, links, audio. MCP Pure — open-source MCP servers on Cloudflare Workers.",
    result: "Three live AI/dev products shipped solo, used in real workflows.",
    cta: "View Projects",
    href: "/projects",
    stack: ["Next.js", "TypeScript", "MCP", "AI SDK", "Cloudflare"],
  },
];

const accentClass: Record<string, { bg: string; text: string; ring: string }> = {
  feather: {
    bg: "bg-[var(--duo-feather)]/10",
    text: "text-[var(--duo-feather)]",
    ring: "border-[var(--duo-feather)]/30",
  },
  macaw: {
    bg: "bg-[var(--duo-macaw)]/10",
    text: "text-[var(--duo-macaw)]",
    ring: "border-[var(--duo-macaw)]/30",
  },
  beetle: {
    bg: "bg-[var(--duo-beetle)]/10",
    text: "text-[var(--duo-beetle)]",
    ring: "border-[var(--duo-beetle)]/30",
  },
  fox: {
    bg: "bg-[var(--duo-fox)]/10",
    text: "text-[var(--duo-fox)]",
    ring: "border-[var(--duo-fox)]/30",
  },
};

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
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--duo-feather)] opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-[var(--duo-feather)]" />
                  </span>
                  Available — remote, contract, agency overflow
                </span>
              </BlurFade>
              <div className="space-y-2">
                <h1>
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-extrabold tracking-tighter sm:text-4xl xl:text-5xl"
                    yOffset={8}
                    text="Next.js & AI Product Developer"
                  />
                </h1>
                <BlurFadeText
                  className="max-w-[560px] text-lg md:text-xl font-extrabold tracking-tight text-[var(--duo-feather)]"
                  delay={BLUR_FADE_DELAY * 1.3}
                  text="for startups, agencies, and founders"
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[540px] text-sm md:text-base text-muted-foreground leading-relaxed mx-auto md:mx-0">
                  I ship landing pages, SaaS dashboards, AI tools, and MVPs for founders who need a working product, not a deck. Next.js, TypeScript, Cloudflare, and the AI SDKs.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1">
                  <Link
                    href="https://scriptlyhq.strivio.world/"
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-macaw)] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-macaw-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
                  >
                    <ShoppingBag className="size-3.5 mr-2" />
                    Marketplace
                  </Link>
                  <Link
                    href="#projects"
                    className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-5 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] transition-colors hover:border-[var(--duo-feather)] hover:text-[var(--duo-feather)]"
                  >
                    See work
                  </Link>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-[var(--duo-feather)] transition-colors self-center"
                  >
                    <FileDown className="h-3.5 w-3.5" /> Resume
                  </a>
                </div>
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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 border-t border-[var(--duo-swan)]/60 text-[11px] text-muted-foreground font-bold uppercase tracking-widest">
              <span className="text-[var(--duo-eel)]">Stack</span>
              {["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Node.js", "Cloudflare", "Vercel", "OpenAI", "Claude", "Gemini", "RAG", "MCP"].map((s) => (
                <span key={s} className="text-muted-foreground/80">{s}</span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Hire Me For */}
      <section id="hire-me-for" className="mx-auto w-full max-w-5xl px-6 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              How I work with founders
            </h2>
            <Link
              href="/services"
              className="group hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[var(--duo-feather)] hover:underline"
            >
              See full service list <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hireMeServices.map((service, id) => {
            const Icon = service.icon;
            const accent = accentClass[service.accent];
            return (
              <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
                <Link href={service.href} className="group block h-full">
                  <div className="rounded-xl border border-[var(--duo-swan)] bg-card p-5 hover:border-[var(--duo-feather)] hover:shadow-md transition-all duration-200 h-full flex flex-col">
                    <div className={`size-10 rounded-lg ${accent.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`size-5 ${accent.text}`} />
                    </div>
                    <h3 className="font-extrabold text-base mb-1.5 group-hover:text-[var(--duo-feather)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      {service.bestFor}
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      {service.deliverables}
                    </p>
                    <div className={`mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${accent.text}`}>
                      <Zap className="size-3" /> {service.timeline}
                    </div>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
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
              Every claim links to the LinkedIn post where I documented the launch. No fake screenshots, no made-up metrics.
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
          {DATA.projects.slice(0, 6).map((project: any, id: number) => (
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

      {/* For Agencies & Founders */}
      <section id="agencies" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="rounded-2xl border-2 border-[var(--duo-swan)] bg-card p-6 md:p-10 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                For agencies and founder-led teams
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Plug me in for the work piling up: Figma → Next.js, dashboard screens, AI integrations, the page that needs to go out tomorrow.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
              {[
                "Figma to Next.js",
                "Landing pages",
                "Responsive fixes",
                "Tailwind / shadcn UI sections",
                "SaaS dashboard screens",
                "API integrations",
                "AI chatbot / demo integrations",
                "SEO / programmatic pages",
                "Bug fixes and deployment",
                "MVP sprint execution",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-3.5 text-[var(--duo-feather)] shrink-0" />
                  <span className="text-foreground">{s}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              White-label · NDA-friendly · Async · Remote-first
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/hire"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
              >
                Send a small task
              </Link>
              <a
                href="https://linkedin.com/in/sh20raj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] transition-colors hover:border-[var(--duo-feather)] hover:text-[var(--duo-feather)]"
              >
                Talk on LinkedIn
              </a>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Marketplace cross-sell — lower-ticket digital products */}
      <section id="marketplace-strip" className="mx-auto w-full max-w-5xl px-6 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Or buy a template instead
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                Templates, playbooks, and workflow packs I&apos;ve battle-tested in real projects.
              </p>
            </div>
            <Link
              href="/marketplace"
              className="group hidden md:inline-flex items-center gap-1 text-sm font-bold text-[var(--duo-feather)] hover:underline"
            >
              See all <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredMarketplaceProducts().map((p, id) => (
            <BlurFade key={p.name} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl border-2 border-[var(--duo-swan)] bg-card overflow-hidden shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm group-hover:text-[var(--duo-feather)] transition-colors line-clamp-1">
                      {p.name}
                    </h3>
                    <span className="text-sm font-extrabold text-[var(--duo-feather)] whitespace-nowrap">{p.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{p.description}</p>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[var(--duo-feather)]">
                    <ShoppingBag className="size-3" /> Buy on Gumroad
                  </div>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Inline lead-capture strip */}
      <section id="quick-brief" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-2xl border-2 border-[var(--duo-swan)] bg-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1 space-y-1">
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Drop your email. I&apos;ll reply within a day with a fixed quote.
                </p>
              </div>
              {monetization.web3formsAccessKey ? (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="flex flex-col sm:flex-row gap-2 w-full md:w-auto md:min-w-[360px]"
                >
                  <input type="hidden" name="access_key" value={monetization.web3formsAccessKey} />
                  <input type="hidden" name="subject" value="Quick brief from sh20raj.github.io home" />
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="flex-1 h-10 rounded-full border-2 border-[var(--duo-swan)] bg-background px-4 text-sm focus:outline-none focus:border-[var(--duo-feather)] transition-colors"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[var(--duo-feather)] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_3px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-0.5 active:shadow-none whitespace-nowrap"
                  >
                    <Send className="size-3.5" /> Get a quote
                  </button>
                </form>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/hire"
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_3px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-0.5 active:shadow-none whitespace-nowrap"
                  >
                    <Send className="size-3.5" /> Send a brief
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] transition-colors hover:border-[var(--duo-feather)] hover:text-[var(--duo-feather)] whitespace-nowrap"
                  >
                    Book a call
                  </Link>
                </div>
              )}
            </div>
          </div>
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

      {/* FAQ */}
      <section id="faq" className="mx-auto w-full max-w-5xl px-6 space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
        </BlurFade>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {[
            {
              q: "Do you work with international clients?",
              a: "Yes. I work remotely with founders, agencies, and startups worldwide. I can communicate through LinkedIn, email, Discord, Slack, GitHub, or WhatsApp.",
            },
            {
              q: "Can I start with a small task?",
              a: "Yes. The best way to work with me is to start with a small paid task like a landing page section, dashboard screen, bug fix, AI API integration, or responsive UI fix.",
            },
            {
              q: "What stack do you use?",
              a: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Node.js, APIs, PostgreSQL/Supabase where needed, Cloudflare, Vercel, AI SDK, OpenAI/Claude/Gemini APIs, RAG, MCP tools, and automation workflows.",
            },
            {
              q: "What kind of clients are the best fit?",
              a: "YC/startup founders, SaaS teams, AI startups, agencies, product studios, and builders who need fast product execution.",
            },
            {
              q: "Can you work on an existing codebase?",
              a: "Yes. I can work inside existing Next.js/React codebases, fix UI issues, build new pages, improve performance, integrate APIs, and ship features.",
            },
            {
              q: "Are you available for contract or freelance?",
              a: "Yes. I'm available for remote freelance, contract, internship, agency overflow, and founder-led product work.",
            },
          ].map((faq, id) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${id}`}
              className="border-2 border-[var(--duo-swan)] rounded-xl px-4 bg-card shadow-[0_2px_0_var(--duo-swan)]"
            >
              <AccordionTrigger className="text-sm font-bold py-3 hover:no-underline hover:text-[var(--duo-feather)] transition-colors text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="rounded-2xl bg-[var(--duo-eel)] text-white p-10 md:p-14 text-center space-y-5">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-white max-w-xl mx-auto">
              Want me to build something?
            </h2>
            <p className="mx-auto max-w-[460px] text-zinc-400 text-sm leading-relaxed">
              Book a 15-minute call, or send a brief. I reply within a day.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <Link
                href="/book"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--duo-feather)] px-7 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
              >
                Book a call
              </Link>
              <Link
                href="/hire"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                Send a brief
              </Link>
              <a
                href="https://linkedin.com/in/sh20raj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
