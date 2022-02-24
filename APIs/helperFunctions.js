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

export {
  formatDate,
  extractUsableMovieData,
  extractUsableTvShowData,
  extractUsableActorData,
};
