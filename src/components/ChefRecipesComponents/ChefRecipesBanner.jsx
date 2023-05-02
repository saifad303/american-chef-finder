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
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              At least 10 characters
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              At least one lowercase character
            </li>
          </ul>
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
