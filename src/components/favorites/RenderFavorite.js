import React from "react";
import { useFavorite } from "../../context/favoriteContext";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Heart from "react-animated-heart";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../animations";

export default function RenderFavorite() {
  const { favoritesData, activeHeart, handleHeartedClick } = useFavorite();
  const { variants, transition } = fadeInAnimation;

  return (
    <>
      {favoritesData &&
        favoritesData.map((item) => {
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
                </motion.div>
              </Grid>
            );
          }

          return null;
        })}
    </>
  );
}
