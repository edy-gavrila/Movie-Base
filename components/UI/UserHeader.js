/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import PopupMenu from "../PopupMenu";
import DefaultUserAvatar from "./DefaultUserAvatar";

function UserHeader({ username, photoURL }) {
  const [isPopupMenuVisible, setIsPopupMenuVisible] = useState(false);
  const auth = useContext(AuthContext);

  const showPopupMenu = () => {
    setIsPopupMenuVisible(true);
  };

  const hidePopupMenu = () => {
    console.log("hidepopupmenu");
    setIsPopupMenuVisible(false);
  };

  const logoutUserHandler = () => {
    auth.onUserLogout();
  };

  return (
    <div
      className="flex items-center mr-2 relative cursor-pointer"
      tabIndex={0}
      onClick={showPopupMenu}
      onBlur={hidePopupMenu}
    >
      {(photoURL && (
        <img
          src={photoURL}
          alt="User Avatar"
          className="w-8 h-8 mr-2 rounded-full"
        />
      )) || <DefaultUserAvatar />}
      <small>{username}</small>
      {isPopupMenuVisible && (
        <PopupMenu
          menuItems={[
            {
              name: "Logout",
              onClickAction: logoutUserHandler,
            },
          ]}
        />
      )}
    </div>
  );
}

export default UserHeader;
