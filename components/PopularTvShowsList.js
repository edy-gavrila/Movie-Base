import { useState, useEffect, useContext } from "react";
import { extractUsableTvShowData } from "../APIs/helperFunctions";
import { getTvShowsByPopularity } from "../APIs/tmdb";

import { MovieDataContext } from "../Contexts/MovieDataContext";

import MovieList from "./MovieList";

function PopularTvShowsList() {
  const { onSetPopularTvShows, tvShows } = useContext(MovieDataContext);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMostPopularTvShows = async (page = 1) => {
      try {
        const popularTvShowsList = await getTvShowsByPopularity(page);
        const cleanedPopularTvShowsData = extractUsableTvShowData(
          popularTvShowsList.results
        );
        onSetPopularTvShows(cleanedPopularTvShowsData);
      } catch (error) {
        //TODO set error in the error context
        console.log(error.message);
      }
    };
    fetchMostPopularTvShows(currentPage);
  }, [currentPage, onSetPopularTvShows]);

  const setPageHandler = (page) => {
    if (page > 0 && page <= 500) setCurrentPage(page);
  };

  return (
    <MovieList
      movieList={tvShows.popular}
      listTitle="Popular TV Shows"
      currentPage={currentPage}
      onSetPage={setPageHandler}
    />
  );
}

export default PopularTvShowsList;
