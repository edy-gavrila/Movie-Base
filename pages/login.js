import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { loginUserInFirebase, logoutUser } from "../APIs/auth";
import { AuthContext } from "../Contexts/AuthContext";

import LoginForm from "../components/LoginForm/LoginForm";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import ErrorBanner from "../components/UI/ErrorBanner";
import LoginUserInfo from "../components/UI/LoginUserInfo";

const defaultAuthError = { code: "", message: "", isError: false };

function Login() {
  const [authError, setAuthError] = useState(defaultAuthError);
  const { onSetUserAuthData, onUserLogout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const setUserLoggedOut = async () => {
      try {
        await logoutUser();
        onUserLogout();
      } catch (error) {
        setAuthError({
          code: error.code,
          message: error.message,
          isError: true,
        });
      }
    };
    setUserLoggedOut();
  }, [onUserLogout]);

  const loginUserHandler = async (userData) => {
    let loggedInUserData;

    clearAuthError();

    try {
      loggedInUserData = await loginUserInFirebase(userData);
      loggedInUserData = {
        email: loggedInUserData.email,
        displayName: loggedInUserData.displayName,
        uid: loggedInUserData.uid,
        photoURL: loggedInUserData.photoURL,
      };
      onSetUserAuthData(loggedInUserData);
      navigateToHomePage();
    } catch (error) {
      setAuthError({
        code: error.code,
        message: error.message,
        isError: true,
      });
    }
  };

  const clearAuthError = () => {
    setAuthError(defaultAuthError);
  };

  const navigateToHomePage = () => {
    router.replace("/");
  };

  return (
    <SiteLayout>
      <div className="py-16 sm:py-48 relative xl:px-40">
        {authError.isError && (
          <ErrorBanner code={authError.code} message={authError.message} />
        )}
        <LoginUserInfo />
        <LoginForm onLoginUser={loginUserHandler} />
      </div>
    </SiteLayout>
  );
}

export default Login;
