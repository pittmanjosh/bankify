import getFirebase from "./firebase";
import { getAuth } from "firebase/auth";
import { useContext, createContext, useState } from "react";

const app = getFirebase();
const auth = getAuth(app);

// returns auth component of app instance
export default function currentAuth() {
  return auth;
}

const authContext = createContext();

export function ProvideAuth({children}) {
  <authContext.Provider value={auth}>
    {children}
  </authContext.Provider>
}