import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/layout/editorial-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stockmonk is an independent, educational equity-research library for US-listed companies. No ratings, no price targets, no invented claims.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <EditorialPage
      path="/about"
      kicker="About"
      title="A research library, not a stock picker"
      dek="Stockmonk exists to make company analysis easier to read. We collect primary data, show our work, and leave the decision to you."
      updated="November 2026"
    >
      <h2>Why this exists</h2>
      <p>
        Most investing content is written to produce a reaction: a pick, a
        prediction, a countdown. That format is good for attention and poor for
        understanding. Stockmonk starts from the opposite direction. A company is
        a business with customers, costs, capital and a balance sheet. If those
        things are clear, the valuation question becomes easier to ask.
      </p>
      <p>
        The library currently covers 68 US-listed companies. Ten have full
        ten-section research reports; the rest have lighter profiles with price,
        key ratios, recent quarters and a description. The coverage universe is
        deliberately broad — banks, energy, staples and insurers sit alongside
        software and semiconductors — because a research process should work
        across business models.
      </p>

      <h2>What we publish</h2>
      <ul>
        <li>Business descriptions and segment mixes sourced from SEC filings.</li>
        <li>Financial statements, ratios and price history from SimFin.</li>
        <li>Peer comparisons and multiple histories computed from the same data.</li>
        <li>Analyst consensus attributed to Yahoo Finance and cross-checked with Nasdaq.</li>
        <li>Data-change updates generated from the dataset, not invented headlines.</li>
      </ul>

      <h2>What we do not publish</h2>
      <ul>
        <li>Buy, sell or hold ratings.</li>
        <li>Stockmonk price targets.</li>
        <li>Performance claims, testimonials, subscriber counts or press-logo walls.</li>
        <li>Fabricated analyst or founder biographies.</li>
        <li>Explanations for price moves that the data cannot support.</li>
      </ul>

      <h2>Independence</h2>
      <p>
        Stockmonk is not a broker, fund or registered investment adviser. There
        is no pay-to-play coverage and no affiliate relationship with the companies
        in the universe. The Pro layer is a product demo; it does not gate the
        educational research and it does not process payments.
      </p>

      <h2>How the site is built</h2>
      <p>
        The app is a statically generated Next.js PWA. Data is ingested at build
        time and refreshed on a schedule. There are no advertising scripts, no
        third-party trackers and no cookie banner because no tracking cookies are
        set. The source code and data notes are structured so that a new company
        can be added by adding a ticker and running the ingestion pipeline.
      </p>

      <h2>Contact</h2>
      <p>
        Corrections, data questions and methodology feedback are welcome at{" "}
        <a href="mailto:hello@stockmonk.app">hello@stockmonk.app</a>. For how we
        handle sources and corrections, read the{" "}
        <Link href="/editorial-guidelines">editorial guidelines</Link>.
      </p>
    </EditorialPage>
  );
}
