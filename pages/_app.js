import { useState } from "react";
import "../styles/globals.css";

import { AuthContext } from "../Contexts/AuthContext";
import { defaultUserData } from "../Contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  const authState = useState(defaultUserData);
  console.log("Rendering MyApp");
  return (
    <AuthContext.Provider value={authState}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
