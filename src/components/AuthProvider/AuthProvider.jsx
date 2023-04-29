import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createProfile = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   const singUpUser = (email, password) =>{
  //     return
  //   }

  const authInfo = {
    createProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
