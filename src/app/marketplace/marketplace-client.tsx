"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ShoppingCartIcon, ExternalLinkIcon, DownloadIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

interface MarketplaceClientProps {
  assets: any;
}

export function MarketplaceClient({ assets }: MarketplaceClientProps) {
  return (
    <section id="products" className="mx-auto w-full max-w-7xl px-6">
      <Tabs defaultValue="templates" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex justify-center mb-16">
            <TabsList className="grid w-full max-w-[500px] h-14 grid-cols-2 p-1.5 bg-muted/50 rounded-2xl border backdrop-blur-md">
              <TabsTrigger value="templates" className="rounded-xl text-base font-bold data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all">Landing Pages</TabsTrigger>
              <TabsTrigger value="uiux" className="rounded-xl text-base font-bold data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all">UI/UX Assets</TabsTrigger>
            </TabsList>
          </div>
        </BlurFade>

        <TabsContent value="templates" className="space-y-8 outline-none">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {assets.templates.map((item: any, id: number) => (
              <ProductCard key={item.title} item={item} id={id} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="uiux" className="space-y-8 outline-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {assets.uiux.map((item: any, id: number) => (
              <ProductCard key={item.title} item={item} id={id} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function ProductCard({ item, id }: { item: any, id: number }) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
      <Card className="group relative overflow-hidden border-2 border-[var(--duo-swan)] bg-[var(--duo-polar)]/30 hover:border-[var(--duo-feather)]/30 transition-all duration-700 rounded-3xl shadow-[0_2px_0_var(--duo-swan)] hover:shadow-2xl hover:-translate-y-2">
        <div className="p-4">
          <div className="aspect-[16/10] overflow-hidden relative rounded-2xl">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
               <Button size="lg" variant="secondary" className="w-full rounded-2xl gap-3 backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/20 text-white font-bold h-14 shadow-2xl">
                  <ExternalLinkIcon className="size-5" /> Live Preview
               </Button>
            </div>
            <Badge className="absolute top-6 right-6 bg-white/95 text-black hover:bg-white backdrop-blur-md border-0 rounded-full px-5 py-2 text-sm font-black shadow-2xl">
              {item.price}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="p-6 pt-4 pb-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight leading-tight group-hover:text-[var(--duo-feather)] transition-colors">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-[var(--duo-feather)] bg-[var(--duo-feather)]/10 px-2 py-1 rounded-full border border-[var(--duo-feather)]/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0 pb-4">
          <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0 pb-6">
          {item.demo && item.purchase ? (
            <div className="flex gap-2 w-full">
              <Button asChild variant="outline" className="flex-1 h-11 rounded-xl gap-2 text-xs font-bold">
                <Link href={item.demo} target="_blank">
                  <ExternalLinkIcon className="size-4" /> Demo
                </Link>
              </Button>
              <Button asChild className="flex-1 h-11 rounded-xl gap-2 text-xs font-bold shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all active:translate-y-[4px] active:shadow-none bg-[var(--duo-feather)] text-white">
                <Link href={item.purchase} target="_blank">
                  <ShoppingCartIcon className="size-4" /> Buy
                </Link>
              </Button>
            </div>
          ) : (
            <Button asChild className="w-full h-12 rounded-xl gap-3 text-sm font-bold shadow-[0_5px_0_var(--duo-feather-shadow)] transition-all active:translate-y-[5px] active:shadow-none bg-[var(--duo-feather)] text-white">
              <Link href="https://payments.cashfree.com/forms/novira-ai" target="_blank">
                {item.price === "Free" ? <DownloadIcon className="size-5" /> : <ShoppingCartIcon className="size-5" />}
                {item.price === "Free" ? "Get it Free" : `Buy Template`}
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </BlurFade>
  );
}
