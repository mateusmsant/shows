import React from "react";
import TextField from "@material-ui/core/TextField";
import { useMovie } from "../../../context/movieContext";

export default function SearchInput() {
  const { searchInput, setSearchInput } = useMovie();

  const error = false;

  return (
    <TextField
      error={error}
      id={error ? "outlined-error" : ""}
      label={error ? "Erro" : "Filme ou série"}
      variant="outlined"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
