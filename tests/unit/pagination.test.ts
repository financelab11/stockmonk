import { describe, expect, it } from "vitest";
import { paginationWindow } from "@/lib/pagination";

describe("paginationWindow", () => {
  it("returns a single page when there is only one", () => {
    expect(paginationWindow(1, 1)).toEqual([1]);
    expect(paginationWindow(5, 1)).toEqual([1]);
  });

  it("keeps the first and last page plus a window", () => {
    expect(paginationWindow(1, 10)).toEqual([1, 2, "gap", 10]);
    expect(paginationWindow(5, 10)).toEqual([1, "gap", 4, 5, 6, "gap", 10]);
    expect(paginationWindow(10, 10)).toEqual([1, "gap", 9, 10]);
  });

  it("does not insert gaps for adjacent pages", () => {
    expect(paginationWindow(2, 5)).toEqual([1, 2, 3, "gap", 5]);
    expect(paginationWindow(3, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("clamps out-of-range input", () => {
    expect(paginationWindow(0, 3)).toEqual([1, 2, 3]);
    expect(paginationWindow(99, 3)).toEqual([1, 2, 3]);
  });
});
