import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated list of my most impactful projects and open-source contributions.",
  alternates: {
    canonical: "https://sh20raj.github.io/projects",
  },
  openGraph: {
    title: "Projects | Shaswat Raj",
    description: "A curated list of my most impactful projects and open-source contributions.",
    url: "https://sh20raj.github.io/projects",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Shaswat Raj",
    description: "A curated list of my most impactful projects and open-source contributions.",
    creator: "@SH20RAJ",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
