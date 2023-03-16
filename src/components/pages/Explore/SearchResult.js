import { useParams } from "react-router-dom";
import { useAllProduct } from "../../../Hooks/useProduct";
import Navbar from "../../componentsItem/Navbar";
import sort from "../../../assets/sort-down.svg";
import funnel from "../../../assets/funnel.svg";
import SaleSection from "../Home/SaleSection";

const SearchResult = () => {
  const { prod } = useParams();
  const products = useAllProduct();
  const productValue = products.product?.data.products
    .filter(
      value => value.name.toLowerCase()
        .includes(prod.toLowerCase()
        )
  );

  return (
    <div>
      <Navbar
        love={sort}
        notificationBell={funnel}
      /> 
      <div className="flex flex-row items-center justify-between m-3 ">
        <p className="text-gray-400 font-bold">{`${productValue ? productValue.length : "" } Result`}</p>
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
        products={productValue}
        star={false}
        deleteBin={false}
        column={true}
      />
    </div>
  );
};

export default SearchResult;
