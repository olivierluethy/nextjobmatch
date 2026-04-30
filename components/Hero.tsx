"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";
import HeroJobStream from "./HeroJobStream";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-soft to-transparent blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted shadow-sm"
          >
            <Sparkles className="size-3.5 text-accent" />
            AI-powered job matching, with you in control
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Stop scrolling through{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">irrelevant</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-accent-soft"
              />
            </span>{" "}
            job listings.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            Find jobs that actually match your skills, goals, and preferences.
            NextJobMatch reads the market for you and surfaces only the roles
            worth your time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/#cta"
              onClick={() =>
                trackEvent("find_matches_click", { location: "hero" })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm transition-all hover:translate-y-[-1px] hover:bg-accent-hover"
            >
              <Target className="size-4" />
              Find Your Matches
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#cta"
              onClick={() =>
                trackEvent("try_free_click", { location: "hero" })
              }
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Try It Free
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-xs text-muted"
          >
            No spam. No automatic applications. You decide where to apply.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <HeroJobStream />
        </motion.div>
      </div>
    </section>
  );
}
