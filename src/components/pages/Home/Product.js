import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Toast } from '../../../Hooks/useToast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAllProduct, useSingleProduct } from '../../../Hooks/useProduct';
import CarouselComponent from '../../Carousel/CarouselComponent';
import Star from '../../componentsItem/Star';
import Loader from '../../componentsItem/Loading/Loader';
import SaleSection from './SaleSection';
import Footer from '../../componentsItem/Footer';
import Button from '../../componentsItem/Button';
import Navbar2 from '../../componentsItem/Navbar2';
import Favorite from '../../../utils/favorite';
import arrow from '../../../assets/arrow.svg';
import threeDots from '../../../assets/three-dots.svg';
import search from '../../../assets/search_.svg';
import person from "./../../../assets/account.svg";



const ProductDetail = () => {
  const existingFav = JSON.parse(localStorage.getItem('favorites')) || [];
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [isClick, setIsClick] = useState('');
  const [favorite, setFavorite] = useState(existingFav);
  const products = useAllProduct();
  const product = useSingleProduct(id);
  const productValue = product.product?.data?.product;
  const productValueDate = new Date(`
    ${productValue?.reviews[0]?.createdAt.split("T")[0]}
  `);

  //Handle for selecting size
  const handleSizeClick = (productSize) => {
    setIsClick(productSize);
  };

 //Handle Submit to Cart
  const onHandleSubmit = () => {
    if (productValue) {
      if (isClick) {
        productValue.size = isClick;
        productValue.quantity = 1;
        productValue.items = productValue.price;
        productValue.totalPrice = productValue.price + 1000;
        let itemsArray = JSON.parse(localStorage.getItem('cart')) || [];
        itemsArray.push(productValue);
        localStorage.setItem('cart', JSON.stringify(itemsArray));
        setSubmitted(true);
        window.location = '/Cart';
      } else {
        Toast({
          text: 'Please select your product size',
          position: 'top-right'
        });
      }
    } else {
      return <Loader />;
    }
  };

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
              linkRoute='/'
              secondLinkRoute='/Explore'
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
                <Favorite
                  id={productValue?._id}
                  item={productValue}
                  favorite={favorite}
                  setFavorite={setFavorite}
                />
            </div>
            
            <Star
              value={productValue?.ratingsAverage}
              starSize={'h-6 w-6'}
            />
            <h1 className="font-bold text-2xl m-3 text-cyan-500">₦{`${productValue?.price.toLocaleString()}.00`}</h1>

            <p className="m-3 font-bold text-xl mt-6">Select Size</p>
            <div className="flex flex-row m-3 items-start justify-start space-x-4 overflow-x-auto scrollbar-hide category">
              {productValue?.size.split(",").map((productSize, index) => (
                <div key={index}>
                  <div>
                    <button
                      onClick={() => handleSizeClick(productSize)}
                      className={`h-16 text-3xl w-16 border-2 rounded-full ${
                        isClick === productSize ? 'bg-purple-500 text-white' : ''
                      }`}
                    >
                      {productSize}
                    </button>
                  </div>
                </div>
              ))}
            </div>
              
            <div>
              <ToastContainer />
            </div>
              
            <p className="m-3 font-bold text-xl mt-6">Description</p>
              <p className="text-gray m-3">
                {productValue?.description}
            </p>
        
            <div className="flex flew-row justify-between p-3 mt-12">
              <p className="text-lg text-black font-bold">Review Product</p>
              {
                !productValue?.reviews[0]
                  ?
                  <Link to={`/WriteReview/${productValue?._id}`}>
                    <p className="text-lg textColor font-bold">Leave A Review</p>
                  </Link>
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
                    .filter(
                      prod => prod?.name.split(" ")[0] === productValue?.name.split(" ")[0]
                    ).slice(0, 4)
              }
              discount={"25% off"}
              deleteBin={false}
              column={true}
            />

              <div className='flex items-center justify-center p-3 mt-10'>
                <Button
                  text="Add To Cart"
                  onClick={onHandleSubmit} 
                  disabled={submitted}
                  bgColor='red'
                  textColor='white'
                />
              </div>
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