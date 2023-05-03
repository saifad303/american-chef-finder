import React, { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const useAuthProvider = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const apiLinkPrefix =
    "https://the-chef-finder-server-ogsd13m00-saifad303.vercel.app/";

  const value = {
    apiLinkPrefix,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
