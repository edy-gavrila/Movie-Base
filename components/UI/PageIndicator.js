import React from "react";

function PageIndicator({ currentPage, firstPage, lastPage }) {
  const showFirstPage = currentPage - 2 >= firstPage;
  const showSecondPage = currentPage - 1 >= firstPage;
  const showAdditionalPageNumber1 = !showFirstPage;
  const showAdditionalPageNumber2 = !showSecondPage;
  const showSecondToLastPage = currentPage + 1 <= lastPage;
  const showLastPage = currentPage + 2 <= lastPage;

  return (
    <div className="text-cyan-600 text-sm flex gap-px items-center ">
      {showFirstPage && <span>{currentPage - 2}</span>}
      {showSecondPage && <span>{currentPage - 1}</span>}
      <span className="font-bold text-base">{currentPage}</span>
      {showSecondToLastPage && <span>{currentPage + 1}</span>}
      {showLastPage && <span>{currentPage + 2}</span>}
      {showAdditionalPageNumber1 && <span>{currentPage + 3}</span>}
      {showAdditionalPageNumber2 && <span>{currentPage + 4}</span>}
    </div>
  );
}

export default PageIndicator;
