import { DATA } from "@/data/resume";
import { IconRenderer } from "@/components/icon-renderer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-16 border-t py-12 px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "flex items-center gap-2 text-muted-foreground hover:text-foreground"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconRenderer icon={social.icon} className="size-4" />
              <span className="text-xs font-medium">{name}</span>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center w-full mt-4">
          <a 
            href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fsh20raj%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fsh20raj%2F&countColor=%23263759" 
              alt="Visitor Count"
            />
          </a>
        </div>
        
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {DATA.name}. Built with Passion & Tech.
        </p>
      </div>
    </footer>
  );
}
