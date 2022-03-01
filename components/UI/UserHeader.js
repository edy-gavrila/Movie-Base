import React from "react";
import DefaultUserAvatar from "./DefaultUserAvatar";

function UserHeader({ username, photoURL }) {
  return (
    <div className="flex items-center mr-2">
      {(photoURL && (
        <img
          src={photoURL}
          alt="User Avatar"
          className="w-8 h-8 mr-2 rounded-full "
        />
      )) || <DefaultUserAvatar />}
      <small>{username}</small>
    </div>
  );
}

export default UserHeader;
