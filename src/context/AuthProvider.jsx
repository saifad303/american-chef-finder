import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthContext = createContext(null);

export const useAuthProvider = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const apiLinkPrefix =
    "https://the-chef-finder-server-jd01in2hx-saifad303.vercel.app/";

  const googleSignInProviderHandler = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("From context = ", user);
        setSignedInUser(user);
      } else {
        setSignedInUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    apiLinkPrefix,
    googleSignInProviderHandler,
    signedInUser,
    setSignedInUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
