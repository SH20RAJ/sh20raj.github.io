import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Zap, TrendingUp, Cpu, Server, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30tools Case Study — Scaling to 4.3M+ Requests",
  description:
    "Engineering case study on 30tools: programmatic SEO architecture, sub-millisecond client-side execution, and scaling to 4.3M+ requests.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/30tools",
  },
  openGraph: {
    title: "30tools Case Study — Scaling to 4.3M+ Requests | Shaswat Raj",
    description:
      "Engineering case study on 30tools: programmatic SEO architecture, sub-millisecond client-side execution, and scaling to 4.3M+ requests.",
    url: "https://sh20raj.github.io/projects/30tools",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "30tools Case Study — Scaling to 4.3M+ Requests",
    description:
      "Engineering case study on 30tools: programmatic SEO architecture, sub-millisecond client-side execution, and scaling to 4.3M+ requests.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function ThirtyToolsCaseStudy() {
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
              30tools — Programmatic SEO &amp; Sub-Millisecond Execution at 4.3M+ Requests
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              How a solo-engineered browser utility suite scaled to 4.3M+ requests, 213K+ MAU, and 500K+ search impressions with zero server compute bills.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5">
            <a
              href="https://30tools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
            >
              <Globe className="size-3.5" /> Visit 30tools.com
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
              <p className="text-xl font-bold tracking-tight">4.3M+</p>
              <p className="text-xs text-muted-foreground">Total Requests (30d)</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">213K+</p>
              <p className="text-xs text-muted-foreground">Monthly Active Users</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">500K+</p>
              <p className="text-xs text-muted-foreground">Search Impressions</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">&lt; 1ms</p>
              <p className="text-xs text-muted-foreground">Client Execution Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-12">
          {/* Section 1: The Problem */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Zap className="size-4 text-foreground" /> 1. The Problem
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most web utilities (JSON formatters, regex testers, UUID generators, unit converters, timestamp parsers) suffer from three fatal flaws:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
              <li>
                <strong className="text-foreground">Bloat &amp; Ad Walls:</strong> Cluttered with ad trackers, slow bundles, and mandatory account signups for trivial operations.
              </li>
              <li>
                <strong className="text-foreground">Unnecessary Backend Latency:</strong> Routing client input to remote servers for transformations that native JavaScript or WebAssembly handles in microseconds.
              </li>
              <li>
                <strong className="text-foreground">Data Privacy Risks:</strong> Sending sensitive user tokens, keys, and payload data across the wire to unvetted backend APIs.
              </li>
            </ul>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What exact pain point or personal annoyance originally prompted you to build the first batch of tools in 30tools?</code>
            </div>
          </section>

          {/* Section 2: Programmatic SEO Architecture */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <TrendingUp className="size-4 text-foreground" /> 2. The Programmatic SEO Architecture
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Instead of manually writing static landing pages for every variation, I designed a programmatic SEO schema that captured long-tail developer queries.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each tool was broken into parameterized intent clusters (e.g. <code>/convert/[from]-to-[to]</code>, <code>/format/[language]</code>, <code>/generate/[type]</code>). A unified metadata engine generated dynamic Schema.org <code>WebApplication</code> JSON-LD schemas, canonical tags, automated open-graph cards, and IndexNow pings on every release.
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): How many total programmatic tool pages and intent variations were mapped and indexed? What was the keyword strategy for Bing vs Google?</code>
            </div>
          </section>

          {/* Section 3: Generation & Templating Model */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Server className="size-4 text-foreground" /> 3. Generation &amp; Templating Model
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To keep build times sub-minute across hundreds of tool routes, pages were generated using Next.js static generation backed by a lightweight declarative tool manifest:
            </p>
            <pre className="p-3 rounded-lg bg-card border border-border font-mono text-xs text-muted-foreground overflow-x-auto leading-normal">
{`interface ToolDefinition {
  slug: string;
  category: "formatters" | "converters" | "generators" | "crypto";
  inputs: SchemaType[];
  workerTransform: (data: Input) => Output;
  meta: SEOConfiguration;
}`}
            </pre>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shared layout primitives ensured identical UI consistency while allowing each tool to provide custom input controls, shortcuts, and zero-overhead web workers.
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What templating and build pipeline specifics were used (e.g., Turbopack static export, dynamic import chunks)?</code>
            </div>
          </section>

          {/* Section 4: Client-Side Execution & Sub-Millisecond Latency */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Cpu className="size-4 text-foreground" /> 4. Client-Side Execution Model &amp; Why Sub-Millisecond Mattered
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All computation occurs 100% in the user&apos;s browser using native Web APIs, Web Workers, and WebAssembly. No data ever touches a remote server.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This architecture yielded two immense advantages:
            </p>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 pl-1">
              <li>
                <strong className="text-foreground">Near-Zero Marginal Infrastructure Cost:</strong> Serving pure static assets over CDN meant handling 4.3M+ requests without backend scaling bottlenecks or cloud computing bills.
              </li>
              <li>
                <strong className="text-foreground">Instantaneous User Feedback:</strong> Transforms trigger on <code>input</code> events without debounce delays, offering sub-millisecond feedback loops.
              </li>
            </ol>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): Were any specific WebAssembly modules or Web Worker threads used for heavy transforms (e.g. image compression, SQL formatting, diffing)?</code>
            </div>
          </section>

          {/* Section 5: Traffic Curve & Growth */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <TrendingUp className="size-4 text-foreground" /> 5. The Traffic Curve &amp; Growth
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Growth was completely organic, driven by search intent matching and immediate utility:
            </p>
            <div className="border border-border rounded-lg p-4 bg-card space-y-3">
              <div className="aspect-[16/9] w-full bg-accent/30 rounded border border-dashed border-border flex flex-col items-center justify-center p-6 text-center text-xs text-muted-foreground">
                <p className="font-medium text-foreground">Traffic Analytics Screenshot Slot</p>
                <p className="text-[11px] mt-1">Place verified traffic graph at <code>public/projects/30tools-traffic.png</code></p>
              </div>
              <p className="text-xs text-muted-foreground italic text-center">
                Verified 30-day window: 4,300,000+ requests, 213,790 unique visits, 329,860 page views, 55,800+ Bing clicks.
              </p>
            </div>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What were the top 3 highest-traffic tools by volume? How quickly did the traffic ramp up after launch?</code>
            </div>
          </section>

          {/* Section 6: Failure Modes & Scaling Fixes */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <AlertTriangle className="size-4 text-foreground" /> 6. What Broke as It Scaled &amp; How I Fixed It
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scaling to hundreds of thousands of concurrent users uncovered practical browser edge cases:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">Main-Thread Freezing on Large Inputs:</strong> Pasting multi-megabyte JSON payloads caused UI unresponsiveness. <em>Fix:</em> Offloaded heavy parses to dedicated Web Workers with structured clone transfers.
              </li>
              <li>
                <strong className="text-foreground">Search Engine Crawler Throttling:</strong> Rapid indexing of hundreds of dynamic URLs required fine-tuning sitemap chunking and implementing IndexNow protocols.
              </li>
            </ul>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What other specific memory leaks, mobile browser quirks, or edge caching issues did you encounter and resolve?</code>
            </div>
          </section>

          {/* Section 7: What I'd Do Differently */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">7. What I&apos;d Do Differently</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If rebuilding the platform from scratch today:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
              <li>
                <strong className="text-foreground">Composable Plugin Engine:</strong> Implement an extensible WebAssembly plugin sandbox allowing community developers to contribute new tools with single-file specifications.
              </li>
              <li>
                <strong className="text-foreground">Local-First Workflow Chaining:</strong> Enable piping output from one tool directly into another without clipboard hops.
              </li>
            </ul>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What architectural or product tradeoff from 30tools would you reverse today?</code>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
