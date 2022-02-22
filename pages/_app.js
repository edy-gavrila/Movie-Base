import "../styles/globals.css";

import AuthContextProvider from "../Contexts/AuthContextProvider";

function MyApp({ Component, pageProps }) {
  console.log("Rendering MyApp");
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
