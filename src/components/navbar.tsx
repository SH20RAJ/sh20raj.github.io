"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconRenderer } from "@/components/icon-renderer";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-[var(--duo-swan)]">
      <nav className="mx-auto max-w-5xl flex items-center justify-between h-14 px-6">
        {/* Logo */}
        <Link href="/" className="font-display font-extrabold text-lg tracking-tight text-foreground">
          sh20raj
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {DATA.navbar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-sm font-semibold text-muted-foreground hover:text-foreground rounded-lg px-3"
              )}
            >
              {item.label}
            </Link>
          ))}
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "text-sm font-semibold text-muted-foreground hover:text-foreground rounded-lg px-3"
                )}
              >
                <IconRenderer icon={social.icon} className="size-4 mr-1.5" />
                {name}
              </Link>
            ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--duo-swan)] bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col px-6 py-3 gap-1">
            {DATA.navbar.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-accent transition-colors flex items-center gap-2"
                >
                  <IconRenderer icon={social.icon} className="size-4" />
                  {name}
                </Link>
              ))}
          </div>
        </div>
      )}
    </header>
  );
}
