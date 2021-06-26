import React from "react";
import SearchForm from "./search/SearchForm";
import DataList from "./DataList";
import { Container } from "@material-ui/core";

export default function Data() {
  return (
    <Container>
      <SearchForm />
      <DataList />
    </Container>
  );
}
