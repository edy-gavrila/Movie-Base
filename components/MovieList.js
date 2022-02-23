import { useState } from "react";
import BottomFade from "./UI/BottomFade";

import MovieCard from "./UI/MovieCard";
import MovieListHeader from "./UI/MovieListHeader";
import PageChanger from "./UI/PageChanger";

function MovieList({ movieList, listTitle, currentPage, onSetPage }) {
  const [isListExpanded, setIsListExpanded] = useState(false);

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

  const movieCards = movieList.map((movie) => {
    return <MovieCard key={movie.id} movieData={movie} />;
  });

  const sectionClasses = `container py-4 overflow-hidden relative  mb-12 ${
    isListExpanded ? "h-auto" : "h-[455px]"
  }`;

  const isListContracted = !isListExpanded;

  return (
    <section className={sectionClasses}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-4">
        <MovieListHeader
          text={listTitle}
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

      <div className=" flex flex-col  sm:flex-row flex-wrap gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
        {movieCards}
      </div>
      {isListContracted && <BottomFade toColor={"slate-300"} />}
    </section>
  );
}

export default MovieList;
