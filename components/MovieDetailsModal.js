import { useEffect, useState } from "react";
import {
  getMovieCredits,
  getMovieDetails,
  makeFullImageUrl,
} from "../APIs/tmdb";
import {
  getReleaseYear,
  extractGenres,
  extractDirectorFromCredits,
} from "../APIs/helperFunctions";

import Backdrop from "./UI/Backdrop";
import Image from "next/image";
import StarRating from "./UI/StarRating";
import DetailsModalActions from "./UI/DetailsModalActions";
import Credits from "./UI/Credits";
import DetailsModalInnerContainer from "./UI/DetailsModalInnerContainer";
import DetailsModalHeader from "./UI/DetailsModalHeader";

function MovieDetailsModal({ movieData }) {
  const {
    id,
    title,
    posterPath,
    backdropPath,
    releaseDate,
    overview,
    voteAverage,
  } = movieData;

  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async (movieId) => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchMovieCredits = async (movieId) => {
      try {
        const movieCredits = await getMovieCredits(movieId);
        setMovieCredits(movieCredits);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieCredits(id);
    fetchMovieDetails(id);
  }, [id]);

  const apiRequestImageWidth = 780;

  const posterImageWidth = 334;
  const posterImageHeight = 500;
  const backdropImageWidth = 780;
  const backdropImageHeight = 439;
  const { genres, runtime, tagline } = movieDetails;
  const genreList = extractGenres(genres).join(", ");

  const posterUrl = makeFullImageUrl(posterPath, apiRequestImageWidth);
  const backdropUrl = makeFullImageUrl(backdropPath, backdropImageWidth);

  const releaseYear = getReleaseYear(releaseDate);
  const director = extractDirectorFromCredits(movieCredits);
  const topThreeCast = movieCredits.cast ? movieCredits.cast.slice(0, 3) : [];

  return (
    <Backdrop>
      <DetailsModalInnerContainer>
        <div className="hidden sm:block h-[500px] w-[334px]">
          <Image
            src={posterUrl}
            width={posterImageWidth}
            height={posterImageHeight}
            alt="Movie Poster"
            layout="fixed"
          />
        </div>
        <div className=" sm:hidden">
          <Image
            src={backdropUrl}
            width={backdropImageWidth}
            height={backdropImageHeight}
            alt="Movie Poster"
          />
        </div>

        <div className="flex flex-col grow h-full overflow-auto  p-2 md:pl-4">
          <DetailsModalHeader
            title={title}
            releaseYear={releaseYear}
            genreList={genreList}
            runtime={runtime}
          />

          <div className="mb-2 w-full flex justify-center">
            <StarRating rating={voteAverage} />
          </div>
          <Credits topThreeCast={topThreeCast} director={director} />
          <div>
            <p className="italic text-black mb-4">{tagline}</p>
            <p className="mb-2">{overview}</p>
          </div>
          <div className="grow flex items-end">
            <DetailsModalActions />
          </div>
        </div>
      </DetailsModalInnerContainer>
    </Backdrop>
  );
}

export default MovieDetailsModal;
