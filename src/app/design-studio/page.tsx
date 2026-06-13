import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { MarketplaceBanner } from "@/components/marketplace-banner";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRightIcon,
  Palette,
  Utensils,
  Sparkles,
  Megaphone,
  ShoppingBag,
  MonitorPlay,
  Calendar,
  BookOpen,
  Package,
  Rocket,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import {
  designStudioCategories,
  designStudioPackages,
  designStudioFaqs,
  designStudioProcess,
} from "@/data/design-studio";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "AI Design Studio | Posters, Brand Kits & Product Ads by Shaswat Raj",
  description:
    "Get premium posters, social media creatives, brand kits, product ads, menus, thumbnails, packaging mockups, and startup launch graphics designed fast.",
  alternates: {
    canonical: "https://sh20raj.github.io/design-studio",
  },
  openGraph: {
    title: "AI Design Studio | Posters, Brand Kits & Product Ads by Shaswat Raj",
    description:
      "Get premium posters, social media creatives, brand kits, product ads, menus, thumbnails, packaging mockups, and startup launch graphics designed fast.",
    url: "https://sh20raj.github.io/design-studio",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Design Studio | Posters, Brand Kits & Product Ads by Shaswat Raj",
    description:
      "Get premium posters, social media creatives, brand kits, product ads, menus, thumbnails, packaging mockups, and startup launch graphics designed fast.",
    creator: "@SH20RAJ",
  },
};

const categoryIcons: Record<string, any> = {
  "restaurant-posters": Utensils,
  "beauty-product-designs": Sparkles,
  "brand-kits": Palette,
  "social-media-posts": Megaphone,
  "product-ads": ShoppingBag,
  "youtube-thumbnails": MonitorPlay,
  "event-posters": Calendar,
  "menu-designs": BookOpen,
  "packaging-mockups": Package,
  "startup-launch-kits": Rocket,
};

const accentColors = [
  { bg: "bg-[var(--duo-feather)]/10", text: "text-[var(--duo-feather)]", hoverBg: "group-hover:bg-[var(--duo-feather)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-macaw)]/10", text: "text-[var(--duo-macaw)]", hoverBg: "group-hover:bg-[var(--duo-macaw)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-beetle)]/10", text: "text-[var(--duo-beetle)]", hoverBg: "group-hover:bg-[var(--duo-beetle)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-fox)]/10", text: "text-[var(--duo-fox)]", hoverBg: "group-hover:bg-[var(--duo-fox)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-bee)]/10", text: "text-[var(--duo-bee)]", hoverBg: "group-hover:bg-[var(--duo-bee)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-cardinal)]/10", text: "text-[var(--duo-cardinal)]", hoverBg: "group-hover:bg-[var(--duo-cardinal)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-feather)]/10", text: "text-[var(--duo-feather)]", hoverBg: "group-hover:bg-[var(--duo-feather)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-macaw)]/10", text: "text-[var(--duo-macaw)]", hoverBg: "group-hover:bg-[var(--duo-macaw)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-beetle)]/10", text: "text-[var(--duo-beetle)]", hoverBg: "group-hover:bg-[var(--duo-beetle)]", hoverText: "group-hover:text-white" },
  { bg: "bg-[var(--duo-fox)]/10", text: "text-[var(--duo-fox)]", hoverBg: "group-hover:bg-[var(--duo-fox)]", hoverText: "group-hover:text-white" },
];

