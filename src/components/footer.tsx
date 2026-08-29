import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="mx-auto max-w-2xl flex items-center justify-between text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {DATA.name}</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/SH20RAJ" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/sh20raj" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </Link>
          <Link href="https://x.com/SH20RAJ" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}
