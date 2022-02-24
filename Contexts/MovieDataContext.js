import React from "react";

const defaultMovieDataContext = {
  movies: { popular: [] },
  tvShows: { popular: [] },
  actors: {popular: []},
  onSetPopularMovies: () => {},
  onSetPopularTvShows: () => {},
  onSetPopularActors: () => {},
};

const MovieDataContext = React.createContext({ ...defaultMovieDataContext });

export { MovieDataContext, defaultMovieDataContext };
