import Link from "next/link";

// Renders trusted, static legal copy (privacy / terms) with the CIFR design
// language. Content is authored in legal-content.ts (no user input), so
// dangerouslySetInnerHTML is safe here.
export function LegalPage({
  title,
  updated,
  html,
}: {
  title: string;
  updated: string;
  html: string;
}) {
  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/cleanslate"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          ← Back to CleanSlate
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl text-ink mt-6 mb-2">
          {title}
        </h1>
        <p className="text-sm text-muted mb-4">Last updated: {updated}</p>
        <div className="flex gap-6 text-sm mb-10">
          <Link href="/cleanslate/privacy" className="nav-link">
            Privacy Policy
          </Link>
          <Link href="/cleanslate/terms" className="nav-link">
            Terms of Service
          </Link>
        </div>

        <article
          className="legal-prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}
