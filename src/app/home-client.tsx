"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { servicesHubData } from "@/data/services";
import {
  LayoutIcon,
  CodeIcon,
  BotIcon,
  TrendingUpIcon,
  UsersIcon,
  RocketIcon,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BLUR_FADE_DELAY = 0.04;

export function HomeClient({ DATA }: { DATA: any }) {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 pb-16">
      {/* Hero */}
      <section id="hero" className="pt-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-8">
          <div className="gap-10 flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="flex-col flex flex-1 space-y-5 text-center md:text-left">
              <div className="space-y-1">
                <h1>
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-extrabold tracking-tighter sm:text-4xl xl:text-5xl"
                    yOffset={8}
                    text="Shaswat Raj"
                  />
                </h1>
                <BlurFadeText
                  className="max-w-[500px] text-base md:text-lg font-bold text-[var(--duo-feather)]"
                  delay={BLUR_FADE_DELAY * 1.5}
                  text="Full-Stack Developer & Open Source Builder"
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[500px] text-sm md:text-base text-muted-foreground leading-relaxed mx-auto md:mx-0">
                  Helping founders turn rough ideas into launch-ready products. AI tools, SaaS apps, and automation — shipped fast.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1">
                  <Link href="/services" className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none">
                    View Services
                  </Link>
                  <Link href="/projects" className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none">
                    View Projects
                  </Link>
                  <a href="/resume.pdf" download className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-1.5">
                    <FileDown className="h-3.5 w-3.5" /> Resume
                  </a>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--duo-feather)] to-[var(--duo-macaw)] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <Avatar className="size-32 md:size-44 border-4 border-background relative shadow-xl">
                  <AvatarImage alt="Shaswat Raj" src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback className="text-3xl">{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>

          {/* Inline stats */}
          <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-center md:text-left">
              {[
                { value: "500+", label: "Projects" },
                { value: "50+", label: "NPM Packages" },
                { value: "45k+", label: "Followers" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-lg font-extrabold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* GitHub Snake — right after hero */}
      <section id="activity" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 3.8}>
          <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-4 shadow-[0_2px_0_var(--duo-swan)] overflow-hidden">
            <picture className="w-full">
              <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/sh20raj/sh20raj/output/github-snake-dark.svg" />
              <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/sh20raj/sh20raj/output/github-snake.svg" />
              <img alt="github-snake" src="https://raw.githubusercontent.com/sh20raj/sh20raj/output/github-snake.svg" className="w-full h-auto" loading="lazy" />
            </picture>
          </div>
        </BlurFade>
      </section>

      {/* About & Vision */}
      <section id="about" className="mx-auto w-full max-w-5xl px-6 space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-2xl font-extrabold tracking-tight">About & Vision</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4.1}>
          <div className="prose max-w-full text-pretty font-sans text-sm md:text-base text-muted-foreground dark:prose-invert space-y-3">
            <p>
              I build AI tools, SaaS apps, developer utilities, automation systems, and open-source projects using Next.js, TypeScript, Node.js, Python, Cloudflare, and modern AI APIs.
            </p>
            <p>
              I move fast from vague ideas to working products — landing pages, dashboards, APIs, AI workflows, browser tools, MCP integrations, and public launches.
            </p>
            <p>
              I&apos;m <strong>Shaswat Raj</strong>, a full-stack developer and product builder from India. My strength is taking rough product ideas and turning them into working demos, MVPs, dashboards, APIs, and launch-ready websites quickly.
            </p>
            <p>
              Coding since class 7, I&apos;ve built 500+ projects, maintain 50+ open-source packages, and have 45k+ followers on Dev.to.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4.4}>
          <Link
            href="https://sh20raj.github.io/ideas/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--duo-feather)] bg-[var(--duo-feather)]/10 px-4 py-2 rounded-full hover:bg-[var(--duo-feather)]/20 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Startup Ideas <ArrowRightIcon className="size-4" />
          </Link>
        </BlurFade>
      </section>

      {/* Technical Depth */}
      <section id="skills" className="mx-auto w-full max-w-5xl px-6 space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <h2 className="text-2xl font-extrabold tracking-tight">Technical Depth</h2>
        </BlurFade>
        <div className="space-y-4">
          {[
            { category: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Responsive UI", "Landing Pages", "Dashboards", "SEO", "Performance"] },
            { category: "Backend", skills: ["Node.js", "Express", "API Design", "Auth", "Cron Jobs", "Webhooks", "Database Modeling", "Automation"] },
            { category: "AI", skills: ["OpenAI", "Claude", "Gemini APIs", "AI SDK", "RAG", "Embeddings", "Transcription", "MCP Tools", "Agent Workflows"] },
            { category: "Infrastructure", skills: ["Cloudflare Workers", "Vercel", "GitHub Actions", "Serverless", "Environment Management"] },
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

      {/* Featured Projects */}
      <section id="projects" className="mx-auto w-full max-w-5xl px-6 space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight">Projects</h2>
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

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-5xl px-6 space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight">Services</h2>
            <Link href="/services" className="group inline-flex items-center gap-1 text-sm font-bold text-[var(--duo-feather)] hover:underline">
              View all <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesHubData.services.map((service, id) => {
            const Icon = {
              layout: LayoutIcon,
              code: CodeIcon,
              bot: BotIcon,
              "trending-up": TrendingUpIcon,
              users: UsersIcon,
              rocket: RocketIcon,
            }[service.icon] || CodeIcon;

            return (
              <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                <Link href={service.href} className="group block h-full">
                  <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="size-10 rounded-xl bg-[var(--duo-feather)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--duo-feather)] group-hover:text-white transition-all duration-300">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-bold text-sm mb-1 group-hover:text-[var(--duo-feather)] transition-colors">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>

        {/* CTA Banner */}
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="relative overflow-hidden rounded-2xl bg-[var(--duo-feather)] p-8 text-center text-white">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 size-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold text-white">Ready to ship?</h3>
              <p className="mx-auto max-w-[400px] text-white/80 text-sm">
                Let&apos;s turn your vision into a production-ready product.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link href="/services" className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none">
                  Explore Services
                </Link>
                <Link href="mailto:sh20raj@gmail.com" className="inline-flex h-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 active:translate-y-1">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Details — Accordion sections */}
      <section id="details" className="mx-auto w-full max-w-5xl px-6 space-y-4">
        <div id="hackathons">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="recognition" className="border-0 bg-[var(--duo-polar)]/60 rounded-xl px-5 mb-3">
              <AccordionTrigger className="text-base font-bold py-4 hover:no-underline hover:text-[var(--duo-feather)] transition-colors">
                Fellowships & Achievements
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-[var(--duo-swan)]">
                  {DATA.hackathons.map((project: any, id: number) => (
                    <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 0.1 + id * 0.05}>
                      <HackathonCard title={project.title} description={project.description} location={project.location} dates={project.dates} image={project.image} links={project.links} />
                    </BlurFade>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div id="faq">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq" className="border-0 bg-[var(--duo-polar)]/60 rounded-xl px-5 mb-3">
              <AccordionTrigger className="text-base font-bold py-4 hover:no-underline hover:text-[var(--duo-feather)] transition-colors">
                Frequently Asked Questions
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <Accordion type="single" collapsible className="w-full space-y-2 pt-3 border-t border-[var(--duo-swan)]">
                  {[
                    { q: "Who is Shaswat Raj?", a: "Full-stack developer and AI product builder from India. 500+ projects, 50+ npm packages, 45k+ Dev.to followers." },
                    { q: "What does he build?", a: "AI tools, SaaS apps, developer utilities, content platforms, automation systems, and open-source npm packages." },
                    { q: "What technologies?", a: "Next.js, React, TypeScript, Node.js, Python, Tailwind CSS, PostgreSQL, Cloudflare, Vercel, OpenAI, Claude, Gemini APIs." },
                    { q: "Available for work?", a: "Yes — internships, startup work, freelance projects, AI product builds, and founder-led teams. Contact sh20raj@gmail.com." },
                  ].map((faq, id) => (
                    <AccordionItem key={faq.q} value={`faq-${id}`} className="border-0 rounded-lg px-4 bg-background/50">
                      <AccordionTrigger className="text-sm font-bold py-2.5 hover:no-underline">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground pb-3">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div id="proof">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="proof" className="border-0 bg-[var(--duo-polar)]/60 rounded-xl px-5">
              <AccordionTrigger className="text-base font-bold py-4 hover:no-underline hover:text-[var(--duo-feather)] transition-colors">
                Builder Proof
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-[var(--duo-swan)]">
                  {[
                    { label: "500+ Projects", desc: "Full-stack products & tools" },
                    { label: "AI & SaaS", desc: "AI products, dev utilities" },
                    { label: "50+ NPM Packages", desc: "1M+ annual downloads" },
                    { label: "Fast Execution", desc: "Ideas to demos in days" },
                    { label: "45k+ Followers", desc: "Dev.to community" },
                    { label: "AICTE APF 2025", desc: "Top 500 in India" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-[var(--duo-swan)] bg-background/50 p-3">
                      <p className="text-sm font-bold">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-5xl px-6 pb-16">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="relative overflow-hidden rounded-2xl bg-[var(--duo-eel)] text-white p-10 md:p-16 text-center space-y-5">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-white/5 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-white">
                Want to build <span className="text-[var(--duo-macaw)]">something fast?</span>
              </h2>
              <p className="mx-auto max-w-[500px] text-zinc-400 text-sm leading-relaxed">
                Open to internships, startup work, freelance projects, and founder-led teams.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link href="mailto:sh20raj@gmail.com" className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none">
                  Email Me
                </Link>
                <Link href="https://github.com/SH20RAJ" target="_blank" className="inline-flex h-10 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-6 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 active:translate-y-1">
                  View GitHub
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
