import { useMemo } from "react";
import Color from "colorjs.io";
import styles from "./LinearColorBadge.module.css";

import { normalizeValue } from "./utils/normalize";

interface RangeColorBadgeProps {
  value: number;
  coloredValueMin: number;
  coloredValueMax: number;
  colorMin: string;
  colorMax: string;
}

export default function RangeColorBadge({
  value,
  coloredValueMin,
  coloredValueMax,
  colorMin,
  colorMax,
}: RangeColorBadgeProps) {
  const startingColor = useMemo(() => new Color(colorMin), [colorMin]);

  const colorLinearRange = useMemo(
    () =>
      startingColor.range(colorMax, {
        space: "hsl", //hsl color space because more subtle transition
        outputSpace: "srgb",
      }),
    [startingColor, colorMax]
  );

  //normalize value to range of 0-1
  const colorNormalizedValue = useMemo(
    () => normalizeValue(value, coloredValueMin, coloredValueMax),
    [value, coloredValueMin, coloredValueMax]
  );

  return (
    <div
      style={{
        backgroundColor: colorLinearRange(colorNormalizedValue).toString(),
      }}
      className={styles.badge}
    >
      <span>{value}</span>
    </div>
  );
}
