import { useCallback, useState } from "react";

import { MovieDataContext, defaultMovieDataContext } from "./MovieDataContext";
function MovieContextProvider({ children }) {
  const [movieData, setMovieData] = useState({ ...defaultMovieDataContext });

  const setPopularMovies = useCallback((movieList) => {
    setMovieData((prevState) => ({
      ...prevState,
      movies: { popular: movieList },
    }));
  }, []);

  const setPopularTvShows = useCallback((tvShowsList) => {
    setMovieData((prevState) => ({
      ...prevState,
      tvShows: { popular: tvShowsList },
    }));
  }, []);

  return (
    <MovieDataContext.Provider
      value={{
        ...movieData,
        onSetPopularMovies: setPopularMovies,
        onSetPopularTvShows: setPopularTvShows,
      }}
    >
      {children}
    </MovieDataContext.Provider>
  );
}

export default MovieContextProvider;
