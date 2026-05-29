"use client";

import { useEffect, useRef } from "react";

export function TweetEmbed({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    if (!document.getElementById("twitter-wjs")) {
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const render = () => {
      if (cancelled) return;
      const twttr = (window as unknown as { twttr?: { widgets?: { load?: (el?: HTMLElement | null) => void } } }).twttr;
      if (twttr?.widgets?.load && ref.current) {
        twttr.widgets.load(ref.current);
      } else {
        setTimeout(render, 200);
      }
    };
    render();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div ref={ref} className="tweet-embed flex justify-center [&_.twitter-tweet]:!my-0 [&_.twitter-tweet]:!w-full">
      <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true" data-align="center">
        <a href={`https://twitter.com/ShaswatBuilds/status/${id}`}>Loading tweet…</a>
      </blockquote>
    </div>
  );
}
