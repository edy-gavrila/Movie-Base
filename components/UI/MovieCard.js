import { makeFullImagePath } from "../../APIs/tmdb";
import { formatDate } from "../../APIs/helperFunctions";
import StarRating from "./StarRating";

function MovieCard({ movieData }) {
  const { title, posterPath, releaseDate, voteAverage } = movieData;
  const fullPosterPath = makeFullImagePath(posterPath, 185);
  const formatedDate = formatDate(releaseDate);

  return (
    <div className="bg-white rounded-md overflow-hidden flex sm:block sm:w-[185px] shadow-lg  text-black tracking-normal">
      <img src={fullPosterPath}></img>
      <div className="p-2 h-[275px] sm:h-24 flex flex-col grow justify-between items-center sm:items-start">
        <h4 className="sm:text-sm font-bold w-full sm:h-[3rem] overflow-hidden">{title}</h4>
        <div>
          <p className="text-sm">{formatedDate}</p>
          <StarRating rating={voteAverage}/>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
