import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/layout/editorial-page";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Stockmonk's privacy policy: no advertising trackers, no account required, watchlist stored only in your browser.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <EditorialPage
      path="/privacy"
      kicker="Privacy"
      title="Privacy, in plain language"
      dek="Stockmonk does not require an account, does not run advertising trackers and does not sell personal data."
      updated="November 2026"
    >
      <h2>What we collect</h2>
      <p>
        Browsing the research library does not require an account. We do not set
        advertising cookies, run third-party analytics scripts or build a profile
        of your reading. Standard server logs may contain IP address, user agent,
        requested URL and timestamp for security and operational purposes; they
        are not used for advertising.
      </p>

      <h2>Watchlist storage</h2>
      <p>
        Your watchlist is stored in your browser under{" "}
        <code>stockmonk:watchlist:v1</code> in <code>localStorage</code>. It is
        never sent to a Stockmonk server. Clearing your browser storage removes
        it. Because there is no account, the list does not sync between devices.
      </p>

      <h2>Product demo</h2>
      <p>
        The Pro checkout is a mock. It does not collect card details, does not
        contact a payment processor and does not create a subscription. Any email
        entered into the demo form is not transmitted.
      </p>

      <h2>Third-party data</h2>
      <p>
        The site displays financial statements from SEC EDGAR, prices and company
        profiles from Yahoo Finance, and analyst consensus attributed to Yahoo
        Finance and Nasdaq. Those providers have their own privacy policies.
        Stockmonk does not pass your identity to them.
      </p>

      <h2>Hosting and logs</h2>
      <p>
        The production deployment may be hosted on a platform that processes
        standard request logs. If a privacy-friendly analytics placeholder is
        enabled in a future deployment, it will be disclosed here before use. No
        analytics script is loaded in the current build.
      </p>

      <h2>Children</h2>
      <p>
        Stockmonk is intended for a general audience interested in company
        research. It is not directed at children under 13 and does not knowingly
        collect personal information from them.
      </p>

      <h2>Your choices</h2>
      <p>
        You can clear the watchlist from the watchlist page or your browser
        settings. You can block or delete cookies and local storage without losing
        access to the research. For privacy questions, contact{" "}
        <a href="mailto:hello@stockmonk.app">hello@stockmonk.app</a>.
      </p>

      <h2>Changes</h2>
      <p>
        If the data practices change, this page will be updated before the change
        takes effect. The <Link href="/terms">terms of use</Link> and{" "}
        <Link href="/editorial-guidelines">editorial guidelines</Link> explain the
        rest of the publishing policy.
      </p>
    </EditorialPage>
  );
}
