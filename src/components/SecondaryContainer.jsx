import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
const SecondaryContainer = () => {
    useTopRatedMovies();
    const topRatedMovies= useSelector((store)=>store.movie.topMovie);
  return (
    <div className='-mt-32 relative z-2'>
        {topRatedMovies && (
            <MovieList title="Top Rated" movies={topRatedMovies}/>
        )}
    </div>
  )
}

export default SecondaryContainer