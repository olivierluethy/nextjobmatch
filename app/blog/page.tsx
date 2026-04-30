import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogIndexCard from "@/components/BlogIndexCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays on relevance, job search, and the future of AI in hiring — from the team behind NextJobMatch.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "NextJobMatch Blog",
    description:
      "Essays on relevance, job search, and the future of AI in hiring.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Ideas worth your time.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Notes on relevance, job search, and the future of AI in hiring —
            written by the team building NextJobMatch.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <BlogIndexCard key={post.slug} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
