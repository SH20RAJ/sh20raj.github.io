import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Zap, TrendingUp, Cpu, Server, ShieldCheck, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SopKit (formerly 30tools) Case Study — Scaling 605+ Tools to 4.3M+ Requests",
  description:
    "Engineering case study on SopKit (formerly 30tools): 605+ client-side WebAssembly tools, programmatic SEO architecture, sub-millisecond execution, and migration to a sustainable open-source domain.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/sopkit",
  },
  openGraph: {
    title: "SopKit (formerly 30tools) Case Study — Scaling 605+ Tools to 4.3M+ Requests | Shaswat Raj",
    description:
      "Engineering case study on SopKit (formerly 30tools): 605+ client-side WebAssembly tools, programmatic SEO architecture, and scaling to 4.3M+ requests.",
    url: "https://sh20raj.github.io/projects/sopkit",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://sopkit.github.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SopKit (formerly 30tools) Case Study — Scaling 605+ Tools to 4.3M+ Requests",
    description:
      "Engineering case study on SopKit (formerly 30tools): 605+ client-side WebAssembly tools, programmatic SEO architecture, and scaling to 4.3M+ requests.",
    creator: "@SH20RAJ",
    images: ["https://sopkit.github.io/og-image.jpg"],
  },
};

export default function SopKitCaseStudy() {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      {/* Header */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Back to Projects
          </Link>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase bg-accent text-foreground px-2 py-0.5 rounded">
                Case Study
              </span>
              <span className="text-xs text-muted-foreground">2024 – Present</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              SopKit — Scaling 605+ Client-Side Tools to 4.3M+ Requests with Programmatic SEO
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              How a privacy-first, zero-upload web utility suite scaled to 4.3M+ requests, 213K+ monthly active users, and 500K+ search impressions — and why we transitioned from 30tools.com to a sustainable GitHub domain.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5">
            <a
              href="https://sopkit.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
            >
              <Globe className="size-3.5" /> Visit sopkit.github.io
            </a>
            <a
              href="https://github.com/SopKit/sopkit.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-3.5" /> GitHub Repository
            </a>
            <a
              href="https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-3.5" /> Growth Verification
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">605+</p>
              <p className="text-xs text-muted-foreground">Client-Side Tools</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">4.3M+</p>
              <p className="text-xs text-muted-foreground">30-Day Requests</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">213K+</p>
              <p className="text-xs text-muted-foreground">Monthly Active Users</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">0</p>
              <p className="text-xs text-muted-foreground">Server Uploads / Data Stored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-6 border-b border-border bg-accent/20">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="rounded-lg border border-border overflow-hidden shadow-sm">
            <img
              src="https://sopkit.github.io/og-image.jpg"
              alt="SopKit — 605+ Free Online Tools (100% Client-Side & Private)"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-2 text-center">
            SopKit Architecture: 605+ free utilities running 100% locally in browser V8 sandboxes via WebAssembly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-12">
          {/* Section 1: The Sustainable Domain Transition */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <RefreshCw className="size-4 text-foreground" /> 1. The Migration: Why We Switched to a Sustainable Domain
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Originally launched and scaled as <strong className="text-foreground">30tools.com</strong>, the platform rapidly expanded beyond its initial 30 utilities to over 600 specialized developer, creator, and productivity tools.
            </p>
            <div className="rounded-lg border border-border p-4 bg-card space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Why `sopkit.github.io`?</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We intentionally transitioned the primary platform to <a href="https://sopkit.github.io/" target="_blank" rel="noopener noreferrer" className="text-foreground underline">https://sopkit.github.io/</a> to guarantee <strong className="text-foreground">permanent, sustainable, community-backed open-source hosting</strong>.
              </p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 pl-1">
                <li>
                  <strong className="text-foreground">Zero Rent-Seeking / Domain Friction:</strong> Eliminates recurring private TLD expiration vulnerabilities, locking in perpetual open access for global students and indie developers.
                </li>
                <li>
                  <strong className="text-foreground">Permanent Edge Reliability:</strong> Leveraging GitHub Pages and Cloudflare Global Anycast guarantees 99.99% uptime with global edge distribution and zero server compute bills.
                </li>
                <li>
                  <strong className="text-foreground">True Open-Source Transparency:</strong> The codebase, issue tracker, and tool definitions are openly inspectable and verifiable by anyone.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: The Core Problem */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Zap className="size-4 text-foreground" /> 2. The Problem with Modern Tool Sites
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most conventional tool sites (PDF converters, image compressors, JSON formatters, code diff checkers) suffer from fundamental engineering anti-patterns:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">Mandatory Cloud Uploads:</strong> They transmit private PDFs, government IDs, and internal API keys to remote backend servers for trivial transformations that modern browser engines can execute locally.
              </li>
              <li>
                <strong className="text-foreground">High Latency &amp; Network Overhead:</strong> Round-trip server transfers introduce seconds of latency for operations that WebAssembly executes in microseconds.
              </li>
              <li>
                <strong className="text-foreground">Friction &amp; Paywalls:</strong> Aggressive signup gates, usage quotas, and bloated ad trackers degrade user productivity.
              </li>
            </ul>
          </section>

          {/* Section 3: Architecture — 100% Client-Side Sandbox */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Cpu className="size-4 text-foreground" /> 3. Zero-Knowledge Execution Architecture
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SopKit enforces a strict <strong className="text-foreground">Frictionless Access &amp; Zero-Knowledge Protocol</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-border p-3 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <ShieldCheck className="size-3.5 text-emerald-500" /> V8 / WASM Sandbox
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Image compression, PDF merging, video processing, and syntax transformations execute directly on the user&apos;s device hardware via compiled WebAssembly modules.
                </p>
              </div>
              <div className="rounded-lg border border-border p-3 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <Server className="size-3.5 text-blue-500" /> Zero Data Collection
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Files, inputs, and payloads never traverse or persist on cloud servers. 100% data residency is preserved on the client device.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Programmatic SEO & Traffic Scale */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <TrendingUp className="size-4 text-foreground" /> 4. Programmatic SEO Engine &amp; Organic Growth
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Traffic grew completely organically with <strong className="text-foreground">$0 spent on paid advertising</strong>:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">Intent-Clustered URL Taxonomies:</strong> Mapped over 600 parameterized routes across 19 categories (Image tools, PDF utilities, Developer formatters, Network calculators, SEO analyzers).
              </li>
              <li>
                <strong className="text-foreground">Automated Schema.org JSON-LD:</strong> Programmatically generated rich structured data for <code>WebApplication</code>, <code>BreadcrumbList</code>, and <code>FAQPage</code> schemas for instant search snippet visibility.
              </li>
              <li>
                <strong className="text-foreground">Real-Time IndexNow Pipeline:</strong> Instantly notified search engines upon static generation, securing indexation across 55,000+ Bing clicks and 500,000+ organic search impressions.
              </li>
            </ul>
          </section>

          {/* Section 5: Key Takeaways */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">5. Engineering Takeaways</h2>
            <div className="rounded-lg border border-border p-4 space-y-2 bg-accent/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Edge Compute + Client-Side WASM is the future of utility software:</strong> By eliminating server-side processing, SopKit demonstrated how a single engineer can serve millions of users with near-zero marginal infrastructure overhead, sub-millisecond execution, and total user privacy.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
