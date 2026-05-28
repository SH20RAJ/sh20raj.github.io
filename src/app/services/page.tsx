import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { servicesHubData } from "@/data/services";
import { monetization } from "@/data/monetization";
import { featuredMarketplaceProducts } from "@/data/marketplace";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  LayoutIcon,
  CodeIcon,
  BotIcon,
  TrendingUpIcon,
  UsersIcon,
  RocketIcon,
  ArrowRightIcon,
  CheckCircle2,
  Youtube,
  Palette,
  ShoppingBag,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Services — Sprint Pricing for Next.js & AI Product Work",
  description:
    "Landing page sprints from $199, SaaS frontend sprints from $500, AI tool prototypes from $300, and ongoing agency overflow support — for founders, agencies, and YC-track startups.",
  alternates: { canonical: "https://sh20raj.github.io/services" },
  openGraph: {
    title: "Services — Shaswat Raj | Next.js & AI Sprint Packages",
    description:
      "Hire Shaswat Raj for Next.js landing pages, SaaS dashboards, AI tools, and agency overflow work. Fixed-scope sprints with clear timelines.",
    url: "https://sh20raj.github.io/services",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Services — Shaswat Raj | Next.js & AI Sprint Packages",
    description:
      "Hire Shaswat Raj for Next.js landing pages, SaaS dashboards, AI tools, and agency overflow work.",
    creator: "@SH20RAJ",
  },
};

const BLUR_FADE_DELAY = 0.04;

const iconMap: Record<string, any> = {
  layout: LayoutIcon,
  code: CodeIcon,
  bot: BotIcon,
  "trending-up": TrendingUpIcon,
  users: UsersIcon,
  rocket: RocketIcon,
  youtube: Youtube,
  palette: Palette,
};

