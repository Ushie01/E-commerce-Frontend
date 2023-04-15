import ScreenMsgPage from '../Explore/ScreenMsgPage';
import Navbar2 from '../../componentsItem/Navbar2';
import SaleSection from './SaleSection';
import Footer from '../../componentsItem/Footer';
import arrow from '../../../assets/arrow.svg';
import image from '../../../assets/x.svg';


const Favorite = () => {
  const productFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []; 
  const favoriteProductLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
  const uniqueProducts = [...new Map(productFromLocalStorage.map((product) => [product._id, product])).values()];
  const newFavArray = [];

  // Looping through cart and favorite in localStorage and comparing isFavorite
  for (let i = 0; i < uniqueProducts.length; i++) {
    for (let j = 0; j < favoriteProductLocalStorage.length; j++) {
      if (uniqueProducts[i]._id === favoriteProductLocalStorage[j].productId) {
        newFavArray.push({
          _id: uniqueProducts[i]._id,
          name: uniqueProducts[i].name,
          brand: uniqueProducts[i].brand,
          price: uniqueProducts[i].price,
          ratingsQuantity: uniqueProducts[i].ratingsQuantity,
          productGallery: uniqueProducts[i].productGallery,
          isFavorite: favoriteProductLocalStorage[j].isFavorite
        });
      }
    }
  }
  
    return (
      <div className='h-max mb-20'>
        {
          newFavArray.length > 0
            ?
            <>
              <Navbar2
                text={"Favorite Product"}
                image={arrow}
                linkRoute="/"
              />
              <SaleSection
                products={
                  newFavArray
                    .filter((fav) => fav.isFavorite === true)
                }
                star={false}
                deleteBin={false}
                column={true}
              />   
            </>
            :
            <div className="flex text-center mt-48 p-2">
              <ScreenMsgPage
                res="You have no favorite product selected"
                direction='Return To Home'
                image={image}
                button={true}
                linkRoute={"/"}
              />
            </div>
        }
        <Footer />
      </div>
    );
}

export default Favorite;
