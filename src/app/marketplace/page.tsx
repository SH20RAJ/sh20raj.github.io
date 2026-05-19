import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Script from "next/script";
import {
  ExternalLinkIcon,
  ShoppingCartIcon,
  CreditCardIcon,
} from "lucide-react";

export const metadata = {
  title: "Marketplace — Premium Digital Products by Shaswat Raj",
  description: "Landing page templates, SaaS guides, AI developer tools, and launch kits. Buy on Gumroad or pay via PayPal.",
};

const BLUR_FADE_DELAY = 0.04;

const products = [
  {
    name: "XORA – AI SaaS Landing Page Template",
    price: "$10+",
    description: "Stunning, modern, responsive AI SaaS landing page template. Pay what you want.",
    url: "https://sh20raj.gumroad.com/l/rrniov",
    image: "https://public-files.gumroad.com/usds0aocmk7gfjyymbkl9rq2dr5l",
    tags: ["Next.js", "AI", "SaaS"],
  },
  {
    name: "The Psychology of SaaS",
    price: "$25",
    description: "Build addictive, billion-dollar products with behavioral science. eBook.",
    url: "https://sh20raj.gumroad.com/l/ucggab",
    image: "https://public-files.gumroad.com/y20zt152buqwcre6bokew56s8r2l",
    tags: ["eBook", "SaaS", "Psychology"],
  },
  {
    name: "SearchFolio – Google-Style Portfolio",
    price: "$17+",
    description: "The ultimate Google-style portfolio template. Pay what you want.",
    url: "https://sh20raj.gumroad.com/l/fcdfo",
    image: "https://public-files.gumroad.com/h8nwwscdx5wh7tpv0og4zq3agl84",
    tags: ["Portfolio", "Template", "React"],
  },
  {
    name: "30-Day Digital Product Launch Kit",
    price: "$29",
    description: "Complete launch playbook for digital products — strategy, copy, and timeline.",
    url: "https://sh20raj.gumroad.com/l/ivlko",
    image: "https://public-files.gumroad.com/eh8t8cxvdibqy083kz628vt5wax0",
    tags: ["Launch", "Strategy", "Kit"],
  },
  {
    name: "Claude Code Agent Pack",
    price: "$18",
    description: "100+ AI developer workflows for Claude Code. Copy-paste automation.",
    url: "https://sh20raj.gumroad.com/l/cwogj",
    image: "https://public-files.gumroad.com/4ijtybspdtm1a81xi97rbuc0qcay",
    tags: ["AI", "Claude", "Workflows"],
  },
];

const tweetIds = [
  "2056624911373021437",
  "2056211450071490862",
  "2056232623673074108",
  "2056280867430142035",
];