const accentColors = [
  { bg: "bg-[var(--duo-feather)]/10", text: "text-[var(--duo-feather)]", hoverBg: "group-hover:bg-[var(--duo-feather)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-macaw)]/10", text: "text-[var(--duo-macaw)]", hoverBg: "group-hover:bg-[var(--duo-macaw)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-beetle)]/10", text: "text-[var(--duo-beetle)]", hoverBg: "group-hover:bg-[var(--duo-beetle)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-fox)]/10", text: "text-[var(--duo-fox)]", hoverBg: "group-hover:bg-[var(--duo-fox)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-bee)]/10", text: "text-[var(--duo-bee)]", hoverBg: "group-hover:bg-[var(--duo-bee)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-cardinal)]/10", text: "text-[var(--duo-cardinal)]", hoverBg: "group-hover:bg-[var(--duo-cardinal)]", hoverText: "group-hover:text-white" },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* Hero — bold, compact */}
      <section id="hero" className="pt-16 pb-12">
        <div className="mx-auto w-full max-w-5xl px-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="inline-block rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                Services
              </div>
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl max-w-[600px]">
                {servicesHubData.title}
              </h1>
              <p className="text-muted-foreground max-w-[500px] text-sm md:text-base leading-relaxed">
                {servicesHubData.subtitle}
              </p>
              <Link
                href="mailto:sh20raj@gmail.com"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--duo-feather)] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-[0_5px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-2"
              >
                Start a Project <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Services grid — colorful cards with icons */}
      <section id="services" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesHubData.services.map((service, id) => {
              const Icon = iconMap[service.icon] || CodeIcon;
              const accent = accentColors[id % accentColors.length];
              return (
                <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
                  <Link href={service.href} className="group block h-full">
                    <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className={`size-11 rounded-xl ${accent.bg} flex items-center justify-center mb-3 ${accent.hoverBg} ${accent.hoverText} transition-all duration-300`}>
                        <Icon className={`size-5 ${accent.text} ${accent.hoverText} transition-colors`} />
                      </div>
                      <h3 className="font-bold text-sm mb-1 group-hover:text-[var(--duo-feather)] transition-colors">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                      <span className={`inline-flex items-center gap-1 text-xs font-bold mt-3 ${accent.text}`}>
                        Learn more <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who I help — compact grid */}
      <section id="who" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-extrabold tracking-tight text-center">Who I Help</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicesHubData.whoIHelp.map((item, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
                <div className="flex items-start gap-3 rounded-xl border-2 border-[var(--duo-swan)] bg-card p-4 shadow-[0_2px_0_var(--duo-swan)]">
                  <CheckCircle2 className="size-4 text-[var(--duo-feather)] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Process — horizontal steps */}
      <section id="process" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-extrabold tracking-tight text-center">How It Works</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesHubData.process.map((item, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
                <div className="relative rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] text-center space-y-2">
                  <span className="inline-flex items-center justify-center size-10 rounded-full bg-[var(--duo-feather)] text-white text-sm font-extrabold mx-auto">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section id="work" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold tracking-tight">Recent Work</h2>
              <Link href="/projects" className="group inline-flex items-center gap-1 text-sm font-bold text-[var(--duo-feather)] hover:underline">
                View all <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.projects.slice(0, 4).map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
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
        </div>
      </section>

      {/* Pricing — premium package cards */}
      <section id="pricing" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="text-center space-y-2">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--duo-feather)]">
                Packages
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Sprint pricing</h2>
              <p className="text-sm text-muted-foreground max-w-[500px] mx-auto">
                Fixed-scope sprints with clear deliverables and timelines. Custom quotes available after a quick brief.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(servicesHubData as any).packages?.map((pkg: any, id: number) => {
              const gumroadUrl = pkg.gumroadKey ? monetization.gumroad[pkg.gumroadKey as keyof typeof monetization.gumroad] : "";
              return (
              <BlurFade key={pkg.name} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-0.5 transition-all h-full flex flex-col">
                  <h3 className="font-extrabold text-base mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl font-extrabold text-[var(--duo-feather)]">{pkg.price}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{pkg.timeline}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{pkg.description}</p>
                  <ul className="space-y-1.5 text-xs text-foreground flex-1">
                    {pkg.includes.map((inc: string) => (
                      <li key={inc} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-[var(--duo-feather)] mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-[var(--duo-swan)] text-[11px] text-muted-foreground">
                    <span className="font-bold text-foreground">Best for:</span> {pkg.bestFor}
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    {gumroadUrl ? (
                      <a
                        href={gumroadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[var(--duo-feather)] px-5 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_3px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-0.5 active:shadow-none"
                      >
                        <ShoppingBag className="size-3.5" /> Buy Now
                      </a>
                    ) : null}
                    <Link
                      href={monetization.calcom ? "/book" : `mailto:sh20raj@gmail.com?subject=${encodeURIComponent(pkg.name)}`}
                      className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-full ${gumroadUrl ? "border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground text-[var(--duo-eel)] shadow-[0_3px_0_var(--duo-swan)]" : "bg-[var(--duo-feather)] text-white shadow-[0_3px_0_var(--duo-feather-shadow)]"} px-5 text-[11px] font-bold uppercase tracking-wider transition-all hover:brightness-105 active:translate-y-0.5 active:shadow-none`}
                    >
                      <Calendar className="size-3.5" /> {monetization.calcom ? "Book a Call" : "Book this sprint"}
                    </Link>
                  </div>
                </div>
              </BlurFade>
            );})}
          </div>

          {/* Small task CTA */}
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="rounded-2xl border-2 border-[var(--duo-feather)]/30 bg-[var(--duo-feather)]/5 p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 space-y-1.5">
                <h3 className="text-base font-extrabold">Not ready for a full project?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Send me one small task — a landing page section, dashboard screen, responsive fix, AI API integration, or frontend bug. I&apos;ll deliver fast and you can decide if we continue.
                </p>
              </div>
              <Link
                href="mailto:sh20raj@gmail.com?subject=Small%20task"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none whitespace-nowrap"
              >
                Send a Small Task
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Marketplace cross-sell */}
      <section id="marketplace-strip" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-end justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--duo-macaw)] mb-2">
                  Lower-ticket
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  Not ready for a full sprint?
                </h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                  Grab a ready-made template, playbook, or workflow pack instead — instant download.
                </p>
              </div>
              <Link
                href="/marketplace"
                className="hidden md:inline-flex group items-center gap-1 text-sm font-bold text-[var(--duo-feather)] hover:underline"
              >
                See all <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredMarketplaceProducts().map((p, id) => (
              <BlurFade key={p.name} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
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
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — compact accordion */}
      <section id="faq" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-extrabold tracking-tight text-center">FAQ</h2>
          </BlurFade>
          <div className="max-w-[700px] mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {servicesHubData.faq.map((item, id) => (
                <AccordionItem key={id} value={`item-${id}`} className="border-b border-[var(--duo-swan)]">
                  <AccordionTrigger className="text-sm font-bold text-left hover:no-underline hover:text-[var(--duo-feather)] transition-colors py-3">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA — green banner */}
      <section id="cta" className="pb-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="relative overflow-hidden rounded-2xl bg-[var(--duo-feather)] p-10 text-center text-white">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-extrabold text-white">Let&apos;s build something</h3>
                <div className="text-white/95 text-xs max-w-lg mx-auto space-y-2 leading-relaxed">
                  <p>Send me a message with your idea, goals, and timeline. I&apos;ll get back to you within 24 hours.</p>
                  <div className="pt-2 border-t border-white/20 text-[11px] space-y-1">
                    <p> Preferred fallback: Connect on <a href="https://linkedin.com/in/sh20raj" target="_blank" className="font-bold text-white underline hover:text-zinc-200">LinkedIn</a>, with fallback to <a href="https://peerlist.io/sh20raj" target="_blank" className="font-bold text-white underline hover:text-zinc-200">Peerlist</a>.</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="mailto:sh20raj@gmail.com"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
                  >
                    Get in Touch
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
