import MovieContextProvider from "../Contexts/MovieContextProvider";
import PopularActorsList from "./PopularActorsList";

import PopularMovieList from "./PopularMovieList";
import PopularTvShowsList from "./PopularTvShowsList";

function DefaultLists() {
  return (
    <MovieContextProvider>
      <PopularMovieList isExpandable />
      <PopularTvShowsList isExpandable />
      <PopularActorsList />
    </MovieContextProvider>
  );
}

export default DefaultLists;
