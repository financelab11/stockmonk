"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, FileSpreadsheet, Upload } from "lucide-react";
import type {
  ParsedUpload,
  ResolvedRow,
  UploadMapping,
  ThresholdUnit,
} from "@/lib/growth-ranker/types";
import { inrCrore, statusTone } from "./format";
import { RunPanel } from "./run-panel";
import { ResultsPanel } from "./results-panel";

export type FxInfo = {
  pair: string;
  rate: number;
  asOf: string;
  source: string;
};

type Props = {
  fx: FxInfo | null;
  llmConfigured: boolean;
  defaults: {
    thresholdValue: number;
    thresholdUnit: ThresholdUnit;
    minAnalysts: number;
    divergenceFlagPct: number;
  };
};

const STEPS = ["Upload", "Map columns", "Resolve", "Filter", "Run", "Results"];

const SAMPLE =
  "KAYNES\nAPLAPOLLO\nCDSL\nCAMS\nANGELONE\nBRIGADE\nFINEORG\nGRAVITA\nDATAPATTNS\nPOLYMED";

export function GrowthRanker({ fx, llmConfigured, defaults }: Props) {
  const [step, setStep] = useState(1);
  const [upload, setUpload] = useState<ParsedUpload | null>(null);
  const [mapping, setMapping] = useState<UploadMapping>({
    ticker: null,
    name: null,
    exchange: null,
    marketCap: null,
  });
  const [resolved, setResolved] = useState<ResolvedRow[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [thresholdValue, setThresholdValue] = useState(defaults.thresholdValue);
  const [thresholdUnit, setThresholdUnit] = useState<ThresholdUnit>(defaults.thresholdUnit);
  const [minAnalysts, setMinAnalysts] = useState(defaults.minAnalysts);
  const [divergenceFlagPct, setDivergenceFlagPct] = useState(
    Math.round(defaults.divergenceFlagPct * 100),
  );
  const restored = useRef(false);

  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    const fromUrl = new URLSearchParams(window.location.search).get("job");
    const stored = window.localStorage.getItem("growth-ranker-job");
    const id = fromUrl ?? stored;
    if (id && /^[a-f0-9-]{36}$/i.test(id)) {
      setJobId(id);
      setStep(5);
    }
  }, []);

  useEffect(() => {
    if (jobId) {
      window.localStorage.setItem("growth-ranker-job", jobId);
      const url = new URL(window.location.href);
      url.searchParams.set("job", jobId);
      window.history.replaceState(null, "", url.toString());
    }
  }, [jobId]);

  const handleParsed = useCallback((data: ParsedUpload) => {
    setUpload(data);
    setMapping(data.mapping);
    setResolved([]);
    setStep(2);
    setError(null);
  }, []);

  const resolve = useCallback(async () => {
    if (!upload) return;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/tools/growth-ranker/resolve", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ rows: upload.rows, mapping }),
      });
      const payload = (await response.json()) as { rows?: ResolvedRow[]; error?: string };
      if (!response.ok || !payload.rows) {
        throw new Error(payload.error ?? "Could not resolve the list.");
      }
      setResolved(payload.rows);
      setStep(3);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not resolve the list.");
    } finally {
      setBusy(false);
    }
  }, [mapping, upload]);

  const updateRow = useCallback((row: ResolvedRow) => {
    setResolved((current) =>
      current.map((item) => (item.rowNumber === row.rowNumber ? row : item)),
    );
  }, []);

  const eligible = useMemo(() => {
    if (!fx) return [];
    const thresholdInr =
      thresholdUnit === "USD_MILLION"
        ? thresholdValue * fx.rate * 1_000_000
        : thresholdValue * 10_000_000;
    return resolved.filter(
      (row) =>
        row.status === "matched" &&
        row.ticker &&
        row.name &&
        row.marketCapInr != null &&
        row.marketCapInr >= thresholdInr,
    );
  }, [fx, resolved, thresholdUnit, thresholdValue]);

  const counts = useMemo(() => {
    const matched = resolved.filter((row) => row.status === "matched");
    const missingCap = matched.filter((row) => row.marketCapInr == null).length;
    return {
      total: resolved.length,
      matched: matched.length,
      eligible: eligible.length,
      below: matched.length - missingCap - eligible.length,
      missingCap,
      ambiguous: resolved.filter((row) => row.status === "ambiguous").length,
      unmatched: resolved.filter((row) => row.status === "unmatched").length,
      unresolved: resolved.filter(
        (row) => row.status === "unmatched" || row.status === "ambiguous",
      ).length,
      skipped: resolved.filter((row) => row.status === "skipped").length,
    };
  }, [eligible.length, resolved]);

  const start = useCallback(async () => {
    if (!eligible.length) return;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/tools/growth-ranker/jobs", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          rows: eligible.map((row) => ({
            rowNumber: row.rowNumber,
            ticker: row.ticker,
            name: row.name,
          })),
          settings: {
            thresholdValue,
            thresholdUnit,
            minAnalysts,
            divergenceFlagPct: Math.max(0.01, divergenceFlagPct / 100),
          },
        }),
      });
      const payload = (await response.json()) as { job?: { id: string }; error?: string };
      if (!response.ok || !payload.job) {
        throw new Error(payload.error ?? "Could not start the batch.");
      }
      setJobId(payload.job.id);
      setStep(5);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not start the batch.");
    } finally {
      setBusy(false);
    }
  }, [divergenceFlagPct, eligible, minAnalysts, thresholdUnit, thresholdValue]);

  const reset = useCallback(() => {
    window.localStorage.removeItem("growth-ranker-job");
    const url = new URL(window.location.href);
    url.searchParams.delete("job");
    window.history.replaceState(null, "", url.toString());
    setJobId(null);
    setUpload(null);
    setResolved([]);
    setStep(1);
    setError(null);
  }, []);

  return (
    <div>
      <ol className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-6" aria-label="Progress">
        {STEPS.map((label, index) => {
          const number = index + 1;
          const active = number === step;
          const done = number < step;
          return (
            <li
              key={label}
              className={`rounded-lg border px-2.5 py-2 text-[10.5px] ${
                active
                  ? "border-brand bg-brand-soft text-brand-deep"
                  : done
                    ? "border-line bg-surface text-positive"
                    : "border-line bg-surface text-muted"
              }`}
              aria-current={active ? "step" : undefined}
            >
              <span className="block font-mono text-[9px]">0{number}</span>
              <span className="mt-0.5 flex items-center gap-1 font-semibold">
                {done && <Check aria-hidden="true" className="size-3" />}
                {label}
              </span>
            </li>
          );
        })}
      </ol>

      {error && (
        <div className="mb-4 rounded-lg border border-danger/30 bg-danger-soft px-3.5 py-2.5 text-[12px] text-danger">
          {error}
        </div>
      )}

      {!fx && (
        <div className="mb-4 rounded-lg border border-amber/30 bg-amber-soft px-3.5 py-2.5 text-[12px] text-amber">
          No dated USD/INR rate is configured, so USD-million thresholds are
          disabled. Add <code>data/fx/usd-inr.json</code> or set
          <code> GROWTH_RANKER_USD_INR</code> and <code>GROWTH_RANKER_FX_ASOF</code>.
        </div>
      )}

      {!llmConfigured && (
        <div className="mb-4 rounded-lg border border-line bg-paper-deep px-3.5 py-2.5 text-[11.5px] leading-relaxed text-muted">
          Deterministic mode: consensus-led estimates only. Companies without
          consensus are skipped, never invented. Configure
          <code> GROWTH_RANKER_LLM_*</code> to enable the bespoke analyst model and
          independent sanity checks.
        </div>
      )}

      {step === 1 && <UploadStep onParsed={handleParsed} busy={busy} setBusy={setBusy} setError={setError} />}

      {step === 2 && upload && (
        <MappingStep
          upload={upload}
          mapping={mapping}
          setMapping={setMapping}
          onBack={() => setStep(1)}
          onNext={resolve}
          busy={busy}
        />
      )}

      {step === 3 && (
        <ResolveStep
          rows={resolved}
          onUpdate={updateRow}
          counts={{
            total: counts.total,
            matched: counts.matched,
            ambiguous: counts.ambiguous,
            unmatched: counts.unmatched,
            skipped: counts.skipped,
          }}
          onBack={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <FilterStep
          fx={fx}
          counts={{
            total: counts.total,
            matched: counts.matched,
            eligible: counts.eligible,
            below: counts.below,
            missingCap: counts.missingCap,
            unmatched: counts.unresolved,
            skipped: counts.skipped,
          }}
          rows={resolved}
          thresholdValue={thresholdValue}
          setThresholdValue={setThresholdValue}
          thresholdUnit={thresholdUnit}
          setThresholdUnit={setThresholdUnit}
          minAnalysts={minAnalysts}
          setMinAnalysts={setMinAnalysts}
          divergenceFlagPct={divergenceFlagPct}
          setDivergenceFlagPct={setDivergenceFlagPct}
          onBack={() => setStep(3)}
          onStart={start}
          busy={busy}
        />
      )}

      {step === 5 && jobId && (
        <RunPanel
          jobId={jobId}
          onViewResults={() => setStep(6)}
          onReset={reset}
        />
      )}

      {step === 6 && jobId && <ResultsPanel jobId={jobId} onReset={reset} />}
    </div>
  );
}

