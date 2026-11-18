"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Plus, RotateCcw, Search, Trash2, X } from "lucide-react";
import {
  formatFilterValue,
  type FilterDistribution,
  type RangeParams,
  type ResearchScreen,
  type ScreenerUiParams,
} from "@/lib/screener-filters";

type SavedScreen = {
  id: string;
  name: string;
  params: {
    q: string;
    group: string;
    min: number;
    ranges: RangeParams;
  };
};

const SAVED_KEY = "stockmonk:screener:screens";

function buildQuery(
  params: ScreenerUiParams,
  overrides: Partial<ScreenerUiParams> & { ranges?: RangeParams },
) {
  const next = { ...params, ...overrides };
  const search = new URLSearchParams();
  if (next.q) search.set("q", next.q);
  if (next.group) search.set("group", next.group);
  if (next.min) search.set("min", String(next.min));
  if (next.view !== "overview") search.set("view", next.view);
  if (next.sort) search.set("sort", next.sort);
  if (next.dir !== "desc") search.set("dir", next.dir);
  if (next.cols.length) search.set("cols", next.cols.join(","));
  if (next.page > 1) search.set("page", String(next.page));
  if (next.open) search.set("open", next.open);
  for (const [key, value] of Object.entries(next.ranges)) {
    if (value != null) search.set(key, String(value));
  }
  const query = search.toString();
  return query ? `/screener?${query}` : "/screener";
}

function countQuery(state: {
  q: string;
  group: string;
  min: number;
  ranges: RangeParams;
}): string {
  const search = new URLSearchParams();
  if (state.q.trim()) search.set("q", state.q.trim());
  if (state.group) search.set("group", state.group);
  if (state.min) search.set("min", String(state.min));
  for (const [key, value] of Object.entries(state.ranges)) {
    if (value != null) search.set(key, String(value));
  }
  return search.toString();
}

function displayValue(value: number | null, unit: FilterDistribution["unit"]): string {
  return formatFilterValue(value, unit);
}

function parseInput(value: string, unit: FilterDistribution["unit"]): number | null {
  if (value.trim() === "") return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return null;
  return unit === "pct" ? parsed / 100 : parsed;
}

