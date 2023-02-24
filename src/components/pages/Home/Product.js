import { Link, useParams } from 'react-router-dom';
import Carousel, { CarouselItem } from '../../Carousel/Carousel';
import { useAllProduct, useSingleProduct } from '../../../Hooks/useProduct';
import Star from '../../componentsItem/Star';
import Loader from '../../componentsItem/Loading/Loader';
import SaleSection from './SaleSection';
import Footer from '../../componentsItem/Footer';
import Button from '../../componentsItem/Button';
import arrow from '../../../assets/arrow.svg';
import threeDots from '../../../assets/three-dots.svg';
import search from '../../../assets/search_.svg';
import love from '../../../assets/love_.svg';
import person from "./../../../assets/account.svg";


const ProductDetail = () => {
  const { id } = useParams();
  const products = useAllProduct();
  const product = useSingleProduct(id);
  if (!product) return <Loader />;
  const productValue = product.product?.data?.product;
  const productValueDate = new Date(`
    ${productValue?.reviews[0]?.createdAt.split("T")[0]}
  `);
  


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
                      <Link to={`http://localhost:5000/api/v1/products/${img}`}>
                        <img
                          src={`http://localhost:5000/api/v1/products/${img}`}
                          alt={`http://localhost:5000/api/v1/products/${img}`}
                          className="h-72 w-full z-60 rounded"
                        />
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
            
            <Star value={4.5} />
           
            <h1 className="font-bold text-2xl m-3 text-cyan-500">₦{productValue?.price}</h1>

            <p className="m-3 font-bold text-xl mt-6">Select Size</p>
            <div className="flex flex-row m-3 items-start justify-start space-x-2 overflow-x-auto scrollbar-hide category">
              {productValue?.size.split(",").map((product, index) => (
                <div key={index}>
                  <div>
                    <button className="h-16 text-3xl w-16 border-2 rounded-full">
                      {product}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="m-3 font-bold text-xl mt-6">Select Color</p>
            <div className="flex flex-row m-3 items-start justify-start space-x-2 overflow-x-auto scrollbar-hide category">
              {colors.map((color, index) => (
                <div key={index}>
                  <div>
                    <div className={`h-20 text-3xl w-20 bg-${color}-400 rounded-full`}>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="m-3 font-bold text-xl mt-6">Description</p>
              <p className="text-gray m-3">
                {productValue?.description}
            </p>

        
            <div className="flex flew-row justify-between p-3 mt-12">
              <p className="text-lg text-black font-bold">Review Product</p>
                <Link to={`/ProductReviews/`}>
                  <p className="text-lg textColor font-bold">See More</p>
               </Link>
            </div>

              {
                !productValue?.reviews[0]
                  ?
                  <div className="flex items-center justify-start space-x-1">
                    <Star value={3.5} />
                    <p className="font-bold text-md">{`(No Review)`}</p>
                  </div>
                  :
                  <div className="flex items-center justify-start space-x-1">
                    <Star value={2.4} />
                    <p className="font-bold text-md">{productValue?.ratingsAverage}</p>
                    <p className="text-md">{`(${productValue?.ratingsQuantity} Reviews)`}</p>
                  </div>
              }


              {
                !productValue?.reviews[0]
                  ?
                  " "
                  :
                  <>
                    <div className="flex flex-row items-start justify-start m-3">
                      <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                        <img src={person} alt={person} className="w-12 h-12 m-auto" />
                      </button>
                      <div className="flex flex-col items-start justify-start mt-5 ml-3">
                          <p className="font-bold text-2xl">{productValue?.reviews[0]?.user?.name}</p>
                        <div className="flex flex-row">
                          <div className="flex flex-row">
                            <Star value={4.5} />
                          </div>
                            <p className="text-gray text-xs m-auto ml-3">{`
                              ${productValueDate.toLocaleString('default', { month: 'long' })} 
                              ${productValueDate.getDate()}, 
                              ${productValueDate.getFullYear()}
                            `}
                            </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray m-3 ">{productValue?.reviews[0]?.review}</p>
                  </>
              }

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
                <Button text="Add To Cart"/>
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
