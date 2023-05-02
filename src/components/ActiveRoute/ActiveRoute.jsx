import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-b-2 border-slate-500" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
