export default function PortfolioLoading() {
  return (
    <div aria-busy="true" aria-label="Loading portfolios">
      <div className="border-b border-line bg-brand-deep">
        <div className="container-page py-8">
          <div className="skeleton h-4 w-32 rounded-full bg-white/15" />
          <div className="skeleton mt-4 h-10 w-full max-w-xl rounded-lg bg-white/15" />
          <div className="skeleton mt-3 h-4 w-full max-w-2xl rounded bg-white/10" />
          <div className="mt-5 flex gap-2">
            <div className="skeleton h-10 w-36 rounded-full bg-white/15" />
            <div className="skeleton h-10 w-28 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
      <div className="container-page py-6">
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="skeleton h-7 w-48 rounded" />
            <div className="skeleton mt-2 h-4 w-64 rounded" />
          </div>
          <div className="skeleton h-9 w-full rounded-full sm:w-72" />
        </div>
        <div className="mt-4 flex gap-2 overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="skeleton h-8 w-24 shrink-0 rounded-full"
            />
          ))}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="card h-64 p-4">
              <div className="flex gap-3">
                <div className="skeleton size-11 rounded-[22%]" />
                <div className="flex-1">
                  <div className="skeleton h-3 w-20 rounded" />
                  <div className="skeleton mt-2 h-5 w-40 rounded" />
                </div>
              </div>
              <div className="skeleton mt-3 h-4 w-full rounded" />
              <div className="skeleton mt-2 h-4 w-4/5 rounded" />
              <div className="skeleton mt-4 h-14 w-full rounded-lg" />
              <div className="skeleton mt-3 h-3 w-2/3 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
