import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const fmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const others = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-6 pt-12 pb-16 sm:pt-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> All posts
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent-hover">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-muted">
              <Calendar className="size-3.5" />
              {fmt.format(new Date(post.date))}
            </span>
            <span className="inline-flex items-center gap-1 text-muted">
              <Clock className="size-3.5" />
              {post.readingTime}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        </header>

        <div className="mt-12 space-y-6 text-[17px] leading-[1.75] text-foreground/90">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="mx-auto w-full max-w-4xl px-6 py-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Keep reading
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent-hover">
                      {p.category}
                    </span>
                    <span className="text-muted">{p.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-hover">
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read article
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
