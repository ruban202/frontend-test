import React from "react"
import { Container } from "@mui/material"
import SelectableCard from "./components/SelectableCard"

function App() {
  const [selected, setSelected] = React.useState(false)
  return (
    <Container sx={{ my: 3 }}>
      <SelectableCard image={require("./assets/images/ancient-woodlands.png")} title="Flood Zone 1" selected={selected} setSelected={setSelected} />
    </Container>
  )
}

export default App
