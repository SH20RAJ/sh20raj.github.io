import type { Metadata } from "next";
import YoutubeThumbnailClient from "./thumbnail-client";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Designer — Premium, High-CTR Thumbnail Design",
  description:
    "Get custom, premium, and psychology-backed YouTube thumbnails that grab attention, increase click-through-rate (CTR), and get more views.",
  alternates: {
    canonical: "https://sh20raj.github.io/youtube-thumbnail",
  },
  openGraph: {
    type: "website",
    title: "YouTube Thumbnail Designer — Premium, High-CTR Thumbnail Design",
    description:
      "Get custom, premium, and psychology-backed YouTube thumbnails that grab attention, increase click-through-rate (CTR), and get more views.",
    url: "https://sh20raj.github.io/youtube-thumbnail",
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Designer — Premium, High-CTR Thumbnail Design",
    description:
      "Get custom, premium, and psychology-backed YouTube thumbnails that grab attention, increase click-through-rate (CTR), and get more views.",
    creator: "@SH20RAJ",
  },
};

export default function YoutubeThumbnailPage() {
  return <YoutubeThumbnailClient />;
}
