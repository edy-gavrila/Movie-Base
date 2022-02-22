import { useContext, useEffect } from "react";
import Head from "next/head";

import SiteLayout from "../components/SiteLayout/SiteLayout";
import { AuthContext } from "../Contexts/AuthContext";
import { getMoviesByPopularity } from "../APIs/tmdb";

export default function HomePage() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const fetchMostPopularMovies = async () => {
      const movieList = await getMoviesByPopularity();
      console.log(movieList);
    };

    fetchMostPopularMovies();
  }, []);
  return (
    <>
      <Head>
        <title>Movie Base</title>
        <meta name="description" content="Personal movie library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>
        <h1 className="text-4xl font-bold underline">Initial Project</h1>
      </SiteLayout>
    </>
  );
}
