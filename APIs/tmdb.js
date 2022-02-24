import tmdbKey from "./tmdbApiKey";

const baseURL = "https://api.themoviedb.org/3";
const discoverMoviesBaseURL = `${baseURL}/discover/movie?api_key=${tmdbKey}`;

const discoverTvShowsBaseURL = `${baseURL}/discover/tv?api_key=${tmdbKey}`;
const popularCharactersBaseURL = `${baseURL}/person/popular?api_key=${tmdbKey}`;

const getMoviesByPopularity = async (pageNumber = 1) => {
  if (pageNumber < 1) {
    pageNumber = 1;
  }
  //api asks that page number should not go over 500
  if (pageNumber > 500) {
    pageNumber = 500;
  }

  const popularMoviesEndPoint = `${discoverMoviesBaseURL}&sort_by=popularity.desc&page=${pageNumber}`;

  let moviesDataResponse = await fetch(popularMoviesEndPoint);
  let moviesData = await moviesDataResponse.json();
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
  let tvShowDataResponse = await fetch(popularTvShowsEndPoint);
  let tvShowData = await tvShowDataResponse.json();
  return tvShowData;
};

const getCharactersByPopularity = async (pageNumber = 1) => {
  const popularCharactersEndPoint = `${popularCharactersBaseURL}&page=${[
    pageNumber,
  ]}`;
  let popularCharactersDataResponse = await fetch(popularCharactersEndPoint);
  let popularCharactersData = await popularCharactersDataResponse.json();
  return popularCharactersData;
};

const getActorInfoById = async (actorId) => {
  const actorByIdEndPoint = `${baseURL}/person/${actorId}?api_key=${tmdbKey}`;
  let actorDataResponse = await fetch(actorByIdEndPoint);
  let actorData = await actorDataResponse.json();
  return actorData;
};

const makeFullImageUrl = (relativeUrl, imageWidth) => {
  const baseURL = "https://image.tmdb.org/t/p/w";
  return `${baseURL}${imageWidth}${relativeUrl}`;
};

export {
  getMoviesByPopularity,
  getTvShowsByPopularity,
  getCharactersByPopularity,
  getActorInfoById,
  makeFullImageUrl,
};
