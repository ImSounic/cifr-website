import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";
import { termsHtml, TERMS_UPDATED } from "../legal-content";

export const metadata: Metadata = {
  title: "Terms of Service — CleanSlate | CIFR",
  description:
    "The terms governing your use of CleanSlate — eligibility, acceptable use, liability, and account termination.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={TERMS_UPDATED}
      html={termsHtml}
    />
  );
}
