import React, { createContext, useContext, useState } from "react";
import { useApi } from "../context/apiContext";
import { Grid } from "@material-ui/core";
import Heart from "react-animated-heart";
import { useFavorite } from "./favoriteContext";

const ShowContext = createContext();

export default function ShowProvider({ children }) {
  const [showInput, setShowInput] = useState("");
  const [shows, setShows] = useState([]);
  const { activeHeart, handleHeartedClick } = useFavorite();

  const { tmdbApi } = useApi();

  const searchShow = async (input) => {
    const response = await tmdbApi.get(`search/tv?query=${input}`);
    setShows(response.data.results);
  };

  const renderShows =
    shows &&
    shows.map((show) => {
      if (show.poster_path) {
        return (
          <Grid item key={show.id}>
            <div>
              <p>{show.original_title}</p>
              <img
                className="poster-img"
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.original_title}
              />
            </div>
            <div>
              <Heart
                hearted={activeHeart(show.id)}
                onClick={() => {
                  handleHeartedClick(show.id);
                }}
              />
            </div>
          </Grid>
        );
      }

      return null;
    });

  return (
    <ShowContext.Provider
      value={{ showInput, setShowInput, shows, searchShow, renderShows }}
    >
      {children}
    </ShowContext.Provider>
  );
}

export function useShow() {
  const showContext = useContext(ShowContext);
  if (!showContext) {
    throw new Error("Missing ShowProvider");
  }
  return showContext;
}
