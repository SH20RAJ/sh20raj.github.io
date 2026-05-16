import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { servicesHubData } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Services",
  description:
    "Services for founders, startups, and creators — landing pages, SaaS MVPs, AI automation, growth systems, mentorship, and founding engineer engagements.",
  alternates: { canonical: "https://sh20raj.github.io/services" },
  openGraph: {
    title: "Services — Shaswat Raj | Landing Pages, SaaS MVPs & AI Automation",
    description:
      "Hire Shaswat Raj for landing pages, SaaS MVPs, AI automation, growth systems, mentorship, and founding engineer work.",
    url: "https://sh20raj.github.io/services",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Services — Shaswat Raj | Landing Pages, SaaS MVPs & AI Automation",
    description:
      "Hire Shaswat Raj for landing pages, SaaS MVPs, AI automation, growth systems, mentorship, and founding engineer work.",
    creator: "@SH20RAJ",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Hero */}
      <section id="hero">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Services
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {servicesHubData.title}
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                  {servicesHubData.subtitle}
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Services grid */}
      <section id="services">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  What I Offer
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Choose what you need
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {servicesHubData.services.map((service, id) => (
              <BlurFade
                key={service.title}
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              >
                <Link href={service.href} className="block h-full">
                  <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-all h-full flex flex-col">
                    <h3 className="font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      {service.description}
                    </p>
                    <span className="text-sm text-primary font-medium mt-4 hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Who I help */}
      <section id="who">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Who I Help
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Built for builders
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {servicesHubData.whoIHelp.map((item, id) => (
              <BlurFade
                key={id}
                delay={BLUR_FADE_DELAY * 5 + id * 0.05}
              >
                <div className="rounded-lg border bg-card p-4 space-y-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  How we work together
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {servicesHubData.process.map((item, id) => (
              <BlurFade
                key={id}
                delay={BLUR_FADE_DELAY * 7 + id * 0.05}
              >
                <div className="rounded-lg border bg-card p-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center size-8 rounded-full bg-foreground text-background text-sm font-bold">
                      {item.step}
                    </span>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section id="work">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Recent Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Projects I&apos;ve built
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of products, tools, and platforms I&apos;ve shipped.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.slice(0, 4).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 9 + id * 0.05}
              >
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
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex justify-center mt-8">
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                View All Projects
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Pricing starting points */}
      <section id="pricing">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Starting points
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                  Every project is different. These are starting points — I&apos;ll give you a custom quote after we discuss your needs.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {[
              { service: "Landing Pages", price: "From $199", desc: "Single-page to premium launch pages" },
              { service: "SaaS MVPs", price: "Custom", desc: "Scoped after discussing your product" },
              { service: "AI Tools", price: "Custom", desc: "Depends on complexity and integrations" },
              { service: "Growth Systems", price: "From $299", desc: "Content, SEO, and launch systems" },
              { service: "Mentorship", price: "Per session", desc: "1:1 calls and code reviews" },
              { service: "Founding Engineer", price: "Flexible", desc: "Equity, retainer, or project-based" },
            ].map((item, id) => (
              <BlurFade
                key={id}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <div className="rounded-lg border bg-card p-4 flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm">{item.service}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="text-sm font-medium text-primary whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Common questions
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="max-w-[800px] mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {servicesHubData.faq.map((item, id) => (
                <BlurFade
                  key={id}
                  delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                >
                  <AccordionItem value={`item-${id}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </BlurFade>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="rounded-2xl bg-muted/50 p-8 text-center space-y-4 border border-dashed max-w-[800px] mx-auto">
              <h3 className="text-xl font-bold">Let&apos;s build something</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Send me a message with your idea, goals, and timeline.
                I&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="mailto:sh20raj@gmail.com">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
