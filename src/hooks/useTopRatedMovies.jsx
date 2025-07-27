import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopMovie } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  const movie = useSelector((store) => store.movie.topMovie);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      OPTIONS
    );
    const topRated = await data.json();
    dispatch(addTopMovie(topRated.results));
  };
  useEffect(() => {
   if (!movie) {
    getNowPlayingMovies();
  }
  }, []);
  
};

export default useTopRatedMovies;
