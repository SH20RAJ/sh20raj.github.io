"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  ArrowRight,
  Code,
  Globe,
  FileText,
  Sun,
  Moon,
  Copy,
  Check,
  Zap,
  ExternalLink,
  Laptop,
} from "lucide-react";

interface ActionItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Projects & Work" | "Actions" | "Theme";
  icon: any;
  action: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("sh20raj@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 800);
  }, []);

  const actions: ActionItem[] = [
    {
      id: "home",
      title: "Go to Home",
      subtitle: "Overview & engineering highlights",
      category: "Navigation",
      icon: Globe,
      action: () => {
        router.push("/");
        setOpen(false);
      },
    },
    {
      id: "projects",
      title: "View Projects",
      subtitle: "Production products & dev tools",
      category: "Navigation",
      icon: Code,
      action: () => {
        router.push("/projects");
        setOpen(false);
      },
    },
    {
      id: "startups",
      title: "Startups & Ventures",
      subtitle: "CampusLoop, Debo, IndexFast, Solus",
      category: "Navigation",
      icon: Zap,
      action: () => {
        router.push("/startups");
        setOpen(false);
      },
    },
    {
      id: "services",
      title: "Services & Sprints",
      subtitle: "Full-stack & AI prototyping sprints",
      category: "Navigation",
      icon: Laptop,
      action: () => {
        router.push("/services");
        setOpen(false);
      },
    },
    {
      id: "blog",
      title: "Blog",
      subtitle: "Technical articles & system design notes",
      category: "Navigation",
      icon: FileText,
      action: () => {
        router.push("/blog");
        setOpen(false);
      },
    },
    {
      id: "campusloop",
      title: "CampusLoop",
      subtitle: "Verified campus social network (campusloop.space)",
      category: "Projects & Work",
      icon: ExternalLink,
      action: () => {
        window.open("https://campusloop.space/", "_blank");
        setOpen(false);
      },
    },
    {
      id: "gemini-pr",
      title: "Google Gemini CLI Contribution",
      subtitle: "google-gemini/gemini-cli (#20778)",
      category: "Projects & Work",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/google-gemini/gemini-cli/pull/20778", "_blank");
        setOpen(false);
      },
    },
    {
      id: "github",
      title: "GitHub Profile",
      subtitle: "github.com/SH20RAJ",
      category: "Projects & Work",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/SH20RAJ", "_blank");
        setOpen(false);
      },
    },
    {
      id: "copy-email",
      title: copied ? "Copied to Clipboard!" : "Copy Email Address",
      subtitle: "sh20raj@gmail.com",
      category: "Actions",
      icon: copied ? Check : Copy,
      action: handleCopyEmail,
    },
    {
      id: "resume-pdf",
      title: "Download Resume (PDF)",
      subtitle: "Formatted single-page resume",
      category: "Actions",
      icon: FileText,
      action: () => {
        window.open("/resume.pdf", "_blank");
        setOpen(false);
      },
    },
    {
      id: "toggle-theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      subtitle: "Toggle color scheme",
      category: "Theme",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setOpen(false);
      },
    },
  ];

  const filtered = actions.filter((item) => {
    const term = query.toLowerCase().trim();
    if (!term) return true;
    return (
      item.title.toLowerCase().includes(term) ||
      item.subtitle?.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      } else if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
        } else if (e.key === "Enter" && filtered[selectedIndex]) {
          e.preventDefault();
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filtered, selectedIndex]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="size-4 text-muted-foreground shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground bg-accent rounded border border-border">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-muted-foreground">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                    isSelected ? "bg-accent text-foreground font-medium" : "text-muted-foreground hover:bg-accent/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className="size-3.5 shrink-0" />
                    <div className="truncate">
                      <p className="font-medium text-foreground">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-[10px] text-muted-foreground truncate">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className={`size-3 text-muted-foreground shrink-0 ml-2 ${isSelected ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 border-t border-border bg-accent/30 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>Navigate with ↑ ↓ and Enter</span>
          <span>sh20raj.github.io</span>
        </div>
      </div>
    </div>
  );
}
