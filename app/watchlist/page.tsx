import type { Metadata } from "next";
import { WatchlistView, type WatchlistItem } from "@/components/watchlist/watchlist-view";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getResearchBundles, getUniverse } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Watchlist",
  description:
    "Your local-first Stockmonk watchlist. Saved in your browser, available offline, and never sent to a server.",
  alternates: { canonical: "/watchlist" },
};

export default function WatchlistPage() {
  const universe = getUniverse();
  const bundles = getResearchBundles();
  const priceMap = new Map(bundles.map((bundle) => [bundle.data.ticker, bundle.prices]));
  const items: WatchlistItem[] = universe.map((entry) => ({
    entry,
    prices: priceMap.get(entry.ticker),
  }));

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
            Add companies from any card or report. The list is stored in your
            browser, works offline and is never sent to a Stockmonk server.
          </p>
        </div>
      </section>

      <div className="container-page py-6">
        <WatchlistView items={items} />
        <div className="mt-6 rounded-xl border border-line bg-surface p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            How the storage works
          </p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
            Tickers are saved under a versioned key in <code className="rounded bg-paper-deep px-1 py-0.5 font-mono text-[10px]">localStorage</code>.
            Clearing your browser data removes the list. There is no account and
            no sync, which is why the list also works offline.
          </p>
        </div>
        <Disclaimer variant="boxed" className="mt-6" />
      </div>
    </>
  );
}
