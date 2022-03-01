import { useContext, useState } from "react";
import { AppStateContext } from "../../Contexts/AppStateContext";
import { AuthContext } from "../../Contexts/AuthContext";

import MenuLink from "./MenuLink";

const menuItems = [
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "TV Shows",
    path: "/tv-shows",
  },
  {
    name: "Actors",
    path: "/actors",
  },
];

function SiteNavLinks() {
  const { selectedMenuItemIndex } = useContext(AppStateContext);
  const { isAuthenticated } = useContext(AuthContext);
  const menuLinks = menuItems.map((item, idx) => {
    const isItemSelected = idx + 1 === selectedMenuItemIndex;
    return (
      <li key={idx}>
        <MenuLink path={item.path} isSelected={isItemSelected}>
          {item.name}
        </MenuLink>
      </li>
    );
  });

  return (
    <ul className="flex gap-1 flex-1 items-center">
      {menuLinks}
      {isAuthenticated && (
        <li>
          <MenuLink
            path="./my-lists"
            isSelected={selectedMenuItemIndex === menuItems.length + 1}
          >
            {"My Lists"}
          </MenuLink>
        </li>
      )}
    </ul>
  );
}

export default SiteNavLinks;
