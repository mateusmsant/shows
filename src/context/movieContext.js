import React, { createContext, useContext, useState } from "react";
import { useApi } from '../context/apiContext'

const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const { tmdbApi } = useApi();

  const searchMovie = async (input) => {
    const response = await tmdbApi.get(`search/movie?query=${input}`);
    setMovies(response.data.results);
  }


  const renderMovies = movies && movies.map((movie) => {
    return (
      <div key={movie.id}>
        <p>{movie.original_title}</p>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      </div>
    )
  })

  return (
    <MovieContext.Provider
      value={{
        renderMovies, searchMovie, searchInput, setSearchInput
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const movieContext = useContext(MovieContext);
  if (!movieContext) {
    throw new Error("Missing MovieProvider");
  }
  return movieContext;
}
