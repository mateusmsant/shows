import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import RootProvider from "./context/rootContext";
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
      <Navbar />
      <AnimatePresence>
        <RootProvider>
          <SearchProvider>
            <FavoriteProvider>
              <ShowProvider>
                <MovieProvider>
                  <>
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
        </RootProvider>
      </AnimatePresence>
    </Router>
  );
}
