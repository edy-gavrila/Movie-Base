import { useState } from "react";
import { useRouter } from "next/router";

import { signInUserInFirebaseWithAwait } from "../APIs/auth";
import { AuthContext } from "../Contexts/AuthContext";

import LoginForm from "../components/LoginForm/LoginForm";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import ErrorBanner from "../components/UI/ErrorBanner";
import Link from "next/link";

const defaultAuthError = { code: "", message: "", isError: false };

function Login() {
  const [authError, setAuthError] = useState(defaultAuthError);
  const router = useRouter();

  return (
    <AuthContext.Consumer>
      {(value) => {
        const { setLoggedInUserContextData } = value;

        const loginHandler = async (userData) => {
          clearAuthError();
          let userAuthData;
          try {
            userAuthData = await signInUserInFirebaseWithAwait(userData);
            const loggedInUserData = {
              email: userAuthData.email,
              displayName: userAuthData.displayName,
              uid: userAuthData.uid,
              photoURL: userAuthData.photoURL,
            };
            setLoggedInUserContextData(loggedInUserData);
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
            <div className="h-full flex flex-col justify-center items-left relative">
              {authError.isError && (
                <ErrorBanner
                  code={authError.code}
                  message={authError.message}
                />
              )}
              <h3 className="text-2xl text-zinc-800 mb-2">
                Login to your account
              </h3>
              <p>
                By Logging in, you can rate movies and make lists with your
                favourite movies
              </p>
              <p>
                Don&apos;t have an account yet?{" "}
                <Link href={"/register"}>
                  <a className="text-cyan-700">Register here!</a>
                </Link>
              </p>
              <p className="mb-10">
                You can also use the website in &quot;Guest Mode&quot;. Just
                click the link on the top-right.
              </p>
              <LoginForm onLogin={loginHandler} />
            </div>
          </SiteLayout>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Login;
