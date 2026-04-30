"use client";

import { motion } from "framer-motion";
import { Brain, Filter, Sparkles, ShieldCheck, Hand, Send } from "lucide-react";

const points = [
  {
    icon: Brain,
    title: "AI that actually reads",
    body: "Every listing gets parsed against your full profile — not just keywords. Skills, seniority, industry, goals, location, work style.",
  },
  {
    icon: Filter,
    title: "Noise filtered out",
    body: "Generic listings, mismatched roles, and recruiter spam are quietly dropped. Only the listings that fit make the cut.",
  },
  {
    icon: Sparkles,
    title: "Highly relevant matches",
    body: "Each match comes with a score and a clear reason. You see why the role fits, not just that it does.",
  },
];

const guarantees = [
  { icon: Hand, label: "You remain in control" },
  { icon: Send, label: "No automatic applications are sent" },
  { icon: ShieldCheck, label: "You decide where to apply" },
];

export default function Solution() {
  return (
    <section className="relative border-y border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The solution
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Meet NextJobMatch.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A smart filter for the job market. We analyze your skills,
            preferences, and goals, then quietly remove everything that
            doesn&apos;t match — so you can focus on the roles that actually fit.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              What we will never do
            </p>
            <ul className="mt-4 space-y-3">
              {guarantees.map((g) => (
                <li
                  key={g.label}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-accent-soft text-accent">
                    <g.icon className="size-4" />
                  </span>
                  {g.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:col-span-7">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-5 rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
                <p.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
