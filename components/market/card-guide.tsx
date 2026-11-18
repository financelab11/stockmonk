export function CardGuide({ scope }: { scope: string }) {
  const items = [
    {
      title: "Growth and profitability",
      body: "How fast revenue is growing over the trailing twelve months, and how much of it reaches operating profit.",
    },
    {
      title: "Relative comparisons",
      body: `Percentile chips rank a company against ${scope}. They describe the numbers and are not ratings.`,
    },
    {
      title: "Price and returns",
      body: "The latest close, the change versus the prior close, and the one-year return, each labelled with its period.",
    },
    {
      title: "Research insight",
      body: "A short data-derived note on what stands out. It changes when the metrics change, not when a narrative does.",
    },
    {
      title: "Reporting periods",
      body: "TTM means trailing twelve months. Where a figure is an annual or quarterly value, the label says so.",
    },
    {
      title: "A starting point",
      body: "A card summarises a business. The report behind it carries the sources, the caveats and the full statements.",
    },
  ];

  return (
    <details className="mt-3 rounded-xl border border-line bg-surface">
      <summary className="cursor-pointer px-3.5 py-2.5 text-[11.5px] font-semibold text-ink">
        How to read these cards
      </summary>
      <div className="grid gap-2.5 border-t border-line px-3.5 py-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-lg bg-paper-deep p-2.5">
            <h3 className="text-[11.5px] font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-[10.5px] leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </details>
  );
}
