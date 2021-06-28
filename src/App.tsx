import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import ApiProvider from "./context/apiContext";
import MovieProvider from "./context/movieContext";
import ShowProvider from "./context/showContext";
import SearchProvider from "./context/searchContext";
import FavoriteProvider from "./context/favoriteContext";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Favorites from "./components/pages/Favorites";

export default function App() {
  return (
    <Router>
      <ApiProvider>
        <SearchProvider>
          <FavoriteProvider>
            <ShowProvider>
              <MovieProvider>
                <AnimatePresence>
                  <Navbar />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/favorites" component={Favorites} />
                  </Switch>
                </AnimatePresence>
              </MovieProvider>
            </ShowProvider>
          </FavoriteProvider>
        </SearchProvider>
      </ApiProvider>
    </Router>
  );
}
