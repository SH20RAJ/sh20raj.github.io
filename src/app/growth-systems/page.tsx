import ServicePageLayout from "@/components/service-page-layout";
import { growthSystemsConfig } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmatic SEO, Growth Architecture & Indexing | Shaswat Raj",
  description:
    "Programmatic SEO pipelines, instant indexing engines, technical marketing infrastructure, and organic growth systems engineered by Shaswat Raj.",
  alternates: { canonical: "https://sh20raj.github.io/growth-systems" },
  openGraph: {
    title: "Programmatic SEO, Growth Architecture & Indexing | Shaswat Raj",
    description:
      "Programmatic SEO pipelines, instant indexing engines, technical marketing infrastructure, and organic growth systems.",
    url: "https://sh20raj.github.io/growth-systems",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmatic SEO, Growth Architecture & Indexing | Shaswat Raj",
    description:
      "Programmatic SEO pipelines, instant indexing engines, technical marketing infrastructure, and organic growth systems.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

const growthDeliverables = [
  {
    title: "Programmatic SEO & Indexing",
    items: [
      "Dynamic static generation for 100K+ page architectures",
      "Real-time Google, Bing & IndexNow API pipelines",
      "Semantic keyword hierarchy & metadata automation",
      "Core Web Vitals and crawl efficiency optimization",
    ],
  },
  {
    title: "Technical Marketing Engines",
    items: [
      "Automated social distribution workflows",
      "High-converting landing page variants",
      "Developer documentation and interactive sandboxes",
      "Analytics telemetry and conversion tracking",
    ],
  },
];

export default function GrowthSystemsPage() {
  return (
    <ServicePageLayout
      label={growthSystemsConfig.label}
      title={growthSystemsConfig.title}
      subtitle={growthSystemsConfig.subtitle}
      whoIsThisFor={growthSystemsConfig.whoIsThisFor}
      deliverables={growthSystemsConfig.deliverables}
      process={growthSystemsConfig.process}
      faq={growthSystemsConfig.faq}
      relatedProjects={growthSystemsConfig.relatedProjects}
      testimonials={growthSystemsConfig.testimonials}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Growth Architecture Deliverables</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Data-driven engineering systems for high organic distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {growthDeliverables.map((group) => (
            <div key={group.title} className="rounded-lg border border-border p-4 space-y-3">
              <h3 className="font-medium text-sm">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-foreground shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
}
