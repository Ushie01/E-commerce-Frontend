// import Carousel, { CarouselItem } from "../../Carousel/Ca/rousel";
import { Link } from "react-router-dom";
import CarouselComponent from "../../Carousel/CarouselComponent";
import SaleSection from "./SaleSection";
import Footer from "./../../componentsItem/Footer";
import Navbar from "../../componentsItem/Navbar";
import collection from "../../../assets/collection.jpg";
import love from "../../../assets/love.svg";
import notificationBell from "../../../assets/notification-bell.svg";
import { useAllProduct } from "../../../Hooks/useProduct";
import Loader from "../../componentsItem/Loading/Loader";


const Homepage = () => {
  const product = useAllProduct();
  if (!product) return <Loader />;

  return (
    <div>
      <Navbar love={love} notificationBell={notificationBell} />
      <hr />
      <CarouselComponent value={true} />
      <section>
        <div className="flex flew-row justify-between p-3">
          <p className="text-lg text-black font-bold">Category</p>
          <Link to="/Explore">
            <p className="text-lg textColor font-bold">More Category</p>
          </Link>
        </div>

        <div className="flex p-3 items-center justify-start space-x-2 overflow-x-auto scrollbar-hide ">
          {
            product
              ?
              <>
                {product.product?.data.products.map((prod, index) => (
                  <div key={index}>
                    <div>
                      <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                        {prod.name.split(" ")[0][0]}{prod.name.split(" ")[1][0]}
                      </button>
                    </div>
                    <div className="text-center m-3">{prod.name}</div>
                  </div>
                ))}
              </>
              :
              <div>
                <Loader />
              </div>
          }
        </div>

        <div className="flex flew-row justify-between p-3 mt-12">
          <p className="text-lg text-black font-bold">Flash Sale</p>
          <Link to="/Flashsale">
            <p className="text-lg textColor font-bold">See More</p>
          </Link>
        </div>

        <SaleSection
          products={
            product
              .product
              ?.data
              .products
              .slice(-5)
              .reverse()
          }
          star={false}
          deleteBin={false}
        />

        <div className="flex flew-row justify-between p-3 mt-12">
          <p className="text-lg text-black font-bold">Mega Sale</p>
          <Link to="/Favorite">
            <p className="text-lg textColor font-bold">See More</p>
          </Link>
        </div>

        <SaleSection
          products={
            product
              .product
              ?.data
              .products
              .sort((a, b) => b.price - a.price)
              .slice(0, 5)
          }
          star={false}
          deleteBin={false}
        />

        <div className="relative m-3 h-64 mt-3 rounded-lg">
          <img
            src={collection}
            alt={collection}
            className="h-60 w-full z-60 rounded-lg bg-gradient-to-r from-green-400 to-blue-500"
          />
          <div className="absolute -mt-48 m-5 text-white">
            <h1 className="text-3xl font-bold">Recommendation</h1>
            <h1 className="text-3xl font-bold">Product</h1>
            <p className="mt-10 font-bold">We recommend the best for you</p>
          </div>
        </div>

        <div className="mb-24">
          <SaleSection
            products={
              product
                .product
                ?.data
                .products
                .slice(0, 4)
            }
            star={false}
            deleteBin={false}
            column={true}
          />
        </div>
      </section>

      <section>
        <div className="m-6 relative">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
