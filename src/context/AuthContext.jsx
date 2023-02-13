import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helper/firebase";

export const AuthContext = createContext();

const AuthcontextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  console.log(currentUser);

  useEffect(() => {
    setCurrentUser(userObserver);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthcontextProvider;
