import { useEffect, useState } from "react";
import {
  getTvShowDetails,
  getTvShowCredits,
  makeFullImageUrl,
} from "../APIs/tmdb";
import {
  getReleaseYear,
  extractGenres,
  extractProducerFromCredits,
} from "../APIs/helperFunctions";

import Backdrop from "./UI/Backdrop";
import Image from "next/image";
import StarRating from "./UI/StarRating";
import DetailsCardActions from "./UI/DetailsModalActions";
import DetailsModalInnerContainer from "./UI/DetailsModalInnerContainer";
import DetailsModalHeader from "./UI/DetailsModalHeader";
import Credits from "./UI/Credits";

function TvShowDetailsModal({ tvShowData }) {
  const {
    id,
    title,
    posterPath,
    backdropPath,
    releaseDate,
    overview,
    voteAverage,
  } = tvShowData;

  const [tvShowDetails, setTvShowDetails] = useState({});
  const [tvShowCredits, setTvShowCredits] = useState({});

  useEffect(() => {
    const fetchTvShowDetails = async (tvShowId) => {
      try {
        const tvShowDetails = await getTvShowDetails(tvShowId);
        setTvShowDetails(tvShowDetails);
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchTvShowCredits = async (tvShowId) => {
      try {
        const tvShowCredits = await getTvShowCredits(tvShowId);
        setTvShowCredits(tvShowCredits);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTvShowCredits(id);
    fetchTvShowDetails(id);
  }, [id]);

  const apiRequestImageWidth = 780;
  const posterImageWidth = 334;
  const posterImageHeight = 500;
  const backdropImageWidth = 780;
  const backdropImageHeight = 439;
  const { genres, seasons, tagline } = tvShowDetails;
  const genreList = extractGenres(genres).join(", ");

  const posterUrl = makeFullImageUrl(posterPath, apiRequestImageWidth);
  const backdropUrl = makeFullImageUrl(backdropPath, backdropImageWidth);

  const releaseYear = getReleaseYear(releaseDate);
  const numberOfSeasons = seasons ? seasons.length : 0;
  const producer = extractProducerFromCredits(tvShowCredits);
  const topThreeCast = tvShowCredits.cast ? tvShowCredits.cast.slice(0, 3) : [];

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
            numberOfseasons={numberOfSeasons}
          />
          <div className="mb-2 w-full flex justify-center">
            <StarRating rating={voteAverage} />
          </div>
          <Credits topThreeCast={topThreeCast} producer={producer} />
          <p className="italic text-black mb-4">{tagline}</p>
          <p>{overview}</p>
          <div className="grow flex items-end">
            <DetailsCardActions />
          </div>
        </div>
      </DetailsModalInnerContainer>
    </Backdrop>
  );
}

export default TvShowDetailsModal;