export default function DesignStudioPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <MarketplaceBanner />
      {/* Hero */}
      <section id="hero" className="pt-16 pb-12">
        <div className="mx-auto w-full max-w-5xl px-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="inline-block rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                Design Studio
              </div>
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl max-w-[650px]">
                Premium Design for Brands That Need to Look Good Fast
              </h1>
              <p className="text-muted-foreground max-w-[500px] text-sm md:text-base leading-relaxed">
                Posters, product ads, brand kits, social media creatives, menus, thumbnails, packaging mockups, and launch graphics — designed fast, delivered ready.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="#categories"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-1.5"
                >
                  View Work <ArrowRightIcon className="size-3.5" />
                </Link>
                <Link
                  href="mailto:sh20raj@gmail.com?subject=Design%20Pack%20Inquiry"
                  className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
                >
                  Get Design Pack
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Selling points */}
      <section id="benefits" className="pb-12">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Zap, text: "Fast delivery — 24 to 48 hours" },
              { icon: CheckCircle2, text: "Ready for Instagram, WhatsApp, ads & print" },
              { icon: Palette, text: "Clean premium design, not generic AI-slop" },
              { icon: ShoppingBag, text: "Great for local businesses, creators & D2C brands" },
            ].map((item, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border-2 border-[var(--duo-swan)] bg-card p-4 shadow-[0_2px_0_var(--duo-swan)]">
                  <item.icon className="size-5 text-[var(--duo-feather)] shrink-0" />
                  <p className="text-xs font-bold text-[var(--duo-eel)] dark:text-foreground">{item.text}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-extrabold tracking-tight text-center">Design Categories</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designStudioCategories.map((cat, id) => {
              const Icon = categoryIcons[cat.slug] || Palette;
              const accent = accentColors[id % accentColors.length];
              return (
                <BlurFade key={cat.slug} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
                  <Link href={`/design-studio/${cat.slug}`} className="group block h-full">
                    <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className={`size-11 rounded-xl ${accent.bg} flex items-center justify-center mb-3 ${accent.hoverBg} ${accent.hoverText} transition-all duration-300`}>
                        <Icon className={`size-5 ${accent.text} ${accent.hoverText} transition-colors`} />
                      </div>
                      <h3 className="font-bold text-sm mb-1 group-hover:text-[var(--duo-feather)] transition-colors">{cat.shortTitle}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-2">{cat.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[var(--duo-feather)]">{cat.startingPrice}</span>
                        <span className={`inline-flex items-center gap-1 text-xs font-bold ${accent.text}`}>
                          View <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured samples */}
      <section id="samples" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-extrabold tracking-tight text-center">Sample Work</h2>
          </BlurFade>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {designStudioCategories
              .flatMap((cat) =>
                cat.samples.slice(0, 1).map((s) => ({
                  ...s,
                  categorySlug: cat.slug,
                  categoryTitle: cat.shortTitle,
                }))
              )
              .map((sample, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 7 + id * 0.03}>
                  <Link href={`/design-studio/${sample.categorySlug}`} className="group block">
                    <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card overflow-hidden shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="aspect-square overflow-hidden bg-[var(--duo-polar)]/60 flex items-center justify-center">
                        <div className="text-center p-4 space-y-1">
                          <Palette className="size-8 text-[var(--duo-feather)]/40 mx-auto" />
                          <p className="text-xs font-bold text-muted-foreground">{sample.title}</p>
                          <p className="text-[10px] text-muted-foreground/70">{sample.categoryTitle}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </BlurFade>
              ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="text-center space-y-2">
              <h2 className="text-xl font-extrabold tracking-tight">Design Packages</h2>
              <p className="text-xs text-muted-foreground max-w-[400px] mx-auto">
                Affordable design packs for every need. Custom quotes available for larger projects.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {designStudioPackages.map((pkg, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                <div className={`rounded-xl border-2 ${pkg.recommended ? "border-[var(--duo-feather)]" : "border-[var(--duo-swan)]"} bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] h-full flex flex-col ${pkg.recommended ? "ring-1 ring-[var(--duo-feather)]/20" : ""}`}>
                  {pkg.recommended && (
                    <Badge className="w-fit mb-3 bg-[var(--duo-feather)] text-white border-0 text-[10px] font-bold uppercase tracking-wider">
                      Recommended
                    </Badge>
                  )}
                  <h3 className="font-extrabold text-base mb-1">{pkg.name}</h3>
                  <p className="text-2xl font-extrabold text-[var(--duo-feather)] mb-2">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mb-4">{pkg.description}</p>
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="size-3.5 text-[var(--duo-feather)] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="mailto:sh20raj@gmail.com?subject=Design%20Pack%20Inquiry"
                    className={`mt-5 inline-flex h-9 items-center justify-center rounded-full ${pkg.recommended ? "bg-[var(--duo-feather)] text-white shadow-[0_3px_0_var(--duo-feather-shadow)]" : "border-2 border-[var(--duo-swan)] text-[var(--duo-eel)] dark:text-foreground shadow-[0_3px_0_var(--duo-swan)]"} px-5 text-xs font-bold uppercase tracking-wider transition-all hover:brightness-105 active:translate-y-1 active:shadow-none`}
                  >
                    Get Started
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-extrabold tracking-tight text-center">How It Works</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto">
            {designStudioProcess.map((item, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <div className="relative rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)] text-center space-y-2">
                  <span className="inline-flex items-center justify-center size-10 rounded-full bg-[var(--duo-feather)] text-white text-sm font-extrabold mx-auto">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-16">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-extrabold tracking-tight text-center">FAQ</h2>
          </BlurFade>
          <div className="max-w-[700px] mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {designStudioFaqs.map((item, id) => (
                <AccordionItem key={id} value={`item-${id}`} className="border-b border-[var(--duo-swan)]">
                  <AccordionTrigger className="text-sm font-bold text-left hover:no-underline hover:text-[var(--duo-feather)] transition-colors py-3">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="pb-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="relative overflow-hidden rounded-2xl bg-[var(--duo-feather)] p-10 text-center text-white">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-extrabold text-white">Ready to level up your brand visuals?</h3>
                <p className="text-white/95 text-xs max-w-lg mx-auto leading-relaxed">
                  Send me a message with your brand, what you need, and your timeline. I&apos;ll get back to you within 24 hours with a custom quote.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Link
                    href="mailto:sh20raj@gmail.com?subject=Design%20Pack%20Inquiry"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
                  >
                    Get a Design Pack
                  </Link>
                  <Link
                    href="#categories"
                    className="inline-flex h-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 active:translate-y-1"
                  >
                    View Sample Work
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
