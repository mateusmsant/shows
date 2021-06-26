import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import ApiProvider from "../context/apiContext";
import MovieProvider from "../context/movieContext";
import ShowProvider from "../context/showContext";
import SearchProvider from "../context/searchContext";
import FavoriteProvider from "../context/favoriteContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Router>
      <ApiProvider>
        <SearchProvider>
          <FavoriteProvider>
            <ShowProvider>
              <MovieProvider>
                <>
                  <Navbar />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/favorites" component={Favorites} />
                  </Switch>
                </>
              </MovieProvider>
            </ShowProvider>
          </FavoriteProvider>
        </SearchProvider>
      </ApiProvider>
    </Router>
  );
}
