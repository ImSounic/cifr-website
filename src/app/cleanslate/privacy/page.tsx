import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";
import { privacyHtml, PRIVACY_UPDATED } from "../legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — CleanSlate | CIFR",
  description:
    "How CleanSlate collects, uses, and protects your data. GDPR, CCPA, and COPPA disclosures.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={PRIVACY_UPDATED}
      html={privacyHtml}
    />
  );
}
