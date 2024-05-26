import { normalizeValue } from "./normalize";

describe("normalizeValue util", () => {
  it("should return 0 when rangeMin equals rangeMax", () => {
    expect(normalizeValue(333, 10, 10)).toBe(0);
  });

  it("should return 0 when value is less than rangeMin", () => {
    expect(normalizeValue(5, 100, 200)).toBe(0);
  });

  it("should return 1 when value is greater than rangeMax", () => {
    expect(normalizeValue(200, 1, 100)).toBe(1);
  });

  it("should return 0.5 when value is in the middle of the range", () => {
    expect(normalizeValue(15, 10, 20)).toBe(0.5);
  });

  it("should handle floats", () => {
    expect(normalizeValue(1.5, 1, 2)).toBe(0.5);
  });

  it("should handle negative values", () => {
    expect(normalizeValue(-5, -10, 10)).toBe(0.25);
  });
});
