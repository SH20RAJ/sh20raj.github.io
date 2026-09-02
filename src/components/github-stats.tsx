"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, GitPullRequest, ExternalLink } from "lucide-react";

const GH_USER = "sh20raj";
const CACHE_KEY = "gh-stats-v2";
const CACHE_TTL_MS = 1000 * 60 * 60 * 12;
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
      repo: "google-gemini/gemini-cli",
      title: "fix(core): thread AbortSignal to chat compression requests",
      url: "https://github.com/google-gemini/gemini-cli/pull/20778",
      mergedAt: "2026-03-25T17:12:27Z",
      number: 20778,
    },
    {
      repo: "mofa-org/mofa",
      title: "refactor(foundation): add non_exhaustive to Backoff and CircuitState",
      url: "https://github.com/mofa-org/mofa/pull/1594",
      mergedAt: "2026-04-12T15:26:43Z",
      number: 1594,
    },
  ] as ExternalContribution[],
  topExternalRepos: [
    {
      repo: "ArticlePlanet/articleplanet.github.io",
      url: "https://github.com/ArticlePlanet/articleplanet.github.io",
      count: 23,
      latestMergedAt: "2024-02-13T13:10:44Z",
      sampleTitles: ["Bug removed from new.js"],
    },
    {
      repo: "mofa-org/mofa",
      url: "https://github.com/mofa-org/mofa",
      count: 8,
      latestMergedAt: "2026-04-12T15:26:43Z",
      sampleTitles: ["refactor(foundation): add non_exhaustive to Backoff and CircuitState"],
    },
    {
      repo: "corsairdev/corsair",
      url: "https://github.com/corsairdev/corsair",
      count: 3,
      latestMergedAt: "2026-05-29T00:36:39Z",
      sampleTitles: ["feat: add Bluesky integration plugin"],
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
  const [stats, setStats] = useState<Stats>(BASELINE);

  useEffect(() => {
    const cached = readCache();
    if (cached) setStats(cached);
  }, []);

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

  const stats_row = [
    { label: "Contributions", value: formatCount(stats.totalContributionsAllTime) },
    { label: "Signal Stat", value: "TODO(shaswat): pick a replacement stat (e.g. total stars, largest repo's stars, npm downloads)" },
    { label: "External PRs merged", value: formatCount(stats.externalPrsMerged) },
    { label: "Followers", value: formatCount(stats.followers) },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight">Open source</h2>
        <a
          href={`https://github.com/${GH_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="size-4" /> GitHub
        </a>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats_row.map((t) => (
          <div key={t.label}>
            <p className="text-xl font-bold tracking-tight">{t.value}</p>
            <p className="text-xs text-muted-foreground">{t.label}</p>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="flex flex-wrap gap-1.5">
        {stats.topLanguages.map((lang) => (
          <span
            key={lang}
            className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded"
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Recent external PRs */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          Recent contributions ({formatCount(stats.externalPrsMerged)} PRs merged into repos I don&apos;t own)
        </p>
        <div className="space-y-1.5">
          {stats.recentExternalContributions.slice(0, 4).map((pr) => (
            <a
              key={pr.url}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 py-1.5 text-sm hover:bg-accent/50 rounded px-2 -mx-2 transition-colors"
            >
              <GitPullRequest className="size-3.5 text-muted-foreground mt-0.5 shrink-0" />
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground">{pr.repo}</span>
                <p className="text-sm truncate group-hover:text-foreground transition-colors">
                  {pr.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
