import { Link } from 'react-router-dom';
import CarouselComponent from '../../Carousel/CarouselComponent';
import SaleSection from './SaleSection';
import Footer from '../../Footer';
import Button from '../../Button';
import arrow from '../../../assets/arrow.svg';
import threeDots from '../../../assets/three-dots.svg';
import search from '../../../assets/search_.svg';
import love from '../../../assets/love_.svg';
import starEmpty from "./../../../assets/star.svg";
import starHalf from "./../../../assets/star-half.svg";
import starFill from "./../../../assets/star-fill.svg";
import person from "./../../../assets/account.svg";
import Shirt2 from '../../../assets/1.webp'


const men = [
  {
    item: "x"
  },
  {
    item: "M"
  },
  {
    item: "XL"
  },
  {
    item: "XX"
  }
];

const colors = [
    {
        item: "green"
    },
    {
        item: "red"
    },
    {
        item: "purple"
    },
    {
        item: "cyan"
    },
    {
        item: "orange"
    }
];

const ProductDetail = () => {
    return (
      <div className="mb-24">
        <div className="flex flex-row items-center justify-between p-5">
          <div className="flex flex-row">
            <Link to="/">
              <img src={arrow} alt={arrow} className="h-7 w-7" />
            </Link>
            <p className="text-sm font-bold ml-3 mt-1">
              Men's Regular Fit T-Shirt
            </p>
          </div>
          <div className="flex flex-row">
            <img src={search} alt={search} className="w-7 h-7" />
            <img src={threeDots} alt={threeDots} className="w-7 h-7 ml-3" />
          </div>
        </div>
        <CarouselComponent />
        <div className="flex flex-row items-center justify-between m-3">
          <h1 className="text-2xl font-bold">Men's Regular Fit T-Shirt</h1>
          <img src={love} alt={love} className="w-7 h-7" />
        </div>
        <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-12">
          <img src={starFill} alt={starFill} className="w-5 h-5" />
          <img src={starFill} alt={starFill} className="w-5 h-5" />
          <img src={starFill} alt={starFill} className="w-5 h-5" />
          <img src={starHalf} alt={starHalf} className="w-5 h-5" />
          <img src={starEmpty} alt={starEmpty} className="w-5 h-5" />
        </div>
        <h1 className="font-bold text-2xl m-3 text-cyan-500">₦4,000.00</h1>

        <p className="m-3 font-bold text-xl mt-6">Select Size</p>
        <div className="flex flex-row items-start justify-start space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, index) => (
            <div key={index}>
              <div>
                <button className="m-2 h-20 text-2xl w-16 h-16 border-2 rounded-full">
                  {man.item}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="m-3 font-bold text-xl mt-6">Select Color</p>
        <div className="flex flex-row items-start justify-start space-x-2 overflow-x-auto scrollbar-hide category">
          {colors.map((man, index) => (
            <div key={index}>
              <div>
                <button
                  className={`m-2 h-20 text-3xl w-16 h-16 border-2 rounded-full bg-${man.item}-700`}
                ></button>
              </div>
            </div>
          ))}
        </div>

        <p className="m-3 font-bold text-xl mt-6">Description</p>
        <p className="text-gray m-3">
          Template string literal are natively supported by all major browser
          vendors (except Internet Explorer). So it is pretty safe to use in
          your production code. A more detailed list of the browser
          compatibilities can be found
        </p>

        <p className="m-3 font-bold text-xl mt-12">Review Product</p>
        <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
          <img src={starFill} alt={starFill} className="w-5 h-5" />
          <img src={starFill} alt={starFill} className="w-5 h-5" />
          <img src={starFill} alt={starFill} className="w-5 h-5" />
          <img src={starHalf} alt={starHalf} className="w-5 h-5" />
          <img src={starEmpty} alt={starEmpty} className="w-5 h-5" />
          <p className="font-bold text-md">3.5</p>
          <p className="text-md">(5 Reviews)</p>
        </div>

        <div className="flex flex-row items-start justify-start m-3 borde">
          <Link
            to="#"
            className={`h-20 text-3xl w-16 h-16 border-2 rounded-full`}
          >
            <img src={person} alt={person} className="w-12 h-12 m-auto" />
          </Link>
          <div className="flex flex-col items-start justify-start ml-3">
            <p className="font-bold text-2xl">Rekureku Judith</p>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" />
              </div>
              <p className="text-gray text-xs m-auto ml-3">December 10, 2022</p>
            </div>
          </div>
        </div>
        <p className="text-gray m-3 ">
          air max are always very comfortable fit, clean and just perfect in
          every way. just the box was too small and scrunched the sneakers up a
          little bit, not sure if the box was always this small but the 90s are
          and will always be one of my favorites.
        </p>

        <p className="m-3 font-bold text-xl mt-12">You May Also Like</p>

        <SaleSection
          men={men}
          picture={Shirt2}
          amount={"₦1,000.00"}
          category={"Men's Regular Fit"}
          price={"₦3,000.00"}
          discount={"25% off"}
          star={true}
          deleteBin={false}
        />

        <div className='flex items-center justify-center'>
          <Button />
        </div>
        <Footer />
      </div>
    );
}

export default ProductDetail;
