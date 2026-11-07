import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/layout/editorial-page";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms of use for Stockmonk: educational information only, no investment advice, no warranty, acceptable use and attribution.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <EditorialPage
      path="/terms"
      kicker="Terms"
      title="Terms of use"
      dek="By using Stockmonk you agree to use the research as educational information, not as investment advice."
      updated="November 2026"
    >
      <h2>1. Educational purpose</h2>
      <p>
        Stockmonk publishes information for informational and educational
        purposes only. It is not investment advice, a recommendation, a
        solicitation or an offer to buy or sell any security. Stockmonk is not a
        registered investment adviser and does not provide buy, sell or hold
        recommendations.
      </p>

      <h2>2. No fiduciary relationship</h2>
      <p>
        Your use of the site does not create an adviser-client, fiduciary or
        professional relationship. You are responsible for your own research,
        decisions and risk management, and you should consult a qualified
        professional who understands your circumstances before investing.
      </p>

      <h2>3. Data accuracy</h2>
      <p>
        Financial data is sourced from SimFin and SEC EDGAR; consensus data is
        attributed to Yahoo Finance and Nasdaq. Data can be delayed, incomplete,
        restated or wrong. Market prices shown are the latest close in the
        ingestion run, not a real-time quote. Segment mixes, fiscal calendars and
        adjusted figures can differ between providers. We describe known caveats
        in the <Link href="/data-sources">data notes</Link>, but we do not warrant
        that any number is error-free.
      </p>

      <h2>4. No warranty</h2>
      <p>
        The site is provided “as is” and “as available” without warranties of any
        kind, express or implied, including merchantability, fitness for a
        particular purpose and non-infringement. To the maximum extent permitted
        by law, Stockmonk is not liable for any direct, indirect, incidental,
        consequential or punitive loss arising from use of the site or reliance on
        its content.
      </p>

      <h2>5. Third-party content and trademarks</h2>
      <p>
        Company names and logos are trademarks of their respective owners and are
        used for identification only. Their inclusion does not imply endorsement,
        sponsorship or affiliation. Analyst consensus and ratings belong to the
        named providers. See the <Link href="/data-sources">data sources</Link>{" "}
        page for attribution.
      </p>

      <h2>6. Acceptable use</h2>
      <p>
        You may read, link to and quote short excerpts of Stockmonk content with
        attribution. You may not scrape the site at a rate that degrades service,
        resell the research as your own, remove disclaimers, or use the content to
        train a model without permission. Automated access should respect the
        robots policy and rate limits.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        Original Stockmonk copy, design, charts and data compilations are owned by
        Stockmonk Research. Underlying facts and filings remain subject to their
        own terms. Logos remain the property of their owners.
      </p>

      <h2>8. Product demo</h2>
      <p>
        The Pro pricing and checkout are a demonstration. No payment is
        processed, no subscription is created and no card data is stored. Any
        “trial” or “plan” language on the site is illustrative.
      </p>

      <h2>9. Changes and governing law</h2>
      <p>
        We may update these terms as the product changes. Continued use after an
        update means you accept the revised terms. These terms are governed by the
        laws applicable in the operator&apos;s jurisdiction, without regard to
        conflict-of-law rules. Questions can be sent to{" "}
        <a href="mailto:hello@stockmonk.app">hello@stockmonk.app</a>.
      </p>

      <h2>10. Contact</h2>
      <p>
        For corrections, see the{" "}
        <Link href="/editorial-guidelines">editorial guidelines</Link>. For
        privacy, see the <Link href="/privacy">privacy policy</Link>.
      </p>
    </EditorialPage>
  );
}
