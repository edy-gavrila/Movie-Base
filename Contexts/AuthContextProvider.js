import { useCallback, useState } from "react";

import { AuthContext } from "./AuthContext";

const defaultUserState = {
  userData: null,
  isAuthenticated: false,
  guestMode: false,
};
function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ ...defaultUserState });

  const setUserAuthDataHandler = ({ email, displayName, photoURL, uid }) => {
    setAuthState({
      ...authState,
      userData: { email, displayName, photoURL, uid },
      isAuthenticated: true,
    });
  };

  const logoutUserHandler = useCallback(() => {
    setAuthState({
      ...defaultUserState,
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
