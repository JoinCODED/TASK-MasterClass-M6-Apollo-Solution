import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  query recipes($cuisine: String) {
    recipes(cuisine: $cuisine) {
      id
      name
      steps
    }
  }
`;

export const GET_CUISINES = gql`
  query cuisines {
    cuisines {
      id
      name
    }
  }
`;
