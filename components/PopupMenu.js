import React from "react";

function PopupMenu({ screenCoords, menuItems = [] }) {
  const items = menuItems.map((item, idx) => {
    return (
      <li
        key={idx}
        className="px-1 w-full hover:bg-slate-400 hover:text-slate-300 cursor-pointer "
        onClick={item.onClickAction}
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className="absolute py-2 w-[100px] top-10 rounded shadow-lg bg-slate-300 text-slate-900 z-10"
    >
      <ul className="flex">{items}</ul>
    </div>
  );
}

export default PopupMenu;
