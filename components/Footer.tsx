import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-accent text-white shadow-sm">
              <Sparkles className="size-4" />
            </span>
            NextJobMatch
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            A smarter filter for the job market. Fewer listings, more relevance —
            and you stay in control.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Product
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/#how-it-works" className="hover:text-foreground">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#why" className="hover:text-foreground">
                  Why us
                </Link>
              </li>
              <li>
                <Link href="/#cta" className="hover:text-foreground">
                  Get started
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#trust" className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>hello@nextjobmatch.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NextJobMatch. All rights reserved.</p>
          <p>Made for people who&apos;d rather work than scroll.</p>
        </div>
      </div>
    </footer>
  );
}
