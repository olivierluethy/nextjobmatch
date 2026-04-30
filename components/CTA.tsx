"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

export default function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-20 bg-gradient-to-b from-background to-surface"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background shadow-xl sm:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 size-[28rem] rounded-full bg-accent-soft/10 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next job shouldn&apos;t be hidden in noise.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/70">
              Set up your profile in two minutes. Let the AI do the filtering.
              Decide where to apply — only for the roles that genuinely fit.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://nextjobmatch.com/start"
                onClick={() =>
                  trackEvent("find_matches_click", { location: "cta" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:translate-y-[-1px] hover:bg-accent hover:text-white"
              >
                <Target className="size-4" />
                Find Your Matches
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="https://nextjobmatch.com/signup"
                onClick={() =>
                  trackEvent("try_free_click", { location: "cta" })
                }
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/20 px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Try It Free
              </Link>
            </div>

            <p className="mt-5 text-xs text-background/60">
              Free to start. No credit card. No automatic applications, ever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
