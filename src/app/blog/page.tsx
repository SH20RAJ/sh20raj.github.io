import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog — Shaswat Raj",
  description: "Thoughts on software engineering, open source, AI, and building products.",
  alternates: {
    canonical: "https://sh20raj.github.io/blog",
  },
  openGraph: {
    title: "Blog — Shaswat Raj",
    description: "Thoughts on software engineering, open source, AI, and building products.",
    url: "https://sh20raj.github.io/blog",
    siteName: "Shaswat Raj",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Shaswat Raj",
    description: "Thoughts on software engineering, open source, AI, and building products.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h1 className="text-xl font-bold tracking-tight">Blog</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Thoughts on software, open source, and building things.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          {posts.length === 0 ? (
            <p className="text-sm text-muted-foreground">No posts yet.</p>
          ) : (
            <div className="space-y-1">
              {posts
                .sort(
                  (a, b) =>
                    new Date(b.metadata.publishedAt).getTime() -
                    new Date(a.metadata.publishedAt).getTime()
                )
                .map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between gap-4 py-2.5 group hover:bg-accent/50 rounded px-2 -mx-2 transition-colors"
                  >
                    <p className="text-sm font-medium group-hover:text-foreground transition-colors truncate">
                      {post.metadata.title}
                    </p>
                    <time className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                      {post.metadata.publishedAt}
                    </time>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
