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
    <section id="products" className="mx-auto w-full max-w-6xl">
      <Tabs defaultValue="templates" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2 p-1 bg-muted/50 rounded-2xl border">
              <TabsTrigger value="templates" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Landing Pages</TabsTrigger>
              <TabsTrigger value="uiux" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">UI/UX Assets</TabsTrigger>
            </TabsList>
          </div>
        </BlurFade>

        <TabsContent value="templates" className="space-y-8 outline-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      <Card className="group relative overflow-hidden border-0 bg-secondary/30 hover:bg-secondary/50 transition-all duration-500 rounded-3xl">
        <div className="aspect-[16/10] overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
             <Button size="sm" variant="secondary" className="w-full rounded-xl gap-2 backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 text-white">
                <ExternalLinkIcon className="size-4" /> Live Preview
             </Button>
          </div>
          <Badge className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white backdrop-blur-md border-0 rounded-full px-3 py-1 text-xs font-bold shadow-xl">
            {item.price}
          </Badge>
        </div>
        
        <CardHeader className="p-6 pb-2">
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight leading-none group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/70 bg-muted/50 px-2 py-0.5 rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2 min-h-[40px]">
            {item.description}
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button asChild className="w-full h-12 rounded-2xl gap-3 text-base font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 bg-primary text-primary-foreground">
            <Link href="mailto:sh20raj@gmail.com">
              {item.price === "Free" ? <DownloadIcon className="size-5" /> : <ShoppingCartIcon className="size-5" />}
              {item.price === "Free" ? "Get it Free" : `Buy Template`}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}
