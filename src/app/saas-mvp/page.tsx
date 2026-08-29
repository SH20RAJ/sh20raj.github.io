import ServicePageLayout from "@/components/service-page-layout";
import { saasMvpConfig } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS MVP Development & Full-Stack Engineering | Shaswat Raj",
  description:
    "Engineering production-ready SaaS MVPs with Next.js, TypeScript, PostgreSQL, Auth, Stripe billing, and AI features. Built by Shaswat Raj.",
  alternates: {
    canonical: "https://sh20raj.github.io/saas-mvp",
  },
  openGraph: {
    type: "website",
    title: "SaaS MVP Development & Full-Stack Engineering | Shaswat Raj",
    description:
      "Engineering production-ready SaaS MVPs with Next.js, TypeScript, PostgreSQL, Auth, Stripe billing, and AI features.",
    url: "https://sh20raj.github.io/saas-mvp",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS MVP Development & Full-Stack Engineering | Shaswat Raj",
    description:
      "Engineering production-ready SaaS MVPs with Next.js, TypeScript, PostgreSQL, Auth, Stripe billing, and AI features.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

const mvpCapabilities = [
  {
    title: "Architecture & Data Modeling",
    description:
      "Database schema normalization (PostgreSQL / Redis), API route structure, and end-to-end type safety.",
  },
  {
    title: "Authentication & RBAC",
    description:
      "OAuth providers (Google, GitHub), session management, and granular role-based permissions.",
  },
  {
    title: "Billing & Subscriptions",
    description:
      "Stripe checkout sessions, customer portal management, webhook idempotency, and tier entitlement logic.",
  },
  {
    title: "AI & Automation Pipelines",
    description:
      "LLM integration, streaming responses, Model Context Protocol (MCP) tooling, and background worker queues.",
  },
  {
    title: "Admin Observability",
    description:
      "Administrative telemetry, user management consoles, audit logging, and real-time usage metrics.",
  },
  {
    title: "CI/CD & Edge Deployment",
    description:
      "Automated GitHub Actions deployment pipelines to Vercel and Cloudflare with environment isolation.",
  },
];

export default function SaasMvpPage() {
  return (
    <ServicePageLayout
      label={saasMvpConfig.label}
      title={saasMvpConfig.title}
      subtitle={saasMvpConfig.subtitle}
      whoIsThisFor={saasMvpConfig.whoIsThisFor}
      deliverables={saasMvpConfig.deliverables}
      process={saasMvpConfig.process}
      faq={saasMvpConfig.faq}
      relatedProjects={saasMvpConfig.relatedProjects}
      testimonials={saasMvpConfig.testimonials}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Technical Scope</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Core building blocks included in full-stack MVP architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mvpCapabilities.map((item) => (
            <div key={item.title} className="rounded-lg border border-border p-4 space-y-1">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
}
