"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const pathname = usePathname();
  const isCleanSlate = pathname === "/cleanslate";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cream/80 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-0.5 group">
            {isCleanSlate && (
              <span className="text-muted mr-3 text-sm group-hover:text-ink transition-colors">
                &larr;
              </span>
            )}
            <span className="text-xl font-display tracking-tight text-ink">
              CIFR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 ml-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/#products"
            className="nav-link text-sm hidden sm:block"
          >
            Products
          </Link>
          <Link
            href="/#about"
            className="nav-link text-sm hidden sm:block"
          >
            About
          </Link>
          <ThemeToggle />
          <a
            href="mailto:hello@cifr.studio"
            className="btn-fill text-sm bg-ink text-cream px-4 py-2 rounded-full"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
