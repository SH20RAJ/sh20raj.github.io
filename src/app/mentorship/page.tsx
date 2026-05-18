import ServicePageLayout from "@/components/service-page-layout";
import { mentorshipConfig } from "@/data/services";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Web Development & AI Tools Mentorship — Shaswat Raj",
  description:
    "1:1 mentorship for web development, AI tools, GitHub, freelancing, and shipping real projects.",
  alternates: { canonical: "https://sh20raj.github.io/mentorship" },
  openGraph: {
    title: "Web Development & AI Tools Mentorship — Shaswat Raj",
    description:
      "1:1 mentorship for web development, AI tools, GitHub, freelancing, and shipping real projects.",
    url: "https://sh20raj.github.io/mentorship",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Development & AI Tools Mentorship — Shaswat Raj",
    description:
      "1:1 mentorship for web development, AI tools, GitHub, freelancing, and shipping real projects.",
    creator: "@SH20RAJ",
  },
};

const BLUR_FADE_DELAY = 0.04;

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
    >
      <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[var(--duo-bee)]/10 text-[var(--duo-fox)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Topics I Cover
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What you can learn
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
              Sessions are personalized to your goals. Here are the most common
              topics.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 max-w-[800px] mx-auto">
        {mentorshipConfig.topics?.map((topic, id) => (
          <BlurFade key={id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <div className="flex items-start gap-2 text-sm rounded-xl border-2 border-[var(--duo-swan)] bg-card p-3 shadow-[0_2px_0_var(--duo-swan)]">
              <span className="mt-0.5 text-[var(--duo-feather)] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-muted-foreground">{topic}</span>
            </div>
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="rounded-2xl bg-[var(--duo-feather)]/10 p-8 text-center space-y-4 border-2 border-[var(--duo-feather)]/20 max-w-[800px] mx-auto">
          <h3 className="text-xl font-bold">Ready to start learning?</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Send me a message with your goals and current skill level. I&apos;ll
            suggest a personalized plan.
          </p>
          <Button asChild>
            <Link href="mailto:sh20raj@gmail.com">Book Mentorship</Link>
          </Button>
        </div>
      </BlurFade>
    </ServicePageLayout>
  );
}
