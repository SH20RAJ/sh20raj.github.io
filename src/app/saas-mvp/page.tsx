import ServicePageLayout from "@/components/service-page-layout";
import { saasMvpConfig } from "@/data/services";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
  title: "SaaS MVP Developer for Founders — Shaswat Raj",
  description:
    "Build your SaaS MVP with dashboards, auth, payments, APIs, databases, AI features, and deployment.",
  alternates: {
    canonical: "https://sh20raj.github.io/saas-mvp",
  },
  openGraph: {
    type: "website",
    title: "SaaS MVP Developer for Founders — Shaswat Raj",
    description:
      "Build your SaaS MVP with dashboards, auth, payments, APIs, databases, AI features, and deployment.",
    url: "https://sh20raj.github.io/saas-mvp",
    siteName: "Shaswat Raj",
    creator: "Shaswat Raj",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS MVP Developer for Founders — Shaswat Raj",
    description:
      "Build your SaaS MVP with dashboards, auth, payments, APIs, databases, AI features, and deployment.",
    creator: "@SH20RAJ",
  },
};

const mvpCapabilities = [
  {
    emoji: "\u{1F3D7}\u{FE0F}",
    title: "Architecture & Planning",
    description:
      "Tech stack selection, database schema design, API structure, and component hierarchy — all planned before writing a single line of code.",
  },
  {
    emoji: "\u{1F510}",
    title: "Authentication",
    description:
      "Email/password, OAuth (Google, GitHub), magic links, and role-based access control with secure session management.",
  },
  {
    emoji: "\u{1F4A8}",
    title: "Database & API",
    description:
      "PostgreSQL or MongoDB with Prisma, REST or tRPC API routes, server actions, and type-safe data fetching.",
  },
  {
    emoji: "\u{1F4B3}",
    title: "Payments",
    description:
      "Stripe or Lemon Squeezy integration with subscriptions, one-time payments, webhooks, and customer portals.",
  },
  {
    emoji: "\u{1F6E1}\u{FE0F}",
    title: "Admin Panel",
    description:
      "Dashboard to manage users, view analytics, handle support tickets, and configure product settings.",
  },
  {
    emoji: "\u{1F916}",
    title: "AI Features",
    description:
      "Chatbots, content generation, RAG search, voice interfaces, and agent workflows using OpenAI, Claude, or Gemini APIs.",
  },
  {
    emoji: "\u{1F680}",
    title: "Deployment",
    description:
      "Production-ready deployment on Vercel or Cloudflare with CI/CD, environment variables, monitoring, and error tracking.",
  },
  {
    emoji: "\u{1F4DD}",
    title: "Documentation",
    description:
      "Technical documentation, API references, setup guides, and a clean handoff so your team can maintain and extend the product.",
  },
];

export default function SaasMvpPage() {
  return (
    <ServicePageLayout
      label={saasMvpConfig.label}
      title={saasMvpConfig.title}
      subtitle={saasMvpConfig.subtitle}
      whoIsThisFor={saasMvpConfig.whoIsThisFor}
      deliverables={saasMvpConfig.deliverables}
      process={saasMvpConfig.process}
      faq={saasMvpConfig.faq}
      relatedProjects={saasMvpConfig.relatedProjects}
      testimonials={saasMvpConfig.testimonials}
    >
      {/* MVP Capabilities Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              What&apos;s Included
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Full-stack MVP, ready to launch
            </h2>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {mvpCapabilities.map((item, id) => (
          <BlurFade
            key={id}
            delay={BLUR_FADE_DELAY * 5 + id * 0.05}
          >
            <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-4 shadow-[0_2px_0_var(--duo-swan)]">
              <div className="text-2xl mb-2">{item.emoji}</div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
      <div className="max-w-[800px] mx-auto mt-6">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="rounded-2xl bg-[var(--duo-feather)]/10 p-8 text-center space-y-4 border-2 border-[var(--duo-feather)]/20">
            <h3 className="text-xl font-bold">
              Every MVP is different. Let&apos;s discuss your idea.
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Tell me what you&apos;re building and I&apos;ll scope the right
              solution for your timeline and budget.
            </p>
            <Button asChild>
              <Link href="mailto:sh20raj@gmail.com">Get in Touch</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </ServicePageLayout>
  );
}
