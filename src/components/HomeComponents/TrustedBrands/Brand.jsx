import React from "react";

const Brand = () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-lg text-gray-600 text-center">
          TRUSTED BY BRANDS FROM AROUND THE WORLD
        </h3>
        <div className=" mt-12">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 ">
            {/* LOGO 1 */}
            <li className="flex-none">
              <img
                src="/img/kfc-png-logo-4094.png"
                className="w-[150px]"
                alt=""
              />
            </li>

            {/* LOGO 2 */}
            <li className="flex-none">
              <img
                src="/img/pizza-hut-png-logo-3810.png"
                className="w-[150px]"
                alt=""
              />
            </li>

            {/* LOGO 3 */}
            <li className="flex-none">
              <img
                src="/img/starbucks-logo-png-1666.png"
                className="w-[150px]"
                alt=""
              />
            </li>

            {/* LOGO 4 */}
            <li className="flex-none">
              <img
                src="/img/mcdonalds-png-logo-2774.png"
                className="w-[150px]"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brand;
