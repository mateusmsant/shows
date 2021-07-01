import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { ReactElement } from "react";
import { useRoot } from "./rootContext";

interface ShowInterface {
  shows: never[];
  setShowInput: Dispatch<SetStateAction<string>>;
  searchShow: (input: string) => Promise<void>;
  showInput: string;
}

interface PropsType {
  children?: ReactElement;
}

const ShowContext = createContext({} as ShowInterface);

export default function ShowProvider(props: PropsType) {
  const [showInput, setShowInput] = useState("");
  const [shows, setShows] = useState([]);
  const { setLoading } = useRoot();

  const { tmdbApi } = useRoot();

  const searchShow = async (input: string) => {
    const response = await tmdbApi.get(`search/tv?query=${input}`);
    if (response) {
      setShows(response.data.results);
    }
    setLoading(false);
  };

  return (
    <ShowContext.Provider
      value={{ showInput, setShowInput, shows, searchShow }}
    >
      {props.children}
    </ShowContext.Provider>
  );
}

export function useShow() {
  const showContext = useContext(ShowContext);
  if (!showContext) {
    throw new Error("Missing ShowProvider");
  }
  return showContext;
}
