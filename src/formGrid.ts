/**
 * Takes care of sizings for uniform size sketch grid.
 * @param {number} settings.width Available horizontal space.
 * @param {number} settings.height Available vertical space.
 * @param {number} settings.cols Amount of columns for grid.
 * @param {number} settings.rows Amount of rows for grid.
 * @param {number} settings.sketchRatio Height to width ratio of sketch.
 * @param {number} settings.marginHorizontal Fraction of width to be used as margin.
 * @param {number} settings.marginVertical Fraction of height to be used as margin.
 * @param {number} settings.gapHorizontal Fraction of column width used as spacing.
 * @param {number} settings.gapVertical Fraction of row height used as spacing.
 */
export function formGrid({
  width,
  height,
  cols,
  rows,
  sketchRatio = 1,
  marginHorizontal = 0,
  marginVertical = 0,
  gapHorizontal = 0,
  gapVertical = 0,
}: {
  width: number;
  height: number;
  cols: number;
  rows: number;
  sketchRatio?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  gapHorizontal?: number;
  gapVertical?: number;
}) {
  const [availableWidth, availableHeight] = [
    width - width * marginHorizontal * 2,
    height - height * marginVertical * 2,
  ];

  const gridRatios = [
    cols + (cols > 1 ? (cols - 1) * gapHorizontal : 0),
    sketchRatio * rows +
      (rows > 1 ? (rows - 1) * sketchRatio * gapVertical : 0),
  ];

  const spaceLeftRatios = [
    availableWidth / gridRatios[0],
    availableHeight / gridRatios[1],
  ];
  const minSpaceLeftRatio = Math.min(...spaceLeftRatios);

  const gridWidth = gridRatios[0] * minSpaceLeftRatio;
  const gridHeight = gridRatios[1] * minSpaceLeftRatio;

  const offset = [
    width * marginHorizontal + (availableWidth - gridWidth) / 2,
    height * marginVertical + (availableHeight - gridHeight) / 2,
  ];

  const sketchDimensions = [1, sketchRatio * minSpaceLeftRatio];

  const marginTransform = { transform: `translate(${offset[0]} ${offset[1]})` };
  const getGridPosition = (colI: number, rowI: number) => ({
    transform: `translate(${
      colI * sketchDimensions[0] + colI * sketchDimensions[0] * gapHorizontal
    } ${
      rowI * sketchDimensions[1] + rowI * sketchDimensions[1] * gapVertical
    })`,
  });

  return { marginTransform, getGridPosition, sketchDimensions };
}
