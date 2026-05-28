"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, FileText } from "lucide-react";

const HIDDEN_PATHS = ["/book", "/hire", "/marketplace", "/editor"];

export function StickyCTA() {
  const pathname = usePathname() || "/";

  if (HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 flex gap-2 rounded-full border-2 border-[var(--duo-swan)] bg-card/95 backdrop-blur p-1.5 shadow-[0_4px_0_var(--duo-swan)]">
      <Link
        href="/book"
        className="flex-1 inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[var(--duo-feather)] px-4 text-[11px] font-bold uppercase tracking-wider text-white"
      >
        <Calendar className="size-3.5" /> Book Call
      </Link>
      <Link
        href="/hire"
        className="flex-1 inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[var(--duo-eel)] px-4 text-[11px] font-bold uppercase tracking-wider text-white"
      >
        <FileText className="size-3.5" /> Send Brief
      </Link>
    </div>
  );
}
