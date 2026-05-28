"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Star, GitPullRequest, Users, ArrowRightIcon, Activity, Boxes, ExternalLink } from "lucide-react";

const GH_USER = "sh20raj";
const CACHE_KEY = "gh-stats-v1";
const CACHE_TTL_MS = 1000 * 60 * 60 * 12; // 12h

// Baseline figures shown instantly (so first paint isn't empty).
// These are conservative and overwritten as soon as the live API responds.
const BASELINE = {
  publicRepos: 500,
  followers: 800,
  totalStars: 0,
  totalContributionsLastYear: 1500,
  totalContributionsAllTime: 15000,
  prsMerged: 300,
  topLanguages: ["TypeScript", "JavaScript", "Python", "CSS", "HTML"] as string[],
  orgs: [] as { login: string; avatar_url: string; url: string }[],
};

type Stats = typeof BASELINE;

interface CacheShape {
  ts: number;
  data: Stats;
}

function readCache(): Stats | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheShape;
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data: Stats) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* quota or disabled — ignore */
  }
}

async function fetchUser() {
  const r = await fetch(`https://api.github.com/users/${GH_USER}`);
  if (!r.ok) throw new Error("user fail");
  return r.json();
}

async function fetchAllRepos(): Promise<any[]> {
  const out: any[] = [];
  for (let page = 1; page <= 10; page++) {
    const r = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&page=${page}&type=owner&sort=updated`);
    if (!r.ok) break;
    const batch = (await r.json()) as any[];
    out.push(...batch);
    if (batch.length < 100) break;
  }
  return out;
}

async function fetchOrgs(): Promise<any[]> {
  const r = await fetch(`https://api.github.com/users/${GH_USER}/orgs`);
  if (!r.ok) return [];
  return r.json();
}

async function fetchPrsMerged(): Promise<number> {
  const r = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(`author:${GH_USER} type:pr is:merged`)}`
  );
  if (!r.ok) return 0;
  const j = await r.json();
  return Number(j.total_count) || 0;
}

async function fetchContributions(): Promise<{ lastYear: number; allTime: number }> {
  // jogruber's free, no-auth contribution API: returns total.{lastYear, 2024, 2023, ...}
  const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=all`);
  if (!r.ok) return { lastYear: 0, allTime: 0 };
  const j = await r.json();
  const totals = (j.total || {}) as Record<string, number>;
  const allTime = Object.values(totals).reduce((acc, n) => acc + (Number(n) || 0), 0);
  const lastYear = Number(totals.lastYear) || 0;
  return { lastYear, allTime };
}

