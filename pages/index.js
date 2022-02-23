import { useContext, useEffect } from "react";
import Head from "next/head";

import SiteLayout from "../components/SiteLayout";
import { AuthContext } from "../Contexts/AuthContext";
import { getMoviesByPopularity } from "../APIs/tmdb";
import MovieList from "../components/PopularMovieList";
import MovieContextProvider from "../Contexts/MovieContextProvider";
import DefaultMovieLists from "../components/DefaultMovieLists";

export default function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Movie Base</title>
        <meta name="description" content="Personal movie library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>{!isAuthenticated && <DefaultMovieLists />}</SiteLayout>
    </>
  );
}
