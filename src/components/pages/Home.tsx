import React from "react";
import SearchForm from "../search/SearchForm";
import DataList from "../data/DataList";
import { Container } from "@material-ui/core";

export default function Home() {
  return (
    <Container>
      <SearchForm />
      <DataList />
    </Container>
  );
}
