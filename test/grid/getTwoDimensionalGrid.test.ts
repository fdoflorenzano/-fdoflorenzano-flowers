import { describe, expect, it } from "vitest";

import { getTwoDimensionalGrid } from "../../src/grid/getTwoDimensionalGrid";

describe("Should", () => {
  it("return empty array for 0x0 grid", () => {
    const grid = getTwoDimensionalGrid({ cols: 0, rows: 0 });
    expect(grid).toEqual([]);
  });

  it("return 1 element for 1x1 grid", () => {
    const grid = getTwoDimensionalGrid({ cols: 1, rows: 1 });
    expect(grid).toEqual([[{ row: 0, col: 0 }]]);
  });

  it("have dimensions that match args", () => {
    const cols = 10;
    const rows = 5;
    const grid = getTwoDimensionalGrid({ cols, rows });
    expect(grid).toHaveLength(rows);
    grid.forEach((row) => expect(row).toHaveLength(cols));
  });

  it("have elements with sensical dimensions", () => {
    const cols = 10;
    const rows = 5;
    const grid = getTwoDimensionalGrid({ cols, rows });
    grid.forEach((row) =>
      row.forEach((element) => {
        const { col, row } = element;
        expect(col).toBeGreaterThanOrEqual(0);
        expect(col).toBeLessThan(cols);
        expect(row).toBeGreaterThanOrEqual(0);
        expect(row).toBeLessThan(rows);
      })
    );
  });
});
