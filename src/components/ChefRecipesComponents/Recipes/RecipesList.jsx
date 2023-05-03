import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { useAuthProvider } from "../../../context/AuthProvider";

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

  useEffect(() => {
    axios.get(`${apiLinkPrefix}chefs/${id}`).then((res) => {
      console.log("from recipes page = ", res.data.recipes);
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Recipes by Gordon Ramsey
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
