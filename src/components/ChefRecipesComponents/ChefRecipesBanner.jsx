import React from "react";

const ChefRecipesBanner = () => {
  return (
    <section className=" bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <h1 className="text-gray-800 font-extrabold mx-auto text-2xl">
            Gordon Ramsey
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0">
            Thomas Aloysius Keller born October 14, 1955 is an American chef,
            restaurateur, and cookbook author. He and his landmark Napa Valley
            restaurant, The French Laundry in Yountville, California, have won
            multiple awards from the James Beard Foundation, notably the Best
            California Chef in 1996, and the Best Chef in America in 1997. The
            restaurant is a perennial winner in the annual Restaurant Magazine
            list of the Top 50 Restaurants of the World.
          </p>
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
                17 Year
              </span>
            </p>
            <p className="text-gray-700 mb-5">
              <span>
                <img
                  src="/img/spicy-food-svgrepo-com.svg"
                  className="w-[25px] inline-block mr-2"
                  alt=""
                />
                <strong>Recipes: </strong> 10
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
                10
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img
              src="/img/bannerImg.jpg"
              className="rounded-lg brightness-50 w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecipesBanner;
