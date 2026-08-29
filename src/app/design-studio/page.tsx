import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import {
  designStudioCategories,
  designStudioPackages,
  designStudioFaqs,
  designStudioProcess,
} from "@/data/design-studio";

export const metadata: Metadata = {
  title: "Brand Systems & Visual Design Architecture | Shaswat Raj",
  description:
    "High-impact visual brand assets, UI design systems, product presentations, and digital marketing graphics engineered by Shaswat Raj.",
  alternates: {
    canonical: "https://sh20raj.github.io/design-studio",
  },
  openGraph: {
    title: "Brand Systems & Visual Design Architecture | Shaswat Raj",
    description:
      "High-impact visual brand assets, UI design systems, product presentations, and digital marketing graphics.",
    url: "https://sh20raj.github.io/design-studio",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Systems & Visual Design Architecture | Shaswat Raj",
    description:
      "High-impact visual brand assets, UI design systems, and digital marketing graphics.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function DesignStudioPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      {/* Header */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Design Studio</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Visual identities, UI design systems, and product marketing graphics.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-4">
          <h2 className="text-lg font-bold tracking-tight">Design Disciplines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {designStudioCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/design-studio/${cat.slug}`}
                className="group block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {cat.shortTitle}
                  </h3>
                  <span className="text-xs font-semibold">{cat.startingPrice}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-4">
          <h2 className="text-lg font-bold tracking-tight">Standard Packages</h2>
          <div className="space-y-3">
            {designStudioPackages.map((pkg) => (
              <div key={pkg.name} className="rounded-lg border border-border p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-medium">{pkg.name}</h3>
                  <span className="text-sm font-bold">{pkg.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{pkg.description}</p>
                <ul className="mt-3 space-y-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-foreground shrink-0">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-4">
          <h2 className="text-lg font-bold tracking-tight">Design Process</h2>
          <div className="space-y-3">
            {designStudioProcess.map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="shrink-0 size-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 space-y-4">
          <h2 className="text-lg font-bold tracking-tight">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {designStudioFaqs.map((item, id) => (
              <AccordionItem key={id} value={`item-${id}`} className="border-b border-border">
                <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-3">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
