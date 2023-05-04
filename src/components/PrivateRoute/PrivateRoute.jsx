import React from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.config";
import Spinner from "../Loading/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isLoading } = useAuthProvider();
  if (isLoading) {
    return <Spinner></Spinner>;
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
