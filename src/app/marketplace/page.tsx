import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MarketplaceClient } from "./marketplace-client";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Marketplace — Premium Landing Pages & UI Assets by Shaswat Raj",
  description: "Curated landing pages, UI kits, and code templates to help you ship your next big idea faster.",
};

const assets = {
  templates: [
    {
      title: "SaaS Starter Kit",
      price: "$49",
      description: "A complete Next.js starter with auth, database, and stripe integration.",
      image: "https://socialify.git.ci/SH20RAJ/30tools/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      tags: ["Next.js", "Tailwind", "Stripe"],
    },
    {
      title: "AI Waitlist Template",
      price: "Free",
      description: "Clean, high-converting waitlist page for your next AI tool launch.",
      image: "https://socialify.git.ci/SH20RAJ/debo/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      tags: ["React", "Waitlist", "SEO"],
    },
    {
      title: "Minimal Portfolio Pro",
      price: "$29",
      description: "Premium portfolio theme with smooth animations and dark mode.",
      image: "https://socialify.git.ci/SH20RAJ/index-fast/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      tags: ["Portfolio", "MagicUI", "Next.js"],
    },
    {
      title: "Clean Agency Theme",
      price: "$39",
      description: "Modern landing page for agencies, studios, and service businesses.",
      image: "https://socialify.git.ci/shade-solutions/mcp-pure/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      tags: ["Agency", "Responsive", "UI"],
    },
  ],
  uiux: [
    {
      title: "Modern SaaS UI Kit",
      price: "$19",
      description: "Figma UI kit with 50+ components for modern SaaS applications.",
      image: "https://socialify.git.ci/SH20RAJ/indexfast/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      tags: ["Figma", "UI Kit", "SaaS"],
    },
    {
      title: "Icon Pack - Minimal",
      price: "Free",
      description: "200+ minimal line icons for web and mobile interfaces.",
      image: "https://socialify.git.ci/unstory-app/storix/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Solid&theme=Auto",
      tags: ["Icons", "SVG", "Minimal"],
    },
  ]
};

export default function MarketplacePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 py-12 px-6">
      <section id="header" className="mx-auto w-full max-w-4xl text-center space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Badge variant="outline" className="px-3 py-1">Marketplace</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mt-2">
            Launch faster with premium assets.
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Curated landing pages, UI kits, and code templates to help you ship your next big idea.
          </p>
        </BlurFade>
      </section>

      <MarketplaceClient assets={assets} />

      <section id="cta" className="mx-auto w-full max-w-4xl py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-3xl bg-primary p-12 text-center text-primary-foreground space-y-6">
            <h2 className="text-3xl font-bold sm:text-5xl">Need a custom build?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              I also build custom landing pages and SaaS MVPs tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/services">View Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="mailto:sh20raj@gmail.com">Contact Me</Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
