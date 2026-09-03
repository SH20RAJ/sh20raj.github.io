import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Database, Brain, Zap, RefreshCw, Cpu, Layers, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debo Case Study — Autonomous Personal AI Memory & RAG Pipeline",
  description:
    "Engineering case study on Debo: multimodal context ingestion, vector embedding pipelines, hybrid search retrieval (BM25 + Cosine), and agentic memory architecture.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/debo",
  },
  openGraph: {
    title: "Debo Case Study — Autonomous Personal AI Memory & RAG Pipeline | Shaswat Raj",
    description:
      "Engineering case study on Debo: multimodal context ingestion, vector embedding pipelines, hybrid search retrieval (BM25 + Cosine), and agentic memory architecture.",
    url: "https://sh20raj.github.io/projects/debo",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://ph-files.imgix.net/cfa307d8-4afb-4bc7-934a-7ab7cf316aa7.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debo Case Study — Autonomous Personal AI Memory & RAG Pipeline",
    description:
      "Engineering case study on Debo: multimodal context ingestion, vector embedding pipelines, hybrid search retrieval (BM25 + Cosine), and agentic memory architecture.",
    creator: "@SH20RAJ",
    images: ["https://ph-files.imgix.net/cfa307d8-4afb-4bc7-934a-7ab7cf316aa7.png"],
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
                Case Study
              </span>
              <span className="text-xs text-muted-foreground">2025 – Present</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Debo — Autonomous Personal AI Memory &amp; Hybrid RAG Pipeline
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              Building a multimodal memory engine that embeds notes, browser clips, audio recordings, and conversations for sub-second semantic retrieval and context-aware conversational AI.
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
              <ExternalLink className="size-3.5" /> GitHub Repository
            </a>
            <a
              href="https://www.producthunt.com/products/debo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-3.5" /> Product Hunt
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">Hybrid RAG</p>
              <p className="text-xs text-muted-foreground">BM25 + Cosine Vectors</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">&lt; 150ms</p>
              <p className="text-xs text-muted-foreground">Retrieval Latency</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Multimodal</p>
              <p className="text-xs text-muted-foreground">Voice, Web, Docs &amp; Notes</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Solo Build</p>
              <p className="text-xs text-muted-foreground">Full-Stack &amp; AI Ingestion</p>
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
              <Brain className="size-4 text-foreground" /> 1. The Problem: Human Knowledge is Fragmented
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Knowledge workers capture dozens of knowledge fragments daily — voice memos, bookmarks, markdown notes, code snippets, and research PDFs. Standard search engines require exact keyword recall, while conventional LLMs suffer from context window limits and total lack of personal episodic memory.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Debo was engineered as a second brain operating system:</strong> continuously chunking, embedding, indexing, and synthesizing semantic context during natural conversation.
            </p>
          </section>

          {/* Section 2: Ingestion & Vector Pipeline */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Layers className="size-4 text-foreground" /> 2. Multimodal Ingestion &amp; Chunking Architecture
            </h2>
            <div className="rounded-lg border border-border p-4 bg-card font-mono text-xs text-muted-foreground space-y-2">
              <p className="text-foreground font-semibold">// MULTIMODAL RAG PIPELINE</p>
              <pre className="text-[11px] leading-relaxed text-foreground/90 overflow-x-auto">
{`┌───────────────────────────────────────┐
│ Input: Voice / Notes / Web / Markdown │
└───────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│ Recursive Semantic Boundary Chunking  │ ──► [Chunk Overlap: 15%]
└───────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│ Embedding: text-embedding-3 (1536 dim)│
└───────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│ Hybrid Store: Vectorize + PostgreSQL  │
└───────────────────────────────────────┘
                    │
     [Hybrid Search: BM25 + Cosine RRF]
                    │
                    ▼
┌───────────────────────────────────────┐
│ Synthesized Prompt Context to Agent   │
└───────────────────────────────────────┘`}
              </pre>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">Semantic Chunking:</strong> Rather than arbitrary token slicing, chunks are split at paragraph, markdown heading, and speech pause boundaries to preserve atomic meaning.
              </li>
              <li>
                <strong className="text-foreground">Reciprocal Rank Fusion (RRF):</strong> Combines BM25 lexical keyword matching with Cosine semantic similarity to prevent query drift and ensure exact keyword matches are never lost.
              </li>
            </ul>
          </section>

          {/* Section 3: Hardest Technical Challenges */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Zap className="size-4 text-foreground" /> 3. Eliminating Hallucinations &amp; Latency
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-border p-3.5 space-y-1.5 bg-card">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <ShieldCheck className="size-4 text-emerald-500" /> Grounded Attribution
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every response synthesized by the conversational agent includes precise citation anchors referencing the exact source note, timestamp, and chunk ID.
                </p>
              </div>

              <div className="rounded-lg border border-border p-3.5 space-y-1.5 bg-card">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Cpu className="size-4 text-blue-500" /> Temporal Decay Weights
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Retrieval ranking automatically scales scores based on document recency, prioritizing recent meetings and notes while allowing explicit chronological queries.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Key Takeaway */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">4. Engineering Takeaways</h2>
            <div className="rounded-lg border border-border p-4 space-y-2 bg-accent/20 text-xs text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Hybrid Retrieval is non-negotiable for personal memory:</strong> Vector embeddings alone struggle with acronyms, unique identifiers, and names. Implementing dual-index RRF ranking alongside semantic chunking transformed Debo into an ultra-reliable, production-grade second brain.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
