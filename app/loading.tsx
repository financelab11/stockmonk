export default function Loading() {
  return (
    <div className="container-page py-12">
      <div className="skeleton h-8 w-52 rounded-lg" />
      <div className="skeleton mt-3 h-4 w-full max-w-xl rounded" />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="card h-56 p-4">
            <div className="skeleton h-full w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
