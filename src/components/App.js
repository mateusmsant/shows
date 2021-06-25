import React from 'react'
import Movies from './movies/Movies';
import ApiProvider from '../context/apiContext'
import MovieProvider from '../context/movieContext';

export default function App() {

  return (
    <ApiProvider>
      <MovieProvider>
        <Movies />
      </MovieProvider>
    </ApiProvider>
  )
}
