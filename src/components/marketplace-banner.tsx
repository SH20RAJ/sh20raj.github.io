import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export function MarketplaceBanner() {
  return (
    <div className="w-full bg-[var(--duo-feather)] text-white py-3 px-6 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 relative z-10">
        <p className="text-sm font-bold tracking-tight">
          🔥 <span className="hidden sm:inline">I&apos;ve moved all my premium landing pages &amp; digital products!</span>
          <span className="sm:hidden">Everything I&apos;ve built is now on ScriptlyHQ!</span>
        </p>
        <Link 
          href="https://scriptlyhq.strivio.world/" 
          target="_blank"
          className="inline-flex items-center gap-1.5 bg-white text-[var(--duo-feather)] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <ShoppingBag className="size-3" />
          Visit Marketplace
          <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}
