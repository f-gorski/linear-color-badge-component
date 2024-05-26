import { render, screen } from "@testing-library/react";
import LinearColorBadge from "../../lib/linear-color-badge/LinearColorBadge";
import Color from "colorjs.io";

describe("LinearColorBadge component", () => {
  const DEFAULT_PROPS = {
    value: 50,
    coloredValueMin: 0,
    coloredValueMax: 100,
    colorMin: "#ff0000", // red
    colorMax: "#00ff00", // green
  };
  const OUTPUT_COLOR = "rgb(128, 128, 0)";

  it("renders the correct numerical value", () => {
    render(<LinearColorBadge {...DEFAULT_PROPS} />);
    expect(screen.getByText(DEFAULT_PROPS.value)).toBeInTheDocument();
  });

  it("renders the correct color from linear range, based on the value", () => {
    const mockRange = jest.fn().mockImplementation(() => {
      return jest.fn().mockImplementation(() => ({
        toString: () => OUTPUT_COLOR, // mocked output color
      }));
    });
    Color.prototype.range = mockRange;

    const { container } = render(<LinearColorBadge {...DEFAULT_PROPS} />);

    expect(container.firstChild).toHaveStyle({ backgroundColor: OUTPUT_COLOR });
  });
});
