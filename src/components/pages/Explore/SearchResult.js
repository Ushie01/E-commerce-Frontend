import Navbar from "../../componentsItem/Navbar";
import sort from "../../../assets/sort-down.svg";
import funnel from "../../../assets/funnel.svg";
import SaleSection from "../Home/SaleSection";
import Shirt2 from "./../../../assets/1.webp";
import ScreenMsgPage from "./ScreenMsgPage";
import x from './../../../assets/x.svg';

const men = [
  {
    item: "S",
    name: "Man Shirt",
  },
  {
    item: "D",
    name: "Dress",
  },
  {
    item: "U",
    name: "Men Bag",
  },
  {
    item: "B",
    name: "Footwear",
  },
  {
    item: "BM",
    name: "Bago Max",
  },
  {
    item: "BP",
    name: "Pant",
  },
];

const SearchResult = () => {
  return (
    <div>
      <Navbar love={sort} notificationBell={funnel} />
      <ScreenMsgPage
        res={"Product Not Found"}
        direction={"Back To Home"}
        image={x}
        
      />
      <div className="flex flex-row items-center justify-between m-3 ">
        <p className="text-gray-400 font-bold">145 Result</p>
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
        men={men}
        picture={Shirt2}
        amount={"₦1,000.00"}
        category={"Men's Regular Fit"}
        price={"₦3,000.00"}
        discount={"25% off"}
        star={true}
        deleteBin={false}
        column={false}
      />
    </div>
  );
};

export default SearchResult;
