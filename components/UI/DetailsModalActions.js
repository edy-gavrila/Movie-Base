import React from "react";
import CustomIcon from "./CustomIcon";
import { FaRegHeart, FaList } from "react-icons/fa";
import { RiBookmark3Line } from "react-icons/ri";
const iconSize = "1.5rem";
const iconClasses = "cursor-pointer mr-4";

function DetailsModalActions() {
  return (
    <div className="flex w-full justify-center py-2">
      <CustomIcon
        icon={<FaRegHeart />}
        size={iconSize}
        customClasses={iconClasses}
      />
      <CustomIcon
        icon={<FaList />}
        size={iconSize}
        customClasses={iconClasses}
      />
      <CustomIcon
        icon={<RiBookmark3Line />}
        size={iconSize}
        customClasses={iconClasses}
      />
    </div>
  );
}

export default DetailsModalActions;
