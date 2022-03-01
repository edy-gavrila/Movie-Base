import { useContext, useEffect, useState } from "react";

import { extractUsableActorData } from "../APIs/helperFunctions";
import { getCharactersByPopularity } from "../APIs/tmdb";
import { MovieDataContext } from "../Contexts/MovieDataContext";

import ActorList from "./ActorList";
import BottomFade from "./UI/BottomFade";
import ListHeader from "./UI/ListHeader";
import PageChanger from "./UI/PageChanger";

function PopularActorsList({ isExpandable }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isListExpanded, setIsListExpanded] = useState(!isExpandable);
  const { onSetPopularActors, actors } = useContext(MovieDataContext);

  useEffect(() => {
    const fetchPopularActors = async (page = 1) => {
      try {
        const popularActorList = await getCharactersByPopularity(page);
        const cleanedPopularActorData = extractUsableActorData(
          popularActorList.results
        );
        onSetPopularActors(cleanedPopularActorData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPopularActors(currentPage);
  }, [onSetPopularActors, currentPage]);

  const setPageHandler = (page) => {
    if (page > 0 && page <= 500) setCurrentPage(page);
  };

  const expandListHandler = () => {
    setIsListExpanded(true);
  };
  const contractListHandler = () => {
    setIsListExpanded(false);
  };

  const setNextPageHandler = () => {
    setPageHandler(currentPage + 1);
  };
  const setPreviousPageHandler = () => {
    setPageHandler(currentPage - 1);
  };

  const isListContracted = !isListExpanded;

  const containerClasses = `container py-4 overflow-hidden relative  mb-12 ${
    isListExpanded ? "h-auto" : "h-[440px] sm:h-[455px]"
  }`;
  return (
    <section className={containerClasses}>
      <div className="flex  sm:items-center gap-8 mb-4">
        <ListHeader
          text="Popular Actors"
          isExpanded={isListExpanded}
          onExpand={expandListHandler}
          onContract={contractListHandler}
          isExpandable={isExpandable}
        />
        <PageChanger
          currentPage={currentPage}
          onSetNextPage={setNextPageHandler}
          onSetPreviousPage={setPreviousPageHandler}
        />
      </div>
      <ActorList actorData={actors.popular} isExpanded={isListExpanded} />
      {isListContracted && <BottomFade />}
      {isListExpanded && (
        <PageChanger
          currentPage={currentPage}
          onSetNextPage={setNextPageHandler}
          onSetPreviousPage={setPreviousPageHandler}
        />
      )}
    </section>
  );
}

export default PopularActorsList;
