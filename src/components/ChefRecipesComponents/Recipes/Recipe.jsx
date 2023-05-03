import React from "react";
import StarRatings from "react-star-ratings";

const Recipe = ({ recipe }) => {
  const { id, name, rating, cookingMethod, ingredients, recipePhoto } = recipe;
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <img
        src={recipePhoto}
        loading="lazy"
        alt=""
        className=" w-full rounded-t-md"
      />
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl text-gray-900">{name}</h3>
        <div className="pb-2 text-gray-800 font-medium mt-4">
          <p>Ingredients</p>
        </div>
        <ul className="space-y-3 mt-2">
          {ingredients &&
            ingredients.map((ingredient, indx) => (
              <li key={indx} className="flex items-center gap-5">
                &#9672; {ingredient}
              </li>
            ))}
        </ul>
        <div className="pb-2 text-gray-800 font-medium mt-4">
          <p>Cooking Method:</p>
        </div>
        <ul className="space-y-3 mt-2">
          {cookingMethod &&
            cookingMethod.map((method, indx) => (
              <li key={indx} className="flex items-center gap-5">
                &#9672; {method}
              </li>
            ))}
        </ul>
        <div className="flex items-center gap-3 mt-5">
          <strong className=" text-slate-600">Rating: </strong>
          <StarRatings
            rating={Number(rating)}
            starDimension="25px"
            starSpacing="5px"
            starRatedColor="red"
            starEmptyColor="Lightgray"
          />
        </div>
      </div>
    </article>
  );
};

export default Recipe;
