import "../styles/globals.css";

import AuthContextProvider from "../Contexts/AuthContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