function UploadStep({
  onParsed,
  busy,
  setBusy,
  setError,
}: {
  onParsed: (data: ParsedUpload) => void;
  busy: boolean;
  setBusy: (value: boolean) => void;
  setError: (value: string | null) => void;
}) {
  const [text, setText] = useState("");
  const [dragging, setDragging] = useState(false);

  const send = useCallback(
    async (payload: { text?: string; fileBase64?: string; fileName?: string }) => {
      setBusy(true);
      setError(null);
      try {
        const response = await fetch("/api/tools/growth-ranker/parse", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = (await response.json()) as { upload?: ParsedUpload; error?: string };
        if (!response.ok || !data.upload) throw new Error(data.error ?? "Could not parse input.");
        onParsed(data.upload);
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : "Could not parse input.");
      } finally {
        setBusy(false);
      }
    },
    [onParsed, setBusy, setError],
  );

  const handleFile = useCallback(
    async (file: File) => {
      const isZip =
        file.name.toLowerCase().endsWith(".xlsx") ||
        file.name.toLowerCase().endsWith(".xlsm");
      if (isZip) {
        const buffer = await file.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = "";
        for (let index = 0; index < bytes.length; index += 0x8000) {
          binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
        }
        await send({ fileBase64: btoa(binary), fileName: file.name });
      } else {
        await send({ text: await file.text(), fileName: file.name });
      }
    },
    [send],
  );

  return (
    <section className="card p-5 sm:p-6">
      <p className="kicker">Step 1</p>
      <h2 className="display mt-2 text-[24px] tracking-[-0.02em] text-ink">
        Upload a company list
      </h2>
      <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
        CSV, XLSX or a pasted list. Up to 2,500 rows and 25 MB. Ticker and
        company-name columns are detected automatically; you confirm the mapping
        next. Refinitiv RIC identifiers (`.NS`/`.BO`) are supported.
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="growth-paste" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
            Paste tickers or names
          </label>
          <textarea
            id="growth-paste"
            value={text}
            onChange={(event) => setText(event.target.value)}
            rows={9}
            spellCheck={false}
            placeholder={"KAYNES\nAPLAPOLLO\nCDSL"}
            className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-2.5 font-mono text-[12px] leading-relaxed text-ink outline-none focus:border-brand"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              className="btn btn-primary"
              disabled={busy || !text.trim()}
              onClick={() => send({ text })}
            >
              Parse pasted list
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setText(SAMPLE)}
            >
              Use sample
            </button>
          </div>
        </div>

        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            const file = event.dataTransfer.files?.[0];
            if (file) void handleFile(file);
          }}
          className={`flex flex-col items-center justify-center rounded-xl border border-dashed px-5 py-10 text-center ${
            dragging ? "border-brand bg-brand-soft" : "border-line-strong bg-paper-deep"
          }`}
        >
          <FileSpreadsheet aria-hidden="true" className="size-8 text-brand" />
          <p className="mt-3 text-[13px] font-semibold text-ink">Drop a CSV or XLSX file</p>
          <p className="mt-1 text-[11px] text-muted">First worksheet only, 25 MB limit</p>
          <label className="btn btn-ghost mt-3 cursor-pointer">
            <Upload aria-hidden="true" className="size-3.5" />
            Choose file
            <input
              type="file"
              accept=".csv,.xlsx,.xlsm,text/csv"
              className="sr-only"
              disabled={busy}
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void handleFile(file);
              }}
            />
          </label>
          <p className="mt-3 text-[10px] leading-relaxed text-faint">
            XLSX is parsed locally on the server from the first worksheet. Legacy
            .xls files should be saved as .xlsx or CSV first.
          </p>
        </div>
      </div>
    </section>
  );
}

