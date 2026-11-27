export default function PortfolioDetailLoading() {
  return (
    <div aria-busy="true" aria-label="Loading portfolio">
      <div className="border-b border-line bg-paper-deep/70">
        <div className="container-page py-5">
          <div className="skeleton h-3 w-40 rounded" />
          <div className="mt-4 flex items-start gap-3.5">
            <div className="skeleton size-14 rounded-[22%]" />
            <div className="min-w-0 flex-1">
              <div className="skeleton h-3 w-24 rounded" />
              <div className="skeleton mt-2 h-9 w-full max-w-md rounded" />
              <div className="skeleton mt-2 h-4 w-64 rounded" />
              <div className="skeleton mt-3 h-4 w-full max-w-3xl rounded" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="skeleton h-14 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
      <div className="container-page py-5">
        <div className="flex gap-6 border-b border-line pb-3">
          <div className="skeleton h-8 w-24 rounded" />
          <div className="skeleton h-8 w-28 rounded" />
        </div>
        <div className="mt-4 grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="card h-64 p-5">
            <div className="skeleton h-3 w-20 rounded" />
            <div className="skeleton mt-2 h-7 w-72 rounded" />
            <div className="skeleton mt-4 h-4 w-full rounded" />
            <div className="skeleton mt-2 h-4 w-5/6 rounded" />
            <div className="skeleton mt-2 h-4 w-4/6 rounded" />
          </div>
          <div className="card h-64 p-5">
            <div className="skeleton h-3 w-20 rounded" />
            <div className="skeleton mt-2 h-7 w-48 rounded" />
            <div className="skeleton mt-4 h-4 w-full rounded" />
            <div className="skeleton mt-2 h-4 w-5/6 rounded" />
            <div className="skeleton mt-2 h-4 w-4/6 rounded" />
          </div>
        </div>
        <div className="mt-3 h-80 rounded-xl bg-night" />
      </div>
    </div>
  );
}
