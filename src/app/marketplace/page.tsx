"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ShoppingCartIcon, ExternalLinkIcon, DownloadIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

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

      <section id="products" className="mx-auto w-full max-w-6xl">
        <Tabs defaultValue="templates" className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                <TabsTrigger value="templates">Landing Pages</TabsTrigger>
                <TabsTrigger value="uiux">UI/UX Assets</TabsTrigger>
              </TabsList>
            </div>
          </BlurFade>

          <TabsContent value="templates" className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {assets.templates.map((item, id) => (
                <ProductCard key={item.title} item={item} id={id} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uiux" className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {assets.uiux.map((item, id) => (
                <ProductCard key={item.title} item={item} id={id} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

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

function ProductCard({ item, id }: { item: any, id: number }) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
      <Card className="group overflow-hidden border bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="aspect-video overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="text-[10px] px-1 py-0">{tag}</Badge>
                ))}
              </div>
            </div>
            <span className="font-bold text-primary">{item.price}</span>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
            {item.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button asChild className="flex-1 gap-2">
            <Link href="mailto:sh20raj@gmail.com">
              {item.price === "Free" ? <DownloadIcon className="size-4" /> : <ShoppingCartIcon className="size-4" />}
              {item.price === "Free" ? "Download" : "Buy Now"}
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <ExternalLinkIcon className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}
