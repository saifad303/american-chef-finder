import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log("Environment variable = ", import.meta.env.VITE_APIKEY);

const envVar = import.meta.env;

const firebaseConfig = {
  apiKey: envVar.VITE_APIKEY,
  authDomain: envVar.VITE_AUTHDOMAIN,
  projectId: envVar.VITE_PROJECTID,
  storageBucket: envVar.VITE_STORAGEBUCKET,
  messagingSenderId: envVar.VITE_MESSAGINGSENDERID,
  appId: envVar.VITE_APPID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
