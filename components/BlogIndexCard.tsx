"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";
import { trackEvent } from "@/lib/gtag";

const fmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default function BlogIndexCard({ post }: { post: BlogPost }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.4 }}
      className="py-8"
    >
      <Link
        href={`/blog/${post.slug}`}
        onClick={() =>
          trackEvent("blog_post_click", {
            slug: post.slug,
            location: "blog_index",
          })
        }
        className="group flex flex-col gap-3"
      >
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent-hover">
            {post.category}
          </span>
          <span className="text-muted">{fmt.format(new Date(post.date))}</span>
          <span className="text-muted">·</span>
          <span className="text-muted">{post.readingTime}</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-hover sm:text-3xl">
          {post.title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {post.description}
        </p>
        <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read article
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.li>
  );
}
