import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-0.5">
            <span className="text-xl font-display tracking-tight text-ink">
              CIFR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 ml-0.5" />
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/#products"
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              Products
            </Link>
            <Link
              href="/#about"
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              About
            </Link>
            <a
              href="mailto:hello@cifr.studio"
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted">&copy; 2025 CIFR</p>
        </div>
      </div>
    </footer>
  );
}
