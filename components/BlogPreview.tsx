"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { trackEvent } from "@/lib/gtag";

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              From the blog
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ideas worth your time.
            </h2>
          </div>
          <Link
            href="/blog"
            onClick={() =>
              trackEvent("blog_index_click", { location: "home_preview" })
            }
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
          >
            View all posts <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                onClick={() =>
                  trackEvent("blog_post_click", {
                    slug: post.slug,
                    location: "home_preview",
                  })
                }
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent-hover">
                    {post.category}
                  </span>
                  <span className="text-muted">{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-hover">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read article
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
