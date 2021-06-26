import React, { createContext, useContext, useState } from "react";
import { useApi } from "../context/apiContext";
import { Grid } from "@material-ui/core";
import { useFavorite } from "./favoriteContext";
import Heart from "react-animated-heart";

const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");
  const { tmdbApi } = useApi();
  const { activeHeart, handleHeartedClick } = useFavorite();

  const searchMovie = async (input) => {
    const response = await tmdbApi.get(`search/movie?query=${input}`);
    setMovies(response.data.results);
  };

  const renderMovies =
    movies &&
    movies.map((movie) => {
      if (movie.poster_path) {
        return (
          <Grid item key={movie.id}>
            <div>
              <p>{movie.original_title}</p>
              <img
                className="poster-img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div>
              <Heart
                hearted={activeHeart(movie.id)}
                onClick={() => {
                  handleHeartedClick(movie.id);
                }}
              />
            </div>
          </Grid>
        );
      }

      return null;
    });

  return (
    <MovieContext.Provider
      value={{
        renderMovies,
        searchMovie,
        movieInput,
        setMovieInput,
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
