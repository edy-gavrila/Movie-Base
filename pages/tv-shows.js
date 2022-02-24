import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import Head from "next/head";
import SiteLayout from "../components/SiteLayout";
import DefaultLists from "../components/DefaultLists";
import MovieContextProvider from "../Contexts/MovieContextProvider";
import PopularTvShowsList from "../components/PopularTvShowsList";

export default function Movies() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Movie Base</title>
        <meta name="description" content="Personal movie library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>
        <MovieContextProvider>
          <PopularTvShowsList isExpandable={false} />
        </MovieContextProvider>
      </SiteLayout>
    </>
  );
}
