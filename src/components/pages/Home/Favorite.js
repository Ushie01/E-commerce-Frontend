import ScreenMsgPage from '../Explore/ScreenMsgPage';
import Navbar2 from '../../componentsItem/Navbar2';
import SaleSection from './SaleSection';
import Footer from '../../componentsItem/Footer';
import arrow from '../../../assets/arrow.svg';
import image from '../../../assets/x.svg';


const Favorite = () => {
  const productFromLocalStorage = JSON.parse(localStorage.getItem('cart'));    
    return (
      <div className='h-max mb-20'>
        {
          productFromLocalStorage.length > 0
            ?
            <>
              <Navbar2
                text={"Favorite Product"}
                image={arrow}
                linkRoute="/"
              />
              <SaleSection
                products={productFromLocalStorage.filter(product => product.isFavorite === true)}
                star={false}
                deleteBin={false}
                column={true}
              />   
            </>
            :
            <div className="flex text-center mt-48 p-2">
              <ScreenMsgPage
                res="You have no favorite product selected"
                direction='Return To Order'
                image={image}
                button={true}
              />
            </div>
        }
        <Footer />
      </div>
    );
}

export default Favorite;
