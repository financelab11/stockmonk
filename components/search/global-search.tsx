"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

type Market = "US";

type Entry = {
  ticker: string;
  name: string;
  sector: string;
  research?: boolean;
  market: Market;
};

type FuseLike = {
  search: (query: string) => Array<{ item: Entry }>;
};

const SOURCES: Array<{ market: Market; path: string }> = [
  { market: "US", path: "/data/search-index.json" },
];

function hrefFor(entry: Entry): string {
  void entry.market;
  return `/stocks/${entry.ticker}`;
}

let indexPromise: Promise<FuseLike | null> | null = null;

function loadIndex(): Promise<FuseLike | null> {
  if (indexPromise) return indexPromise;
  indexPromise = (async () => {
    const [entries, module] = await Promise.all([
      Promise.all(
        SOURCES.map(async (source) => {
          try {
            const response = await fetch(source.path);
            if (!response.ok) return [] as Entry[];
            const rows = (await response.json()) as Array<
              Omit<Entry, "market">
            >;
            return rows.map((row) => ({ ...row, market: source.market }));
          } catch {
            return [] as Entry[];
          }
        }),
      ).then((groups) => groups.flat()),
      import("fuse.js"),
    ]);
    if (!entries.length) return null;
    return new module.default(entries, {
      keys: [
        { name: "ticker", weight: 0.5 },
        { name: "name", weight: 0.35 },
        { name: "sector", weight: 0.15 },
      ],
      threshold: 0.34,
      ignoreLocation: true,
    }) as FuseLike;
  })();
  return indexPromise;
}

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Entry[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const fuseRef = useRef<FuseLike | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
    setActiveIndex(0);
  }, []);

  const go = useCallback(
    (entry: Entry | undefined) => {
      if (!entry) return;
      close();
      router.push(hrefFor(entry));
    },
    [close, router],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      const target = event.target as HTMLElement | null;
      const typing =
        target != null &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      const isShortcut =
        (!typing && event.key === "/") ||
        ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k");
      if (isShortcut) {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    void loadIndex().then((fuse) => {
      fuseRef.current = fuse;
    });
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const runSearch = (value: string) => {
    setQuery(value);
    setActiveIndex(0);
    if (!fuseRef.current || !value.trim()) {
      setResults([]);
      return;
    }
    setResults(
      fuseRef.current
        .search(value)
        .slice(0, 8)
        .map((result) => result.item),
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group hidden h-10 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink md:inline-flex"
        aria-label="Search US companies"
      >
        <Search aria-hidden="true" className="size-4" />
        <span>Search companies</span>
        <kbd className="ml-2 rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-[10px] text-faint">
          /
        </kbd>
      </button>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft md:hidden"
        aria-label="Search US companies"
      >
        <Search aria-hidden="true" className="size-4" />
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-start justify-center bg-ink/40 px-4 pt-[12vh] backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Search companies"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-float">
              <div className="flex items-center gap-2 border-b border-line px-3.5 py-3">
                <Search
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted"
                />
                <label htmlFor="global-search" className="sr-only">
                  Search companies, tickers or sectors
                </label>
                <input
                  ref={inputRef}
                  id="global-search"
                  value={query}
                  onChange={(event) => runSearch(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setActiveIndex((index) =>
                        Math.min(index + 1, results.length - 1),
                      );
                    } else if (event.key === "ArrowUp") {
                      event.preventDefault();
                      setActiveIndex((index) => Math.max(index - 1, 0));
                    } else if (event.key === "Enter") {
                      event.preventDefault();
                      go(results[activeIndex]);
                    }
                  }}
                  placeholder="Search companies, tickers or sectors…"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-faint"
                />
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full p-1 text-muted hover:bg-paper-deep hover:text-ink"
                  aria-label="Close search"
                >
                  <X aria-hidden="true" className="size-4" />
                </button>
              </div>

              <div className="max-h-[58vh] overflow-y-auto p-1.5">
                {query.trim() === "" && (
                  <p className="px-3 py-6 text-center text-[11.5px] leading-relaxed text-muted">
                    Search{" "}
                    <span className="font-semibold text-ink">US companies</span>{" "}
                    by name, ticker or sector.
                  </p>
                )}
                {query.trim() !== "" && results.length === 0 && (
                  <p className="px-3 py-6 text-center text-[11.5px] text-muted">
                    No company matches “{query.trim()}”. Try a ticker or a
                    broader term.
                  </p>
                )}
                {results.map((entry, index) => (
                  <button
                    key={`${entry.market}-${entry.ticker}`}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => go(entry)}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left ${
                      index === activeIndex
                        ? "bg-paper-deep"
                        : "hover:bg-paper-deep"
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12.5px] font-semibold text-ink">
                        {entry.name}
                      </span>
                      <span className="block truncate text-[10.5px] text-muted">
                        {entry.ticker} · {entry.sector}
                      </span>
                    </span>
                    {entry.research && (
                      <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.08em] text-brand">
                        Research
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-line px-3.5 py-2 text-[10px] text-faint">
                <span>↑↓ to move · Enter to open · Esc to close</span>
                <span>US companies</span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
