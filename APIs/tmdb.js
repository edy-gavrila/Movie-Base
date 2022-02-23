import tmdbKey from "./tmdbApiKey";
const discoverMoviesBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}`;
const discoverTvShowsBaseURL = `https://api.themoviedb.org/3/discover/tv?api_key=${tmdbKey}`;

const getMoviesByPopularity = async (pageNumber = 1) => {
  if (pageNumber < 1) {
    pageNumber = 1;
  }
  //api asks that page number should not go over 500
  if (pageNumber > 500) {
    pageNumber = 500;
  }

  const popularMoviesEndPoint = `${discoverMoviesBaseURL}&sort_by=popularity.desc&page=${pageNumber}`;

  let moviesData = await fetch(popularMoviesEndPoint);
  moviesData = await moviesData.json();
  return moviesData;
};

const getTvShowsByPopularity = async (pageNumber = 1) => {
  if (pageNumber < 1) {
    pageNumber = 1;
  }
  //api asks that page number should not go over 500
  if (pageNumber > 500) {
    pageNumber = 500;
  }
  const popularTvShowsEndPoint = `${discoverTvShowsBaseURL}&sort_by=popularity.desc&page=${pageNumber}`;
  let tvShowData = await fetch(popularTvShowsEndPoint);
  tvShowData = await tvShowData.json();
  return tvShowData;
};

const makeFullImagePath = (relativePath, imageWidth) => {
  const baseURL = "https://image.tmdb.org/t/p/w";
  return `${baseURL}${imageWidth}${relativePath}`;
};

export { getMoviesByPopularity, getTvShowsByPopularity, makeFullImagePath };
