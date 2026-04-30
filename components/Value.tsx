"use client";

import { motion } from "framer-motion";
import { Clock, Target, Focus, Compass } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Save hours every week",
    body: "Stop scrolling. We compress thousands of listings into a short, relevant shortlist.",
  },
  {
    icon: Target,
    title: "Only see jobs that fit",
    body: "Each match is scored against your real profile — skills, goals, work style, and location.",
  },
  {
    icon: Focus,
    title: "Stay focused on what matters",
    body: "Less triage, more preparation. Spend time on conversations, not on filtering noise.",
  },
  {
    icon: Compass,
    title: "Make better career decisions",
    body: "Clear signal about why a role fits helps you compare options confidently.",
  },
];

export default function Value() {
  return (
    <section id="why" className="scroll-mt-20 border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Why use NextJobMatch
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get back the time the feed has been taking from you.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
