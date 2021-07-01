import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { useRoot } from "./rootContext";

interface FavoriteInterface {
  favoritesId: Array<any>;
  favoritesData: Array<any>;
  setFavoritesId: Dispatch<SetStateAction<Array<any>>>;
  setFavoritesData: Dispatch<SetStateAction<Array<any>>>;
  activeHeart: (id: number) => "true" | undefined;
  handleHeartClick: (id: number) => void;
  getDataFromFavoritesId: () => void;
}

interface PropsType {
  children?: ReactElement;
}

const FavoriteContext = createContext({} as FavoriteInterface);

export default function FavoriteProvider(props: PropsType) {
  const [favoritesId, setFavoritesId] = useState([] as Array<any>);
  const [favoritesData, setFavoritesData] = useState([] as Array<any>);
  const { tmdbApi } = useRoot();

  const isHearted = (id: any) =>
    favoritesId.filter((favorite) => favorite.id === id);

  const activeHeart = (id: number) =>
    isHearted(id).length !== 0 ? "true" : undefined;

  const removeFromState = (id: number) => {
    setFavoritesId(favoritesId.filter((favorite) => favorite.id !== id));
    setFavoritesData(favoritesData.filter((favorite) => favorite.id !== id));
  };

  const handleHeartClick = (data: any) => {
    const { id, isMovie } = data;

    // This handles the click on the favorites list
    if (isMovie === "REMOVE_FAVORITE") {
      removeFromState(id);
    }

    if (isHearted(id).length === 1) {
      removeFromState(id);
    } else {
      setFavoritesId([...favoritesId, data]);
    }

    // After every click, update the data in favoritesData
    getDataFromFavoritesId();
  };

  const fetchAndAddToState = async (data: any) => {
    const existsInData = favoritesData.filter(
      (favorite) => favorite.id === data.id
    );

    if (existsInData.length === 0) {
      const response = await tmdbApi.get(
        `/${data.isMovie ? "movie" : "tv"}/${data.id}`
      );
      if (response) {
        setFavoritesData([...favoritesData, response.data]);
      }
    }
  };

  const getDataFromFavoritesId = () => {
    favoritesId.map((favorite) => {
      fetchAndAddToState(favorite);
      return null;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoritesId,
        setFavoritesId,
        activeHeart,
        handleHeartClick,
        favoritesData,
        setFavoritesData,
        getDataFromFavoritesId,
      }}
    >
      {props.children}
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
