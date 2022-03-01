import React from "react";

function DetailsModalInnerContainer({ children }) {
  return (
    <div className="flex flex-col sm:flex-row items-center overflow-hidden bg-white xl:rounded-md shadow-lg w-full xl:w-4/5 h-full sm:h-[500px]  tracking-normal">
      {children}
    </div>
  );
}

export default DetailsModalInnerContainer;
