import { StockLogoStatic } from "@/components/stock-logo-static";
import {
  formatCompactCurrency,
  formatMultiple,
  formatPercent,
} from "@/lib/format";
import {
  formatParameterValue,
  type FactorConfig,
  type ParameterResult,
  type ScreenerRow,
} from "@/lib/screener-model";

type ScreenerParams = {
  q: string;
  group: string;
  min: number;
  view: "overview" | FactorConfig["key"];
  sort: string;
  dir: "asc" | "desc";
  page: number;
  open: string;
};

function scoreClass(score: number | null): string {
  if (score == null) return "text-muted";
  if (score >= 80) return "text-positive";
  if (score >= 65) return "text-brand";
  if (score >= 50) return "text-ink-soft";
  if (score >= 35) return "text-caution";
  return "text-danger";
}

function Score({ score }: { score: number | null }) {
  if (score == null) return <span className="text-[10px] text-faint">—</span>;
  return (
    <span className={`tabular text-[11px] font-semibold ${scoreClass(score)}`}>
      {score}
    </span>
  );
}

function ParameterValue({
  result,
  unit,
}: {
  result: ParameterResult;
  unit: FactorConfig["parameters"][number]["unit"];
}) {
  return (
    <span className="block">
      <span className="tabular block text-[10.5px] text-ink">
        {formatParameterValue(result.value, unit)}
      </span>
      <span className={`tabular block text-[9px] ${scoreClass(result.score)}`}>
        {result.score == null ? "—" : `${result.score}th`}
      </span>
    </span>
  );
}

