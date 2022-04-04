import { useCallback, useEffect, useState } from "react";
import {
  getCurrentAuthenticatedUser,
  logoutUser,
  loginUserInFirebase,
} from "../APIs/auth";
import {
  isLoggedInAsGuest,
  loginToGestMode,
  logoutFromGuestMode,
} from "../APIs/localStorage";

import { AuthContext, defaultUserContext } from "./AuthContext";

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ ...defaultUserContext });

  const onSetUserAuthData = useCallback(({ email, displayName, photoURL, uid }) => {
    setAuthState({
      ...authState,
      userData: { email, displayName, photoURL, uid },
      isAuthenticated: true,
    });
  },[authState]);

  const onSetGuestMode = useCallback(() => {
    loginToGestMode();
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

  useEffect(() => {
    if (!authState.isAuthenticated) {
      console.log("running AuthContext useEffect");
      getCurrentAuthenticatedUser(onSetUserAuthData, () => {
        if (isLoggedInAsGuest()) {
          onSetGuestMode();
        }
      });
    }
  }, [onSetGuestMode, authState.isAuthenticated, onSetUserAuthData]);

  const onUserLogout = useCallback(async () => {
    logoutFromGuestMode();
    await logoutUser();
    setAuthState({
      ...defaultUserContext,
    });
  }, []);

  const onUserLogin = async (userData) => {
    let loggedInUserData;
    try {
      loggedInUserData = await loginUserInFirebase(userData);
    } catch (error) {
      throw error;
    }
    loggedInUserData = {
      email: loggedInUserData.email,
      displayName: loggedInUserData.displayName,
      uid: loggedInUserData.uid,
      photoURL: loggedInUserData.photoURL,
    };
    onSetUserAuthData(loggedInUserData);
  };

  

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        onUserLogout,
        onUserLogin,
        onSetGuestMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
