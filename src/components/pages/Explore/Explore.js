import Navbar from "../../componentsItem/Navbar";
import Footer from "../../componentsItem/Footer";
import love from "./../../../assets/love.svg";
import notificationBell from "./../../../assets/notification-bell.svg";

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

const women = [
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
    name: "Woman Pant"
  },
   {
    item: "B",
    name: "Bikini"
   }
];

const Explore = () => {
    return (
      <>
        <Navbar
          love={love}
          notificationBell={notificationBell}
        />
        <div className="m-3 -mb-34">
          <p className="text-2xl font-bold ml-5">Man Fashion</p>
          <div className="grid grid-cols-3 gap-3 m-2 items-center justify-center space-x-2 scrollbar-hide category">
            {men.map((man, index) => (
              <div key={index} className="text-center">
                <div>
                  <button className="h-16 text-3xl w-16 border-2 rounded-full">
                    {man.item}
                  </button>
                </div>
                <div className="text-center m-3">{man.name}</div>
              </div>
            ))}
          </div>

          <p className="text-2xl font-bold ml-5 mt-10">Woman Fashion</p>
          <div className="grid grid-cols-3 gap-3 m-2 items-center justify-center space-x-2 scrollbar-hide category">
            {women.map((woman, index) => (
              <div key={index} className="text-center">
                <div>
                  <button className="h-16 text-3xl w-16 border-2 rounded-full">
                    {woman.item}
                  </button>
                </div>
                <div className="text-center m-3">{woman.name}</div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Explore;