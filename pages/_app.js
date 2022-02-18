import { useState } from "react";
import "../styles/globals.css";

import { AuthContext } from "../Contexts/AuthContext";
import { defaultUserData } from "../Contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  const [authState, setAuthState] = useState(defaultUserData);

  const userLoginHandler = ({ email, displayName, photoURL, uid }) => {
    setAuthState({
      user: { email, displayName, photoURL, uid },
      isAuthenticated: true,
    });
  };

  console.log("Rendering MyApp");
  return (
    <AuthContext.Provider
      value={{ authState, setLoggedInUserContextData: userLoginHandler }}
    >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
