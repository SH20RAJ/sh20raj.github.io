import Link from "next/link";
import { ArrowLeft, ArrowUpRight, TrendingUp, Users, Target, Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building & Traction — Shaswat Raj",
  description:
    "Founder notes on shipped products, user traction (4.3M+ requests on 30tools), and why I'm building CampusLoop.",
  alternates: {
    canonical: "https://sh20raj.github.io/building",
  },
  openGraph: {
    title: "Building & Traction | Shaswat Raj",
    description:
      "Founder notes on shipped products, user traction (4.3M+ requests on 30tools), and why I'm building CampusLoop.",
    url: "https://sh20raj.github.io/building",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building & Traction — Shaswat Raj",
    description:
      "Founder notes on shipped products, user traction, and CampusLoop.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function BuildingPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      {/* Header */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase bg-accent text-foreground px-2 py-0.5 rounded">
              Founder &amp; Investor Notes
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What I&apos;m Building &amp; Real Traction
            </h1>
            <p className="text-base text-foreground leading-relaxed">
              I build software that real people use: my developer utility suite (30tools) scaled to <strong>4.3M+ requests and 213K+ monthly active users</strong> organically, and I am now building <strong>CampusLoop</strong> to solve verified student communication across Indian higher education.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-2xl font-bold tracking-tight">4.3M+</p>
              <p className="text-xs text-muted-foreground">Requests on 30tools (30d)</p>
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight">213K+</p>
              <p className="text-xs text-muted-foreground">Monthly Active Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight">5,000+</p>
              <p className="text-xs text-muted-foreground">Live Event Users (Bitotsav)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-12 text-sm leading-relaxed text-muted-foreground">
          {/* Section 1: What I've Shipped */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <Rocket className="size-4" /> 1. What I&apos;ve Shipped &amp; What Happened
            </h2>
            <p>
              I am a product-minded builder who iterates rapidly in public. Here is the trajectory of what I&apos;ve launched:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-1">
              <li>
                <strong className="text-foreground">30tools:</strong> Built a no-login, browser-native utility suite for developers and digital creators. Grew through programmatic SEO and word-of-mouth to 4.3M+ requests, 329k pageviews, and 213k MAU with $0 spent on paid marketing or server compute.
              </li>
              <li>
                <strong className="text-foreground">Bitotsav Event Infrastructure:</strong> Led technical operations and built the live ticketing, QR verification, and real-time event portal handling 5,000+ active participants during the university festival with zero downtime.
              </li>
              <li>
                <strong className="text-foreground">Debo &amp; IndexFast:</strong> Shipped personal AI memory tools and automated indexing servers that developers run inside their everyday workflows.
              </li>
            </ul>
          </section>

          {/* Section 2: What CampusLoop is & Why Now */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <Target className="size-4" /> 2. What CampusLoop Is &amp; Why Now
            </h2>
            <p>
              Over 40 million students attend higher education institutions across India, yet campus communication remains fundamentally broken. Group chats on WhatsApp and Telegram are noisy, lack identity verification against external intruders, and offer zero anonymity for sensitive student issues.
            </p>
            <p>
              <strong className="text-foreground">CampusLoop</strong> is the verified student-only campus network. Every user must authenticate with their official college email (<code>.edu / .ac.in</code>). Once verified, students unlock:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>An authentic, pseudonymous campus feed for honest discussion</li>
              <li>A trusted peer-to-peer student marketplace for textbooks, electronics, and sublets</li>
              <li>Live canteen and campus polls with tamper-proof student votes</li>
              <li>Encrypted batch time capsules opened upon graduation</li>
            </ul>
          </section>

          {/* Section 3: Current Numbers & Growth */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <TrendingUp className="size-4" /> 3. Current Traction &amp; Real Numbers
            </h2>
            <p>
              Our database directory currently maps institutional domains for 1,350+ Indian colleges.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs mt-3">
              <div className="p-3 rounded-lg border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Indexed Campuses</span>
                <span className="font-mono text-base font-semibold text-foreground">1,350+</span>
              </div>
              <div className="p-3 rounded-lg border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Domain Validation</span>
                <span className="font-mono text-base font-semibold text-foreground">.edu / .ac.in</span>
              </div>
              <div className="p-3 rounded-lg border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Beta Stage</span>
                <span className="font-mono text-base font-semibold text-emerald-500">Active Pilot</span>
              </div>
            </div>
          </section>

          {/* Section 4: Team */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <Users className="size-4" /> 4. The Team
            </h2>
            <p>
              I build and ship full-stack systems solo from initial conception to production deployment and growth hacking, working directly with student campus leads across select universities.
            </p>
          </section>

          {/* Section 5: What's Next */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight text-foreground">5. What&apos;s Next</h2>
            <p>
              We are rolling out CampusLoop across select flagship engineering and central university campuses in India, focusing on density, daily active engagement in campus feeds, and peer marketplace volume.
            </p>
            <p>
              If you are an investor, operator, or potential partner interested in what we&apos;re building:
            </p>
            <div className="pt-2">
              <a
                href="mailto:sh20raj@gmail.com?subject=Connecting%20via%20Building%20Page"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Get in touch at sh20raj@gmail.com <ArrowUpRight className="size-4" />
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
