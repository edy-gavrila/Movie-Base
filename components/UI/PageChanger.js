import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CustomIcon from "./CustomIcon";
import PageIndicator from "./PageIndicator";
function PageChanger({ currentPage, onSetPreviousPage, onSetNextPage }) {
  return (
    <div className="flex items-center">
      <div className="cursor-pointer mt-2  p-1" onClick={onSetPreviousPage}>
        <CustomIcon icon={<FiChevronLeft />} size="1.5rem" />
      </div>

      <PageIndicator currentPage={currentPage} firstPage={1} lastPage={500} />
      <div className="cursor-pointer mt-2 p-1" onClick={onSetNextPage}>
        <CustomIcon icon={<FiChevronRight />} size="1.5rem" />
      </div>
    </div>
  );
}

export default PageChanger;
