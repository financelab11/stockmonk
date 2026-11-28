"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "stockmonk:recently-viewed:v1";
const LIMIT = 8;
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
      .slice(0, LIMIT);
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
    // Keep the in-memory snapshot when storage is unavailable.
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

export function recordCompanyView(ticker: string) {
  if (typeof window === "undefined") return;
  const normalized = ticker.trim().toUpperCase();
  if (!normalized) return;
  const current = getSnapshot();
  if (current[0] === normalized) return;
  write(
    [normalized, ...current.filter((item) => item !== normalized)].slice(
      0,
      LIMIT,
    ),
  );
}

export function useRecentlyViewed() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
