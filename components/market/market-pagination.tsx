import { paginationWindow } from "@/lib/pagination";

export function MarketPagination({
  page,
  pageCount,
  total,
  first,
  last,
  hrefFor,
  label,
}: {
  page: number;
  pageCount: number;
  total: number;
  first: number;
  last: number;
  hrefFor: (page: number) => string;
  label: string;
}) {
  if (pageCount <= 1) return null;
  const pages = paginationWindow(page, pageCount);

  return (
    <nav aria-label={label} className="mt-5 flex flex-col items-center gap-2">
      <p className="text-[10.5px] text-muted">
        Showing {first}–{last} of {total} companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-1">
        {page > 1 ? (
          <a
            href={hrefFor(page - 1)}
            className="btn btn-ghost h-9 min-h-0 px-3 text-[11px]"
          >
            Previous
          </a>
        ) : (
          <span aria-disabled="true" className="btn btn-ghost pointer-events-none h-9 min-h-0 px-3 text-[11px] text-muted">
            Previous
          </span>
        )}
        {pages.map((item, index) =>
          item === "gap" ? (
            <span
              key={`gap-${index}`}
              className="px-1 text-[10.5px] text-faint"
            >
              …
            </span>
          ) : (
            <a
              key={item}
              href={hrefFor(item)}
              aria-current={item === page ? "page" : undefined}
              className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-[11px] font-semibold ${
                item === page
                  ? "bg-brand text-white"
                  : "text-muted hover:bg-paper-deep hover:text-ink"
              }`}
            >
              {item}
            </a>
          ),
        )}
        {page < pageCount ? (
          <a
            href={hrefFor(page + 1)}
            className="btn btn-ghost h-9 min-h-0 px-3 text-[11px]"
          >
            Next
          </a>
        ) : (
          <span aria-disabled="true" className="btn btn-ghost pointer-events-none h-9 min-h-0 px-3 text-[11px] text-muted">
            Next
          </span>
        )}
      </div>
    </nav>
  );
}
