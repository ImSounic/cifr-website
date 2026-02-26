import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.1] mb-6">
              Building tools for how people actually live
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              CIFR creates thoughtful software for the everyday frictions of
              shared life — starting with the spaces we call home.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue transition-colors"
              >
                See our work
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="#philosophy"
                className="inline-flex items-center justify-center gap-2 border border-border text-ink px-8 py-3.5 rounded-full text-sm font-medium hover:bg-surface transition-colors"
              >
                Our philosophy
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-blue uppercase tracking-wider mb-3">
                Products
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                What we&apos;re building
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CleanSlate - Featured */}
            <ScrollReveal delay={0}>
              <Link
                href="/cleanslate"
                className="group block bg-white rounded-2xl p-8 border border-border hover:border-blue/30 hover:shadow-lg transition-all duration-300 md:col-span-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">🏠</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue bg-blue/10 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    MVP launching soon
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ink mb-2">
                  CleanSlate
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Smart chore management for students and roommates. Automatic
                  assignment, calendar sync, zero friction.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue group-hover:gap-2 transition-all">
                  Learn more <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            </ScrollReveal>

            {/* Coming Soon 1 */}
            <ScrollReveal delay={100}>
              <div className="rounded-2xl p-8 border-2 border-dashed border-border/60 bg-surface/30 flex flex-col justify-center min-h-[240px]">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-border/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-muted text-lg">?</span>
                  </div>
                  <h3 className="font-display text-lg text-muted mb-1">
                    Next up
                  </h3>
                  <p className="text-sm text-muted/70">Research phase</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Coming Soon 2 */}
            <ScrollReveal delay={200}>
              <div className="rounded-2xl p-8 border-2 border-dashed border-border/60 bg-surface/30 flex flex-col justify-center min-h-[240px]">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-border/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-muted text-lg">✦</span>
                  </div>
                  <h3 className="font-display text-lg text-muted mb-1">
                    And beyond
                  </h3>
                  <p className="text-sm text-muted/70">Ideas welcome</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-20 px-6 bg-surface/50 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-blue uppercase tracking-wider mb-3">
                Philosophy
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                What we believe
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">
                  Defaults matter most
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Great software works out of the box. You shouldn&apos;t need a
                  manual to do the obvious thing.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">
                  Invisible when working
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  The best tools are the ones you forget exist. They quietly
                  handle things so you can focus on what matters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">
                  Honest interfaces
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  No dark patterns, no engagement tricks. We build software that
                  respects your time and attention.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-medium text-blue uppercase tracking-wider mb-3">
                About
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-8">
                Small team, sharp focus
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  We started with shared living because we&apos;ve been there — the
                  passive-aggressive sticky notes, the chore chart that lasted two
                  weeks, the group chat that everyone ignores.
                </p>
                <p>
                  Every product starts with one question:{" "}
                  <span className="text-ink font-medium italic font-display text-lg">
                    &ldquo;What&apos;s the smallest thing we can build that removes the
                    most friction?&rdquo;
                  </span>
                </p>
                <p>
                  We&apos;re not trying to build an empire. We&apos;re trying to build
                  things that work.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
