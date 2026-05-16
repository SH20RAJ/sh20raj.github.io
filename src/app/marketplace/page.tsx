import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MarketplaceClient } from "./marketplace-client";
import { marketplaceData } from "@/data/marketplace";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Marketplace — Premium Landing Pages & UI Assets by Shaswat Raj",
  description: "Curated landing pages, UI kits, and code templates to help you ship your next big idea faster.",
};

export default function MarketplacePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-32 py-12">
      <section id="header" className="mx-auto w-full max-w-6xl px-6 text-center space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/5 text-primary border-primary/20">
            Digital Assets
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl mt-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            {marketplaceData.title}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed mt-6">
            {marketplaceData.subtitle}
          </p>
        </BlurFade>
      </section>

      <MarketplaceClient assets={marketplaceData.assets} />

      <section id="cta" className="mx-auto w-full max-w-7xl px-6 py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 md:p-20 text-center text-primary-foreground">
            <div className="absolute top-0 right-0 -mr-24 -mt-24 size-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 size-96 rounded-full bg-black/10 blur-3xl" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-bold sm:text-6xl">Need a custom build?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-lg md:text-2xl leading-relaxed">
                I also build custom landing pages and SaaS MVPs tailored to your specific goals and target audience.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button asChild size="lg" className="h-16 rounded-full bg-white px-12 text-lg font-bold text-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  <Link href="/services">View Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 rounded-full border-2 border-white/20 bg-white/10 px-12 text-lg font-bold text-white shadow-2xl backdrop-blur-md hover:bg-white/20 hover:scale-105 active:scale-95 transition-all">
                  <Link href="mailto:sh20raj@gmail.com">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
