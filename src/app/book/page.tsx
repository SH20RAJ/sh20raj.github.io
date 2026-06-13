"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { monetization } from "@/data/monetization";
import { ArrowRightIcon, Mail, Clock, Globe } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function BookPage() {
  const calRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!monetization.calcom || !calRef.current) return;

    // Cal.com inline embed loader. Idempotent — safe to run multiple times.
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal as any;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const w: any = window;
    w.Cal("init", { origin: "https://cal.com" });
    w.Cal("inline", {
      elementOrSelector: calRef.current,
      calLink: monetization.calcom,
      layout: "month_view",
    });
    w.Cal("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <MarketplaceBanner />
      <section className="pt-12 pb-8">
        <div className="mx-auto w-full max-w-4xl px-6 space-y-5">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--duo-feather)]/30 bg-[var(--duo-feather)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--duo-feather)]">
              <span className="size-2 rounded-full bg-[var(--duo-feather)] animate-pulse" />
              Book a 15-min intro call
            </span>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              Pick a time that works for you
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Free 15-minute call to discuss your project, scope, and timeline. If we&apos;re a fit,
              I&apos;ll send a fixed-price quote within 24 hours.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" /> 15 minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="size-3.5" /> Async-friendly across time zones
              </span>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto w-full max-w-5xl px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            {monetization.calcom ? (
              <div
                ref={calRef}
                className="rounded-xl border-2 border-[var(--duo-swan)] bg-card shadow-[0_2px_0_var(--duo-swan)] overflow-hidden min-h-[640px]"
              />
            ) : (
              <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-8 md:p-12 shadow-[0_2px_0_var(--duo-swan)] text-center space-y-5">
                <h2 className="text-xl font-extrabold">Booking is opening soon</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  In the meantime, send a brief or email me directly — I respond within 24 hours.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Link
                    href="/hire"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-2"
                  >
                    Send a Brief <ArrowRightIcon className="size-4" />
                  </Link>
                  <a
                    href="mailto:sh20raj@gmail.com"
                    className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-2"
                  >
                    <Mail className="size-4" /> Email
                  </a>
                </div>
              </div>
            )}
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
div>
      </section>
    </main>
  );
}
