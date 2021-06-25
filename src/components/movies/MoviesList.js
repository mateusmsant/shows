import React from 'react'
import { useMovie } from '../../context/movieContext';

export default function Movies() {
  const { renderMovies } = useMovie();

  return (
    <div>
      {renderMovies}
    </div>
  )
}
