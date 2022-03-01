import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import Head from "next/head";
import SiteLayout from "../components/SiteLayout";
import MovieContextProvider from "../Contexts/MovieContextProvider";
import PopularMovieList from "../components/PopularMovieList";

export default function Movies() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Movie Base</title>
        <meta name="description" content="Personal movie library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout selectedMenuItemIndex={3}>
        <h1>Personalized lists</h1>
      </SiteLayout>
    </>
  );
}
