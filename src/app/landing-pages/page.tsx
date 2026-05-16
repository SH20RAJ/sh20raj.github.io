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
      {/* Packages Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Packages
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Choose your package
            </h2>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-[800px] mx-auto">
        {packages.map((pkg, id) => (
          <BlurFade
            key={pkg.name}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <div
              className={`rounded-lg border bg-card p-6 space-y-4 ${
                pkg.recommended ? "border-primary" : ""
              }`}
            >
              {pkg.recommended && (
                <Badge variant="default">Recommended</Badge>
              )}
              <h3 className="font-bold text-lg">{pkg.name}</h3>
              <p className="text-3xl font-bold">{pkg.price}</p>
              <p className="text-sm text-muted-foreground">
                {pkg.description}
              </p>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="mt-0.5 text-green-600 dark:text-green-400">
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
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="mailto:sh20raj@gmail.com">Get Started</Link>
              </Button>
            </div>
          </BlurFade>
        ))}
      </div>
    </ServicePageLayout>
  );
}
