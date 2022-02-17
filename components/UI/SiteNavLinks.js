import { useState } from "react";

import MenuLink from "./MenuLink";

const menuItems = [
  {
    name: "Movies",
    path: "/",
  },
  {
    name: "TV Shows",
    path: "/",
  },
  {
    name: "Actors",
    path: "/",
  },
];

function SiteNavLinks() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const menuLinks = menuItems.map((item, idx) => {
    const isItemSelected = idx === selectedMenuItem;
    return (
      <li key={idx} onClick={() => setSelectedMenuItem(idx)}>
        <MenuLink path={item.path} isSelected={isItemSelected}>
          {item.name}
        </MenuLink>
      </li>
    );
  });

  return <ul className="flex">{menuLinks}</ul>;
}

export default SiteNavLinks;
