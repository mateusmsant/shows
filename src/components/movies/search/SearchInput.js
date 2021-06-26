import React from "react";
import TextField from "@material-ui/core/TextField";
import { useMovie } from "../../../context/movieContext";
import { useShow } from "../../../context/showContext";

export default function SearchInput({ searchTypeIsMovie }) {
  const { movieInput, setMovieInput } = useMovie();
  const { showInput, setShowInput } = useShow();

  return (
    <TextField
      label={"Pesquise"}
      variant="outlined"
      value={searchTypeIsMovie ? movieInput : showInput}
      onChange={
        searchTypeIsMovie
          ? (e) => setMovieInput(e.target.value)
          : (e) => setShowInput(e.target.value)
      }
    />
  );
}
