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
    name: "Debo",
    status: "Running",
    description: "Your Life's Memory Engine. AI-powered product that captures context and makes it searchable.",
    link: "https://debo.life",
  },
  {
    name: "IndexFast",
    status: "Running",
    description: "The first MCP-native indexing platform. Index URLs to Google and Bing instantly from your IDE.",
    link: "https://indexfast.co",
  },
  {
    name: "MCP Pure",
    status: "Running",
    description: "A central hub for high-performance Model Context Protocol (MCP) servers on Cloudflare Workers.",
    link: "https://mcppure.shraj.workers.dev/",
  },
  {
    name: "Wify",
    status: "Running",
    description: "A modern, mobile-first, swipe-based text story platform with TikTok-style UX.",
    link: "https://wify.my",
  },
  {
    name: "Unstory",
    status: "Running",
    description: "Strategic intelligence platform tracking AI, markets, and power shifts for high-agency professionals.",
    link: "https://unstory.app",
  },
  {
    name: "30tools",
    status: "Running",
    description: "A collection of fast, simple browser tools for developers and creators.",
    link: "https://30tools.com",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Startups & Ventures
                </h1>
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
