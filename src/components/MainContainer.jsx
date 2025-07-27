import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  if(!movies)return;
  const { original_title, overview, id } = movies[0];
  return (
    <>
    <div className="hero relative flex justify-start items-center">
      <VideoBackground id={id} />
      <div className="w-[80%] absolute text-white px-[60px] py-[20px] text-left z-[2]">
        <h3>{original_title}</h3>
        <p>{overview}</p>
      </div>
    </div>
    </>
  );
};

export default MainContainer;
