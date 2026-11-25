import { StockLogoStatic } from "@/components/stock-logo-static";
import { formatOrdinal, formatPercent } from "@/lib/format";
import {
  buildScreenerUrl,
  formatColumnValue,
  type ColumnDef,
} from "@/lib/screener-filters";
import { getScreenerParameter } from "@/lib/screener-data";
import {
  formatParameterValue,
  type FactorConfig,
  type FactorKey,
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
  cols: string[];
  ranges: Record<string, number | null>;
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
  if (score == null) return <span className="text-[11px] text-faint">—</span>;
  return (
    <span className={`tabular text-[12px] font-semibold ${scoreClass(score)}`}>
      {score}
    </span>
  );
}

function ReturnValue({ value }: { value: number | null }) {
  return (
    <span
      className={`tabular text-[12px] ${value == null ? "text-faint" : value >= 0 ? "text-positive" : "text-danger"}`}
    >
      {formatPercent(value)}
    </span>
  );
}

function SortHead({
  label,
  sortKey,
  sortHref,
  activeSort,
  activeDir,
  align = "right",
  stickyTop = "top-7",
}: {
  label: string;
  sortKey: string;
  sortHref: (key: string) => string;
  activeSort: string;
  activeDir: "asc" | "desc";
  align?: "left" | "right" | "center";
  stickyTop?: string;
}) {
  const active = activeSort === sortKey;
  return (
    <th
      scope="col"
      aria-sort={
        active ? (activeDir === "desc" ? "descending" : "ascending") : undefined
      }
      className={`sticky ${stickyTop} z-20 h-9 whitespace-nowrap bg-paper-deep px-1 text-[10px] font-semibold ${
        align === "right"
          ? "text-right"
          : align === "center"
            ? "text-center"
            : "text-left"
      } ${active ? "text-ink" : "text-muted"}`}
    >
      <a href={sortHref(sortKey)} className="hover:text-ink">
        {label}
        {active ? (activeDir === "desc" ? " ↓" : " ↑") : ""}
      </a>
    </th>
  );
}

