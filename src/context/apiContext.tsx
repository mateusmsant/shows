import React, { createContext, ReactElement, useContext } from "react";
import axios, { AxiosInstance } from "axios";

interface ApiInterface {
  tmdbApi: AxiosInstance;
}

interface PropsType {
  children?: ReactElement;
}

const ApiContext = createContext({} as ApiInterface);

export default function ApiProvider(props: PropsType) {
  const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: "30540b347aa0e1bf389387ac8b7c3d85",
    },
  });

  return (
    <ApiContext.Provider
      value={{
        tmdbApi,
      }}
    >
      {props.children}
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
