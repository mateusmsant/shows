import React from "react";
import { useFavorite } from "../../context/favoriteContext";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Heart from "react-animated-heart";
import Rating from "@material-ui/lab/Rating";
import { useMovie } from "../../context/movieContext";
import { useShow } from "../../context/showContext";
import { useSearch } from "../../context/searchContext";

export default function RenderData() {
  const { activeHeart, handleHeartedClick } = useFavorite();
  const { searchType } = useSearch();
  const { movies } = useMovie();
  const { shows } = useShow();

  const isSearchTypeMovie = searchType === "movie";
  const data = isSearchTypeMovie ? movies : shows;

  return (
    <>
      {data &&
        data.map((item) => {
          if (item.poster_path) {
            return (
              <Grid item key={item.id} className="item">
                <Paper elevation={1}>
                  <div>
                    <img
                      className="poster-img"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.original_title}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p>{item.original_title}</p>
                      <Heart
                        hearted={activeHeart(item.id)}
                        onClick={() => {
                          handleHeartedClick(item.id);
                        }}
                      />
                      <Rating
                        readOnly
                        defaultValue={item.vote_average}
                        max={10}
                      />
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          }

          return null;
        })}
    </>
  );
}
