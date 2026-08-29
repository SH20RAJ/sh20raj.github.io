import Link from "next/link";
import Script from "next/script";
import { ExternalLink, ShoppingCart, CreditCard } from "lucide-react";
import { marketplaceProducts as products } from "@/data/marketplace";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace — Developer Templates, Tools & Assets | Shaswat Raj",
  description:
    "Production-ready Next.js templates, AI developer tools, system architectures, and engineering playbooks built by Shaswat Raj.",
  alternates: {
    canonical: "https://sh20raj.github.io/marketplace",
  },
  openGraph: {
    type: "website",
    title: "Marketplace — Developer Templates, Tools & Assets | Shaswat Raj",
    description:
      "Production-ready Next.js templates, AI developer tools, system architectures, and engineering playbooks.",
    url: "https://sh20raj.github.io/marketplace",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace — Developer Templates, Tools & Assets | Shaswat Raj",
    description:
      "Production-ready Next.js templates, AI developer tools, system architectures, and engineering playbooks.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function MarketplacePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      {/* Header */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h1 className="text-xl font-bold tracking-tight">Marketplace</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Production-ready templates, AI developer assets, and engineering playbooks.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group rounded-lg border border-border overflow-hidden hover:bg-accent/30 transition-colors flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-sm truncate">{product.name}</h3>
                    <span className="text-xs font-semibold whitespace-nowrap">{product.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground bg-accent px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={product.url}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-1.5 h-8 rounded-md bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors w-full"
                  >
                    <ShoppingCart className="size-3" /> Buy on Gumroad
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="https://sh20raj.gumroad.com/"
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              All products on Gumroad <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Alternative Payment Notice */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="rounded-lg border border-border p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CreditCard className="size-4 text-muted-foreground" />
              <h3 className="text-sm font-medium">Alternative Payment (International)</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              If Gumroad isn&apos;t supported in your region, PayPal or Razorpay can be used directly. Email a receipt screenshot to{" "}
              <a href="mailto:sh20raj@gmail.com" className="text-foreground underline">
                sh20raj@gmail.com
              </a>{" "}
              for immediate manual provisioning.
            </p>
            <div className="flex gap-3 pt-1">
              <Link
                href="https://paypal.me/sh20raj"
                target="_blank"
                className="text-xs font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
              >
                PayPal
              </Link>
              <Link
                href="https://razorpay.me/@iamsh"
                target="_blank"
                className="text-xs font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
              >
                Razorpay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-4">Template Demonstrations</h2>
          <div className="space-y-4">
            {["2056211450071490862", "2056232623673074108"].map((id) => (
              <div key={id} className="w-full flex justify-center">
                <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true" data-width="100%">
                  <a href={`https://twitter.com/ShaswatBuilds/status/${id}`}></a>
                </blockquote>
              </div>
            ))}
            <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
          </div>
        </div>
      </section>
    </main>
  );
}
