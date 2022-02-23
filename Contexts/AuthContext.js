import React from "react";

const defaultUserContext = {
  userData: { email: "", displayName: "", photoURL: "", uid: null },
  isAuthenticated: false,
  guestMode: false,
  onSetUserAuthData: () => {},
  onUserLogout: () => {},
  onSetGuestMode: () => {},
};

const AuthContext = React.createContext({ ...defaultUserContext });

export { AuthContext, defaultUserContext };
