import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, GitPullRequest, ShieldCheck, Zap, Terminal, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Gemini CLI Case Study — PR #20778 Stream Cancellation Architecture",
  description:
    "Engineering case study on fixing stream cancellation race conditions and memory leaks in Google's official gemini-cli repository (PR #20778).",
  alternates: {
    canonical: "https://sh20raj.github.io/projects/gemini-cli",
  },
  openGraph: {
    title: "Google Gemini CLI Case Study — PR #20778 Stream Cancellation Architecture | Shaswat Raj",
    description:
      "Engineering case study on fixing stream cancellation race conditions and memory leaks in Google's official gemini-cli repository (PR #20778).",
    url: "https://sh20raj.github.io/projects/gemini-cli",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "article",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Gemini CLI Case Study — PR #20778",
    description:
      "Engineering case study on fixing stream cancellation race conditions and memory leaks in Google's official gemini-cli repository (PR #20778).",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function GeminiCliCaseStudy() {
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
                Open Source Core Contribution
              </span>
              <span className="text-xs text-muted-foreground">Google Gemini Ecosystem</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Google Gemini CLI — Fixing Stream Cancellation &amp; Memory Leaks (PR #20778)
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              Traced and resolved an asynchronous stream cancellation flaw in Google&apos;s official <code>google-gemini/gemini-cli</code> repository, threading AbortSignal through multi-turn compression pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5">
            <a
              href="https://github.com/google-gemini/gemini-cli/pull/20778"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-md hover:bg-foreground/90 transition-colors"
            >
              <GitPullRequest className="size-3.5" /> View Merged Pull Request #20778
            </a>
            <a
              href="https://github.com/google-gemini/gemini-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-3.5" /> google-gemini/gemini-cli
            </a>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xl font-bold tracking-tight">100%</p>
              <p className="text-xs text-muted-foreground">Merged by Google Team</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">0 Leaks</p>
              <p className="text-xs text-muted-foreground">Detached Promises Fixed</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">TypeScript</p>
              <p className="text-xs text-muted-foreground">Async Architecture</p>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Core Fix</p>
              <p className="text-xs text-muted-foreground">AbortSignal Propagation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-12">
          {/* Section 1: The Bug */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Zap className="size-4 text-foreground" /> 1. The Problem: Detached In-Flight LLM Invocations
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In multi-turn terminal chat sessions with Gemini, pressing <kbd className="px-1 py-0.5 font-mono text-xs bg-accent rounded border border-border">Ctrl+C</kbd> or issuing an abort command cancelled the active UI stream, but failed to cancel the background chat history compression service.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Because the compression routine was invoked on a detached promise chain without receiving the active turn&apos;s <code>AbortSignal</code>, background network requests continued executing against Google Cloud APIs — causing billing spikes, memory leaks, and race conditions on subsequent prompt dispatches.
            </p>
          </section>

          {/* Section 2: Technical Fix */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <Terminal className="size-4 text-foreground" /> 2. The Solution: End-to-End AbortSignal Threading
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I refactored the execution pipeline across <code>LocalAgentExecutor</code>, <code>GeminiClient</code>, and the <code>ChatCompressionService</code>:
            </p>

            <pre className="p-3.5 rounded-lg bg-card border border-border font-mono text-xs text-muted-foreground overflow-x-auto leading-normal">
{`// Refactored async execution boundary with AbortSignal threading
async executeTurn(prompt: string, options: { signal?: AbortSignal }) {
  const { signal } = options;
  
  // Guaranteed signal propagation through compression middleware
  if (this.shouldCompressHistory()) {
    await this.compressionService.compress({
      history: this.chatHistory,
      signal, // Propagated abort controller
    });
  }

  return this.client.streamGenerateContent(prompt, { signal });
}`}
            </pre>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
              <li>
                <strong className="text-foreground">Graceful Cleanup:</strong> Guaranteed that all HTTP sockets and background workers terminate immediately upon user cancellation.
              </li>
              <li>
                <strong className="text-foreground">Deterministic State:</strong> Eliminated out-of-order history compression race conditions when rapid consecutive prompts are entered.
              </li>
            </ul>
          </section>

          {/* Section 3: Review & Impact */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500" /> 3. Code Review &amp; Upstream Merge
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The pull request underwent review by Google engineers, verified with unit test suites and integration tests across Linux, macOS, and Windows runtime environments, and was merged into main.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
