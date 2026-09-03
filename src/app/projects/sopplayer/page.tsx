import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Play, ShieldCheck, Zap, Download, Layers, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SopPlayer Case Study — Lightweight Open-Source HTML5 Video Player",
  description:
    "Engineering case study on SopPlayer: zero-dependency customizable HTML5 video player library scaled to 1.18M+ requests and 38GB+ CDN bandwidth via jsDelivr.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/sopplayer",
  },
  openGraph: {
    title: "SopPlayer Case Study — Lightweight Open-Source HTML5 Video Player | Shaswat Raj",
    description:
      "Engineering case study on SopPlayer: zero-dependency customizable HTML5 video player library scaled to 1.18M+ requests and 38GB+ CDN bandwidth via jsDelivr.",
    url: "https://sh20raj.github.io/projects/sopplayer",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SopPlayer Case Study — Lightweight Open-Source HTML5 Video Player",
    description:
      "Engineering case study on SopPlayer: zero-dependency customizable HTML5 video player library scaled to 1.18M+ requests and 38GB+ CDN bandwidth via jsDelivr.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function SopPlayerCaseStudy() {
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
                Open Source Library
              </span>
              <span className="text-xs text-muted-foreground">HTML5 &amp; Media API</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              SopPlayer — Ultra-Lightweight HTML5 Video Player (1.18M+ CDN Requests)
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              A minimalist, zero-dependency HTML5 media player designed for instant web embedding, customizable CSS skinning, and frictionless CDN delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5">
            <a
              href="https://github.com/sh20raj/sopplayer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
            >
              <ExternalLink className="size-3.5" /> GitHub Repository
            </a>
            <a
              href="https://www.linkedin.com/posts/sh20raj_sopplayer-html5videoplayer-opensourcelove-activity-7279897143249715201-4gO6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-3.5" /> jsDelivr Usage Proof
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">1.18M+</p>
              <p className="text-xs text-muted-foreground">CDN Requests (jsDelivr)</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">38 GB+</p>
              <p className="text-xs text-muted-foreground">Bandwidth Delivered</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">0</p>
              <p className="text-xs text-muted-foreground">External Dependencies</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">&lt; 15 KB</p>
              <p className="text-xs text-muted-foreground">Minified Bundle Footprint</p>
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
              <Zap className="size-4 text-foreground" /> 1. The Problem: Heavy Media Player Bloat
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard web video player libraries (e.g. Video.js, JW Player) often exceed 100KB–200KB in minified JavaScript bundle size, introduce complex lifecycle state managers, and require cumbersome build configuration just to embed a styled video player.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">SopPlayer was built to eliminate this overhead:</strong> a plug-and-play, zero-dependency Vanilla JS player packaged in less than 15KB that works directly in standard browsers with a single CDN script tag.
            </p>
          </section>

          {/* Section 2: Integration & Architecture */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Layers className="size-4 text-foreground" /> 2. Integration &amp; Architecture
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SopPlayer mounts declaratively via HTML5 data attributes without requiring modern JS bundling pipelines:
            </p>

            <pre className="p-3.5 rounded-lg bg-card border border-border font-mono text-xs text-muted-foreground overflow-x-auto leading-normal">
{`<!-- Single-line CDN inclusion -->
<script src="https://cdn.jsdelivr.net/gh/sh20raj/sopplayer/dist/sopplayer.min.js"></script>

<!-- Declarative HTML5 Video Mount -->
<video class="sopplayer" controls data-setup='{"playbackRates": [0.5, 1, 1.5, 2]}'>
  <source src="video.mp4" type="video/mp4" />
</video>`}
            </pre>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-lg border border-border p-3.5 space-y-1 bg-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <Play className="size-3.5 text-blue-500" /> Custom Media Controls
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Smooth seek scrubbing, dynamic buffered progress indicators, audio volume slider, and playback rate selectors.
                </p>
              </div>

              <div className="rounded-lg border border-border p-3.5 space-y-1 bg-card">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <ShieldCheck className="size-3.5 text-emerald-500" /> Cross-Browser Native APIs
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Seamless abstraction over Picture-in-Picture API, WebKit Fullscreen API, and mobile touch gestures.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: CDN Distribution & Adoption */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Download className="size-4 text-foreground" /> 3. Global CDN Scale (1.18M+ Requests)
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Distributed globally across edge content delivery networks (jsDelivr / GitHub Releases), SopPlayer recorded:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">1,183,451+ verified HTTP requests</strong> served to websites globally.
              </li>
              <li>
                <strong className="text-foreground">38+ GB of cached JavaScript/CSS assets</strong> transferred with sub-millisecond edge latency.
              </li>
              <li>
                Ranked in jsDelivr popularity tiers for open-source media utilities.
              </li>
            </ul>
          </section>

          {/* Section 4: Engineering Takeaway */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">4. Engineering Takeaway</h2>
            <div className="rounded-lg border border-border p-4 space-y-2 bg-accent/20 text-xs text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Zero-dependency software wins on speed and developer experience:</strong> By building directly against standard browser Web APIs without framework layers, SopPlayer delivered extreme performance, durability, and frictionless adoption across millions of page views.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
