# Full SEO Audit Report
## Shaswat Raj Portfolio — https://sh20raj.github.io
## Date: 2026-05-16

---

## Executive Summary

### Overall SEO Health Score: 39/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 42/100 | 22% | 9.2 |
| Content Quality | 42/100 | 23% | 9.7 |
| On-Page SEO | 35/100 | 20% | 7.0 |
| Schema / Structured Data | 30/100 | 10% | 3.0 |
| Performance (CWV) | 35/100 | 10% | 3.5 |
| AI Search Readiness | 31/100 | 10% | 3.1 |
| Images | 25/100 | 5% | 1.3 |
| **TOTAL** | | | **36.7 → 39/100** |

### Business Type Detected
**Personal Portfolio / Developer Blog** — Static Next.js site with project showcase, blog, and resume editor.

### Top 5 Critical Issues
1. **No robots.txt** — Search engines have no crawl directives
2. **No sitemap.xml** — Pages can't be efficiently discovered
3. **Homepage content invisible to AI crawlers** — Wrapped in `invisible` div until JS hydrates
4. **All blog posts are severely thin** (200-320 words vs 1,500 minimum)
5. **GitHub Pages deployment is broken** — Live site returns 404

### Top 5 Quick Wins
1. Create `robots.ts` and `sitemap.ts` (30 min)
2. Add `"use client"` to `navbar.tsx` — already done (fixes hydration)
3. Add Person JSON-LD to homepage (15 min)
4. Add canonical tags to all pages (15 min)
5. NoIndex the `/editor` page (5 min)

---

## Technical SEO (Score: 42/100)

### Critical Issues
| Issue | Impact | Fix |
|-------|--------|-----|
| No robots.txt | Crawlers can't discover directives | Create `src/app/robots.ts` |
| No sitemap.xml | No URL discovery for crawlers | Create `src/app/sitemap.ts` |
| GitHub Pages returns 404 | Site not accessible publicly | Fix deployment / GitHub Pages config |

### High Issues
| Issue | Impact | Fix |
|-------|--------|-----|
| No canonical tags on any page | Duplicate content risk | Add `alternates.canonical` to metadata |
| Missing security headers | Minor ranking factor, trust | Add `public/_headers` file |
| X-Powered-By header exposed | Information disclosure | Set `poweredByHeader: false` in next.config |

### Medium Issues
| Issue | Impact | Fix |
|-------|--------|-----|
| Homepage is client component | Unnecessary JS for static content | Convert to server component |
| Editor page indexable | Wastes crawl budget | Add `robots: { index: false }` |
| Google verification token empty | Can't verify Search Console | Populate or remove |
| 7 image preloads competing for bandwidth | Slows critical resources | Remove preloads for below-fold images |

### Positive Findings
- Proper meta viewport tag on all pages
- OpenGraph and Twitter Cards configured
- Clean URL structure (`/blog`, `/projects`, `/blog/[slug]`)
- Static export with `generateStaticParams` for blog posts
- Proper 404 handling with correct status code
- Font loaded via `next/font/google` (no layout shift)

---

## Content Quality (Score: 42/100)

### Critical Issues
| Issue | Impact | Fix |
|-------|--------|-----|
| All blog posts 200-320 words | Below 1,500-word minimum for SEO | Expand with code examples, screenshots, data |
| Blog slug routing broken (500 errors) | Pages inaccessible | Align MDX filenames with slugs |
| `/blog` (120 words), `/projects` (190 words), `/startups` (126 words) | Thin content pages | Add substantive content to each |

### High Issues
| Issue | Impact | Fix |
|-------|--------|-----|
| Homepage missing H1 tag | Primary heading signal missing | Make "Hi, I'm Shaswat" an H1 |
| Empty work/education arrays | Missing E-E-A-T signals | Populate with real experience data |
| No internal linking between blog posts | Isolated content, poor link graph | Cross-link related posts |
| Duplicate Sopplayer project entry | Confuses content signals | Remove duplicate |

### Medium Issues
| Issue | Impact | Fix |
|-------|--------|-----|
| Repetitive claims ("500+ projects", "45k+ followers") | Reads like keyword stuffing | Vary language, add verification links |
| Duplicate meta descriptions (home/projects) | Same description on multiple pages | Unique descriptions per page |
| Blog posts skip H2, go H1→H3 | Invalid heading hierarchy | Fix to H1→H2→H3 |

