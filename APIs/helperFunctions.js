import { format } from "date-fns";
import { logWithPosition } from "./errorManagement";

const formatDate = (date) => {
  //Due to inconsistencies in the date from tmdb api, the function needs to deal with invalid dates
  let formatedDate = "Unknown";
  try {
    formatedDate = format(new Date(date), "dd MMM yyyy");
  } catch (error) {
    logWithPosition("formatDate", "Invalid Date");
  } finally {
    return formatedDate;
  }
};

const getReleaseYear = (date) => {
  let releaseYear = "";
  try {
    releaseYear = new Date(date).getFullYear();
  } catch (error) {
    console.error(error.message);
  } finally {
    return releaseYear;
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

const extractUsableActorData = (actorData) => {
  const usableActorData = actorData.map((actor) => {
    const knownForTitles = actor.known_for.map((title) => {
      const releaseDate = title.first_air_date
        ? title.first_air_date
        : title.release_date;

      const name = title.original_name
        ? title.original_name
        : title.original_title;

      return {
        id: title.id,
        overview: title.overview,
        name,
        releaseDate,
        posterPath: title.poster_path,
      };
    });

    return {
      id: actor.id,
      name: actor.name,
      profilePath: actor.profile_path,
      knownForTitles,
    };
  });

  return usableActorData;
};

const extractGenres = (genresList) => {
  if (!genresList) {
    return [];
  }
  return genresList.map((genre) => genre.name);
};

const extractDirectorFromCredits = (credits) => {
  if (!credits.crew) {
    return "";
  }
  const directors = credits.crew.filter((person) => person.job === "Director");
  return directors[0];
};
const extractProducerFromCredits = (credits) => {
  if (!credits.crew) {
    return "";
  }
  const producers = credits.crew.filter((person) => person.job === "Producer");
  return producers[0];
};

const disableBodyScrolling = () => {
  document.body.style.overflow = "hidden";
};
const enableBodyScrolling = () => {
  document.body.style.overflow = "auto";
};

export {
  formatDate,
  getReleaseYear,
  extractUsableMovieData,
  extractUsableTvShowData,
  extractUsableActorData,
  extractGenres,
  extractDirectorFromCredits,
  extractProducerFromCredits,
  disableBodyScrolling,
  enableBodyScrolling,
};