function RangeFilter({
  distribution,
  min,
  max,
  onChange,
}: {
  distribution: FilterDistribution;
  min: number | null;
  max: number | null;
  onChange: (next: { min: number | null; max: number | null }) => void;
}) {
  const active = min != null || max != null;
  const maxBin = Math.max(1, ...distribution.bins);
  const step =
    distribution.unit === "pct"
      ? 0.005
      : distribution.unit === "x"
        ? 0.1
        : distribution.unit === "score"
          ? 1
          : distribution.unit === "currencyB"
            ? 1
            : 0.01;
  const lower = min ?? distribution.sliderMin;
  const upper = max ?? distribution.sliderMax;
  const span = distribution.sliderMax - distribution.sliderMin || 1;
  const percentOf = (value: number) =>
    Math.min(100, Math.max(0, ((value - distribution.sliderMin) / span) * 100));
  const lowPercent = min == null ? 0 : percentOf(min);
  const highPercent = max == null ? 100 : percentOf(max);
  const toInput = (value: number | null) =>
    value == null
      ? ""
      : distribution.unit === "pct"
        ? (value * 100).toFixed(1)
        : value.toFixed(distribution.unit === "currencyB" ? 1 : 2);

  return (
    <div className={`rounded-lg border p-3 ${active ? "border-brand/30 bg-brand-soft/30" : "border-line bg-paper"}`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[12px] font-semibold text-ink">{distribution.label}</p>
          <p className="mt-0.5 text-[10px] leading-snug text-muted">{distribution.description}</p>
        </div>
        {active && (
          <button
            type="button"
            onClick={() => onChange({ min: null, max: null })}
            className="shrink-0 text-[9.5px] font-semibold text-danger hover:text-danger/80"
          >
            Remove
          </button>
        )}
      </div>
      <div
        className="mt-2 flex h-10 items-end gap-[2px]"
        aria-hidden="true"
        title={
          distribution.logScale
            ? "Log-scaled distribution; the slider spans the 5th–95th percentile."
            : "Distribution across 12 bins; the slider spans the 5th–95th percentile."
        }
      >
        {distribution.bins.map((count, index) => (
          <span
            key={index}
            className={`min-h-[2px] flex-1 rounded-t-[2px] ${active ? "bg-brand/55" : "bg-brand/25"}`}
            style={{ height: `${Math.max(2, (count / maxBin) * 100)}%` }}
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[8.5px] text-faint">
        <span>{displayValue(distribution.sliderMin, distribution.unit)}</span>
        {distribution.logScale && (
          <span className="uppercase tracking-[0.08em]">log scale</span>
        )}
        <span>{displayValue(distribution.sliderMax, distribution.unit)}</span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <label className="rounded-md border border-line bg-surface px-2 py-1.5">
          <span className="block text-[8px] font-bold uppercase tracking-[0.1em] text-faint">Min</span>
          <input
            inputMode="decimal"
            value={toInput(min)}
            onChange={(event) => onChange({ min: parseInput(event.target.value, distribution.unit), max })}
            className="w-full bg-transparent tabular text-[11px] text-ink outline-none placeholder:text-faint"
            placeholder={displayValue(distribution.sliderMin, distribution.unit)}
          />
        </label>
        <label className="rounded-md border border-line bg-surface px-2 py-1.5">
          <span className="block text-[8px] font-bold uppercase tracking-[0.1em] text-faint">Max</span>
          <input
            inputMode="decimal"
            value={toInput(max)}
            onChange={(event) => onChange({ min, max: parseInput(event.target.value, distribution.unit) })}
            className="w-full bg-transparent tabular text-[11px] text-ink outline-none placeholder:text-faint"
            placeholder={displayValue(distribution.sliderMax, distribution.unit)}
          />
        </label>
      </div>
      <div className="range-dual relative mt-3 h-7">
        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-line-strong/80" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-brand"
          style={{ left: `${lowPercent}%`, width: `${Math.max(0, highPercent - lowPercent)}%` }}
        />
        <label className="block">
          <span className="sr-only">Minimum {distribution.label}</span>
          <input
            type="range"
            min={distribution.sliderMin}
            max={distribution.sliderMax}
            step={step}
            value={lower}
            onChange={(event) => onChange({ min: Number(event.target.value), max })}
            className="range-dual-input"
            aria-label={`Minimum ${distribution.label} slider`}
          />
        </label>
        <label className="block">
          <span className="sr-only">Maximum {distribution.label}</span>
          <input
            type="range"
            min={distribution.sliderMin}
            max={distribution.sliderMax}
            step={step}
            value={upper}
            onChange={(event) => onChange({ min, max: Number(event.target.value) })}
            className="range-dual-input"
            aria-label={`Maximum ${distribution.label} slider`}
          />
        </label>
      </div>
    </div>
  );
}

export function ScreenerSidebar({
  params,
  distributions,
  researchScreens,
  groups,
  initialCount,
  variant = "sidebar",
  initialTab = "filters",
  onClose,
}: {
  params: ScreenerUiParams;
  distributions: FilterDistribution[];
  researchScreens: ResearchScreen[];
  groups: string[];
  initialCount: number;
  variant?: "sidebar" | "sheet";
  initialTab?: "filters" | "screens";
  onClose?: () => void;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"filters" | "screens">(initialTab);
  const [query, setQuery] = useState(params.q);
  const [group, setGroup] = useState(params.group);
  const [min, setMin] = useState(params.min);
  const [ranges, setRanges] = useState<RangeParams>(params.ranges);
  const [filterSearch, setFilterSearch] = useState("");
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "Size & Price": true,
    Returns: false,
    Valuation: false,
    Profitability: false,
    Growth: false,
    "Financial Health": false,
    Momentum: false,
    Scores: false,
  });
  const [saved, setSaved] = useState<SavedScreen[]>([]);
  const [newName, setNewName] = useState("");
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVED_KEY);
      if (raw) setSaved(JSON.parse(raw) as SavedScreen[]);
    } catch {
      // ignore malformed local storage
    }
  }, []);

  // Keep local controls in step with server-rendered URL state after navigation
  // (for example when a Quick Screen or a saved screen is applied). The initial
  // render already matches the URL, so skip the mount pass to avoid a second
  // render during hydration.
  const syncedParams = useRef(params);
  useEffect(() => {
    if (syncedParams.current === params) return;
    syncedParams.current = params;
    setQuery(params.q);
    setGroup(params.group);
    setMin(params.min);
    setRanges(params.ranges);
  }, [params]);

  const persist = (next: SavedScreen[]) => {
    setSaved(next);
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify(next));
    } catch {
      // storage can be unavailable
    }
  };

  const activeRanges = useMemo(
    () => Object.entries(ranges).filter(([, value]) => value != null),
    [ranges],
  );
  const [matched, setMatched] = useState(initialCount);
  const [counting, setCounting] = useState(false);
  const firstCount = useRef(true);
  const countSignature = JSON.stringify({ query, group, min, ranges });
  useEffect(() => {
    if (firstCount.current) {
      firstCount.current = false;
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setCounting(true);
      try {
        const search = countQuery({ q: query, group, min, ranges });
        const response = await fetch(`/api/data/screener-count?${search}`, {
          signal: controller.signal,
        });
        if (!response.ok) return;
        const json = (await response.json()) as { count?: unknown };
        if (typeof json.count === "number") setMatched(json.count);
      } catch {
        // aborted or offline; keep the previous count
      } finally {
        setCounting(false);
      }
    }, 180);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [countSignature, query, group, min, ranges]);

  const normalizedFilterSearch = filterSearch.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  const visibleDistributions = distributions.filter((distribution) => {
    if (!normalizedFilterSearch) return true;
    const haystack = `${distribution.label} ${distribution.category} ${distribution.description}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "");
    return haystack.includes(normalizedFilterSearch);
  });

  const activeChips = [
    ...(query.trim()
      ? [{
          key: "q",
          label: "Search",
          value: query.trim(),
          side: "=",
          remove: () => setQuery(""),
        }]
      : []),
    ...(group
      ? [{
          key: "group",
          label: "Sector",
          value: group,
          side: "=",
          remove: () => setGroup(""),
        }]
      : []),
    ...(min
      ? [{
          key: "min",
          label: "Composite",
          value: String(min),
          side: "≥",
          remove: () => setMin(0),
        }]
      : []),
    ...activeRanges.map(([key, value]) => {
      const base = key.replace(/(Min|Max)$/, "");
      const distribution = distributions.find((item) => item.key === base);
      const isMin = key.endsWith("Min");
      return {
        key,
        label: distribution?.label ?? base,
        value: displayValue(value, distribution?.unit ?? "num"),
        side: isMin ? "≥" : "≤",
        remove: () => setRanges((current) => ({ ...current, [key]: null })),
      };
    }),
  ];

  const apply = () => {
    const url = buildQuery(params, {
      q: query,
      group,
      min,
      ranges,
      page: 1,
      open: "",
    });
    router.push(url);
    onClose?.();
  };

  const reset = () => {
    setQuery("");
    setGroup("");
    setMin(0);
    setRanges(
      Object.fromEntries(distributions.flatMap((distribution) => [
        [`${distribution.key}Min`, null],
        [`${distribution.key}Max`, null],
      ])),
    );
  };

  const applyScreen = (screen: ResearchScreen) => {
    setRanges(
      Object.fromEntries(
        distributions.flatMap((distribution) => [
          [`${distribution.key}Min`, null],
          [`${distribution.key}Max`, null],
        ]),
      ),
    );
    const screenRanges = Object.fromEntries(
      Object.entries(screen.params).map(([key, value]) => [key, Number(value)]),
    );
    router.push(
      buildQuery(params, {
        q: "",
        group: "",
        min: 0,
        ranges: screenRanges,
        page: 1,
        open: "",
      }),
    );
    onClose?.();
  };

  const saveCurrent = () => {
    const name = newName.trim();
    if (!name) return;
    persist([
      ...saved,
      {
        id: crypto.randomUUID(),
        name,
        params: { q: query, group, min, ranges },
      },
    ]);
    setNewName("");
    setCreating(false);
  };

  const applySaved = (screen: SavedScreen) => {
    router.push(
      buildQuery(params, {
        ...screen.params,
        ranges: screen.params.ranges,
        page: 1,
        open: "",
      }),
    );
    onClose?.();
  };

  return (
    <div className={variant === "sheet" ? "flex h-full min-h-0 flex-col" : "flex h-full min-h-0 flex-col"}>
      <div className="flex gap-1 rounded-full bg-paper-deep p-1">
        <button
          type="button"
          onClick={() => setTab("filters")}
          className={`flex-1 rounded-full px-3 py-2 text-[11px] font-semibold ${
            tab === "filters" ? "bg-surface text-ink shadow-sm" : "text-muted"
          }`}
        >
          Filters
        </button>
        <button
          type="button"
          onClick={() => setTab("screens")}
          className={`flex-1 rounded-full px-3 py-2 text-[11px] font-semibold ${
            tab === "screens" ? "bg-surface text-ink shadow-sm" : "text-muted"
          }`}
        >
          Quick Screens
        </button>
      </div>

      {tab === "filters" ? (
        <div className="mt-3 flex min-h-0 flex-1 flex-col">
          <div className="space-y-2">
            <label className="flex h-9 items-center gap-2 rounded-lg border border-line bg-paper px-2.5">
              <Search aria-hidden="true" className="size-3.5 shrink-0 text-muted" />
              <span className="sr-only">Search for a filter</span>
              <input
                value={filterSearch}
                onChange={(event) => setFilterSearch(event.target.value)}
                placeholder="Search for a filter"
                className="min-w-0 flex-1 bg-transparent text-[11.5px] text-ink outline-none placeholder:text-faint"
              />
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className="rounded-lg border border-line bg-paper px-2 py-1.5">
                <span className="block text-[8px] font-bold uppercase tracking-[0.1em] text-faint">Search stocks</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ticker or name"
                  className="w-full bg-transparent text-[11px] text-ink outline-none placeholder:text-faint"
                />
              </label>
              <label className="rounded-lg border border-line bg-paper px-2 py-1.5">
                <span className="block text-[8px] font-bold uppercase tracking-[0.1em] text-faint">Sector</span>
                <select
                  value={group}
                  onChange={(event) => setGroup(event.target.value)}
                  aria-label="Filter by sector"
                  className="w-full bg-transparent text-[11px] font-medium text-ink outline-none"
                >
                  <option value="">All sectors</option>
                  {groups.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="flex items-center justify-between rounded-lg border border-line bg-paper px-2.5 py-2 text-[10.5px] text-muted">
              <span>Minimum composite score</span>
              <select
                value={min}
                onChange={(event) => setMin(Number(event.target.value))}
                aria-label="Minimum composite score"
                className="bg-transparent text-[11px] font-semibold text-ink outline-none"
              >
                <option value={0}>Any</option>
                <option value={50}>50+</option>
                <option value={65}>65+</option>
                <option value={80}>80+</option>
              </select>
            </label>
          </div>

          {activeChips.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
                  {activeChips.length} active filter{activeChips.length === 1 ? "" : "s"}
                </p>
                <button type="button" onClick={reset} className="flex items-center gap-1 text-[9.5px] font-semibold text-danger">
                  <RotateCcw className="size-3" /> Reset all
                </button>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {activeChips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={chip.remove}
                    className="inline-flex items-center gap-1 rounded-full border border-brand/20 bg-brand-soft px-2 py-1 text-[9.5px] font-medium text-brand"
                  >
                    {chip.label} {chip.side} {chip.value}
                    <X className="size-2.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-3 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
            {visibleDistributions.length === 0 && (
              <p className="rounded-lg border border-dashed border-line p-3 text-[11px] text-muted">
                No filters match “{filterSearch}”.
              </p>
            )}
            {[...new Set(visibleDistributions.map((item) => item.category))].map((category) => {
              const items = visibleDistributions.filter((item) => item.category === category);
              const open = filterSearch.trim() ? true : openCategories[category] ?? false;
              return (
                <section key={category} className="border-b border-line pb-2 last:border-0">
                  <button
                    type="button"
                    onClick={() => {
                      if (filterSearch.trim()) {
                        setFilterSearch("");
                        setOpenCategories((current) => ({ ...current, [category]: true }));
                        return;
                      }
                      setOpenCategories((current) => ({ ...current, [category]: !open }));
                    }}
                    className="flex w-full items-center justify-between py-2 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-[12px] font-semibold text-ink">{category}</span>
                    <span className="flex items-center gap-1 text-[9px] text-faint">
                      {items.length}
                      <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                  {open && (
                    <div className="space-y-2 pb-2">
                      {items.map((distribution) => (
                        <RangeFilter
                          key={distribution.key}
                          distribution={distribution}
                          min={ranges[`${distribution.key}Min`] ?? null}
                          max={ranges[`${distribution.key}Max`] ?? null}
                          onChange={({ min: nextMin, max: nextMax }) =>
                            setRanges((current) => ({
                              ...current,
                              [`${distribution.key}Min`]: nextMin,
                              [`${distribution.key}Max`]: nextMax,
                            }))
                          }
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          <div className="mt-3 flex gap-2 border-t border-line pt-3">
            <button type="button" onClick={reset} className="btn btn-ghost h-9 min-h-0 px-3 text-[11px]">
              Reset
            </button>
            <button type="button" onClick={apply} className="btn btn-primary h-9 min-h-0 flex-1 px-3 text-[11px]">
              <span aria-live="polite">
                {variant === "sheet" ? `Done · ${matched} stocks` : `Apply filters · ${matched}`}
              </span>
              {counting && <span className="ml-1 text-[9px] opacity-70">updating…</span>}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted">Your screens</p>
            <button
              type="button"
              onClick={() => setCreating((value) => !value)}
              className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-brand"
            >
              <Plus className="size-3" /> Create screen
            </button>
          </div>
          {creating && (
            <div className="mt-2 rounded-lg border border-dashed border-line p-2">
              <input
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                placeholder="Name this screen"
                className="h-8 w-full rounded-md border border-line bg-paper px-2 text-[11px] outline-none"
              />
              <div className="mt-1.5 flex justify-end gap-1.5">
                <button type="button" onClick={() => setCreating(false)} className="text-[9.5px] text-muted">Cancel</button>
                <button type="button" onClick={saveCurrent} className="text-[9.5px] font-semibold text-brand">Save</button>
              </div>
            </div>
          )}
          <div className="mt-2 space-y-2">
            {saved.length === 0 && !creating && (
              <p className="rounded-lg border border-dashed border-line p-2.5 text-[10.5px] leading-relaxed text-muted">
                Save a filter combination here. Screens are stored in this browser.
              </p>
            )}
            {saved.map((screen) => (
              <div key={screen.id} className="rounded-lg border border-line bg-paper p-2.5">
                {editing === screen.id ? (
                  <div className="flex gap-1.5">
                    <input
                      value={editName}
                      onChange={(event) => setEditName(event.target.value)}
                      className="h-7 min-w-0 flex-1 rounded-md border border-line px-2 text-[10.5px]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        persist(saved.map((item) => item.id === screen.id ? { ...item, name: editName || item.name } : item));
                        setEditing(null);
                      }}
                      className="text-[9.5px] font-semibold text-brand"
                    >Save</button>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-2">
                    <button type="button" onClick={() => applySaved(screen)} className="min-w-0 text-left">
                      <p className="text-[11px] font-semibold text-ink">{screen.name}</p>
                      <p className="mt-0.5 text-[9.5px] text-muted">Apply saved filters</p>
                    </button>
                    <div className="flex shrink-0 gap-1">
                      <button
                        type="button"
                        onClick={() => { setEditing(screen.id); setEditName(screen.name); }}
                        className="text-[9px] font-semibold text-muted"
                      >Rename</button>
                      <button
                        type="button"
                        onClick={() => persist(saved.filter((item) => item.id !== screen.id))}
                        className="text-danger"
                        aria-label={`Delete ${screen.name}`}
                      ><Trash2 className="size-3" /></button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.12em] text-muted">Research screens</p>
          <div className="mt-2 space-y-2">
            {researchScreens.map((screen) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => applyScreen(screen)}
                className="w-full rounded-lg border border-line bg-paper p-2.5 text-left transition-colors hover:border-brand/40 hover:bg-brand-soft/30"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] font-semibold text-ink">{screen.name}</p>
                  <span className="tabular shrink-0 text-[9.5px] font-semibold text-brand">{screen.count} stocks</span>
                </div>
                <p className="mt-1 text-[9.5px] leading-relaxed text-muted">{screen.description}</p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {screen.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-paper-deep px-1.5 py-0.5 text-[8px] font-medium text-muted">{tag}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