### Blog Post Word Counts
| Post | Words | Status |
|------|-------|--------|
| hello-world.mdx | 277 | FAIL |
| aws-cloud.mdx | 207 | FAIL |
| my-journey.mdx | 299 | FAIL |
| building-resumeflow.mdx | 320 | FAIL |
| open-source-tips.mdx | 279 | FAIL |
| ai-in-2026.mdx | 298 | FAIL |
| devops-mastery.mdx | 213 | FAIL |
| seo-skills.mdx | 236 | FAIL |
| sh20raj-profile.mdx | 216 | FAIL |
| why-nextjs-15.mdx | 301 | FAIL |

---

## On-Page SEO (Score: 35/100)

### Title Tags
| Page | Title | Status |
|------|-------|--------|
| `/` | "Shaswat Raj" | OK |
| `/blog` | "Blog \| Shaswat Raj" | OK |
| `/blog/[slug]` | "[Post Title] \| Shaswat Raj" | OK |
| `/projects` | "Shaswat Raj" | FAIL — should be "Projects \| Shaswat Raj" |
| `/startups` | "Shaswat Raj" | FAIL — should be "Startups \| Shaswat Raj" |

### Meta Descriptions
- Homepage: "System Design | Web Dev | DevOps | Open-Source" — OK
- Blog: "My thoughts on software development, life, and more." — OK
- Projects: Same as homepage — FAIL (duplicate)
- Blog posts: Unique per post — OK

### Heading Structure
| Page | H1 | H2 | H3 | Issues |
|------|----|----|-----|--------|
| Homepage | MISSING | 6 | 4 | No H1 |
| Blog | "blog" (lowercase) | 0 | 0 | Lowercase H1 |
| Projects | "Best Projects" | 0 | 4 | No H2 |
| Startups | MISSING | 1 | 4 | No H1 |
| Blog posts | Present | 0 | 3 | Skip H2 |

### Internal Linking
- Navbar links: Home, Blog, GitHub, LinkedIn, Twitter, Ideas — OK
- Missing: `/startups` not in navbar
- Missing: No cross-links between blog posts
- Missing: No links from projects to related blog posts

---

## Schema / Structured Data (Score: 30/100)

### Current Implementation
| Page | JSON-LD | Type |
|------|---------|------|
| Homepage | NONE | — |
| Blog index | NONE | — |
| Blog posts | YES | BlogPosting |
| Projects | NONE | — |

### Issues
| Severity | Issue |
|----------|-------|
| CRITICAL | No JSON-LD on homepage (missing Person schema) |
| HIGH | No canonical tags on any page |
| HIGH | BlogPosting missing `publisher` property |
| HIGH | Blog image uses OG generator URL, not static image |
| HIGH | Blog/projects pages reuse home OG metadata |
| MEDIUM | No WebSite schema with SearchAction |
| MEDIUM | No BreadcrumbList schema |
| MEDIUM | Person schema missing `sameAs` |
| MEDIUM | Empty Google verification token |
| MEDIUM | Blog posts missing `twitter:creator` |

### Recommended Schemas to Add
1. **Person** — Homepage (name, jobTitle, sameAs, knowsAbout)
2. **WebSite** — Root layout (name, url, author)
3. **BreadcrumbList** — Blog posts (Home → Blog → Post)
4. **CollectionPage** — Blog index
5. **Enhanced BlogPosting** — Add publisher, mainEntityOfPage

---

## Performance / CWV (Score: 35/100)

### Image Issues
| Issue | Count | Impact |
|-------|-------|--------|
| Images with lazy loading | 0 | All images load eagerly |
| Image preloads | 7 | Too many compete for bandwidth |
| External domains loaded | 15+ | DNS/TLS overhead per domain |
| Images without explicit dimensions | Unknown | CLS risk |

### External Domains Loaded
- `ghchart.rshah.org` — GitHub contribution chart
- `img.shields.io` — Badge images
- `visitorbadge.io` — Visitor counter
- `1.bp.blogspot.com` — Project screenshot
- `data.jsdelivr.net` — Download stats
- `kishanai.strivio.world` — Project screenshot
- `i.ibb.co` — Project screenshots

### Resource Loading
- 7 image preloads in `<head>` (too many)
- Font loaded via `next/font/google` (good — no layout shift)
- CSS loaded with proper precedence
- Scripts loaded async (good)

### Recommendations
1. Add `loading="lazy"` to below-the-fold images
2. Remove preloads for project card images (keep only hero/avatar)
3. Add explicit `width`/`height` to all images
4. Consider proxying critical external images through a CDN

