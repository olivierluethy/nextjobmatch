"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ClipboardList, Cpu, ListChecks } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const steps = [
  {
    n: 1,
    icon: ClipboardList,
    title: "Enter your skills, preferences, and location",
    body: "Tell us what you're good at, what you're looking for, and where you want to work. Takes about two minutes.",
  },
  {
    n: 2,
    icon: Cpu,
    title: "AI analyzes and filters the job market",
    body: "We compare your profile against listings from across the web — reading them the way a thoughtful recruiter would.",
  },
  {
    n: 3,
    icon: ListChecks,
    title: "Get highly relevant job matches instantly",
    body: "A short, ranked list of roles that actually fit. Open the ones you like. Apply on your terms. No surprises.",
  },
];

export default function Workflow() {
  const [active, setActive] = useState(1);

  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          How it works
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Three steps. Crystal clear.
        </h2>
        <p className="mt-4 text-base text-muted">
          No setup overhead, no dashboards to configure. From profile to
          matches in minutes.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {steps.map((s, i) => {
          const isActive = active === s.n;
          return (
            <motion.button
              key={s.n}
              type="button"
              onMouseEnter={() => setActive(s.n)}
              onFocus={() => setActive(s.n)}
              onClick={() => {
                setActive(s.n);
                trackEvent("workflow_step_click", { step: s.n });
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border bg-background p-7 text-left shadow-sm transition-all ${
                isActive
                  ? "border-accent shadow-md"
                  : "border-border hover:border-accent/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-10 place-items-center rounded-lg text-sm font-semibold ${
                    isActive
                      ? "bg-accent text-white"
                      : "bg-accent-soft text-accent"
                  }`}
                >
                  {s.n}
                </span>
                <span className="grid size-10 place-items-center rounded-lg bg-surface text-foreground">
                  <s.icon className="size-5" />
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.body}
              </p>

              <motion.div
                aria-hidden
                className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
