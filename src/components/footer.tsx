import { DATA } from "@/data/resume";
import { IconRenderer } from "@/components/icon-renderer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--duo-swan)] py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "flex items-center gap-1.5 text-[var(--duo-wolf)] hover:text-[var(--duo-feather)] text-xs"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconRenderer icon={social.icon} className="size-3.5" />
              <span className="font-medium">{name}</span>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--duo-wolf)]">
          &copy; {new Date().getFullYear()} {DATA.name}
        </p>
      </div>
    </footer>
  );
}
