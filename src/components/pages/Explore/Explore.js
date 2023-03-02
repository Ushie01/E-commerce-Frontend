import { useAllProduct } from "../../../Hooks/useProduct";
import Loader from "../../componentsItem/Loading/Loader";
import Navbar from "../../componentsItem/Navbar";
import Footer from "../../componentsItem/Footer";
import Category from "../../componentsItem/Category";
import love from "./../../../assets/love.svg";
import notificationBell from "./../../../assets/notification-bell.svg";

const Explore = () => {
  const product = useAllProduct();
  if (!product) return <Loader />;
  
    return (
      <>
        <Navbar
          love={love}
          notificationBell={notificationBell}
        />
        <div className="m-3 -mb-34">
          <p className="text-2xl font-bold ml-5">Man Fashion</p>
          <Category
            column={true}
            products={
              product
              .product
              ?.data
              .products
              .filter(
                value => value
                  .category
                  .toLowerCase()
                  .includes("men".toLowerCase())
              )
            }
          />

          <p className="text-2xl font-bold ml-5 mt-10">Woman Fashion</p>
          <Category
            column={true}
            products={
              product
              .product
              ?.data
              .products
              .filter(
                value => value
                  .category
                  .toLowerCase()
                  .includes("women".toLowerCase())
              )
            }
          />

          <p className="text-2xl font-bold ml-5 mt-10">Unisex Fashion</p>
          <Category
            column={true}
            products={
              product
              .product
              ?.data
              .products
              .filter(
                value => value
                  .category
                  .toLowerCase()
                  .includes("unisex".toLowerCase())
              )
            }
          />
        </div>
        <Footer />
      </>
    );
}

export default Explore;