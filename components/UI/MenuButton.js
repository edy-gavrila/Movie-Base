import React from "react";

function MenuButton({ action, children }) {
  return (
    <button
      className="px-2 pb-[6px] pt-[10px] rounded-md hover:bg-slate-900 cursor-pointer text-xs"
      onClick={action}
    >
      {children}
    </button>
  );
}

export default MenuButton;
