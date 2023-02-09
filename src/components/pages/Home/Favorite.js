import Navbar2 from '../../componentsItem/Navbar2';
import SaleSection from './SaleSection';
import Footer from '../../componentsItem/Footer';
import Shirt2 from '../../../assets/1.webp';
import arrow from '../../../assets/arrow.svg';


const men = [
  {
    item: "S",
    name: "Man Shirt",
  },
  {
    item: "D",
    name: "Dress",
  },
  {
    item: "U",
    name: "Men Bag",
  },
  {
    item: "B",
    name: "Footwear",
  },
  {
    item: "BM",
    name: "Bago Max",
  },
  {
    item: "BP",
    name: "Pant",
  },
];

const Favorite = () => {
    return (
      <div className='h-max mb-20'>
        <Navbar2 text={"Favorite Product"} image={arrow} />
        <SaleSection
          men={men}
          picture={Shirt2}
          amount={"₦1,000.00"}
          category={"Men's Regular Fit"}
          price={"₦3,000.00"}
          discount={"25% off"}
          star={true}    
          deleteBin={true}
        />
        <SaleSection
          men={men}
          picture={Shirt2}
          amount={"₦1,000.00"}
          category={"Men's Regular Fit"}
          price={"₦3,000.00"}
          discount={"25% off"}
          star={true}
          deleteBin={true}
        />
        <Footer />
      </div>
    );
}

export default Favorite;
