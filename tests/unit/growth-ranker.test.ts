import { describe, expect, it } from "vitest";
import { deflateRawSync } from "node:zlib";
import { thresholdInInr, convertInr } from "@/lib/growth-ranker/fx";
import {
  addYears,
  compoundAnnualGrowth,
  projectionPeriods,
  selectBaseYear,
} from "@/lib/growth-ranker/fiscal";
import { parseDelimitedText, parseXlsx } from "@/lib/growth-ranker/parse";
import {
  buildDeterministicForecast,
  buildAnalystForecast,
  extendConsensus,
  selectConsensus,
} from "@/lib/growth-ranker/forecast";
import { rankResults, resultsToCsv } from "@/lib/growth-ranker/rank";
import type {
  ConsensusYear,
  ForecastInput,
  ForecastResult,
  HistoryPoint,
} from "@/lib/growth-ranker/types";
import type { FinancialRow } from "@/lib/schemas";

function row(partial: Partial<FinancialRow> & { reportDate: string; revenue: number }): FinancialRow {
  const base = {
    period: "FY",
    fyear: Number(partial.reportDate.slice(0, 4)),
    publishDate: null,
    ttm: false,
    restated: false,
    grossProfit: null,
    operatingIncome: null,
    netIncome: null,
    epsDiluted: null,
    epsBasic: null,
    interestExpense: null,
    pretaxIncome: null,
    incomeTax: null,
    rnd: null,
    sga: null,
    cashAndInvestments: null,
    totalDebt: null,
    totalEquity: null,
    totalAssets: null,
    inventory: null,
    receivables: null,
    cfo: null,
    capex: null,
    freeCashFlow: null,
    da: null,
    sbc: null,
    dividendsPaid: null,
    buybacks: null,
    ebitda: null,
    grossMargin: null,
    operatingMargin: null,
    netMargin: null,
    fcfMargin: null,
    roic: null,
    netDebt: null,
    netDebtToEbitda: null,
    roe: null,
    ...partial,
  } as FinancialRow;
  return base;
}

const consensusThree: ConsensusYear[] = [
  { label: "FY2027", periodEnd: "2027-03-31", revenue: 1100, revenueHigh: null, revenueLow: null, analystCount: 5 },
  { label: "FY2028", periodEnd: "2028-03-31", revenue: 1210, revenueHigh: null, revenueLow: null, analystCount: 5 },
  { label: "FY2029", periodEnd: "2029-03-31", revenue: 1331, revenueHigh: null, revenueLow: null, analystCount: 5 },
];

function inputWith(historyGrowth: number): ForecastInput {
  const history: HistoryPoint[] = [2022, 2023, 2024, 2025, 2026].map((year, index) => ({
    label: `FY${year}`,
    periodEnd: `${year}-03-31`,
    revenue: 1000 / Math.pow(1 + historyGrowth, 4 - index),
    growth: index === 0 ? null : historyGrowth,
  }));
  return {
    ticker: "TEST",
    name: "Test Industries",
    sector: "Industrials",
    marketCap: { value: 50_000_000_000, currency: "INR", asOf: "2026-11-12", source: "test" },
    baseYear: {
      label: "FY2026",
      endDate: "2026-03-31",
      revenue: 1000,
      currency: "INR",
      unit: "INR",
    },
    history,
    segments: [{ name: "Consolidated revenue", revenue: 1000, share: 1 }],
    consensus: consensusThree,
    evidence: [],
  };
}

