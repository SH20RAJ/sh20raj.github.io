import ServicePageLayout from "@/components/service-page-layout";
import { foundingEngineerConfig } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding Engineer & Technical Lead | Shaswat Raj",
  description:
    "End-to-end technical execution for high-velocity startups. Architecting MVPs, AI platforms, distributed cloud backends, and responsive frontends.",
  alternates: { canonical: "https://sh20raj.github.io/founding-engineer" },
  openGraph: {
    title: "Founding Engineer & Technical Lead | Shaswat Raj",
    description:
      "End-to-end technical execution for high-velocity startups. Architecting MVPs, AI platforms, distributed cloud backends, and responsive frontends.",
    url: "https://sh20raj.github.io/founding-engineer",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founding Engineer & Technical Lead | Shaswat Raj",
    description:
      "End-to-end technical execution for high-velocity startups.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function FoundingEngineerPage() {
  return (
    <ServicePageLayout
      label={foundingEngineerConfig.label}
      title={foundingEngineerConfig.title}
      subtitle={foundingEngineerConfig.subtitle}
      whoIsThisFor={foundingEngineerConfig.whoIsThisFor}
      deliverables={foundingEngineerConfig.deliverables}
      process={foundingEngineerConfig.process}
      faq={foundingEngineerConfig.faq}
      relatedProjects={foundingEngineerConfig.relatedProjects}
      testimonials={foundingEngineerConfig.testimonials}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Partnership Criteria</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Core principles for high-velocity, high-impact product collaboration.
          </p>
        </div>

        <div className="space-y-3">
          {foundingEngineerConfig.bestFitCriteria?.map((criteria, id) => (
            <div key={id} className="flex items-start gap-3 rounded-lg border border-border p-4">
              <span className="inline-flex items-center justify-center size-6 rounded-full bg-foreground text-background text-xs font-bold shrink-0 mt-0.5">
                {id + 1}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{criteria}</p>
            </div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
}
