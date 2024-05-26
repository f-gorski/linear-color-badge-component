# LinearColorBadge Component

This is a React component named `LinearColorBadge` designed to display a numerical value with a background color that changes linearly based on the provided value and specified color ranges. The component accepts a value and a range with corresponding colors to visually represent where the value falls within the range.

## Important Note

While this project serves as a demonstration of the LinearColorBadge component, it is done as a leisure project and it's not recommended for production use in its current form. For real-world projects, consider bundling this component into a component library to make it more reusable across different projects.

## Installation

To install the component, you can simply copy the `LinearColorBadge.tsx` (along with its utils and css file) file into your React project (and install its dependencies).

## Usage

```jsx
import React from "react"
import LinearColorBadge from "./LinearColorBadge"

const MyComponent = () => {
  return (
    <div>
      <p>Current Status:</p>
      <LinearColorBadge
        value={50}
        coloredValueMin="0"
        coloredValueMax="100"
        colorMin="#ff0000"
        colorMax="#00ff00"
      />
    </div>
  )
}

export default MyComponent
```

## Props

- `value`**\<number\>**: The numerical value to display inside the badge.
- `colorMax`**\<string\>**: The color representing the top end of the range.
- `colorMin`**\<string\>**: The color representing the bottom end of the range.
- `coloredValueMax`**\<string\>**: The top value of the range.
- `coloredValueMin`**\<string\>**: The bottom value of the range.

## Example

An example of usage can be found in the provided MyComponent where the LinearColorBadge component is used to display a value with a background color that varies based on its position within the defined range. To run the example simply run

```bash
$ npm run dev
```

## Tests

The component is accompanied by test cases to ensure its functionality. You can execute the tests by running

```bash
$ npm run test
```
