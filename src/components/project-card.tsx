import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

import { IconRenderer } from "@/components/icon-renderer";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: string;
    type: string;
    href: string;
    badgeImage?: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-xl transition-all duration-500 ease-in-out h-full group hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {image && (
          <img
            src={image}
            alt={`${title} project by Shaswat Raj`}
            width={500}
            height={300}
            className="h-44 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </Link>
      <CardHeader className="px-4 pt-4 pb-2">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-base font-bold leading-none">{title}</CardTitle>
            <time className="font-sans text-[10px] text-muted-foreground whitespace-nowrap">{dates}</time>
          </div>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <p className="text-pretty font-sans text-xs text-muted-foreground line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4 py-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1.5 py-0 text-[10px] font-medium bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className={cn(
                    "flex gap-1.5 px-2.5 py-1 text-[10px] font-semibold transition-all hover:bg-primary hover:text-primary-foreground",
                    link.badgeImage ? "p-0 overflow-hidden" : ""
                  )}
                >
                  {link.badgeImage ? (
                    <img
                      src={link.badgeImage}
                      alt={link.type}
                      className="h-5 w-auto"
                    />
                  ) : (
                    <>
                      <IconRenderer icon={link.icon} className="size-3" />
                      {link.type}
                    </>
                  )}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
