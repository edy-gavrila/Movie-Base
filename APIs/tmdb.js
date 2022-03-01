import { FaRocketchat } from "react-icons/fa";

const tmdbKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseURL = "https://api.themoviedb.org/3";
const discoverMoviesBaseURL = `${baseURL}/discover/movie?api_key=${tmdbKey}`;

const discoverTvShowsBaseURL = `${baseURL}/discover/tv?api_key=${tmdbKey}`;
const popularCharactersBaseURL = `${baseURL}/person/popular?api_key=${tmdbKey}`;
const movieDetailsBaseURL = `${baseURL}/movie`;
const tvShowDetailsBaseURL = `${baseURL}/tv`;

const fetchJsonfromApi = async (endpoint) => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(
      "Invalid Response from the API. Check if endpoint is valid!"
    );
  }
  const data = await response.json();
  return data;
};

const getMoviesByPopularity = async (pageNumber = 1) => {
  if (pageNumber < 1) {
    pageNumber = 1;
  }
  //api asks that page number should not go over 500
  if (pageNumber > 500) {
    pageNumber = 500;
  }
  const popularMoviesEndPoint = `${discoverMoviesBaseURL}&sort_by=popularity.desc&page=${pageNumber}`;
  const moviesData = await fetchJsonfromApi(popularMoviesEndPoint);
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
  const tvShowData = await fetchJsonfromApi(popularTvShowsEndPoint);
  return tvShowData;
};

const getMovieDetails = async (tmdbId) => {
  if (!tmdbId) {
    throw new Error("Invalid movie id!");
  }
  const movieDetailsEndpoint = `${movieDetailsBaseURL}/${tmdbId}?api_key=${tmdbKey}`;
  const movieDetailsData = await fetchJsonfromApi(movieDetailsEndpoint);
  return movieDetailsData;
};
const getTvShowDetails = async (tmdbId) => {
  if (!tmdbId) {
    throw new Error("Invalid TV show id!");
  }
  const tvShowDetailsEndpoint = `${tvShowDetailsBaseURL}/${tmdbId}?api_key=${tmdbKey}`;
  const tvShowDetailsData = await fetchJsonfromApi(tvShowDetailsEndpoint);
  return tvShowDetailsData;
};

const getMovieCredits = async (tmdbId) => {
  if (!tmdbId) {
    throw new Error("Invalid movie id!");
  }
  const movieCreditsEndpoint = `${movieDetailsBaseURL}/${tmdbId}/credits?api_key=${tmdbKey}`;
  const movieCreditsData = await fetchJsonfromApi(movieCreditsEndpoint);
  return movieCreditsData;
};

const getTvShowCredits = async (tmdbId) => {
  if (!tmdbId) {
    throw new Error("Invalid TV show id!");
  }
  const tvShowCreditsEndpoint = `${tvShowDetailsBaseURL}/${tmdbId}/credits?api_key=${tmdbKey}`;
  const tvShowCreditsData = await fetchJsonfromApi(tvShowCreditsEndpoint);
  return tvShowCreditsData;
};

const getCharactersByPopularity = async (pageNumber = 1) => {
  const popularCharactersEndPoint = `${popularCharactersBaseURL}&page=${[
    pageNumber,
  ]}`;
  const popularCharactersData = await fetchJsonfromApi(
    popularCharactersEndPoint
  );
  return popularCharactersData;
};

const getActorInfoById = async (actorId) => {
  if (!actorId) {
    throw new Error("Invalid actor id!");
  }
  const actorByIdEndPoint = `${baseURL}/person/${actorId}?api_key=${tmdbKey}`;
  const actorData = await fetchJsonfromApi(actorByIdEndPoint);
  return actorData;
};

const makeFullImageUrl = (relativeUrl, imageWidth) => {
  const baseURL = "https://image.tmdb.org/t/p/w";
  return `${baseURL}${imageWidth}${relativeUrl}`;
};

export {
  getMoviesByPopularity,
  getTvShowsByPopularity,
  getMovieDetails,
  getTvShowDetails,
  getMovieCredits,
  getTvShowCredits,
  getCharactersByPopularity,
  getActorInfoById,
  makeFullImageUrl,
};
