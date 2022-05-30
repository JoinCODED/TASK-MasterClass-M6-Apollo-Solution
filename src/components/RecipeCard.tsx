import { Card, CardActions, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function RecipeCard() {
  return (
    <Card sx={{ width: "20%", m: 6 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          RECIPE NAME
        </Typography>
        <Typography variant="body2" color="text.secondary">
          RECIPE STEPS
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon />
      </CardActions>
      <CardActions>LIST OF INGREDIENTS</CardActions>
    </Card>
  );
}
