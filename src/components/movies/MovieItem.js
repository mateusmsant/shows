import React from "react";
import Grid from "@material-ui/core/Grid";

export default function MovieItem(props) {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
}