describe("growth ranker parsing", () => {
  it("parses csv with header and detects ticker/company columns", () => {
    const parsed = parseDelimitedText(
      "Ticker,Company Name,Market Cap\nKAYNES,Kaynes Technology,21934\nTCS,Tata Consultancy,1200000\n",
    );
    expect(parsed.headers).toEqual(["Ticker", "Company Name", "Market Cap"]);
    expect(parsed.mapping.ticker).toBe("Ticker");
    expect(parsed.mapping.name).toBe("Company Name");
    expect(parsed.mapping.marketCap).toBe("Market Cap");
    expect(parsed.rows).toHaveLength(2);
    expect(parsed.rows[0].values.Ticker).toBe("KAYNES");
  });

  it("parses a pasted one-ticker-per-line list", () => {
    const parsed = parseDelimitedText("KAYNES\nTCS\nPOLYCAB");
    expect(parsed.headers).toEqual(["Ticker"]);
    expect(parsed.mapping.ticker).toBe("Ticker");
    expect(parsed.mapping.name).toBe("Ticker");
    expect(parsed.rows.map((item) => item.values.Ticker)).toEqual([
      "KAYNES",
      "TCS",
      "POLYCAB",
    ]);
  });

  it("treats a single company-name column as a name source", () => {
    const parsed = parseDelimitedText("Company\nKaynes Technology\nAPL Apollo Tubes");
    expect(parsed.headers).toEqual(["Company"]);
    expect(parsed.mapping.name).toBe("Company");
    expect(parsed.mapping.ticker).toBeNull();
    expect(parsed.rows[0].values.Company).toBe("Kaynes Technology");
  });

  it("handles semicolons and quoted commas", () => {
    const parsed = parseDelimitedText('Symbol;Name\nKAYNES;"Kaynes, Technology"');
    expect(parsed.mapping.ticker).toBe("Symbol");
    expect(parsed.rows[0].values.Name).toBe("Kaynes, Technology");
  });

  it("parses the first worksheet of an xlsx file", () => {
    const sheet = `<?xml version="1.0"?><worksheet><sheetData>
      <row r="1"><c r="A1" t="inlineStr"><is><t>Ticker</t></is></c><c r="B1" t="inlineStr"><is><t>Company</t></is></c></row>
      <row r="2"><c r="A2" t="inlineStr"><is><t>KAYNES</t></is></c><c r="B2" t="inlineStr"><is><t>Kaynes Technology</t></is></c></row>
    </sheetData></worksheet>`;
    const buffer = makeZip({ "xl/worksheets/sheet1.xml": sheet });
    const parsed = parseXlsx(buffer);
    expect(parsed.mapping.ticker).toBe("Ticker");
    expect(parsed.rows[0].values.Ticker).toBe("KAYNES");
  });
});

function makeZip(files: Record<string, string>): Buffer {
  const locals: Buffer[] = [];
  const central: Buffer[] = [];
  let offset = 0;
  for (const [name, content] of Object.entries(files)) {
    const raw = Buffer.from(content);
    const compressed = deflateRawSync(raw);
    const nameBuffer = Buffer.from(name);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(8, 8);
    local.writeUInt32LE(compressed.length, 18);
    local.writeUInt32LE(raw.length, 22);
    local.writeUInt16LE(nameBuffer.length, 26);
    locals.push(local, nameBuffer, compressed);

    const header = Buffer.alloc(46);
    header.writeUInt32LE(0x02014b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(20, 6);
    header.writeUInt16LE(8, 10);
    header.writeUInt32LE(compressed.length, 20);
    header.writeUInt32LE(raw.length, 24);
    header.writeUInt16LE(nameBuffer.length, 28);
    header.writeUInt32LE(offset, 42);
    central.push(header, nameBuffer);
    offset += 30 + nameBuffer.length + compressed.length;
  }
  const directory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(Object.keys(files).length, 8);
  end.writeUInt16LE(Object.keys(files).length, 10);
  end.writeUInt32LE(directory.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, directory, end]);
}

describe("fiscal year selection", () => {
  it("uses the last completed fiscal year and ignores future and TTM rows", () => {
    const selection = selectBaseYear(
      [
        row({ reportDate: "2024-03-31", revenue: 800 }),
        row({ reportDate: "2025-03-31", revenue: 900 }),
        row({ reportDate: "2026-03-31", revenue: 1000 }),
        row({ reportDate: "2027-03-31", revenue: 1100 }),
        row({ reportDate: "2026-06-30", revenue: 1050, ttm: true }),
      ],
      "2026-11-12",
    );
    expect(selection?.label).toBe("FY2026");
    expect(selection?.row.revenue).toBe(1000);
    expect(selection?.history).toHaveLength(3);
  });

  it("handles non-calendar and leap-year fiscal ends", () => {
    expect(addYears("2024-02-29", 1)).toBe("2025-02-28");
    expect(projectionPeriods("2026-03-31", 3).map((item) => item.label)).toEqual([
      "FY2027",
      "FY2028",
      "FY2029",
    ]);
  });

  it("computes CAGR from base and final revenue only", () => {
    expect(compoundAnnualGrowth(1000, 1331, 3)).toBeCloseTo(0.1, 6);
    expect(compoundAnnualGrowth(0, 1331, 3)).toBeNull();
  });
});

describe("market-cap threshold conversion", () => {
  it("converts crore and USD million using the configured rate", () => {
    expect(thresholdInInr(1000, "INR_CRORE", 88)).toBe(10_000_000_000);
    expect(thresholdInInr(100, "USD_MILLION", 88)).toBe(8_800_000_000);
    expect(convertInr(8_800_000_000, "USD_MILLION", 88)).toBeCloseTo(100);
  });
});

