import { useState, useContext, useEffect } from "react";
import { MovieDataContext } from "../Contexts/MovieDataContext";

import { getMoviesByPopularity } from "../APIs/tmdb";
import { extractUsableMovieData } from "../APIs/helperFunctions";

import MovieList from "./MovieList";

function PopularMovieList({isExpandable}) {
  const { onSetPopularMovies, movies } = useContext(MovieDataContext);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMostPopularMovies = async (page = 1) => {
      try {
        const popularMovieList = await getMoviesByPopularity(page);
        const cleanedPopularMovieData = extractUsableMovieData(
          popularMovieList.results
        );
        onSetPopularMovies(cleanedPopularMovieData);
      } catch (error) {
        //TODO set error in the error context
        console.log(error.message);
      }
    };
    fetchMostPopularMovies(currentPage);
  }, [currentPage, onSetPopularMovies]);

  const setPageHandler = (page) => {
    if (page > 0 && page <= 500) setCurrentPage(page);
  };

  return (
    <MovieList
      movieList={movies.popular}
      listTitle="Popular Movies"
      currentPage={currentPage}
      onSetPage={setPageHandler}
      isExpandable={isExpandable}
    />
  );
}

export default PopularMovieList;
