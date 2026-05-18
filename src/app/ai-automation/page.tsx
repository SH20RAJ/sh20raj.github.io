import ServicePageLayout from "@/components/service-page-layout";
import { aiAutomationConfig } from "@/data/services";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "AI Automation Developer — Chatbots, Agents & Workflows",
  description:
    "Build AI chatbots, agents, RAG systems, transcript workflows, MCP tools, and custom automation dashboards.",
  alternates: {
    canonical: "https://sh20raj.github.io/ai-automation",
  },
  openGraph: {
    type: "website",
    title: "AI Automation Developer — Chatbots, Agents & Workflows",
    description:
      "Build AI chatbots, agents, RAG systems, transcript workflows, MCP tools, and custom automation dashboards.",
    url: "https://sh20raj.github.io/ai-automation",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Developer — Chatbots, Agents & Workflows",
    description:
      "Build AI chatbots, agents, RAG systems, transcript workflows, MCP tools, and custom automation dashboards.",
    creator: "@SH20RAJ",
  },
};

const capabilities = [
  {
    title: "Chatbots",
    description:
      "Custom AI chatbots trained on your data, docs, and workflows",
  },
  {
    title: "RAG Systems",
    description:
      "Retrieval-augmented generation for searching and Q&A over your content",
  },
  {
    title: "Agent Workflows",
    description:
      "Multi-step AI agents that can plan, execute, and iterate",
  },
  {
    title: "Content Automation",
    description:
      "Automated blog posts, social media, and email content generation",
  },
  {
    title: "Transcript Processing",
    description:
      "Video and audio transcription, summarization, and extraction",
  },
  {
    title: "MCP Integration",
    description:
      "Model Context Protocol servers for connecting AI to external tools",
  },
];

export default function AiAutomationPage() {
  return (
    <ServicePageLayout
      label={aiAutomationConfig.label}
      title={aiAutomationConfig.title}
      subtitle={aiAutomationConfig.subtitle}
      whoIsThisFor={aiAutomationConfig.whoIsThisFor}
      deliverables={aiAutomationConfig.deliverables}
      process={aiAutomationConfig.process}
      faq={aiAutomationConfig.faq}
      relatedProjects={aiAutomationConfig.relatedProjects}
    >
      {/* AI Capabilities */}
      <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[var(--duo-macaw)]/10 text-[var(--duo-macaw)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              AI Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              AI tools I build
            </h2>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {capabilities.map((item, id) => (
          <BlurFade
            key={id}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-4 space-y-1 shadow-[0_2px_0_var(--duo-swan)]">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* CTA */}
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="rounded-2xl bg-[var(--duo-macaw)]/10 p-8 text-center space-y-4 border-2 border-[var(--duo-macaw)]/20 max-w-[800px] mx-auto">
          <h3 className="text-xl font-bold">Have an AI idea?</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Tell me about your use case and I&apos;ll help you figure out the
            best approach.
          </p>
          <Button asChild>
            <Link href="mailto:sh20raj@gmail.com">Get in Touch</Link>
          </Button>
        </div>
      </BlurFade>
    </ServicePageLayout>
  );
}
