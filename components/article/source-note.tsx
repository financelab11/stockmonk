import type { ArticleSource } from "@/lib/article";
import { formatDate } from "@/lib/format";

export function SourceNote({
  sources,
  ids,
  asOf,
}: {
  sources: ArticleSource[];
  ids: number[];
  asOf?: string | null;
}) {
  const selected = ids
    .map((id) => sources.find((source) => source.id === id))
    .filter((source): source is ArticleSource => Boolean(source));

  return (
    <div className="mt-4 border-t border-line pt-3 text-[10.5px] leading-relaxed text-muted">
      <span className="font-semibold uppercase tracking-[0.1em] text-faint">Sources</span>{" "}
      {selected.map((source, index) => (
        <span key={source.id}>
          <a
            href={source.url}
            target={source.url.startsWith("http") ? "_blank" : undefined}
            rel={source.url.startsWith("http") ? "noreferrer noopener" : undefined}
            className="underline decoration-line-strong underline-offset-2 hover:text-ink"
            title={source.note}
          >
            [{source.id}] {source.publisher} · {source.name}
          </a>
          {source.date && source.date !== "n/a" ? ` (${formatDate(source.date)})` : ""}
          {index < selected.length - 1 ? " · " : ""}
        </span>
      ))}
      {asOf && (
        <span className="ml-1 text-faint">· Data as of {formatDate(asOf)}.</span>
      )}
    </div>
  );
}
