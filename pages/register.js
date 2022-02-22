import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../Contexts/AuthContext";

import {
  logoutUser,
  registerUserWithFirebase,
  updateFirebaseProfileUserNameAndPhotoURL,
} from "../APIs/auth";

import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import RegisterUserInfo from "../components/UI/RegisterUserInfo";
import ErrorBanner from "../components/UI/ErrorBanner";

const defaultAuthError = { code: "", message: "", isError: false };

function Register() {
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

  const registerUserHandler = async ({
    username,
    email,
    password,
    photoURL,
  }) => {
    let registeredUserData;

    clearAuthError();

    try {
      registeredUserData = await registerUserWithFirebase({
        email,
        password,
      });

      if (username || photoURL) {
        registeredUserData = await updateFirebaseProfileUserNameAndPhotoURL({
          username,
          photoURL,
        });
      }

      onSetUserAuthData(registeredUserData);
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
    router.push("/");
  };
  return (
    <SiteLayout>
      <div className="py-4 sm:py-24 sm:px-4 xl:px-40 flex flex-col justify-center items-left relative ">
        {authError.isError && (
          <ErrorBanner code={authError.code} message={authError.message} />
        )}
        <RegisterUserInfo />
        <RegistrationForm onRegisterUser={registerUserHandler} />
      </div>
    </SiteLayout>
  );
}
export default Register;
