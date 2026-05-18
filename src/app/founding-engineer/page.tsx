import ServicePageLayout from "@/components/service-page-layout";
import { foundingEngineerConfig } from "@/data/services";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Founding Engineer & Technical Cofounder — Shaswat Raj",
  description:
    "Work with Shaswat Raj as a founding engineer or technical builder for MVPs, AI tools, dashboards, and launch-ready products.",
  alternates: { canonical: "https://sh20raj.github.io/founding-engineer" },
  openGraph: {
    title: "Founding Engineer & Technical Cofounder — Shaswat Raj",
    description:
      "Work with Shaswat Raj as a founding engineer or technical builder for MVPs, AI tools, dashboards, and launch-ready products.",
    url: "https://sh20raj.github.io/founding-engineer",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Founding Engineer & Technical Cofounder — Shaswat Raj",
    description:
      "Work with Shaswat Raj as a founding engineer or technical builder for MVPs, AI tools, dashboards, and launch-ready products.",
    creator: "@SH20RAJ",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function FoundingEngineerPage() {
  return (
    <ServicePageLayout
      label={foundingEngineerConfig.label}
      title={foundingEngineerConfig.title}
      subtitle={foundingEngineerConfig.subtitle}
      whoIsThisFor={foundingEngineerConfig.whoIsThisFor}
      deliverables={foundingEngineerConfig.deliverables}
      process={foundingEngineerConfig.process}
      faq={foundingEngineerConfig.faq}
      relatedProjects={foundingEngineerConfig.relatedProjects}
      testimonials={foundingEngineerConfig.testimonials}
    >
      <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[var(--duo-beetle)]/10 text-[var(--duo-beetle)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Best Fit
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Is this right for you?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
              I&apos;m selective about engagements. Here&apos;s what I look for in
              a founding partner.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 max-w-[800px] mx-auto">
        {foundingEngineerConfig.bestFitCriteria?.map((criteria, id) => (
          <BlurFade key={id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <div className="flex items-start gap-3 rounded-xl border-2 border-[var(--duo-swan)] bg-card p-4 shadow-[0_2px_0_var(--duo-swan)]">
              <span className="inline-flex items-center justify-center size-8 rounded-full bg-[var(--duo-beetle)] text-white text-sm font-bold shrink-0">
                {id + 1}
              </span>
              <p className="text-muted-foreground">{criteria}</p>
            </div>
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="rounded-2xl bg-[var(--duo-beetle)]/10 p-8 text-center space-y-4 border-2 border-[var(--duo-beetle)]/20 max-w-[800px] mx-auto">
          <h3 className="text-xl font-bold">Have a startup idea?</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Tell me about your idea, market, and what you need. I&apos;ll get
            back to you within 24 hours if it looks like a good fit.
          </p>
          <Button asChild>
            <Link href="mailto:sh20raj@gmail.com">Pitch Me Your Startup</Link>
          </Button>
        </div>
      </BlurFade>
    </ServicePageLayout>
  );
}
