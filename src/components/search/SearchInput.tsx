import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDebounce } from "../../hooks";
import { useMovie } from "../../context/movieContext";
import { useShow } from "../../context/showContext";

export default function SearchInput(props: { searchTypeIsMovie?: boolean }) {
  const { searchTypeIsMovie } = props;
  const { movieInput, setMovieInput, searchMovie } = useMovie();
  const { showInput, setShowInput, searchShow } = useShow();
  const debouncedCall = useDebounce(
    searchTypeIsMovie ? searchMovie : searchShow,
    500
  );

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    if (searchTypeIsMovie) {
      setMovieInput(e.target.value);
      if (e.target.value) {
        debouncedCall(e.target.value);
      }
    } else {
      setShowInput(e.target.value);
      if (e.target.value) {
        debouncedCall(e.target.value);
      }
    }
  };

  return (
    <TextField
      label={"Pesquise"}
      variant="outlined"
      value={searchTypeIsMovie ? movieInput : showInput}
      onChange={handleInputChange}
    />
  );
}