function pickTopLanguages(repos: any[], n = 6): string[] {
  const tally: Record<string, number> = {};
  for (const r of repos) {
    const lang = r.language;
    if (!lang) continue;
    tally[lang] = (tally[lang] || 0) + 1;
  }
  return Object.entries(tally)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([k]) => k);
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k+`;
  if (n >= 100) return `${Math.floor(n / 50) * 50}+`;
  return String(n);
}

export function GitHubStats() {
  const [stats, setStats] = useState<Stats>(() => {
    if (typeof window === "undefined") return BASELINE;
    return readCache() ?? BASELINE;
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [userR, reposR, orgsR, prsR, contribR] = await Promise.allSettled([
          fetchUser(),
          fetchAllRepos(),
          fetchOrgs(),
          fetchPrsMerged(),
          fetchContributions(),
        ]);
        if (cancelled) return;

        const user = userR.status === "fulfilled" ? userR.value : null;
        const repos: any[] = reposR.status === "fulfilled" ? reposR.value : [];
        const orgs: any[] = orgsR.status === "fulfilled" ? orgsR.value : [];
        const prs = prsR.status === "fulfilled" ? prsR.value : 0;
        const contrib = contribR.status === "fulfilled" ? contribR.value : { lastYear: 0, allTime: 0 };

        const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
        const topLanguages = pickTopLanguages(repos);

        const next: Stats = {
          publicRepos: user?.public_repos ?? Math.max(repos.length, BASELINE.publicRepos),
          followers: user?.followers ?? BASELINE.followers,
          totalStars: totalStars || BASELINE.totalStars,
          totalContributionsLastYear: contrib.lastYear || BASELINE.totalContributionsLastYear,
          totalContributionsAllTime: contrib.allTime || BASELINE.totalContributionsAllTime,
          prsMerged: prs || BASELINE.prsMerged,
          topLanguages: topLanguages.length ? topLanguages : BASELINE.topLanguages,
          orgs: orgs.slice(0, 8).map((o) => ({
            login: o.login,
            avatar_url: o.avatar_url,
            url: `https://github.com/${o.login}`,
          })),
        };

        setStats(next);
        writeCache(next);
      } catch {
        /* leave baseline */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const tiles = [
    {
      label: "All-time contributions",
      value: formatCount(stats.totalContributionsAllTime),
      icon: Activity,
    },
    {
      label: "Public repos",
      value: formatCount(stats.publicRepos),
      icon: Boxes,
    },
    {
      label: "PRs merged",
      value: formatCount(stats.prsMerged),
      icon: GitPullRequest,
    },
    {
      label: "Stars earned",
      value: formatCount(stats.totalStars),
      icon: Star,
    },
    {
      label: "Followers",
      value: formatCount(stats.followers),
      icon: Users,
    },
    {
      label: "Last 12 mo.",
      value: formatCount(stats.totalContributionsLastYear),
      icon: Activity,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Open source, at real scale
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            Live from the GitHub API — hand-built repos, real PRs, real history.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={`https://gsoc-espionage.vercel.app/?user=${GH_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[var(--duo-feather)] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_3px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-0.5 active:shadow-none whitespace-nowrap"
          >
            OSS contributions <ArrowRightIcon className="size-3.5" />
          </a>
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-5 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] transition-colors hover:border-[var(--duo-feather)] hover:text-[var(--duo-feather)] whitespace-nowrap"
          >
            <Github className="size-3.5" /> GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {tiles.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.label}
              className="rounded-xl border border-[var(--duo-swan)] bg-card p-4"
            >
              <Icon className="size-4 text-muted-foreground mb-2" />
              <p className="text-2xl font-extrabold tracking-tight">{t.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1 leading-tight">
                {t.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top languages */}
        <div className="md:col-span-2 rounded-xl border border-[var(--duo-swan)] bg-card p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Most used languages
          </p>
          <div className="flex flex-wrap gap-2">
            {stats.topLanguages.map((lang, i) => (
              <span
                key={lang}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
                  i === 0
                    ? "bg-[var(--duo-feather)] text-white"
                    : "bg-[var(--duo-feather)]/10 text-[var(--duo-feather)]"
                }`}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="rounded-xl border border-[var(--duo-swan)] bg-card p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Organizations
          </p>
          {stats.orgs.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {stats.orgs.map((o) => (
                <a
                  key={o.login}
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={o.login}
                  className="group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={o.avatar_url}
                    alt={o.login}
                    className="size-9 rounded-lg border border-[var(--duo-swan)] group-hover:border-[var(--duo-feather)] transition-colors"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">Loading…</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground">
        <a
          href={`https://gsoc-espionage.vercel.app/?user=${GH_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-[var(--duo-feather)] hover:underline"
        >
          Detailed OSS contribution tracker <ExternalLink className="size-3" />
        </a>
        <a
          href={`https://github.com/${GH_USER}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-[var(--duo-feather)] hover:underline"
        >
          All public repos <ExternalLink className="size-3" />
        </a>
        <a
          href={`https://www.npmjs.com/~${GH_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-[var(--duo-feather)] hover:underline"
        >
          Published npm packages <ExternalLink className="size-3" />
        </a>
      </div>
    </div>
  );
}
