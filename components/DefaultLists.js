import MovieContextProvider from "../Contexts/MovieContextProvider";
import PopularActorsList from "./PopularActorsList";

import PopularMovieList from "./PopularMovieList";
import PopularTvShowsList from "./PopularTvShowsList";

function DefaultLists() {
  return (
    <>
      <PopularMovieList isExpandable />
      <PopularTvShowsList isExpandable />
      <PopularActorsList isExpandable />
    </>
  );
}

export default DefaultLists;
