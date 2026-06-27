"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PACKAGE_ID = "com.cifr.cleanslate";
const PLAY_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_ID}`;
const CODE_RE = /^[A-Z0-9]{8}$/;

// Play Store URL carrying the join code through install via the Android
// Install Referrer. After a fresh install the app reads this back on first
// launch and routes straight into the join flow.
function storeUrl(code: string): string {
  return `${PLAY_URL}&referrer=${encodeURIComponent(`join_code=${code}`)}`;
}

export function JoinClient() {
  const params = useSearchParams();
  const code = (params.get("code") ?? "").toUpperCase();
  const valid = CODE_RE.test(code);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!valid) return;
    const ua = navigator.userAgent;
    if (/Android/i.test(ua)) {
      setRedirecting(true);
      const intentUrl =
        `intent://join/${code}#Intent;scheme=cleanslate;package=${PACKAGE_ID};` +
        `S.browser_fallback_url=${encodeURIComponent(storeUrl(code))};end`;
      window.location.href = intentUrl;
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.href = `cleanslate://join/${code}`;
    }
  }, [code, valid]);

  if (!valid) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl text-ink mb-3">
            Invite link is invalid
          </h1>
          <p className="text-muted mb-8">
            This invite is missing its household code. Ask your flatmate to
            share the invite again from the CleanSlate app.
          </p>
          <a
            href={PLAY_URL}
            className="btn-fill btn-fill-bright inline-flex items-center justify-center bg-blue text-white px-7 py-3 rounded-full text-sm font-medium"
          >
            Get CleanSlate on Google Play
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl font-display text-white">C</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-ink mb-2">
          You&apos;re invited to a household
        </h1>
        <p className="text-muted mb-6 max-w-sm mx-auto">
          {redirecting
            ? "Opening CleanSlate…"
            : "Open this invite in the CleanSlate app, or install it first — the code below also works manually in the app."}
        </p>

        <div className="inline-block font-mono text-2xl tracking-[0.35em] text-ink bg-surface border-2 border-dashed border-blue rounded-xl px-6 py-4 mb-8 select-all">
          {code}
        </div>

        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <a
            href={`cleanslate://join/${code}`}
            className="btn-fill btn-fill-bright inline-flex items-center justify-center bg-blue text-white px-7 py-3.5 rounded-full text-sm font-medium"
          >
            Open in CleanSlate
          </a>
          <a
            href={storeUrl(code)}
            className="inline-flex items-center justify-center border border-blue text-blue px-7 py-3.5 rounded-full text-sm font-medium hover:bg-blue/5 transition-colors"
          >
            Get it on Google Play
          </a>
        </div>

        <p className="text-xs text-muted mt-8">
          On iPhone? CleanSlate for iOS is coming soon — keep this code and
          enter it after installing.
        </p>
        <Link
          href="/cleanslate"
          className="block text-sm text-muted hover:text-ink transition-colors mt-6"
        >
          ← About CleanSlate
        </Link>
      </div>
    </section>
  );
}
