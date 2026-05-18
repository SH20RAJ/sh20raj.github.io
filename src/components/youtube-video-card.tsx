import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PlayCircleIcon, MoreVerticalIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export interface YoutubeVideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  postedAt: string;
  link: string;
  delay?: number;
}

export function YoutubeVideoCard({
  title,
  thumbnail,
  duration,
  channelName,
  channelAvatar,
  views,
  postedAt,
  link,
  delay = 0,
}: YoutubeVideoCardProps) {
  return (
    <BlurFade delay={delay}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3">
        {/* Thumbnail Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0 text-[10px] px-1.5 py-0 rounded">
            {duration}
          </Badge>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
            <PlayCircleIcon className="size-12 text-white/90 fill-black/20" />
          </div>
        </div>

        {/* Info Container */}
        <div className="flex gap-3">
          <Avatar className="size-9 mt-0.5 border">
            <AvatarImage src={channelAvatar} alt={channelName} />
            <AvatarFallback>{channelName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1 gap-1">
            <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {channelName}
              </span>
              <div className="flex items-center text-[11px] text-muted-foreground">
                <span>{views} views</span>
                <span className="mx-1">•</span>
                <span>{postedAt}</span>
              </div>
            </div>
          </div>
          <button className="h-fit p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVerticalIcon className="size-4 text-muted-foreground" />
          </button>
        </div>
      </a>
    </BlurFade>
  );
}
