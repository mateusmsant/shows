import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const isHearted = (id) => favorites.includes(id);
  const activeHeart = (id) => (isHearted(id) ? "true" : undefined);

  const handleHeartedClick = (id) => {
    if (isHearted(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, setFavorites, activeHeart, handleHeartedClick }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const favoriteContext = useContext(FavoriteContext);
  if (!favoriteContext) {
    throw new Error("Missing FavoriteProvider");
  }
  return favoriteContext;
}
