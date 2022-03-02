import { makeFullImageUrl } from "../../APIs/tmdb";
import { formatDate } from "../../APIs/helperFunctions";
import StarRating from "./StarRating";
import Image from "next/image";
import { useContext } from "react";
import { AppStateContext } from "../../Contexts/AppStateContext";

function MovieCard({ movieData, onSetSelectedMovieOrShow }) {
  const { onShowDetailsModal } = useContext(AppStateContext);

  const { title, posterPath, releaseDate, voteAverage, overview } = movieData;
  const imageWidth = "185";
  const imageHeight = "278";
  const fullPosterUrl = makeFullImageUrl(posterPath, imageWidth);
  const formatedDate = formatDate(releaseDate);

  const cardClickHandler = () => {
    onShowDetailsModal();
    onSetSelectedMovieOrShow(movieData);
  };

  return (
    <div
      className="bg-white rounded-md overflow-hidden flex sm:block sm:w-[185px] shadow-lg  text-black tracking-normal cursor-pointer"
      onClick={cardClickHandler}
    >
      <div className="h-[278px]">
        <Image
          src={fullPosterUrl}
          width={imageWidth}
          height={imageHeight}
          layout="fixed"
          alt="Actor image"
        />
      </div>

      <div className="p-2 h-[275px] sm:h-24 flex flex-col grow justify-between items-center sm:items-start">
        <h4 className="sm:text-sm text-center sm:text-left font-bold w-full  overflow-hidden">
          {title}
        </h4>
        <p className="flex  w-full text-xs text-slate-500  sm:hidden  overflow-scroll">
          {overview}
        </p>
        <div>
          <p className="text-sm">{formatedDate}</p>
          <StarRating rating={voteAverage} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
