"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout: number },
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function ChartFrame({
  children,
  height = 300,
  title,
  description,
  table,
  dark = true,
  className = "",
}: {
  children: ReactNode;
  height?: number;
  title?: string;
  description?: string;
  table?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const idleWindow = window as IdleWindow;
    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(
        () => setRendered(true),
        { timeout: 1800 },
      );
      return () => idleWindow.cancelIdleCallback?.(handle);
    }
    const timer = window.setTimeout(() => setRendered(true), 250);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <figure
      ref={ref}
      className={`${dark ? "dark-chart-card" : "card"} overflow-hidden ${className}`}
    >
      {(title || description) && (
        <figcaption className="border-b border-white/10 px-4 py-3">
          {title && (
            <p className={`text-[12px] font-semibold ${dark ? "text-white" : "text-ink"}`}>
              {title}
            </p>
          )}
          {description && (
            <p className={`mt-0.5 text-[10.5px] ${dark ? "text-white/50" : "text-muted"}`}>
              {description}
            </p>
          )}
        </figcaption>
      )}
      <div style={{ height }} className="relative">
        {rendered ? (
          children
        ) : (
          <div className="absolute inset-0 p-4" aria-hidden="true">
            <div className="skeleton h-full w-full rounded-lg opacity-60" />
            <span className="sr-only">Chart loading</span>
          </div>
        )}
      </div>
      {table && (
        <details className={`border-t px-4 py-3 ${dark ? "border-white/10" : "border-line"}`}>
          <summary
            className={`cursor-pointer text-[10.5px] font-semibold ${
              dark ? "text-white/60" : "text-muted"
            }`}
          >
            View data table
          </summary>
          <div className={`mt-2 overflow-x-auto ${dark ? "text-white/75" : "text-ink-soft"}`}>
            {table}
          </div>
        </details>
      )}
    </figure>
  );
}

export function ChartEmpty({ message = "Data unavailable." }: { message?: string }) {
  return (
    <div className="flex h-full items-center justify-center px-4 text-center text-[12px] text-white/45">
      {message}
    </div>
  );
}
