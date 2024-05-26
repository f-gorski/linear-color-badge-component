/*
  This utility function is for normalizing (clamping to 0-1) of the provided 
  *value* 
  to a range specified by 
  *rangeMin*
  *rangeMax*
  If the value is outside of these bounds, then it is clamped to the nearest range end
*/

export const normalizeValue = (value: number, rangeMin: number, rangeMax: number): number => {
  if (rangeMin === rangeMax) {
    return 0;
  }

  //clamp to range
  const constrainedValue = Math.min(Math.max(value, rangeMin), rangeMax);
  const rangeWidth = rangeMax - rangeMin;
  const normalizedValue = (constrainedValue - rangeMin) / rangeWidth;

  return normalizedValue;
};
