"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useResume } from "@/lib/resume-context";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { servicesHubData } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { data: DATA } = useResume();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/editor">
          <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-background hover:bg-accent transition-all hover:scale-110">
            <Edit2Icon className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text="Shaswat Raj — Full-Stack Developer & Open Source Builder"
                />
              </h1>
              <BlurFadeText
                className="max-w-[600px] md:text-xl font-semibold text-muted-foreground"
                delay={BLUR_FADE_DELAY * 1.5}
                text="I help founders and creators turn rough ideas into launch-ready products"
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[600px] text-sm md:text-base text-muted-foreground mt-2">
                  I build AI tools, SaaS apps, developer utilities, automation systems, and open-source projects using Next.js, TypeScript, Node.js, Python, Cloudflare, and modern AI APIs.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <p className="max-w-[600px] text-sm text-muted-foreground mt-1">
                  I move fast from vague ideas to working products — landing pages, dashboards, APIs, AI workflows, browser tools, MCP integrations, and public launches.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link href="/services" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">View Services</Link>
                  <Link href="/projects" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">View Projects</Link>
                  <Link href="mailto:sh20raj@gmail.com" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">Contact Me</Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt="Shaswat Raj — Full Stack Developer" src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      {/* Builder Proof Section */}
      <section id="proof">
        <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
          <h2 className="text-xl font-bold mb-4">Builder Proof</h2>
        </BlurFade>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "500+ Projects Shipped", desc: "Full-stack products, tools, APIs, and open-source packages" },
            { label: "AI Tools & SaaS Apps", desc: "AI products, developer utilities, and content platforms" },
            { label: "Open-Source Builder", desc: "50+ npm packages, 1M+ annual downloads" },
            { label: "Fast Product Execution", desc: "Ideas to working demos in days, not months" },
            { label: "45k+ Dev.to Followers", desc: "Technical writing and developer community" },
            { label: "AICTE APF 2025", desc: "Top 500 across India for AI product fellowship" },
          ].map((item, id) => (
            <BlurFade key={item.label} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
              <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm h-full">
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert space-y-3 mt-3">
            <p>
              I&apos;m <strong>Shaswat Raj</strong>, a full-stack developer and product builder from India. I build AI products, SaaS tools, developer utilities, indexing tools, content platforms, and automation systems. My strength is taking rough product ideas and turning them into working demos, MVPs, dashboards, APIs, and launch-ready websites quickly.
            </p>
            <p>
              I like working close to founders, solving unclear problems, experimenting fast, and shipping useful products in public. Coding since class 7, I&apos;ve built 500+ projects, maintain 50+ open-source packages with 1M+ annual npm downloads, and have 45k+ followers on Dev.to.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5.7}>
          <div className="mt-6 flex flex-col gap-2">
            <h3 className="text-sm font-semibold">GitHub Activity</h3>
            <img
              src="https://ghchart.rshah.org/SH20RAJ"
              alt="GitHub contribution chart of Shaswat Raj showing daily coding activity"
              className="w-full rounded-lg border bg-white p-2 dark:invert dark:hue-rotate-180"
              loading="lazy"
              width={800}
              height={120}
            />
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5.8}>
          <div className="mt-6 flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Activity & Proof</h3>
            <div className="flex flex-wrap gap-2">
              <a href="https://dev.to/sh20raj" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/dev.to-45k%20Followers-black?style=flat-square&logo=dev.to" alt="Shaswat Raj has 45k+ followers on Dev.to" className="rounded-md" loading="lazy" />
              </a>
              <a href="https://github.com/search?q=user%3ASH20RAJ+org%3Ash20raj-dump+org%3ALoveShade+org%3AINDIECDN+org%3Atechshade+org%3Amindos-labs+fork%3Atrue" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Fsearch%2Frepositories%3Fq%3Duser%3ASH20RAJ%2Borg%3Ash20raj-dump%2Borg%3ALoveShade%2Borg%3AINDIECDN%2Borg%3Atechshade%2Borg%3Amindos-labs%2Bfork%3Atrue&query=%24.total_count&label=Collective%20Repos&logo=github&color=black&style=flat-square" alt="Total number of GitHub repositories by Shaswat Raj" className="rounded-md" loading="lazy" />
              </a>
              <a href="https://www.npmjs.com/~sh20raj" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/npm-50%2B%20Packages-cb3837?style=flat-square&logo=npm" alt="Shaswat Raj maintains 50+ npm packages" className="rounded-md" loading="lazy" />
              </a>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="mt-4">
            <Link
              href="https://sh20raj.github.io/ideas/"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Explore my Startup & Project Ideas</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          </div>
        </BlurFade>
      </section>
      {/* Technical Depth Section */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Technical Depth</h2>
          </BlurFade>
          {[
            { category: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Responsive UI", "Landing Pages", "Dashboards", "SEO", "Performance"] },
            { category: "Backend", skills: ["Node.js", "Express", "API Design", "Auth", "Cron Jobs", "Webhooks", "Database Modeling", "Automation"] },
            { category: "AI", skills: ["OpenAI", "Claude", "Gemini APIs", "AI SDK", "RAG", "Embeddings", "Transcription", "MCP Tools", "Agent Workflows"] },
            { category: "Infrastructure", skills: ["Cloudflare Workers", "Vercel", "GitHub Actions", "Serverless", "Environment Management"] },
            { category: "Product", skills: ["MVP Building", "Landing Pages", "Onboarding Flows", "SEO Pages", "Analytics", "Waitlists", "Launch Copy"] },
          ].map((group) => (
            <BlurFade key={group.category} delay={BLUR_FADE_DELAY * 7.5}>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-1">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      {/* Featured Projects Section */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Products I&apos;ve Built
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AI tools, SaaS apps, developer utilities, and open-source projects — shipped and running in production.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.slice(0, 8).map((project, id) => (
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
            <div className="flex justify-center mt-8">
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View All Projects
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Ways I Can Help Section */}
      <section id="services">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ways I Can Help
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                  From landing pages to AI systems — I help founders and creators ship products fast.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {servicesHubData.services.map((service, id) => (
              <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <Link href={service.href} className="block h-full">
                  <Card className="hover:shadow-md transition-all h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex justify-center mt-8">
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                View All Services
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Recognition Section */}
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Recognition</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fellowships & Achievements</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Shortlisted for competitive fellowships and building products that create real impact.</p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                  <HackathonCard title={project.title} description={project.description} location={project.location} dates={project.dates} image={project.image} links={project.links} />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <BlurFade delay={BLUR_FADE_DELAY * 15.5}>
          <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
        </BlurFade>
        <div className="space-y-4">
          {[
            { q: "Who is Shaswat Raj?", a: "Shaswat Raj (SH20RAJ) is a full-stack developer and AI product builder from India. He builds SaaS apps, developer tools, AI products, and open-source packages. He has 500+ projects, 50+ npm packages, and 45k+ Dev.to followers." },
            { q: "What does Shaswat Raj build?", a: "AI tools (Kishan AI, Debo, AayeChup), SaaS apps (Scaleboard, Waitlist.js), developer utilities (30tools, IndexFast, FormGuard), content platforms, automation systems, and open-source npm packages." },
            { q: "What technologies does Shaswat Raj use?", a: "Next.js, React, TypeScript, Node.js, Python, Tailwind CSS, PostgreSQL, MongoDB, Cloudflare, Vercel, OpenAI, Claude, Gemini APIs, GitHub Actions, and more." },
            { q: "Is Shaswat Raj available for internships, freelance, or startup work?", a: "Yes. Shaswat is open to internships, startup work, freelance projects, AI product builds, open-source collaborations, and founder-led teams. Contact him at sh20raj@gmail.com." },
            { q: "Where can I see Shaswat Raj's projects?", a: "Visit the projects page on this portfolio, browse his GitHub at github.com/SH20RAJ, check his npm packages at npmjs.com/~sh20raj, or read his articles at dev.to/sh20raj." },
          ].map((faq, id) => (
            <BlurFade key={faq.q} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
              <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <h3 className="text-sm font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Want to build something fast?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m open to internships, startup work, freelance projects, AI product builds, open-source collaborations, and founder-led teams.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a href="mailto:sh20raj@gmail.com" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">Email Me</a>
                <a href="https://github.com/SH20RAJ" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">View GitHub</a>
                <a href="https://linkedin.com/in/sh20raj" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">Connect on LinkedIn</a>
                <a href="https://x.com/SH20RAJ" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">Follow on X</a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
