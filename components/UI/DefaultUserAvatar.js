import { FaUserCircle } from "react-icons/fa";

import CustomIcon from "./CustomIcon";

function DefaultUserAvatar() {
  return (
    <div className="cursor-pointer mr-4">
      <CustomIcon icon={<FaUserCircle />} size="2rem" />
    </div>
  );
}

export default DefaultUserAvatar;
