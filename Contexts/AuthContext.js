import React from "react";

const defaultUserData = {
  userData: null,
  isAuthenticated: false,
  userLoginHandler: () => {},
  userLogoutHandler: () => {},
  userRegisterHandler: () => {},
};

const AuthContext = React.createContext({ ...defaultUserData });

export { AuthContext, defaultUserData };
