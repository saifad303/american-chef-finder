import React from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import "./header.css";

const UserProfile = () => {
  const { signOutProviderHandler, setSignedInUser, signedInUser } =
    useAuthProvider();

  console.log("signedInUser = ", signedInUser.displayName);

  const signOutHandler = () => {
    signOutProviderHandler().then(() => {
      setSignedInUser(null);
    });
  };

  return (
    <>
      <li className="mt-8 lg:mt-0">
        <button
          data-title={signedInUser.displayName}
          className="custom-tooltip-btn w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
        >
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            className="w-full h-full rounded-full"
          />
        </button>
      </li>
      <li className="mt-8 lg:mt-0">
        <button
          onClick={signOutHandler}
          className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
        >
          Sign out
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </>
  );
};

export default UserProfile;
