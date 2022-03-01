import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { AppStateContext } from "../Contexts/AppStateContext";

import Head from "next/head";
import SiteLayout from "../components/SiteLayout";
import MovieContextProvider from "../Contexts/MovieContextProvider";
import PopularActorsList from "../components/PopularActorsList";

export default function Actors() {
  const { isAuthenticated } = useContext(AuthContext);
  const { onSetSlectedMenuItemIndex } = useContext(AppStateContext);

  useEffect(() => onSetSlectedMenuItemIndex(3), [onSetSlectedMenuItemIndex]);
  return (
    <>
      <Head>
        <title>Movie Base</title>
        <meta name="description" content="Personal movie library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout selectedMenuItemIndex={2}>
        <PopularActorsList isExpandable={false} />
      </SiteLayout>
    </>
  );
}
