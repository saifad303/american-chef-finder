import React, { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const useAuthProvider = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const apiLinkPrefix =
    "https://the-chef-finder-server-jd01in2hx-saifad303.vercel.app/";

  const value = {
    apiLinkPrefix,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
