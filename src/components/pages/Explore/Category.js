import Navbar2 from "../../componentsItem/Navbar2";
import arrow from './../../../assets/arrow.svg';

const items = [
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
  {
    item: "WS",
    name: "Woman Skirt",
  },
  {
    item: "D",
    name: "Dress",
  },
  {
    item: "B",
    name: "Bags",
  },
  {
    item: "F",
    name: "Footwear",
  },
  {
    item: "BM",
    name: "Bago Max",
  },
  {
    item: "CP",
    name: "Crop Top",
  },
  {
    item: "WP",
    name: "Woman Pant",
  },
  {
    item: "B",
    name: "Bikini",
  },
];

const Category = () => {
    return (
      <div>
        <Navbar2 image={arrow} text={"Category"} />
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-start m-6 text-md space-x-5 font-bold"
          >
            <div className="flex h-8 w-8 rounded-full border-gray-200 border-2">
              <p className="m-auto">{item.item}</p>
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
}

export default Category;