describe("estimate selection", () => {
  it("uses consensus when all three years have enough analysts", () => {
    const selection = selectConsensus(consensusThree, 2026, 3);
    expect(selection.method).toBe("CONSENSUS");
    expect(selection.byYear.size).toBe(3);
  });

  it("extends when consensus is partial or thin", () => {
    const partial = consensusThree.slice(0, 2);
    expect(selectConsensus(partial, 2026, 3).method).toBe(
      "CONSENSUS_PLUS_ANALYST_EXTENSION",
    );
    const thin = consensusThree.map((year) => ({ ...year, analystCount: 2 }));
    expect(selectConsensus(thin, 2026, 3).method).toBe(
      "CONSENSUS_PLUS_ANALYST_EXTENSION",
    );
  });

  it("requires a bespoke model when no consensus exists", () => {
    expect(selectConsensus([], 2026, 3).method).toBe("ANALYST_MODEL");
  });

  it("extends FY+3 from forward-implied growth, not history", () => {
    const selection = selectConsensus(consensusThree.slice(0, 2), 2026, 3);
    const extended = extendConsensus(
      1000,
      selection,
      projectionPeriods("2026-03-31", 3),
    );
    expect(extended.get(1)?.value).toBe(1100);
    expect(extended.get(2)?.value).toBe(1210);
    expect(extended.get(3)?.value).toBeCloseTo(1210 * (1 + 0.1 * 0.85), 6);
  });

  it("produces identical projections regardless of historical growth", () => {
    const fast = buildDeterministicForecast(inputWith(0.4), 3, 0.1);
    const flat = buildDeterministicForecast(inputWith(0), 3, 0.1);
    expect(fast.ok).toBe(true);
    expect(flat.ok).toBe(true);
    if (!fast.ok || !flat.ok) return;
    expect(fast.result.projections.FY1.base).toBe(flat.result.projections.FY1.base);
    expect(fast.result.projections.FY3.base).toBe(flat.result.projections.FY3.base);
    expect(fast.result.cagr_3y.base).toBe(flat.result.cagr_3y.base);
  });

  it("builds a valid consensus result and CAGR", () => {
    const built = buildDeterministicForecast(inputWith(0.2), 3, 0.1);
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.result.method).toBe("CONSENSUS");
    expect(built.result.projections.FY3.base).toBe(1331);
    expect(built.result.cagr_3y.base).toBeCloseTo(0.1, 4);
    expect(built.result.projections.FY1.bear).toBeLessThan(
      built.result.projections.FY1.base,
    );
    expect(built.result.projections.FY1.bull).toBeGreaterThan(
      built.result.projections.FY1.base,
    );
  });

  it("skips companies with no consensus and no model", () => {
    expect(buildDeterministicForecast({ ...inputWith(0.2), consensus: [] }, 3, 0.1)).toEqual({
      ok: false,
      reason: "NO_CONSENSUS",
    });
  });

  it("builds a bespoke result and flags divergence from consensus", () => {
    const bespoke = buildAnalystForecast(
      inputWith(0.2),
      {
        projections: { base: [1200, 1450, 1750], bear: [1100, 1300, 1500], bull: [1300, 1600, 2000] },
        assumptions: ["Capacity commissioning", "Order-book conversion"],
        risks: ["Execution risk", "Demand risk"],
        note: "Higher than consensus because of new capacity.",
      },
      0.1,
    );
    expect(bespoke?.method).toBe("ANALYST_MODEL");
    expect(bespoke?.consensus.flagged).toBe(true);
    expect(bespoke?.consensus.baseDifferencePct).toBeGreaterThan(0.1);
  });
});

describe("ranking and export", () => {
  const make = (ticker: string, cagr: number): ForecastResult => {
    const built = buildDeterministicForecast(
      {
        ...inputWith(0.2),
        ticker,
        consensus: [
          { ...consensusThree[0], revenue: 1000 * (1 + cagr) },
          { ...consensusThree[1], revenue: 1000 * Math.pow(1 + cagr, 2) },
          { ...consensusThree[2], revenue: 1000 * Math.pow(1 + cagr, 3) },
        ],
      },
      3,
      0.1,
    );
    if (!built.ok) throw new Error("fixture failed");
    return built.result;
  };

  it("ranks by forward CAGR only and exports CSV", () => {
    const rows = rankResults([make("SLOW", 0.05), make("FAST", 0.25)]);
    expect(rows[0].ticker).toBe("FAST");
    expect(rows[0].rank).toBe(1);
    const csv = resultsToCsv(rows, 88);
    expect(csv.split("\n")[0]).toContain("cagr_base");
    expect(csv).toContain("FAST");
  });
});
