import ServicePageLayout from "@/components/service-page-layout";
import { landingPagesConfig } from "@/data/services";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title:
    "Landing Page Developer for Startups, SaaS & AI Tools — Shaswat Raj",
  description:
    "Get a fast, clean, conversion-focused landing page for your startup, SaaS product, AI tool, agency, or creator brand.",
  alternates: {
    canonical: "https://sh20raj.github.io/landing-pages",
  },
  openGraph: {
    title:
      "Landing Page Developer for Startups, SaaS & AI Tools — Shaswat Raj",
    description:
      "Get a fast, clean, conversion-focused landing page for your startup, SaaS product, AI tool, agency, or creator brand.",
    url: "https://sh20raj.github.io/landing-pages",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title:
      "Landing Page Developer for Startups, SaaS & AI Tools — Shaswat Raj",
    description:
      "Get a fast, clean, conversion-focused landing page for your startup, SaaS product, AI tool, agency, or creator brand.",
    creator: "@SH20RAJ",
  },
};

export default function LandingPagesPage() {
  const packages = [
    {
      name: "Starter",
      price: "$199",
      description:
        "For idea validation, waitlists, personal brands, and simple product launches.",
      features: [
        "Single page design",
        "Responsive layout",
        "Basic SEO setup",
        "Contact or waitlist form",
        "1 revision round",
        "3-day delivery",
      ],
      recommended: false,
    },
    {
      name: "Startup",
      price: "$499",
      description:
        "For SaaS, AI tools, agencies, and serious product launches.",
      features: [
        "Multi-section landing page",
        "Scroll animations",
        "Analytics integration",
        "Open Graph image setup",
        "A/B ready structure",
        "3 revision rounds",
        "7-day delivery",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      price: "$999",
      description:
        "For full launch pages with copy, SEO, analytics, waitlist, extra sections, and polish.",
      features: [
        "Custom design system",
        "CMS integration",
        "A/B testing setup",
        "Performance optimization",
        "Priority support",
        "Unlimited revisions",
        "14-day delivery",
      ],
      recommended: false,
    },
  ];

  return (
    <ServicePageLayout
      label={landingPagesConfig.label}
      title={landingPagesConfig.title}
      subtitle={landingPagesConfig.subtitle}
      whoIsThisFor={landingPagesConfig.whoIsThisFor}
      deliverables={landingPagesConfig.deliverables}
      process={landingPagesConfig.process}
      faq={landingPagesConfig.faq}
      relatedProjects={landingPagesConfig.relatedProjects}
    >
      {/* Ready-made Templates Section */}
      <div className="space-y-8 py-12 border-t mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="inline-block rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Templates
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready-made Landing Pages
            </h2>
            <p className="text-muted-foreground max-w-[500px] text-sm">
              Don&apos;t want to wait? Grab a template and launch in minutes.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              id: "2056211450071490862",
              title: "Growth Agency Landing Page",
              description: "State-of-the-art Next.js landing page for growth agencies and startups. Turns visitors into paying clients.",
              demo: "https://growth-agency.vercel.app",
              purchase: "https://sh20raj.gumroad.com/",
              image: "https://public-files.gumroad.com/usds0aocmk7gfjyymbkl9rq2dr5l",
            },
            {
              id: "2056232623673074108",
              title: "Aero UI – Landing Page Template",
              description: "Premium landing page template for developers who value speed, aesthetics, and clean code.",
              demo: "https://aero-ui.vercel.app",
              purchase: "https://sh20raj.gumroad.com/",
              image: "https://public-files.gumroad.com/h8nwwscdx5wh7tpv0og4zq3agl84",
            },
            {
              id: "2056280867430142035",
              title: "Nova Landing Page Template",
              description: "Modern, conversion-focused landing page template. Deploy in minutes.",
              demo: "#",
              purchase: "https://sh20raj.gumroad.com/",
              image: "https://public-files.gumroad.com/eh8t8cxvdibqy083kz628vt5wax0",
            },
          ].map((template, id) => (
            <BlurFade key={template.id} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <div className="group rounded-xl border-2 border-[var(--duo-swan)] bg-card overflow-hidden shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <a
                      href={`https://twitter.com/ShaswatBuilds/status/${template.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg"
                    >
                      <svg className="size-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-[var(--duo-feather)] transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                    {template.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={template.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex h-8 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white text-xs font-bold text-[var(--duo-eel)] transition-all hover:brightness-105 active:translate-y-1"
                    >
                      Demo
                    </a>
                    <a
                      href={template.purchase}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex h-8 items-center justify-center rounded-full bg-[var(--duo-feather)] text-xs font-bold text-white shadow-[0_3px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="text-center">
            <Link href="/marketplace" className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--duo-feather)] hover:underline">
              View all templates <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </ServicePageLayout>
  );
}
