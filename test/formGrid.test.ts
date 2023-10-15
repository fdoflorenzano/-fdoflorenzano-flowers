import { describe, expect, it } from "vitest";

import { formGrid } from "../src/formGrid";

describe("Should", () => {
  it("have no offset if grid fits", () => {
    const { marginTransform } = formGrid({
      width: 100,
      height: 100,
      cols: 3,
      rows: 3,
      sketchRatio: 1,
      marginHorizontal: 0,
      marginVertical: 0,
      gapHorizontal: 0,
      gapVertical: 0,
    });
    expect(marginTransform).toEqual({ transform: "translate(0 0)" });
  });

  it("have centered offset when grid doesn't fit horizontally", () => {
    const { marginTransform } = formGrid({
      width: 100,
      height: 100,
      cols: 3,
      rows: 3,
      sketchRatio: 2,
      marginHorizontal: 0,
      marginVertical: 0,
      gapHorizontal: 0,
      gapVertical: 0,
    });
    expect(marginTransform).toEqual({ transform: "translate(25 0)" });
  });

  it("have centered offset when grid doesn't fit vertically", () => {
    const { marginTransform } = formGrid({
      width: 100,
      height: 100,
      cols: 3,
      rows: 3,
      sketchRatio: 0.5,
      marginHorizontal: 0,
      marginVertical: 0,
      gapHorizontal: 0,
      gapVertical: 0,
    });
    expect(marginTransform).toEqual({ transform: "translate(0 25)" });
  });

  it("have offset that respects equal margins", () => {
    const { marginTransform } = formGrid({
      width: 100,
      height: 100,
      cols: 3,
      rows: 3,
      sketchRatio: 1,
      marginHorizontal: 0.1,
      marginVertical: 0.1,
      gapHorizontal: 0,
      gapVertical: 0,
    });
    expect(marginTransform).toEqual({ transform: "translate(10 10)" });
  });

  it("have offset that respects different margins", () => {
    const { marginTransform } = formGrid({
      width: 100,
      height: 100,
      cols: 3,
      rows: 3,
      sketchRatio: 1,
      marginHorizontal: 0.1,
      marginVertical: 0.2,
      gapHorizontal: 0,
      gapVertical: 0,
    });
    expect(marginTransform).toEqual({ transform: "translate(20 20)" });
  });

  it("have offset that isn't affected by equal gaps", () => {
    const { marginTransform } = formGrid({
      width: 100,
      height: 100,
      cols: 3,
      rows: 3,
      sketchRatio: 1,
      marginHorizontal: 0.1,
      marginVertical: 0.2,
      gapHorizontal: 0.2,
      gapVertical: 0.2,
    });
    expect(marginTransform).toEqual({ transform: "translate(20 20)" });
  });
});
