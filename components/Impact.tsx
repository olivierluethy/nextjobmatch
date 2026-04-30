"use client";

import { motion } from "framer-motion";

const lines = [
  "Too many jobs.",
  "Too little relevance.",
  "Too much time wasted.",
];

export default function Impact() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3">
          {lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {line}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 text-lg text-muted"
          >
            Job search shouldn&apos;t feel like this.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
