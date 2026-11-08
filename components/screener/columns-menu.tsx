"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Columns3 } from "lucide-react";

export type ColumnChoice = {
  key: string;
  label: string;
  group: string;
};

export function ColumnsMenu({
  columns,
  selected,
  baseSearch,
}: {
  columns: ColumnChoice[];
  selected: string[];
  baseSearch: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<string[]>(selected);

  const toggle = (key: string) => {
    setChoice((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  };

  const apply = () => {
    const search = new URLSearchParams(baseSearch);
    if (choice.length) search.set("cols", choice.join(","));
    else search.delete("cols");
    const query = search.toString();
    router.push(query ? `/screener?${query}` : "/screener");
    setOpen(false);
  };

  const groups = [...new Set(columns.map((column) => column.group))];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-line bg-surface px-3 text-[11px] font-semibold text-ink-soft hover:border-line-strong hover:text-ink"
      >
        <Columns3 aria-hidden="true" className="size-3.5" />
        Columns
        <span className="rounded-full bg-paper-deep px-1.5 text-[9px] text-muted">{choice.length}</span>
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Choose table columns"
          className="absolute right-0 top-11 z-40 max-h-[420px] w-72 overflow-y-auto rounded-xl border border-line bg-surface p-3 shadow-float"
        >
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-ink">Visible columns</p>
            <button type="button" onClick={() => setOpen(false)} className="text-[10px] text-muted hover:text-ink">Close</button>
          </div>
          <div className="mt-2 space-y-3">
            {groups.map((group) => (
              <div key={group}>
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-faint">{group}</p>
                <div className="mt-1 grid grid-cols-2 gap-x-2 gap-y-1.5">
                  {columns
                    .filter((column) => column.group === group)
                    .map((column) => (
                      <label key={column.key} className="flex items-center gap-1.5 text-[10.5px] text-ink-soft">
                        <input
                          type="checkbox"
                          checked={choice.includes(column.key)}
                          onChange={() => toggle(column.key)}
                          className="size-3.5 accent-brand"
                        />
                        {column.label}
                      </label>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-end gap-2 border-t border-line pt-2">
            <button type="button" onClick={() => setChoice(selected)} className="text-[10.5px] text-muted">Reset</button>
            <button type="button" onClick={apply} className="rounded-lg bg-brand px-3 py-1.5 text-[10.5px] font-semibold text-white">Apply</button>
          </div>
        </div>
      )}
    </div>
  );
}
