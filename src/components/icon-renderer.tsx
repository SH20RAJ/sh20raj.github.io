"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface IconRendererProps {
  icon: string | React.ElementType;
  className?: string;
}

export function IconRenderer({ icon, className }: IconRendererProps) {
  if (!icon) return null;

  // If it's already a component/function (shouldn't happen with new serializable data, but for safety)
  if (typeof icon === "function" || typeof icon === "object" && !("type" in icon)) {
    const Component = icon as React.ElementType;
    return <Component className={className} />;
  }

  // Map string to icon
  const iconName = typeof icon === "string" ? icon.toLowerCase() : "";
  const IconComponent = Icons[iconName as keyof typeof Icons];

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  return null;
}
