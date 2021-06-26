import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchType, setSearchType] = useState("movie");

  return (
    <SearchContext.Provider value={{ searchType, setSearchType }}>
      {children}
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