---

## AI Search Readiness / GEO (Score: 31/100)

### Critical Issues
| Issue | Impact |
|-------|--------|
| No robots.txt | Can't explicitly allow/block AI crawlers |
| No llms.txt | No machine-readable identity for AI systems |
| No sitemap.xml | AI crawlers can't discover all pages |
| Homepage content in `invisible` div | AI crawlers that don't render JS see hidden content |

### Passage-Level Citability
- Homepage: No self-contained quotable passages (optimal: 134-167 words)
- Blog posts: Too short (200-320 words), no question-based headings
- No FAQ or HowTo content structure
- Claims lack source attribution

### Platform Visibility Estimate
| Platform | Visibility | Notes |
|----------|------------|-------|
| Google AI Overviews | Low | No sitemap, no schema on homepage |
| ChatGPT Search | Very Low | No llms.txt, invisible content |
| Perplexity | Very Low | Same issues as ChatGPT |
| Bing Copilot | Low | No sitemap |

### Key Fix
The `ResumeProvider` component wraps all content in `<div className={!isMounted ? "invisible" : ""}>`. This makes content invisible to AI crawlers that parse HTML without executing JS. Either:
- Remove `"use client"` from `page.tsx` and make it a server component
- Move the `invisible` wrapper to only affect the editor button

---

## Images (Score: 25/100)

| Issue | Status |
|-------|--------|
| Lazy loading | 0 images have `loading="lazy"` |
| Alt text | Minimal — most images lack descriptive alt |
| Format | PNG/JPG — no WebP/AVIF |
| Responsive images | No `srcset` or `sizes` attributes |
| Explicit dimensions | Missing on many images |
| Preloading | 7 images preloaded (excessive) |

---

## Prioritized Action Plan

### Critical (Fix Immediately)
1. **Fix GitHub Pages deployment** — Site returns 404 at `sh20raj.github.io`
2. **Create robots.ts** — Add crawl directives and sitemap reference
3. **Create sitemap.ts** — Generate sitemap with all pages and blog posts
4. **Fix homepage content visibility** — Remove `invisible` wrapper for crawlers

### High (Fix Within 1 Week)
5. **Add canonical tags** — `alternates.canonical` on all pages
6. **Add Person JSON-LD** — Homepage structured data with `sameAs`
7. **Add H1 to homepage** — Hero text should be H1, not paragraph
8. **Expand blog posts** — All posts need 1,500+ words with real content
9. **Fix blog slug routing** — Align MDX filenames with expected slugs
10. **Add security headers** — `public/_headers` file

### Medium (Fix Within 1 Month)
11. **Add lazy loading** — Below-the-fold images
12. **Remove excess preloads** — Keep only hero image
13. **NoIndex /editor** — Don't waste crawl budget
14. **Add llms.txt** — Machine-readable identity for AI
15. **Unique meta descriptions** — Per page, not duplicated
16. **Add BreadcrumbList schema** — Blog posts
17. **Internal cross-linking** — Between blog posts
18. **Add `/startups` to navbar**

### Low (Backlog)
19. Convert images to WebP/AVIF
20. Add `srcset` for responsive images
21. Populate work/education arrays
22. Remove duplicate Sopplayer entry
23. Add FAQ/HowTo schema to relevant posts
24. Fill Google Search Console verification token
25. Consider custom domain instead of github.io

---

## Files to Modify

| File | Changes Needed |
|------|----------------|
| `src/app/robots.ts` | NEW — Generate robots.txt |
| `src/app/sitemap.ts` | NEW — Generate sitemap.xml |
| `src/app/layout.tsx` | Add canonical, Person JSON-LD, fix google verification |
| `src/app/page.tsx` | Add H1 tag, consider server component |
| `src/app/blog/[slug]/page.tsx` | Enhance BlogPosting JSON-LD, add BreadcrumbList |
| `src/app/blog/page.tsx` | Add CollectionPage JSON-LD, unique OG metadata |
| `src/app/projects/page.tsx` | Unique metadata, no longer reuse home OG |
| `src/lib/resume-context.tsx` | Fix invisible wrapper for crawlers |
| `src/data/resume.tsx` | Populate work/education, remove duplicate Sopplayer |
| `public/_headers` | NEW — Security headers |
| `content/*.mdx` | Expand all blog posts to 1,500+ words |
| `next.config.mjs` | Add `poweredByHeader: false` |
