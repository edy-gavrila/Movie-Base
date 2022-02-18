import Link from "next/link";
import React from "react";

function MenuLink({ path, isSelected, children }) {
  const linkPath = path ? path : "/";
  const classes = `${"p-2 rounded-md hover:bg-slate-900 cursor-pointer text-xs"} ${
    isSelected ? "bg-slate-900" : ""
  }`;
  return (
    <Link href={linkPath}>
      <a className={classes}>{children}</a>
    </Link>
  );
}

export default MenuLink;
