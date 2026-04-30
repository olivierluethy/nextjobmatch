"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#why", label: "Why us" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-white shadow-sm">
            <Sparkles className="size-4" />
          </span>
          NextJobMatch
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#cta"
            onClick={() =>
              trackEvent("try_free_click", { location: "navbar" })
            }
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Try It Free
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#cta"
              onClick={() => {
                setOpen(false);
                trackEvent("try_free_click", { location: "mobile_nav" });
              }}
              className="mt-1 rounded-md bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
            >
              Try It Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
