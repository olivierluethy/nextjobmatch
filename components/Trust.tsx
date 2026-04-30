"use client";

import { motion } from "framer-motion";
import { Lock, BellOff, Eye, UserCheck } from "lucide-react";

const items = [
  {
    icon: BellOff,
    title: "No spam, ever",
    body: "We don't sell your data. We don't blast recruiters with your resume. Your inbox stays yours.",
  },
  {
    icon: Lock,
    title: "No automatic actions",
    body: "We never apply on your behalf, message anyone, or commit to anything without your explicit choice.",
  },
  {
    icon: UserCheck,
    title: "Full user control",
    body: "Your profile, preferences, and matches are always editable. Pause, restart, or delete anytime.",
  },
  {
    icon: Eye,
    title: "Transparent process",
    body: "Every match comes with a reason. You see why a role was surfaced — and why others were filtered out.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Trust by default
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Built to respect your time and your inbox.
        </h2>
        <p className="mt-4 text-base text-muted">
          AI-assisted, human-controlled. We earn the right to be useful — and
          nothing more.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <div className="grid size-10 place-items-center rounded-lg bg-foreground text-background">
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
    </section>
  );
}
