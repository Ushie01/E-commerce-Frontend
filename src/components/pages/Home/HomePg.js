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
<<<<<<< HEAD
<<<<<<< HEAD
  if (!product) return <Loader />;

=======
=======
>>>>>>> origin/master
  const fil = product.product?.data.products.slice(-6).reverse();
  console.log(fil);
  if (!product) return <Loader />;


<<<<<<< HEAD
>>>>>>> c23831efd2f7ca7ffc76074a390743cd9c14b792
=======
>>>>>>> origin/master
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
                {product.product?.data.products.map((man, index) => (
                  <div key={index}>
                    <div>
                      <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                        {man.name.split(" ")[0][0]}{man.name.split(" ")[1][0]}
                      </button>
                    </div>
                    <div className="text-center m-3">{man.name}</div>
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
<<<<<<< HEAD
<<<<<<< HEAD
          products={
            product
              .product
              ?.data
              .products
              .slice(-5)
              .reverse()
          }
=======
          men={product.product?.data.products.slice(-5).reverse()}
>>>>>>> c23831efd2f7ca7ffc76074a390743cd9c14b792
=======
          men={product.product?.data.products.slice(-5).reverse()}
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
          products={
            product
              .product
              ?.data
              .products
              .sort((a, b) => b.price - a.price)
              .slice(0, 5)
          }
=======
          men={product.product?.data.products}
>>>>>>> c23831efd2f7ca7ffc76074a390743cd9c14b792
=======
          men={product.product?.data.products}
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
            products={
              product
                .product
                ?.data
                .products
                .slice(0, 4)
            }
=======
            men={product.product?.data.products.slice(0,4)}
>>>>>>> c23831efd2f7ca7ffc76074a390743cd9c14b792
=======
            men={product.product?.data.products.slice(0,4)}
>>>>>>> origin/master
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
