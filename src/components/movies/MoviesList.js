import React from "react";
import { useMovie } from "../../context/movieContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export default function MoviesList() {
  const { renderMovies } = useMovie();

  return (
    <Grid container spacing={3}>
      {renderMovies}
    </Grid>
  );
}
