import React from "react";
import Navbar from "./layout/Navbar";
import Data from "./movies/Data";
import ApiProvider from "../context/apiContext";
import MovieProvider from "../context/movieContext";
import ShowProvider from "../context/showContext";
import SearchProvider from "../context/searchContext";
import FavoriteProvider from "../context/favoriteContext";

export default function App() {
  return (
    <ApiProvider>
      <SearchProvider>
        <FavoriteProvider>
          <ShowProvider>
            <MovieProvider>
              <div className="container">
                <Navbar />
                <Data />
              </div>
            </MovieProvider>
          </ShowProvider>
        </FavoriteProvider>
      </SearchProvider>
    </ApiProvider>
  );
}
