import React from "react";
import ChefRecipesBanner from "../components/ChefRecipesComponents/ChefRecipesBanner";
import RecipesList from "../components/ChefRecipesComponents/Recipes/RecipesList";

const ChefRecipesPage = () => {
  return (
    <div>
      <ChefRecipesBanner></ChefRecipesBanner>
      <RecipesList></RecipesList>
    </div>
  );
};

export default ChefRecipesPage;
