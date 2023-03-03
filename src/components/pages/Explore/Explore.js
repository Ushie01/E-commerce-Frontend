import { useAllProduct } from "../../../Hooks/useProduct";
import Loader from "../../componentsItem/Loading/Loader";
import Navbar from "../../componentsItem/Navbar";
import Footer from "../../componentsItem/Footer";
import Category from "../../componentsItem/Category";
import SearchResult from "./SearchResult";
import love from "./../../../assets/love.svg";
import notificationBell from "./../../../assets/notification-bell.svg";
import { useState } from "react";

const Explore = () => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');
  const product = useAllProduct();
  if (!product) return <Loader />;
  const productItems = product.product?.data.products;
  console.log(productItems)

  
  
    return (
      <>
        {
          product.product?.data.products
          ?
          !value
            ?
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
                productItems
                  .filter(
                      value => value
                      .name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                    )
                  .map((value, index) => (
                    <div key={index}>
                      <div className="p-4 bg-gray-100 hover:bg-gray-200"
                        onClick={() => setValue(value?.name)}
                      >
                        <p className="text-md font-bold" >{value?.name}</p>
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
                  productItems
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
                  productItems
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
                  productItems
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
            </>
            :
            <SearchResult
              products={product.product?.data.products}
              inputValue={value}
            />
            :
           <Loader />
        }
        <Footer />
      </>
    );
}

export default Explore;