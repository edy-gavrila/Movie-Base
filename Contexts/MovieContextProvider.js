import { useCallback, useState } from "react";

import { MovieDataContext, defaultMovieDataContext } from "./MovieDataContext";
function MovieContextProvider({ children }) {
  //TODO change to useReducer?
  const [movieData, setMovieData] = useState({ ...defaultMovieDataContext });

  const onSetPopularMovies = useCallback((movieList) => {
    setMovieData((prevState) => ({
      ...prevState,
      movies: { popular: [...movieList] },
    }));
  }, []);

  const onSetPopularTvShows = useCallback((tvShowList) => {
    setMovieData((prevState) => ({
      ...prevState,
      tvShows: { popular: [...tvShowList] },
    }));
  }, []);

  const onSetPopularActors = useCallback((actorList) => {
    setMovieData((prevState) => ({
      ...prevState,
      actors: { popular: [...actorList] },
    }));
  }, []);

  const onSetSelectedMovieOrShow = useCallback((movieData, type) => {
    setMovieData((prevState) => ({
      ...prevState,
      selectedMovieOrShow: { ...movieData, type },
    }));
  }, []);

  const onSetSelectedActor = useCallback((actorData) => {
    setMovieData((prevState) => ({
      ...prevState,
      selectedActor: { ...actorData },
    }));
  }, []);

  return (
    <MovieDataContext.Provider
      value={{
        ...movieData,
        onSetPopularMovies,
        onSetPopularTvShows,
        onSetPopularActors,
        onSetSelectedMovieOrShow,
        onSetSelectedActor,
      }}
    >
      {children}
    </MovieDataContext.Provider>
  );
}

export default MovieContextProvider;
