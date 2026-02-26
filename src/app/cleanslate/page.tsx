import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PhoneMockup } from "@/components/phone-mockup";

export const metadata: Metadata = {
  title: "CleanSlate — Chores, handled. | CIFR",
  description:
    "Smart chore management for students and roommates. Fair assignment, Google Calendar sync, zero drama.",
  openGraph: {
    title: "CleanSlate — Chores, handled.",
    description:
      "Smart chore management for students and roommates. Fair assignment, Google Calendar sync, zero drama.",
    type: "website",
  },
};

export default function CleanSlatePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal variant="fade-left">
                <p className="text-sm font-medium text-blue uppercase tracking-wider mb-4">
                  Introducing
                </p>
                <h1 className="font-display text-5xl sm:text-6xl text-ink leading-[1.1] mb-2">
                  CleanSlate.
                </h1>
                <p className="font-display text-2xl sm:text-3xl text-blue-light mb-6">
                  Chores, handled.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100} variant="fade-left">
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  The chore app that actually works. Fair assignments, calendar
                  sync, and zero drama — so you can stop arguing about who does
                  what and start living together better.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200} variant="fade-left">
                <div className="flex flex-col sm:flex-row gap-4">
                  <span className="btn-fill btn-fill-bright inline-flex items-center justify-center gap-2 bg-blue text-white px-8 py-3.5 rounded-full text-sm font-medium">
                    Coming soon to iOS &amp; Android
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={150} variant="fade-right">
              <div className="flex justify-center lg:justify-end">
                <PhoneMockup />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fade-in">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-blue uppercase tracking-wider mb-3">
                The Problem
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                Sound familiar?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            <ScrollReveal delay={0} variant="fade-left">
              <div className="bg-white rounded-2xl p-6 border border-border text-center card-interactive" data-cursor="hover">
                <p className="font-display text-lg text-ink leading-snug">
                  &ldquo;You&apos;ve tried the chore chart. It lasted two weeks.&rdquo;
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl p-6 border border-border text-center card-interactive" data-cursor="hover">
                <p className="font-display text-lg text-ink leading-snug">
                  &ldquo;The group chat &lsquo;system&rsquo; that nobody follows.&rdquo;
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} variant="fade-right">
              <div className="bg-white rounded-2xl p-6 border border-border text-center card-interactive" data-cursor="hover">
                <p className="font-display text-lg text-ink leading-snug">
                  &ldquo;Someone always does more. Everyone knows who.&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300} variant="fade-in">
            <p className="text-center text-muted mt-10 text-lg">
              Shared living is great — until it isn&apos;t.
              <br />
              <span className="text-ink font-medium">
                CleanSlate fixes the part that breaks.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal variant="fade-in">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-blue uppercase tracking-wider mb-3">
                How It Works
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                Three steps. Then forget about it.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0} variant="fade-left">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-2xl text-blue">1</span>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">
                  Set your preferences
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tell CleanSlate your schedule, the chores you don&apos;t mind, and
                  the ones you hate. One-time setup.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-2xl text-blue">2</span>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">
                  We handle the rest
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  CleanSlate assigns chores fairly and automatically — based on
                  availability, preferences, and history.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} variant="fade-right">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-2xl text-blue">3</span>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">
                  Check your calendar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Chores appear right in your Google Calendar — slotted between
                  your classes, not during them. Done.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal variant="fade-in">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-blue uppercase tracking-wider mb-3">
                Features
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                Everything you need, nothing you don&apos;t
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                ),
                title: "Smart Assignment",
                desc: "Our algorithm considers everyone's availability, preferences, and history to distribute chores fairly.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                ),
                title: "Google Calendar Sync",
                desc: "Chores appear as calendar events automatically. No separate app to check — it's just there.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: "Household Management",
                desc: "Create your household, invite roommates with a simple code, and manage members effortlessly.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                ),
                title: "Set It & Forget It",
                desc: "Set your preferences once — availability, likes, dislikes, weekend plans. CleanSlate remembers.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
                title: "Real-time Visibility",
                desc: "See when your roommates complete their chores. Accountability without the awkward conversations.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: "Works Around Your Life",
                desc: "Respects your class schedule, work hours, and weekend travel. Chores fit your life, not the other way around.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-border card-interactive" data-cursor="hover">
                  <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg text-ink mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="scale-up">
            <div className="bg-white rounded-3xl p-10 border border-border">
              <div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
                Built by students, for students
              </h2>
              <p className="text-muted leading-relaxed max-w-lg mx-auto">
                We&apos;ve lived the roommate experience. We know the chore chart
                doesn&apos;t work. We built something that does.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — hardcoded dark bg so it stays dark in both themes */}
      <section className="py-20 px-6" style={{ backgroundColor: "#151A2C" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="scale-up">
            <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "#F4F3EE" }}>
              Ready to stop arguing about chores?
            </h2>
            <p className="text-lg mb-8" style={{ color: "#7896B6" }}>
              CleanSlate is coming soon to iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="btn-fill btn-fill-bright inline-flex items-center justify-center gap-2 bg-blue text-white px-8 py-3.5 rounded-full text-sm font-medium">
                Join the waitlist — Coming soon
              </span>
            </div>
            <p className="mt-8 text-sm" style={{ color: "#7896B660" }}>
              Built by{" "}
              <Link href="/" className="hover:underline underline-offset-2 transition-colors" style={{ color: "#7896B6" }}>
                CIFR
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
