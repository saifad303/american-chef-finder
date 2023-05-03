import React from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.config";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isLoading } = useAuthProvider();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div
          style={{ borderTopColor: "transparent" }}
          className=" w-40 h-40 border-4 border-red-400 border-double rounded-full animate-spin"
        ></div>
      </div>
    );
  }
  if (auth.currentUser) {
    return children;
  } else {
    return (
      <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
