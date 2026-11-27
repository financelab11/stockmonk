import type { Metadata } from "next";
import {
  WatchlistView,
  type WatchlistItem,
} from "@/components/watchlist/watchlist-view";
import { SavedPortfolios } from "@/components/portfolios/saved-portfolios";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getPrices, getUniverse } from "@/lib/data";
import { getPortfolioIndex } from "@/lib/portfolios/data";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Watchlist",
  description:
    "Your local-first Stockmonk watchlist and saved portfolios. Stored in your browser, available offline, and never sent to a server.",
  alternates: { canonical: "/watchlist" },
};

export default function WatchlistPage() {
  const universe = getUniverse();
  const priceMap = new Map(
    universe.map((entry) => [entry.ticker, getPrices(entry.ticker, "1Y")]),
  );
  const items: WatchlistItem[] = universe.map((entry) => ({
    entry,
    prices: priceMap.get(entry.ticker),
  }));
  const portfolios = getPortfolioIndex().portfolios;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Watchlist", path: "/watchlist" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-7">
          <p className="kicker">Local-first</p>
          <h1 className="display mt-1 text-[32px] leading-tight tracking-[-0.025em] text-ink sm:text-[40px]">
            Watchlist
          </h1>
          <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted">
            Add companies from any card or report, and bookmark model
            portfolios from the Portfolio library. Everything is stored in your
            browser, works offline and is never sent to a Stockmonk server.
          </p>
        </div>
      </section>

      <div className="container-page space-y-6 py-6">
        <SavedPortfolios portfolios={portfolios} />
        <div className="border-t border-line pt-5">
          <WatchlistView items={items} />
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="text-[10px] font-bold text-muted">
            How the storage works
          </p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
            Stock tickers and portfolio slugs are saved under separate,
            versioned keys in{" "}
            <code className="rounded bg-paper-deep px-1 py-0.5 font-mono text-[10px]">
              localStorage
            </code>
            . Clearing your browser data removes both lists. There is no
            account and no sync, which is why they also work offline.
          </p>
        </div>
        <Disclaimer variant="boxed" />
      </div>
    </>
  );
}
