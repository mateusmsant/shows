import React from "react";
import RenderFavorite from "./RenderFavorite";
import { Grid } from "@material-ui/core";

export default function FavoriteList() {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ margin: "0 auto" }}
    >
      <RenderFavorite />
    </Grid>
  );
}
