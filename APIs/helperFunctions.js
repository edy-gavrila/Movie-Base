import { format } from "date-fns";

const formatDate = (date) => {
  //Due to inconsistencies in the date from tmdb api, the function needs to deal with invalid dates
  let formatedDate = "Unknown";
  try {
    formatedDate = format(new Date(date), "dd MMM yyyy");
  } catch (error) {
    console.error(error.message);
  } finally {
    return formatedDate;
  }
};

const extractUsableMovieData = (movieList) => {
  const usableMovieData = movieList.map((movie) => {
    return {
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      backdropPath: movie.backdrop_path,
      posterPath: movie.poster_path,
      voteAverage: movie.vote_average,
      releaseDate: movie.release_date,
    };
  });
  return usableMovieData;
};

const extractUsableTvShowData = (tvShowsList) => {
  const usableTvShowData = tvShowsList.map((tvShow) => {
    return {
      id: tvShow.id,
      title: tvShow.name,
      overview: tvShow.overview,
      backdropPath: tvShow.backdrop_path,
      posterPath: tvShow.poster_path,
      voteAverage: tvShow.vote_average,
      releaseDate: tvShow.first_air_date,
    };
  });
  return usableTvShowData;
};

export { formatDate, extractUsableMovieData, extractUsableTvShowData };
