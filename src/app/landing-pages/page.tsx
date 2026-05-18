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
      <div className="space-y-12 py-12 border-t mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                Shop
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready-made Landing Pages
              </h2>
              <p className="text-muted-foreground max-w-[600px]">
                Don't want to wait? Grab a high-converting template and launch in minutes.
              </p>
            </div>
          </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto">
          {[
            {
              title: "SaaS Starter Kit",
              price: "$49",
              type: "Paid",
              image: "https://socialify.git.ci/SH20RAJ/30tools/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
              link: "/marketplace",
            },
            {
              title: "AI Waitlist Template",
              price: "Free",
              type: "Free",
              image: "https://socialify.git.ci/SH20RAJ/debo/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
              link: "/marketplace",
            },
            {
              title: "Minimal Portfolio Pro",
              price: "$29",
              type: "Paid",
              image: "https://socialify.git.ci/SH20RAJ/index-fast/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
              link: "/marketplace",
            },
            {
              title: "Clean Agency Theme",
              price: "$39",
              type: "Paid",
              image: "https://socialify.git.ci/shade-solutions/mcp-pure/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
              link: "/marketplace",
            },
          ].map((item, id) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <div className="group relative rounded-xl border-2 border-[var(--duo-swan)] bg-card overflow-hidden hover:shadow-xl transition-all duration-300 shadow-[0_2px_0_var(--duo-swan)]">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <Badge variant={item.type === "Free" ? "secondary" : "default"}>{item.price}</Badge>
                  </div>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href={item.link}>View Details</Link>
                  </Button>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex justify-center mt-8">
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/marketplace">
                View All Templates <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </ServicePageLayout>
  );
}
