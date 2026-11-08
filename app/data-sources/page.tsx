import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/layout/editorial-page";

export const metadata: Metadata = {
  title: "Data sources and notes",
  description:
    "The sources behind Stockmonk: SimFin, SEC EDGAR, Yahoo Finance, Nasdaq, company filings and logo attribution, with refresh process and known caveats.",
  alternates: { canonical: "/data-sources" },
};

export default function DataSourcesPage() {
  return (
    <EditorialPage
      path="/data-sources"
      kicker="Data sources"
      title="Where the numbers come from"
      dek="A transparent list of providers, refresh steps, formulas and known gaps. If a number is uncertain, it should be visible here."
      updated="November 2026"
      toc={[
        { href: "/data-sources#sources", label: "Providers" },
        { href: "/data-sources#refresh", label: "Refresh process" },
        { href: "/data-sources#caveats", label: "Known caveats" },
        { href: "/data-sources#attribution", label: "Attribution" },
      ]}
    >
      <h2 id="sources">Providers</h2>
      <div className="not-prose overflow-x-auto rounded-xl border border-line">
        <table className="data-table min-w-[640px]">
          <thead>
            <tr>
              <th scope="col">Layer</th>
              <th scope="col">Source</th>
              <th scope="col">Used for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium text-ink">Fundamentals</td>
              <td><a href="https://simfin.com/" target="_blank" rel="noreferrer noopener" className="link-underline">SimFin</a></td>
              <td>Income statement, balance sheet, cash flow and derived ratios for all 229 companies.</td>
            </tr>
            <tr>
              <td className="font-medium text-ink">Regulatory flows</td>
              <td><a href="https://www.sec.gov/edgar/search/" target="_blank" rel="noreferrer noopener" className="link-underline">SEC EDGAR</a></td>
              <td>XBRL company facts, 10-K/10-Q flows, segment and geography facts.</td>
            </tr>
            <tr>
              <td className="font-medium text-ink">Prices</td>
              <td>SimFin daily prices</td>
              <td>Price charts, 52-week range, returns, market cap, multiple history.</td>
            </tr>
            <tr>
              <td className="font-medium text-ink">Consensus</td>
              <td><a href="https://finance.yahoo.com/" target="_blank" rel="noreferrer noopener" className="link-underline">Yahoo Finance</a> · <a href="https://www.nasdaq.com/" target="_blank" rel="noreferrer noopener" className="link-underline">Nasdaq</a></td>
              <td>Attributed target range, rating distribution, forward estimates, EPS surprises.</td>
            </tr>
            <tr>
              <td className="font-medium text-ink">Segments</td>
              <td>Company 10-K XBRL</td>
              <td>Reportable segments, product categories and geography mix.</td>
            </tr>
            <tr>
              <td className="font-medium text-ink">Logos</td>
              <td>CompaniesMarketCap logo CDN</td>
              <td>Local thumbnails for identification; initials fallback in the UI.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="refresh">Refresh process</h2>
      <p>
        The pipeline is idempotent and runs at build time or on a schedule:
      </p>
      <pre className="overflow-x-auto rounded-xl border border-line bg-paper-deep p-3 text-[11px] leading-relaxed text-ink-soft">
{`pnpm ingest:edgar      # SEC XBRL facts for the research universe
pnpm ingest:simfin     # SimFin statements + prices, merged with SEC flows
pnpm ingest:consensus  # Yahoo / Nasdaq consensus snapshots
pnpm ingest:segments   # 10-K segment and geography mixes
pnpm build:data        # stocks.json + search-index.json`}
      </pre>
      <p>
        The SimFin API key is read only by ingestion scripts. It is never imported
        into a React component and never exposed through a{" "}
        <code>NEXT_PUBLIC_*</code> variable.
      </p>

      <h2 id="caveats">Known caveats</h2>
      <ul>
        <li>
          <strong>GOOGL one-time gains.</strong> Alphabet&apos;s Q2 2026 net income
          and Q1 2026 EPS include large non-operating gains. The report flags this;
          the headline P/E is flattered by those items.
        </li>
        <li>
          <strong>AAPL EPS source.</strong> Apple&apos;s Q4 FY2026 diluted EPS is
          $2.10 per SEC. Nasdaq&apos;s adjusted figure is $2.05 and the Yahoo
          consensus estimate was $1.9852. The report labels the source next to the
          number.
        </li>
        <li>
          <strong>Banks.</strong> JPM does not have a meaningful free-cash-flow
          margin, ROIC or net-debt/EBITDA in this dataset. Those cells render as
          n/a rather than a misleading proxy.
        </li>
        <li>
          <strong>Segment definitions.</strong> Apple and Lilly use curated member
          lists because their XBRL dimensions do not map cleanly to reportable
          segments. The chart label names the basis.
        </li>
        <li>
          <strong>Consensus is third-party.</strong> Target means, ranges and
          ratings belong to the named providers. They are not Stockmonk ratings or
          targets. Snapshots can lag the market.
        </li>
        <li>
          <strong>Guidance.</strong> Machine-readable management guidance is not
          available for every company in the current pipeline. Reports show
          consensus estimates instead of inventing a guidance range.
        </li>
        <li>
          <strong>Coverage gaps.</strong> Some names lack a segment split or a
          consensus snapshot. The report says so rather than filling the gap
          with an estimated figure.
        </li>
      </ul>

      <h2 id="attribution">Attribution and licensing</h2>
      <ul>
        <li>Fundamentals: SimFin — <a href="https://simfin.com/" target="_blank" rel="noreferrer noopener" className="link-underline">simfin.com</a></li>
        <li>Filings: SEC EDGAR — <a href="https://www.sec.gov/edgar/search/" target="_blank" rel="noreferrer noopener" className="link-underline">sec.gov/edgar</a></li>
        <li>Consensus: third-party snapshots cross-checked across providers; each panel shows the snapshot date and analyst count.</li>
        <li>Logos: CompaniesMarketCap logo CDN, used for identification only. Missing logos fall back to a typographic monogram.</li>
      </ul>
      <p>
        Company names and logos are trademarks of their respective owners. Their
        inclusion does not imply endorsement. Read the{" "}
        <Link href="/editorial-guidelines">editorial guidelines</Link> for how
        sources are checked, and the{" "}
        <Link href="/framework#methodology">methodology</Link> for the formulas.
      </p>
    </EditorialPage>
  );
}
