import React from "react";
import Recipe from "./Recipe";

const RecipesList = () => {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Recipes by Gordon Ramsey
        </h1>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((val, indx) => (
          <Recipe key={indx}></Recipe>
        ))}
      </div>
    </section>
  );
};

export default RecipesList;
