import ServicePageLayout from "@/components/service-page-layout";
import { growthSystemsConfig } from "@/data/services";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Growth Systems, SEO Pages & Launch Content — Shaswat Raj",
  description:
    "Get SEO pages, launch copy, YouTube scripts, outreach systems, and content workflows for your product.",
  alternates: { canonical: "https://sh20raj.github.io/growth-systems" },
  openGraph: {
    title: "Growth Systems, SEO Pages & Launch Content — Shaswat Raj",
    description:
      "Get SEO pages, launch copy, YouTube scripts, outreach systems, and content workflows for your product.",
    url: "https://sh20raj.github.io/growth-systems",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Growth Systems, SEO Pages & Launch Content — Shaswat Raj",
    description:
      "Get SEO pages, launch copy, YouTube scripts, outreach systems, and content workflows for your product.",
    creator: "@SH20RAJ",
  },
};

const BLUR_FADE_DELAY = 0.04;

const growthDeliverables = [
  {
    title: "Launch Content",
    items: [
      "Product Hunt launch copy and assets",
      "X/Twitter launch thread",
      "Hacker News Show HN post",
      "Launch day checklist and timeline",
    ],
  },
  {
    title: "SEO & Content",
    items: [
      "SEO-optimized landing pages",
      "Blog posts and articles",
      "Programmatic SEO page structures",
      "Keyword research and content strategy",
    ],
  },
  {
    title: "Outreach & Growth",
    items: [
      "Cold email sequences",
      "Newsletter content",
      "YouTube video scripts",
      "Founder personal brand content",
    ],
  },
];

export default function GrowthSystemsPage() {
  return (
    <ServicePageLayout
      label={growthSystemsConfig.label}
      title={growthSystemsConfig.title}
      subtitle={growthSystemsConfig.subtitle}
      whoIsThisFor={growthSystemsConfig.whoIsThisFor}
      deliverables={growthSystemsConfig.deliverables}
      process={growthSystemsConfig.process}
      faq={growthSystemsConfig.faq}
      relatedProjects={growthSystemsConfig.relatedProjects}
    >
      <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[var(--duo-fox)]/10 text-[var(--duo-fox)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Growth Toolkit
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Content and systems that drive growth
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
              From launch day to ongoing content — everything you need to get
              attention and convert visitors.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-[800px] mx-auto">
        {growthDeliverables.map((group, id) => (
          <BlurFade key={id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-4 space-y-3 shadow-[0_2px_0_var(--duo-swan)]">
              <h3 className="font-bold">{group.title}</h3>
              <ul className="space-y-1.5">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 text-green-600 dark:text-green-400 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </div>
    </ServicePageLayout>
  );
}
