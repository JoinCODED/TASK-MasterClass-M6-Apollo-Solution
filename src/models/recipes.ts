export interface Recipe {
  id: number;
  name: string;
  steps: string;
}

export interface Recipes {
  recipes: Recipe[];
}

export interface Cuisine {
  id: number;
  name: string;
}

export interface Cuisines {
  cuisines: Cuisine[];
}
