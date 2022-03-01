import "../styles/globals.css";

import AuthContextProvider from "../Contexts/AuthContextProvider";
import AppStateContextProvider from "../Contexts/AppStateContextProvider";
import MovieContextProvider from "../Contexts/MovieContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <AppStateContextProvider>
        <MovieContextProvider>
          <Component {...pageProps} />
        </MovieContextProvider>
      </AppStateContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
