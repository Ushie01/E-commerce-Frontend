import Navbar from "./../../Navbar";
import Carousel, { CarouselItem } from "../../Carousel/Carousel";
import Shirt1 from "../../../assets/1.webp";
import Shirt2 from "../../../assets/22.webp";
import Shirt3 from "../../../assets/euphorya.jpg"
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
                  <img
                    src={img}
                    alt={img}
                    className="h-72 w-full z-60 rounded"
                  />
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
          <div className="flex flex-row items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
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
        </section>
      </div>
    );
}

export default Homepage;