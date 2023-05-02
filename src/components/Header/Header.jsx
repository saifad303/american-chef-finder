import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import NavMenu from "./NavMenu";
import SignInUp from "./SignInUp";
import UserProfile from "./UserProfile";

const Header = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const body = document.body;
    const customBodyStyle = ["overflow-visible", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    else body.classList.remove(...customBodyStyle);
  }, [state]);

  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center  justify-between lg:block">
          <Link to="/">
            <img
              src="/img/chef-finder-logo.svg"
              className="w-[80px] xsm:w-[100px] sm:w-[130px]"
              alt="Float UI logo"
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? " h-fit pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div>
            <ul className="flex space-x-5 mb-4  lg:flex-row">
              <SignInUp></SignInUp>
              {/* <UserProfile></UserProfile> */}
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              <NavMenu></NavMenu>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
