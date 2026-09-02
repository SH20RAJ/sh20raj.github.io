import { HomeClient } from "./home-client";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaswat Raj — Software Engineer & Open-Source Builder",
  description:
    "Software engineer. 79 external PRs merged into open-source repositories — including a fix in Google's gemini-cli. Builds full products: AI agents, dev tools, and web systems.",
  openGraph: {
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer. 79 external PRs merged into open-source repositories — including a fix in Google's gemini-cli. Builds full products: AI agents, dev tools, and web systems.",
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
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer. 79 external PRs merged into open-source repositories — including a fix in Google's gemini-cli. Builds full products: AI agents, dev tools, and web systems.",
    creator: "@SH20RAJ",
  },
};

export default function Page() {
  return <HomeClient DATA={DATA} />;
}
