"use client";

import {
  AreaSeries,
  CandlestickSeries,
  ColorType,
  CrosshairMode,
  HistogramSeries,
  createChart,
  type UTCTimestamp,
} from "lightweight-charts";
import { useEffect, useMemo, useRef, useState } from "react";
import { PRICE_RANGES, type PriceRange } from "@/lib/constants";
import { formatCurrency, formatSignedPercent } from "@/lib/format";
import type { RangePricePoint } from "@/lib/schemas";

type Mode = "area" | "candles";

function toSeries(points: RangePricePoint[]) {
  return points
    .filter((point) => Number.isFinite(point.c))
    .map((point) => ({
      time: point.t as UTCTimestamp,
      open: point.o,
      high: point.h,
      low: point.l,
      close: point.c,
      value: point.c,
      volume: point.v,
      color: point.c >= point.o ? "rgba(47,191,143,0.45)" : "rgba(239,107,122,0.45)",
    }));
}

export default function PriceChart({
  ticker,
  initialRange = "1Y",
  initialData,
  height = 340,
  currency = "USD",
  priceBasePath = "/data/prices",
}: {
  ticker: string;
  initialRange?: PriceRange;
  initialData: RangePricePoint[];
  height?: number;
  currency?: string;
  priceBasePath?: string;
}) {
  const [range, setRange] = useState<PriceRange>(initialRange);
  const [mode, setMode] = useState<Mode>("area");
  const [data, setData] = useState<RangePricePoint[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const summary = useMemo(() => {
    const values = data.map((point) => point.c).filter(Number.isFinite);
    if (values.length < 2) return null;
    const first = values[0];
    const last = values[values.length - 1];
    return { first, last, change: last / first - 1 };
  }, [data]);

  useEffect(() => {
    if (range === initialRange && data === initialData) return;
    let cancelled = false;
    setLoading(true);
    setFailed(false);
    fetch(`${priceBasePath}/${ticker}/${range}.json`)
      .then((response) => {
        if (!response.ok) throw new Error("Price data unavailable");
        return response.json() as Promise<RangePricePoint[]>;
      })
      .then((points) => {
        if (!cancelled) setData(points);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range, ticker]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const chart = createChart(container, {
      width: container.clientWidth,
      height,
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#8f95b2",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 10,
      },
      grid: {
        vertLines: { color: "#1d2138" },
        horzLines: { color: "#1d2138" },
      },
      rightPriceScale: { borderColor: "#2c3152" },
      timeScale: {
        borderColor: "#2c3152",
        rightOffset: 2,
        barSpacing: 5,
        fixLeftEdge: true,
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: { color: "#5b8cff", labelBackgroundColor: "#2f6bff" },
        horzLine: { color: "#5b8cff", labelBackgroundColor: "#2f6bff" },
      },
    });
    const seriesData = toSeries(data);

    if (mode === "area") {
      const series = chart.addSeries(AreaSeries, {
        lineColor: "#2fbf8f",
        topColor: "rgba(47,191,143,0.34)",
        bottomColor: "rgba(47,191,143,0.02)",
        lineWidth: 2,
        priceLineVisible: true,
        priceLineColor: "#2fbf8f",
      });
      series.setData(seriesData.map((point) => ({ time: point.time, value: point.value })));
    } else {
      const series = chart.addSeries(CandlestickSeries, {
        upColor: "#2fbf8f",
        downColor: "#ef6b7a",
        borderVisible: false,
        wickUpColor: "#2fbf8f",
        wickDownColor: "#ef6b7a",
      });
      series.setData(
        seriesData.map((point) => ({
          time: point.time,
          open: point.open,
          high: point.high,
          low: point.low,
          close: point.close,
        })),
      );
    }

    const volume = chart.addSeries(HistogramSeries, {
      priceFormat: { type: "volume" },
      priceScaleId: "volume",
      lastValueVisible: false,
      priceLineVisible: false,
    });
    volume.priceScale().applyOptions({
      scaleMargins: { top: 0.82, bottom: 0 },
    });
    volume.setData(
      seriesData.map((point) => ({
        time: point.time,
        value: point.volume,
        color: point.color,
      })),
    );

    chart.timeScale().fitContent();

    const observer = new ResizeObserver(() => {
      chart.applyOptions({ width: container.clientWidth });
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      chart.remove();
    };
  }, [data, height, mode]);

  return (
    <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-white/15 bg-white/5 p-0.5">
              {PRICE_RANGES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setRange(item);
                    const url = new URL(window.location.href);
                    url.searchParams.set("range", item);
                    window.history.replaceState(null, "", url.toString());
                  }}
                  aria-pressed={range === item}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors ${
                    range === item
                      ? "bg-white text-[#12122b]"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex rounded-full border border-white/15 bg-white/5 p-0.5">
              <button
                type="button"
                onClick={() => setMode("area")}
                aria-pressed={mode === "area"}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  mode === "area" ? "bg-white text-[#12122b]" : "text-white/55"
                }`}
              >
                Area
              </button>
              <button
                type="button"
                onClick={() => setMode("candles")}
                aria-pressed={mode === "candles"}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  mode === "candles" ? "bg-white text-[#12122b]" : "text-white/55"
                }`}
              >
                Candles
              </button>
            </div>
          </div>
          {summary && (
            <div className="flex items-baseline gap-2 text-[11px]">
              <span className="tabular font-semibold text-white">
                {formatCurrency(summary.last, 2, currency)}
              </span>
              <span
                className={`tabular font-semibold ${
                  summary.change >= 0 ? "text-[#2fbf8f]" : "text-[#ef6b7a]"
                }`}
              >
                {formatSignedPercent(summary.change)} over {range}
              </span>
            </div>
          )}
        </div>

        <div className="relative min-h-0 flex-1 px-1" ref={containerRef} role="img" aria-label={`${ticker} price chart for ${range}`} />

        {(loading || failed) && (
          <p className="pointer-events-none absolute inset-x-0 top-1/2 text-center text-[11px] text-white/60">
            {failed ? "Price data unavailable for this range." : "Loading price history…"}
          </p>
        )}
    </div>
  );
}
