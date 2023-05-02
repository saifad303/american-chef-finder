import { useState } from "react";

const Banner = () => {
  return (
    <section className=" bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Elevate Your Cuisine - Find Top Chefs Now!
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0">
            Transform Your Taste Buds - Find and Hire Exceptional Chefs to
            Create Mouth-Watering Dishes for Your Next Event or Gathering!
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a
              href="#"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
            >
              Browse chefs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
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

export default Banner;
