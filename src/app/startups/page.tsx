import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Startups | SH20RAJ",
  description: "Showcasing my entrepreneurial journey, from failed experiments to running startups.",
};

const BLUR_FADE_DELAY = 0.04;

const startups = [
  {
    name: "Draftly AI",
    status: "Running",
    description: "AI-driven content generation for technical writers.",
    link: "https://draftly.ai",
  },
  {
    name: "CloudOps Tools",
    status: "Running",
    description: "Suite of tools for AWS infrastructure management.",
    link: "https://github.com/SH20RAJ/cloudops",
  },
  {
    name: "CryptoBot v1",
    status: "Failed",
    description: "Automated trading bot for early-stage crypto assets.",
    link: "https://github.com/sh20raj-dump",
  },
  {
    name: "ShopEase",
    status: "Failed",
    description: "Hyper-local grocery delivery platform.",
    link: "https://github.com/sh20raj-dump",
  },
];

export default function StartupsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="startups">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Entrepreneurial Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Startups & Ventures
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Building since Class 7th. Some thrived, some failed, all taught me invaluable lessons.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid gap-4 sm:grid-cols-2">
            {startups.map((startup, id) => (
              <BlurFade
                key={startup.name}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              >
                <div className="rounded-xl border bg-card p-4 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{startup.name}</h3>
                    <Badge variant={startup.status === "Running" ? "default" : "secondary"}>
                      {startup.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {startup.description}
                  </p>
                  <Link href={startup.link} target="_blank" className="text-xs text-primary underline">
                    View Project
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="rounded-2xl bg-muted/50 p-8 text-center space-y-4 border border-dashed">
              <h3 className="text-xl font-bold">Interested in investing or collaborating?</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                I'm always working on the next big idea. Check out my ideas repository or connect with me to discuss future ventures.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="https://github.com/SH20RAJ/ideas">Browse Ideas Repo</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:sh20raj@gmail.com">Contact Me</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
