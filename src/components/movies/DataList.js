import React from "react";
import { useMovie } from "../../context/movieContext";
import Grid from "@material-ui/core/Grid";
import { useShow } from "../../context/showContext";
import { useSearch } from "../../context/searchContext";

export default function DataList() {
  const { searchType } = useSearch();
  const { renderMovies } = useMovie();
  const { renderShows } = useShow();

  const isSearchTypeMovie = searchType === "movie";

  return (
    <Grid
      container
      spacing={6}
      style={{ margin: "0 auto" }}
      alignItems="center"
      justify="center"
    >
      {isSearchTypeMovie ? renderMovies : renderShows}
    </Grid>
  );
}
