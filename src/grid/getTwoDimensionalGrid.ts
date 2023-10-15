/**
 * Generates two dimensional array representing a grid.
 * @param {number} settings.cols Amount of columns for grid.
 * @param {number} settings.rows Amount of rows for grid.
 */
export function getTwoDimensionalGrid({
  cols,
  rows,
}: {
  cols: number;
  rows: number;
}): { row: number; col: number }[][] {
  const columns = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push({ row: i, col: j });
    }
    columns.push(row);
  }
  return columns;
}
