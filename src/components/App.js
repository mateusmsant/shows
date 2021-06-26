import React from "react";
import Navbar from "./layout/Navbar";
import Movies from "./movies/Movies";
import ApiProvider from "../context/apiContext";
import MovieProvider from "../context/movieContext";

export default function App() {
  return (
    <ApiProvider>
      <MovieProvider>
        <div className="container">
          <Navbar />
          <Movies />
        </div>
      </MovieProvider>
    </ApiProvider>
  );
}
