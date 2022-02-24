import { useCallback, useState } from "react";

import { MovieDataContext, defaultMovieDataContext } from "./MovieDataContext";
function MovieContextProvider({ children }) {
  //TODO change to useReducer?
  const [movieData, setMovieData] = useState({ ...defaultMovieDataContext });

  const setPopularMovies = useCallback((movieList) => {
    setMovieData((prevState) => ({
      ...prevState,
      movies: { popular: movieList },
    }));
  }, []);

  const setPopularTvShows = useCallback((tvShowList) => {
    setMovieData((prevState) => ({
      ...prevState,
      tvShows: { popular: tvShowList },
    }));
  }, []);

  const setPopularActors = useCallback((actorList) => {
    setMovieData((prevState) => ({
      ...prevState,
      actors: { popular: actorList },
    }));
  }, []);

  return (
    <MovieDataContext.Provider
      value={{
        ...movieData,
        onSetPopularMovies: setPopularMovies,
        onSetPopularTvShows: setPopularTvShows,
        onSetPopularActors: setPopularActors,
      }}
    >
      {children}
    </MovieDataContext.Provider>
  );
}

export default MovieContextProvider;
