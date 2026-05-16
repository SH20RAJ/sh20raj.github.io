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
          />
        )}
      </Link>
      <CardHeader className="px-10 pt-10 pb-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-6">
            <CardTitle className="text-2xl font-black leading-tight group-hover:text-primary transition-colors">{title}</CardTitle>
            <time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 whitespace-nowrap bg-muted/50 px-3 py-1.5 rounded-full">{dates}</time>
          </div>
          <p className="text-lg text-muted-foreground/80 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-10 py-6">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {tags?.map((tag) => (
              <Badge
                className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-0 rounded-full hover:bg-primary/10 transition-colors"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-10 pb-10 pt-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-4">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 text-sm font-black transition-all rounded-full border-0 bg-background hover:bg-primary hover:text-primary-foreground shadow-sm",
                    link.badgeImage ? "p-0 overflow-hidden" : ""
                  )}
                >
                  {link.badgeImage ? (
                    <img
                      src={link.badgeImage}
                      alt={link.type}
                      className="h-8 w-auto"
                    />
                  ) : (
                    <>
                      <IconRenderer icon={link.icon} className="size-5" />
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
