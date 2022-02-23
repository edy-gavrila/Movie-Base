import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import CustomIcon from "./CustomIcon";

function StarRating({ rating }) {
  const numberOfFullStars = Math.floor(rating / 2);
  const hasHalfStar = rating / 2 - numberOfFullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numberOfFullStars) {
      stars.push(
        <CustomIcon
          icon={<BsStarFill />}
          customClasses="text-amber-500 mr-px"
          size={"1rem"}
          key={i}
        />
      );
    } else if (i === numberOfFullStars && hasHalfStar) {
      stars.push(
        <CustomIcon
          icon={<BsStarHalf />}
          customClasses="text-amber-500 mr-px"
          size={"1rem"}
          key={i}
        />
      );
    } else {
      stars.push(
        <CustomIcon
          icon={<BsStar />}
          customClasses="text-amber-500 mr-px"
          size={"1rem"}
          key={i}
        />
      );
    }
  }
  return (
    <div className="flex">
      {stars}
    </div>
  );
}

export default StarRating;
