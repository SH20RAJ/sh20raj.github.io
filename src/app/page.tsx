import { HomeClient } from "./home-client";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaswat Raj — Next.js & AI Product Developer for Startups",
  description:
    "Remote Next.js, TypeScript, AI, SaaS MVP, landing page, dashboard, and automation developer helping founders and agencies ship fast.",
  openGraph: {
    title: "Shaswat Raj — Next.js & AI Product Developer for Startups",
    description:
      "Remote Next.js, TypeScript, AI, SaaS MVP, landing page, dashboard, and automation developer helping founders and agencies ship fast.",
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaswat Raj — Next.js & AI Product Developer for Startups",
    description:
      "Remote Next.js, TypeScript, AI, SaaS MVP, landing page, dashboard, and automation developer helping founders and agencies ship fast.",
    creator: "@SH20RAJ",
  },
};

export default function Page() {
  return <HomeClient DATA={DATA} />;
}
