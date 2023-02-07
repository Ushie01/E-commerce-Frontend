// import Carousel, { CarouselItem } from "../../Carousel/Ca/rousel";
import { Link } from "react-router-dom";
import CarouselComponent from "../../Carousel/CarouselComponent";
import SaleSection from "./SaleSection";
import Footer from "./../../Footer";
import Navbar from "../../Navbar";
import Shirt1 from "../../../assets/1.webp";
import Shirt2 from "../../../assets/22.webp";
import collection from "../../../assets/collection.jpg";
import love from "../../../assets/love.svg";
import notificationBell from "../../../assets/notification-bell.svg";


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

const Homepage = () => {
  return (
    <div>
      <Navbar
        love={love}
        notificationBell={notificationBell}
      />
      <hr />
      <CarouselComponent
        value={true}
      />
      <section>
        <div className="flex flew-row justify-between p-3">
          <p className="text-lg text-black font-bold">Category</p>
          <p className="text-lg textColor font-bold">More Category</p>
        </div>

        <div className="flex flex-row m-3 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, index) => (
            <div key={index}>
              <div>
                <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                  {man.item}
                </button>
              </div>
              <div className="text-center m-3">{man.name}</div>
            </div>
          ))}
        </div>

        <div className="flex flew-row justify-between p-3 mt-12">
          <Link to="/Flashsale">
            <p className="text-lg text-black font-bold">Flash Sale</p>
          </Link>
          <p className="text-lg textColor font-bold">See More</p>
        </div>

        <SaleSection
          men={men}
          picture={Shirt2}
          amount={"₦1,000.00"}
          category={"Men's Regular Fit"}
          price={"₦3,000.00"}
          discount={"25% off"}
          star={false}
          deleteBin={false}
        />

        <div className="flex flew-row justify-between p-3 mt-12">
          <p className="text-lg text-black font-bold">Mega Sale</p>
          <p className="text-lg textColor font-bold">See More</p>
        </div>

        <SaleSection
          men={men}
          picture={Shirt1}
          amount={"₦1,500.00"}
          category={"Men's Regular Fit"}
          price={"₦4,000.00"}
          discount={"25% off"}
          star={false}
          deleteBin={false}
        />

        <div className="relative m-3 h-64 mt-3 rounded-lg">
          <img
            src={collection}
            alt={collection}
            className="h-60 w-full z-60 rounded-md bg-gradient-to-r from-green-400 to-blue-500"
          />
          <div className="absolute -mt-48 m-5 text-white">
            <h1 className="text-3xl font-bold">Recommendation</h1>
            <h1 className="text-3xl font-bold">Product</h1>
            <p className="mt-10 font-bold">We recommend the best for you</p>
          </div>
        </div>

        <SaleSection
          men={men}
          picture={Shirt2}
          amount={"₦1,000.00"}
          category={"Men's Regular Fit"}
          price={"₦3,000.00"}
          discount={"25% off"}
          star={false}
          deleteBin={false}
        />

        <div className="flex flex-row mt-6 m-3 mb-24 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, value) => (
            <div className="border-2 p-1 rounded-md" key={value}>
              <div className="h-72 w-44 mt-3">
                <div className="h-40 w-40 m-auto">
                  <img src={Shirt1} alt={Shirt1} />
                </div>
                <h3 className="m-2 font-extrabold break-all">Men's Regular</h3>
                <h3 className="m-2 font-extrabold break-all textColor">
                  ₦3,000.00
                </h3>
                <div className="flex flex-row m-2 items-start justify-between">
                  <s className="text-gray-500 text-sm">₦6,000.00</s>
                  <h2 className="font-red text-sm text-red-700 font-extrabold">
                    25% off
                  </h2>
                </div>
              </div>
            </div>
          ))}
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
