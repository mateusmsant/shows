import React from "react";
import { useFavorite } from "../../context/favoriteContext";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useMovie } from "../../context/movieContext";
import { useShow } from "../../context/showContext";
import { useSearch } from "../../context/searchContext";
import { useRoot } from "../../context/rootContext";
import Heart from "react-animated-heart";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../animations";
import spinner from "../res/spinner.svg";

export default function RenderData() {
  const { activeHeart, handleHeartClick } = useFavorite();
  const { searchType } = useSearch();
  const { movies } = useMovie();
  const { shows } = useShow();
  const { loading } = useRoot();

  const isSearchTypeMovie = searchType === "movie";
  const data = isSearchTypeMovie ? movies : shows;

  const { variants, transition } = fadeInAnimation;

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <img src={spinner} alt="loading-spinner" className="spinner" />
      </div>
    );
  }

  return (
    <>
      {data &&
        data.map((item) => {
          if (item.poster_path) {
            return (
              <Grid item key={item.id} className="item">
                <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={variants}
                  transition={transition}
                >
                  <Paper elevation={1} className="paper">
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
                            handleHeartClick({
                              isMovie: isSearchTypeMovie,
                              id: item.id,
                            });
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
                </motion.div>
              </Grid>
            );
          }

          return null;
        })}
    </>
  );
}
