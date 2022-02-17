import React from "react";

const Backdrop = ({ children }) => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-800/50 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default Backdrop;
