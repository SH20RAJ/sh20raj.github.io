"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { servicesHubData } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LayoutIcon, 
  CodeIcon, 
  BotIcon, 
  TrendingUpIcon, 
  UsersIcon, 
  RocketIcon,
  ArrowRightIcon 
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
    <main className="flex flex-col min-h-[100dvh] space-y-24 pb-20">
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/editor">
          <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-background hover:bg-accent transition-all hover:scale-110">
            <Edit2Icon className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <section id="hero" className="pt-20">
        <div className="mx-auto w-full max-w-7xl px-8 space-y-12">
          <div className="gap-12 flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="flex-col flex flex-1 space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h1>
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text="Shaswat Raj"
                  />
                </h1>
                <BlurFadeText
                  className="max-w-[700px] text-lg md:text-xl font-bold text-primary/80"
                  delay={BLUR_FADE_DELAY * 1.5}
                  text="Full-Stack Developer & Open Source Builder"
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[600px] text-base md:text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                  Helping founders turn rough ideas into launch-ready products. I build AI tools, SaaS apps, and automation systems with speed and precision.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                  <Link href="/services" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">View Services</Link>
                  <Link href="/projects" className="inline-flex h-12 items-center justify-center rounded-full border-2 bg-background px-8 text-sm font-bold shadow-sm transition-all hover:bg-accent hover:scale-105 active:scale-95">View Projects</Link>
                  <Link href="mailto:sh20raj@gmail.com" className="inline-flex h-12 items-center justify-center rounded-full border-2 bg-background px-8 text-sm font-bold shadow-sm transition-all hover:bg-accent hover:scale-105 active:scale-95">Contact Me</Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Avatar className="size-40 md:size-56 border-8 border-background relative shadow-2xl">
                  <AvatarImage alt="Shaswat Raj" src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback className="text-4xl">{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="activity" className="mx-auto w-full max-w-7xl px-8 space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Live Activity</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-4">
               <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold">GitHub Activity</h4>
                <div className="w-full rounded-2xl border bg-card p-8 shadow-sm overflow-hidden flex justify-center">
                  <picture className="w-full">
                    <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/sh20raj/sh20raj/output/github-snake-dark.svg" />
                    <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/sh20raj/sh20raj/output/github-snake.svg" />
                    <img 
                      alt="github-snake" 
                      src="https://raw.githubusercontent.com/sh20raj/sh20raj/output/github-snake.svg" 
                      className="w-full h-auto"
                    />
                  </picture>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <h4 className="text-sm font-semibold">Activity & Proof</h4>
                <div className="flex flex-wrap gap-3">
                  <a href="https://dev.to/sh20raj" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                    <img src="https://img.shields.io/badge/dev.to-45k%20Followers-black?style=for-the-badge&logo=dev.to" alt="Dev.to" className="rounded-lg" loading="lazy" />
                  </a>
                  <a href="https://github.com/SH20RAJ" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                    <img src="https://img.shields.io/badge/GitHub-Collective-black?style=for-the-badge&logo=github" alt="GitHub" className="rounded-lg" loading="lazy" />
                  </a>
                  <a href="https://www.npmjs.com/~sh20raj" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                    <img src="https://img.shields.io/badge/npm-50%2B%20Packages-cb3837?style=for-the-badge&logo=npm" alt="npm" className="rounded-lg" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto w-full max-w-7xl px-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="about" className="border-b-0">
            <AccordionTrigger className="text-2xl font-bold py-4 hover:no-underline hover:text-primary transition-colors">
              About & Vision
            </AccordionTrigger>
            <AccordionContent>
              <BlurFade delay={BLUR_FADE_DELAY * 0.1}>
                <div className="prose max-w-full text-pretty font-sans text-base md:text-lg text-muted-foreground dark:prose-invert space-y-4 pt-4">
                  <p>
                    I build AI tools, SaaS apps, developer utilities, automation systems, and open-source projects using Next.js, TypeScript, Node.js, Python, Cloudflare, and modern AI APIs.
                  </p>
                  <p>
                    I move fast from vague ideas to working products — landing pages, dashboards, APIs, AI workflows, browser tools, MCP integrations, and public launches.
                  </p>
                  <p>
                    I&apos;m <strong>Shaswat Raj</strong>, a full-stack developer and product builder from India. I build AI products, SaaS tools, developer utilities, indexing tools, content platforms, and automation systems. My strength is taking rough product ideas and turning them into working demos, MVPs, dashboards, APIs, and launch-ready websites quickly.
                  </p>
                  <p>
                    I like working close to founders, solving unclear problems, experimenting fast, and shipping useful products in public. Coding since class 7, I&apos;ve built 500+ projects, maintain 50+ open-source packages with 1M+ annual npm downloads, and have 45k+ followers on Dev.to.
                  </p>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 0.4}>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="https://sh20raj.github.io/ideas/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Explore Startup Ideas</span>
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </div>
              </BlurFade>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Technical Depth Section */}
      <section id="skills" className="mx-auto w-full max-w-7xl px-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="skills" className="border-b-0">
            <AccordionTrigger className="text-2xl font-bold py-4 hover:no-underline hover:text-primary transition-colors">
              Technical Depth
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex min-h-0 flex-col gap-y-6 pt-4">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    { category: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Responsive UI", "Landing Pages", "Dashboards", "SEO", "Performance"] },
                    { category: "Backend", skills: ["Node.js", "Express", "API Design", "Auth", "Cron Jobs", "Webhooks", "Database Modeling", "Automation"] },
                    { category: "AI", skills: ["OpenAI", "Claude", "Gemini APIs", "AI SDK", "RAG", "Embeddings", "Transcription", "MCP Tools", "Agent Workflows"] },
                    { category: "Infrastructure", skills: ["Cloudflare Workers", "Vercel", "GitHub Actions", "Serverless", "Environment Management"] },
                    { category: "Product", skills: ["MVP Building", "Landing Pages", "Onboarding Flows", "SEO Pages", "Analytics", "Waitlists", "Launch Copy"] },
                  ].map((group, idx) => (
                    <AccordionItem key={group.category} value={`skill-${idx}`} className="border-b-0">
                      <AccordionTrigger className="text-sm font-semibold text-muted-foreground uppercase tracking-wider py-2 hover:no-underline hover:text-foreground">
                        {group.category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <BlurFade delay={BLUR_FADE_DELAY * 0.1}>
                          <div className="flex flex-wrap gap-2 pt-1 pb-4">
                            {group.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-full">{skill}</Badge>
                            ))}
                          </div>
                        </BlurFade>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="w-full py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                  Portfolio
                </div>
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
                  Products I&apos;ve Built
                </h2>
                <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto leading-relaxed">
                  AI tools, SaaS apps, developer utilities, and open-source projects — shipped and running in production.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {DATA.projects.slice(0, 6).map((project: any, id: number) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 9 + id * 0.05}
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
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex justify-center mt-12">
              <Link
                href="/projects"
                className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 gap-2"
              >
                Explore All 500+ Projects
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Ways I Can Help Section */}
      <section id="services" className="w-full py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                  Services
                </div>
                <h2 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
                  Ways I Can Help
                </h2>
                <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto leading-relaxed">
                  From landing pages to AI systems — I help founders and creators ship products fast.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                  <Link href={service.href} className="group block h-full">
                    <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border-0 bg-secondary/30 backdrop-blur-sm group-hover:-translate-y-2 group-hover:bg-secondary/50 rounded-3xl p-4">
                      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRightIcon className="size-5 text-primary" />
                      </div>
                      <CardHeader className="pb-4">
                        <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Icon className="size-7" />
                        </div>
                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
          
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 text-center text-primary-foreground">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 size-64 rounded-full bg-black/10 blur-3xl" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold sm:text-5xl">Ready to ship?</h3>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Let&apos;s turn your vision into a production-ready product in record time.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    href="/services"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-bold text-black shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="mailto:sh20raj@gmail.com"
                    className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-10 text-base font-bold text-white shadow-xl backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="details" className="mx-auto w-full max-w-5xl px-8 space-y-8">
        {/* Recognition Section */}
        <div id="hackathons">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="recognition" className="border-0 bg-secondary/15 rounded-3xl px-6 mb-4">
              <AccordionTrigger className="text-xl font-bold py-5 hover:no-underline hover:text-primary transition-all">
                <div className="flex flex-col items-start gap-0.5">
                  <h2 className="text-xl font-bold">Fellowships & Achievements</h2>
                  <p className="text-xs font-medium text-muted-foreground/60 italic">Competitive impact and industry recognition.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-dashed">
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

        {/* FAQ Section */}
        <div id="faq">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq" className="border-0 bg-secondary/15 rounded-3xl px-6 mb-4">
              <AccordionTrigger className="text-xl font-bold py-5 hover:no-underline hover:text-primary transition-all">
                <div className="flex flex-col items-start gap-0.5">
                  <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
                  <p className="text-xs font-medium text-muted-foreground/60 italic">Everything you might want to know.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <Accordion type="single" collapsible className="w-full space-y-3 pt-4 border-t border-dashed">
                  {[
                    { q: "Who is Shaswat Raj?", a: "Shaswat Raj (SH20RAJ) is a full-stack developer and AI product builder from India. He builds SaaS apps, developer tools, AI products, and open-source packages. He has 500+ projects, 50+ npm packages, and 45k+ Dev.to followers." },
                    { q: "What does Shaswat Raj build?", a: "AI tools (Kishan AI, Debo, AayeChup), SaaS apps (Scaleboard, Waitlist.js), developer utilities (30tools, IndexFast, FormGuard), content platforms, automation systems, and open-source npm packages." },
                    { q: "What technologies does Shaswat Raj use?", a: "Next.js, React, TypeScript, Node.js, Python, Tailwind CSS, PostgreSQL, MongoDB, Cloudflare, Vercel, OpenAI, Claude, Gemini APIs, GitHub Actions, and more." },
                    { q: "Is Shaswat Raj available for internships, freelance, or startup work?", a: "Yes. Shaswat is open to internships, startup work, freelance projects, AI product builds, open-source collaborations, and founder-led teams. Contact him at sh20raj@gmail.com." },
                    { q: "Where can I see Shaswat Raj's projects?", a: "Visit the projects page on this portfolio, browse his GitHub at github.com/SH20RAJ, check his npm packages at npmjs.com/~sh20raj, or read his articles at dev.to/sh20raj." },
                  ].map((faq, id) => (
                    <AccordionItem key={faq.q} value={`faq-${id}`} className="border-0 rounded-xl px-5 bg-background/50">
                      <AccordionTrigger className="text-sm font-bold py-3 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground/80 pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Builder Proof Section */}
        <div id="proof">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="proof" className="border-0 bg-secondary/15 rounded-3xl px-6">
              <AccordionTrigger className="text-xl font-bold py-5 hover:no-underline hover:text-primary transition-all">
                <div className="flex flex-col items-start gap-0.5">
                  <h2 className="text-xl font-bold">Builder Proof</h2>
                  <p className="text-xs font-medium text-muted-foreground/60 italic">Quantified impact and track record.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-dashed">
                  {[
                    { label: "500+ Projects Shipped", desc: "Full-stack products, tools, APIs, and open-source packages" },
                    { label: "AI Tools & SaaS Apps", desc: "AI products, developer utilities, and content platforms" },
                    { label: "Open-Source Builder", desc: "50+ npm packages, 1M+ annual downloads" },
                    { label: "Fast Product Execution", desc: "Ideas to working demos in days, not months" },
                    { label: "45k+ Dev.to Followers", desc: "Technical writing and developer community" },
                    { label: "AICTE APF 2025", desc: "Top 500 across India for AI product fellowship" },
                  ].map((item, id) => (
                    <BlurFade key={item.label} delay={id * 0.05}>
                      <div className="rounded-xl border bg-background/50 p-5 shadow-sm h-full">
                        <p className="text-base font-bold">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-1.5">{item.desc}</p>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full pb-32">
        <div className="mx-auto max-w-7xl px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="relative overflow-hidden rounded-[3rem] bg-foreground text-background p-12 md:p-24 text-center space-y-8">
              <div className="absolute top-0 right-0 -mr-24 -mt-24 size-96 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-24 -mb-24 size-96 rounded-full bg-blue-500/20 blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="inline-block rounded-full bg-background/10 text-background px-4 py-1.5 text-xs font-bold uppercase tracking-widest border border-background/20">
                  Let&apos;s Work Together
                </div>
                <h2 className="text-4xl font-black tracking-tighter sm:text-6xl leading-tight">
                  Want to build <span className="text-primary">something fast?</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-background/60 text-base md:text-xl leading-relaxed">
                  I&apos;m open to internships, startup work, freelance projects, AI product builds, and founder-led teams.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-8">
                  <Link href="mailto:sh20raj@gmail.com" className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95">
                    Email Me
                  </Link>
                  <Link href="https://github.com/SH20RAJ" target="_blank" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-background/20 bg-transparent px-10 text-base font-bold text-background transition-all hover:bg-background/10 hover:scale-105 active:scale-95">
                    View GitHub
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
