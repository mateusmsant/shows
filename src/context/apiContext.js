import React, { createContext, useContext } from "react";
import axios from 'axios';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '30540b347aa0e1bf389387ac8b7c3d85'
    }
  })

  return (
    <ApiContext.Provider
      value={{
        tmdbApi
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  const apiContext = useContext(ApiContext);
  if (!apiContext) {
    throw new Error("Missing ApiProvider");
  }
  return apiContext;
}
