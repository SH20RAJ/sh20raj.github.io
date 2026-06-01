"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Star, GitPullRequest, Users, ArrowRightIcon, Activity, Boxes, ExternalLink } from "lucide-react";

const GH_USER = "sh20raj";
const CACHE_KEY = "gh-stats-v2";
const CACHE_TTL_MS = 1000 * 60 * 60 * 12; // 12h
const OWN_REPO_OWNERS = new Set(["sh20raj", "sh20raj-dump"]);

interface ExternalContribution {
  repo: string;
  title: string;
  url: string;
  mergedAt: string;
  number: number;
}

interface ExternalRepoSummary {
  repo: string;
  url: string;
  count: number;
  latestMergedAt: string;
  sampleTitles: string[];
}

interface MergedPullRequestData {
  totalMerged: number;
  externalMerged: number;
  externalRepoCount: number;
  recentExternal: ExternalContribution[];
  topExternalRepos: ExternalRepoSummary[];
}

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
  externalPrsMerged: 79,
  externalReposContributed: 24,
  recentExternalContributions: [
    {
      repo: "corsairdev/corsair",
      title: "feat: add Bluesky integration plugin",
      url: "https://github.com/corsairdev/corsair/pull/228",
      mergedAt: "2026-05-29T00:36:39Z",
      number: 228,
    },
    {
      repo: "corsairdev/corsair",
      title: "feat: add Zendesk ticketing integration",
      url: "https://github.com/corsairdev/corsair/pull/224",
      mergedAt: "2026-05-24T15:03:47Z",
      number: 224,
    },
    {
      repo: "mofa-org/mofa",
      title: "refactor(foundation): add non_exhaustive to Backoff and CircuitState",
      url: "https://github.com/mofa-org/mofa/pull/1594",
      mergedAt: "2026-04-12T15:26:43Z",
      number: 1594,
    },
    {
      repo: "google-gemini/gemini-cli",
      title: "fix(core): thread AbortSignal to chat compression requests (#20405)",
      url: "https://github.com/google-gemini/gemini-cli/pull/20778",
      mergedAt: "2026-03-25T17:12:27Z",
      number: 20778,
    },
  ] as ExternalContribution[],
  topExternalRepos: [
    {
      repo: "ArticlePlanet/articleplanet.github.io",
      url: "https://github.com/ArticlePlanet/articleplanet.github.io",
      count: 23,
      latestMergedAt: "2024-02-13T13:10:44Z",
      sampleTitles: ["Bug removed from new.js", "Readme UPDATE", "new"],
    },
    {
      repo: "mofa-org/mofa",
      url: "https://github.com/mofa-org/mofa",
      count: 8,
      latestMergedAt: "2026-04-12T15:26:43Z",
      sampleTitles: [
        "refactor(foundation): add non_exhaustive to Backoff and CircuitState",
        "refactor(kernel): add #[non_exhaustive] to public enums",
        "fix(foundation): replace unwrap() with proper error handling in cron schedule parsing",
      ],
    },
    {
      repo: "unstory-app/sketchflow",
      url: "https://github.com/unstory-app/sketchflow",
      count: 8,
      latestMergedAt: "2025-10-31T13:38:19Z",
      sampleTitles: [
        "Add Cloudflare configuration to .env.example",
        "Clean up .gitignore by removing empty line",
        "Add Cloudflare configuration to .env.example",
      ],
    },
    {
      repo: "corsairdev/corsair",
      url: "https://github.com/corsairdev/corsair",
      count: 3,
      latestMergedAt: "2026-05-29T00:36:39Z",
      sampleTitles: [
        "feat: add Bluesky integration plugin",
        "feat: add Zendesk ticketing integration",
        "feat(studio): add schema-driven operation forms",
      ],
    },
  ] as ExternalRepoSummary[],
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

function parseRepoName(repositoryUrl: string): string {
  return repositoryUrl.split("/repos/")[1] || "";
}

function toExternalContribution(item: any): ExternalContribution | null {
  const repo = parseRepoName(item.repository_url);
  if (!repo) return null;
  const [owner] = repo.split("/");
  if (OWN_REPO_OWNERS.has(owner.toLowerCase())) return null;

  return {
    repo,
    title: item.title,
    url: item.html_url,
    mergedAt: item.pull_request?.merged_at || item.closed_at || item.updated_at,
    number: item.number,
  };
}

