"use client";

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SearchEntry = {
  ticker: string;
  name: string;
  sector: string;
  research: boolean;
};

type FuseLike = {
  search: (query: string) => Array<{ item: SearchEntry }>;
};

const indexPromises = new Map<string, Promise<SearchEntry[]>>();

function loadIndex(indexPath: string): Promise<SearchEntry[]> {
  const existing = indexPromises.get(indexPath);
  if (existing) return existing;
  const promise = fetch(indexPath)
    .then((response) => response.json() as Promise<SearchEntry[]>)
    .catch(() => []);
  indexPromises.set(indexPath, promise);
  return promise;
}

export function FuseSearchInput({
  defaultValue = "",
  formId,
  indexPath = "/data/search-index.json",
}: {
  defaultValue?: string;
  formId?: string;
  indexPath?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [matches, setMatches] = useState<SearchEntry[]>([]);
  const [open, setOpen] = useState(false);
  const fuseRef = useRef<FuseLike | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    const enhance = async () => {
      const [entries, module] = await Promise.all([
        loadIndex(indexPath),
        import("fuse.js"),
      ]);
      if (cancelled) return;
      fuseRef.current = new module.default(entries, {
        keys: [
          { name: "ticker", weight: 0.45 },
          { name: "name", weight: 0.35 },
          { name: "sector", weight: 0.2 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      });
    };
    const onFocus = () => {
      setOpen(true);
      void enhance();
    };
    const input = inputRef.current;
    input?.addEventListener("focus", onFocus);
    return () => {
      cancelled = true;
      input?.removeEventListener("focus", onFocus);
    };
  }, [indexPath]);

  const runSearch = (query: string) => {
    setValue(query);
    if (!fuseRef.current || !query.trim()) {
      setMatches([]);
      return;
    }
    setMatches(
      fuseRef.current
        .search(query)
        .slice(0, 5)
        .map((result) => result.item),
    );
  };

  return (
    <div className="relative flex min-w-0 flex-1">
      <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-lg border border-line bg-white px-3 transition-[border-color,box-shadow] focus-within:border-brand/40 focus-within:ring-2 focus-within:ring-brand/10">
        <Search aria-hidden="true" className="size-4 shrink-0 text-muted" />
        <label htmlFor="discover-search" className="sr-only">
          Search companies
        </label>
        <input
          ref={inputRef}
          id="discover-search"
          name="q"
          value={value}
          onChange={(event) => {
            runSearch(event.target.value);
            setOpen(true);
          }}
          onBlur={() => window.setTimeout(() => setOpen(false), 120)}
          form={formId}
          placeholder="Search companies..."
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-[13.5px] text-ink outline-none placeholder:text-faint"
        />
      </div>
      {open && matches.length > 0 && (
        <ul className="absolute left-0 right-0 top-11 z-30 overflow-hidden rounded-xl border border-line bg-surface shadow-float">
          {matches.map((entry) => (
            <li key={entry.ticker}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  setValue(entry.ticker);
                  setOpen(false);
                  if (inputRef.current) inputRef.current.value = entry.ticker;
                  inputRef.current?.form?.requestSubmit();
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-paper-deep"
              >
                <span className="font-mono text-[10.5px] font-bold text-brand">
                  {entry.ticker}
                </span>
                <span className="min-w-0 flex-1 truncate text-[12.5px] text-ink">
                  {entry.name}
                </span>
                <span className="hidden shrink-0 text-[11px] text-muted sm:block">
                  {entry.sector}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
