import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"

const SelectableCard: React.FC<{
  title: string
  selected: boolean
  setSelected: (s: boolean) => void
  image: string
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default" | undefined
}> = ({ color = "primary", title, image, selected, setSelected }) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        borderRadius: 2,
        border: 2,
        borderColor: selected ? `${color}.main` : "transparent",
        "&:hover": {
          borderColor: `${color}.main`
        }
      }}
    >
      <CardMedia component="img" height="100" image={image} alt={title} />
      <CardActions>
        <Checkbox checked={selected} color={color} inputProps={{ "aria-label": "Card Checkbox" }} onClick={() => setSelected(!selected)} />
        <Typography variant="subtitle1" color="text.primary">
          {title}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default SelectableCard
