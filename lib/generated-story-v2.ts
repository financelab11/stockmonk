import type { RiskItem, StockStory, StoryBlock } from "@/content/stocks/types";
import { getArchivedCompany } from "@/config/archive";
import { COMPANY_ANGLES } from "@/config/company-angles";
import { getCoverageGroup } from "@/config/coverage";
import type { ResearchBundle } from "./data";
import { BUCKETS, GROUP_BUCKET } from "./generated-story";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatMultiple,
  formatNumber,
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
    .replace(/\s+([,.;:])/g, "$1")
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

function titleFromAngle(name: string, angle: string): string | null {
  const phrase = angle
    .replace(
      /^.*?\b(?:is|are|uses|use|owns|runs|sells|makes|make|provides|operates|earns|depends|designs|builds|produces|distributes|manufactures|licenses|supplies|develops|offers|serves|focuses|generates|derives)\b\s+/i,
      "",
    )
    .split(/[,;]/)[0]
    .trim()
    .replace(/\.$/, "")
    .replace(/^(and|or|but|while|with|so)\s+/i, "")
    .replace(/^(its|their|the company's|the group's)\s+/i, "")
    .replace(
      /^(operates|runs|owns|sells|makes|provides|earns|uses|designs|builds|produces|distributes|manufactures|licenses|supplies|develops|offers|serves|focuses)\s+/i,
      "",
    )
    .trim();
  if (phrase.split(/\s+/).length < 3) return null;
  if (phrase.length > 90) return null;
  return `${name.replace(/[.,:]+$/, "")}: ${phrase.charAt(0).toUpperCase()}${phrase.slice(1)}`;
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

function variant(ticker: string, salt: number, options: string[]): string {
  return options[(hash(ticker) + salt) % options.length];
}

function percentArticle(value: number | null | undefined): string {
  const formatted = formatPercent(value);
  const numeric = formatted.replace(/[^0-9.]/g, "");
  return `${/^(8|11|18)/.test(numeric) ? "an" : "a"} ${formatted}`;
}

function upperFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
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

function bucketKeyFor(
  ticker: string,
  groupId: string | undefined,
  industry: string | undefined,
): string {
  const text = `${industry ?? ""}`.toLowerCase();
  if (groupId === "banks-insurance") {
    if (/broker|advisory|exchange|distribution/.test(text)) return "brokerage";
    if (/insurance|underwrit|reinsur/.test(text)) return "insurance";
    return "financial";
  }
  if (groupId === "capital-markets") {
    return ticker === "AMP" ||
      /financial data|stock exchange|capital markets|broker/.test(text)
      ? "marketinfra"
      : "capitalmarkets";
  }
  if (groupId === "payments-fintech") {
    if (ticker === "FIS" || ticker === "FISV" || ticker === "GPN")
      return "payments";
    if (ticker === "ADP" || ticker === "JKHY") return "software";
    if (
      /financial data|stock exchange|information technology services|business services/.test(
        text,
      )
    )
      return "marketinfra";
    return "payments";
  }
  if (groupId === "consumer-retail") {
    return /travel|lodging|resort|casino|hotel|cruise|restaurant|leisure|gaming/.test(
      text,
    )
      ? "leisure"
      : "retail";
  }
  if (groupId === "healthcare-services") {
    if (ticker === "LH" || ticker === "DGX") return "labs";
    if (/health(?:care)? ?plans?|managed care|health insurance/.test(text))
      return "managedcare";
    return /device|instrument|diagnostic|tool/.test(text)
      ? "medtech"
      : "healthservices";
  }
  if (groupId === "pharma-biotech") return "pharma";
  if (groupId === "aerospace-defense") return "defense";
  if (groupId === "transport-autonomy") {
    return /auto parts|auto manufacturers/.test(text) ? "autonomy" : "transport";
  }
  if (groupId === "internet-platforms") return "internet";
  return GROUP_BUCKET[groupId ?? ""] ?? "tech";
}

export function generateStockStoryV2(bundle: ResearchBundle): StockStory {
  const { data, consensus, segments, factors } = bundle;
  const currency = data.currency ?? "USD";
  const price = (value: number | null | undefined) =>
    formatCurrency(value, 2, currency);
  const money = (value: number | null | undefined) =>
    formatCompactCurrency(value, currency);
  const group = getCoverageGroup(data.ticker);
  const bucketKey = bucketKeyFor(data.ticker, group?.id, data.industry);
  const bucket = BUCKETS[bucketKey] ?? BUCKETS.tech;
  const isBank = bucketKey === "financial";
  const isInsurer = bucketKey === "insurance";
  const isAssetManager = bucketKey === "capitalmarkets";
  const isBalanceSheetBusiness = isBank || isInsurer || isAssetManager;
  const quarter = latestQuarter(bundle);
  const name = displayName(data.name);
  const revenue = data.metrics.revenueTtm;
  const opMargin = data.metrics.operatingMargin;
  const fcfMargin = data.metrics.fcfMargin;
  const pe = data.metrics.pe;
  const ev = data.metrics.evEbitda;
  const netDebt = data.metrics.netDebt;
  const leverage = data.metrics.netDebtToEbitda;
  const roe = data.metrics.roe;
  const roic = data.metrics.roic;
  const cagr = bundle.cagr;
  const latestQ = bundle.latestQYoY;
  const rangePosition = bundle.rangePosition;
  const target = consensus?.targetMean ?? null;
  const analystCount = consensus?.analystCount ?? null;
  const estimate = consensus?.estimates.find(
    (item) => item.period === "Current fiscal year",
  );
  const revenueEstimateRatio =
    estimate?.revenueAvg != null && revenue && revenue > 0
      ? estimate.revenueAvg / revenue
      : null;
  const estimateConsistent =
    estimate == null ||
    revenueEstimateRatio == null ||
    estimate.revenueGrowth == null ||
    Math.abs((1 + estimate.revenueGrowth) / revenueEstimateRatio - 1) < 0.4;
  const estimateSentence = estimate
    ? estimateConsistent && estimate.revenueAvg != null
      ? `Current-year estimates call for ${money(estimate.revenueAvg)} of revenue and ${price(estimate.epsAvg)} of EPS.`
      : `Current-year estimates point to ${formatPercent(estimate.revenueGrowth)} revenue growth${estimate.epsAvg != null ? `, with EPS of ${formatNumber(estimate.epsAvg, 2)} in the reporting currency` : ""}.`
    : null;
  const archived = getArchivedCompany(data.ticker);
  const note = COMPANY_ANGLES[data.ticker];
  const annual = annualRows(bundle);
  const firstAnnual = annual[0] ?? null;
  const lastAnnual = annual.at(-1) ?? null;
  const peerList =
    bundle.peerCandidates && bundle.peerCandidates.length >= 2
      ? bundle.peerCandidates
          .filter((ticker) => ticker !== data.ticker)
          .slice(0, 3)
      : (group?.tickers
          .filter((ticker) => ticker !== data.ticker)
          .slice(0, 3) ?? []);
  const peerNames = peerList.length
    ? listWithAnd(peerList)
    : "larger US-listed peers";
  const filteredSegments = (segments?.segments ?? []).filter((segment) => {
    const label = segment.name.trim();
    if (/^reportable/i.test(label)) return false;
    if (
      /^(corporate \/ other|total|consolidated)$/i.test(label) &&
      segment.share >= 0.95
    )
      return false;
    return true;
  });
  const seenSegmentRevenue = new Set<number>();
  const dedupedSegments = filteredSegments.filter((segment) => {
    if (segment.revenue == null) return true;
    if (seenSegmentRevenue.has(segment.revenue)) return false;
    seenSegmentRevenue.add(segment.revenue);
    return true;
  });
  const segmentList =
    dedupedSegments.reduce((sum, segment) => sum + segment.share, 0) >= 0.5
      ? dedupedSegments
      : [];
  const largestSegment = segmentList[0] ?? null;
  const segmentNote = largestSegment
    ? [
        `${largestSegment.name} is ${formatPercent(largestSegment.share)} of the disclosed revenue mix.`,
        `${largestSegment.name} accounts for ${formatPercent(largestSegment.share)} of disclosed revenue.`,
        `The largest disclosed segment is ${largestSegment.name} at ${formatPercent(largestSegment.share)} of revenue.`,
        `${largestSegment.name} contributes ${formatPercent(largestSegment.share)} of the disclosed revenue mix.`,
      ][hash(data.ticker) % 4]
    : [
        "The filing does not disclose a reportable segment split, so the consolidated revenue line is the unit of analysis.",
        "A reportable segment split is not available in the current dataset; the consolidated revenue line is the cleanest unit of analysis.",
        "The company reports one consolidated revenue line rather than a segment split, so the total is the base for the analysis.",
        "No segment disclosure is available, which means the consolidated revenue line carries the analysis.",
      ][hash(data.ticker) % 4];
  const geographyNote =
    segments && segments.geography.length > 0
      ? variant(data.ticker, 1, [
          `By geography, ${segments.geography[0]?.name ?? "the largest market"} is the largest disclosed market at ${formatPercent(segments.geography[0]?.share ?? 0)} of revenue.`,
          `${segments.geography[0]?.name ?? "The largest market"} supplies ${formatPercent(segments.geography[0]?.share ?? 0)} of disclosed revenue, the largest single geography in the filing.`,
          `Revenue is disclosed across ${segments.geography.length} geographies, with ${segments.geography[0]?.name ?? "the home market"} the largest at ${formatPercent(segments.geography[0]?.share ?? 0)}.`,
          `Geographically, ${segments.geography[0]?.name ?? "the largest market"} leads at ${formatPercent(segments.geography[0]?.share ?? 0)} of the disclosed split.`,
        ])
      : variant(data.ticker, 2, [
          "The filing extract does not break revenue out by geography.",
          "Geographic revenue detail is not available in the current dataset.",
          "No country-level revenue split is carried in the data used here.",
          "A regional breakdown is missing from the current filing extract, so the analysis stays at the consolidated level.",
          "The dataset does not include a geographic revenue split for this company.",
          "Geographic mix is not disclosed in the extract behind this report.",
          "The extract carries a consolidated revenue line without a regional split.",
          "Country-level revenue is not part of the filing extract used here.",
          "The company does not disclose revenue by region in the current extract.",
        ]);
  const debtNote = isBank
    ? variant(data.ticker, 90, [
        "For a bank, deposit funding and capital ratios matter more than a conventional net-debt measure.",
        "Deposits and regulatory capital are the relevant funding measures for a bank, not net debt.",
        "A bank's balance sheet is its product, so net debt is less informative than deposit mix and capital ratios.",
      ])
    : isInsurer
      ? variant(data.ticker, 93, [
          "For an insurer, the investment portfolio and reserve liabilities matter more than a conventional net-debt measure.",
          "Insurance economics are driven by reserves and the investment portfolio, not by net debt.",
          "The balance sheet is a pool of reserves and investments, so net debt says less than reserve adequacy and book value.",
        ])
      : isAssetManager
        ? variant(data.ticker, 94, [
            "For an asset manager, fee-related earnings and fund balances matter more than consolidated net debt.",
            "Management fees and carried interest drive the economics, so net debt is a secondary measure.",
            "The balance sheet supports the funds rather than a product business, which makes net debt less informative than fee streams.",
          ])
        : netDebt == null
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
    ? `The latest reported quarter was ${quarter.period} FY${String(quarter.fyear).slice(-2)}, with ${money(quarter.revenue)} of revenue and ${percentArticle(quarter.operatingMargin)} operating margin.`
    : variant(data.ticker, 3, [
        "The dataset does not carry a dated quarterly result for the latest period.",
        "A current-quarter revenue line is not available in the extract.",
        "Quarterly detail is missing, so the trailing figures carry the analysis.",
        "The latest quarter is not in the dataset; the annual and trailing numbers are the evidence.",
      ]);
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
        `${segmentNote} ${geographyNote}${note?.moat ? ` ${note.moat}` : ""}`,
        `${name} competes in ${data.industry || group?.name || "its sector"}, where scale, pricing and capital intensity decide the return on the next dollar of revenue.`,
      ),
      archived
        ? `The archived valuation has ${multiple(pe, "trailing earnings")} and ${multiple(ev, "EV/EBITDA")}, based on the final consideration and the last reported statements. It is a historical reference, not a live multiple. The article is retained because the company remains part of the 500-name coverage library.`
        : `At the latest close the equity is valued at ${money(data.latestPrice.marketCap)}, or ${multiple(pe, "trailing earnings")} and ${multiple(ev, "EV/EBITDA")}. The shares sit ${rangePosition == null ? "at an unknown position in" : `${Math.round(rangePosition * 100)}% of the way up`} their 52-week range${data.latestPrice.low52 != null && data.latestPrice.high52 != null ? ` (${price(data.latestPrice.low52)} to ${price(data.latestPrice.high52)})` : ""}. ${variant(data.ticker, 80, [
          "That price is the market's estimate of how long the current growth and margin can last; the rest of this report tests the evidence rather than restates the estimate.",
          "The multiple embeds a view on durability, and the rest of the report tests that view against the reported record.",
          "Whether the price is right depends on how long the current economics persist, which is what the rest of the report examines.",
          "The market has already formed a view; the useful work is checking it against the filings rather than repeating it.",
        ])}`,
    ],
    quote: archived
      ? `${name} is no longer a live market, so the useful question is what its final financial record says about the ${group?.name ?? "US"} business that the acquirer bought.`
      : note
        ? `${note.angle}${note.valuation ? ` ${note.valuation}` : ""}`
        : `${data.ticker} is ${article(group?.name ?? "US-listed")} ${group?.name ?? "US-listed"} business with ${money(revenue)} of trailing revenue. The useful question is what the current margin, growth and capital intensity imply about the next few years, not whether the last quarter beat a forecast.`,
  };

  const rawDescription = data.description?.trim() ?? "";
  const sectorLabel = group?.name ?? data.sector;
  const description =
    rawDescription.length >= 80
      ? humanizeDates(rawDescription)
      : variant(data.ticker, 81, [
          `${name} operates in the ${data.industry || data.sector} industry and reports in ${currency}, within the ${sectorLabel} coverage group.`,
          `${name} sits in ${data.industry || data.sector}, one of the ${sectorLabel} names in this library.`,
          `The company competes in ${data.industry || data.sector} and reports its accounts in ${currency} under ${sectorLabel} coverage.`,
          `${name} is classified in ${data.industry || data.sector}; its financial statements are in ${currency} and it sits in the ${sectorLabel} group.`,
        ]);

  const segmentTotal = segmentList.reduce(
    (sum, segment) => sum + segment.share,
    0,
  );
  const segmentBreakdown =
    segmentList.length > 1 && segmentTotal <= 1.1
      ? `The disclosed mix runs across ${listWithAnd(
          segmentList
            .slice(0, 3)
            .map(
              (segment) =>
                `${segment.name} at ${formatPercent(segment.share)}`,
            ),
        )}.`
      : segmentNote;
  const segmentSummary =
    segmentList.length > 1
      ? segmentBreakdown
      : variant(data.ticker, 23, [
          "The company reports one consolidated revenue line rather than a segment split.",
          "There is no separate segment disclosure in the current extract.",
          "Revenue is reported at the consolidated level only.",
          "The filing extract carries no product-line revenue split.",
        ]);
  const headcountNote = data.employees
    ? variant(data.ticker, 4, [
        `The last disclosure put headcount at ${data.employees.toLocaleString("en-US")} people.`,
        `Headcount was ${data.employees.toLocaleString("en-US")} in the latest filing.`,
        `The company employed ${data.employees.toLocaleString("en-US")} people at the last reporting date.`,
        `Its latest filing lists ${data.employees.toLocaleString("en-US")} employees.`,
      ])
    : variant(data.ticker, 5, [
        "The filing extract does not include a headcount figure.",
        "Headcount is not disclosed in the current dataset.",
        "Employee numbers are not part of the extract used here.",
      ]);

  const whatItDoes: StoryBlock = {
    paragraphs: [
      atLeast(
        description,
        variant(data.ticker, 6, [
          `${name} is ${article(data.industry || sectorLabel)} ${data.industry || sectorLabel} company within the ${sectorLabel} coverage group.`,
          `It reports in the ${data.sector} sector and is classified in ${sectorLabel} coverage.`,
          `${name} sits in the ${data.industry || data.sector} industry, one of the ${sectorLabel} names in this library.`,
          `The business is part of the ${sectorLabel} group and reports under ${data.sector} in the current classification.`,
        ]),
      ),
      atLeast(
        `${segmentSummary} ${headcountNote}`,
        variant(data.ticker, 7, [
          `Trailing revenue is ${money(revenue)}, and the split between recurring and transactional revenue is the first thing to establish before comparing margins with peers.`,
          `The revenue base is ${money(revenue)} on a trailing basis; how much of that is recurring is the key question for the margin comparison.`,
          `With ${money(revenue)} of trailing revenue, the mix of repeatable and one-off sales decides how much of the margin deserves a premium.`,
        ]),
      ),
      isBank
        ? variant(data.ticker, 92, [
            `Against ${peerNames}, the relevant tests are net interest margin, credit quality and capital returns.`,
            `The peer set is ${peerNames}; net interest margin, provisioning and capital returns are the comparisons that matter.`,
            `${peerNames} provide the closest reference points on net interest margin, credit quality and capital returns.`,
          ])
        : `${
            [
              `The closest listed comparisons are ${peerNames}; the useful question is how ${name}'s margin and returns compare with theirs, not how fast the addressable market is growing.`,
              `Against ${peerNames}, the relevant tests are pricing power, capital intensity and cash conversion.`,
              `The peer set is ${peerNames}; similar businesses can earn very different returns on capital, which is the comparison that matters.`,
              `${peerNames} provide the closest reference points for margin, growth and valuation.`,
            ][hash(data.ticker) % 4]
          }`,
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

  const grossMargin = data.metrics.grossMargin;
  const grossProfit =
    revenue != null && grossMargin != null ? revenue * grossMargin : null;
  const opexRatio =
    grossMargin != null && opMargin != null ? grossMargin - opMargin : null;

  const roicNote =
    data.metrics.roic == null
      ? variant(data.ticker, 8, [
          "A return on invested capital is not available in the dataset, so margin and cash conversion carry the quality assessment.",
          "The dataset does not include a usable return on invested capital, leaving margin and cash conversion as the quality tests.",
          "Without a return on invested capital, the assessment rests on operating margin and cash conversion.",
        ])
      : data.metrics.roic < 0
        ? variant(data.ticker, 11, [
            `The negative return means the capital base is not earning its cost; the question is whether scale or a margin recovery fixes that.`,
            `A negative return on invested capital means the business is consuming capital rather than earning on it.`,
            `With returns below zero, growth only creates value if the model reaches profitability at scale.`,
            `The capital base is currently earning less than nothing; scale has to change that.`,
            `Negative returns make the growth question secondary to the profitability question.`,
            `Until the return turns positive, additional capital is a cost rather than an investment.`,
          ])
        : data.metrics.roic >= 0.15
        ? variant(data.ticker, 9, [
            `That is comfortably above most cost-of-capital estimates, which is what lets reinvestment create value.`,
            `That level earns well above a typical cost of capital.`,
            `The return leaves room above the cost of capital for growth to compound.`,
          ])
        : data.metrics.roic >= 0.08
          ? variant(data.ticker, 10, [
              `That sits in the middle of the range; whether it clears the cost of capital is the deciding question.`,
              `That is neither clearly good nor clearly bad without knowing the cost of capital.`,
              `The return is close enough to the cost of capital that small changes in margin matter.`,
            ])
          : variant(data.ticker, 11, [
              `That is a thin return; without a margin recovery or a different capital allocation, growth is unlikely to create value.`,
              `That leaves little room above the cost of capital.`,
              `The return suggests the current capital base is earning a modest amount.`,
            ]);

  const howItMakesMoney: StoryBlock = {
    paragraphs: [
      atLeast(
        grossMargin == null
          ? `A gross margin is not available in the dataset for this business, so the operating margin of ${formatPercent(opMargin)} is the first clean profitability line. ${bucket.lens}`
          : [
              `Gross margin is ${formatPercent(grossMargin)}, operating margin is ${formatPercent(opMargin)} and net margin is ${formatPercent(data.metrics.netMargin)}. Gross profit was ${money(grossProfit)}, and ${formatPercent(opexRatio)} of revenue went to operating expenses.`,
              `The company kept ${formatPercent(grossMargin)} of revenue after cost of sales, or ${money(grossProfit)}. Operating expenses absorbed ${formatPercent(opexRatio)} of revenue, leaving ${percentArticle(opMargin)} operating margin.`,
              `Of ${money(revenue)} of revenue, ${money(grossProfit)} remained after cost of sales. The ${formatPercent(opexRatio)} operating-expense load brought that down to ${percentArticle(opMargin)} operating margin.`,
            ][hash(data.ticker) % 3],
        grossMargin == null
          ? variant(data.ticker, 12, [
              "For a balance-sheet business, the operating line includes funding costs, so the margin comparison with product companies is not like for like.",
              "Because the cost of funds sits inside the operating line, the margin is best compared with other balance-sheet businesses.",
              "The operating margin here already reflects funding costs, which makes it a spread measure rather than a product gross margin.",
            ])
          : variant(data.ticker, 13, [
              "That cost load is the lever between gross profit and operating profit.",
              "Every point of operating expense on that gross margin moves the operating result.",
              "The operating layer is where the gross profit is either protected or spent.",
            ]),
      ),
      isBank
        ? `${debtNote} Return on equity was ${formatPercent(data.metrics.roe)}; for a bank, that return is shaped by leverage and credit costs rather than by a product gross margin.`
        : isInsurer
          ? `${debtNote} Return on equity was ${formatPercent(data.metrics.roe)}; underwriting results and investment income drive that return.`
          : isAssetManager
            ? `${debtNote} Return on equity was ${formatPercent(data.metrics.roe)}; fee-related earnings and carried interest drive that return.`
            : atLeast(
                roe != null && roe < 0 && roic != null && roic > 0
                  ? `${debtNote} Return on invested capital was ${formatPercent(roic)}, while the reported return on equity is negative because the equity base is negative.`
                  : `${debtNote} Return on invested capital was ${formatPercent(data.metrics.roic)} and return on equity was ${formatPercent(data.metrics.roe)}.`,
                roe != null && roe < 0 && roic != null && roic > 0
                  ? "The operating return is the one to use when judging reinvestment."
                  : roicNote,
              ),
    ],
  };

  const revenueGrowth = data.metrics.revenueGrowthTtm;
  const growthTension = isBank
    ? revenueGrowth == null
      ? "The dataset does not carry a clean trailing growth rate, so the annual record is the better guide."
      : variant(data.ticker, 15, [
          `Revenue growth of ${formatPercent(revenueGrowth)} is the top-line signal; the quality of that growth depends on net interest margin and credit costs.`,
          `For a bank, growth of ${formatPercent(revenueGrowth)} matters only if the new business is priced above funding costs and credit losses.`,
          `The ${formatPercent(revenueGrowth)} revenue pace is the headline; net interest margin and provisions will decide how much reaches the bottom line.`,
        ])
    : revenueGrowth == null
      ? variant(data.ticker, 14, [
          "The dataset does not carry a clean trailing growth rate, so the annual record is the better guide.",
          "Without a trailing growth figure, the fiscal-year revenue path is the evidence to use.",
        ])
      : revenueGrowth < 0
        ? variant(data.ticker, 15, [
            `Revenue is shrinking at ${formatPercent(Math.abs(revenueGrowth))} a year on a trailing basis, which puts the burden on cost control and capital returns.`,
            `The trailing decline of ${formatPercent(Math.abs(revenueGrowth))} means the margin has to be defended on a smaller base.`,
            `With revenue down ${formatPercent(Math.abs(revenueGrowth))}, the operating plan is as much about cost as about demand.`,
          ])
        : opMargin != null && opMargin < 0.1 && revenueGrowth > 0.15
          ? variant(data.ticker, 16, [
              `Growth of ${formatPercent(revenueGrowth)} is outrunning the ${formatPercent(opMargin)} operating margin, so the question is whether scale eventually pays for itself.`,
              `The ${formatPercent(revenueGrowth)} top-line pace has not yet produced a thick margin; incremental revenue needs to carry more of the cost base.`,
              `Revenue is growing faster than profit, which means the current margin understates the operating leverage still to come if the model scales.`,
            ])
          : opMargin != null && opMargin > 0.25
            ? variant(data.ticker, 17, [
                `Growth of ${formatPercent(revenueGrowth)} on ${percentArticle(opMargin)} operating margin is a high-quality combination if both hold.`,
                `The ${formatPercent(opMargin)} operating margin gives the company room to absorb slower growth without a profit reset.`,
                `With ${percentArticle(opMargin)} margin, the growth rate matters less than whether the margin is repeatable.`,
              ])
            : variant(data.ticker, 18, [
                `Growth of ${formatPercent(revenueGrowth)} against ${percentArticle(opMargin)} operating margin is the balance the next few quarters have to protect.`,
                `The ${formatPercent(revenueGrowth)} revenue pace and ${formatPercent(opMargin)} margin have to move together for the earnings path to improve.`,
                `Neither the ${formatPercent(revenueGrowth)} growth nor the ${formatPercent(opMargin)} margin is extreme; the combination is what matters.`,
              ]);

  const growthBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        `Revenue compounded at ${formatPercent(cagr)} a year across the fiscal years in the dataset, and ${latestQText}. ${estimateSentence ?? "A current-year consensus estimate is not available in the dataset."}`,
        variant(data.ticker, 19, [
          "That record is the starting point; the more important question is how much of it came from volume, price and acquisitions.",
          "Reported growth is the headline; the split between volume, price and acquisitions is what tells you whether it can repeat.",
          "The next filing should show whether the pace came from demand, pricing or deal-making.",
        ]),
      ),
      isBank
        ? `Return on equity of ${formatPercent(roe)} is the filter to watch as revenue scales. ${archived ? `The final year in the dataset is FY${lastAnnual?.fyear ?? "n/a"}; there is no current guidance because the company no longer trades.` : growthTension}`
        : note?.catalyst
          ? `${note.catalyst} The operating margin of ${formatPercent(opMargin)} and return on invested capital of ${formatPercent(data.metrics.roic)} are the filters to watch as revenue scales. ${archived ? `The final year in the dataset is FY${lastAnnual?.fyear ?? "n/a"}; there is no current guidance because the company no longer trades.` : growthTension}`
          : `The operating margin of ${formatPercent(opMargin)} and return on invested capital of ${formatPercent(data.metrics.roic)} are the filters to watch as revenue scales. ${archived ? `The final year in the dataset is FY${lastAnnual?.fyear ?? "n/a"}; there is no current guidance because the company no longer trades.` : growthTension}`,
    ],
    bullets: bucket.drivers.map((driver, index) => {
      const evidence =
        index === 0
          ? `revenue growth is ${growth(data.metrics.revenueGrowthTtm)}`
          : index === 1
            ? `the operating margin is ${formatPercent(opMargin)}`
            : isBank
              ? `return on equity is ${formatPercent(roe)}`
              : `return on invested capital is ${formatPercent(data.metrics.roic)}`;
      const detail = [
        `${driver.detail} ${upperFirst(evidence)}.`,
        `${upperFirst(evidence)}. ${driver.detail}`,
        `${driver.detail} The current reading: ${evidence}.`,
        `${upperFirst(evidence)}. ${
          variant(data.ticker, 21 + index, [
            "That is the line the next filing has to move.",
            "That is the number to compare with the company's own history.",
            "The trend in that figure matters more than its level.",
            "Watch whether that reading improves or merely holds.",
            "The direction of travel matters more than the absolute level.",
            "The next data point will show whether the trend is intact.",
            "Compare that with the prior year before drawing a conclusion.",
            "That is the metric the thesis depends on.",
            "A change in that figure would be the first signal of a shift.",
          ])
        }`,
      ][(hash(data.ticker) + index) % 4];
      return { title: driver.title, detail };
    }),
  };

  const roeRoicNote =
    roe == null || roic == null
      ? variant(data.ticker, 30, [
          "Both return measures are not available on a comparable basis, so the margin and cash record carry the quality assessment.",
          "The dataset does not carry both return measures, leaving margin and cash conversion as the comparison.",
        ])
      : roe < 0 && roic >= 0
        ? variant(data.ticker, 37, [
            `Return on equity is negative because the equity base is negative; the ${formatPercent(roic)} return on invested capital is the better measure of the operating business.`,
            `A negative equity base makes the equity return meaningless here; the return on invested capital is the number that matters.`,
            `The equity return is distorted by negative book equity, so the operating return is the cleaner read.`,
          ])
        : roe < 0 || roic < 0
        ? variant(data.ticker, 36, [
            `Both returns are negative, so the question is whether the operating losses are a scale problem or a structural one.`,
            `With negative returns on both equity and invested capital, the business is consuming capital rather than earning on it.`,
            `The negative returns mean leverage is not the issue; the operating model is.`,
            `Negative equity and invested-capital returns mean the loss is operational, not financial engineering.`,
            `Both measures sit below zero, so there is no leverage effect to separate out.`,
            `The losses show up in both return measures, which points to the income statement rather than the capital structure.`,
          ])
        : roe - roic > 0.2
        ? variant(data.ticker, 31, [
            `The ${formatPercent(roe - roic)} gap between return on equity and return on invested capital points to leverage or goodwill in the capital base, so the equity return overstates the operating return.`,
            `Return on equity of ${formatPercent(roe)} is well above the ${formatPercent(roic)} return on invested capital; the difference is the balance sheet, not the business.`,
            `The equity return is flattered by a thinner capital base: ${formatPercent(roe)} versus ${formatPercent(roic)} on invested capital.`,
          ])
        : roe - roic > 0.08
          ? variant(data.ticker, 32, [
              `Return on equity of ${formatPercent(roe)} is above the ${formatPercent(roic)} return on invested capital, a gap that leverage or acquisition goodwill can explain.`,
              `The ${formatPercent(roe - roic)} spread between the two returns suggests some of the equity return comes from the balance sheet rather than operations alone.`,
              `Equity returns exceed invested-capital returns by ${formatPercent(roe - roic)}, which is more than operating performance alone would explain.`,
            ])
          : variant(data.ticker, 33, [
              `The two returns are within a few points, at ${formatPercent(roe)} on equity and ${formatPercent(roic)} on invested capital, so operating performance explains most of the difference.`,
              `With return on equity at ${formatPercent(roe)} and return on invested capital at ${formatPercent(roic)}, leverage is not the main driver of the gap.`,
              `Return on invested capital of ${formatPercent(roic)} is close to the ${formatPercent(roe)} equity return, so the balance sheet explains only part of the difference.`,
            ]);

  const marginHistoryValid =
    firstAnnual != null &&
    lastAnnual != null &&
    firstAnnual.operatingMargin != null &&
    lastAnnual.operatingMargin != null &&
    Math.abs(firstAnnual.operatingMargin) <= 1.5 &&
    Math.abs(lastAnnual.operatingMargin) <= 1.5;
  const marginHistorySentence = marginHistoryValid
    ? `Over the fiscal years in the dataset, the operating margin moved from ${formatPercent(firstAnnual?.operatingMargin)} in FY${firstAnnual?.fyear} to ${formatPercent(lastAnnual?.operatingMargin)} in FY${lastAnnual?.fyear}.`
    : `The reported operating margin history includes figures that are not comparable across years, so the trailing margin is the cleaner reference.`;
  const performanceBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        `${marginHistorySentence} The trailing operating margin is ${formatPercent(opMargin)}, the net margin is ${formatPercent(data.metrics.netMargin)} and diluted EPS is ${data.metrics.epsTtm == null ? "not available" : price(data.metrics.epsTtm)}.`,
        variant(data.ticker, 34, [
          "The annual figures are the better test of the underlying economics because quarterly timing distorts the comparison.",
          "Quarterly results move with timing and mix; the fiscal-year record is the cleaner read on the business.",
          "The annual path smooths out the seasonal swings that make a single quarter misleading.",
        ]),
      ),
      atLeast(
        isBank
          ? `Return on equity was ${formatPercent(roe)}. ${variant(data.ticker, 91, [
              "For a bank, return on invested capital is distorted by deposit funding, so net interest margin, credit costs and capital ratios are the more useful comparisons.",
              "A bank's equity return is shaped by leverage and credit costs; the operating margin is not the right yardstick.",
              "Deposits fund most of the balance sheet, which makes return on invested capital a less informative measure than return on equity and capital ratios.",
            ])}`
          : isInsurer
            ? `Return on equity was ${formatPercent(roe)}. ${variant(data.ticker, 95, [
                "For an insurer, the combined ratio and investment income explain that return better than return on invested capital.",
                "Underwriting discipline and the investment portfolio drive the equity return, so ROIC is a secondary measure.",
                "Reserve development and the float explain more about an insurer's return than a conventional capital-return measure.",
              ])}`
            : isAssetManager
              ? `Return on equity was ${formatPercent(roe)}. ${variant(data.ticker, 96, [
                  "For an asset manager, fee-related earnings and carried interest explain that return better than return on invested capital.",
                  "Fundraising and carry drive the equity return, so ROIC is a secondary measure for this model.",
                  "The balance sheet supports the funds; fee streams and realisations are the better test of returns.",
                ])}`
              : `Return on equity was ${formatPercent(roe)} and return on invested capital was ${formatPercent(roic)}. ${roeRoicNote}`,
        isBank
          ? "The trend in return on equity and the path of credit costs matter more than a single quarter."
          : isInsurer
            ? "Reserve development and the combined ratio are the trends to follow from here."
            : isAssetManager
              ? "Fundraising and realisations are the trends to follow from here."
              : variant(data.ticker, 35, [
                  "Both should be read against the company's own history before they are compared with a peer median.",
                  "The trend in these returns matters more than a single year's level.",
                  "A peer median is a useful anchor, but the company's own trajectory is the better test.",
                ]),
      ),
    ],
  };

  const capexIntensity =
    lastAnnual?.capex != null && revenue && revenue > 0
      ? Math.abs(lastAnnual.capex) / revenue
      : null;
  const cashConversion =
    lastAnnual?.cfo != null &&
    lastAnnual?.netIncome != null &&
    lastAnnual.netIncome > 0
      ? lastAnnual.cfo / lastAnnual.netIncome
      : null;

  const cashBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        `Free cash flow over the trailing period was ${money(data.metrics.freeCashFlowTtm)}, ${percentArticle(fcfMargin)} margin. ${debtNote}${isBank ? " For a bank, cash flow is shaped by balance-sheet movements, so the margin is less comparable than it is for an industrial." : isInsurer ? " For an insurer, cash flow includes investment income and reserve movements, so the margin is not directly comparable to an industrial." : isAssetManager ? " For an asset manager, consolidated cash flow includes fund-level balances, so the margin is not directly comparable to an operating company." : ""}`,
        variant(data.ticker, 40, [
          `Capital expenditure was ${formatPercent(capexIntensity)} of revenue, so the free-cash-flow margin is the cash left for debt, acquisitions, buybacks or dividends.`,
          `With capital spending at ${formatPercent(capexIntensity)} of revenue, the remaining cash flow is what funds the balance sheet and shareholder returns.`,
          `Capex absorbed ${formatPercent(capexIntensity)} of revenue, leaving the rest of the cash flow available for debt, deals or distributions.`,
        ]),
      ),
      atLeast(
        `${
          archived
            ? "The final reported balance sheet is the one shown here; it will not update."
            : cashConversion != null
              ? `Operating cash flow was ${money(lastAnnual?.cfo)}, or ${formatPercent(cashConversion)} of net income.`
              : "Operating cash flow and net income are not both available on a comparable basis."
        } The company ${data.metrics.freeCashFlowTtm != null && data.metrics.freeCashFlowTtm > 0 ? "generated positive free cash flow" : "did not generate positive free cash flow"} on a trailing basis, and capital expenditure was ${money(Math.abs(lastAnnual?.capex ?? 0))} in the latest fiscal year.`,
        cashConversion == null
          ? variant(data.ticker, 41, [
              "The cash record is incomplete, which limits how far the earnings can be tested against cash.",
              "Without a clean cash-conversion figure, the free-cash-flow margin is the main cash evidence.",
            ])
          : cashConversion > 1.2
            ? variant(data.ticker, 42, [
                "Cash conversion above 100% means non-cash charges or working-capital releases are adding to the cash picture.",
                "The company is converting more than its reported profit into cash, a gap that usually comes from non-cash charges or working capital.",
              ])
            : cashConversion > 0.8
              ? variant(data.ticker, 43, [
                  "Cash conversion near 100% suggests reported profit is turning into cash without much slippage.",
                  "The near-parity between profit and operating cash flow is a sign of clean earnings.",
                ])
              : variant(data.ticker, 44, [
                  "Cash conversion below 100% points to working capital or non-cash items absorbing part of the profit.",
                  "Reported profit is running ahead of operating cash flow, which is a working-capital question until proven otherwise.",
                ]),
      ),
    ],
  };

  const earningsYield = pe != null && pe > 0 ? 1 / pe : null;

  const valuationBlock: StoryBlock = {
    paragraphs: [
      atLeast(
        `At the latest reference price the shares trade at ${multiple(pe, "trailing earnings")}, ${multiple(ev, "EV/EBITDA")} and ${multiple(data.metrics.evSales, "EV/sales")}. The free-cash-flow yield is ${formatPercent(data.metrics.fcfYield)}.${isBank ? " For a bank, price-to-book and P/E are more relevant than EV/EBITDA." : isInsurer ? " For an insurer, price-to-book and return on equity are more relevant than EV/EBITDA." : isAssetManager ? " For an asset manager, fee-related earnings and distributable earnings are more relevant than EV/EBITDA." : ""}`,
        earningsYield == null
          ? variant(data.ticker, 50, [
              "Without a meaningful earnings multiple, the cash-flow yield and the asset base carry more of the valuation work.",
              "Earnings are not a useful anchor here, so the free-cash-flow yield is the cleaner valuation reference.",
            ])
          : variant(data.ticker, 51, [
              `The trailing earnings yield is ${formatPercent(earningsYield)}, against a free-cash-flow yield of ${formatPercent(data.metrics.fcfYield)}.`,
              `Inverting the P/E gives an earnings yield of ${formatPercent(earningsYield)}; the cash-flow yield is ${formatPercent(data.metrics.fcfYield)}.`,
              `The ${formatPercent(earningsYield)} earnings yield and ${formatPercent(data.metrics.fcfYield)} free-cash-flow yield are the two return measures embedded in the price.`,
            ]),
      ),
      archived
        ? `The final consideration was ${archived.consideration}. The archived multiple is not a live valuation, and no current consensus target exists because the company no longer trades.`
        : atLeast(
            note?.valuation
              ? note.valuation
              : `The peer comparison sets the company against ${peerNames}; the multiple is a starting point for questions, not a verdict.`,
            variant(data.ticker, 52, [
              "What would justify a higher multiple is evidence that growth and returns are durable; what would break it is a slower growth rate or a lower margin on incremental revenue.",
              "A higher multiple needs proof that the current growth and margin can persist; a lower one follows from either fading.",
              "The multiple holds if growth and returns stay durable, and compresses if either one slips.",
            ]),
          ),
    ],
  };

  const estimateGrowth =
    estimateConsistent &&
    estimate?.revenueAvg != null &&
    revenue &&
    revenue > 0
      ? estimate.revenueAvg / revenue - 1
      : null;
  const estimateGrowthText =
    estimateGrowth != null
      ? estimateGrowth >= 0
        ? `growth of ${formatPercent(estimateGrowth)}`
        : `a decline of ${formatPercent(Math.abs(estimateGrowth))}`
      : estimate?.revenueGrowth != null
        ? estimate.revenueGrowth >= 0
          ? `growth of ${formatPercent(estimate.revenueGrowth)}`
          : `a decline of ${formatPercent(Math.abs(estimate.revenueGrowth))}`
        : null;

  const analystsBlock: StoryBlock = {
    paragraphs: [
      archived
        ? `A current analyst consensus is not available because ${name} no longer trades. The final transaction value is the relevant reference, and the archived estimates are shown only where the dataset retains them.`
        : atLeast(
            consensus
              ? `${analystCount ?? "A group of"} analysts contribute to the third-party consensus. The mean target is ${price(consensus.targetMean)}, with a range of ${price(consensus.targetLow)} to ${price(consensus.targetHigh)}.`
              : "A third-party analyst consensus snapshot is not available for this company in the current dataset. The valuation discussion therefore relies on reported multiples and company filings.",
            `The consensus is a snapshot of published views, not a Stockmonk forecast, and it can change without notice.`,
          ),
      archived
        ? `There is no current-year estimate to compare with the final reported year. The last reported revenue was ${money(revenue)} and the last reported operating margin was ${formatPercent(opMargin)}.`
        : atLeast(
            estimateSentence
              ? `${estimateSentence} The estimate revisions in the dataset are ${formatPercent(consensus?.revisions?.eps30d ?? null)} over 30 days and ${formatPercent(consensus?.revisions?.eps90d ?? null)} over 90 days.`
              : "When consensus is unavailable, the report does not invent a target or a rating. The reported financials remain the primary evidence.",
            estimateGrowthText
              ? variant(data.ticker, 60, [
                  `That implies ${estimateGrowthText} over the trailing twelve months.`,
                  `Set against trailing revenue, the estimate implies ${estimateGrowthText}.`,
                  `If met, the estimate would mean ${estimateGrowthText} from the current base.`,
                  `The estimate is consistent with ${estimateGrowthText} on the trailing revenue figure.`,
                ])
              : variant(data.ticker, 61, [
                  "Estimates frame expectations, but they are not a substitute for the reported cash flow and balance sheet.",
                  "The estimate is a forecast, not evidence; the reported cash flow remains the harder test.",
                  "Consensus numbers describe what analysts expect, not what the company has delivered.",
                  "Treat the estimate as a benchmark for the next filing rather than as a fact about the business.",
                ]),
          ),
    ],
  };

  const derivedRisk: RiskItem | null = note?.risk
    ? {
        title: "The main risk",
        severity: "High",
        detail: note.risk,
        watch:
          bucket.risks[0]?.watch ??
          "The evidence that would confirm or break the thesis.",
      }
    : !isBalanceSheetBusiness &&
        leverage != null &&
        leverage > 4 &&
        netDebt != null &&
        netDebt > 0
      ? {
          title: "Leverage",
          severity: "High",
          detail: `Net debt is ${money(netDebt)}, or ${formatMultiple(leverage)} EBITDA, which leaves the equity sensitive to refinancing costs and a slower cash flow.`,
          watch: "Leverage, interest cover and the maturity profile.",
        }
      : revenueGrowth != null && revenueGrowth < -0.05
        ? {
            title: "Revenue decline",
            severity: "High",
            detail: `Trailing revenue fell ${formatPercent(Math.abs(revenueGrowth))}, so the margin has to be defended on a shrinking base.`,
            watch: "Organic growth, retention and pricing.",
          }
        : opMargin != null && opMargin < 0
          ? {
              title: "Operating losses",
              severity: "High",
              detail: `The trailing operating margin is ${formatPercent(opMargin)}, which means the current cost base is not covered by revenue.`,
              watch: "Path to operating breakeven and cash runway.",
            }
          : pe != null &&
              pe > 45 &&
              (data.metrics.fcfYield == null || data.metrics.fcfYield < 0.02)
            ? {
                title: "Valuation",
                severity: "High",
                detail: `At ${formatMultiple(pe)} trailing earnings and ${percentArticle(data.metrics.fcfYield)} free-cash-flow yield, the price already assumes a long period of strong growth.`,
                watch: "Forward growth versus the current multiple.",
              }
            : null;

  const riskItems: RiskItem[] = bucket.risks.slice(0, 5).map((risk, index) => ({
    title: risk.title,
    severity: index < 2 ? "High" : "Medium",
    detail: risk.detail,
    watch: risk.watch,
  }));
  if (derivedRisk) {
    riskItems[0] = derivedRisk;
  }
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
    intro: note?.risk
      ? `The first risk is the one that matters most for the current thesis; the rest are the sector risks that would change the earnings path.`
      : archived
        ? `The risks below are the historical risks that mattered before the ${archived.acquirer} transaction, plus the limitation that the record is now closed. They are qualitative descriptors, not a rating.`
        : derivedRisk
          ? `The first risk is drawn from the current financial profile; the rest are the sector risks that would change the earnings path. They are qualitative descriptors, not a rating.`
          : `The risks below are the sector risks that matter most for this business. They are qualitative descriptors, not a rating.`,
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
  const factorEntries = [
    { label: "growth", value: factors.growth },
    { label: "profitability", value: factors.profitability },
    { label: "cash generation", value: factors.cash },
    { label: "balance sheet", value: factors.balance },
    { label: "valuation", value: factors.valuation },
  ].sort((a, b) => b.value - a.value);
  const strongestFactor = factorEntries[0];
  const weakestFactor = factorEntries[factorEntries.length - 1];
  const factorSpread = strongestFactor.value - weakestFactor.value;
  const factorNote =
    factorSpread > 40
      ? variant(data.ticker, 70, [
          `A ${strongestFactor.value}/100 ${strongestFactor.label} score against a ${weakestFactor.value}/100 ${weakestFactor.label} score is a different business from the reverse, so the spread carries more information than the average.`,
          `The average hides a strong ${strongestFactor.label} reading and a weak ${weakestFactor.label} one, which is why the spread is the more useful description.`,
          `The gap between ${strongestFactor.label} at ${strongestFactor.value}/100 and ${weakestFactor.label} at ${weakestFactor.value}/100 is wide enough that the composite is a balance, not a verdict.`,
        ])
      : variant(data.ticker, 71, [
          `The narrow range between ${strongestFactor.label} at ${strongestFactor.value}/100 and ${weakestFactor.label} at ${weakestFactor.value}/100 means the average is a fair summary.`,
          `With ${strongestFactor.label} and ${weakestFactor.label} only ${factorSpread} points apart, the composite is a reasonable one-line description.`,
          `The readings are close enough together that the average carries most of the information; ${strongestFactor.label} is the strongest at ${strongestFactor.value}/100.`,
        ]);

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
    : note
      ? (titleFromAngle(name, note.angle) ?? pick(titlePatterns, data.ticker, 0))
      : pick(titlePatterns, data.ticker, 0);

  const upside =
    target != null && data.latestPrice.close
      ? target / data.latestPrice.close - 1
      : null;

  const bottomObservation =
    fcfMargin != null && fcfMargin > 0.2
      ? variant(data.ticker, 77, [
          "The free-cash-flow margin is the strongest part of that record; the rest of the report tests whether it can be sustained.",
          "Cash generation is the standout number, which makes the durability of the margin the central question.",
          "The business converts an unusually large share of revenue into cash, and the multiple depends on that continuing.",
        ])
      : netDebt != null && netDebt > 0 && leverage != null && leverage > 3
        ? variant(data.ticker, 78, [
            `Net debt of ${money(netDebt)}, or ${formatMultiple(leverage)} EBITDA, is the constraint that shapes the equity story.`,
            `With leverage at ${formatMultiple(leverage)} EBITDA, the balance sheet is the first thing the cash flow has to service.`,
            `The ${formatMultiple(leverage)} EBITDA leverage means debt reduction competes with reinvestment for the cash flow.`,
          ])
        : variant(data.ticker, 79, [
            "The record is neither obviously cheap nor obviously expensive without a view on whether the current margin is repeatable.",
            "The numbers describe a business whose value depends on the next few years looking like the last few.",
            "Nothing in the record is extreme; the debate is about the durability of the current growth and margin.",
          ]);

  const bottomLine = {
    paragraphs: [
      atLeast(
        archived
          ? `${name} is an archived ${sectorLabel} company with ${money(revenue)} of final trailing revenue, ${percentArticle(opMargin)} operating margin and ${percentArticle(fcfMargin)} free-cash-flow margin. The ${archived.acquirer} transaction valued the equity at ${archived.consideration}.`
          : `${name} produced ${money(revenue)} of trailing revenue at ${percentArticle(opMargin)} operating margin and ${percentArticle(fcfMargin)} free-cash-flow margin. ${bottomObservation}`,
        variant(data.ticker, 72, [
          "The rest of the report separates the reported record from the market's expectation so the reader can see which part is evidence and which part is forecast.",
          "The figures above are reported; the multiple below is an expectation. Keeping the two apart is the point of the exercise.",
          "Reported results and market expectations answer different questions, and this report keeps them separate.",
        ]),
      ),
      atLeast(
        archived
          ? `There is no current price, target or rating to update. The archived factor percentiles are a historical description of the business at the point of the transaction.`
          : target != null
            ? (() => {
                const direction =
                  upside == null
                    ? "against the latest close"
                    : Math.abs(upside) < 0.005
                      ? "essentially at the latest close"
                      : `${formatPercent(Math.abs(upside))} ${upside > 0 ? "above" : "below"} the latest close`;
                const targetSentence = variant(data.ticker, 82, [
                  `The third-party consensus mean is ${price(target)} as of ${consensus?.asOf ?? "the latest snapshot"}, ${direction}.`,
                  `Analysts contributing to the third-party consensus carry a ${price(target)} mean target as of ${consensus?.asOf ?? "the latest snapshot"}, ${direction}.`,
                  `The published consensus mean is ${price(target)} (${consensus?.asOf ?? "latest snapshot"}), ${direction}.`,
                  `${analystCount ?? "The"} analysts in the third-party survey average ${price(target)} as of ${consensus?.asOf ?? "the latest snapshot"}, ${direction}.`,
                  `Third-party analysts put the mean target at ${price(target)} as of ${consensus?.asOf ?? "the latest snapshot"}, ${direction}.`,
                  `The consensus target is ${price(target)} as of ${consensus?.asOf ?? "the latest snapshot"}, ${direction}.`,
                ]);
                const targetDisclaimer = variant(data.ticker, 83, [
                  "that is the analysts' view, attributed and dated, not a Stockmonk target",
                  "this report does not publish a target of its own",
                  "the figure belongs to the analysts who published it, not to this report",
                  "it is a consensus view, not a recommendation from Stockmonk",
                  "the forecast is theirs, and this report does not adopt it as a target",
                  "it is included for attribution, not as a Stockmonk call",
                  "the number is third-party work, dated and attributed, not a Stockmonk price target",
                  "it should be read as the published consensus, not as this publication's view",
                ]);
                return `${targetSentence.replace(/\.$/, "")}; ${targetDisclaimer}.`;
              })()
            : variant(data.ticker, 74, [
                "No third-party target is available in the dataset, so the valuation rests on the reported multiples and the cash-flow yield rather than on a forecast.",
                "Without a consensus target, the multiples and the free-cash-flow yield are the only valuation references in the report.",
                "A third-party target is not carried in the dataset; the reported multiples are the valuation evidence.",
              ]),
        variant(data.ticker, 75, [
          "A single multiple is not a conclusion; it is a question about the durability of the underlying cash flow.",
          "The multiple is a starting point for the durability question, not an answer to it.",
          "Valuation only becomes a conclusion once the growth and returns behind it are tested.",
        ]),
      ),
      atLeast(
        `The factor percentiles put ${strongestFactor.label} at ${strongestFactor.value}/100 and ${weakestFactor.label} at ${weakestFactor.value}/100, with the composite averaging ${avgFactor}/100. ${factorNote}`,
        variant(data.ticker, 76, [
          "The percentile is a description of the current data, not a recommendation.",
          "These are descriptive scores built from the reported data, not a rating.",
          "The scores describe the current record; they do not prescribe an action.",
        ]),
      ),
    ],
    questions: bucket.questions,
  };

  const dek = archived
    ? `${name} last traded on ${formatDate(archived.lastTraded)} after the ${archived.acquirer} transaction. The report keeps the final SEC record, the deal terms and the factors that explained the business while it was public.`
    : note
      ? `${name} reported ${money(revenue)} of trailing revenue at ${percentArticle(opMargin)} operating margin, and this report tests whether the current growth, cash conversion and valuation are consistent with that record.`
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
      `Cash: ${money(data.metrics.freeCashFlowTtm)} free cash flow, ${percentArticle(fcfMargin)} margin, against ${netDebt == null ? "an undisclosed net debt position" : netDebt < 0 ? `${money(Math.abs(netDebt))} of net cash` : `${money(netDebt)} of net debt`}.`,
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
