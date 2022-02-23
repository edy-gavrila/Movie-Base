import { useCallback, useState } from "react";

import { AuthContext, defaultUserContext } from "./AuthContext";

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ ...defaultUserContext });

  const setUserAuthDataHandler = ({ email, displayName, photoURL, uid }) => {
    setAuthState({
      ...authState,
      userData: { email, displayName, photoURL, uid },
      isAuthenticated: true,
    });
  };

  const logoutUserHandler = useCallback(() => {
    setAuthState({
      ...defaultUserContext,
    });
  }, []);

  const setGuestModeHandler = useCallback(() => {
    setAuthState({
      userData: {
        email: null,
        displayName: "Guest",
        photoURL: null,
        uid: null,
      },
      isAuthenticated: true,
      guestMode: true,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        onSetUserAuthData: setUserAuthDataHandler,
        onUserLogout: logoutUserHandler,
        onSetGuestMode: setGuestModeHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
