import React from "react";
import MenuLink from "./MenuLink";

const authLinks = [
  {
    name: "Guest Mode",
    path: "/guest-mode",
  },
  { name: "Login", path: "/login" },
];

function AuthLinks() {
  return (
    <ul className="flex">
      {authLinks.map(({ path, name }, idx) => (
        <li key={idx}>
          <MenuLink path={path}>{name}</MenuLink>
        </li>
      ))}
    </ul>
  );
}

export default AuthLinks;
