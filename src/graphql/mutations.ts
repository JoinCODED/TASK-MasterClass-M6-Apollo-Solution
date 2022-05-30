import { gql } from "@apollo/client";

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($id: Int!) {
    deleteRecipe(id: $id) {
      status
    }
  }
`;
