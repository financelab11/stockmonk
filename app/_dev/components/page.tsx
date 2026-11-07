import type { Metadata } from "next";
import { Accordion } from "@/components/ui/accordion";
import { DataSourcesRow } from "@/components/ui/data-sources-row";
import { Disclaimer } from "@/components/ui/disclaimer";
import { FactorChips } from "@/components/ui/factor-chips";
import { PricingCard } from "@/components/ui/pricing-card";
import { ProCTA } from "@/components/ui/pro-cta";
import { SectionHeader } from "@/components/ui/section-header";
import { StatTile } from "@/components/ui/stat-tile";
import { TabNav } from "@/components/ui/tab-nav";
import { StockCard } from "@/components/cards/stock-card";
import { NewsCard } from "@/components/cards/news-card";
import { getNewsfeed, getResearchBundle, getUniverse } from "@/lib/data";
import { formatCompactCurrency, formatCurrency, formatMultiple, formatPercent } from "@/lib/format";

export const metadata: Metadata = {
  title: "Component gallery",
  robots: { index: false, follow: false },
};

export default function ComponentGalleryPage() {
  const bundle = getResearchBundle("NVDA");
  const universe = getUniverse();
  const news = getNewsfeed().slice(0, 2);
  const entry = universe.find((item) => item.ticker === "NVDA") ?? universe[0];

  return (
    <div className="container-page space-y-10 py-10">
      <div>
        <p className="kicker">Internal</p>
        <h1 className="display mt-1 text-[38px] tracking-[-0.03em] text-ink">Component gallery</h1>
        <p className="mt-1 text-[12.5px] text-muted">
          Not linked from the public navigation. Used for visual QA.
        </p>
      </div>

      <section>
        <SectionHeader eyebrow="Buttons" title="Actions and pills" description="Primary, brand, ghost and quiet variants." />
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-brand">Brand CTA</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-quiet">Quiet</button>
          <span className="chip">Neutral chip</span>
          <span className="chip chip-positive">Positive</span>
          <span className="chip chip-caution">Caution</span>
          <span className="chip chip-info">Info</span>
          <span className="chip chip-danger">Danger</span>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Tabs" title="Section navigation" />
        <div className="mt-3">
          <TabNav
            active="/discover"
            items={[
              { href: "/discover", label: "Featured Companies" },
              { href: "/discover?tab=screens", label: "Data-Quality Screens" },
              { href: "/discover/all-stocks", label: "All Stocks", count: universe.length },
            ]}
          />
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Tiles" title="Stat tiles and factors" />
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <StatTile label="Revenue TTM" value={formatCompactCurrency(bundle?.data.metrics.revenueTtm)} hint={`${formatPercent(bundle?.data.metrics.revenueGrowthTtm)} YoY`} />
          <StatTile label="Op margin" value={formatPercent(bundle?.data.metrics.operatingMargin)} />
          <StatTile label="P/E" value={formatMultiple(bundle?.data.metrics.pe)} />
          <StatTile label="Price" value={formatCurrency(bundle?.data.latestPrice.close)} tone="positive" />
        </div>
        {entry && <FactorChips chips={entry.factorChips} limit={5} className="mt-3" />}
      </section>

      <section>
        <SectionHeader eyebrow="Cards" title="Stock and news cards" href="/discover" />
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {entry && <StockCard entry={entry} prices={bundle?.prices} />}
          {news.map((item) => (
            <NewsCard key={item.id} item={item} boxed />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Accordion" title="FAQ pattern" />
        <div className="mt-3 max-w-2xl">
          <Accordion
            items={[
              { question: "What is a factor chip?", answer: "A descriptive percentile screen, not a rating." },
              { question: "Where does the consensus come from?", answer: "Yahoo Finance, cross-checked with Nasdaq and shown with attribution." },
            ]}
          />
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Sources" title="Data-source row" />
        <div className="mt-3">
          <DataSourcesRow />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Demo" title="Pricing card" />
          <div className="mt-3">
            <PricingCard />
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="CTA" title="Pro banner" />
          <div className="mt-3">
            <ProCTA context="page" />
          </div>
        </div>
      </section>

      <Disclaimer variant="boxed" />
    </div>
  );
}
