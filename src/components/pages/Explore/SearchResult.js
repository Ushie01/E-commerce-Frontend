import { useState } from "react";
import { useAllProduct } from "../../../Hooks/useProduct";
import Loader from "../../componentsItem/Loading/Loader";
import Navbar from "../../componentsItem/Navbar";
import sort from "../../../assets/sort-down.svg";
import funnel from "../../../assets/funnel.svg";
import SaleSection from "../Home/SaleSection";


const SearchResult = ({ inputValue }) => {
  const [valueInput, setValueInput] = useState('');
  const [value, setValue] = useState(''); 
  const products = useAllProduct();
  const product =  products.product?.data.products.filter(
    value => value.name.toLowerCase()
      .includes(inputValue.toLowerCase()
    )
  )

  // const productClick = products.product?.data.products.filter(value => value.name.toLowerCase().includes(value.toLowerCase()))

  console.log(value)
  return (
    <div>
      {
        products.product?.data.products
          ?
          <>
            <Navbar
              love={sort}
              notificationBell={funnel}
              onChange={(e) => setValueInput(e.target.value)}
            />
            {
              value 
                ?
                <>
                  <div className="flex flex-row items-center justify-between m-3 ">
                    <p className="text-gray-400 font-bold">{`${product.length} Result`}</p>
                    <select name="" id="" className="w-24 h-6">
                      <option value="man" className="w-24 h-8">
                        Man Shoes
                      </option>
                      <option value="woman" className="w-24 h-8">
                        Crop Top
                      </option>
                    </select>
                  </div>
                  <SaleSection
                    products={products.product?.data.products.filter(value => value.name.toLowerCase().includes(value.toLowerCase()))}
                    star={false}
                    deleteBin={false}
                    column={true}
                  />
                </> 
                :
                <>
                {
                  valueInput
                ?
                <>
                  {
                  products
                    .product
                    ?.data
                    .products
                      .filter(
                          value => value
                          .name
                          .toLowerCase()
                          .includes(valueInput.toLowerCase())
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
                          
                <>
                  <div className="flex flex-row items-center justify-between m-3 ">
                    <p className="text-gray-400 font-bold">{`${product.length} Result`}</p>
                    <select name="" id="" className="w-24 h-6">
                      <option value="man" className="w-24 h-8">
                        Man Shoes
                      </option>
                      <option value="woman" className="w-24 h-8">
                        Crop Top
                      </option>
                    </select>
                  </div>
                  <SaleSection
                    products={product}
                    star={false}
                    deleteBin={false}
                    column={true}
                  />
                </> 
                }
              </>
                }
                </>
                :
                <>
              <Loader />
               </>
      }
    </div>
  );
};

export default SearchResult;
