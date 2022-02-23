import { useState, useEffect } from "react";

import MovieContextProvider from "../Contexts/MovieContextProvider";
import PopularMovieList from "./PopularMovieList";
import PopularTvShowsList from "./PopularTvShowsList";

function DefaultMovieLists() {
  return (
    <MovieContextProvider>
      <PopularMovieList />
      <PopularTvShowsList />
    </MovieContextProvider>
  );
}

export default DefaultMovieLists;
