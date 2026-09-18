import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ResumeProvider } from "@/lib/resume-context";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fontDisplay = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
});

const fontSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Shaswat Raj — Software Engineer & Open-Source Builder",
    template: `%s | ${DATA.name}`,
  },
  description:
    "Software engineer. 79 external PRs merged into open-source repositories — including a fix in Google's gemini-cli. Builds full products: AI agents, dev tools, and web systems.",
  keywords: [
    "software engineer portfolio",
    "open source contributor",
    "CS student projects",
    "AI engineer India",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Cloudflare developer",
    "Shaswat Raj",
    "SH20RAJ",
    "OpenAI Claude Gemini developer",
    "RAG MCP developer",
    "MCP server builder",
    "Cloudflare Workers developer",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer. 79 external PRs merged into open-source repositories — including a fix in Google's gemini-cli. Builds full products: AI agents, dev tools, and web systems.",
    url: DATA.url,
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Shaswat",
    lastName: "Raj",
    username: "SH20RAJ",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shaswat Raj — Software Engineer & Open-Source Builder",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer. 79 external PRs merged into open-source repositories — including a fix in Google's gemini-cli. Builds full products: AI agents, dev tools, and web systems.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Shaswat Raj",
      alternateName: "SH20RAJ",
      url: "https://sh20raj.github.io/",
      image: "https://avatars.githubusercontent.com/u/66713844",
      jobTitle: "Software Engineer & Open-Source Builder",
      description:
        "Software engineer. 79 external PRs merged into open-source repositories — including a fix in Google's gemini-cli. Builds full products: AI agents, dev tools, and web systems.",
      email: "sh20raj@gmail.com",
      nationality: "Indian",
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Cloudflare",
        "AI APIs",
        "MCP",
        "Open Source",
        "DevTools",
        "System Design",
        "Web Development",
        "Product Building",
        "RAG",
        "DSA",
      ],
      sameAs: [
        "https://github.com/SH20RAJ",
        "https://linkedin.com/in/sh20raj",
        "https://x.com/SH20RAJ",
        "https://www.youtube.com/@StackShade",
        "https://dev.to/sh20raj",
        "https://www.npmjs.com/~sh20raj",
        "https://codepen.io/sh20raj",
        "https://peerlist.io/sh20raj",
        "https://codeforces.com/profile/sh20raj",
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shaswat Raj",
    url: "https://sh20raj.github.io/",
    author: {
      "@type": "Person",
      name: "Shaswat Raj",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-body antialiased selection:bg-primary/10",
          fontDisplay.variable,
          fontSans.variable
        )}
      >

        <ThemeProvider attribute="class" defaultTheme="light">
          <ResumeProvider>
            <TooltipProvider delayDuration={0}>
              <Navbar />
              <main className="pt-12">
                {children}
              </main>
              <Footer />

            </TooltipProvider>
          </ResumeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
