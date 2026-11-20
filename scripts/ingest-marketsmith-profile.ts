/**
 * Builds a MarketSmith India company profile for one ticker.
 *
 * The evaluation page is a template; data comes from the public guest gateway.
 * The extractor resolves the instrument, then pulls key stats, earnings, full
 * statements (consolidated first, standalone fallback), ratios, ownership,
 * surveillance flags and a one-year price series.
 *
 * Run: pnpm ingest:marketsmith --ticker=TIPSMUSIC
 *      MS_TICKERS=TIPSMUSIC,RELIANCE pnpm ingest:marketsmith
 *
 * Written permission from MarketSmith India is required before republishing
 * this data (see CLAUDE.md).
 */
import fs from "node:fs";
import path from "node:path";
import {
  marketsmithProfileSchema,
  profileTableSchema,
  type ProfileTable,
} from "../lib/schemas";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";
const BASE = "https://marketsmithindia.com";
const GATEWAY = `${BASE}/gateway/simple-api/ms-india/`;
const OUT_DIR = path.join(process.cwd(), "data", "india", "profiles");
const DELAY_MS = Number(process.env.MS_DELAY_MS ?? "400");

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function cliTickers(): string[] {
  const arg = process.argv.find((value) => value.startsWith("--ticker="));
  if (arg) return [arg.split("=")[1].toUpperCase()];
  const env = process.env.MS_TICKERS;
  if (env) return env.split(",").map((value) => value.trim().toUpperCase()).filter(Boolean);
  return [];
}

type Session = { cookie: string; auth: string };

async function openSession(symbol: string): Promise<Session> {
  const response = await fetch(`${BASE}/mstool/eval/${symbol.toLowerCase()}/evaluation.jsp`, {
    headers: { "User-Agent": UA },
  });
  const cookies = response.headers.getSetCookie?.() ?? [];
  const cookie = cookies.map((value) => value.split(";")[0]).join("; ");
  const auth =
    cookies
      .map((value) => value.split(";")[0])
      .find((value) => value.startsWith("MSSESSIONID="))
      ?.split("=")[1] ?? "";
  if (!auth) throw new Error("MarketSmith guest session unavailable");
  return { cookie, auth };
}

async function api(session: Session, apiPath: string): Promise<Record<string, unknown>> {
  const separator = apiPath.includes("?") ? "&" : "?";
  const response = await fetch(
    `${GATEWAY}${apiPath}${separator}ms-auth=${encodeURIComponent(session.auth)}`,
    {
      headers: {
        "User-Agent": UA,
        Cookie: session.cookie,
        Accept: "application/json",
      },
    },
  );
  if (!response.ok) throw new Error(`${apiPath} -> HTTP ${response.status}`);
  const json = (await response.json()) as { response?: Record<string, unknown> };
  return (json.response ?? json) as Record<string, unknown>;
}

function formatNumber(value: unknown, digits = 2): string {
  if (value == null || value === "" || value === "-") return "—";
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value);
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  });
}

function inrCr(value: unknown): string {
  const number = Number(value);
  if (!Number.isFinite(number)) return "—";
  return `₹${(number / 10_000_000).toLocaleString("en-IN", { maximumFractionDigits: 0 })} Cr`;
}

function percent(value: unknown, digits = 1): string {
  const number = Number(value);
  if (!Number.isFinite(number)) return "—";
  return `${number.toFixed(digits)}%`;
}

type Header = { id: string; displayName: string; isHeading?: string | number };

/**
 * MarketSmith returns statements with one row per year and one column per
 * line item. Flip that so metrics are rows and periods are columns.
 */
function transposeTable(
  header: Header[] | undefined,
  data: unknown[] | undefined,
): ProfileTable {
  if (!header?.length || !data?.length) return { headers: [], rows: [] };
  const columns = header.filter((column) => column.displayName);
  const periods = (data as Array<Record<string, unknown>>).map((row) =>
    String(row[columns[0]?.id] ?? "—"),
  );
  const rows: string[][] = [];
  for (const column of columns.slice(1)) {
    const values = (data as Array<Record<string, unknown>>).map((row) => {
      const raw = row[column.id];
      if (raw == null || raw === "") return "—";
      return String(raw);
    });
    if (values.every((value) => value === "0" || value === "0.00" || value === "—")) {
      continue;
    }
    rows.push([column.displayName.trim(), ...values]);
  }
  return profileTableSchema.parse({ headers: ["Metric", ...periods], rows });
}

