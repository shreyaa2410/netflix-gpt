import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovie } from "../utils/movieSlice";
const useNowPlayingMovies = () => {
  const movie = useSelector((store) => store.movie.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      OPTIONS
    );
    const nowPlaying = await data.json();
    dispatch(addnowPlayingMovie(nowPlaying.results));
  };
  useEffect(() => {
   if (!movie) {
    getNowPlayingMovies();
  }
  }, []);
  
};

export default useNowPlayingMovies;
