import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, ShieldCheck, Database, Zap, Users, QrCode, Server } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitotsav '26 Case Study — High-Concurrency Festival Infrastructure",
  description:
    "Engineering case study on Bitotsav '26: architecting high-concurrency event infrastructure, offline-tolerant cryptographic QR verification, and Redis caching for 5,000+ live participants.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/bitotsav-2026",
  },
  openGraph: {
    title: "Bitotsav '26 Case Study — High-Concurrency Festival Infrastructure | Shaswat Raj",
    description:
      "Engineering case study on Bitotsav '26: architecting high-concurrency event infrastructure, offline-tolerant cryptographic QR verification, and Redis caching for 5,000+ live participants.",
    url: "https://sh20raj.github.io/projects/bitotsav-2026",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitotsav '26 Case Study — High-Concurrency Festival Infrastructure",
    description:
      "Engineering case study on Bitotsav '26: architecting high-concurrency event infrastructure, offline-tolerant cryptographic QR verification, and Redis caching for 5,000+ live participants.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function BitotsavCaseStudy() {
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
                Infrastructure &amp; Tech Lead
              </span>
              <span className="text-xs text-muted-foreground">BIT Mesra · 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Bitotsav &apos;26 — High-Concurrency Cloud Architecture for 5,000+ Live Users
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              End-to-end engineering leadership of the complete festival platform: offline-resilient QR access verification, low-latency Redis caching, and real-time operational telemetry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5">
            <a
              href="https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
            >
              <ExternalLink className="size-3.5" /> LinkedIn Leadership Proof
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">5,000+</p>
              <p className="text-xs text-muted-foreground">Live Participants</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">99.99%</p>
              <p className="text-xs text-muted-foreground">Festival Uptime</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">&lt; 40ms</p>
              <p className="text-xs text-muted-foreground">Check-in Scan Latency</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">0</p>
              <p className="text-xs text-muted-foreground">Gate Failures / Breaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-12">
          {/* Section 1: The Operational Challenge */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Users className="size-4 text-foreground" /> 1. The Challenge: Heavy Concurrency Under Edge Network Variance
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bitotsav is one of Eastern India&apos;s largest collegiate cultural festivals, bringing together thousands of participants across sports, fine arts, drama, dance, and flagship music nights.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The primary architectural challenge was ensuring <strong className="text-foreground">zero gate bottlenecks</strong>: university gates and auditorium entry points experience extreme mobile network throttling when thousands of students gather simultaneously.
            </p>
          </section>

          {/* Section 2: Cryptographic Offline-Resilient QR System */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <QrCode className="size-4 text-foreground" /> 2. Cryptographic Offline-Tolerant QR Verification
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Traditional online QR scanners fail when cellular towers get congested. We engineered a dual-validation cryptographic protocol:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-border p-3.5 space-y-1 bg-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <ShieldCheck className="size-3.5 text-emerald-500" /> HMAC-SHA256 Signed Tokens
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Participant QR codes encode cryptographic payload signatures with embedded expiration nonces, preventing screenshot duplication and anti-forgery passes.
                </p>
              </div>

              <div className="rounded-lg border border-border p-3.5 space-y-1 bg-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <Database className="size-3.5 text-blue-500" /> Volunteer Offline Cache
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Volunteer scanner PWA devices pre-sync indexed bloom filters of valid registrations, verifying authenticity in sub-40ms even during complete internet blackout.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Redis Cache & Concurrency Architecture */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Server className="size-4 text-foreground" /> 3. Low-Latency Redis State Caching
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To shield the primary PostgreSQL database from sudden bursts during celebrity concert ticket drops and leaderboard updates, all hot paths were proxied through a Redis cluster:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">Write-Behind Check-In Logging:</strong> Scans were acknowledged immediately in Redis and flushed asynchronously to PostgreSQL in batch queues.
              </li>
              <li>
                <strong className="text-foreground">Distributed Rate Limiting:</strong> Enforced sliding-window rate limiters preventing automated bot booking scripts.
              </li>
            </ul>
          </section>

          {/* Section 4: Leadership Takeaways */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">4. Engineering Leadership Takeaway</h2>
            <div className="rounded-lg border border-border p-4 space-y-2 bg-accent/20 text-xs text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">High-stakes event systems require defensive design at every layer:</strong> From presenting security architecture to university leadership to running 72 hours of uninterrupted live production operations, Bitotsav demonstrated how resilient distributed primitives deliver flawless real-world experiences.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
