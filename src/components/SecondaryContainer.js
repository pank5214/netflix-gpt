import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <Link to={"/watch"}>
          <div className="md:-mt-64 relative z-10 md:pl-8">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Documentary"} movies={movies.topRatedMovies} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
            <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
          </div>
        </Link>
      </div>
    )
  );
};

export default SecondaryContainer;
