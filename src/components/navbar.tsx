"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { CommandPalette } from "@/components/command-palette";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true,
        bubbles: true,
      })
    );
  };

  return (
    <>
      <CommandPalette />
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="mx-auto max-w-2xl flex items-center justify-between h-12 px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold text-foreground hover:opacity-80 transition-opacity">
              sh20raj
            </Link>

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-3">
              {DATA.navbar.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick Command Trigger */}
            <button
              onClick={triggerCommandPalette}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors border border-border/60"
              title="Open Command Palette (Cmd+K)"
            >
              <Search className="size-3" />
              <span className="hidden sm:inline text-[10px] font-mono opacity-80">⌘K</span>
            </button>

            <ModeToggle />

            <button
              className="sm:hidden p-1.5 rounded hover:bg-accent transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="sm:hidden border-t border-border bg-background">
            <div className="flex flex-col px-6 py-2">
              {DATA.navbar.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
