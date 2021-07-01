import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} nav`}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div style={{ margin: "0 auto" }}>
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="main-nav-active"
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="nav-link"
              activeClassName="main-nav-active"
            >
              Sobre
            </NavLink>
            <NavLink
              exact
              to="/favorites"
              className="nav-link"
              activeClassName="main-nav-active"
            >
              Favoritos
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
