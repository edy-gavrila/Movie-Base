import { useCallback, useState } from "react";

import { AuthContext, defaultUserContext } from "./AuthContext";

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ ...defaultUserContext });

  const onSetUserAuthData = ({ email, displayName, photoURL, uid }) => {
    setAuthState({
      ...authState,
      userData: { email, displayName, photoURL, uid },
      isAuthenticated: true,
    });
  };

  const onUserLogout = useCallback(() => {
    setAuthState({
      ...defaultUserContext,
    });
  }, []);

  const onSetGuestMode = useCallback(() => {
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
        onSetUserAuthData,
        onUserLogout,
        onSetGuestMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
