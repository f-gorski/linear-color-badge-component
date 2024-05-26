import LinearColorBadge from "../src/lib/linear-color-badge/LinearColorBadge"

function App() {
  return (
    <div>
      <LinearColorBadge
        value={4}
        coloredValueMin={0}
        coloredValueMax={10}
        colorMin={"red"}
        colorMax={"green"}
      />
    </div>
  )
}

export default App
