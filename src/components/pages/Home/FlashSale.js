import { Link } from 'react-router-dom';
import CarouselComponent from '../../Carousel/CarouselComponent';
import SaleSection from './SaleSection';
import Footer from '../../Footer';
import arrow from '../../../assets/arrow.svg';
import love from '../../../assets/love.svg';
import search from '../../../assets/search_.svg';
import Shirt2 from '../../../assets/1.webp'


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

const FlashSale = () => {
    return (
      <div>
        <div className="flex flex-row items-center justify-between p-7 border-b-2">
          <div className="flex flex-row">
            <Link to="/">
              <img src={arrow} alt={arrow} className="h-7 w-7" />
            </Link>
            <p className="text-xl font-bold ml-3">Flash Sale</p>
          </div>
          <div className="flex flex-row">
            <img src={love} alt={love} className="w-7 h-7 mr-4" />
            <img src={search} alt={search} className="w-7 h-7" />
          </div>
        </div>
        <CarouselComponent />
        <SaleSection
          men={men}
          picture={Shirt2}
          amount={"₦1,000.00"}
          category={"Men's Regular Fit"}
          price={"₦3,000.00"}
          discount={"25% off"}
          star={true}      
        />
        <SaleSection
          men={men}
          picture={Shirt2}
          amount={"₦1,000.00"}
          category={"Men's Regular Fit"}
          price={"₦3,000.00"}
          discount={"25% off"}
          star={true}
        //   className='m'
        />
        <Footer />
      </div>
    );
}

export default FlashSale;
