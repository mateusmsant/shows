import React from 'react'
import { useMovie } from '../../context/movieContext';

export default function Teste() {
  const { searchMovie, searchInput, setSearchInput } = useMovie();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(searchInput);
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}
