import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Database, Brain, Zap, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debo Case Study — Personal AI Memory & RAG Pipeline",
  description:
    "Engineering case study on Debo: multimodal context ingestion, vector embedding pipelines, agentic memory retrieval, and local-first RAG architecture.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/debo",
  },
  openGraph: {
    title: "Debo Case Study — Personal AI Memory & RAG Pipeline | Shaswat Raj",
    description:
      "Engineering case study on Debo: multimodal context ingestion, vector embedding pipelines, agentic memory retrieval, and local-first RAG architecture.",
    url: "https://sh20raj.github.io/projects/debo",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debo Case Study — Personal AI Memory & RAG Pipeline",
    description:
      "Engineering case study on Debo: multimodal context ingestion, vector embedding pipelines, agentic memory retrieval, and local-first RAG architecture.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function DeboCaseStudy() {
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
              <span className="text-xs text-muted-foreground">2025</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Debo — Engineering a Personal RAG &amp; Agentic Memory Architecture
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              Building a personal memory ingestion engine that embeds notes, web clips, audio, and conversations for sub-second agentic recall.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5">
            <a
              href="https://debo.life"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
            >
              <Globe className="size-3.5" /> Visit Debo.life
            </a>
            <a
              href="https://github.com/SH20RAJ/debo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-3.5" /> View Source
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">Vector RAG</p>
              <p className="text-xs text-muted-foreground">Embedding &amp; Retrieval</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Multimodal</p>
              <p className="text-xs text-muted-foreground">Text, Audio &amp; Web Clips</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Solo Build</p>
              <p className="text-xs text-muted-foreground">End-to-End Pipeline</p>
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
              <Brain className="size-4 text-foreground" /> 1. The Core Problem
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Knowledge workers capture fragments across dozens of platforms daily — browser tabs, voice memos, quick notes, and PDF papers. Standard search engines require keyword recall; LLMs lack personal episodic memory.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Debo was built as an autonomous personal memory pipeline: continuously chunking, embedding, indexing, and surfacing semantic context during conversation.
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What vector database and embedding model were chosen for Debo (e.g. Cloudflare Vectorize, Pinecone, OpenAI text-embedding-3)?</code>
            </div>
          </section>

          {/* Section 2: Schema & Data Model Decisions */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Database className="size-4 text-foreground" /> 2. Schema &amp; Data Model Decisions
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Memory documents were structured with hierarchical metadata tags, chunk offsets, and temporal decay weights:
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): Provide the memory chunk data model and how metadata filtering is combined with cosine similarity search.</code>
            </div>
          </section>

          {/* Section 3: Hardest Scaling or Correctness Problem */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Zap className="size-4 text-foreground" /> 3. Hardest Scaling or Correctness Problem
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Balancing chunk size precision vs retrieval recall, and preventing hallucinations when query concepts span multiple disjoint notes:
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): Detail the exact retrieval reranking or prompt synthesis challenges you solved in Debo.</code>
            </div>
          </section>

          {/* Section 4: One Tradeoff I'd Reverse */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <RefreshCw className="size-4 text-foreground" /> 4. One Tradeoff I&apos;d Reverse
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tradeoffs made between cloud vector storage and local-first embedded SQLite/Wasm storage:
            </p>
            <div className="p-3 bg-accent/40 rounded-lg border border-border text-xs text-muted-foreground">
              <code>TODO(shaswat): What architectural or pipeline tradeoff in Debo would you reverse today?</code>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