function topFlags(results: Record<string, unknown> | null | undefined): Record<string, number> {
  const red: Record<string, number> = {};
  for (const [key, value] of Object.entries(results ?? {})) {
    const number = Number(value);
    if (Number.isFinite(number) && number !== 0) red[key] = number;
  }
  return red;
}

async function buildProfile(ticker: string) {
  const session = await openSession(ticker);
  const search = await api(
    session,
    `instr/srch.json?text=${encodeURIComponent(ticker)}&lang=en&ver=2`,
  );
  const results = search.results as Array<Record<string, unknown>> | undefined;
  const instrument = results?.find(
    (item) => String(item.symbol).toUpperCase() === ticker,
  ) ?? results?.[0];
  if (!instrument) throw new Error(`MarketSmith instrument not found for ${ticker}`);

  const instrumentId = Number(instrument.instrumentId);
  const symbol = String(instrument.symbol);
  const today = new Date();
  const dateTo = today.toISOString().slice(0, 10).replaceAll("-", "");
  const dateFrom5y = `${today.getUTCFullYear() - 5}${dateTo.slice(4)}`;
  const dateFrom1y = `${today.getUTCFullYear() - 1}${dateTo.slice(4)}`;

  await sleep(DELAY_MS);
  const details = await api(
    session,
    `instr/0/${instrumentId}/symboldetails.json?s=${dateFrom5y}&e=${dateTo}&text=${symbol}&lang=en&isConsolidated=1`,
  );

  await sleep(DELAY_MS);
  const financeConsolidated = await api(
    session,
    `instr/0/${instrumentId}/financeDetails.json?isConsolidated=true`,
  );
  const hasConsolidated = Array.isArray(financeConsolidated.incAnnualData) &&
    (financeConsolidated.incAnnualData as unknown[]).length > 0;
  const finance = hasConsolidated
    ? financeConsolidated
    : await api(session, `instr/0/${instrumentId}/financeDetails.json?isConsolidated=false`);
  const basis: "consolidated" | "standalone" = hasConsolidated
    ? "consolidated"
    : "standalone";

  await sleep(DELAY_MS);
  const redFlags = await api(session, `instr/${instrumentId}/getRedFlags.json`);
  await sleep(DELAY_MS);
  const greenFlags = await api(session, `instr/${instrumentId}/getGreenFlags.json`);
  await sleep(DELAY_MS);
  const chart = await api(
    session,
    `instr/0/${instrumentId}/details.json?symbol=${symbol}&p=0&s=${dateFrom1y}&e=${dateTo}`,
  );
  await sleep(DELAY_MS);
  const quote = (await api(
    session,
    `instr/0/${instrumentId}/eHeaderDetails.json?p=0&s=${dateFrom1y}&e=${dateTo}&b=0IBOMSEN&ie=0&iq=0`,
  ).catch(() => ({}))) as Record<string, unknown>;
  const quoteHeader = (quote.headerDetails ?? {}) as Record<string, unknown>;

  const header = (details.detailsGeneralInformationHeader ?? {}) as Record<string, unknown>;
  const block = (details.detailsGeneralInformationHeaderBlock ?? {}) as Record<string, unknown>;
  const earningsBlock = (details.detailsFundamentalEarningsBlock ?? {}) as Record<string, unknown>;
  const quarterly = (details.quarterlySalesAndEarningsInternational ?? {}) as Record<string, unknown>;

  const annualRows = (earningsBlock.detailsEarningsBlock ?? []) as Array<Record<string, unknown>>;
  const quarterlyRows = (quarterly.quarterlySalesAndEarningsOrigin ?? []) as Array<
    Record<string, unknown>
  >;
  const latestQuarter = quarterlyRows[0];

  const chartPrices = ((chart.chart as Record<string, unknown> | undefined)?.prices ??
    []) as Array<Record<string, unknown>>;
  const priceSeries = chartPrices
    .map((point) => ({
      d: new Date(Number(point.priceDate)).toISOString().slice(0, 10),
      c: Number(point.close),
    }))
    .filter((point) => Number.isFinite(point.c))
    .sort((a, b) => a.d.localeCompare(b.d));

  const priceValue =
    Number(header.currentPrice) ||
    priceSeries.at(-1)?.c ||
    null;
  const previous = Number(header.prevPrice);
  const changePct =
    priceValue != null && Number.isFinite(previous) && previous > 0
      ? ((priceValue - previous) / previous) * 100
      : null;
  const week52High = priceSeries.length
    ? Math.max(...priceSeries.map((point) => point.c))
    : null;
  const week52Low = priceSeries.length
    ? Math.min(...priceSeries.map((point) => point.c))
    : null;

  const stats: Array<{ label: string; value: string }> = [
    { label: "Market capitalization", value: inrCr(header.marketCap) },
    { label: "Sales", value: inrCr(header.sales) },
    { label: "Shares in float", value: formatNumber(header.sharesInFloat, 0) },
    { label: "No. of funds", value: formatNumber(latestQuarter?.noOfFunds, 0) },
    {
      label: "Shares held by funds",
      value: formatNumber(latestQuarter?.totSharesHeldByFunds, 0),
    },
    { label: "Dividend yield", value: percent(block.yield, 2) },
    { label: "Book value", value: formatNumber(block.bookVal) },
    { label: "U/D vol ratio", value: formatNumber(block.upDownVol, 1) },
    {
      label: "LTDebt / equity",
      value: block.debt == null ? "—" : percent(block.debt, 1),
    },
    { label: "Alpha", value: formatNumber(block.alpha) },
    { label: "Beta", value: formatNumber(block.beta) },
    { label: "EPS growth rate", value: percent(block.epsGrowthRate, 0) },
    { label: "P/E ratio", value: formatNumber(header.pe) },
    {
      label: "5-year P/E range",
      value:
        block.pe5YearLow == null || block.pe5YearHigh == null
          ? "—"
          : `${formatNumber(block.pe5YearLow)}–${formatNumber(block.pe5YearHigh)}`,
    },
    { label: "Return on equity", value: percent(header.roe, 1) },
    { label: "Cash flow (INR)", value: formatNumber(block.cashFlow) },
    { label: "Volume", value: formatNumber(quoteHeader.mTvVolume, 0) },
    { label: "Avg volume (50d)", value: formatNumber(quoteHeader.mTvAvol, 0) },
    { label: "Master score", value: formatNumber(header.masterScore, 0) },
    { label: "EPS rating", value: formatNumber(header.epsRank, 0) },
    { label: "Price strength", value: formatNumber(header.rsNumericGrade, 0) },
    { label: "Group rank", value: formatNumber(header.industryGroupRank, 0) },
    { label: "Acc/Dis rating", value: String(header.accDisRating ?? "—") },
  ];

  const earningsAnnual = profileTableSchema.parse({
    headers: ["Year", "EPS (₹)", "Sales (₹ Cr)", "Price high", "Price low"],
    rows: annualRows.map((row) => [
      String(row.yearFiscal ?? "—"),
      formatNumber(row.eps),
      formatNumber(Number(row.sales) / 10_000_000, 0),
      formatNumber(row.priceHigh),
      formatNumber(row.priceLow),
    ]),
  });

  const earningsQuarterly = profileTableSchema.parse({
    headers: [
      "Quarter",
      "EPS (₹)",
      "EPS growth %",
      "Sales (₹ Cr)",
      "Sales growth %",
      "Funds",
      "Shares held by funds",
    ],
    rows: quarterlyRows.map((row) => [
      String(row.prdYear ?? "—"),
      formatNumber(row.eps),
      formatNumber(row.epsPct, 0),
      formatNumber(row.sales, 1),
      formatNumber(row.salesPct, 0),
      formatNumber(row.noOfFunds, 0),
      formatNumber(row.totSharesHeldByFunds, 0),
    ]),
  });

  const ratiosAnnual = transposeTable(
    finance.ratiosAnnualHeader as Header[] | undefined,
    finance.ratiosAnnualData as unknown[] | undefined,
  );
  const ratiosQuarter = transposeTable(
    finance.ratiosQuarterHeader as Header[] | undefined,
    finance.ratiosQuarterData as unknown[] | undefined,
  );

  const series = {
    price: priceSeries,
    sales: annualRows
      .map((row) => ({
        label: String(row.yearFiscal ?? ""),
        value: Number(row.sales) / 10_000_000,
      }))
      .filter((point) => point.label && Number.isFinite(point.value))
      .reverse(),
    eps: annualRows
      .map((row) => ({ label: String(row.yearFiscal ?? ""), value: Number(row.eps) }))
      .filter((point) => point.label && Number.isFinite(point.value))
      .reverse(),
    margins: [] as Array<{ label: string; ebit: number | null; net: number | null }>,
  };

  const ebitRow = ratiosAnnual.rows.find((row) =>
    row[0]?.toLowerCase().includes("ebit margin"),
  );
  const netRow = ratiosAnnual.rows.find((row) =>
    row[0]?.toLowerCase().includes("after tax margin"),
  );
  if (ebitRow && netRow) {
    series.margins = ratiosAnnual.headers
      .slice(1)
      .map((label, index) => ({
        label,
        ebit: Number(ebitRow[index + 1]) / 100 || null,
        net: Number(netRow[index + 1]) / 100 || null,
      }))
      .reverse();
  }

  const ownershipModel = (finance.shareholdingPatternModel ?? []) as Array<Record<string, unknown>>;
  const ownershipHistory = (finance.shareholdingLatestFourQuaterPatternModel ?? []) as Array<
    Record<string, unknown>
  >;
  const topOwners = (finance.topOwnwerInfoModel ?? []) as Array<Record<string, unknown>>;

  const profile = marketsmithProfileSchema.parse({
    ticker,
    symbol,
    instrumentId,
    name: String(header.companyName ?? instrument.name ?? ticker),
    industry: String(header.industryName ?? instrument.industryName ?? "—"),
    about: String(header.formattedDescription ?? "").trim(),
    website: block.webURl ? String(block.webURl).trim() : null,
    location: block.countryName ? String(block.countryName).trim() : null,
    exchange: header.exchangeCode ? String(header.exchangeCode) : null,
    fetchedAt: new Date().toISOString(),
    basis,
    price: {
      value: priceValue,
      changePct,
      week52High,
      week52Low,
    },
    stats,
    earningsAnnual,
    earningsQuarterly,
    incomeAnnual: transposeTable(
      finance.incAnnualHeader as Header[] | undefined,
      finance.incAnnualData as unknown[] | undefined,
    ),
    incomeQuarter: transposeTable(
      finance.incQuarterHeader as Header[] | undefined,
      finance.incQuarterData as unknown[] | undefined,
    ),
    balanceSheet: transposeTable(
      finance.bsHeader as Header[] | undefined,
      finance.bsData as unknown[] | undefined,
    ),
    cashFlow: transposeTable(
      finance.cfHeader as Header[] | undefined,
      finance.cfData as unknown[] | undefined,
    ),
    ratiosAnnual,
    ratiosQuarter,
    ownership: {
      current: ownershipModel.map((row) => ({
        name: String(row.headder ?? "—"),
        percent: Number(row.percentageSCRR ?? 0),
      })),
      history: ownershipHistory.map((row) => ({
        name: String(row.name ?? "—"),
        value: Number(row.value ?? 0),
        month: String(row.month ?? ""),
      })),
      top: topOwners.map((row) => ({
        name: String(row.shareholderDescription ?? "—"),
        holding: Number(row.holding ?? 0),
        date: row.holdingDate ? String(row.holdingDate) : null,
      })),
    },
    surveillance: {
      red: topFlags(redFlags.results as Record<string, unknown> | undefined),
      green: ((greenFlags.list ?? []) as Array<Record<string, unknown>>).map((item) =>
        String(item.description ?? item.name ?? item.headline ?? JSON.stringify(item)),
      ),
    },
    series,
  });

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, `${ticker}.json`),
    JSON.stringify(profile, null, 2),
  );
  console.log(
    `[marketsmith] ${ticker}: ${profile.name} · ${profile.industry} · ${profile.basis} · ` +
      `${profile.earningsAnnual.rows.length} annual · ${profile.earningsQuarterly.rows.length} quarters · ` +
      `${profile.incomeAnnual.rows.length} income rows · ${profile.series.price.length} prices`,
  );
  return profile;
}

async function main() {
  const tickers = cliTickers();
  if (!tickers.length) {
    console.error("Usage: pnpm ingest:marketsmith --ticker=TIPSMUSIC");
    process.exit(1);
  }
  for (const ticker of tickers) {
    try {
      await buildProfile(ticker);
    } catch (error) {
      console.error(`[marketsmith] ${ticker} failed: ${String(error)}`);
    }
    await sleep(DELAY_MS);
  }
}

main();
