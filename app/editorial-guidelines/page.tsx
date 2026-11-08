import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/layout/editorial-page";

export const metadata: Metadata = {
  title: "Editorial guidelines",
  description:
    "How Stockmonk sources, checks and writes research: no ratings, no price targets, filed sources, corrections and separation of data from opinion.",
  alternates: { canonical: "/editorial-guidelines" },
};

export default function EditorialGuidelinesPage() {
  return (
    <EditorialPage
      path="/editorial-guidelines"
      kicker="Editorial guidelines"
      title="How we write and check the research"
      dek="These are the rules the research desk follows. They are deliberately strict about what Stockmonk will not publish."
      updated="November 2026"
    >
      <h2>1. No ratings, no price targets</h2>
      <p>
        Stockmonk does not issue buy, sell or hold recommendations and does not
        publish its own price targets. A page may show a third-party analyst mean
        target, but it is always attributed to the provider, dated, and labelled
        as third-party consensus. A reader should never have to guess whether a
        target is ours; it never is.
      </p>

      <h2>2. Facts before narrative</h2>
      <p>
        Every quantitative claim in a report must trace to a processed data field
        or a cited filing. When the data does not support an explanation — for
        example, a one-day price move with no filing — the report says so rather
        than inventing a reason.
      </p>

      <h2>3. Primary sources first</h2>
      <p>
        Business descriptions, segment mixes, geography and risk factors come from
        SEC filings. Financial statements are built from company reports and
        normalised across periods. Analyst estimates are third-party and shown
        with the date they were collected. The sources list at the end of each
        report names the filing, company materials and methodology used.
      </p>

      <h2>4. Original wording</h2>
      <p>
        We summarise filings and data in our own words. We do not paste long
        passages from filings, transcripts or articles, and we do not copy another
        publication&apos;s layout or copy. Short quotations, when essential, are
        kept under fifteen words and attributed.
      </p>

      <h2>5. Data quality</h2>
      <p>
        Fiscal periods are derived from period-end dates, not from a filing label.
        Only full-year facts define an annual period. Quarterly flows are derived
        from cumulative year-to-date facts by pairing periods with the same start
        date. Known mismatches, one-time gains and provider differences are
        documented in the <Link href="/data-sources">data notes</Link>.
      </p>

      <h2>6. Corrections</h2>
      <p>
        If a number is wrong, we correct it and note the change on the page. If a
        chart and a table disagree, the underlying data is the tiebreaker. Send
        corrections to <a href="mailto:hello@stockmonk.app">hello@stockmonk.app</a>{" "}
        with the URL and the field in question.
      </p>

      <h2>7. Independence and conflicts</h2>
      <p>
        Stockmonk does not accept payment for coverage, does not run affiliate
        links to brokers and does not hold positions it writes about. The Pro
        layer is a product demo and does not change what the free research says.
      </p>

      <h2>8. Plain language</h2>
      <p>
        Jargon is allowed when it is necessary, but it must be explained the first
        time it appears. A reader who has never opened a 10-K should be able to
        follow the business section and understand why a margin moved.
      </p>

      <h2>9. Accessibility</h2>
      <p>
        Charts have text summaries and data tables. Colour is not the only carrier
        of meaning. Touch targets are at least 44px, focus states are visible, and
        motion respects the reduced-motion setting.
      </p>
    </EditorialPage>
  );
}
