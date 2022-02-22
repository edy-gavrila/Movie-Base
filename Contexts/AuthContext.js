import React from "react";

const defaultUserData = {
  userData: null,
  isAuthenticated: false,
  guestMode: false,
  onSetUserAuthData: () => {},
  onUserLogout: () => {},
  onSetGuestMode: () => {},
};

const AuthContext = React.createContext({ ...defaultUserData });

export { AuthContext, defaultUserData };
