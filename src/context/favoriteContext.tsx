import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface FavoriteInterface {
  favorites: Number[];
  setFavorites: Dispatch<SetStateAction<any>>;
  activeHeart: (id: number) => "true" | undefined;
  handleHeartedClick: (id: number) => void;
}

interface PropsType {
  children?: ReactElement;
}

const FavoriteContext = createContext({} as FavoriteInterface);

export default function FavoriteProvider(props: PropsType) {
  const [favorites, setFavorites] = useState([] as Number[]);

  const isHearted = (id: any) => favorites.includes(id as never);
  const activeHeart = (id: number) => (isHearted(id) ? "true" : undefined);

  const handleHeartedClick = (id: number) => {
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
