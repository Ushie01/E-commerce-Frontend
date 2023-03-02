import { Link, useParams } from 'react-router-dom';
import CarouselComponent from '../../Carousel/CarouselComponent';
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
import Navbar2 from '../../componentsItem/Navbar2';



const ProductDetail = () => {
  const { id } = useParams();
  const products = useAllProduct();
  const product = useSingleProduct(id);
  const productValue = product.product?.data?.product;
  const productValueDate = new Date(`
    ${productValue?.reviews[0]?.createdAt.split("T")[0]}
  `);


  // const colors = ["cyan", "red"];
    return (
      <div className="mb-24">
        {
          productValue?.name
          ?
          <>
            <Navbar2 
              image={arrow} 
              text={productValue?.name} 
              secondImage={search} 
              thirdImage={threeDots} 
              linkRoute={'/'}
              />
            <div className='flex items-center justify-center'>
                <CarouselComponent
                  image={productValue?.productGallery}
                  value={false}
                  mapCarosel={true}
                  circleClick={true}
                />
            </div>

            <div className="flex flex-row items-center justify-between m-3">
              <h1 className="text-2xl font-bold">{productValue?.name}</h1>
              <img src={love} alt={love} className="w-7 h-7" />
            </div>
            
              <Star
                value={productValue?.ratingsAverage}
                starSize={'h-6 w-6'}
              />
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

            {/* <p className="m-3 font-bold text-xl mt-6">Select Color</p>
            <div className="flex flex-row m-3 items-start justify-start space-x-2 overflow-x-auto scrollbar-hide category">
              {colors.map((color, index) => (
                <div key={index}>
                  <div>
                    <div className={`h-20 text-3xl w-20 bg-${color}-400 rounded-full`}>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            <p className="m-3 font-bold text-xl mt-6">Description</p>
              <p className="text-gray m-3">
                {productValue?.description}
            </p>
        
            <div className="flex flew-row justify-between p-3 mt-12">
              <p className="text-lg text-black font-bold">Review Product</p>
              {
                !productValue?.reviews[0]
                  ?
                  ""
                  :
                  <Link to={`/ProductReviews/${productValue?._id}`}>
                    <p className="text-lg textColor font-bold">See More</p>
                  </Link>
              }
            </div>

            {
              !productValue?.reviews[0]
                ?
                <div className="flex items-center justify-start space-x-1">
                  <Star value={0} />
                  <p className="font-bold text-md">{`(No Review)`}</p>
                </div>
                :
                <div className="flex items-center justify-start space-x-1">
                  <Star 
                      value={productValue?.ratingsAverage}
                      starSize={'h-6 w-6'}
                    />
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
                        {/* <div className="flex flex-row"> */}
                          <Star 
                              value={productValue?.reviews[0]?.rating}
                              starSize={'h-5 w-5'}  
                          />
                        {/* </div> */}
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
          <div className='flex m-3'>
            <Loader />
          </div>
        }
      </div>
    );
}

export default ProductDetail;
