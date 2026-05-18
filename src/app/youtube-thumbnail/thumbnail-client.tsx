"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PlayCircleIcon, ZoomInIcon, X } from "lucide-react";
import ServicePageLayout from "@/components/service-page-layout";
import { youtubeThumbnailConfig } from "@/data/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const designedVideos = [
  {
    title: "How I Built a Memory Engine with Next.js & AI Agents",
    thumbnail: "/thumbnails/memory_engine.png",
    duration: "14:20",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "54K",
    postedAt: "2 months ago",
  },
  {
    title: "Building SaaS MVPs in 48 Hours: A Complete Guide",
    thumbnail: "/thumbnails/saas_mvp.png",
    duration: "22:15",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "38K",
    postedAt: "1 month ago",
  },
  {
    title: "MCP Servers: Connect Your AI Directly to Local Files",
    thumbnail: "/thumbnails/mcp_servers.png",
    duration: "12:45",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "19K",
    postedAt: "3 weeks ago",
  },
  {
    title: "The Ultimate Next.js 15 Starter Kit (Auth, Payments, DB)",
    thumbnail: "/thumbnails/nextjs_starter.png",
    duration: "18:30",
    channelName: "Shaswat Raj",
    channelAvatar: "/profile.jpg",
    views: "82K",
    postedAt: "4 months ago",
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

export default function YoutubeThumbnailClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

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
      testimonials={youtubeThumbnailConfig.testimonials}
    >
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => {
            setSelectedImage(null);
            setSelectedTitle(null);
          }}
        >
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center gap-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex w-full items-center justify-between text-white pb-2 border-b border-white/10">
              <span className="font-semibold text-sm sm:text-base line-clamp-1">{selectedTitle}</span>
              <button 
                onClick={() => {
                  setSelectedImage(null);
                  setSelectedTitle(null);
                }}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="size-5" />
              </button>
            </div>
            
            {/* Image Preview Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img 
                src={selectedImage} 
                alt={selectedTitle || "Premium YouTube Thumbnail"} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Note */}
            <p className="text-xs text-zinc-400 text-center font-mono">
              Designed with 4K clarity, psychological contrast, and mobile CTR optimization.
            </p>
          </div>
        </div>
      )}

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
              Click on any card to view the ultra high-resolution, pixel-perfect, premium-generated thumbnails.
            </p>
          </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {designedVideos.map((item, id) => (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <div 
                onClick={() => {
                  setSelectedImage(item.thumbnail);
                  setSelectedTitle(item.title);
                }}
                className="group flex flex-col gap-3 cursor-pointer"
              >
                {/* Thumbnail Card */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[var(--duo-polar)] border-2 border-[var(--duo-swan)] shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0 text-[10px] px-1.5 py-0 rounded font-mono">
                    {item.duration}
                  </Badge>
                  
                  {/* Custom Click Hover Overlays */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 gap-2">
                    <ZoomInIcon className="size-10 text-white stroke-[2.5]" />
                    <span className="text-[10px] text-white uppercase tracking-widest font-bold">Click to Preview</span>
                  </div>
                </div>

                {/* Video Info Panel */}
                <div className="flex gap-3">
                  <Avatar className="size-9 mt-0.5 border">
                    <AvatarImage src={item.channelAvatar} alt={item.channelName} />
                    <AvatarFallback>{item.channelName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1 gap-1">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[var(--duo-feather)] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-col">
                      <span className="text-xs text-[var(--duo-wolf)]">
                        {item.channelName}
                      </span>
                      <span className="text-[10px] text-[var(--duo-wolf)]/60 font-mono mt-0.5">
                        {item.views} views • {item.postedAt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
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
