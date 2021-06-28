import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useApi } from "./apiContext";

interface FavoriteInterface {
  favoritesId: Array<Number>;
  setFavoritesId: Dispatch<SetStateAction<Array<Number>>>;
  favoritesData: Array<Object>;
  setFavoritesData: Dispatch<SetStateAction<Array<Object>>>;
  activeHeart: (id: number) => "true" | undefined;
  handleHeartedClick: (id: number) => void;
}

interface PropsType {
  children?: ReactElement;
}

const FavoriteContext = createContext({} as FavoriteInterface);

export default function FavoriteProvider(props: PropsType) {
  const [favoritesId, setFavoritesId] = useState([] as Number[]);
  const [favoritesData, setFavoritesData] = useState([] as Array<any>);
  const { tmdbApi } = useApi();

  const isHearted = (id: any) => favoritesId.includes(id as never);
  const activeHeart = (id: number) => (isHearted(id) ? "true" : undefined);

  const handleHeartedClick = async (id: number) => {
    if (isHearted(id)) {
      setFavoritesId(favoritesId.filter((favorite) => favorite !== id));
      setFavoritesData(favoritesData.filter((favorite) => favorite.id !== id));
    } else {
      setFavoritesId([...favoritesId, id]);
      const response = await tmdbApi.get(`movie/${id}`);
      setFavoritesData([...favoritesData, response.data]);
    }
  };
  return (
    <FavoriteContext.Provider
      value={{
        favoritesId,
        setFavoritesId,
        activeHeart,
        handleHeartedClick,
        favoritesData,
        setFavoritesData,
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
