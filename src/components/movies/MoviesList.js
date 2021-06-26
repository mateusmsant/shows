import React from "react";
import Grid from "@material-ui/core/Grid";
import { useMovie } from "../../context/movieContext";

export default function MoviesList() {
  const { renderMovies } = useMovie();

  return (
    <Grid container spacing={3}>
      {renderMovies}
    </Grid>
  );
}
