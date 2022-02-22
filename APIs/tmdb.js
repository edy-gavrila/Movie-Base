import tmdbKey from "./tmdbApiKey";
const discoverBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}`;

const getMoviesByPopularity = async (pageNumber) => {
  const popularityEndPoint = `${discoverBaseURL}&sort_by=popularity.desc`;
  console.log(popularityEndPoint);
  let moviesData = await fetch(popularityEndPoint);
  moviesData = await moviesData.json();
  return moviesData;
};

export { getMoviesByPopularity };
