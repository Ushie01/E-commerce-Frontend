// import Carousel, { CarouselItem } from "../../Carousel/Ca/rousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAllProduct } from "../../../Hooks/useProduct";
import CarouselComponent from "../../Carousel/CarouselComponent";
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import SaleSection from "./SaleSection";
import Loader from "../../componentsItem/Loading/Loader";
import Category from "../../componentsItem/Category";
import Footer from "./../../componentsItem/Footer";
import Navbar from "../../componentsItem/Navbar";
import collection from "../../../assets/collection.jpg";
import love from "../../../assets/love.svg";
import notificationBell from "../../../assets/notification-bell.svg";
import empty from "../../../assets/x.svg";


const Homepage = () => {
  const [inputValue, setInputValue] = useState('');
  const product = useAllProduct();
  const productImage = product.product?.data.products.slice(0, 4).map((value) => value?.productGallery[1]);

    return (
        <div>
            <Navbar
                love={love}
                secondLink="/Favorite"
                thirdLink="/Notification"
                notificationBell={notificationBell}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <hr />
            {inputValue ? (
                <div>
                    <SaleSection
                        products={product.product?.data.products.filter((value) =>
                            value.name.toLowerCase().includes(inputValue.toLowerCase())
                        )}
                        star={false}
                        deleteBin={false}
                        column={true}
                    />
                    {product.product?.data.products.filter((value) =>
                        value.name.toLowerCase().includes(inputValue.toLowerCase())
                    )[0] ? (
                        ''
                    ) : (
                        <div className='flex items-center justify-center mt-16'>
                            <ScreenMsgPage
                                image={empty}
                                res='Product Not Found'
                            />
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <CarouselComponent
                        value={true}
                        mapCarosel={true}
                        circleClick={true}
                        image={productImage}
                    />
                    <section>
                        <div className='flex flew-row justify-between p-3'>
                            <p className='text-lg text-black font-bold'>Category</p>
                            <Link to='/Explore'>
                                <p className='text-lg textColor font-bold'>More Category</p>
                            </Link>
                        </div>

                        <div className='flex p-3 items-center justify-start space-x-2 overflow-x-auto scrollbar-hide '>
                            {product ? (
                                <Category
                                    products={product.product?.data.products.slice(0, 6)}
                                    column={false}
                                />
                            ) : (
                                <div>
                                    <Loader />
                                </div>
                            )}
                        </div>

                        <div className='flex flew-row justify-between p-3 mt-12'>
                            <p className='text-lg text-black font-bold'>Flash Sale</p>
                            <Link to='/Flashsale'>
                                <p className='text-lg textColor font-bold'>See More</p>
                            </Link>
                        </div>

                        <SaleSection
                            products={product.product?.data.products.slice(-5).reverse()}
                            star={false}
                            deleteBin={false}
                        />

                        <div className='flex flew-row justify-between p-3 mt-12'>
                            <p className='text-lg text-black font-bold'>Mega Sale</p>
                            <Link to='MegaSale'>
                                <p className='text-lg textColor font-bold'>See More</p>
                            </Link>
                        </div>

                        <SaleSection
                            products={product.product?.data.products
                                .sort((a, b) => b.price - a.price)
                                .slice(0, 5)}
                            star={false}
                            deleteBin={false}
                        />

                        <div className='relative m-3 h-64 mt-3 rounded-lg'>
                            <img
                                src={collection}
                                alt={collection}
                                className='h-60 w-full z-60 rounded-lg bg-gradient-to-r from-green-400 to-blue-500'
                            />
                            <div className='absolute -mt-48 m-5 text-white'>
                                <h1 className='text-3xl font-bold'>Recommendation</h1>
                                <h1 className='text-3xl font-bold'>Product</h1>
                                <p className='mt-10 font-bold'>
                                    We recommend the best for you
                                </p>
                            </div>
                        </div>

                        <div className='mb-24'>
                            <SaleSection
                                products={product.product?.data.products.slice(0, 5)}
                                star={false}
                                deleteBin={false}
                                column={true}
                            />
                        </div>
                    </section>
                </>
            )}

            <section>
                <div className='m-6 relative'>
                    <Footer />
                </div>
            </section>
        </div>
    );
};

export default Homepage;