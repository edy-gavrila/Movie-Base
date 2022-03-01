import { useEffect, useState } from "react";
import {
  getTvShowDetails,
  getTvShowCredits,
  makeFullImageUrl,
} from "../APIs/tmdb";
import { getReleaseYear, extractGenres } from "../APIs/helperFunctions";

import Backdrop from "./UI/Backdrop";
import Image from "next/image";
import StarRating from "./UI/StarRating";
import DetailsCardActions from "./UI/DetailsModalActions";

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

  const posterImageWidth = 300;
  const posterImageHeight = 450;
  const backdropImageWidth = 780;
  const backdropImageHeight = 439;
  const { genres, seasons, tagline } = tvShowDetails;
  const genreList = extractGenres(genres).join(", ");

  const posterUrl = makeFullImageUrl(posterPath, posterImageWidth);
  const backdropUrl = makeFullImageUrl(backdropPath, backdropImageWidth);

  const releaseYear = getReleaseYear(releaseDate);
  const numberOfSeasons = seasons ? seasons.length : 0;
  const numberOfSeasonsString = `${numberOfSeasons} season${
    numberOfSeasons === 1 ? "" : "s"
  }`;

  console.log(tvShowDetails);
  return (
    <Backdrop>
      <div className="flex flex-col sm:flex-row items-center bg-white rounded-md shadow-lg w-full h-full sm:h-auto md:w-4/5 ">
        <div className="hidden sm:block h-[450px] w-[300px]">
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
          <h2 className="text-black text-2xl  font-bold tracking-normal">
            {`${title} (${releaseYear})`}
          </h2>
          <ul className="list-disc flex flex-wrap overflow-hidden pl-4 mb-2 text-sm">
            <li className="mr-6">{genreList}</li>
            <li className="">{`${numberOfSeasonsString}`}</li>
          </ul>
          <div className="mb-2 w-full flex justify-center">
            <StarRating rating={voteAverage} />
          </div>
          <p className="italic text-black mb-4">{tagline}</p>
          <p>{overview}</p>
          <div className="grow flex items-end">
            <DetailsCardActions />
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default TvShowDetailsModal;
