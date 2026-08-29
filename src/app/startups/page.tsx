import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startups & Ventures | Shaswat Raj",
  description:
    "Ventures and products built and launched by Shaswat Raj — from AI memory engines to MCP developer infrastructure.",
  alternates: {
    canonical: `${DATA.url}/startups`,
  },
  openGraph: {
    title: "Startups & Ventures | Shaswat Raj",
    description:
      "Ventures and products built and launched by Shaswat Raj — from AI memory engines to MCP developer infrastructure.",
    url: `${DATA.url}/startups`,
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startups & Ventures | Shaswat Raj",
    description:
      "Ventures and products built and launched by Shaswat Raj.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

const startups = [
  {
    name: "Debo",
    status: "Active",
    description: "Personal AI memory engine. Captures multi-source context and provides instant semantic retrieval over life workflows.",
    link: "https://debo.life",
  },
  {
    name: "IndexFast",
    status: "Active",
    description: "MCP-native indexing engine. Indexes URLs to Google and Bing with real-time API integrations and IDE support.",
    link: "https://indexfast.co",
  },
  {
    name: "AlgoForge",
    status: "Active",
    description: "SEO-first algorithms and interview preparation platform featuring structured learning paths and multi-language solutions.",
    link: "https://algoforge.shraj.workers.dev/",
  },
  {
    name: "MCP Pure",
    status: "Active",
    description: "High-performance Model Context Protocol (MCP) server ecosystem running on Cloudflare Workers edge runtime.",
    link: "https://mcppure.shraj.workers.dev/",
  },
  {
    name: "30tools",
    status: "Active",
    description: "Suite of 140+ client-side developer and creator utilities processing millions of operations with zero server telemetry.",
    link: "https://sopkit.github.io",
  },
];

export default function StartupsPage() {
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
          <h1 className="text-xl font-bold tracking-tight">Startups &amp; Products</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Independent software products engineered and shipped end-to-end.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-4">
          {startups.map((startup) => (
            <a
              key={startup.name}
              href={startup.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {startup.name}
                  </h2>
                  <span className="text-[10px] text-muted-foreground bg-accent px-1.5 py-0.5 rounded font-mono">
                    {startup.status}
                  </span>
                </div>
                <ExternalLink className="size-3.5 text-muted-foreground shrink-0" />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                {startup.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
