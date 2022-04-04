import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../Contexts/AuthContext";

import LoginForm from "../components/LoginForm";
import SiteLayout from "../components/SiteLayout";
import ErrorBanner from "../components/UI/ErrorBanner";
import LoginUserInfo from "../components/UI/LoginUserInfo";
import { AppStateContext } from "../Contexts/AppStateContext";

const defaultAuthError = { code: "", message: "", isError: false };

function Login() {
  const [authError, setAuthError] = useState(defaultAuthError);
  const { onUserLogout, onUserLogin, isAuthenticated } =
    useContext(AuthContext);
  const { onSetSlectedMenuItemIndex } = useContext(AppStateContext);
  const router = useRouter();

  const navigateToHomePage = useCallback(() => {
    router.replace("/");
  }, [router]);

  useEffect(() => {
    const setUserLoggedOut = async () => {
      try {
        onUserLogout();
      } catch (error) {
        setAuthError({
          code: error.code,
          message: error.message,
          isError: true,
        });
      }
    };
    if (isAuthenticated) {
      navigateToHomePage();
    } else {
      setUserLoggedOut();
      onSetSlectedMenuItemIndex(-1);
    }
  }, [
    onUserLogout,
    onSetSlectedMenuItemIndex,
    isAuthenticated,
    navigateToHomePage,
  ]);

  const loginUserHandler = async (userData) => {
    clearAuthError();
    try {
      await onUserLogin(userData);
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
