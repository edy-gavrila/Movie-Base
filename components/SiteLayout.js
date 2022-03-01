import React, { useContext } from "react";
import { AppStateContext } from "../Contexts/AppStateContext";
import { MovieDataContext } from "../Contexts/MovieDataContext";

import Footer from "./Footer";
import Header from "./Header";
import MovieDetailsModal from "./MovieDetailsModal";
import TvShowDetailsModal from "./TvShowDetailsModal";

function SiteLayout({ children }) {
  const { isDetailsModalVisible } = useContext(AppStateContext);
  const { selectedMovieOrShow, selectedActor } = useContext(MovieDataContext);
  return (
    <div className=" bg-slate-300 flex flex-col font-sourceSans tracking-wider text-slate-600 min-h-screen min-w-[360px]">
      <Header />
      <main className="container grow px-2 sm:px-0">{children}</main>
      {isDetailsModalVisible &&
        selectedMovieOrShow &&
        selectedMovieOrShow.type === "movie" && (
          <MovieDetailsModal movieData={selectedMovieOrShow} />
        )}
      {isDetailsModalVisible &&
        selectedMovieOrShow &&
        selectedMovieOrShow.type === "tvShow" && (
          <TvShowDetailsModal tvShowData={selectedMovieOrShow} />
        )}
      <Footer />
    </div>
  );
}

export default SiteLayout;
