import { TweetEmbed } from "@/components/tweet-embed";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Pages & Interactive Web Systems | Shaswat Raj",
  description:
    "High-conversion Next.js & Tailwind CSS landing pages, interactive web interfaces, and motion design engineered by Shaswat Raj.",
  alternates: {
    canonical: "https://sh20raj.github.io/landing-pages",
  },
  openGraph: {
    title: "Landing Pages & Interactive Web Systems | Shaswat Raj",
    description:
      "High-conversion Next.js & Tailwind CSS landing pages, interactive web interfaces, and motion design.",
    url: "https://sh20raj.github.io/landing-pages",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Pages & Interactive Web Systems | Shaswat Raj",
    description:
      "High-conversion Next.js & Tailwind CSS landing pages, interactive web interfaces, and motion design.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

const demoTweets = [
  {
    id: "2060421891182186557",
    title: "Dhwani — Music Society Platform",
    note: "High-performance web system with broadcast theme, motion hero, and recording-console UI language.",
  },
  {
    id: "2056624911373021437",
    title: "3D Product Interface",
    note: "Interactive product experience with fluid layout transitions and performance optimization.",
  },
  {
    id: "2056211450071490862",
    title: "Growth Platform Showcase",
    note: "Conversion-optimized Next.js architecture with clean typography and fast load times.",
  },
  {
    id: "2056232623673074108",
    title: "Aero UI Design System",
    note: "Lightweight, accessible UI system engineered for maximum rendering speed.",
  },
];

export default function LandingPagesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Landing Pages &amp; UI Systems</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Conversion-focused, highly responsive web experiences built on modern Next.js and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Featured Build */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Featured Platform
          </h2>
          <a
            href="https://dhwanibitmesra.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                  Dhwani — Music Society Platform
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Engineered full frontend and backend architecture for NAAD&apos;26 with broadcast theme, marquee telemetry, and recording-console UI language.
                </p>
              </div>
              <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-0.5" />
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {["Next.js", "TypeScript", "Tailwind CSS", "Web Vitals"].map((t) => (
                <span key={t} className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </a>
        </div>
      </section>

      {/* Demos */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-4">Interactive Demos</h2>
          <div className="space-y-6">
            {demoTweets.map((tweet) => (
              <div key={tweet.id} className="space-y-2">
                <div>
                  <h3 className="text-sm font-medium">{tweet.title}</h3>
                  <p className="text-xs text-muted-foreground">{tweet.note}</p>
                </div>
                <div className="rounded-lg border border-border overflow-hidden p-2">
                  <TweetEmbed id={tweet.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
