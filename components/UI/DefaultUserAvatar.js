import { FaUserCircle } from "react-icons/fa";

import CustomIcon from "./CustomIcon";

function DefaultUserAvatar() {
  return (
    <div className="flex cursor-pointer mr-2">
      <CustomIcon icon={<FaUserCircle />} size="2rem" />
    </div>
  );
}

export default DefaultUserAvatar;
