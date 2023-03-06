import Loader from "../components/componentsItem/Loading/Loader";

export const handleFavorite = ({ id, item, setStateFav }) => {
    
  if (item) {
    const existingFav = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = existingFav.map((favorite) =>
      favorite.productId === id
        ? { ...favorite, isFavorite: !favorite.isFavorite }
        : favorite
    );
    const isFav = { productId: id, isFavorite: true };
    const newFavorites = existingFav.find((favorite) => favorite.productId === id)
      ? updatedFavorites
      : [...existingFav, isFav];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    const mainFav = newFavorites.find((favorite) => favorite.productId === id);
    setStateFav(mainFav);
  } else {
    <Loader />;
  }
};

export default handleFavorite;