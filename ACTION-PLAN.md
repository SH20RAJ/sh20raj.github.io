# SEO Action Plan
## Shaswat Raj Portfolio — Prioritized Recommendations

---

## CRITICAL — Fix Immediately (Blocks Indexing)

### 1. Fix GitHub Pages Deployment
**Impact:** Site is completely inaccessible at the public URL
**Effort:** 30 min
**Action:**
- Go to GitHub repo Settings → Pages → Source: GitHub Actions
- Verify the deploy workflow ran successfully
- Check if repo is named `sh20raj.github.io` or if it needs a different URL

### 2. Create robots.txt
**Impact:** Search engines can't discover crawl directives
**Effort:** 15 min
**File:** `src/app/robots.ts`
```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://sh20raj.github.io/sitemap.xml",
  };
}
```

### 3. Create sitemap.xml
**Impact:** Pages can't be efficiently discovered
**Effort:** 20 min
**File:** `src/app/sitemap.ts`
```ts
import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const blogEntries = posts.map((post) => ({
    url: `https://sh20raj.github.io/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: "https://sh20raj.github.io", priority: 1.0 },
    { url: "https://sh20raj.github.io/blog", priority: 0.8 },
    { url: "https://sh20raj.github.io/projects", priority: 0.8 },
    { url: "https://sh20raj.github.io/startups", priority: 0.6 },
    ...blogEntries,
  ];
}
```

### 4. Fix Homepage Content Visibility for AI Crawlers
**Impact:** AI crawlers see invisible content
**Effort:** 1 hour
**File:** `src/lib/resume-context.tsx`
**Action:** Move the `invisible` wrapper to only affect the editor toggle, not the entire page content. Or convert `page.tsx` to a server component.

---

## HIGH — Fix Within 1 Week

### 5. Add Canonical Tags
**Impact:** Prevents duplicate content issues
**Effort:** 20 min
**File:** `src/app/layout.tsx`
```ts
alternates: {
  canonical: DATA.url,
},
```
Add page-specific canonicals in each page's metadata export.

### 6. Add Person JSON-LD to Homepage
**Impact:** Enables Knowledge Panel, establishes entity
**Effort:** 15 min
**File:** `src/app/layout.tsx`
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shaswat Raj",
  "url": "https://sh20raj.github.io",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/SH20RAJ",
    "https://linkedin.com/in/sh20raj",
    "https://x.com/SH20RAJ",
    "https://dev.to/sh20raj"
  ],
  "knowsAbout": ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"]
}
```

### 7. Add H1 to Homepage
**Impact:** Primary heading signal for SEO
**Effort:** 5 min
**File:** `src/app/page.tsx`
**Action:** Change the hero "Hi, I'm Shaswat" from `<p>` to `<h1>`.

### 8. Expand Blog Posts to 1,500+ Words
**Impact:** Content depth is a major ranking factor
**Effort:** 2-3 hours per post
**Files:** `content/*.mdx`
**Action:** Add code examples, screenshots, benchmarks, real implementation details to each post.

### 9. Fix Blog Slug Routing
**Impact:** Some blog posts return 500 errors
**Effort:** 30 min
**Action:** Align MDX filenames with the slugs expected by the listing page.

### 10. Add Security Headers
**Impact:** Minor ranking factor, trust signal
**Effort:** 10 min
**File:** `public/_headers`
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

---

## MEDIUM — Fix Within 1 Month

### 11. Add Lazy Loading to Images
**File:** Components with images below the fold
**Action:** Add `loading="lazy"` to project card images, badges, visitor counter

### 12. Remove Excess Image Preloads
**File:** `src/app/page.tsx` or component that adds preloads
**Action:** Keep only hero avatar preload, remove 6 others

### 13. NoIndex /editor Page
**File:** `src/app/editor/layout.tsx` (new file)
```ts
export const metadata = { robots: { index: false, follow: false } };
```

### 14. Create llms.txt
**File:** `public/llms.txt`
```
# Shaswat Raj
Full Stack Developer specializing in System Design, Web Dev, DevOps, and Open-Source.

## Key Pages
- Portfolio: https://sh20raj.github.io
- Blog: https://sh20raj.github.io/blog
- Projects: https://sh20raj.github.io/projects

## Contact
- GitHub: https://github.com/SH20RAJ
- Email: sh20raj@gmail.com
```

### 15. Add BreadcrumbList Schema to Blog Posts
**File:** `src/app/blog/[slug]/page.tsx`

### 16. Add Internal Cross-Links Between Blog Posts
**Files:** `content/*.mdx`
**Action:** Each post should link to 2-3 related posts

### 17. Add /startups to Navbar
**File:** `src/data/resume.tsx` — add to `navbar` array

### 18. Unique Meta Descriptions Per Page
**Files:** `src/app/projects/page.tsx`, `src/app/startups/page.tsx`

---

## LOW — Backlog

19. Convert images to WebP/AVIF format
20. Add `srcset` for responsive images
21. Populate work/education arrays in resume.tsx
22. Remove duplicate Sopplayer project entry
23. Add FAQ schema to relevant blog posts
24. Fill Google Search Console verification token
25. Consider custom domain (e.g., shaswatraj.com)

---

## Implementation Order

```
Week 1:  Items 1-4 (Critical)
Week 2:  Items 5-10 (High)
Week 3:  Items 11-18 (Medium)
Ongoing: Items 19-25 (Low)
```

---

## Estimated Impact

| Action | Traffic Impact | Time to See Results |
|--------|---------------|-------------------|
| Fix deployment | Enables all SEO | Immediate |
| robots.txt + sitemap | +20-30% crawl efficiency | 2-4 weeks |
| Canonical tags | Prevents ranking drops | 2-4 weeks |
| Person JSON-LD | Knowledge Panel eligibility | 4-8 weeks |
| Expand blog posts | +50-100% organic traffic | 8-12 weeks |
| AI search readiness | ChatGPT/Perplexity visibility | 4-8 weeks |
