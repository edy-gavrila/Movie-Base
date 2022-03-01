import React, { useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  disableBodyScrolling,
  enableBodyScrolling,
} from "../../APIs/helperFunctions";
import { AppStateContext } from "../../Contexts/AppStateContext";
import CustomIcon from "./CustomIcon";

const Backdrop = ({ children }) => {
  const { onHideDetailsModal } = useContext(AppStateContext);
  const closeButtonClickHandler = () => {
    onHideDetailsModal();
    enableBodyScrolling();
  };

  useEffect(() => {
    disableBodyScrolling();
    return () => {
      enableBodyScrolling();
    };
  }, []);
  return (
    <div
    className="fixed flex-col justify-between flex items-center sm:justify-center top-0 bottom-0 right-0 left-0 bg-slate-800/50 backdrop-blur-sm"
    >
      {children}
      <button
        className="text-white absolute right-4 top-4 bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center sm:hover:bg-slate-900"
        type="button"
        onClick={closeButtonClickHandler}
      >
        <CustomIcon icon={<FaTimes />} size="1.1rem" />
      </button>
    </div>
  );
};

export default Backdrop;
