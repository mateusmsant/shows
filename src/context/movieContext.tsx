import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
  SetStateAction,
  Dispatch,
} from "react";
import { useRoot } from "./rootContext";

interface MovieInterface {
  movies: never[];
  setMovieInput: Dispatch<SetStateAction<string>>;
  searchMovie: (input: string) => Promise<void>;
  movieInput: string;
}

interface PropsType {
  children?: ReactElement;
}

const MovieContext = createContext({} as MovieInterface);

export default function MovieProvider(props: PropsType) {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  const { tmdbApi, setLoading } = useRoot();

  const searchMovie = async (input: string): Promise<void> => {
    const response = await tmdbApi.get(`search/movie?query=${input}`);
    if (response) {
      setMovies(response.data.results);
    }
    setLoading(false);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        searchMovie,
        movieInput,
        setMovieInput,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const movieContext = useContext(MovieContext);
  if (!movieContext) {
    throw new Error("Missing MovieProvider");
  }
  return movieContext;
}