function MappingStep({
  upload,
  mapping,
  setMapping,
  onBack,
  onNext,
  busy,
}: {
  upload: ParsedUpload;
  mapping: UploadMapping;
  setMapping: (mapping: UploadMapping) => void;
  onBack: () => void;
  onNext: () => void;
  busy: boolean;
}) {
  const preview = upload.rows.slice(0, 6);
  const fields: Array<{ key: keyof UploadMapping; label: string; required?: boolean }> = [
    { key: "ticker", label: "Ticker", required: true },
    { key: "name", label: "Company name" },
    { key: "exchange", label: "Exchange" },
    { key: "marketCap", label: "Market cap" },
  ];

  return (
    <section className="card p-5 sm:p-6">
      <p className="kicker">Step 2</p>
      <h2 className="display mt-2 text-[24px] tracking-[-0.02em] text-ink">
        Confirm column mapping
      </h2>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        {upload.rows.length.toLocaleString()} row{upload.rows.length === 1 ? "" : "s"} parsed
        {upload.truncated ? " (truncated to the 2,000-row limit)" : ""}. Map at least the
        ticker or company-name column.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {fields.map((field) => (
          <label key={field.key} className="text-[11px] font-semibold text-muted">
            {field.label}
            {field.required && <span className="text-danger"> *</span>}
            <select
              value={mapping[field.key] ?? ""}
              onChange={(event) =>
                setMapping({ ...mapping, [field.key]: event.target.value || null })
              }
              className="mt-1 w-full rounded-lg border border-line bg-surface px-2.5 py-2 text-[12px] text-ink"
            >
              <option value="">Not mapped</option>
              {upload.headers.map((header) => (
                <option key={header} value={header}>
                  {header}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-line">
        <table className="data-table min-w-[640px]">
          <thead>
            <tr>
              {upload.headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {preview.map((row) => (
              <tr key={row.rowNumber}>
                {upload.headers.map((header) => (
                  <td key={header}>{row.values[header] || "—"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={busy || (!mapping.ticker && !mapping.name)}
          onClick={onNext}
        >
          {busy ? "Resolving…" : "Resolve companies"}
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </button>
      </div>
    </section>
  );
}

function downloadGaps(rows: ResolvedRow[]): void {
  const gaps = rows.filter(
    (row) => row.status === "ambiguous" || row.status === "unmatched",
  );
  const escape = (value: string): string => {
    const safe = /^[=+\-@]/.test(value) ? `'${value}` : value;
    return /[",\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
  };
  const csv = [
    "row,input_ticker,input_name,status,suggested_tickers",
    ...gaps.map((row) =>
      [
        row.rowNumber,
        row.inputTicker,
        row.inputName,
        row.status,
        row.suggestions.map((item) => item.ticker).join("|"),
      ]
        .map((value) => escape(String(value)))
        .join(","),
    ),
  ].join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "growth-ranker-coverage-gaps.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function ResolveStep({
  rows,
  onUpdate,
  counts,
  onBack,
  onNext,
}: {
  rows: ResolvedRow[];
  onUpdate: (row: ResolvedRow) => void;
  counts: { total: number; matched: number; ambiguous: number; unmatched: number; skipped: number };
  onBack: () => void;
  onNext: () => void;
}) {
  const [page, setPage] = useState(1);
  const pageSize = 25;
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  const visible = rows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="card p-5 sm:p-6">
      <p className="kicker">Step 3</p>
      <h2 className="display mt-2 text-[24px] tracking-[-0.02em] text-ink">
        Resolve names
      </h2>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        Exact ticker and name matches resolve automatically. Review ambiguous rows,
        pick a suggestion, or skip the row. Resolution is against the current
        India directory; names outside it remain unmatched so coverage gaps are
        visible rather than hidden.
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
        <span className="chip chip-positive">{counts.matched} matched</span>
        <span className="chip chip-caution">{counts.ambiguous} ambiguous</span>
        <span className="chip chip-danger">{counts.unmatched} unmatched</span>
        <span className="chip">{counts.skipped} skipped</span>
        <span className="chip">{counts.total} total</span>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="data-table min-w-[860px]">
          <thead>
            <tr>
              <th scope="col">Row</th>
              <th scope="col">Input</th>
              <th scope="col">Match</th>
              <th scope="col">Market cap</th>
              <th scope="col">Status</th>
              <th scope="col">Fix</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <ResolveRow key={row.rowNumber} row={row} onUpdate={onUpdate} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[11px] text-muted">
          <button
            type="button"
            className="btn btn-quiet"
            disabled={page <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            Previous
          </button>
          <span>
            Page {page} of {pageCount}
          </span>
          <button
            type="button"
            className="btn btn-quiet"
            disabled={page >= pageCount}
            onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
          >
            Next
          </button>
          {counts.unmatched + counts.ambiguous > 0 && (
            <button
              type="button"
              className="btn btn-quiet"
              onClick={() => downloadGaps(rows)}
            >
              Download coverage gaps ({counts.unmatched + counts.ambiguous})
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button type="button" className="btn btn-ghost" onClick={onBack}>
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={onNext}>
            Continue to filter
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ResolveRow({
  row,
  onUpdate,
}: {
  row: ResolvedRow;
  onUpdate: (row: ResolvedRow) => void;
}) {
  const [value, setValue] = useState(row.suggestions[0]?.ticker ?? "");
  const [busy, setBusy] = useState(false);

  const apply = useCallback(async () => {
    if (!value.trim()) return;
    setBusy(true);
    try {
      const response = await fetch("/api/tools/growth-ranker/resolve", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          rows: [{ rowNumber: row.rowNumber, values: { ticker: value } }],
          mapping: { ticker: "ticker", name: null, exchange: null, marketCap: null },
        }),
      });
      const payload = (await response.json()) as { rows?: ResolvedRow[] };
      if (payload.rows?.[0]) {
        onUpdate({ ...payload.rows[0], rowNumber: row.rowNumber });
      }
    } finally {
      setBusy(false);
    }
  }, [onUpdate, row.rowNumber, value]);

  return (
    <tr>
      <td className="tabular text-muted">{row.rowNumber}</td>
      <td>
        <span className="block font-mono text-[11px] text-ink">{row.inputTicker || "—"}</span>
        <span className="block text-[10.5px] text-muted">{row.inputName || "—"}</span>
      </td>
      <td>
        {row.ticker ? (
          <>
            <span className="block font-mono text-[11px] font-semibold text-ink">{row.ticker}</span>
            <span className="block text-[10.5px] text-muted">{row.name}</span>
          </>
        ) : (
          <span className="text-[11px] text-muted">—</span>
        )}
      </td>
      <td className="tabular text-[11px]">
        {row.marketCapInr != null ? inrCrore(row.marketCapInr) : "n/a"}
        {row.marketCapAsOf && (
          <span className="block text-[9.5px] text-faint">as of {row.marketCapAsOf}</span>
        )}
      </td>
      <td>
        <span className={`text-[11px] font-semibold ${statusTone(row.status === "matched" ? "done" : row.status)}`}>
          {row.status}
        </span>
      </td>
      <td>
        <div className="flex flex-wrap items-center gap-1.5">
          {row.suggestions.length > 0 && (
            <select
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="max-w-[140px] rounded border border-line bg-surface px-1.5 py-1 text-[10.5px]"
              aria-label={`Suggested match for row ${row.rowNumber}`}
            >
              <option value="">Suggestion…</option>
              {row.suggestions.map((suggestion) => (
                <option key={suggestion.ticker} value={suggestion.ticker}>
                  {suggestion.ticker} ({Math.round(suggestion.score * 100)}%)
                </option>
              ))}
            </select>
          )}
          <input
            value={value}
            onChange={(event) => setValue(event.target.value.toUpperCase())}
            placeholder="Ticker"
            className="w-[86px] rounded border border-line bg-surface px-1.5 py-1 font-mono text-[10.5px]"
            aria-label={`Ticker override for row ${row.rowNumber}`}
          />
          <button
            type="button"
            className="btn btn-quiet px-2 py-1 text-[10px]"
            disabled={busy || !value.trim()}
            onClick={apply}
          >
            Apply
          </button>
          <button
            type="button"
            className="btn btn-quiet px-2 py-1 text-[10px] text-muted"
            onClick={() =>
              onUpdate({
                ...row,
                status: "skipped",
                ticker: null,
                name: null,
                marketCapInr: null,
              })
            }
          >
            Skip
          </button>
        </div>
      </td>
    </tr>
  );
}

function FilterStep({
  fx,
  counts,
  rows,
  thresholdValue,
  setThresholdValue,
  thresholdUnit,
  setThresholdUnit,
  minAnalysts,
  setMinAnalysts,
  divergenceFlagPct,
  setDivergenceFlagPct,
  onBack,
  onStart,
  busy,
}: {
  fx: FxInfo | null;
  counts: { total: number; matched: number; eligible: number; below: number; missingCap: number; unmatched: number; skipped: number };
  rows: ResolvedRow[];
  thresholdValue: number;
  setThresholdValue: (value: number) => void;
  thresholdUnit: ThresholdUnit;
  setThresholdUnit: (unit: ThresholdUnit) => void;
  minAnalysts: number;
  setMinAnalysts: (value: number) => void;
  divergenceFlagPct: number;
  setDivergenceFlagPct: (value: number) => void;
  onBack: () => void;
  onStart: () => void;
  busy: boolean;
}) {
  const thresholdInr =
    fx == null
      ? null
      : thresholdUnit === "USD_MILLION"
        ? thresholdValue * fx.rate * 1_000_000
        : thresholdValue * 10_000_000;
  const excluded = rows
    .filter((row) => row.status === "matched" && row.marketCapInr != null && thresholdInr != null && row.marketCapInr < thresholdInr)
    .slice(0, 8);
  const unavailable = rows
    .filter((row) => row.status === "matched" && row.marketCapInr == null)
    .slice(0, 8);

  return (
    <section className="card p-5 sm:p-6">
      <p className="kicker">Step 4</p>
      <h2 className="display mt-2 text-[24px] tracking-[-0.02em] text-ink">
        Market-cap filter and settings
      </h2>
      <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
        Only qualifying companies are sent to the research queue. The threshold is
        applied to the market cap recorded in the India directory, with its own
        as-of date.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-[11px] font-semibold text-muted">
          Market cap threshold
          <input
            type="number"
            min={1}
            step={100}
            value={thresholdValue}
            onChange={(event) => setThresholdValue(Math.max(1, Number(event.target.value) || 1))}
            className="mt-1 w-full rounded-lg border border-line bg-surface px-2.5 py-2 text-[13px] text-ink"
          />
        </label>
        <label className="text-[11px] font-semibold text-muted">
          Unit
          <select
            value={thresholdUnit}
            onChange={(event) => setThresholdUnit(event.target.value as ThresholdUnit)}
            className="mt-1 w-full rounded-lg border border-line bg-surface px-2.5 py-2 text-[13px] text-ink"
          >
            <option value="INR_CRORE">INR crore</option>
            <option value="USD_MILLION" disabled={!fx}>
              USD million
            </option>
          </select>
        </label>
        <label className="text-[11px] font-semibold text-muted">
          Minimum consensus analysts
          <input
            type="number"
            min={1}
            max={50}
            value={minAnalysts}
            onChange={(event) => setMinAnalysts(Math.max(1, Number(event.target.value) || 1))}
            className="mt-1 w-full rounded-lg border border-line bg-surface px-2.5 py-2 text-[13px] text-ink"
          />
        </label>
        <label className="text-[11px] font-semibold text-muted">
          Divergence flag (%)
          <input
            type="number"
            min={1}
            max={100}
            value={divergenceFlagPct}
            onChange={(event) => setDivergenceFlagPct(Math.max(1, Number(event.target.value) || 10))}
            className="mt-1 w-full rounded-lg border border-line bg-surface px-2.5 py-2 text-[13px] text-ink"
          />
        </label>
      </div>

      <p className="mt-2 text-[10.5px] text-muted">
        {fx
          ? `FX reference: 1 USD = ₹${fx.rate.toFixed(2)} (as of ${fx.asOf}). ${fx.source}`
          : "FX rate unavailable; USD thresholds disabled."}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {[
          ["Total rows", counts.total],
          ["Matched", counts.matched],
          ["Above threshold", counts.eligible],
          ["Below threshold", counts.below],
          ["Market cap n/a", counts.missingCap],
          ["Unresolved", counts.unmatched],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-lg border border-line bg-paper-deep px-3 py-2">
            <p className="stat-label">{label}</p>
            <p className="tabular mt-0.5 text-[18px] font-semibold text-ink">{value}</p>
          </div>
        ))}
      </div>

      {(excluded.length > 0 || unavailable.length > 0) && (
        <details className="mt-4 rounded-lg border border-line bg-surface px-3.5 py-3">
          <summary className="cursor-pointer text-[11.5px] font-semibold text-ink">
            Excluded companies ({counts.below + counts.missingCap})
          </summary>
          <ul className="mt-2 space-y-1 text-[11px] text-muted">
            {excluded.map((row) => (
              <li key={row.rowNumber}>
                <span className="font-mono text-ink">{row.ticker}</span> — below threshold
                ({inrCrore(row.marketCapInr)})
              </li>
            ))}
            {unavailable.map((row) => (
              <li key={row.rowNumber}>
                <span className="font-mono text-ink">{row.ticker}</span> — market cap
                unavailable
              </li>
            ))}
          </ul>
        </details>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={busy || counts.eligible === 0}
          onClick={onStart}
        >
          {busy ? "Starting…" : `Start research (${counts.eligible})`}
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </button>
      </div>
      {counts.eligible === 0 && (
        <p className="mt-2 text-[11px] text-danger">
          No companies pass the filter. Lower the threshold or resolve more rows.
        </p>
      )}
    </section>
  );
}
