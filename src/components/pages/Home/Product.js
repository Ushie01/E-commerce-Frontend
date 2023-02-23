import { Link, useParams } from 'react-router-dom';
import Carousel, { CarouselItem } from '../../Carousel/Carousel';
import { useAllProduct, useSingleProduct } from '../../../Hooks/useProduct';
import Loader from '../../componentsItem/Loading/Loader';
import SaleSection from './SaleSection';
import Footer from '../../componentsItem/Footer';
import Button from '../../componentsItem/Button';
import arrow from '../../../assets/arrow.svg';
import threeDots from '../../../assets/three-dots.svg';
import search from '../../../assets/search_.svg';
import love from '../../../assets/love_.svg';
import starEmpty from "./../../../assets/star.svg";
import starHalf from "./../../../assets/star-half.svg";
import starFill from "./../../../assets/star-fill.svg";
import person from "./../../../assets/account.svg";


const ProductDetail = () => {
  const { id } = useParams();
  const product = useSingleProduct(id);
  const productValue = product.product?.data?.product;
  console.log(productValue?.price);
  const products = useAllProduct();
  if (!product) return <Loader />;
  // const fil = product.product?.data.products.slice(0, 3).reverse().map(image => image.productGallery);
  // console.log(fil);

  // const men = ["X", "M", "XL", "XX"];
  const colors = ["cyan", "red"];

    return (
      <div className="mb-24">
        {
          product
          ?
          <>
            <div className="flex flex-row items-center justify-between p-5">
              <div className="flex flex-row">
                <Link to="/">
                  <img src={arrow} alt={arrow} className="h-7 w-7" />
                </Link>
                <p className="text-sm font-bold ml-3 mt-1">
                  {productValue?.name}
                </p>
              </div>
              <div className="flex flex-row">
                <img src={search} alt={search} className="w-7 h-7" />
                <img src={threeDots} alt={threeDots} className="w-7 h-7 ml-3" />
              </div>
            </div>

            <div className='flex'>
              <Carousel>
                {product.product?.data.product.productGallery.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="m-3 h-72 rounded-lg w-full">
    `                  <Link to={`http://localhost:5000/api/v1/products/${img}`}>
                        <img
                          src={`http://localhost:5000/api/v1/products/${img}`}
                          alt={`http://localhost:5000/api/v1/products/${img}`}
                          className="h-72 w-full z-60 rounded"
                        />`
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>

            <div className="flex flex-row items-center justify-between m-3">
              <h1 className="text-2xl font-bold">{productValue?.name}</h1>
              <img src={love} alt={love} className="w-7 h-7" />
            </div>
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-12">
              <img src={starFill} alt={starFill} className="w-5 h-5" />
              <img src={starFill} alt={starFill} className="w-5 h-5" />
              <img src={starFill} alt={starFill} className="w-5 h-5" />
              <img src={starHalf} alt={starHalf} className="w-5 h-5" />
              <img src={starEmpty} alt={starEmpty} className="w-5 h-5" />
            </div>
            <h1 className="font-bold text-2xl m-3 text-cyan-500">{productValue?.price}</h1>

            <p className="m-3 font-bold text-xl mt-6">Select Size</p>
            {/* <div className="flex flex-row m-3 items-start justify-start space-x-2 overflow-x-auto scrollbar-hide category">
              {productValue?.size.map((product, index) => (
                <div key={index}>
                  <div>
                    <button className="h-16 text-3xl w-16 border-2 rounded-full">
                      {product}
                    </button>
                  </div>
                </div>
              ))}
            </div> */}

            <p className="m-3 font-bold text-xl mt-6">Select Color</p>
            <div className="flex flex-row m-3 items-start justify-start space-x-2 overflow-x-auto scrollbar-hide category">
              {colors.map((color, index) => (
                <div key={index}>
                  <div>
                    <div className={`h-20 text-3xl border-2 w-20 bg-${color}-400 rounded-full`}>
                    </div>
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

        
            <div className="flex flew-row justify-between p-3 mt-12">
              <p className="text-lg text-black font-bold">Review Product</p>
              <Link to="/ProductReviews">
                <p className="text-lg textColor font-bold">See More</p>
              </Link>
            </div>

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
              <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                <img src={person} alt={person} className="w-12 h-12 m-auto" />
              </button>
              <div className="flex flex-col items-start justify-start mt-5 ml-3">
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
              products={
                products
                  .product
                  ?.data
                  .products
                  .filter(product => product.brand.toLowerCase().includes('euphorya'))
              }
              discount={"25% off"}
              star={true}
              deleteBin={false}
              column={true}
            />

            <Link to="/Cart">
              <div className='flex items-center justify-center'>
                <Button
                    text="Add To Cart"
                />
              </div>
            </Link>
            <Footer />
          </>
          :
          <Loader />
        }
      </div>
    );
}

export default ProductDetail;
