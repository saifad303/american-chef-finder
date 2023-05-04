import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthProvider } from "../../context/AuthProvider";
import Spinner from "../Loading/Spinner";

const ChefRecipesBanner = ({ id }) => {
  const initChefValue = {
    id: 0,
    name: "",
    bio: "",
    likes: "",
    numberOfRecipes: "",
    photoUrl: "",
    yearOfExperience: "",
  };

  const [chef, setChef] = useState(initChefValue);
  const { apiLinkPrefix } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiLinkPrefix}chefs/${id}`).then((res) => {
      setChef(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className=" bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <h1 className="text-gray-800 font-extrabold text-start text-2xl">
            {chef.name}
          </h1>
          <p className="max-w-xl xl:mx-0 text-start">{chef.bio}</p>
          <div className="mt-4 sm:mt-0 w-full text-start">
            <p className="text-gray-700 mb-5">
              <span>
                <img
                  src="/img/chef-hat-svgrepo-com.svg"
                  className="w-[25px] inline-block mr-2"
                  alt=""
                />
                <strong>Experience: </strong>
                {chef.yearOfExperience} Year
              </span>
            </p>
            <p className="text-gray-700 mb-5">
              <span>
                <img
                  src="/img/spicy-food-svgrepo-com.svg"
                  className="w-[25px] inline-block mr-2"
                  alt=""
                />
                <strong>Recipes: </strong> {chef.numberOfRecipes}
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
                {chef.likes}
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img src={chef.photoUrl} className="rounded-lg  w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecipesBanner;
