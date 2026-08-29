import ServicePageLayout from "@/components/service-page-layout";
import { aiAutomationConfig } from "@/data/services";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools & Autonomous Agent Development | Shaswat Raj",
  description:
    "Engineering production AI tools, Model Context Protocol (MCP) servers, agentic pipelines, and RAG architectures. Gemini API, Claude API, OpenAI.",
  alternates: {
    canonical: "https://sh20raj.github.io/ai-automation",
  },
  openGraph: {
    type: "website",
    title: "AI Tools & Autonomous Agent Development | Shaswat Raj",
    description:
      "Engineering production AI tools, Model Context Protocol (MCP) servers, agentic pipelines, and RAG architectures.",
    url: "https://sh20raj.github.io/ai-automation",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools & Autonomous Agent Development | Shaswat Raj",
    description:
      "Engineering production AI tools, Model Context Protocol (MCP) servers, agentic pipelines, and RAG architectures.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

const capabilities = [
  {
    title: "Model Context Protocol (MCP) Servers",
    description:
      "Engineered protocol servers on Cloudflare Workers and Node.js to bridge LLMs with databases, APIs, and file systems.",
  },
  {
    title: "Multi-turn Agent Workflows",
    description:
      "Autonomous agents with tool-calling capabilities, recursive reasoning loops, and structured output parsing.",
  },
  {
    title: "Production RAG Systems",
    description:
      "Retrieval-Augmented Generation pipelines using vector embeddings, hybrid keyword reranking, and semantic chunking.",
  },
  {
    title: "Multimodal Processing Pipelines",
    description:
      "Vision and voice intelligence workflows for real-time document extraction, audio transcription, and image analysis.",
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
      testimonials={aiAutomationConfig.testimonials}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Core AI Architectures</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Specialized engineering capabilities across modern LLM and agent stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-lg border border-border p-4 space-y-1">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
}
