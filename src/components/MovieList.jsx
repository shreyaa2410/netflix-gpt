import React from "react";
import MovieCard from "./MovieCard";
import { IMAGE_PATH } from "../utils/constants";
const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="px-14">
        <h2 className="pb-10 text-start text-white font-semibold">{title}</h2>
        <div className="overflow-x-auto">
          <div className=" flex gap-6  w-fit">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={IMAGE_PATH + movie.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
