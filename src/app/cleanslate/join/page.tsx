import type { Metadata } from "next";
import { Suspense } from "react";
import { JoinClient } from "./JoinClient";

export const metadata: Metadata = {
  title: "Join a household — CleanSlate | CIFR",
  robots: { index: false }, // invite links are per-household, not for indexing
};

// Static page (output: export); the code arrives as ?code=ABCD1234 and is
// read client-side, so a single static page serves every invite.
export default function JoinPage() {
  return (
    <Suspense fallback={null}>
      <JoinClient />
    </Suspense>
  );
}
