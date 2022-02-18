import React from "react";
import { AuthContext } from "./AuthContext";

function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider>
      {(value) => {
        return <>{children}</>;
      }}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
