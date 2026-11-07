export function MiniTable({
  columns,
  rows,
  caption,
}: {
  columns: string[];
  rows: Array<Array<string | number>>;
  caption?: string;
}) {
  return (
    <table className="w-full min-w-[420px] border-collapse text-[10.5px]">
      {caption && <caption className="pb-1 text-left text-[10px] opacity-60">{caption}</caption>}
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              scope="col"
              className="border-b border-current/15 px-1.5 py-1 text-left font-semibold opacity-60"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border-b border-current/10 px-1.5 py-1 tabular">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
