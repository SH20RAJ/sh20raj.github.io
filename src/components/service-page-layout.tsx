import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

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
    <main className="flex flex-col min-h-[100dvh] pb-16">
      {/* Header */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Services
          </Link>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{label}</p>
          <h1 className="text-xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{subtitle}</p>
        </div>
      </section>

      {/* Page-specific content */}
      {children && (
        <section className="py-10 border-b border-border">
          <div className="mx-auto w-full max-w-2xl px-6">{children}</div>
        </section>
      )}

      {/* Who this is for */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-4">Who this is for</h2>
          <div className="space-y-2">
            {whoIsThisFor.map((item, id) => (
              <div key={id} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="size-4 text-foreground mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-4">What you get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {deliverables.map((item, id) => (
              <div key={id} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="size-4 text-foreground mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-4">Process</h2>
          <div className="space-y-4">
            {process.map((item, id) => (
              <div key={id} className="flex items-start gap-3">
                <span className="shrink-0 size-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="py-10 border-b border-border">
          <div className="mx-auto w-full max-w-2xl px-6">
            <h2 className="text-lg font-bold tracking-tight mb-4">Related work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((project) => (
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
      )}

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-10 border-b border-border">
          <div className="mx-auto w-full max-w-2xl px-6">
            <h2 className="text-lg font-bold tracking-tight mb-4">What clients say</h2>
            <div className="space-y-4">
              {testimonials.map((t, id) => (
                <div key={id} className="rounded-lg border border-border p-4">
                  <p className="text-sm text-muted-foreground italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="size-6 rounded-full bg-accent text-xs font-medium flex items-center justify-center">
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="text-xs font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-4">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, id) => (
              <AccordionItem key={id} value={`item-${id}`} className="border-b border-border">
                <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-3">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 text-center">
          <h2 className="text-lg font-bold tracking-tight">Ready to get started?</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Send me a message with your idea, goals, and timeline.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="mailto:sh20raj@gmail.com"
              className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
