import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { useAuthProvider } from "../../../context/AuthProvider";
import Spinner from "../../Loading/Spinner";

const RecipesList = ({ id }) => {
  const initValueRecipes = [
    {
      id: 0,
      name: "",
      rating: "",
      cookingMethod: [],
      ingredients: [],
    },
  ];

  const { apiLinkPrefix } = useAuthProvider();
  const [recipes, setRecipes] = useState(initValueRecipes);
  const [chefName, setChefName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiLinkPrefix}chefs/${id}`).then((res) => {
      setChefName(res.data.name);
      setRecipes(res.data.recipes);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Recipes by {chefName}
        </h1>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, indx) => (
          <Recipe key={indx} recipe={recipe}></Recipe>
        ))}
      </div>
    </section>
  );
};

export default RecipesList;
