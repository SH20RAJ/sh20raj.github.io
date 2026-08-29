"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { monetization } from "@/data/monetization";
import { ArrowRightIcon, Mail, Clock, Globe } from "lucide-react";

export default function BookPage() {
  const calRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!monetization.calcom || !calRef.current) return;

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
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h1 className="text-xl font-bold tracking-tight">Book a call</h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Free 15-minute call to discuss your project, scope, and timeline.
          </p>
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" /> 15 minutes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="size-3.5" /> Any timezone
            </span>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          {monetization.calcom ? (
            <div
              ref={calRef}
              className="rounded-lg border border-border overflow-hidden min-h-[640px]"
            />
          ) : (
            <div className="text-center space-y-4 py-12">
              <h2 className="text-lg font-bold">Booking is opening soon</h2>
              <p className="text-sm text-muted-foreground">
                In the meantime, send a brief or email me directly.
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <Link
                  href="/hire"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
                >
                  Send a brief <ArrowRightIcon className="size-3.5" />
                </Link>
                <a
                  href="mailto:sh20raj@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="size-3.5" /> Email
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
