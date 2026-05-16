import { HomeClient } from "./home-client";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${DATA.name} — ${DATA.description}`,
  description: DATA.summary,
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.description,
    creator: "@SH20RAJ",
  },
};

export default function Page() {
  return <HomeClient DATA={DATA} />;
}
