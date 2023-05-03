import React from "react";
import { useParams } from "react-router-dom";
import ChefRecipesBanner from "../components/ChefRecipesComponents/ChefRecipesBanner";
import RecipesList from "../components/ChefRecipesComponents/Recipes/RecipesList";

const ChefRecipesPage = () => {
  const { id } = useParams();
  return (
    <div>
      <ChefRecipesBanner id={id}></ChefRecipesBanner>
      <RecipesList id={id}></RecipesList>
    </div>
  );
};

export default ChefRecipesPage;
