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
    default: "Shaswat Raj — Full-Stack Developer, AI Product Builder & Open-Source Creator",
    template: `%s | ${DATA.name}`,
  },
  description:
    "Portfolio of Shaswat Raj, a full-stack developer and AI product builder from India building SaaS apps, developer tools, automation systems, open-source projects, and AI products with Next.js, TypeScript, Node.js, Python, and Cloudflare.",
  keywords: [
    "Shaswat Raj",
    "SH20RAJ",
    "Full Stack Developer India",
    "AI Product Builder",
    "Open Source Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "SaaS Builder India",
    "Developer Tools",
    "AI Tools Developer",
    "React Developer Portfolio",
    "Node.js Developer",
    "Python Developer",
    "Cloudflare Developer",
    "Automation Tools",
    "Startup Builder",
    "Freelance Web Developer",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Shaswat Raj — Full-Stack Developer & AI Product Builder",
    description:
      "I build AI tools, SaaS apps, developer utilities, automation systems, and open-source projects using Next.js, TypeScript, Node.js, Python, and Cloudflare.",
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
        alt: "Shaswat Raj — Full-Stack Developer & AI Product Builder",
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
    title: "Shaswat Raj — Full-Stack Developer & AI Product Builder",
    description:
      "I build AI tools, SaaS apps, DevTools, automation systems, and open-source projects.",
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
      image: "https://sh20raj.github.io/profile.jpg",
      jobTitle: "Full Stack Developer",
      description:
        "Full-stack developer and AI product builder from India building SaaS apps, developer tools, automation systems, open-source projects, and AI products.",
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
        "SaaS",
        "Open Source",
        "DevTools",
        "SEO",
        "Automation",
        "System Design",
        "Web Development",
        "Product Building",
      ],
      sameAs: [
        "https://github.com/SH20RAJ",
        "https://linkedin.com/in/sh20raj",
        "https://x.com/SH20RAJ",
        "https://dev.to/sh20raj",
        "https://www.npmjs.com/~sh20raj",
        "https://codepen.io/sh20raj",
        "https://peerlist.io/sh20raj",
        "https://codeforces.com/profile/sh20raj",
      ],
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
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased selection:bg-primary/10",
          fontDisplay.variable,
          fontSans.variable
        )}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--duo-swan)_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] opacity-40"></div>
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-tr from-[var(--duo-feather)]/5 via-transparent to-[var(--duo-macaw)]/5"></div>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ResumeProvider>
            <TooltipProvider delayDuration={0}>
              <Navbar />
              <main className="pt-14">
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
