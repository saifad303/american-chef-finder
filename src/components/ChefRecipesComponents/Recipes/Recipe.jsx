import React from "react";
import StarRatings from "react-star-ratings";

const Recipe = () => {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <a href="">
        <img
          src="https://i.pinimg.com/564x/3b/9c/55/3b9c5511a9a23ca8602194208d39b1a8.jpg"
          loading="lazy"
          alt=""
          className="w-full h-48 rounded-t-md"
        />
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">Oysters and Pearls</h3>
          <p className="text-gray-400 text-sm mt-1">
            The powerful gravity waves resulting from the impact of the planets'
            moons â€” four in total â€” were finally resolved in 2015 when
            gravitational microlensing was used to observe the
          </p>
          <div className="pb-2 text-gray-800 font-medium mt-4">
            <p>Ingredients</p>
          </div>
          <ul className="space-y-3 mt-2">
            <li className="flex items-center gap-5">
              &#9672; 1 bunch of fresh thyme
            </li>
            <li className="flex items-center gap-5">
              &#9672; 1 bunch of fresh thyme
            </li>
            <li className="flex items-center gap-5">
              &#9672; 1 bunch of fresh thyme
            </li>
            <li className="flex items-center gap-5">
              &#9672; 1 bunch of fresh thyme
            </li>
            <li className="flex items-center gap-5">
              &#9672; 1 bunch of fresh thyme
            </li>
          </ul>
          <div className="pb-2 text-gray-800 font-medium mt-4">
            <p>Cooking Method:</p>
          </div>
          <ul className="space-y-3 mt-2">
            <li className="flex items-center gap-5">
              &#9672; Remove the giblets from the duck's cavity and set them
              aside. Rinse the duck inside and out with cold water and pat it
              dry with kitchen paper.
            </li>
            <li className="flex items-center gap-5">
              &#9672; Remove the giblets from the duck's cavity and set them
              aside. Rinse the duck inside and out with cold water and pat it
              dry with kitchen paper.
            </li>
            <li className="flex items-center gap-5">
              &#9672; Remove the giblets from the duck's cavity and set them
              aside. Rinse the duck inside and out with cold water and pat it
              dry with kitchen paper.
            </li>
            <li className="flex items-center gap-5">
              &#9672; Remove the giblets from the duck's cavity and set them
              aside. Rinse the duck inside and out with cold water and pat it
              dry with kitchen paper.
            </li>
            <li className="flex items-center gap-5">
              &#9672; Remove the giblets from the duck's cavity and set them
              aside. Rinse the duck inside and out with cold water and pat it
              dry with kitchen paper.
            </li>
            <li className="flex items-center gap-5">
              &#9672; Remove the giblets from the duck's cavity and set them
              aside. Rinse the duck inside and out with cold water and pat it
              dry with kitchen paper.
            </li>
            <li className="flex items-center gap-5">
              &#9672; Remove the giblets from the duck's cavity and set them
              aside. Rinse the duck inside and out with cold water and pat it
              dry with kitchen paper.
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            <strong className=" text-slate-600">Rating: </strong>
            <StarRatings
              rating={2.5}
              starDimension="25px"
              starSpacing="5px"
              starRatedColor="red"
              starEmptyColor="Lightgray"
            />
          </div>
        </div>
      </a>
    </article>
  );
};

export default Recipe;
