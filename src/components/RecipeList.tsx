import { useQuery } from "@apollo/client";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { GET_RECIPES } from "../graphql/queries";
import { Recipes } from "../models/recipes";
import CategoryDropDown from "./CategoryDropDown";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const [cuisine, setCuisine] = useState<string | undefined>(undefined);
  const { data, loading, error } = useQuery<Recipes>(GET_RECIPES, {
    variables: { cuisine },
  });

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (loading) {
    return <h1>LOADING!</h1>;
  }

  const recipeList = data?.recipes.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe.id} />
  ));

  return (
    <Container>
      <CategoryDropDown
        onChange={(e) => {
          const { value } = e.target;
          setCuisine(value === "all" ? undefined : value);
        }}
        value={cuisine}
      />
      <Box
        sx={{ width: "100%", display: "flex", flexWrap: "wrap", gap: 2, my: 2 }}
      >
        {recipeList}
      </Box>
    </Container>
  );
}
