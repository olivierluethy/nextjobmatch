"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, X, Sparkles, Briefcase, MapPin } from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  match: number;
  relevant: boolean;
};

const stream: Job[] = [
  { id: 1, title: "Senior React Engineer", company: "Stripe", location: "Remote · EU", match: 96, relevant: true },
  { id: 2, title: "Marketing Intern", company: "MegaCorp", location: "Boston, MA", match: 14, relevant: false },
  { id: 3, title: "Frontend Lead", company: "Linear", location: "Remote", match: 92, relevant: true },
  { id: 4, title: "Warehouse Associate", company: "BigBox Co.", location: "Phoenix, AZ", match: 9, relevant: false },
  { id: 5, title: "Staff Software Engineer", company: "Vercel", location: "Remote · NA/EU", match: 94, relevant: true },
  { id: 6, title: "Door-to-door Sales Rep", company: "AcmeSales", location: "Houston, TX", match: 6, relevant: false },
];

export default function HeroJobStream() {
  const [index, setIndex] = useState(0);
  const [matched, setMatched] = useState<Job[]>([]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => {
        const job = stream[i % stream.length];
        if (job.relevant) {
          setMatched((m) => {
            if (m.some((x) => x.id === job.id)) return m;
            return [job, ...m].slice(0, 3);
          });
        }
        return (i + 1) % stream.length;
      });
    }, 1600);
    return () => clearInterval(t);
  }, []);

  const current = stream[index];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Raw feed */}
        <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Raw market
            </p>
            <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium text-muted">
              noisy
            </span>
          </div>

          <div className="relative mt-4 h-56 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: current.relevant ? 60 : -60,
                  rotate: current.relevant ? 4 : -4,
                  transition: { duration: 0.4 },
                }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-0 top-0"
              >
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {current.title}
                      </p>
                      <p className="truncate text-xs text-muted">
                        {current.company}
                      </p>
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ${
                        current.relevant
                          ? "bg-accent-soft text-accent-hover"
                          : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {current.relevant ? (
                        <Check className="size-3" />
                      ) : (
                        <X className="size-3" />
                      )}
                      {current.match}% match
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="size-3" /> Full-time
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3" /> {current.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Filter bar visualization */}
            <motion.div
              aria-hidden
              className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>

          <p className="mt-2 text-[11px] text-muted">
            Listings stream in. Most aren&apos;t relevant.
          </p>
        </div>

        {/* Matched feed */}
        <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-hover">
              <Sparkles className="size-3.5" /> Your matches
            </p>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent-hover">
              relevant
            </span>
          </div>

          <div className="mt-4 space-y-3">
            <AnimatePresence initial={false}>
              {matched.length === 0 && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid h-44 place-items-center rounded-xl border border-dashed border-border text-center text-xs text-muted"
                >
                  Filtering job market…
                </motion.div>
              )}
              {matched.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-xl border border-border bg-gradient-to-b from-accent-soft/60 to-background p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {job.title}
                      </p>
                      <p className="truncate text-xs text-muted">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent px-2 py-1 text-[10px] font-semibold text-white">
                      {job.match}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
