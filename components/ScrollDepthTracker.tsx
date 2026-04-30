"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/gtag";

const THRESHOLDS = [25, 50, 75, 100] as const;

export default function ScrollDepthTracker() {
  const pathname = usePathname();
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    fired.current = new Set();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const viewport = window.innerHeight;
      const total = doc.scrollHeight - viewport;
      if (total <= 0) return;
      const pct = Math.min(100, Math.round((scrollTop / total) * 100));
      for (const t of THRESHOLDS) {
        if (pct >= t && !fired.current.has(t)) {
          fired.current.add(t);
          trackEvent("scroll_depth", { percent: t, path: pathname });
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
