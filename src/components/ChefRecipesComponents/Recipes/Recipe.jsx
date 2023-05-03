import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  const { id, name, rating, cookingMethod, ingredients, recipePhoto } = recipe;

  const [disableId, setDisableId] = useState(0);

  const notify = () => toast("🥘 This recipes has been added.", {});

  const favoriteRecipesHandler = (id) => {
    console.log(id);
    setDisableId(id);
    notify();
  };

  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <div className="h-[400px] overflow-hidden">
        <img
          src={recipePhoto}
          loading="lazy"
          alt=""
          className="w-full rounded-t-md"
        />
      </div>
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
          <button
            disabled={disableId !== 0 ? true : false}
            className={`text-[50px] ml-auto ${
              disableId === 0 ? "text-rose-600" : "text-rose-300"
            }`}
            onClick={() => favoriteRecipesHandler(id)}
          >
            &#9829;
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </article>
  );
};

export default Recipe;
