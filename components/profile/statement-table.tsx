import type { ProfileTable } from "@/lib/schemas";

export function StatementTable({
  table,
  emptyLabel = "No data available.",
}: {
  table: ProfileTable;
  /** Kept for call-site compatibility; tables now render every row. */
  collapsibleAfter?: number;
  emptyLabel?: string;
}) {
  if (!table.rows.length || !table.headers.length) {
    return (
      <p className="rounded-xl border border-dashed border-line bg-surface p-4 text-[11.5px] text-muted">
        {emptyLabel}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="data-table min-w-[760px]">
        <thead>
          <tr>
            {table.headers.map((header, index) => (
              <th
                key={`${header}-${index}`}
                scope="col"
                className={
                  index === 0
                    ? "sticky left-0 z-10 bg-surface text-left"
                    : "whitespace-nowrap text-right"
                }
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th
                    key={cellIndex}
                    scope="row"
                    className="sticky left-0 z-10 whitespace-nowrap bg-surface text-left text-[11px] font-medium text-ink"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={cellIndex}
                    className="tabular whitespace-nowrap text-right text-[11px] text-ink-soft"
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
