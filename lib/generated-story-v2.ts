import type { RiskItem, StockStory, StoryBlock } from "@/content/stocks/types";
import { getArchivedCompany } from "@/config/archive";
import { getCoverageGroup } from "@/config/coverage";
import type { ResearchBundle } from "./data";
import { BUCKETS, GROUP_BUCKET } from "./generated-story";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "./format";

function displayName(name: string): string {
  const trimmed = name.replace(/\s+/g, " ").trim();
  return trimmed.replace(/\b(Inc|Corp|Co|Ltd|Plc|Llc)$/i, "$1.");
}

function growth(value: number | null | undefined): string {
  return value == null ? "not available" : formatSignedPercent(value);
}

function article(word: string): string {
  return /^[aeiou]/i.test(word.trim()) ? "an" : "a";
}

function humanizeDates(text: string): string {
  return text
    .replace(/\b\d{4}-\d{2}-\d{2}\b/g, (date) => formatDate(date))
    .replace(/\s+/g, " ")
    .trim();
}

function listWithAnd(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

function multiple(value: number | null | undefined, label: string): string {
  return value == null
    ? `no meaningful ${label} multiple`
    : `${formatMultiple(value)} ${label}`;
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

function atLeast(text: string, fallback: string): string {
  if (wordCount(text) >= 30) return text;
  return `${text} ${fallback}`.replace(/\s+/g, " ").trim();
}

function hash(ticker: string): number {
  return [...ticker].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function pick<T>(items: T[], ticker: string, salt: number): T {
  return items[(hash(ticker) + salt) % items.length];
}

function latestQuarter(bundle: ResearchBundle) {
  return (
    [...bundle.data.quarterly]
      .filter((row) => !row.ttm)
      .sort((a, b) => (a.reportDate ?? "").localeCompare(b.reportDate ?? ""))
      .at(-1) ?? null
  );
}

function sourceUrl(bundle: ResearchBundle): string {
  if (bundle.data.latest10KUrl) return bundle.data.latest10KUrl;
  const cik = bundle.data.cik?.padStart(10, "0");
  return cik
    ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=10-K&dateb=&owner=include&count=40`
    : "https://www.sec.gov/edgar/search/";
}

function filingHistoryUrl(bundle: ResearchBundle): string {
  const cik = bundle.data.cik?.padStart(10, "0");
  return cik
    ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=&dateb=&owner=include&count=40`
    : "https://www.sec.gov/edgar/search/";
}

function annualRows(bundle: ResearchBundle) {
  return [...bundle.data.annual].sort((a, b) =>
    a.reportDate.localeCompare(b.reportDate),
  );
}

export function generateStockStoryV2(bundle: ResearchBundle): StockStory {
  const { data, consensus, segments, factors } = bundle;
  const currency = data.currency ?? "USD";
  const price = (value: number | null | undefined) =>
    formatCurrency(value, 2, currency);
  const money = (value: number | null | undefined) =>
    formatCompactCurrency(value, currency);
  const group = getCoverageGroup(data.ticker);
  const bucket =
    BUCKETS[GROUP_BUCKET[group?.id ?? ""] ?? "tech"] ?? BUCKETS.tech;
  const quarter = latestQuarter(bundle);
  const name = displayName(data.name);
  const revenue = data.metrics.revenueTtm;
  const opMargin = data.metrics.operatingMargin;
  const fcfMargin = data.metrics.fcfMargin;
  const pe = data.metrics.pe;
  const ev = data.metrics.evEbitda;
  const netDebt = data.metrics.netDebt;
  const cagr = bundle.cagr;
  const latestQ = bundle.latestQYoY;
  const rangePosition = bundle.rangePosition;
  const target = consensus?.targetMean ?? null;
  const analystCount = consensus?.analystCount ?? null;
  const estimate = consensus?.estimates.find(
    (item) => item.period === "Current fiscal year",
  );
  const archived = getArchivedCompany(data.ticker);
  const annual = annualRows(bundle);
  const firstAnnual = annual[0] ?? null;
  const lastAnnual = annual.at(-1) ?? null;
  const peerList =
    group?.tickers.filter((ticker) => ticker !== data.ticker).slice(0, 3) ?? [];
  const peerNames = peerList.length
    ? listWithAnd(peerList)
    : "larger US-listed peers";
  const segmentList = segments?.segments ?? [];
  const largestSegment = segmentList[0] ?? null;
  const segmentNote = largestSegment
    ? `${largestSegment.name} is ${formatPercent(largestSegment.share)} of the disclosed revenue mix.`
    : "The filing does not disclose a reportable segment split, so the consolidated revenue line is the unit of analysis.";
  const geographyNote =
    segments && segments.geography.length > 0
      ? `By geography, ${segments.geography[0]?.name ?? "the largest market"} is the largest disclosed market at ${formatPercent(segments.geography[0]?.share ?? 0)} of revenue.`
      : "A detailed geographic revenue split is not disclosed in the current dataset.";
  const debtNote =
    netDebt == null
      ? "Net debt is not a meaningful measure for this business in the current dataset."
      : netDebt < 0
        ? `The balance sheet carries ${money(Math.abs(netDebt))} of net cash.`
        : `Net debt is ${money(netDebt)}, or ${formatMultiple(data.metrics.netDebtToEbitda)} EBITDA.`;

  const revenueSentence =
    revenue && revenue > 0
      ? `generated ${money(revenue)} of revenue over the last twelve months, ${growth(data.metrics.revenueGrowthTtm)} versus the prior year`
      : "reported no revenue over the last twelve months";

  const archivedSentence = archived
    ? `${name} last traded at ${price(archived.lastClose)} on ${formatDate(archived.lastTraded)}, when the ${archived.acquirer} transaction closed. The final consideration was ${archived.consideration}. The company no longer files current reports, so the figures below are the final SEC statements rather than a live snapshot.`
    : "";

  const quarterSentence = quarter
    ? `The latest reported quarter was ${quarter.period} FY${String(quarter.fyear).slice(-2)}, with ${money(quarter.revenue)} of revenue and a ${formatPercent(quarter.operatingMargin)} operating margin.`
    : "A dated quarterly result is not available in the current dataset.";
  const latestQText =
    latestQ == null
      ? "the latest quarter growth rate is not available"
      : `the latest quarter changed ${growth(latestQ)} year over year`;

  const marketSentence = archived
    ? `The final equity value implied by the transaction is the reference point; the archived multiple is shown for context, not as a current quote.`
    : `The shares closed at ${price(data.latestPrice.close)} on ${formatDate(data.latestPrice.asOf)}, giving a market capitalization of ${money(data.latestPrice.marketCap)}.`;

  const bigPicture: StoryBlock = {
    paragraphs: [
      archived
        ? `${archivedSentence} ${name} ${revenueSentence}. The final reported operating margin was ${formatPercent(opMargin)} and free-cash-flow margin was ${formatPercent(fcfMargin)}.`
        : `${name} ${revenueSentence}. ${quarterSentence} ${marketSentence}`,
      atLeast(
        `${bucket.lens} ${segmentNote} ${geographyNote}`,
        `${name} competes in ${data.industry || group?.name || "its sector"}, where scale, pricing and capital intensity decide the return on the next dollar of revenue.`,
      ),
      archived
        ? `The archived valuation has ${multiple(pe, "trailing earnings")} and ${multiple(ev, "EV/EBITDA")}, based on the final consideration and the last reported statements. It is a historical reference, not a live multiple. The article is retained because the company remains part of the 500-name coverage library.`
        : `At the latest close the equity is valued at ${money(data.latestPrice.marketCap)}, or ${multiple(pe, "trailing earnings")} and ${multiple(ev, "EV/EBITDA")}. The shares sit ${rangePosition == null ? "at an unknown position in" : `${Math.round(rangePosition * 100)}% of the way up`} their 52-week range${data.latestPrice.low52 != null && data.latestPrice.high52 != null ? ` (${price(data.latestPrice.low52)} to ${price(data.latestPrice.high52)})` : ""}. That price is the market's estimate of how long the current growth and margin can last, and the rest of this report tests the evidence rather than restates the estimate.`,
    ],
    quote: archived
      ? `${name} is no longer a live market, so the useful question is what its final financial record says about the ${group?.name ?? "US"} business that the acquirer bought.`
      : `${data.ticker} is ${article(group?.name ?? "US-listed")} ${group?.name ?? "US-listed"} business with ${money(revenue)} of trailing revenue. The useful question is what the current margin, growth and capital intensity imply about the next few years, not whether the last quarter beat a forecast.`,
  };

  const rawDescription = data.description?.trim() ?? "";
  const sectorLabel = group?.name ?? data.sector;
  const description =
    rawDescription.length >= 80
      ? humanizeDates(rawDescription)
      : `${name} operates in ${data.sector}, within the ${sectorLabel} coverage group. It sells to customers in ${data.industry || "its core market"} and reports under US GAAP or IFRS in its SEC filings.`;

  const whatItDoes: StoryBlock = {
    paragraphs: [
      atLeast(
        description,
        `${name} is ${article(sectorLabel)} ${sectorLabel} company. The report uses its SEC statements and the latest market-data snapshot to explain how the business earns revenue and where the cash goes.`,
      ),
      atLeast(
        `${segmentNote} ${geographyNote} The company employs ${data.employees ? data.employees.toLocaleString("en-US") : "an undisclosed number of"} people, and its coverage group is ${sectorLabel}.`,
        `The revenue base is ${money(revenue)} on a trailing basis. The mix between recurring and transactional revenue is the first thing to establish before comparing margins with peers.`,
      ),
      atLeast(
        `The comparison set includes ${peerNames}. ${name} is judged on whether its products or services are specified into customer workflows, whether that position supports pricing, and whether the resulting cash flow covers the capital required to maintain it.`,
        `Those questions matter more than a single quarter's headline growth because they determine the durability of the revenue base.`,
      ),
    ],
    bullets: [
      {
        title: "Revenue base",
        detail: quarter
          ? `${money(revenue)} on a trailing-twelve-month basis, with the latest quarter at ${money(quarter.revenue)}.`
          : `${money(revenue)} on a trailing-twelve-month basis; a dated quarter is not available in the dataset.`,
      },
      {
        title: "Profitability",
        detail: `Operating margin ${formatPercent(opMargin)}; free-cash-flow margin ${formatPercent(fcfMargin)}; net margin ${formatPercent(data.metrics.netMargin)}.`,
      },
      {
        title: archived ? "Final status" : "Scale",
        detail: archived
          ? `Last traded ${formatDate(archived.lastTraded)} after the ${archived.acquirer} transaction.`
          : `Market capitalization ${money(data.latestPrice.marketCap)} at the latest close.`,
      },
    ],
  };

  const howItMakesMoney: StoryBlock = {
    paragraphs: [
      atLeast(
        `Gross margin is ${formatPercent(data.metrics.grossMargin)}, operating margin is ${formatPercent(opMargin)} and net margin is ${formatPercent(data.metrics.netMargin)}. ${segmentNote}`,
        `The spread between gross and operating margin shows how much of the revenue is consumed by research, sales and administration before the business reaches operating profit.`,
      ),
      atLeast(
        `${geographyNote} ${debtNote} Return on invested capital was ${formatPercent(data.metrics.roic)} and return on equity was ${formatPercent(data.metrics.roe)}.`,
        `A business that earns above its cost of capital can reinvest; one that does not needs either a margin recovery or a different capital allocation to create value.`,
      ),
    ],
  };

  const growthBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        `Revenue compounded at ${formatPercent(cagr)} a year across the fiscal years in the dataset, and ${latestQText}. ${estimate ? `Third-party estimates for the current fiscal year point to ${money(estimate.revenueAvg)} of revenue and ${price(estimate.epsAvg)} of EPS.` : "A current-year consensus estimate is not available in the dataset."}`,
        `The reported growth rate is the starting point; the more important question is how much of it came from volume, price and acquisitions.`,
      ),
      atLeast(
        `The operating margin of ${formatPercent(opMargin)} and return on invested capital of ${formatPercent(data.metrics.roic)} are the filters to watch as revenue scales. ${archived ? `The final year in the dataset is FY${lastAnnual?.fyear ?? "n/a"}; there is no current guidance because the company no longer trades.` : `If incremental revenue arrives at a lower margin than the base, the consolidated margin will drift down even while the top line grows.`}`,
        `Growth that requires a proportional increase in capital is worth less than growth that drops through to cash flow.`,
      ),
    ],
    bullets: bucket.drivers.map((driver, index) => ({
      title: driver.title,
      detail: atLeast(
        `${driver.detail} For ${name}, the relevant evidence is ${index === 0 ? `revenue growth of ${growth(data.metrics.revenueGrowthTtm)}` : index === 1 ? `an operating margin of ${formatPercent(opMargin)}` : `a return on invested capital of ${formatPercent(data.metrics.roic)}`}.`,
        `That is the metric to track in the next filing.`,
      ),
    })),
  };

  const performanceBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        firstAnnual && lastAnnual
          ? `Over the fiscal years in the dataset, the operating margin moved from ${formatPercent(firstAnnual.operatingMargin)} in FY${firstAnnual.fyear} to ${formatPercent(lastAnnual.operatingMargin)} in FY${lastAnnual.fyear}. The trailing operating margin is ${formatPercent(opMargin)}, the net margin is ${formatPercent(data.metrics.netMargin)} and diluted EPS is ${data.metrics.epsTtm == null ? "not available" : price(data.metrics.epsTtm)}.`
          : `The trailing operating margin is ${formatPercent(opMargin)}, the net margin is ${formatPercent(data.metrics.netMargin)} and diluted EPS is ${data.metrics.epsTtm == null ? "not available" : price(data.metrics.epsTtm)}.`,
        `The quarterly path is more volatile than the annual record, which is why the annual figures are the better test of the underlying economics.`,
      ),
      atLeast(
        `Return on equity was ${formatPercent(data.metrics.roe)} and return on invested capital was ${formatPercent(data.metrics.roic)}. ${data.metrics.roic != null && data.metrics.roe != null && data.metrics.roe > data.metrics.roic ? "The gap between the two usually reflects leverage or goodwill sitting in the invested-capital base." : "The two measures are close, which suggests the returns are coming from the operating business rather than from financial leverage."}`,
        `Both should be compared with the company's own history before they are compared with a peer median.`,
      ),
    ],
  };

  const cashBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        `Free cash flow over the trailing period was ${money(data.metrics.freeCashFlowTtm)}, a ${formatPercent(fcfMargin)} margin. ${debtNote}`,
        `The cash figure is after capital expenditure, so it is the amount available for debt reduction, acquisitions, buybacks or dividends.`,
      ),
      atLeast(
        `${archived ? "The final reported balance sheet is the one shown here; it will not update." : "Cash conversion is the bridge from reported earnings to distributable cash."} The company ${data.metrics.freeCashFlowTtm != null && data.metrics.freeCashFlowTtm > 0 ? "generated positive free cash flow" : "did not generate positive free cash flow"} on a trailing basis, and capital expenditure was ${money(Math.abs(lastAnnual?.capex ?? 0))} in the latest fiscal year.`,
        `A growing difference between net income and free cash flow usually points to working capital or capital expenditure absorbing the profit.`,
      ),
    ],
  };

  const valuationBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        `At the latest reference price the shares trade at ${multiple(pe, "trailing earnings")}, ${multiple(ev, "EV/EBITDA")} and ${multiple(data.metrics.evSales, "EV/sales")}. The free-cash-flow yield is ${formatPercent(data.metrics.fcfYield)}.`,
        `Those multiples are a function of the growth, margin and capital intensity described above; on their own they do not say whether the price is high or low.`,
      ),
      atLeast(
        archived
          ? `The final consideration was ${archived.consideration}. The archived multiple is not a live valuation, and no current consensus target exists because the company no longer trades.`
          : `${target != null ? `The attributed third-party mean target is ${price(target)}; that is a consensus figure, not a Stockmonk price target.` : "A third-party consensus target is not available in the dataset."} The peer comparison sets the company against ${peerNames}; the multiple is a starting point for questions, not a verdict.`,
        `What would justify a higher multiple is evidence that growth and returns are durable; what would break it is a slower growth rate or a lower margin on incremental revenue.`,
      ),
    ],
  };

  const analystsBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        archived
          ? `A current analyst consensus is not available because ${name} no longer trades. The final transaction value is the relevant reference, and the archived estimates are shown only where the dataset retains them.`
          : consensus
            ? `${analystCount ?? "A group of"} analysts contribute to the third-party consensus. The mean target is ${price(consensus.targetMean)}, with a range of ${price(consensus.targetLow)} to ${price(consensus.targetHigh)}.`
            : "A third-party analyst consensus snapshot is not available for this company in the current dataset. The valuation discussion therefore relies on reported multiples and company filings.",
        `The consensus is a snapshot of published views, not a Stockmonk forecast, and it can change without notice.`,
      ),
      atLeast(
        archived
          ? `There is no current-year estimate to compare with the final reported year. The last reported revenue was ${money(revenue)} and the last reported operating margin was ${formatPercent(opMargin)}.`
          : estimate
            ? `Current-year estimates call for ${money(estimate.revenueAvg)} of revenue and ${price(estimate.epsAvg)} of EPS. The estimate revisions in the dataset are ${formatPercent(consensus?.revisions?.eps30d ?? null)} over 30 days and ${formatPercent(consensus?.revisions?.eps90d ?? null)} over 90 days.`
            : "When consensus is unavailable, the report does not invent a target or a rating. The reported financials remain the primary evidence.",
        `Estimates are useful for framing expectations, but they are not a substitute for the reported cash flow and balance sheet.`,
      ),
    ],
  };

  const riskItems: RiskItem[] = bucket.risks.slice(0, 5).map((risk, index) => ({
    title: risk.title,
    severity: index < 2 ? "High" : "Medium",
    detail: risk.detail,
    watch: risk.watch,
  }));
  if (archived) {
    riskItems[0] = {
      title: "Archived coverage",
      severity: "High",
      detail: `${name} no longer trades. The final consideration was ${archived.consideration}, and the financial statements will not be updated with new quarters.`,
      watch:
        "Treat every figure as the final reported record, not as a current market snapshot.",
    };
    riskItems[1] = {
      title: "Transaction completion",
      severity: "High",
      detail: `The ${archived.acquirer} transaction closed on ${formatDate(archived.lastTraded)}. The equity no longer has an independent market price.`,
      watch:
        "The archived page is for research continuity; it is not a live quote.",
    };
  }

  const risks = {
    intro: archived
      ? `The risks below are the historical risks that mattered before the ${archived.acquirer} transaction, plus the limitation that the record is now closed. They are qualitative descriptors, not a rating.`
      : `The risks below are the ones that matter most for this business given its financial profile. They are qualitative descriptors, not a rating.`,
    items: riskItems,
    watchlist: archived
      ? [
          {
            title: "Final reported figures",
            detail:
              "The statements are the last available SEC filings and will not refresh.",
          },
          {
            title: "Transaction terms",
            detail: `Final consideration: ${archived.consideration}.`,
          },
          {
            title: "Successor exposure",
            detail: `The business now sits inside ${archived.acquirer}; its results may be disclosed only at the parent level.`,
          },
        ]
      : bucket.watch,
  };

  const avgFactor = Math.round(
    (factors.growth +
      factors.profitability +
      factors.cash +
      factors.balance +
      factors.valuation) /
      5,
  );

  const titlePatterns = [
    `${name} earns an operating margin of ${formatPercent(opMargin)} on ${money(revenue)} of revenue`,
    `${name}: ${growth(data.metrics.revenueGrowthTtm)} growth, ${formatPercent(fcfMargin)} free cash flow and the price being paid`,
    `What ${name}'s latest filings reveal about growth, margins and cash`,
    `${name} turns ${money(revenue)} of revenue into ${money(data.metrics.freeCashFlowTtm)} of free cash flow`,
    `${name}: ${article(sectorLabel.toLowerCase())} ${sectorLabel.toLowerCase()} business with ${growth(data.metrics.revenueGrowthTtm)} revenue growth`,
    `The financial engine behind ${name}`,
    `${name} and the cost of its next unit of growth`,
    `${name}: margins, cash conversion and the multiple`,
    `How ${name} makes money and where the cash goes`,
    `${name} at ${pe == null ? "an incomplete earnings multiple" : `${formatMultiple(pe)} earnings`}: what the filings support`,
  ];
  const title = archived
    ? `${name}: the final financial record behind the ${archived.acquirer} deal`
    : pick(titlePatterns, data.ticker, 0);

  const bottomLine = {
    paragraphs: [
      atLeast(
        archived
          ? `${name} is an archived ${sectorLabel} company with ${money(revenue)} of final trailing revenue, a ${formatPercent(opMargin)} operating margin and a ${formatPercent(fcfMargin)} free-cash-flow margin. The ${archived.acquirer} transaction valued the equity at ${archived.consideration}.`
          : `${name} is ${article(sectorLabel)} ${sectorLabel} company with ${money(revenue)} of trailing revenue, an operating margin of ${formatPercent(opMargin)} and a free-cash-flow margin of ${formatPercent(fcfMargin)}. Those are the facts; the interpretation depends on whether the current growth and margin are durable.`,
        `The report separates the reported record from the market's expectation so the reader can see which part of the story is evidence and which part is forecast.`,
      ),
      atLeast(
        archived
          ? `There is no current price, target or rating to update. The archived factor percentiles are a historical description of the business at the point of the transaction.`
          : `${target != null ? `The third-party consensus mean target is ${price(target)} as of ${consensus?.asOf ?? "the latest snapshot"}. ` : ""}Stockmonk does not publish a rating or a target. The useful next step is to compare the company's multiples with its own history and with ${peerNames}, then decide which risk matters most.`,
        `A single multiple is not a conclusion; it is a question about the durability of the underlying cash flow.`,
      ),
      atLeast(
        `The factor percentiles place the company at an average of ${avgFactor}/100 across growth, profitability, cash, balance sheet and valuation. A high growth reading with a low balance-sheet reading is a different proposition from the reverse, and neither is automatically good or bad.`,
        `The percentile is a description of the current data, not a recommendation.`,
      ),
    ],
    questions: bucket.questions,
  };

  const dek = archived
    ? `${name} last traded on ${formatDate(archived.lastTraded)} after the ${archived.acquirer} transaction. The report keeps the final SEC record, the deal terms and the factors that explained the business while it was public.`
    : `${name} ${revenue && revenue > 0 ? `generated ${money(revenue)} of trailing revenue with an operating margin of ${formatPercent(opMargin)}` : "is a pre-revenue or early-revenue company"}. The report walks through the business, the cash flow, the valuation context and the risks that matter most.`;

  return {
    ticker: data.ticker,
    kicker: `${sectorLabel} · ${data.industry || group?.shortName || "US equity"}`,
    title,
    dek,
    readingMinutes: 10,
    takeaways: [
      archived
        ? `Status: last traded ${formatDate(archived.lastTraded)}; ${archived.acquirer} completed the transaction at ${archived.consideration}.`
        : revenue && revenue > 0
          ? `Revenue: ${money(revenue)} trailing twelve months, ${growth(data.metrics.revenueGrowthTtm)} year over year.`
          : "Revenue: no revenue reported over the trailing twelve months.",
      `Profitability: ${formatPercent(opMargin)} operating margin and ${formatPercent(data.metrics.netMargin)} net margin.`,
      `Cash: ${money(data.metrics.freeCashFlowTtm)} free cash flow, a ${formatPercent(fcfMargin)} margin, against ${netDebt == null ? "an undisclosed net debt position" : netDebt < 0 ? `${money(Math.abs(netDebt))} of net cash` : `${money(netDebt)} of net debt`}.`,
      archived
        ? `Valuation: final consideration ${archived.consideration}; no live multiple or consensus target.`
        : `Valuation: ${multiple(pe, "trailing earnings")} and ${multiple(ev, "EV/EBITDA")} at the latest close.`,
    ],
    narrativeSource: "auto-curated",
    narrativeUpdatedAt: new Date().toISOString().slice(0, 10),
    filingUrl: sourceUrl(bundle),
    irUrl: data.website ?? filingHistoryUrl(bundle),
    bigPicture,
    whatItDoes,
    howItMakesMoney,
    growth: growthBlock,
    performance: performanceBlock,
    cash: cashBlock,
    valuation: valuationBlock,
    analysts: analystsBlock,
    risks,
    bottomLine,
  };
}
