import ServicePageLayout from "@/components/service-page-layout";
import { youtubeThumbnailConfig } from "@/data/services";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { YoutubeVideoCard } from "@/components/youtube-video-card";

const BLUR_FADE_DELAY = 0.04;

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

const designedVideos = [
  {
    title: "How I Built a Memory Engine with Next.js & AI Agents",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    duration: "14:20",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "54K",
    postedAt: "2 months ago",
    link: "https://youtube.com",
  },
  {
    title: "Building SaaS MVPs in 48 Hours: A Complete Guide",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    duration: "22:15",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "38K",
    postedAt: "1 month ago",
    link: "https://youtube.com",
  },
  {
    title: "MCP Servers: Connect Your AI Directly to Local Files",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    duration: "12:45",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "19K",
    postedAt: "3 weeks ago",
    link: "https://youtube.com",
  },
  {
    title: "The Ultimate Next.js 15 Starter Kit (Auth, Payments, DB)",
    thumbnail: "https://images.unsplash.com/photo-1618005198143-d56637b7d7f7?auto=format&fit=crop&w=800&q=80",
    duration: "18:30",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "82K",
    postedAt: "4 months ago",
    link: "https://youtube.com",
  },
];

const designPrinciples = [
  {
    title: "Three-Color Rule",
    description: "Sleek, high-contrast, premium palettes that command attention in dark mode and mobile feeds.",
  },
  {
    title: "Facial Expression Hook",
    description: "Expertly graded face cutouts with emphasized expressions to prompt psychological click triggers.",
  },
  {
    title: "Readability at 10% Scale",
    description: "Clean, ultra-visible layout designs tested to make sure all titles remain instantly readable on tiny mobile screens.",
  },
  {
    title: "A/B Testing Alignment",
    description: "Designed with distinct focal themes allowing you to easily A/B test variations to unlock the highest video CTR.",
  },
];

export default function YoutubeThumbnailPage() {
  return (
    <ServicePageLayout
      label={youtubeThumbnailConfig.label}
      title={youtubeThumbnailConfig.title}
      subtitle={youtubeThumbnailConfig.subtitle}
      whoIsThisFor={youtubeThumbnailConfig.whoIsThisFor}
      deliverables={youtubeThumbnailConfig.deliverables}
      process={youtubeThumbnailConfig.process}
      faq={youtubeThumbnailConfig.faq}
      relatedProjects={youtubeThumbnailConfig.relatedProjects}
    >
      {/* Proof of Works */}
      <div className="space-y-8 max-w-[800px] mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Proof of Work
            </div>
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
              Designed Thumbnails in Action
            </h2>
            <p className="text-sm text-[var(--duo-wolf)] max-w-md">
              Real layouts and thumbnails designed to optimize cognitive click triggers.
            </p>
          </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {designedVideos.map((item, id) => (
            <YoutubeVideoCard
              key={id}
              title={item.title}
              thumbnail={item.thumbnail}
              duration={item.duration}
              channelName={item.channelName}
              channelAvatar={item.channelAvatar}
              views={item.views}
              postedAt={item.postedAt}
              link={item.link}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            />
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <div className="space-y-8 max-w-[800px] mx-auto pt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="inline-block rounded-full bg-[var(--duo-feather)] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Design Principles
            </div>
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-display">
              Why my thumbnails convert
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {designPrinciples.map((item, id) => (
            <BlurFade
              key={id}
              delay={BLUR_FADE_DELAY * 8.5 + id * 0.05}
            >
              <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-white p-4 space-y-1 dark:bg-[var(--duo-eel)]/10">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-xs text-[var(--duo-wolf)]">
                  {item.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* CTA */}
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <div className="rounded-2xl bg-[var(--duo-feather)]/10 p-8 text-center space-y-4 border-2 border-[var(--duo-feather)]/20 max-w-[800px] mx-auto">
          <h3 className="text-xl font-bold font-display">Ready to skyrocket your video CTR?</h3>
          <p className="text-sm text-[var(--duo-wolf)] max-w-md mx-auto leading-relaxed">
            Send over your topic/script and let&apos;s build an attention-grabbing custom thumbnail package.
          </p>
          <Button asChild>
            <Link href="mailto:sh20raj@gmail.com">Book Thumbnail Design</Link>
          </Button>
        </div>
      </BlurFade>
    </ServicePageLayout>
  );
}