export function ScreenerTable({
  rows,
  factors,
  params,
}: {
  rows: ScreenerRow[];
  factors: FactorConfig[];
  params: ScreenerParams;
}) {
  const activeFactor =
    params.view === "overview"
      ? null
      : factors.find((factor) => factor.key === params.view) ?? factors[0];
  const view = activeFactor?.key ?? "overview";
  const pageSize = 50;

  const href = (overrides: Partial<ScreenerParams>) => {
    const next = { ...params, ...overrides };
    const search = new URLSearchParams();
    if (next.q) search.set("q", next.q);
    if (next.group) search.set("group", next.group);
    if (next.min) search.set("min", String(next.min));
    if (next.view !== "overview") search.set("view", next.view);
    if (next.sort) search.set("sort", next.sort);
    if (next.dir !== "desc") search.set("dir", next.dir);
    if (next.page > 1) search.set("page", String(next.page));
    if (next.open) search.set("open", next.open);
    const query = search.toString();
    return query ? `/screener?${query}` : "/screener";
  };

  const groups = [...new Set(rows.map((row) => row.group))].sort();
  const term = params.q.trim().toLowerCase();
  const filtered = rows.filter((row) => {
    if (params.group && row.group !== params.group) return false;
    if (params.min && (row.composite ?? 0) < params.min) return false;
    if (!term) return true;
    return `${row.ticker} ${row.name} ${row.group} ${row.sector}`
      .toLowerCase()
      .includes(term);
  });

  const valueFor = (row: ScreenerRow): number | string | null => {
    if (params.sort === "rank") return row.rank;
    if (params.sort === "name") return row.name;
    if (params.sort === "group") return row.group;
    if (params.sort === "marketCap") return row.marketCap;
    if (params.sort === "return1y") return row.return1y;
    if (params.sort === "pe") return row.pe;
    if (params.sort === "pb") return row.pb;
    if (params.sort === "roce") return row.roce;
    if (params.sort === "roe") return row.roe;
    if (params.sort.startsWith("factor:")) {
      const [, factorKey, parameterKey] = params.sort.split(":");
      if (!factorKey) return null;
      const factor = row.factors[factorKey as FactorConfig["key"]];
      return parameterKey
        ? factor?.parameters[parameterKey]?.score ?? null
        : factor?.score ?? null;
    }
    return row.factors[params.sort as FactorConfig["key"]]?.score ?? null;
  };

  const sorted = [...filtered].sort((a, b) => {
    const av = valueFor(a);
    const bv = valueFor(b);
    if (typeof av === "string" || typeof bv === "string") {
      const compare = String(av ?? "").localeCompare(String(bv ?? ""));
      return params.dir === "asc" ? compare : -compare;
    }
    const compare = (av ?? -Infinity) - (bv ?? -Infinity);
    return params.dir === "asc" ? compare : -compare;
  });
  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const currentPage = Math.min(params.page, pageCount);
  const visible = sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const openRow = params.open ? rows.find((row) => row.ticker === params.open) : null;

  const sortHref = (key: string) => {
    const nextDir = params.sort === key && params.dir === "desc" ? "asc" : "desc";
    return href({ sort: key, dir: nextDir, page: 1 });
  };

  const SortHead = ({
    label,
    sortKey,
    align = "left",
  }: {
    label: string;
    sortKey: string;
    align?: "left" | "right" | "center";
  }) => (
    <th
      scope="col"
      className={`whitespace-nowrap px-2 py-2 text-[9px] font-bold uppercase tracking-[0.08em] ${
        align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left"
      }`}
    >
      <a
        href={sortHref(sortKey)}
        className={params.sort === sortKey ? "text-ink" : "text-muted hover:text-ink"}
      >
        {label}
        {params.sort === sortKey ? (params.dir === "desc" ? " ↓" : " ↑") : ""}
      </a>
    </th>
  );

  return (
    <div>
      <form method="get" action="/screener" className="rounded-xl border border-line bg-surface p-3">
        {view !== "overview" && <input type="hidden" name="view" value={view} />}
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-lg border border-line bg-paper px-3">
            <span className="sr-only">Search companies</span>
            <input
              name="q"
              defaultValue={params.q}
              placeholder="Search ticker, name or sector…"
              className="min-w-0 flex-1 bg-transparent text-[12.5px] text-ink outline-none placeholder:text-faint"
            />
          </label>
          <label className="flex h-10 items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 text-[11.5px] text-muted">
            <span className="sr-only">Filter by group</span>
            <select
              name="group"
              defaultValue={params.group}
              aria-label="Filter by sector"
              className="max-w-[170px] bg-transparent text-[11.5px] font-medium text-ink outline-none"
            >
              <option value="">All sectors</option>
              {groups.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="flex h-10 items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 text-[11.5px] text-muted">
            <span className="sr-only">Minimum composite score</span>
            <select
              name="min"
              defaultValue={params.min || ""}
              aria-label="Minimum composite score"
              className="bg-transparent text-[11.5px] font-medium text-ink outline-none"
            >
              <option value="">Any score</option>
              <option value="50">Score ≥ 50</option>
              <option value="65">Score ≥ 65</option>
              <option value="80">Score ≥ 80</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary h-10 min-h-0 px-4 text-[12px]">
            Apply
          </button>
          <a href={href({ q: "", group: "", min: 0, page: 1, open: "" })} className="text-center text-[11px] font-semibold text-brand hover:text-brand-deep">
            Reset
          </a>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <a
            href={href({ view: "overview", sort: "composite", dir: "desc", page: 1, open: "" })}
            className={`rounded-full px-3 py-1.5 text-[10.5px] font-semibold ${
              view === "overview" ? "bg-ink text-white" : "border border-line bg-paper text-muted hover:text-ink"
            }`}
          >
            Overview
          </a>
          {factors.map((factor) => (
            <a
              key={factor.key}
              href={href({ view: factor.key, sort: factor.key, dir: "desc", page: 1, open: "" })}
              className={`rounded-full px-3 py-1.5 text-[10.5px] font-semibold ${
                view === factor.key ? "bg-ink text-white" : "border border-line bg-paper text-muted hover:text-ink"
              }`}
              title={`${Math.round(factor.weight * 100)}% of composite`}
            >
              {factor.shortLabel} · {factor.label}
            </a>
          ))}
        </div>
        <p className="mt-2 text-[10.5px] text-muted">
          {sorted.length} companies ·{" "}
          {view === "overview"
            ? "composite and summary metrics"
            : `${activeFactor?.label ?? ""} parameters and percentile scores`}{" "}
          · score bands are quantitative, not recommendations.
        </p>
      </form>

      <div className="mt-3 overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[1100px] border-collapse text-left">
          <caption className="sr-only">
            US equity screener with composite and factor scores
          </caption>
          <thead className="bg-paper-deep">
            <tr className="border-b border-line">
              <SortHead label="#" sortKey="rank" />
              <SortHead label="Company" sortKey="name" />
              {view === "overview" ? (
                <>
                  <SortHead label="Sector" sortKey="group" />
                  <SortHead label="Mkt cap" sortKey="marketCap" align="right" />
                  <SortHead label="Score" sortKey="composite" align="right" />
                  {factors.map((factor) => (
                    <SortHead key={factor.key} label={factor.shortLabel} sortKey={factor.key} align="center" />
                  ))}
                  <SortHead label="P/E" sortKey="pe" align="right" />
                  <SortHead label="P/B" sortKey="pb" align="right" />
                  <SortHead label="ROCE" sortKey="roce" align="right" />
                  <SortHead label="ROE" sortKey="roe" align="right" />
                  <SortHead label="1Y" sortKey="return1y" align="right" />
                </>
              ) : (
                <>
                  <SortHead label={`${activeFactor?.shortLabel ?? ""} score`} sortKey={view} align="right" />
                  {activeFactor?.parameters.map((parameter) => (
                    <SortHead
                      key={parameter.key}
                      label={parameter.label}
                      sortKey={`factor:${view}:${parameter.key}`}
                      align="right"
                    />
                  ))}
                </>
              )}
              <th scope="col" className="px-2 py-2 text-right text-[9px] font-bold uppercase tracking-[0.08em] text-muted">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.ticker} className="border-b border-line/70 align-top hover:bg-paper-deep/60">
                <td className="px-2 py-2.5 tabular text-[11px] text-muted">{row.rank}</td>
                <td className="px-2 py-2.5">
                  <div className="flex items-center gap-2">
                    <StockLogoStatic ticker={row.ticker} size={24} />
                    <div className="min-w-0">
                      <a href={`/stocks/${row.ticker}`} className="block max-w-[210px] truncate text-[11.5px] font-semibold text-ink hover:text-brand">
                        {row.name}
                      </a>
                      <span className="font-mono text-[9.5px] text-muted">{row.ticker}</span>
                    </div>
                  </div>
                </td>
                {view === "overview" ? (
                  <>
                    <td className="px-2 py-2.5 text-[10.5px] text-muted">{row.group}</td>
                    <td className="px-2 py-2.5 text-right tabular text-[10.5px] text-ink">{formatCompactCurrency(row.marketCap)}</td>
                    <td className="px-2 py-2.5 text-right">
                      <Score score={row.composite} />
                      <span className="mt-0.5 block text-[8.5px] text-muted">{row.band}</span>
                    </td>
                    {factors.map((factor) => (
                      <td key={factor.key} className="px-2 py-2.5 text-center">
                        <Score score={row.factors[factor.key].score} />
                      </td>
                    ))}
                    <td className="px-2 py-2.5 text-right tabular text-[10.5px] text-ink">{formatMultiple(row.pe)}</td>
                    <td className="px-2 py-2.5 text-right tabular text-[10.5px] text-ink">{formatMultiple(row.pb)}</td>
                    <td className="px-2 py-2.5 text-right tabular text-[10.5px] text-ink">{formatPercent(row.roce)}</td>
                    <td className="px-2 py-2.5 text-right tabular text-[10.5px] text-ink">{formatPercent(row.roe)}</td>
                    <td className={`px-2 py-2.5 text-right tabular text-[10.5px] ${(row.return1y ?? 0) >= 0 ? "text-positive" : "text-danger"}`}>
                      {formatPercent(row.return1y)}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-2 py-2.5 text-right">
                      <Score score={row.factors[view].score} />
                    </td>
                    {activeFactor?.parameters.map((parameter) => {
                      const result = row.factors[view].parameters[parameter.key] ?? {
                        value: null,
                        score: null,
                      };
                      return (
                        <td key={parameter.key} className="px-2 py-2.5 text-right" title={parameter.description}>
                          <ParameterValue result={result} unit={parameter.unit} />
                        </td>
                      );
                    })}
                  </>
                )}
                <td className="px-2 py-2.5 text-right">
                  <a
                    href={href({ open: row.ticker })}
                    className="rounded-full border border-line px-2 py-1 text-[9.5px] font-semibold text-muted hover:text-ink"
                  >
                    Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[10.5px] text-muted">
          Page {currentPage} of {pageCount} · showing {visible.length} of {sorted.length}
        </p>
        <div className="flex items-center gap-2">
          {currentPage > 1 ? (
            <a href={href({ page: currentPage - 1 })} className="btn btn-ghost h-8 min-h-0 px-3 text-[11px]">
              Previous
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="px-3 py-1.5 text-[11px] font-semibold text-muted"
            >
              Previous
            </span>
          )}
          {currentPage < pageCount ? (
            <a href={href({ page: currentPage + 1 })} className="btn btn-ghost h-8 min-h-0 px-3 text-[11px]">
              Next
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="px-3 py-1.5 text-[11px] font-semibold text-muted"
            >
              Next
            </span>
          )}
        </div>
      </div>

      {openRow && (
        <section className="mt-4 rounded-xl border border-line bg-surface p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <StockLogoStatic ticker={openRow.ticker} size={34} />
              <div>
                <p className="text-[13px] font-semibold text-ink">{openRow.name}</p>
                <p className="text-[10px] text-muted">
                  {openRow.ticker} · {openRow.group} · composite {openRow.composite ?? "n/a"} ({openRow.band})
                </p>
              </div>
            </div>
            <a href={href({ open: "" })} className="text-[10.5px] font-semibold text-brand hover:text-brand-deep">
              Close details
            </a>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {factors.map((factor) => (
              <div key={factor.key} className="rounded-lg border border-line bg-paper p-3">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[11px] font-semibold text-ink">
                    {factor.label} · {Math.round(factor.weight * 100)}%
                  </p>
                  <Score score={openRow.factors[factor.key].score} />
                </div>
                <div className="mt-2 space-y-1.5">
                  {factor.parameters.map((parameter) => {
                    const result = openRow.factors[factor.key].parameters[parameter.key] ?? {
                      value: null,
                      score: null,
                    };
                    return (
                      <div key={parameter.key} className="flex items-baseline justify-between gap-2 text-[10px]">
                        <span className="text-muted" title={parameter.description}>{parameter.label}</span>
                        <span className="tabular text-right text-ink">
                          {formatParameterValue(result.value, parameter.unit)}
                          <span className={`ml-1.5 text-[9px] ${scoreClass(result.score)}`}>
                            {result.score == null ? "—" : `${result.score}th`}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[9.5px] text-muted">
            Parameter coverage: {openRow.coverage}% · Price as of {openRow.asOf} ·{" "}
            <a href={`/stocks/${openRow.ticker}`} className="font-semibold text-brand hover:text-brand-deep">
              Open full research report →
            </a>
          </p>
        </section>
      )}
    </div>
  );
}
