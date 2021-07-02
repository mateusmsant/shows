import React from "react";
import { useMovie } from "../../context/movieContext";
import { useShow } from "../../context/showContext";
import { useSearch } from "../../context/searchContext";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import SearchType from "./SearchType";

export default function Teste() {
  const { searchType } = useSearch();
  const { searchMovie, movieInput } = useMovie();
  const { searchShow, showInput } = useShow();

  const searchTypeIsMovie = searchType === "movie";

  const handleMovieSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchMovie(movieInput);
  };

  const handleShowSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchShow(showInput);
  };

  return (
    <form
      className="search"
      onSubmit={
        searchTypeIsMovie
          ? (e) => handleMovieSubmit(e)
          : (e) => handleShowSubmit(e)
      }
    >
      <SearchInput searchTypeIsMovie={searchType === "movie"} />
      <SearchType />
      {/* <SearchButton /> */}
    </form>
  );
}
