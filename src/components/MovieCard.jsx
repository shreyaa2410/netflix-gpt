import React from 'react'

const MovieCard = ({poster}) => {
  return (
    <div className='w-36 md:w-48'>
        <img src={poster} alt='movie'/>
    </div>
  )
}

export default MovieCard