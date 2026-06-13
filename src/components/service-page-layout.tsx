import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

interface ServicePageLayoutProps {
  label: string;
  title: string;
  subtitle: string;
  whoIsThisFor: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedProjects: string[];
  testimonials?: { quote: string; name: string; role: string }[];
  children?: React.ReactNode;
}

export default function ServicePageLayout({
  label,
  title,
  subtitle,
  whoIsThisFor,
  deliverables,
  process,
  faq,
  relatedProjects,
  testimonials,
  children,
}: ServicePageLayoutProps) {
  const allProjects = [...DATA.projects, ...(DATA.projectsDump || [])];
  const related = relatedProjects.length > 0
    ? allProjects.filter((p) => relatedProjects.includes(p.title))
    : [];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <MarketplaceBanner />
      {/* Back button */}
      <section id="back">
        <div className="mx-auto w-full max-w-7xl px-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Services
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Hero */}
      <section id="hero">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                  {label}
                </div>
                <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl font-display">
                  {title}
                </h1>
                <p className="text-[var(--duo-wolf)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                  {subtitle}
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      {/* Page-specific content (packages, topics, best-fit criteria) */}
      {children && (
        <section id="details">
          <div className="space-y-12 w-full py-12">{children}</div>
        </section>
      )}
      {/* Who this is for */}
      <section id="who">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                  Who This Is For
                </div>
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                  Is this for you?
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {whoIsThisFor.map((item, id) => (
              <BlurFade
                key={id}
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              >
                <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-white p-4 text-sm text-[var(--duo-eel)] dark:bg-[var(--duo-eel)]/10">
                  {item}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="deliverables">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                  What You Get
                </div>
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                  Everything you need
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {deliverables.map((item, id) => (
                <BlurFade
                  key={id}
                  delay={BLUR_FADE_DELAY * 5 + id * 0.03}
                >
                  <div className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-[var(--duo-feather)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[var(--duo-eel)]">{item}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Process */}
      <section id="process">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                  Process
                </div>
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                  How we work together
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {process.map((item, id) => (
              <BlurFade
                key={id}
                delay={BLUR_FADE_DELAY * 7 + id * 0.05}
              >
                <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-white p-4 space-y-2 dark:bg-[var(--duo-eel)]/10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center size-8 rounded-full bg-[var(--duo-feather)] text-white text-sm font-bold">
                      {item.step}
                    </span>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--duo-wolf)]">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section id="work">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                    Recent Work
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                    Relevant projects
                  </h2>
                  <p className="text-[var(--duo-wolf)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Projects that demonstrate this type of work.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {related.map((project, id) => (
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
          </div>
        </section>
      )}

      {/* Social Proof */}
      {testimonials && testimonials.length > 0 && (
        <section id="testimonials">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                    Results
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                    What clients say
                  </h2>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[900px] mx-auto">
              {testimonials.map((t, id) => (
                <BlurFade
                  key={id}
                  delay={BLUR_FADE_DELAY * 10.1 + id * 0.05}
                >
                  <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-white p-5 space-y-3 dark:bg-[var(--duo-eel)]/10">
                    <p className="text-sm text-[var(--duo-eel)] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-[var(--duo-feather)]/10 flex items-center justify-center text-xs font-bold text-[var(--duo-feather)]">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-[var(--duo-wolf)]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                  FAQ
                </div>
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                  Common questions
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="max-w-[800px] mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, id) => (
                <BlurFade
                  key={id}
                  delay={BLUR_FADE_DELAY * 11 + id * 0.05}
                >
                  <AccordionItem value={`item-${id}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--duo-wolf)]">
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
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="rounded-2xl bg-[var(--duo-polar)]/50 p-8 text-center space-y-4 border-2 border-dashed border-[var(--duo-swan)] max-w-[800px] mx-auto">
              <h3 className="text-xl font-extrabold font-display">Ready to get started?</h3>
              <p className="text-sm text-[var(--duo-wolf)] max-w-md mx-auto">
                Send me a message with your idea, goals, and timeline.
                I&apos;ll get back to you within 24 hours.
              </p>
              <div className="text-xs text-[var(--duo-wolf)] max-w-lg mx-auto space-y-1.5 pt-4 border-t border-[var(--duo-swan)]">
                <p> Preferred fallback: Connect on <a href="https://linkedin.com/in/sh20raj" target="_blank" className="font-bold text-[var(--duo-feather)] hover:underline">LinkedIn</a>, with fallback to <a href="https://peerlist.io/sh20raj" target="_blank" className="font-bold text-[var(--duo-feather)] hover:underline">Peerlist</a>.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button asChild>
                  <Link href="mailto:sh20raj@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--duo-feather)] text-white font-extrabold shadow-[0_5px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-[5px] active:shadow-none">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild className="rounded-xl border-2 border-[var(--duo-swan)] shadow-[0_5px_0_var(--duo-swan)] font-extrabold transition-all hover:brightness-105 active:translate-y-[5px] active:shadow-none">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
div>
      </section>
    </main>
  );
}
