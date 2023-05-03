import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthContext = createContext(null);

export const useAuthProvider = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const apiLinkPrefix =
    "https://the-chef-finder-server-jd01in2hx-saifad303.vercel.app/";

  const googleSignInProviderHandler = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubSignInProviderHandler = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const signOutProviderHandler = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("From context = ", user);
        setSignedInUser(user);
        setIsLoading(false);
      } else {
        setSignedInUser(null);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    apiLinkPrefix,
    googleSignInProviderHandler,
    gitHubSignInProviderHandler,
    signedInUser,
    setSignedInUser,
    signOutProviderHandler,
    isLoading,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
