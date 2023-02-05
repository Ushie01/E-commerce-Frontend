import Carousel, { CarouselItem } from "../../Carousel/Carousel";
import Footer from "./../../Footer";
import Navbar from "../../Navbar";
import Shirt1 from "../../../assets/1.webp";
import Shirt2 from "../../../assets/22.webp";
import Shirt3 from "../../../assets/euphorya.jpg";
import collection from "../../../assets/collection.jpg";
import Timer from "../../Timer";

const image = [Shirt1, Shirt2, Shirt3];
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
      <Navbar />
      <hr />
      <section className="relative mt-4 h-72">
        <Carousel>
          {image.map((img, index) => (
            <CarouselItem key={index}>
              <div className="m-3 h-72 rounded-lg w-full">
                <img src={img} alt={img} className="h-72 w-full z-60 rounded" />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        <div className="absolute -mt-56 ml-10 text-3xl text-white font-bold">
          <div>
            <p>Flash Sale</p>
            <p>20% Off</p>
          </div>
          <div className="mt-12">
            <Timer />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flew-row justify-between p-3">
          <p className="text-lg text-black font-bold">Category</p>
          <p className="text-lg textColor font-bold">More Category</p>
        </div>
        {/* <div className="flex flex-row p-3 overflow-x-auto scrollbar-hide">
            <div className="h-24 w-24 border-2 rounded-full"></div>
          </div> */}
        <div className="flex flex-row m-3 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, value) => (
            <div className="text-center m-3">
              <tr>
                <th className="">
                  <button
                    key={value}
                    className="m-3 h-20 text-3xl w-20 border-2 rounded-full"
                  >
                    {man.item}
                  </button>
                </th>
              </tr>
              <tr>{man.name}</tr>
            </div>
          ))}
        </div>

        <div className="flex flew-row justify-between p-3 mt-12">
          <p className="text-lg text-black font-bold">Flash Sale</p>
          <p className="text-lg textColor font-bold">See More</p>
        </div>

        <div className="flex flex-row m-3 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, value) => (
            <div className="border-2 p-1 rounded-md">
              <div className="h-72 w-44 mt-3">
                <div className="h-40 w-40 m-auto">
                  <img src={Shirt2} alt={Shirt2} />
                </div>
                <h3 className="m-2 font-extrabold break-all">Men's Regular</h3>
                <h3 className="m-2 font-extrabold break-all textColor">
                  ₦3,000.00
                </h3>
                <div className="flex flex-row m-2 items-start justify-between">
                  <s className="text-gray-500">₦6,000.00</s>
                  <h2 className="font-red text-red-700 text-extrabold">
                    25% off
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flew-row justify-between p-3 mt-12">
          <p className="text-lg text-black font-bold">Mega Sale</p>
          <p className="text-lg textColor font-bold">See More</p>
        </div>

        <div className="flex flex-row m-3 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, value) => (
            <div className="border-2 p-1 rounded-md">
              <div className="h-72 w-44 mt-3">
                <div className="h-40 w-40 m-auto">
                  <img src={Shirt1} alt={Shirt1} />
                </div>
                <h3 className="m-2 font-extrabold break-all">Men's Regular</h3>
                <h3 className="m-2 font-extrabold break-all textColor">
                  ₦3,000.00
                </h3>
                <div className="flex flex-row m-2 items-start justify-between">
                  <s className="text-gray-500">₦6,000.00</s>
                  <h2 className="font-red text-red-700 text-bold">25% off</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
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

        <div className="flex flex-row m-3 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, value) => (
            <div className="border-2 p-1 rounded-md">
              <div className="h-72 w-44 mt-3">
                <div className="h-40 w-40 m-auto">
                  <img src={Shirt2} alt={Shirt2} />
                </div>
                <h3 className="m-2 font-extrabold break-all">Men's Regular</h3>
                <h3 className="m-2 font-extrabold break-all textColor">
                  ₦3,000.00
                </h3>
                <div className="flex flex-row m-2 items-start justify-between">
                  <s className="text-gray-500">₦6,000.00</s>
                  <h2 className="font-red text-red-700 text-extrabold">
                    25% off
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row mt-6 m-3 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, value) => (
            <div className="border-2 p-1 rounded-md">
              <div className="h-72 w-44 mt-3">
                <div className="h-40 w-40 m-auto">
                  <img src={Shirt1} alt={Shirt1} />
                </div>
                <h3 className="m-2 font-extrabold break-all">Men's Regular</h3>
                <h3 className="m-2 font-extrabold break-all textColor">
                  ₦3,000.00
                </h3>
                <div className="flex flex-row m-2 items-start justify-between">
                  <s className="text-gray-500">₦6,000.00</s>
                  <h2 className="font-red text-red-700 text-bold">25% off</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="m-3">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
