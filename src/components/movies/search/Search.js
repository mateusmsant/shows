import React from "react";
import { useMovie } from "../../../context/movieContext";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

export default function Teste() {
  const { searchMovie, searchInput } = useMovie();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(searchInput);
  };

  return (
    <form className="search" onSubmit={(e) => handleFormSubmit(e)}>
      <SearchInput />
      <SearchButton />
    </form>
  );
}
