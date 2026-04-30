"use client";

import { motion } from "framer-motion";
import { Filter, Clock3, Inbox, Search } from "lucide-react";

const items = [
  {
    icon: Inbox,
    title: "Generic listings everywhere",
    body: "Traditional platforms surface roles by keyword, not by fit. The result is a feed that looks personalized but isn't.",
  },
  {
    icon: Filter,
    title: "You do all the filtering",
    body: "Every search becomes a manual triage exercise — opening tabs, scanning descriptions, comparing requirements line by line.",
  },
  {
    icon: Search,
    title: "Most jobs aren't relevant",
    body: "Wrong stack, wrong seniority, wrong industry. The ratio of signal to noise quietly trains you to expect disappointment.",
  },
  {
    icon: Clock3,
    title: "Hours disappear every week",
    body: "A few minutes here, a few there. By the end of the week you've spent more time scrolling than preparing.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          The problem
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Job platforms weren&apos;t built for relevance.
        </h2>
        <p className="mt-4 text-base text-muted">
          They were built for volume. You pay the time tax — every search, every
          day, every week.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="grid size-10 place-items-center rounded-lg bg-accent-soft text-accent">
              <it.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {it.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
