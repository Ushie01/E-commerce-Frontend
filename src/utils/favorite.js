import Loader from "../components/componentsItem/Loading/Loader";
import notFavorite from './../assets/love.svg';
import favoriteImage from './../assets/heart-fill.svg';

const Favorite = ({id, item,  favorite, setFavorite}) => {
  const favoriteHandle = () => {
    if (item) {
      const existingFav = JSON.parse(localStorage.getItem('favorites')) || [];
      const updatedFavorites = existingFav.map((favorite) => {
        if (favorite.productId === id) {
          return { ...favorite, isFavorite: !favorite.isFavorite };
        } else {
          return favorite;
        }
      });
      const isFav = { productId: id, isFavorite: true };
      const newFavorites = existingFav.find((favorite) => favorite.productId === id)
        ? updatedFavorites
        : [...existingFav, isFav];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorite(newFavorites);
    } else {
      <Loader />
    }
  };
  return (
    <button
      onClick={() => favoriteHandle(id)}
    >
        {
          favorite.length > 0 && favorite.find((f) => f.productId === id)
            ? <img
                src={favorite.find((f) => f.productId === id).isFavorite ? favoriteImage : notFavorite}
                alt={favorite.find((f) => f.productId === id).isFavorite ? favoriteImage : notFavorite}
                className="h-7 w-7"
              />  
            : <img
                src={notFavorite}
                alt={notFavorite}
                className="h-7 w-7" 
              />
        }
  </button>
  )
}

export default Favorite;