export function ScreenerTable({
  rows,
  factors,
  params,
  columns,
}: {
  rows: ScreenerRow[];
  factors: FactorConfig[];
  params: ScreenerParams;
  columns: ColumnDef[];
}) {
  const activeFactor =
    params.view === "overview"
      ? null
      : (factors.find((factor) => factor.key === params.view) ?? factors[0]);
  const view = activeFactor?.key ?? "overview";
  const pageSize = 100;

  const sortValue = (row: ScreenerRow): number | string | null => {
    if (params.sort === "rank") return row.rank;
    if (params.sort === "name") return row.name;
    if (params.sort === "group") return row.group;
    if (params.sort.startsWith("factor:")) {
      const [, factorKey, parameterKey] = params.sort.split(":");
      if (!factorKey) return null;
      if (parameterKey) {
        return getScreenerParameter(row.ticker, `${factorKey}.${parameterKey}`)
          .score;
      }
      return row.factorScores[factorKey as FactorKey] ?? null;
    }
    const column = columns.find((item) => item.key === params.sort);
    if (column) return column.get(row);
    return row.factorScores[params.sort as FactorKey] ?? null;
  };

  const sorted = [...rows].sort((a, b) => {
    const av = sortValue(a);
    const bv = sortValue(b);
    if (typeof av === "string" || typeof bv === "string") {
      const compare = String(av ?? "").localeCompare(String(bv ?? ""));
      return params.dir === "asc" ? compare : -compare;
    }
    const compare = (av ?? -Infinity) - (bv ?? -Infinity);
    return params.dir === "asc" ? compare : -compare;
  });
  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const currentPage = Math.min(params.page, pageCount);
  const visible = sorted.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const openRow = params.open
    ? rows.find((row) => row.ticker === params.open)
    : null;
  const selectedColumns = columns;

  const href = (overrides: Partial<ScreenerParams>) =>
    buildScreenerUrl(params, overrides);

  const sortHref = (key: string) => {
    const nextDir =
      params.sort === key && params.dir === "desc" ? "asc" : "desc";
    return href({ sort: key, dir: nextDir, page: 1 });
  };

  const groupColumns = [
    ...new Set(selectedColumns.map((column) => column.group)),
  ];

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <a
            href={href({
              view: "overview",
              sort: "composite",
              dir: "desc",
              page: 1,
              open: "",
            })}
            className={`rounded-full px-3 py-1.5 text-[10.5px] font-semibold ${
              view === "overview"
                ? "bg-ink text-white"
                : "border border-line bg-surface text-muted hover:text-ink"
            }`}
          >
            Overview
          </a>
          {factors.map((factor) => (
            <a
              key={factor.key}
              href={href({
                view: factor.key,
                sort: factor.key,
                dir: "desc",
                page: 1,
                open: "",
              })}
              className={`rounded-full px-3 py-1.5 text-[10.5px] font-semibold ${
                view === factor.key
                  ? "bg-ink text-white"
                  : "border border-line bg-surface text-muted hover:text-ink"
              }`}
            >
              {factor.label}
            </a>
          ))}
        </div>
        <p className="text-[10.5px] text-muted">
          {rows.length} companies · sorted by{" "}
          {params.sort === "v2Composite"
            ? "composite score"
            : params.sort === "composite"
              ? "five-factor score"
              : params.sort.replaceAll(":", " · ")}
        </p>
      </div>

      <p className="mb-1.5 text-[10px] text-muted lg:hidden">
        Swipe the table sideways to see more metrics →
      </p>

      <div
        role="region"
        aria-label="Screener results table"
        tabIndex={0}
        className="relative max-h-[calc(100vh-11rem)] min-h-[480px] overflow-auto rounded-xl border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:min-h-[560px]"
      >
        <table className="w-full min-w-max border-collapse text-left">
          <caption className="sr-only">
            US equity screener with factor and financial columns
          </caption>
          {view === "overview" ? (
            <thead>
              <tr className="border-b border-line bg-paper-deep">
                <th
                  colSpan={2}
                  scope="colgroup"
                  className="sticky left-0 top-0 z-30 h-7 border-r border-line bg-paper-deep px-2 text-[9px] font-bold text-muted"
                >
                  Company
                </th>
                {groupColumns.map((group, index) => {
                  const count = selectedColumns.filter(
                    (column) => column.group === group,
                  ).length;
                  return (
                    <th
                      key={group}
                      colSpan={count}
                      scope="colgroup"
                      className={`sticky top-0 z-20 h-7 border-b border-line bg-paper-deep px-1.5 text-center text-[9px] font-bold text-faint ${
                        index > 0 ? "border-l border-line" : ""
                      }`}
                    >
                      {group}
                    </th>
                  );
                })}
                <th className="sticky top-0 z-20 h-7 border-b border-l border-line bg-paper-deep px-1.5 text-right text-[9px] font-bold text-muted">
                  Details
                </th>
              </tr>
              <tr className="border-b border-line bg-paper-deep">
                <th
                  scope="col"
                  className="sticky left-0 top-7 z-30 h-9 w-10 border-r border-line bg-paper-deep px-2 text-[10px] font-semibold text-muted"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="sticky left-10 top-7 z-30 h-9 min-w-[124px] border-r border-line bg-paper-deep px-2 text-[10px] font-semibold shadow-[6px_0_10px_-9px_rgb(18_18_43_/_0.45)] sm:min-w-[200px]"
                >
                  <a
                    href={sortHref("name")}
                    className={
                      params.sort === "name"
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                    }
                  >
                    Company
                    {params.sort === "name"
                      ? params.dir === "desc"
                        ? " ↓"
                        : " ↑"
                      : ""}
                  </a>
                </th>
                {selectedColumns.map((column) => (
                  <SortHead
                    key={column.key}
                    label={column.label}
                    sortKey={column.key}
                    sortHref={sortHref}
                    activeSort={params.sort}
                    activeDir={params.dir}
                  />
                ))}
                <th
                  scope="col"
                  className="sticky top-7 z-20 h-9 bg-paper-deep px-1.5 text-right text-[10px] font-semibold text-muted"
                >
                  {" "}
                </th>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr className="border-b border-line bg-paper-deep">
                <th
                  scope="col"
                  className="sticky left-0 top-0 z-30 h-9 w-10 border-r border-line bg-paper-deep px-2 text-[10px] font-semibold text-muted"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="sticky left-10 top-0 z-30 h-9 min-w-[124px] border-r border-line bg-paper-deep px-2 text-[10px] font-semibold shadow-[6px_0_10px_-9px_rgb(18_18_43_/_0.45)] sm:min-w-[200px]"
                >
                  <a
                    href={sortHref("name")}
                    className={
                      params.sort === "name"
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                    }
                  >
                    Company
                    {params.sort === "name"
                      ? params.dir === "desc"
                        ? " ↓"
                        : " ↑"
                      : ""}
                  </a>
                </th>
                <SortHead
                  label={`${activeFactor?.label ?? ""} score`}
                  sortKey={view}
                  align="right"
                  stickyTop="top-0"
                  sortHref={sortHref}
                  activeSort={params.sort}
                  activeDir={params.dir}
                />
                {activeFactor?.parameters.map((parameter) => (
                  <SortHead
                    key={parameter.key}
                    label={parameter.label}
                    sortKey={`factor:${view}:${parameter.key}`}
                    align="right"
                    stickyTop="top-0"
                    sortHref={sortHref}
                    activeSort={params.sort}
                    activeDir={params.dir}
                  />
                ))}
                <th
                  scope="col"
                  className="sticky top-0 z-20 h-9 bg-paper-deep px-2 text-right text-[10px] font-semibold text-muted"
                >
                  {" "}
                </th>
              </tr>
            </thead>
          )}
          <tbody>
            {visible.map((row) => (
              <tr
                key={row.ticker}
                className="group border-b border-line/70 align-middle hover:bg-paper-deep/60"
              >
                <td className="sticky left-0 z-10 w-10 border-r border-line bg-surface px-1.5 py-2.5 tabular text-[11px] text-muted group-hover:bg-paper-deep">
                  {row.rank || "—"}
                </td>
                <td className="sticky left-10 z-10 w-[124px] min-w-[124px] max-w-[124px] border-r border-line bg-surface px-2 py-2.5 shadow-[6px_0_10px_-9px_rgb(18_18_43_/_0.35)] group-hover:bg-paper-deep sm:w-[236px] sm:min-w-[236px] sm:max-w-[236px]">
                  <div className="flex items-center gap-2">
                    <StockLogoStatic ticker={row.ticker} size={28} />
                    <div className="min-w-0">
                      <a
                        href={`/stocks/${row.ticker}`}
                        title={row.name}
                        className="block truncate text-[13px] font-semibold leading-tight text-ink hover:text-brand sm:text-[14px]"
                      >
                        {row.name}
                      </a>
                      <span className="mt-0.5 flex items-center gap-1.5 text-[11px] leading-tight text-muted">
                        <span className="font-mono font-medium text-ink-soft">
                          {row.ticker}
                        </span>
                        {row.archived && (
                          <span className="rounded bg-paper-deep px-1 py-0.5 text-[9px] font-semibold text-muted ring-1 ring-line">
                            Archived
                          </span>
                        )}
                        <span
                          aria-hidden="true"
                          className="hidden text-line-strong sm:inline"
                        >
                          ·
                        </span>
                        <span className="hidden truncate sm:inline">
                          {row.group}
                        </span>
                      </span>
                    </div>
                  </div>
                </td>
                {view === "overview" ? (
                  selectedColumns.map((column) => (
                    <td
                      key={column.key}
                      className={`px-1 py-2.5 tabular text-[12px] ${column.key.startsWith("return") ? "" : "text-ink"} text-right`}
                    >
                      {column.key.startsWith("return") ? (
                        <ReturnValue value={column.get(row)} />
                      ) : column.key === "composite" ||
                        column.key.endsWith("Score") ? (
                        <Score score={column.get(row)} />
                      ) : (
                        <span className="text-ink">
                          {formatColumnValue(row, column.key)}
                        </span>
                      )}
                    </td>
                  ))
                ) : (
                  <>
                    <td className="px-1.5 py-2.5 text-right">
                      <Score score={row.factorScores[view]} />
                    </td>
                    {activeFactor?.parameters.map((parameter) => {
                      const result = row.factors[view].parameters[
                        parameter.key
                      ] ?? { value: null, score: null };
                      return (
                        <td
                          key={parameter.key}
                          className="px-1.5 py-2.5 text-right"
                          title={parameter.description}
                        >
                          <span className="tabular block text-[11px] text-ink">
                            {formatParameterValue(result.value, parameter.unit)}
                          </span>
                          <span
                            className={`tabular block text-[9px] ${scoreClass(result.score)}`}
                          >
                            {result.score == null
                              ? "—"
                              : formatOrdinal(result.score)}
                          </span>
                        </td>
                      );
                    })}
                  </>
                )}
                <td className="px-2 py-2.5 text-right">
                  <a
                    href={href({ open: row.ticker })}
                    className="rounded-full border border-line px-2 py-1 text-[9.5px] font-semibold text-muted hover:border-line-strong hover:text-ink"
                  >
                    Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {visible.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-[13px] font-semibold text-ink">
              No stocks match those filters.
            </p>
            <a
              href="/screener"
              className="mt-2 inline-block text-[11px] font-semibold text-brand"
            >
              Reset filters
            </a>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[10.5px] text-muted">
          Page {currentPage} of {pageCount} · showing {visible.length} of{" "}
          {sorted.length}
        </p>
        <div className="flex items-center gap-1.5">
          {currentPage > 1 ? (
            <a
              href={href({ page: currentPage - 1 })}
              className="btn btn-ghost h-8 min-h-0 px-3 text-[11px]"
            >
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
          <span className="hidden items-center gap-1 sm:flex">
            {(() => {
              const targets = [
                ...new Set([
                  1,
                  currentPage - 1,
                  currentPage,
                  currentPage + 1,
                  pageCount,
                ]),
              ]
                .filter((page) => page >= 1 && page <= pageCount)
                .sort((a, b) => a - b);
              const items: Array<number | "gap"> = [];
              targets.forEach((page, index) => {
                if (index > 0 && page - targets[index - 1] > 1)
                  items.push("gap");
                items.push(page);
              });
              return items.map((item, index) =>
                item === "gap" ? (
                  <span
                    key={`gap-${index}`}
                    className="px-1 text-[10px] text-faint"
                  >
                    …
                  </span>
                ) : (
                  <a
                    key={item}
                    href={href({ page: item })}
                    aria-current={item === currentPage ? "page" : undefined}
                    className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-[11px] font-semibold ${
                      item === currentPage
                        ? "bg-ink text-white"
                        : "border border-line bg-surface text-muted hover:text-ink"
                    }`}
                  >
                    {item}
                  </a>
                ),
              );
            })()}
          </span>
          {currentPage < pageCount ? (
            <a
              href={href({ page: currentPage + 1 })}
              className="btn btn-ghost h-8 min-h-0 px-3 text-[11px]"
            >
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
                <p className="text-[14px] font-semibold text-ink">
                  {openRow.name}
                </p>
                <p className="text-[10.5px] text-muted">
                  {openRow.ticker} · {openRow.group} · composite{" "}
                  {openRow.composite ?? "n/a"} ({openRow.band})
                </p>
              </div>
            </div>
            <a
              href={href({ open: "" })}
              className="text-[10.5px] font-semibold text-brand hover:text-brand-deep"
            >
              Close details
            </a>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {factors.map((factor) => (
              <div
                key={factor.key}
                className="rounded-lg border border-line bg-paper p-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[11px] font-semibold text-ink">
                    {factor.label} · {Math.round(factor.weight * 100)}%
                  </p>
                  <Score score={openRow.factors[factor.key].score} />
                </div>
                <div className="mt-2 space-y-1.5">
                  {factor.parameters.map((parameter) => {
                    const result = openRow.factors[factor.key].parameters[
                      parameter.key
                    ] ?? { value: null, score: null };
                    return (
                      <div
                        key={parameter.key}
                        className="flex items-baseline justify-between gap-2 text-[10px]"
                      >
                        <span
                          className="text-muted"
                          title={parameter.description}
                        >
                          {parameter.label}
                        </span>
                        <span className="tabular text-right text-ink">
                          {formatParameterValue(result.value, parameter.unit)}
                          <span
                            className={`ml-1.5 text-[9px] ${scoreClass(result.score)}`}
                          >
                            {result.score == null
                              ? "—"
                              : formatOrdinal(result.score)}
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
            Parameter coverage: {openRow.coverage}% · Price as of {openRow.asOf}{" "}
            ·{" "}
            <a
              href={`/stocks/${openRow.ticker}`}
              className="font-semibold text-brand hover:text-brand-deep"
            >
              Open full research report →
            </a>
          </p>
        </section>
      )}
    </div>
  );
}
