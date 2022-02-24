import { useState } from "react";
import BottomFade from "./UI/BottomFade";

import MovieCard from "./UI/MovieCard";
import ListHeader from "./UI/ListHeader";
import PageChanger from "./UI/PageChanger";

function MovieList({
  movieList,
  listTitle,
  currentPage,
  onSetPage,
  isExpandable,
}) {
  const [isListExpanded, setIsListExpanded] = useState(!isExpandable);

  const expandListHandler = () => {
    setIsListExpanded(true);
  };
  const contractListHandler = () => {
    setIsListExpanded(false);
  };

  const setNextPageHandler = () => {
    onSetPage(currentPage + 1);
  };
  const setPreviousPageHandler = () => {
    onSetPage(currentPage - 1);
  };

  const content = movieList.map((movie) => {
    return <MovieCard key={movie.id} movieData={movie} />;
  });

  const containerClasses = `container py-4 overflow-hidden relative  mb-12 ${
    isListExpanded ? "h-auto" : "h-[440px] sm:h-[455px]"
  }`;

  const isListContracted = !isListExpanded;

  return (
    <div className={containerClasses}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-4">
        <ListHeader
          text={listTitle}
          isExpandable={isExpandable}
          isExpanded={isListExpanded}
          onExpand={expandListHandler}
          onContract={contractListHandler}
        />
        <PageChanger
          currentPage={currentPage}
          onSetNextPage={setNextPageHandler}
          onSetPreviousPage={setPreviousPageHandler}
        />
      </div>

      <div className=" flex flex-col  sm:flex-row flex-wrap gap-4">
        {content}
      </div>
      {isListContracted && <BottomFade toColor={"slate-300"} />}
    </div>
  );
}

export default MovieList;
