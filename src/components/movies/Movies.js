import React from "react";
import Search from "./search/Search";
import MoviesList from "./MoviesList";
import { Container } from "@material-ui/core";

export default function Movies() {
  return (
    <>
      <Search />
      <Container>
        <MoviesList />
      </Container>
    </>
  );
}