function summarizeExternalRepos(items: ExternalContribution[]): ExternalRepoSummary[] {
  const grouped = items.reduce<Record<string, ExternalContribution[]>>((acc, item) => {
    acc[item.repo] = acc[item.repo] || [];
    acc[item.repo].push(item);
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([repo, prs]) => {
      const sorted = [...prs].sort(
        (a, b) => new Date(b.mergedAt).getTime() - new Date(a.mergedAt).getTime()
      );
      return {
        repo,
        url: `https://github.com/${repo}`,
        count: prs.length,
        latestMergedAt: sorted[0]?.mergedAt || "",
        sampleTitles: sorted.slice(0, 3).map((pr) => pr.title),
      };
    })
    .sort((a, b) => b.count - a.count || new Date(b.latestMergedAt).getTime() - new Date(a.latestMergedAt).getTime());
}

async function fetchMergedPullRequests(): Promise<MergedPullRequestData> {
  const query = `author:${GH_USER} type:pr is:merged`;
  const items: any[] = [];
  let totalMerged = 0;

  for (let page = 1; page <= 10; page++) {
    const r = await fetch(
      `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&per_page=100&page=${page}&sort=updated&order=desc`
    );
    if (!r.ok) break;

    const j = await r.json();
    totalMerged = Number(j.total_count) || totalMerged;
    const batch = (j.items || []) as any[];
    items.push(...batch);

    if (batch.length < 100 || items.length >= totalMerged) break;
  }

  const external = items
    .map(toExternalContribution)
    .filter((item): item is ExternalContribution => Boolean(item))
    .sort((a, b) => new Date(b.mergedAt).getTime() - new Date(a.mergedAt).getTime());
  const topExternalRepos = summarizeExternalRepos(external);

  return {
    totalMerged,
    externalMerged: external.length,
    externalRepoCount: topExternalRepos.length,
    recentExternal: external.slice(0, 8),
    topExternalRepos,
  };
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

function formatMonthYear(value: string): string {
  if (!value) return "Merged";
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(value));
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
          fetchMergedPullRequests(),
          fetchContributions(),
        ]);
        if (cancelled) return;

        const user = userR.status === "fulfilled" ? userR.value : null;
        const repos: any[] = reposR.status === "fulfilled" ? reposR.value : [];
        const orgs: any[] = orgsR.status === "fulfilled" ? orgsR.value : [];
        const prs = prsR.status === "fulfilled" ? prsR.value : null;
        const contrib = contribR.status === "fulfilled" ? contribR.value : { lastYear: 0, allTime: 0 };

        const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
        const topLanguages = pickTopLanguages(repos);

        const next: Stats = {
          publicRepos: user?.public_repos ?? Math.max(repos.length, BASELINE.publicRepos),
          followers: user?.followers ?? BASELINE.followers,
          totalStars: totalStars || BASELINE.totalStars,
          totalContributionsLastYear: contrib.lastYear || BASELINE.totalContributionsLastYear,
          totalContributionsAllTime: contrib.allTime || BASELINE.totalContributionsAllTime,
          prsMerged: prs?.totalMerged || BASELINE.prsMerged,
          topLanguages: topLanguages.length ? topLanguages : BASELINE.topLanguages,
          orgs: orgs.slice(0, 8).map((o) => ({
            login: o.login,
            avatar_url: o.avatar_url,
            url: `https://github.com/${o.login}`,
          })),
          externalPrsMerged: prs?.externalMerged || BASELINE.externalPrsMerged,
          externalReposContributed: prs?.externalRepoCount || BASELINE.externalReposContributed,
          recentExternalContributions: prs?.recentExternal.length
            ? prs.recentExternal
            : BASELINE.recentExternalContributions,
          topExternalRepos: prs?.topExternalRepos.length ? prs.topExternalRepos : BASELINE.topExternalRepos,
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

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-4">
        <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--duo-macaw)]">
                External merged PRs
              </p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
                {formatCount(stats.externalPrsMerged)}
              </h3>
            </div>
            <GitPullRequest className="size-5 text-[var(--duo-feather)]" />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Accepted pull requests in repos outside my own GitHub accounts, across{" "}
            <span className="font-bold text-foreground">{formatCount(stats.externalReposContributed)}</span> public repositories.
          </p>
          <div className="mt-4 max-h-80 space-y-2 overflow-y-auto pr-1">
            {stats.topExternalRepos.map((repo) => (
              <a
                key={repo.repo}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-lg border border-[var(--duo-swan)] bg-background px-3 py-2 transition-colors hover:border-[var(--duo-feather)]"
              >
                <div className="min-w-0">
                  <p className="truncate text-xs font-extrabold group-hover:text-[var(--duo-feather)] transition-colors">
                    {repo.repo}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Latest {formatMonthYear(repo.latestMergedAt)}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[var(--duo-feather)]/10 px-2 py-1 text-[10px] font-extrabold text-[var(--duo-feather)]">
                  {repo.count} PR{repo.count === 1 ? "" : "s"}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-xl border-2 border-[var(--duo-swan)] bg-card p-5 shadow-[0_2px_0_var(--duo-swan)]">
          <div className="flex items-center justify-between gap-3 mb-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Recent accepted contributions
            </p>
            <a
              href={`https://github.com/search?q=${encodeURIComponent(`author:${GH_USER} type:pr is:merged`)}&type=pullrequests`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[var(--duo-feather)] hover:underline"
            >
              All PRs <ExternalLink className="size-3" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {stats.recentExternalContributions.slice(0, 6).map((pr) => (
              <a
                key={pr.url}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-[var(--duo-swan)] bg-background p-3 transition-colors hover:border-[var(--duo-feather)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-[10px] font-bold uppercase tracking-widest text-[var(--duo-macaw)]">
                    {pr.repo}
                  </p>
                  <span className="shrink-0 text-[10px] text-muted-foreground">#{pr.number}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs font-bold leading-snug group-hover:text-[var(--duo-feather)] transition-colors">
                  {pr.title}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {formatMonthYear(pr.mergedAt)}
                </p>
              </a>
            ))}
          </div>
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
