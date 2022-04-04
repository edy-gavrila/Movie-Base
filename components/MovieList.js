import { useRef, useState } from "react";
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
  onSetSelectedMovieOrShow,
}) {
  const [isListExpanded, setIsListExpanded] = useState(!isExpandable);
  const containerRef = useRef();

  const expandListHandler = () => {
    setIsListExpanded(true);
  };
  const contractListHandler = () => {
    setIsListExpanded(false);
  };

  const setNextPageHandler = () => {
    onSetPage(currentPage + 1);
    scrollToListTop();
  };

  const setPreviousPageHandler = () => {
    onSetPage(currentPage - 1);
    scrollToListTop();
  };

  const scrollToListTop = () => {
    const elementTop = containerRef.current.getBoundingClientRect().top;
    const navBarOffset = 75;
    const scrollTop = window.scrollY;
    window.scrollTo(0, elementTop + scrollTop - navBarOffset);
  };

  const content = movieList.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movieData={movie}
        onSetSelectedMovieOrShow={onSetSelectedMovieOrShow}
      />
    );
  });

  const containerClasses = `container py-4 overflow-hidden relative  mb-12 ${
    isListExpanded ? "h-auto" : "h-[440px] sm:h-[455px]"
  }`;

  const isListContracted = !isListExpanded;

  return (
    <div className={containerClasses} ref={containerRef}>
      <div className="flex sm:items-center gap-8 mb-4">
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
      {isListExpanded && (
        <PageChanger
          currentPage={currentPage}
          onSetNextPage={setNextPageHandler}
          onSetPreviousPage={setPreviousPageHandler}
        />
      )}
      {isListContracted && <BottomFade />}
    </div>
  );
}

export default MovieList;
