import React from "react";

const defaultMovieDataContext = {
  movies: { popular: [] },
  tvShows: { popular: [] },
  actors: { popular: [] },
  selectedMovieOrShow: null,

  selectedActor: null,
  onSetPopularMovies: () => {},
  onSetPopularTvShows: () => {},
  onSetPopularActors: () => {},
  onSetSelectedMovieOrShow: () => {},
  onSetSelectedActor: () => {},
};

const MovieDataContext = React.createContext({ ...defaultMovieDataContext });

export { MovieDataContext, defaultMovieDataContext };
