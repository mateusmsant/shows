import React from "react";
import Grid from "@material-ui/core/Grid";
import RenderData from "./RenderData";

export default function DataList() {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ margin: "0 auto" }}
    >
      <RenderData />
    </Grid>
  );
}
