import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import Head from "next/head";
import SiteLayout from "../components/SiteLayout";
import MovieContextProvider from "../Contexts/MovieContextProvider";
import PopularMovieList from "../components/PopularMovieList";
import { AppStateContext } from "../Contexts/AppStateContext";

export default function Movies() {
  const { isAuthenticated } = useContext(AuthContext);
  const { onSetSlectedMenuItemIndex } = useContext(AppStateContext);
  
  useEffect(() => onSetSlectedMenuItemIndex(1), [onSetSlectedMenuItemIndex]);
  return (
    <>
      <Head>
        <title>Movie Base</title>
        <meta name="description" content="Personal movie library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>
        <MovieContextProvider>
          <PopularMovieList isExpandable={false} />
        </MovieContextProvider>
      </SiteLayout>
    </>
  );
}
