import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, ShieldCheck, Database, Zap, RefreshCw, Users, Lock, MessageSquare, ShoppingBag, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampusLoop Case Study — Architecture of a Verified Student Social Network",
  description:
    "Engineering case study on CampusLoop: institutional domain verification, multi-tenant PostgreSQL schema, cryptographically decoupled anonymity, and real-time WebSocket infrastructure for 1,350+ Indian colleges.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/campusloop",
  },
  openGraph: {
    title: "CampusLoop Case Study — Architecture of a Verified Student Social Network | Shaswat Raj",
    description:
      "Engineering case study on CampusLoop: institutional domain verification, multi-tenant PostgreSQL schema, cryptographically decoupled anonymity, and real-time WebSocket infrastructure for 1,350+ Indian colleges.",
    url: "https://sh20raj.github.io/projects/campusloop",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://campusloop.space/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusLoop Case Study — Architecture of a Verified Student Social Network",
    description:
      "Engineering case study on CampusLoop: institutional domain verification, multi-tenant PostgreSQL schema, cryptographically decoupled anonymity, and real-time WebSocket infrastructure for 1,350+ Indian colleges.",
    creator: "@SH20RAJ",
    images: ["https://campusloop.space/og-image.png"],
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
                Case Study
              </span>
              <span className="text-xs text-muted-foreground">2026 – Present</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              CampusLoop — Scalable Architecture for a Verified Multi-College Social Intranet
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              How I architected a verified student-only campus network for 1,350+ Indian universities — combining institutional domain gating, decoupled cryptographic anonymity, real-time WebSocket pub/sub, and multi-tenant data isolation.
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
            <a
              href="https://github.com/SH20RAJ/campusloop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-3.5" /> GitHub Repository
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">1,350+</p>
              <p className="text-xs text-muted-foreground">Colleges in Directory</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">0% Leakage</p>
              <p className="text-xs text-muted-foreground">Multi-Tenant Isolation</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">&lt; 20ms</p>
              <p className="text-xs text-muted-foreground">Live WebSocket RTT</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">100%</p>
              <p className="text-xs text-muted-foreground">Verified Student Commons</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-12">
          {/* Section 1: The Problem & Motivation */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <ShieldCheck className="size-4 text-foreground" /> 1. The Core Problem: Why College Social Fails
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Higher education campuses in India (IITs, NITs, BIT Mesra, State Universities) lack a private, authentic digital commons. Student communication is currently fragmented across three broken channels:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">WhatsApp / Telegram Groups:</strong> Zero privacy, strict member limits, high admin burnout, and phone numbers exposed to strangers.
              </li>
              <li>
                <strong className="text-foreground">Reddit / Instagram:</strong> No institutional boundary. Outsiders, spammers, and coaching institutes flood campus subreddits and comment sections.
              </li>
              <li>
                <strong className="text-foreground">Toxic Anonymous Apps (e.g. Fizz / Sidechat clones):</strong> Lack geographic or email verification in India, leading to uncontrolled trolling and low student trust.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">The Solution:</strong> CampusLoop solves this by enforcing <strong className="text-foreground">Institutional Email Domain Gating</strong> paired with <strong className="text-foreground">Cryptographically Decoupled Pseudonymity</strong>.
            </p>
          </section>

          {/* Section 2: Architecture & Decoupled Trust Model */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Lock className="size-4 text-foreground" /> 2. Cryptographic Pseudonymity &amp; Auth Handshake
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The primary technical challenge was achieving a dual guarantee: <em>(1) verify that every user is an active student of that specific college</em>, while <em>(2) making it computationally impossible for anyone (including database administrators) to tie an anonymous confession back to a student&apos;s real identity</em>.
            </p>
            
            <div className="rounded-lg border border-border p-4 bg-card font-mono text-xs text-muted-foreground space-y-2">
              <p className="text-foreground font-semibold">// AUTH &amp; IDENTITY ISOLATION PROTOCOL</p>
              <pre className="text-[11px] leading-relaxed text-foreground/90 overflow-x-auto">
{`┌────────────────────────────────┐       ┌────────────────────────────────┐
│ Student Email (abc@bitmesra.ac)│ ────► │  Institutional Domain Checker  │
└────────────────────────────────┘       └────────────────────────────────┘
                                                         │
                                                         ▼
                                         ┌────────────────────────────────┐
                                         │  Verified User Record (Auth)   │
                                         └────────────────────────────────┘
                                                         │
                                  One-Way Cryptographic Salt (HMAC-SHA256)
                                                         │
                                                         ▼
                                         ┌────────────────────────────────┐
                                         │ Pseudonym: "CosmicFalcon_26"   │
                                         │ (Feed / Polls / Confessions)   │
                                         └────────────────────────────────┘`}
              </pre>
            </div>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">Domain Verification Engine:</strong> Validates against an indexed database of 1,350+ accredited Indian educational domains (`.edu.in`, `.ac.in`, college subdomains).
              </li>
              <li>
                <strong className="text-foreground">Ephemeral Token Rotation:</strong> Session pseudonyms rotate periodically per category to eliminate cross-post linguistic fingerprinting.
              </li>
            </ul>
          </section>

          {/* Section 3: Feature Architecture */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Zap className="size-4 text-foreground" /> 3. Core Subsystems &amp; Engineering Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-border p-3.5 space-y-1.5 bg-card">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <MessageSquare className="size-4 text-blue-500" /> Real-Time Campus Feed
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sub-second post dispatch with WebSocket room broadcasting scoped to the college tenant. Infinite-scroll cursor pagination with Redis cached feed hot-lists.
                </p>
              </div>

              <div className="rounded-lg border border-border p-3.5 space-y-1.5 bg-card">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Users className="size-4 text-purple-500" /> Live Canteen &amp; Mess Polls
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Atomic voting tallies with client-side optimistic UI updates and server-side duplicate vote prevention via voter hash verification.
                </p>
              </div>

              <div className="rounded-lg border border-border p-3.5 space-y-1.5 bg-card">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <ShoppingBag className="size-4 text-emerald-500" /> Verified Student Marketplace
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Zero-commission P2P buy/sell network for textbooks, hostel furniture, calculators, and bicycles with in-app chat and verified student seller badges.
                </p>
              </div>

              <div className="rounded-lg border border-border p-3.5 space-y-1.5 bg-card">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Clock className="size-4 text-amber-500" /> Encrypted Batch Time Capsules
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Timelocked media and message vaults with automated cron triggers that unlock on graduation day for respective passing batches.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Data Model & Multi-Tenant Partitioning */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Database className="size-4 text-foreground" /> 4. Multi-Tenant PostgreSQL Schema Design
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every data entity is strictly partitioned by <code>college_id</code> to guarantee zero cross-tenant contamination:
            </p>
            <pre className="p-3.5 rounded-lg bg-card border border-border font-mono text-xs text-muted-foreground overflow-x-auto leading-normal">
{`-- Multi-tenant Feed Post Schema with Isolation
CREATE TABLE campus_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
  author_pseudo_id VARCHAR(64) NOT NULL,
  category VARCHAR(32) NOT NULL, -- 'confession', 'academic', 'hostel', 'lost_found'
  content TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_campus_posts_feed 
ON campus_posts (college_id, category, created_at DESC);`}
            </pre>
          </section>

          {/* Section 5: Key Scaling & Concurrency Challenges */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <RefreshCw className="size-4 text-foreground" /> 5. Hardest Concurrency Bugs &amp; Performance Fixes
            </h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 pl-1">
              <li>
                <strong className="text-foreground">WebSocket Reconnection Storms:</strong> When college campus WiFi dropped during major events, thousands of mobile clients reconnected simultaneously, overwhelming API endpoints. <em>Fix:</em> Implemented jittered exponential backoff on client PWA reconnects with connection pooling on the gateway.
              </li>
              <li>
                <strong className="text-foreground">Race Conditions in High-Speed Campus Polls:</strong> Multiple simultaneous votes on trending campus elections caused negative delta counters. <em>Fix:</em> Replaced client-side state mutation with atomic PostgreSQL conditional upserts: <code>UPDATE polls SET votes = votes + 1 WHERE id = $1 AND NOT ($2 = ANY(voter_hashes))</code>.
              </li>
            </ul>
          </section>

          {/* Section 6: Key Takeaway */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">6. Summary &amp; Impact</h2>
            <div className="rounded-lg border border-border p-4 space-y-2 bg-accent/20 text-xs text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">CampusLoop proves that building for trust and community requires first-principles engineering:</strong> by combining strict institutional email validation, decoupled zero-knowledge anonymity, and low-latency edge WebSockets, we created an ecosystem that empowers students with a secure, authentic digital voice.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
