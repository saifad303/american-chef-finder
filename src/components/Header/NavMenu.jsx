import React from "react";
import ActiveRoute from "../ActiveRoute/ActiveRoute";

const NavMenu = () => {
  return (
    <>
      <li className="text-gray-600  font-roboto-sans font-medium">
        <ActiveRoute to="/">Home</ActiveRoute>
      </li>
      <li className="text-gray-600  font-roboto-sans font-medium">
        <ActiveRoute to="/blogs">Blogs</ActiveRoute>
      </li>
    </>
  );
};

export default NavMenu;
