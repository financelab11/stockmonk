import { Search } from "lucide-react";

export function HeroSearch() {
  return (
    <form
      className="mt-5 flex max-w-md items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1.5"
      action="/discover"
      method="get"
      role="search"
    >
      <Search aria-hidden="true" className="ml-2 size-4 shrink-0 text-white/55" />
      <label htmlFor="hero-search" className="sr-only">
        Search companies
      </label>
      <input
        id="hero-search"
        name="q"
        placeholder="Search a ticker or company"
        className="h-9 min-w-0 flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-white/45"
      />
      <button type="submit" className="btn btn-brand h-9 min-h-0 px-4 text-[12px]">
        Search
      </button>
    </form>
  );
}
