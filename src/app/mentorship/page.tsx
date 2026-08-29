import ServicePageLayout from "@/components/service-page-layout";
import { mentorshipConfig } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Mentorship & Systems Architecture Coaching | Shaswat Raj",
  description:
    "Technical mentorship for software engineers covering open-source contribution, system design, Next.js architecture, AI agents, and competitive problem solving.",
  alternates: { canonical: "https://sh20raj.github.io/mentorship" },
  openGraph: {
    title: "Engineering Mentorship & Systems Architecture Coaching | Shaswat Raj",
    description:
      "Technical mentorship for software engineers covering open-source contribution, system design, Next.js architecture, AI agents, and competitive problem solving.",
    url: "https://sh20raj.github.io/mentorship",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Mentorship & Systems Architecture Coaching | Shaswat Raj",
    description:
      "Technical mentorship for software engineers covering open-source, system design, and AI agents.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function MentorshipPage() {
  return (
    <ServicePageLayout
      label={mentorshipConfig.label}
      title={mentorshipConfig.title}
      subtitle={mentorshipConfig.subtitle}
      whoIsThisFor={mentorshipConfig.whoIsThisFor}
      deliverables={mentorshipConfig.deliverables}
      process={mentorshipConfig.process}
      faq={mentorshipConfig.faq}
      relatedProjects={mentorshipConfig.relatedProjects}
      testimonials={mentorshipConfig.testimonials}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Focus Topics</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Core areas for hands-on technical pair programming and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mentorshipConfig.topics?.map((topic, id) => (
            <div key={id} className="rounded-lg border border-border p-3.5 text-xs text-muted-foreground leading-relaxed flex items-start gap-2.5">
              <span className="text-foreground shrink-0 font-bold">•</span>
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
}
