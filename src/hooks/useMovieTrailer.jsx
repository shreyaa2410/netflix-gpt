import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useMovieTrailer = (id) => {
  const trailer = useSelector((store) => store.movie.trailerMovie);
  const dispatch = useDispatch();
  const fetchVideo = async () => {
    let data = await fetch(
     "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?language=en-US",
      OPTIONS
    );
    let json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerMovie(trailer));
  };
  useEffect(() => {
    if (!trailer) {
      fetchVideo();
    }
  }, [trailer]);
};

export default useMovieTrailer;
