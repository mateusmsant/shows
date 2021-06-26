import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
} from "react";

interface SearchInterface {
  searchType: string;
  setSearchType: Dispatch<SetStateAction<string>>;
}

interface PropsType {
  children?: ReactElement;
}

const SearchContext = createContext({} as SearchInterface);

export default function SearchProvider(props: PropsType) {
  const [searchType, setSearchType] = useState("movie");

  return (
    <SearchContext.Provider value={{ searchType, setSearchType }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error("Missing SearchProvider");
  }
  return searchContext;
}
