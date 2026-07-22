import { HomeClient } from "./home-client";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaswat Raj — Software Engineer & Open-Source Builder",
  description:
    "CS student at BIT Mesra. 500+ public repos, 300+ merged PRs — including one into Google's gemini-cli. Builds full products solo: AI agents, dev tools, MCP servers.",
  openGraph: {
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "CS student at BIT Mesra. 500+ public repos, 300+ merged PRs — including one into Google's gemini-cli. Builds full products solo: AI agents, dev tools, MCP servers.",
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
      "CS student at BIT Mesra. 500+ public repos, 300+ merged PRs — including one into Google's gemini-cli. Builds full products solo: AI agents, dev tools, MCP servers.",
    creator: "@SH20RAJ",
  },
};

export default function Page() {
  return <HomeClient DATA={DATA} />;
}
