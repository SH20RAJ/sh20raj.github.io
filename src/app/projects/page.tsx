import { ProjectsClient } from "./projects-client";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects — ${DATA.name}`,
  description: `A collection of products, tools, and open-source projects built by ${DATA.name}.`,
  alternates: {
    canonical: `${DATA.url}/projects`,
  },
  openGraph: {
    title: "Projects — Shaswat Raj",
    description:
      "Products, tools, and open-source work by Shaswat Raj. Next.js apps, AI agents, MCP servers, browser tools, and more.",
    url: `${DATA.url}/projects`,
    siteName: "Shaswat Raj",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Shaswat Raj",
    description:
      "Products, tools, and open-source work by Shaswat Raj.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <ProjectsClient projects={DATA.projects} />;
}
