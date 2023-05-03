import React from "react";
import { useNavigate } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, photoUrl, likes, numberOfRecipes, yearOfExperience } = chef;
  const navigate = useNavigate();

  const viewRecipeHandler = (id) => {
    console.log("ID = ", id);
    navigate(`/chef-recipes/${id}`);
  };

  return (
    <li className="gap-8 sm:flex">
      <div className="w-full h-60">
        <img
          src={photoUrl}
          className="w-full h-full object-cover object-center shadow-md rounded-xl"
          alt=""
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:w-[70%]">
        <h4 className="text-xl mb-4 text-gray-700 font-semibold">{name}</h4>
        <p className="text-gray-700 mb-5">
          <span>
            <img
              src="/img/chef-hat-svgrepo-com.svg"
              className="w-[25px] inline-block mr-2"
              alt=""
            />
            <strong>Experience: </strong>
            {yearOfExperience} Year
          </span>
        </p>
        <p className="text-gray-700 mb-5">
          <span>
            <img
              src="/img/spicy-food-svgrepo-com.svg"
              className="w-[25px] inline-block mr-2"
              alt=""
            />
            <strong>Recipes: </strong> {numberOfRecipes}
          </span>
        </p>
        <p className="text-gray-700 mb-5">
          <span>
            <img
              src="/img/heart-svgrepo-com.svg"
              className="w-[25px] inline-block mr-2"
              alt=""
            />
            <strong>Likes: </strong>
            {likes}
          </span>
        </p>

        <button
          className=" bg-gray-800 text-white font-medium px-4 py-2 rounded-lg"
          onClick={() => viewRecipeHandler(id)}
        >
          View Recipes
        </button>
      </div>
    </li>
  );
};

export default ChefCard;