export default function MarketplacePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 py-12">
      {/* Header */}
      <section id="header" className="mx-auto w-full max-w-5xl px-6 text-center space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="inline-block rounded-full bg-[var(--duo-feather)]/10 text-[var(--duo-feather)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Digital Products
          </div>
          <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl mt-3">
            Ship faster with premium assets
          </h1>
          <p className="mx-auto max-w-[500px] text-muted-foreground text-sm md:text-base leading-relaxed mt-3">
            Templates, guides, and tools to launch your next product.
          </p>
        </BlurFade>
      </section>

      {/* Products from Gumroad */}
      <section id="products" className="mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, id) => (
            <BlurFade key={product.name} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
              <div className="group rounded-xl border-2 border-[var(--duo-swan)] bg-card overflow-hidden shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm leading-tight group-hover:text-[var(--duo-feather)] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <span className="text-sm font-extrabold text-[var(--duo-feather)] ml-2 whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-[var(--duo-feather)] bg-[var(--duo-feather)]/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={product.url}
                    target="_blank"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-[var(--duo-feather)] w-full text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-1.5"
                  >
                    <ShoppingCartIcon className="size-3.5" /> Buy on Gumroad
                  </Link>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Gumroad store link */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="text-center mt-6">
            <Link
              href="https://sh20raj.gumroad.com/"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--duo-feather)] hover:underline"
            >
              View all on Gumroad <ExternalLinkIcon className="size-3.5" />
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* PayPal for international */}
      <section id="paypal" className="mx-auto w-full max-w-5xl px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
          <div className="rounded-xl border-2 border-[var(--duo-macaw)]/30 bg-[var(--duo-macaw)]/5 p-6 text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <CreditCardIcon className="size-5 text-[var(--duo-macaw)]" />
              <h3 className="font-bold text-sm">International? Pay via PayPal</h3>
            </div>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              If Gumroad doesn&apos;t work in your country, you can pay via PayPal or Razorpay. Email a screenshot to sh20raj@gmail.com — I&apos;ll send you access personally.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="https://paypal.me/sh20raj"
                target="_blank"
                className="inline-flex h-9 items-center justify-center rounded-full border-2 border-[var(--duo-macaw)] bg-[var(--duo-macaw)] px-5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-1.5"
              >
                <CreditCardIcon className="size-3.5" /> PayPal
              </Link>
              <Link
                href="https://razorpay.me/@iamsh"
                target="_blank"
                className="inline-flex h-9 items-center justify-center rounded-full border-2 border-[var(--duo-macaw)] bg-transparent px-5 text-xs font-bold uppercase tracking-wider text-[var(--duo-macaw)] transition-all hover:bg-[var(--duo-macaw)]/10 active:translate-y-1 gap-1.5"
              >
                <CreditCardIcon className="size-3.5" /> Razorpay
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Landing Page Templates from Twitter */}
      <section id="templates" className="mx-auto w-full max-w-5xl px-6 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-xl font-extrabold tracking-tight text-center">Landing Page Templates</h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              id: "2056624911373021437",
              title: "Premium 3D Product Landing Page",
              description: "Premium 3D product website template with smooth scroll animations, interactive product showcase, responsive design, pricing, FAQ, and CTA sections.",
              demo: "https://premium-3d-product-template.surge.sh",
              purchase: "https://rzp.io/rzp/premium-3d-product-template",
              image: "/images/3d-product.png",
            },
            {
              id: "2056211450071490862",
              title: "Growth Agency Landing Page",
              description: "State-of-the-art Next.js landing page for growth agencies and startups. Turns visitors into paying clients.",
              demo: "https://growth-agency.vercel.app",
              purchase: "https://sh20raj.gumroad.com/",
              image: "https://public-files.gumroad.com/usds0aocmk7gfjyymbkl9rq2dr5l",
            },
            {
              id: "2056232623673074108",
              title: "Aero UI – Landing Page Template",
              description: "Premium landing page template for developers who value speed, aesthetics, and clean code.",
              demo: "https://aero-ui.vercel.app",
              purchase: "https://sh20raj.gumroad.com/",
              image: "https://public-files.gumroad.com/h8nwwscdx5wh7tpv0og4zq3agl84",
            },
            {
              id: "2056280867430142035",
              title: "Nova Landing Page Template",
              description: "Modern, conversion-focused landing page template. Deploy in minutes.",
              demo: "#",
              purchase: "https://sh20raj.gumroad.com/",
              image: "https://public-files.gumroad.com/eh8t8cxvdibqy083kz628vt5wax0",
            },
          ].map((template, id) => (
            <BlurFade key={template.id} delay={BLUR_FADE_DELAY * 4.5 + id * 0.05}>
              <div className="group rounded-xl border-2 border-[var(--duo-swan)] bg-card overflow-hidden shadow-[0_2px_0_var(--duo-swan)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <a
                      href={`https://twitter.com/ShaswatBuilds/status/${template.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg"
                    >
                      <svg className="size-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-[var(--duo-feather)] transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                    {template.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={template.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex h-8 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent text-xs font-bold text-[var(--duo-eel)] dark:text-foreground transition-all hover:brightness-105 active:translate-y-1"
                    >
                      Demo
                    </a>
                    <a
                      href={template.purchase}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex h-8 items-center justify-center rounded-full bg-[var(--duo-feather)] text-xs font-bold text-white shadow-[0_3px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="text-center">
            <a
              href="https://twitter.com/ShaswatBuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--duo-feather)] hover:underline"
            >
              Follow @ShaswatBuilds for more <ExternalLinkIcon className="size-3.5" />
            </a>
          </div>
        </BlurFade>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto w-full max-w-5xl px-6 pb-16">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="relative overflow-hidden rounded-2xl bg-[var(--duo-feather)] p-10 text-center text-white">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-extrabold text-white">Need a custom build?</h3>
              <p className="mx-auto max-w-[400px] text-white/80 text-sm">
                I also build custom landing pages and SaaS MVPs tailored to your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link href="/services" className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none">
                  View Services
                </Link>
                <Link href="mailto:sh20raj@gmail.com" className="inline-flex h-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 active:translate-y-1">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
