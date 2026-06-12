import BlurFade from "@/components/magicui/blur-fade";
import { TweetEmbed } from "@/components/tweet-embed";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Landing Pages by Shaswat Raj | Live Demos",
  description:
    "Animated, conversion-focused Next.js + Tailwind landing pages built by Shaswat Raj. Watch live demo videos of real landing pages including Dhwani, the college Music Society site.",
  alternates: {
    canonical: "https://sh20raj.github.io/landing-pages",
  },
  openGraph: {
    title: "Landing Pages by Shaswat Raj | Live Demos",
    description:
      "Animated, conversion-focused Next.js landing pages. Watch live demo videos including Dhwani, the college Music Society site.",
    url: "https://sh20raj.github.io/landing-pages",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: ["/images/dhwani-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Landing Pages by Shaswat Raj | Live Demos",
    description:
      "Animated, conversion-focused Next.js landing pages. Watch live demo videos including Dhwani.",
    creator: "@ShaswatBuilds",
    images: ["/images/dhwani-poster.jpg"],
  },
};

// Demo tweets (with videos) — all ShaswatBuilds posts in the codebase.
const demoTweets = [
  {
    id: "2060421891182186557",
    title: "Dhwani — college Music Society",
    note: "Full-stack landing page with a studio/broadcast aesthetic, motion-rich hero, scroll animations, and recording-console UI for NAAD'26.",
  },
  {
    id: "2056624911373021437",
    title: "Premium 3D Product Landing Page",
    note: "3D product showcase with smooth scroll animations, interactive sections, pricing, FAQ, and CTA.",
  },
  {
    id: "2056211450071490862",
    title: "Growth Agency Landing Page",
    note: "Conversion-focused Next.js landing page that turns visitors into paying clients.",
  },
  {
    id: "2056232623673074108",
    title: "Aero UI Landing Page",
    note: "Premium template for developers who value speed, aesthetics, and clean code.",
  },
  {
    id: "2056280867430142035",
    title: "Nova Landing Page",
    note: "Modern, conversion-focused landing page template you can deploy in minutes.",
  },
];

export default function LandingPagesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] py-12 px-6">
      <div className="mx-auto w-full max-w-5xl space-y-16">
        {/* Back */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-[var(--duo-feather)] transition-colors group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </BlurFade>

        {/* Hero */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Landing Pages
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
              Landing pages that move
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[760px] leading-relaxed">
              Animated, conversion-focused Next.js + Tailwind landing pages with
              real motion and clean UX. Below are live demo videos of pages I&apos;ve
              shipped — watch them play right here.
            </p>
          </div>
        </BlurFade>

        {/* Featured: Dhwani poster */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <Link
            href="https://dhwanibitmesra.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border-2 border-[var(--duo-swan)] bg-card shadow-[0_4px_0_var(--duo-swan)] transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto overflow-hidden bg-black">
                <img
                  src="/images/dhwani-poster.jpg"
                  alt="Dhwani — college Music Society landing page poster"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--duo-feather)]/10 px-3 py-1 text-xs font-bold text-[var(--duo-feather)]">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                  Featured Build
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Dhwani — college Music Society
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designed and engineered the full frontend and backend with a
                  studio/broadcast theme, motion-rich hero carousel, scroll
                  animations, marquees, and recording-console UI language for
                  the NAAD&apos;26 festival.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Next.js", "TypeScript", "UI/UX", "Framer Motion", "Animations"].map((t) => (
                    <span key={t} className="rounded-full bg-[var(--duo-feather)]/10 px-2.5 py-1 text-[11px] font-bold text-[var(--duo-feather)]">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-bold text-[var(--duo-feather)] group-hover:underline">
                  Visit dhwanibitmesra.in
                  <ExternalLink className="size-4" />
                </span>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Demo tweets */}
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Live demo videos
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-[640px]">
                Each landing page below has a video demo. Hit play to see the
                animations and interactions in motion.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {demoTweets.map((tweet, id) => (
              <BlurFade key={tweet.id} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-base">{tweet.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {tweet.note}
                    </p>
                  </div>
                  <TweetEmbed id={tweet.id} />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* CTA */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="rounded-2xl bg-[var(--duo-polar)]/50 p-8 text-center space-y-4 border-2 border-dashed border-[var(--duo-swan)]">
            <h3 className="text-xl font-extrabold">Want a landing page like these?</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Tell me your idea, goals, and timeline. I&apos;ll reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="mailto:sh20raj@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--duo-feather)] px-8 text-sm font-bold text-white shadow-[0_5px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white px-8 text-sm font-bold text-[var(--duo-eel)] shadow-[0_5px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
