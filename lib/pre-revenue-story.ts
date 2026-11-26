import type { StockStory } from "@/content/stocks/types";
import { ANALYST_NOTES } from "@/config/analyst-notes";
import { COMPANY_ANGLES } from "@/config/company-angles";
import { getCoverageGroup } from "@/config/coverage";
import type { ResearchBundle } from "./data";
import { BUCKETS, GROUP_BUCKET } from "./generated-story";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatPercent,
} from "./format";

function displayName(name: string): string {
  const trimmed = name.replace(/\s+/g, " ").trim();
  return trimmed.replace(/\b(Inc|Corp|Co|Ltd|Plc|Llc)$/i, "$1.");
}

function shortName(name: string): string {
  return displayName(name)
    .replace(
      /\b(Inc|Corp|Corporation|Co|Company|Ltd|Limited|Plc|Llc|Incorporated)\.?$/i,
      "",
    )
    .replace(/[,.]\s*$/, "")
    .trim();
}

function humanizeDates(text: string): string {
  return text
    .replace(/\b\d{4}-\d{2}-\d{2}\b/g, (date) => formatDate(date))
    .replace(/\b(Inc|Corp|Co|Ltd|Plc|Llc),?\.?\s+(?=[a-z])/g, "$1. ")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function lowerFirst(text: string): string {
  if (/^[A-Z]{2}/.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function upperFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const FINITE_VERB =
  /\b(is|are|was|were|has|have|had|can|could|would|will|may|might|depends|rests|comes|creates|protects|gives|drive|drives|hit|hits|rise|rises|fall|falls|compress|compresses|slow|slows|weigh|weighs|remain|remains|require|requires|reflect|reflects|explain|explains|determine|determines|decide|decides|support|supports|limit|limits|reduce|reduces)\b/i;

function asSentence(text: string, prefix: string): string {
  const clean = text.trim().replace(/\.$/, "");
  return FINITE_VERB.test(clean)
    ? `${clean}.`
    : `${prefix} ${lowerFirst(clean)}.`;
}

function bucketKeyFor(
  ticker: string,
  groupId: string | undefined,
  industry: string | undefined,
): string {
  const text = `${industry ?? ""}`.toLowerCase();
  if (ticker === "AMP") return "marketinfra";
  if (/^banks? -|^banks?$|regional bank/.test(text)) return "financial";
  if (/insurance brokers?/.test(text)) return "brokerage";
  if (/insurance|reinsurance/.test(text)) return "insurance";
  if (/asset management/.test(text)) return "assetmanager";
  if (groupId === "capital-markets") {
    return ticker === "AMP" ||
      /financial data|stock exchange|capital markets|broker/.test(text)
      ? "marketinfra"
      : "assetmanager";
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
    return /auto parts|auto manufacturers/.test(text)
      ? "autonomy"
      : "transport";
  }
  if (groupId === "internet-platforms") return "internet";
  return GROUP_BUCKET[groupId ?? ""] ?? "tech";
}

function runwayLabel(netCash: number | null, burn: number | null): string {
  if (netCash == null || burn == null || burn <= 0) {
    return "the balance sheet is the first constraint";
  }
  const years = netCash / burn;
  if (years < 1) return "less than a year";
  if (years < 2) return "about a year";
  return `${years.toFixed(1)} years`;
}

export function generatePreRevenueStory(bundle: ResearchBundle): StockStory {
  const { data, consensus } = bundle;
  const currency = data.currency ?? "USD";
  const price = (value: number | null | undefined) =>
    formatCurrency(value, 2, currency);
  const money = (value: number | null | undefined) =>
    formatCompactCurrency(value, currency);
  const group = getCoverageGroup(data.ticker);
  const bucketKey = bucketKeyFor(data.ticker, group?.id, data.industry);
  const bucket = BUCKETS[bucketKey] ?? BUCKETS.tech;
  const baseNote = COMPANY_ANGLES[data.ticker];
  const note = baseNote
    ? { ...baseNote, ...(ANALYST_NOTES[data.ticker] ?? {}) }
    : undefined;
  const name = displayName(data.name);
  const short = shortName(name);
  const stageLabel =
    bucketKey === "autonomy" ? "autonomy" : data.industry || data.sector;
  const revenue = data.metrics.revenueTtm;
  const fcf = data.metrics.freeCashFlowTtm;
  const netDebt = data.metrics.netDebt;
  const burn = fcf != null && fcf < 0 ? Math.abs(fcf) : null;
  const netCash = netDebt != null && netDebt < 0 ? Math.abs(netDebt) : null;
  const netDebtLine =
    netCash != null
      ? `${money(netCash)} of net cash`
      : netDebt != null
        ? `${money(netDebt)} of net debt`
        : "an undisclosed cash position";
  const runway = runwayLabel(netCash, burn);
  const catalyst = note?.catalyst
    ?.replace(/^The next catalyst is\s+/i, "")
    .replace(/^The catalyst is\s+/i, "")
    .replace(/\.$/, "");
  const catalystText = catalyst ? lowerFirst(catalyst) : "commercialisation";
  const risk = note?.risk?.replace(/\.$/, "");
  const moat = note?.moat?.replace(/\.$/, "");
  const moatSentence = moat ? asSentence(moat, "The edge is") : undefined;
  const riskSentence = risk ? asSentence(risk, "The main risk is") : undefined;
  const target = consensus?.targetMean ?? null;
  const analystCount = consensus?.analystCount ?? null;
  const priceNow = data.latestPrice.close;
  const rangePosition = bundle.rangePosition;
  const description =
    data.description && data.description.trim().length >= 70
      ? humanizeDates(data.description).split(/(?<=[.!?])\s+(?=[A-Z])/)[0]
      : `${short} is a development-stage ${stageLabel} company.`;
  const estimate = consensus?.estimates.find(
    (item) => item.period === "Current fiscal year",
  );
  const title = note?.catalyst
    ? `${short}: the cash runway behind ${lowerFirst(catalystText)}`
    : `${short}: a binary bet on ${lowerFirst(stageLabel)}`;
  const targetLine =
    target != null
      ? `${analystCount ?? "The"} analysts in the third-party consensus carry a mean target of ${price(
          target,
        )}, ${formatPercent(
          Math.abs(target / (priceNow ?? target) - 1),
        )} ${target >= (priceNow ?? target) ? "above" : "below"} the latest close. The range runs from ${price(
          consensus?.targetLow,
        )} to ${price(
          consensus?.targetHigh,
        )}. That is the published view, not a Stockmonk target.`
      : "No third-party consensus target is available.";
  const estimateLine = estimate
    ? `The current-year consensus looks for ${money(
        estimate.revenueAvg,
      )} of revenue and ${price(estimate.epsAvg)} of EPS.`
    : "";

  return {
    ticker: data.ticker,
    kicker: `${group?.name ?? data.sector} · ${data.industry || group?.shortName || "US equity"}`,
    title,
    dek: `${short} has no meaningful product revenue and burned ${money(
      burn,
    )} over the past year. The equity is an option on ${
      catalystText
    }, with ${netDebtLine} and ${runway} of runway.`,
    readingMinutes: 10,
    takeaways: [
      `Stage: development-stage ${stageLabel} company with ${
        revenue != null && revenue > 0
          ? `${money(revenue)} of revenue`
          : "no product revenue"
      }.`,
      `Cash: ${netDebtLine} against ${money(burn)} of annual burn.`,
      `Milestone: ${catalystText}.`,
      `Valuation: no meaningful earnings multiple; the equity is an option on the programme.`,
    ],
    narrativeSource: "auto-curated",
    narrativeUpdatedAt: new Date().toISOString().slice(0, 10),
    filingUrl:
      data.latest10KUrl ??
      "https://www.sec.gov/edgar/search/?action=getcompany",
    irUrl: data.website ?? "https://www.sec.gov/edgar/search/",
    bigPicture: {
      paragraphs: [
        `${description} ${short} burned ${money(
          burn,
        )} over the past year and carries ${netDebtLine}. ${upperFirst(runway)} of runway is the first thing to understand about the equity.`,
        `${note?.angle ?? ""} ${
          catalyst ? `The next milestone is ${catalystText}.` : ""
        } ${riskSentence ?? ""}`.trim(),
        `At ${price(priceNow)}, the equity is worth ${money(
          data.latestPrice.marketCap,
        )}. There is no meaningful earnings multiple; the market is valuing the programme rather than current cash flow.${
          rangePosition == null
            ? ""
            : ` The stock is ${Math.round(
                rangePosition * 100,
              )}% of the way up its 52-week range.`
        }`,
      ],
      quote:
        note?.angle ??
        `${short} is a pre-revenue company whose value depends on commercial milestones.`,
    },
    whatItDoes: {
      paragraphs: [
        `${short} is developing ${stageLabel} technology; revenue today is negligible. The current P&L is a development budget rather than a production economics story.`,
        `${moatSentence ?? "The edge is the technology and the partnerships behind it."} ${
          catalyst ? `The path to revenue runs through ${catalystText}.` : ""
        }`,
        `Cash burn and financing matter more than margins at this stage. ${netDebtLine} against ${money(
          burn,
        )} of annual burn gives ${runway} of runway.`,
      ],
      bullets: [
        {
          title: "Stage",
          detail: `Development-stage ${stageLabel} company with ${
            revenue != null && revenue > 0
              ? `${money(revenue)} of revenue`
              : "no product revenue"
          }.`,
        },
        {
          title: "Cash",
          detail: `${netDebtLine} against ${money(burn)} of annual burn.`,
        },
        {
          title: "Milestone",
          detail: `The next value inflection is ${catalystText}.`,
        },
      ],
    },
    howItMakesMoney: {
      paragraphs: [
        `There is no product revenue to analyse. The value comes from ${
          catalystText
        }, not from the current revenue line.`,
        `Until commercialisation, spending is an investment in the programme. R&D and development costs are the relevant cost lines, not a product gross margin.`,
        `The balance sheet and burn rate determine how much time the company has. ${netDebtLine} against ${money(
          burn,
        )} of annual burn gives ${runway}.`,
      ],
    },
    growth: {
      paragraphs: [
        `Revenue is not the right growth metric at this stage. The milestones are ${
          catalystText
        }, and the company needs to reach them before the cash runs out.`,
        `The equity is a binary option: success depends on hitting those milestones before the cash runs out. ${upperFirst(
          runway,
        )} of runway is the constraint, so financing is part of the thesis rather than a footnote.`,
      ],
      bullets: bucket.drivers.slice(0, 3).map((driver, index) => ({
        title: driver.title,
        detail: `${driver.detail} ${
          index === 0
            ? `The next milestone is ${catalystText}.`
            : index === 1
              ? `Cash burn is ${money(burn)} a year.`
              : `Net cash is ${netDebtLine}.`
        }`,
      })),
    },
    performance: {
      paragraphs: [
        `The company is pre-revenue. Operating loss and cash burn are the relevant performance measures, not margins or EPS; the current P&L should be read as a development budget.`,
        `Margins and ROIC are not meaningful before scale. The balance sheet and spending rate determine runway; ${netDebtLine} against ${money(
          burn,
        )} of annual burn gives ${runway}.`,
      ],
    },
    cash: {
      paragraphs: [
        `Cash burn was ${money(burn)}. ${netDebtLine}. ${upperFirst(
          runway,
        )} of runway is the binding constraint on the investment case, so financing is part of the thesis.`,
        `The financing risk is central: the company needs to reach the next milestone before it needs to raise again. ${
          riskSentence ?? ""
        } That makes dilution a live question, not a tail risk.`,
      ],
    },
    valuation: {
      paragraphs: [
        `There is no meaningful earnings multiple. At ${price(
          priceNow,
        )}, the equity is worth ${money(
          data.latestPrice.marketCap,
        )}; the market is valuing the programme rather than current profit.${
          rangePosition == null
            ? ""
            : ` The stock is ${Math.round(
                rangePosition * 100,
              )}% of the way up its 52-week range.`
        }`,
        `The valuation is an option on ${
          catalystText
        }. A re-rating needs milestone evidence, not a near-term earnings beat, and the cash runway sets the timetable.`,
      ],
    },
    analysts: {
      paragraphs: [
        targetLine,
        `${estimateLine} Consensus revenue and EPS estimates are not a useful anchor at this stage; the target is a milestone-based view, not an earnings forecast.`,
      ],
    },
    risks: {
      intro: `The thesis is binary: it depends on ${
        catalystText
      } and enough cash to get there.`,
      items: bucket.risks.slice(0, 5).map((item, index) => ({
        title: item.title,
        severity: index < 2 ? "High" : "Medium",
        detail: item.detail,
        watch: item.watch,
      })),
      watchlist: bucket.watch,
    },
    bottomLine: {
      paragraphs: [
        `The equity is an option on ${
          catalystText
        }. ${netDebtLine} against ${money(
          burn,
        )} of annual burn gives ${runway} of runway.`,
        `What would change the view is a commercial launch and a financing plan that funds the next phase. ${
          riskSentence ?? ""
        }`,
        `The scorecard is less useful before revenue; cash runway and milestone progress are the real tests.`,
      ],
      questions: bucket.questions.slice(0, 4),
    },
  };
}
