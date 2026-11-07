"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "stockmonk:watchlist:v1";
const EMPTY: string[] = [];

let snapshot: string[] | null = null;
const listeners = new Set<() => void>();

function read(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed
      .filter((value): value is string => typeof value === "string")
      .map((value) => value.toUpperCase())
      .slice(0, 100);
  } catch {
    return EMPTY;
  }
}

function emit() {
  for (const listener of listeners) listener();
}

function write(next: string[]) {
  snapshot = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Private modes can reject storage; keep the in-memory snapshot.
  }
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): string[] {
  if (snapshot === null) snapshot = read();
  return snapshot;
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    snapshot = read();
    emit();
  });
}

export function useWatchlist() {
  const tickers = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    tickers,
    has: (ticker: string) => tickers.includes(ticker.toUpperCase()),
    toggle: (ticker: string) => {
      const normalized = ticker.toUpperCase();
      const current = getSnapshot();
      write(
        current.includes(normalized)
          ? current.filter((value) => value !== normalized)
          : [...current, normalized],
      );
    },
    remove: (ticker: string) => {
      const normalized = ticker.toUpperCase();
      write(getSnapshot().filter((value) => value !== normalized));
    },
    clear: () => write([]),
  };
}
