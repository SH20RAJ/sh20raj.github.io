import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRightIcon,
  CheckCircle2,
  Palette,
} from "lucide-react";
import type { Metadata } from "next";
import { designStudioCategories } from "@/data/design-studio";
import { notFound } from "next/navigation";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  return designStudioCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = designStudioCategories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.title} | AI Design Studio — Shaswat Raj`,
    description: category.description,
    alternates: {
      canonical: `https://sh20raj.github.io/design-studio/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} | AI Design Studio — Shaswat Raj`,
      description: category.description,
      url: `https://sh20raj.github.io/design-studio/${category.slug}`,
      siteName: "Shaswat Raj Portfolio",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${category.title} | AI Design Studio — Shaswat Raj`,
      description: category.description,
      creator: "@SH20RAJ",
    },
  };
}

export default async function DesignCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = designStudioCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Back button */}
      <section id="back">
        <div className="mx-auto w-full max-w-7xl px-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link
              href="/design-studio"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Design Categories
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
                  {category.shortTitle}
                </div>
                <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl font-display">
                  {category.title}
                </h1>
                <p className="text-[var(--duo-wolf)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                  {category.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href={`mailto:sh20raj@gmail.com?subject=${encodeURIComponent(category.title + " Inquiry")}`}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-1.5"
                >
                  Get a Design Pack <ArrowRightIcon className="size-3.5" />
                </Link>
                <Link
                  href="#samples"
                  className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
                >
                  View Sample Work
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Who is this for */}
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
            {category.audience.map((item, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
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
              {category.deliverables.map((item, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 5 + id * 0.03}>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-[var(--duo-feather)]">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span className="text-[var(--duo-eel)]">{item}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Samples */}
      <section id="samples">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                  Sample Work
                </div>
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                  Recent designs
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[900px] mx-auto">
            {category.samples.map((sample, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
                <div className="group rounded-xl border-2 border-[var(--duo-swan)] bg-card overflow-hidden shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-[var(--duo-polar)]/60 flex items-center justify-center">
                    <div className="text-center p-6 space-y-2">
                      <Palette className="size-10 text-[var(--duo-feather)]/30 mx-auto" />
                      <p className="text-sm font-bold text-muted-foreground">{sample.title}</p>
                      <p className="text-xs text-muted-foreground/70">{sample.niche}</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm group-hover:text-[var(--duo-feather)] transition-colors">
                        {sample.title}
                      </h3>
                      <Badge className="bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] border-0 text-[10px] font-bold">
                        {sample.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{sample.niche}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sample.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-[var(--duo-polar)]/80 px-2 py-0.5 text-[10px] font-bold text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-sm font-bold">
                  Pricing
                </div>
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
                  Design packages
                </h2>
                <p className="text-[var(--duo-wolf)] max-w-[400px] mx-auto text-sm">
                  Starting from {category.startingPrice}. Custom quotes available.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-[900px] mx-auto">
            {category.packages.map((pkg, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                <div className={`rounded-xl border-2 ${pkg.recommended ? "border-[var(--duo-feather)]" : "border-[var(--duo-swan)]"} bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] h-full flex flex-col ${pkg.recommended ? "ring-1 ring-[var(--duo-feather)]/20" : ""}`}>
                  {pkg.recommended && (
                    <Badge className="w-fit mb-3 bg-[var(--duo-feather)] text-white border-0 text-[10px] font-bold uppercase tracking-wider">
                      Recommended
                    </Badge>
                  )}
                  <h3 className="font-extrabold text-base mb-1">{pkg.name}</h3>
                  <p className="text-2xl font-extrabold text-[var(--duo-feather)] mb-2">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mb-4">{pkg.description}</p>
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="size-3.5 text-[var(--duo-feather)] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`mailto:sh20raj@gmail.com?subject=${encodeURIComponent(category.title + " - " + pkg.name + " Pack")}`}
                    className={`mt-5 inline-flex h-9 items-center justify-center rounded-full ${pkg.recommended ? "bg-[var(--duo-feather)] text-white shadow-[0_3px_0_var(--duo-feather-shadow)]" : "border-2 border-[var(--duo-swan)] text-[var(--duo-eel)] dark:text-foreground shadow-[0_3px_0_var(--duo-swan)]"} px-5 text-xs font-bold uppercase tracking-wider transition-all hover:brightness-105 active:translate-y-1 active:shadow-none`}
                  >
                    Get Started
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
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
            {[
              { step: "01", title: "Brief", description: `Share your brand, target audience, and what ${category.shortTitle.toLowerCase()} you need.` },
              { step: "02", title: "Design", description: "I create initial concepts with clean, premium visuals matched to your brand." },
              { step: "03", title: "Refine", description: "We review, give feedback, and polish the designs to perfection." },
              { step: "04", title: "Deliver", description: `I export all formats and hand off your ${category.shortTitle.toLowerCase()} ready to use.` },
            ].map((item, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-white p-4 space-y-2 dark:bg-[var(--duo-eel)]/10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center size-8 rounded-full bg-[var(--duo-feather)] text-white text-sm font-bold">
                      {item.step}
                    </span>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--duo-wolf)]">{item.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
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
              {category.faqs.map((item, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
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
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="rounded-2xl bg-[var(--duo-polar)]/50 p-8 text-center space-y-4 border-2 border-dashed border-[var(--duo-swan)] max-w-[800px] mx-auto">
              <h3 className="text-xl font-extrabold font-display">Ready to get started?</h3>
              <p className="text-sm text-[var(--duo-wolf)] max-w-md mx-auto">
                Send me a message with your brand details and what you need.
                I&apos;ll get back to you within 24 hours with a custom quote.
              </p>
              <div className="text-xs text-[var(--duo-wolf)] max-w-lg mx-auto space-y-1.5 pt-4 border-t border-[var(--duo-swan)]">
                <p> Preferred fallback: Connect on <a href="https://linkedin.com/in/sh20raj" target="_blank" className="font-bold text-[var(--duo-feather)] hover:underline">LinkedIn</a>, with fallback to <a href="https://peerlist.io/sh20raj" target="_blank" className="font-bold text-[var(--duo-feather)] hover:underline">Peerlist</a>.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  href={`mailto:sh20raj@gmail.com?subject=${encodeURIComponent(category.title + " Inquiry")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--duo-feather)] text-white font-extrabold shadow-[0_5px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-[5px] active:shadow-none"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/design-studio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--duo-swan)] shadow-[0_5px_0_var(--duo-swan)] font-extrabold transition-all hover:brightness-105 active:translate-y-[5px] active:shadow-none"
                >
                  View All Categories
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
