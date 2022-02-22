import React from "react";
import DefaultUserAvatar from "./DefaultUserAvatar";

function UserHeader({ username, photoURL }) {
  return (
    <div className="flex items-center">
      {(photoURL && (
        <img src={photoURL} alt="" className="w-8 h-8 mr-4 rounded-full" />
      )) || <DefaultUserAvatar />}
      <small>{username}</small>
    </div>
  );
}

export default UserHeader;
