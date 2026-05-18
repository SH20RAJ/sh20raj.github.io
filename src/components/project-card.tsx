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
        "flex flex-col overflow-hidden border-0 bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 ease-in-out h-full group rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden aspect-[16/10]", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {image && (
          <img
            src={image}
            alt={`${title} project`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        )}
      </Link>
      <CardHeader className="px-6 pt-6 pb-2">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">{title}</CardTitle>
            <time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 whitespace-nowrap bg-muted/30 px-2 py-1 rounded-full">{dates}</time>
          </div>
          <p className="text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-6 py-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Badge
                className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-primary/10 text-primary border-0 rounded-full hover:bg-primary/20 transition-colors"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 text-xs font-semibold transition-all rounded-full border-0 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground shadow-sm",
                    link.badgeImage ? "p-0 overflow-hidden" : ""
                  )}
                >
                  {link.badgeImage ? (
                    <img
                      src={link.badgeImage}
                      alt={link.type}
                      className="h-6 w-auto"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <IconRenderer icon={link.icon} className="size-3.5" />
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
