import React from "react";

const defaultMovieDataContext = {
  movies: { popular: [] },
  tvShows: { popular: [] },
  people: [],
  onSetPopularMovies: () => {},
  onSetPopularTvShows: () => {},
  onSetPeople: () => {},
};

const MovieDataContext = React.createContext({ ...defaultMovieDataContext });

export { MovieDataContext, defaultMovieDataContext };
