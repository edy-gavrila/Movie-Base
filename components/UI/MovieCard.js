import { makeFullImageUrl } from "../../APIs/tmdb";
import { formatDate } from "../../APIs/helperFunctions";
import StarRating from "./StarRating";
import Image from "next/image";

function MovieCard({ movieData }) {
  const { title, posterPath, releaseDate, voteAverage, overview } = movieData;
  const imageWidth = 185;
  const imageHeight = "278";
  const fullPosterUrl = makeFullImageUrl(posterPath, imageWidth);
  const formatedDate = formatDate(releaseDate);

  return (
    <div className="bg-white rounded-md overflow-hidden flex sm:block sm:w-[185px] shadow-lg  text-black tracking-normal">
      <div>
        <Image
          src={fullPosterUrl}
          width={imageWidth}
          height={imageHeight}
          layout="fixed"
          alt="Actor image"
        />
      </div>

      <div className="p-2 h-[275px] sm:h-24 flex flex-col grow justify-between items-center sm:items-start">
        <h4 className="sm:text-sm text-center sm:text-left font-bold w-full sm:h-[3rem] overflow-hidden">
          {title}
        </h4>
        <p className="w-full text-xs text-slate-500  sm:hidden max-h-48 ">
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
