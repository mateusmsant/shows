import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import axios, { AxiosInstance } from "axios";

interface RootInterface {
  tmdbApi: AxiosInstance;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface PropsType {
  children?: ReactElement;
}

const RootContext = createContext({} as RootInterface);

export default function RootProvider(props: PropsType) {
  const [loading, setLoading] = useState(false);

  const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: "30540b347aa0e1bf389387ac8b7c3d85",
    },
  });

  return (
    <RootContext.Provider
      value={{
        tmdbApi,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}

export function useRoot() {
  const rootContext = useContext(RootContext);
  if (!rootContext) {
    throw new Error("Missing RootProvider");
  }
  return rootContext;
}
