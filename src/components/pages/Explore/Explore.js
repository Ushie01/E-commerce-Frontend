import { useAllProduct } from "../../../Hooks/useProduct";
import Loader from "../../componentsItem/Loading/Loader";
import Navbar from "../../componentsItem/Navbar";
import Footer from "../../componentsItem/Footer";
import Category from "../../componentsItem/Category";
import love from "./../../../assets/love.svg";
import notificationBell from "./../../../assets/notification-bell.svg";
import { useState } from "react";

const Explore = () => {
  const product = useAllProduct();
  const [inputValue, setInputValue] = useState('');
  if (!product) return <Loader />;
  
    return (
      <>
        <Navbar
          love={love}
          notificationBell={notificationBell}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {
          inputValue
            ?
            <>
              {
                product
                  .product
                  ?.data
                  .products
                  .filter(
                      value => value
                      .name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                    )
                  .map((value, index) => (
                    <div key={index}>
                      <div className="p-4 bg-gray-100 hover:bg-gray-200" >
                        <p className="text-md font-bold">{value?.name}</p>
                      </div>
                      <hr className="border-2"/>
                    </div>
                ))
              }
            </>
            
            :
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
        }
        <Footer />
      </>
    );
}

export default Explore;