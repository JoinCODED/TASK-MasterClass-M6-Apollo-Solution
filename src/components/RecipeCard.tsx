import { Card, CardActions, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Recipe } from "../models/recipes";
import { useMutation } from "@apollo/client";
import { DELETE_RECIPE } from "../graphql/mutations";
import { GET_RECIPES } from "../graphql/queries";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard(props: RecipeCardProps) {
  const { recipe } = props;
  const [deleteRecipe, { data, loading, error }] = useMutation(DELETE_RECIPE, {
    variables: { id: recipe.id },
    refetchQueries: [GET_RECIPES],
  });

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: "pre-wrap" }}
        >
          {recipe.steps}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon onClick={() => deleteRecipe()} />
      </CardActions>
      <CardActions></CardActions>
    </Card>
  );
}
