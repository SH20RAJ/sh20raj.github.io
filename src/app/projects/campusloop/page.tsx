import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, ShieldCheck, Database, Zap, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampusLoop Case Study — Verified College Social Network",
  description:
    "Engineering case study on CampusLoop: institutional email verification, anonymous student feeds, relational schema design, and scaling real-time campus networks.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/campusloop",
  },
  openGraph: {
    title: "CampusLoop Case Study — Verified College Social Network | Shaswat Raj",
    description:
      "Engineering case study on CampusLoop: institutional email verification, anonymous student feeds, relational schema design, and scaling real-time campus networks.",
    url: "https://sh20raj.github.io/projects/campusloop",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusLoop Case Study — Verified College Social Network",
    description:
      "Engineering case study on CampusLoop: institutional email verification, anonymous student feeds, relational schema design, and scaling real-time campus networks.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function CampusLoopCaseStudy() {
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
                Case Study Stub
              </span>
              <span className="text-xs text-muted-foreground">2026 – Present</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              CampusLoop — Architecture of a Verified Student Social Network
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              Building verified, institutional email-gated campus feeds, peer marketplaces, real-time polls, and encrypted batch time capsules across Indian universities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5">
            <a
              href="https://campusloop.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
            >
              <Globe className="size-3.5" /> Visit CampusLoop.space
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">1,350+</p>
              <p className="text-xs text-muted-foreground">Colleges in Directory Schema</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">PWA + Edge</p>
              <p className="text-xs text-muted-foreground">Client Architecture</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">PostgreSQL</p>
              <p className="text-xs text-muted-foreground">Multi-Tenant Isolation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-12">
          {/* Section 1: The Problem */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <ShieldCheck className="size-4 text-foreground" /> 1. The Core Problem &amp; Trust Model
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mainstream social networks fail campus communities because they lack trust boundaries: public platforms invite external harassment, while WhatsApp/Telegram groups lack anonymity and break down past a single batch.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CampusLoop solves this via strict <code>.edu / .ac.in</code> email verification paired with cryptographic pseudonymous posting keys. Students get a private, authentic campus commons.
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What exact authentication handshake and token verification flow is used for institutional email verification?</code>
            </div>
          </section>

          {/* Section 2: Schema & Data Model Decisions */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Database className="size-4 text-foreground" /> 2. Schema &amp; Data Model Decisions
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Multi-tenancy was structured around college domain tenants with strict row-level segregation:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
              <li>
                <strong className="text-foreground">Tenant Partitioning:</strong> Every feed post, canteen poll, and marketplace listing is bounded by <code>college_id</code> foreign key partitions.
              </li>
              <li>
                <strong className="text-foreground">Decoupled Identity:</strong> User profiles maintain verification status separately from feed author identifiers to prevent de-anonymization attacks.
              </li>
            </ul>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): Provide the key Prisma/PostgreSQL schema definitions and indexing strategies for the campus feed and poll models.</code>
            </div>
          </section>

          {/* Section 3: Hardest Scaling or Correctness Problem */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Zap className="size-4 text-foreground" /> 3. Hardest Scaling or Correctness Problem
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preventing race conditions during high-concurrency campus voting and real-time feed updates:
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): Describe the hardest engineering bug or concurrency issue faced (e.g. double voting prevention, WebSocket reconnect storms, or feed cache invalidation).</code>
            </div>
          </section>

          {/* Section 4: Tradeoff I'd Reverse */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <RefreshCw className="size-4 text-foreground" /> 4. One Tradeoff I&apos;d Reverse
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reflections on early architecture vs production reality:
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What architectural or state management tradeoff in CampusLoop would you reverse today (e.g., choice of real-time protocol, caching layer, or client state)?</code>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
